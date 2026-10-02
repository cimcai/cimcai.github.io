// Managed by cimcai/website-main: publication PDF synchronization.
import { createHash } from "node:crypto"
import {
  lstat,
  mkdir,
  readFile,
  readdir,
  rename,
  rm,
  writeFile,
} from "node:fs/promises"
import { join, resolve } from "node:path"
import { pathToFileURL } from "node:url"

const MANIFEST = "pdf-manifest.json"
const MAX_PDF_BYTES = 25 * 1024 * 1024
const MAX_TOTAL_BYTES = 500 * 1024 * 1024
const UUID = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/
const SHA256 = /^[a-f0-9]{64}$/
const digest = (bytes) => createHash("sha256").update(bytes).digest("hex")

export function validateFilename(value) {
  if (
    typeof value !== "string" ||
    value.length > 200 ||
    !/^[A-Za-z0-9][A-Za-z0-9._-]*\.pdf$/i.test(value) ||
    value.includes("..")
  ) {
    throw new Error(
      "Published PDF filename must be a safe ASCII basename ending in .pdf (maximum 200 characters)",
    )
  }
  return value
}

export function validateConfig(config) {
  const url = new URL(config.url)
  if (
    url.protocol !== "https:" ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error("Publishing backend must be an HTTPS origin")
  }
  const key = config.anonKey
  let publicKey =
    typeof key === "string" && /^sb_publishable_[A-Za-z0-9_-]+$/.test(key)
  if (!publicKey && typeof key === "string" && key.split(".").length === 3) {
    try {
      publicKey =
        JSON.parse(Buffer.from(key.split(".")[1], "base64url").toString())
          .role === "anon"
    } catch {
      /* Invalid JWTs are rejected below. */
    }
  }
  if (!publicKey)
    throw new Error(
      "PDF synchronization requires a public publishable/anon key; privileged keys are forbidden",
    )
  return { url: url.origin, anonKey: key }
}

function publicHeaders(config) {
  return {
    apikey: config.anonKey,
    ...(config.anonKey.startsWith("sb_publishable_")
      ? {}
      : { Authorization: `Bearer ${config.anonKey}` }),
  }
}

async function boundedBytes(response, limit) {
  const declared = response.headers.get("content-length")
  if (declared && (!/^\d+$/.test(declared) || Number(declared) > limit))
    throw new Error("Response exceeds the allowed size")
  if (!response.body) throw new Error("Missing response body")
  const chunks = []
  let size = 0
  const reader = response.body.getReader()
  try {
    while (true) {
      const { value, done } = await reader.read()
      if (done) break
      size += value.byteLength
      if (size > limit) throw new Error("Response exceeds the allowed size")
      chunks.push(Buffer.from(value))
    }
  } finally {
    await reader.cancel()
  }
  return Buffer.concat(chunks)
}

function descriptor(row) {
  if (
    !UUID.test(row.draft_id) ||
    typeof row.slug !== "string" ||
    !row.slug ||
    row.slug.length > 200
  ) {
    throw new Error("Invalid public article identity")
  }
  if (row.pdf === null) return null
  const pdf = row.pdf
  if (
    !pdf ||
    !SHA256.test(pdf.sha256) ||
    pdf.path !== `${row.draft_id}/${pdf.sha256}.pdf` ||
    !Number.isSafeInteger(pdf.bytes) ||
    pdf.bytes < 5 ||
    pdf.bytes > MAX_PDF_BYTES
  ) {
    throw new Error("Invalid canonical PDF receipt in the public snapshot")
  }
  return {
    filename: validateFilename(pdf.filename),
    sha256: pdf.sha256,
    bytes: pdf.bytes,
    articleSlug: row.slug,
    path: pdf.path,
  }
}

export async function readCatalog(config, fetcher = fetch) {
  const validated = validateConfig(config)
  const files = []
  const identities = new Set()
  const filenames = new Set()
  let cursor = ""
  let totalBytes = 0
  // Keyset pagination avoids mistaking the server's row cap for an empty archive.
  for (let page = 0; page < 100; page += 1) {
    const url = new URL(`${validated.url}/rest/v1/publishing_articles`)
    url.searchParams.set(
      "select",
      "draft_id,slug,pdf:doc->attrs->manuscript->pdf",
    )
    url.searchParams.set("order", "draft_id.asc")
    url.searchParams.set("limit", "100")
    if (cursor) url.searchParams.set("draft_id", `gt.${cursor}`)
    const response = await fetcher(url, {
      headers: { ...publicHeaders(validated), Accept: "application/json" },
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(30_000),
    })
    if (!response.ok)
      throw new Error(`Public publication listing failed (${response.status})`)
    const rows = JSON.parse(
      (await boundedBytes(response, 2 * 1024 * 1024)).toString(),
    )
    if (!Array.isArray(rows))
      throw new Error("Public publication listing was not an array")
    if (rows.length === 0)
      return files.sort((a, b) => a.filename.localeCompare(b.filename, "en"))
    for (const row of rows) {
      if (identities.has(row.draft_id) || row.draft_id <= cursor)
        throw new Error("Public publication listing pagination is inconsistent")
      const file = descriptor(row)
      identities.add(row.draft_id)
      cursor = row.draft_id
      if (!file) continue
      const folded = file.filename.toLowerCase()
      if (filenames.has(folded))
        throw new Error(
          "Two published PDFs use the same filename (case-insensitive)",
        )
      filenames.add(folded)
      totalBytes += file.bytes
      if (totalBytes > MAX_TOTAL_BYTES)
        throw new Error("Published PDFs exceed the 500 MiB Pages safety budget")
      files.push(file)
    }
  }
  throw new Error(
    "Public publication listing exceeded the pagination safety limit",
  )
}

async function statIfPresent(path) {
  try {
    return await lstat(path)
  } catch (error) {
    if (error.code === "ENOENT") return null
    throw error
  }
}

function verifyBytes(bytes, file) {
  if (
    bytes.length !== file.bytes ||
    bytes.subarray(0, 5).toString() !== "%PDF-" ||
    digest(bytes) !== file.sha256
  ) {
    throw new Error(`Canonical PDF integrity check failed: ${file.filename}`)
  }
}

async function readOwned(directory) {
  const manifestPath = join(directory, MANIFEST)
  const stat = await statIfPresent(manifestPath)
  if (!stat) return []
  if (!stat.isFile() || stat.size > 4 * 1024 * 1024)
    throw new Error("Unsafe PDF manifest")
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"))
  if (
    manifest.managedBy !== "cimc-publication-pdf-sync" ||
    manifest.version !== 1 ||
    !Array.isArray(manifest.pdfs)
  ) {
    throw new Error("Refusing to replace an unrecognized PDF manifest")
  }
  const seen = new Set()
  for (const file of manifest.pdfs) {
    validateFilename(file.filename)
    const folded = file.filename.toLowerCase()
    if (
      seen.has(folded) ||
      !SHA256.test(file.sha256) ||
      !Number.isSafeInteger(file.bytes) ||
      file.bytes < 5 ||
      file.bytes > MAX_PDF_BYTES
    ) {
      throw new Error("Invalid owned PDF manifest entry")
    }
    seen.add(folded)
  }
  return manifest.pdfs
}

async function readStaticPdfOwnership(directory, filenames) {
  if (filenames.size === 0) return []
  const manifestPath = join(directory, "static-manifest.json")
  const stat = await statIfPresent(manifestPath)
  if (!stat) return []
  if (!stat.isFile() || stat.size > 4 * 1024 * 1024)
    throw new Error("Unsafe static publication manifest")
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"))
  if (
    manifest.managedBy !== "cimc-static-publications" ||
    manifest.version !== 1 ||
    !Array.isArray(manifest.files)
  )
    throw new Error("Unrecognized static publication manifest")
  const adopted = new Map()
  for (const receipt of manifest.files) {
    // Only a canonical filename demanded by the current public catalog can
    // transfer from a previously approved static release to PDF ownership.
    const filename =
      typeof receipt?.path === "string" &&
      receipt.path.startsWith("publications/")
        ? receipt.path.slice("publications/".length)
        : null
    if (!filenames.has(filename)) continue
    validateFilename(filename)
    if (
      adopted.has(filename) ||
      !SHA256.test(receipt.sha256) ||
      !Number.isSafeInteger(receipt.bytes) ||
      receipt.bytes < 5 ||
      receipt.bytes > MAX_PDF_BYTES
    )
      throw new Error("Invalid static PDF ownership receipt")
    adopted.set(filename, {
      filename,
      sha256: receipt.sha256,
      bytes: receipt.bytes,
    })
  }
  return [...adopted.values()]
}

export async function synchronize({ targetDir, config, fetcher = fetch }) {
  const validated = validateConfig(config)
  const target = resolve(targetDir)
  const targetStat = await lstat(target)
  if (!targetStat.isDirectory() || targetStat.isSymbolicLink())
    throw new Error("PDF output root must be a real directory")
  const directory = join(target, "publications")
  const directoryStat = await statIfPresent(directory)
  if (directoryStat && !directoryStat.isDirectory())
    throw new Error("Refusing an unsafe publications directory")
  const owned = await readOwned(directory)
  const ownedByName = new Map(owned.map((file) => [file.filename, file]))
  const entries = directoryStat
    ? await readdir(directory, { withFileTypes: true })
    : []
  const existing = new Map(
    entries.map((entry) => [entry.name.toLowerCase(), entry]),
  )
  if (existing.size !== entries.length)
    throw new Error("Existing publications files collide case-insensitively")
  if (existing.has(MANIFEST) && existing.get(MANIFEST).name !== MANIFEST)
    throw new Error("Existing file collides with the PDF manifest")
  const cached = new Map()
  // Verify ownership before either replacing or removing an existing file.
  for (const file of owned) {
    const stat = await statIfPresent(join(directory, file.filename))
    if (!stat) continue
    if (!stat.isFile()) throw new Error("Refusing an unsafe owned PDF file")
    if (stat.size !== file.bytes)
      throw new Error(`Canonical PDF integrity check failed: ${file.filename}`)
    const bytes = await readFile(join(directory, file.filename))
    verifyBytes(bytes, file)
    cached.set(file.filename, bytes)
  }
  const files = await readCatalog(validated, fetcher)
  const staticCandidates = new Set(
    files
      .filter((file) => {
        const entry = existing.get(file.filename.toLowerCase())
        return (
          entry?.name === file.filename &&
          entry.isFile() &&
          !ownedByName.has(file.filename)
        )
      })
      .map((file) => file.filename),
  )
  for (const file of await readStaticPdfOwnership(
    directory,
    staticCandidates,
  )) {
    const path = join(directory, file.filename)
    const stat = await lstat(path)
    if (!stat.isFile()) throw new Error("Refusing an unsafe static PDF file")
    if (stat.size !== file.bytes)
      throw new Error(`Canonical PDF integrity check failed: ${file.filename}`)
    const bytes = await readFile(path)
    verifyBytes(bytes, file)
    ownedByName.set(file.filename, file)
    cached.set(file.filename, bytes)
  }
  const prepared = new Map()
  for (const file of files) {
    const entry = existing.get(file.filename.toLowerCase())
    if (entry && (!ownedByName.has(entry.name) || !entry.isFile())) {
      throw new Error(
        `Refusing to overwrite an unrelated publications file: ${file.filename}`,
      )
    }
    const previous = ownedByName.get(file.filename)
    let bytes = cached.get(file.filename)
    if (
      !bytes ||
      previous.sha256 !== file.sha256 ||
      previous.bytes !== file.bytes
    ) {
      const response = await fetcher(
        `${validated.url}/storage/v1/object/authenticated/publishing-pdfs/${file.path}`,
        {
          headers: publicHeaders(validated),
          cache: "no-store",
          redirect: "error",
          signal: AbortSignal.timeout(60_000),
        },
      )
      if (!response.ok)
        throw new Error(
          `Public canonical PDF download failed (${response.status})`,
        )
      if (
        response.headers
          .get("content-type")
          ?.split(";")[0]
          .trim()
          .toLowerCase() !== "application/pdf"
      ) {
        throw new Error("Canonical PDF download has an unexpected content type")
      }
      bytes = await boundedBytes(response, file.bytes)
      verifyBytes(bytes, file)
    }
    prepared.set(file.filename, bytes)
  }
  // A publication change during download must never produce a mixed snapshot.
  if (
    JSON.stringify(files) !==
    JSON.stringify(await readCatalog(validated, fetcher))
  ) {
    throw new Error(
      "Publications changed during synchronization; retry from the current snapshots",
    )
  }
  const manifest = `${JSON.stringify(
    {
      managedBy: "cimc-publication-pdf-sync",
      version: 1,
      pdfs: files.map(({ path: _path, ...file }) => file),
    },
    null,
    2,
  )}\n`
  const oldManifest =
    directoryStat && (await statIfPresent(join(directory, MANIFEST)))
      ? await readFile(join(directory, MANIFEST), "utf8")
      : null
  const removed = owned.filter((file) => !prepared.has(file.filename))
  const changed = files.filter(
    (file) => !cached.get(file.filename)?.equals(prepared.get(file.filename)),
  )
  if (changed.length === 0 && removed.length === 0 && oldManifest === manifest)
    return { changed: false, count: files.length }
  // The caller commits only after this succeeds; network and validation failures
  // happen above, before any public artifact is changed.
  await mkdir(directory, { recursive: true })
  for (const file of removed)
    await rm(join(directory, file.filename), { force: true })
  for (const file of changed) {
    const temporary = join(directory, `.${file.filename}.sync-tmp`)
    await writeFile(temporary, prepared.get(file.filename), { flag: "wx" })
    await rename(temporary, join(directory, file.filename))
  }
  await writeFile(join(directory, MANIFEST), manifest)
  return {
    changed: true,
    count: files.length,
    written: changed.length,
    removed: removed.length,
  }
}

async function main() {
  const args = process.argv.slice(2)
  const value = (name) => {
    const index = args.indexOf(name)
    return index === -1 ? undefined : args[index + 1]
  }
  let config
  if (value("--config"))
    config = JSON.parse(await readFile(value("--config"), "utf8"))
  else {
    try {
      process.loadEnvFile(".env")
    } catch (error) {
      if (error.code !== "ENOENT") throw error
    }
    config = {
      url: process.env.VITE_PUBLISHING_SUPABASE_URL,
      anonKey: process.env.VITE_PUBLISHING_SUPABASE_ANON_KEY,
    }
  }
  config = validateConfig(config)
  if (value("--write-config")) {
    await writeFile(
      value("--write-config"),
      `${JSON.stringify({ managedBy: "cimc-publication-pdf-sync", ...config }, null, 2)}\n`,
    )
    return
  }
  if (!value("--target"))
    throw new Error(
      "Usage: sync-publication-pdfs.mjs --target <artifact directory> [--config <public JSON>]",
    )
  console.log(
    JSON.stringify(await synchronize({ targetDir: value("--target"), config })),
  )
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  main().catch((error) => {
    console.error(error.message)
    process.exitCode = 1
  })
}
