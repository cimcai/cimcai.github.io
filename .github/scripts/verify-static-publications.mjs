// Managed by cimcai/website-main: verify deployed static article pages.
import { createHash } from "node:crypto"
import { readFile } from "node:fs/promises"
import { resolve } from "node:path"
import { setTimeout as delay } from "node:timers/promises"
import { pathToFileURL } from "node:url"
export async function verifyStaticPublications({
  origin,
  expected,
  fetcher = fetch,
  attempts = 30,
  wait = delay,
}) {
  if (!["https://staging.cimc.ai", "https://cimc.ai"].includes(origin))
    throw new Error("Unexpected verification origin")
  const bytes = Buffer.from(expected)
  const manifest = JSON.parse(bytes)
  if (
    manifest.managedBy !== "cimc-static-publications" ||
    !Array.isArray(manifest.files)
  )
    throw new Error("Invalid static verification manifest")
  for (const file of manifest.files)
    if (
      !/^(?:publications|writing|pub)\/[A-Za-z0-9._/-]+$/.test(file.path) ||
      file.path.split("/").includes("..") ||
      !/^[a-f0-9]{64}$/.test(file.sha256) ||
      !Number.isSafeInteger(file.bytes) ||
      file.bytes > 32 * 1024 * 1024
    )
      throw new Error("Invalid static file receipt")
  const verified = new Set()
  for (let attempt = 0; attempt < attempts; attempt++) {
    if (attempt) await wait(10_000)
    try {
      const response = await fetcher(
        `${origin}/publications/static-manifest.json`,
        {
          cache: "no-store",
          redirect: "error",
          signal: AbortSignal.timeout(15_000),
        },
      )
      if (
        !response.ok ||
        !Buffer.from(await response.arrayBuffer()).equals(bytes)
      )
        continue
      for (const file of manifest.files) {
        if (verified.has(file.path)) continue
        const response = await fetcher(`${origin}/${file.path}`, {
          cache: "no-store",
          redirect: "error",
          signal: AbortSignal.timeout(15_000),
        })
        if (!response.ok) continue
        const data = Buffer.from(await response.arrayBuffer())
        if (
          data.length === file.bytes &&
          createHash("sha256").update(data).digest("hex") === file.sha256
        )
          verified.add(file.path)
      }
      if (verified.size === manifest.files.length)
        return { files: verified.size }
    } catch {
      /* Cache propagation or a transient network error can be retried. */
    }
  }
  throw new Error(
    "The deployed static publication pages did not match the completed build",
  )
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  const expected = await readFile("publications/static-manifest.json")
  console.log(
    await verifyStaticPublications({
      origin: process.env.PDF_DEPLOY_SITE_ORIGIN,
      expected,
    }),
  )
}
