// Managed by cimcai/website-main: publication PDF deployment verification.
import { createHash } from "node:crypto"
import { readFile } from "node:fs/promises"
import { resolve } from "node:path"
import { setTimeout as delay } from "node:timers/promises"
import { pathToFileURL } from "node:url"
import { validateFilename } from "./sync-publication-pdfs.mjs"

const COMMIT = /^[a-f0-9]{40}$/
const UUID = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/

export function validatePublicationEventId(value = "") {
  if (value !== "" && !UUID.test(value))
    throw new Error(
      "Publication event ID must be a UUID or blank for a manual run",
    )
  return value
}

async function bytes(response, limit) {
  if (!response.body)
    throw new Error("Deployment verification received an empty response")
  const reader = response.body.getReader()
  const chunks = []
  let length = 0
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      length += value.byteLength
      if (length > limit)
        throw new Error("Deployment verification response is too large")
      chunks.push(Buffer.from(value))
    }
  } finally {
    await reader.cancel()
  }
  return Buffer.concat(chunks)
}

export async function verifyDeployment({
  repo,
  commit,
  siteOrigin,
  expectedManifest,
  githubToken,
  eventId = "",
  fetcher = fetch,
  wait = delay,
  maxAttempts = 30,
  intervalMs = 10_000,
}) {
  validatePublicationEventId(eventId)
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repo) || !COMMIT.test(commit))
    throw new Error("Invalid deployment repository or commit")
  if (!["https://staging.cimc.ai", "https://cimc.ai"].includes(siteOrigin))
    throw new Error("Unexpected publication website origin")
  if (typeof githubToken !== "string" || !githubToken)
    throw new Error("Missing workflow GitHub token")
  const expected = Buffer.from(expectedManifest)
  const manifest = JSON.parse(expected.toString())
  if (
    manifest.managedBy !== "cimc-publication-pdf-sync" ||
    manifest.version !== 1 ||
    !Array.isArray(manifest.pdfs)
  )
    throw new Error("Invalid expected publication PDF manifest")
  const filenames = new Set()
  let totalBytes = 0
  for (const pdf of manifest.pdfs) {
    validateFilename(pdf.filename)
    const name = pdf.filename.toLowerCase()
    if (
      filenames.has(name) ||
      !/^[a-f0-9]{64}$/.test(pdf.sha256) ||
      !Number.isSafeInteger(pdf.bytes) ||
      pdf.bytes < 5 ||
      pdf.bytes > 25 * 1024 * 1024
    )
      throw new Error("Invalid PDF receipt in the expected manifest")
    filenames.add(name)
    totalBytes += pdf.bytes
  }
  if (totalBytes > 500 * 1024 * 1024)
    throw new Error("Expected PDFs exceed the deployment byte budget")
  const githubHeaders = {
    Authorization: `Bearer ${githubToken}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2026-03-10",
    "User-Agent": "CIMC-Publication-Delivery",
  }
  const descendants = new Set([commit])
  const verifiedFiles = new Set()
  let lastState = "waiting for the requested Pages build"
  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    if (attempt) await wait(intervalMs)
    let response
    try {
      response = await fetcher(
        `https://api.github.com/repos/${repo}/pages/builds/latest`,
        {
          headers: githubHeaders,
          cache: "no-store",
          redirect: "error",
          signal: AbortSignal.timeout(15_000),
        },
      )
    } catch {
      lastState = "GitHub Pages status was temporarily unavailable"
      continue
    }
    if (response.status === 401 || response.status === 403)
      throw new Error("GitHub denied access to Pages deployment status")
    if (response.status === 429 || response.status >= 500) {
      lastState = `GitHub Pages status returned ${response.status}`
      continue
    }
    if (!response.ok)
      throw new Error(`GitHub Pages status failed (${response.status})`)
    const build = JSON.parse((await bytes(response, 1024 * 1024)).toString())
    if (!COMMIT.test(build.commit))
      throw new Error("GitHub Pages returned an invalid build commit")
    if (build.commit === commit && build.status === "errored")
      throw new Error("The requested GitHub Pages build failed")
    if (build.status !== "built") {
      lastState = `Pages build is ${build.status}`
      continue
    }
    if (!descendants.has(build.commit)) {
      // A simultaneous website release can supersede this artifact commit. It
      // is acceptable only when it retains this exact publication manifest.
      const comparison = await fetcher(
        `https://api.github.com/repos/${repo}/compare/${commit}...${build.commit}?per_page=1`,
        {
          headers: githubHeaders,
          cache: "no-store",
          redirect: "error",
          signal: AbortSignal.timeout(15_000),
        },
      )
      if (!comparison.ok)
        throw new Error(
          `Cannot verify the newer Pages artifact (${comparison.status})`,
        )
      const result = JSON.parse(
        (await bytes(comparison, 8 * 1024 * 1024)).toString(),
      )
      if (result.status !== "ahead" && result.status !== "identical") {
        lastState = "Pages still serves an earlier or unrelated artifact"
        continue
      }
      descendants.add(build.commit)
    }
    let live
    try {
      live = await fetcher(`${siteOrigin}/publications/pdf-manifest.json`, {
        headers: { "Cache-Control": "no-cache", Accept: "application/json" },
        cache: "no-store",
        redirect: "error",
        signal: AbortSignal.timeout(15_000),
      })
    } catch {
      lastState = "The website manifest was temporarily unavailable"
      continue
    }
    if (!live.ok) {
      lastState = `The website manifest returned ${live.status}`
      continue
    }
    if (!(await bytes(live, 4 * 1024 * 1024)).equals(expected)) {
      lastState = "The website has not served this publication manifest yet"
      continue
    }
    let pdfsReady = true
    for (const pdf of manifest.pdfs) {
      if (verifiedFiles.has(pdf.filename)) continue
      try {
        const file = await fetcher(
          `${siteOrigin}/publications/${encodeURIComponent(pdf.filename)}`,
          {
            headers: { "Cache-Control": "no-cache", Accept: "application/pdf" },
            cache: "no-store",
            redirect: "error",
            signal: AbortSignal.timeout(30_000),
          },
        )
        if (
          file.status !== 200 ||
          file.headers
            .get("content-type")
            ?.split(";")[0]
            .trim()
            .toLowerCase() !== "application/pdf"
        )
          throw new Error("PDF is not served yet")
        const body = await bytes(file, pdf.bytes)
        if (
          body.length !== pdf.bytes ||
          body.subarray(0, 5).toString() !== "%PDF-" ||
          createHash("sha256").update(body).digest("hex") !== pdf.sha256
        )
          throw new Error("PDF bytes have not updated yet")
        verifiedFiles.add(pdf.filename)
      } catch {
        lastState = `The public PDF does not match its approved receipt yet: ${pdf.filename}`
        pdfsReady = false
        break
      }
    }
    if (!pdfsReady) continue
    if (manifest.pdfs.length) {
      try {
        const current = await fetcher(
          `${siteOrigin}/publications/pdf-manifest.json`,
          {
            headers: {
              "Cache-Control": "no-cache",
              Accept: "application/json",
            },
            cache: "no-store",
            redirect: "error",
            signal: AbortSignal.timeout(15_000),
          },
        )
        if (
          !current.ok ||
          !(await bytes(current, 4 * 1024 * 1024)).equals(expected)
        )
          throw new Error("Manifest changed")
      } catch {
        lastState = "The publication manifest changed while verifying PDF bytes"
        continue
      }
    }
    return {
      status: "verified",
      publicationEventId: eventId || null,
      artifactCommit: commit,
      servedArtifactCommit: build.commit,
      siteOrigin,
      pdfCount: manifest.pdfs.length,
      verifiedPdfCount: verifiedFiles.size,
    }
  }
  throw new Error(
    `Publication PDF deployment was not verified within the bounded wait: ${lastState}. Re-run the workflow to retry.`,
  )
}

async function main() {
  const result = await verifyDeployment({
    repo: process.env.PDF_DEPLOY_REPOSITORY,
    commit: process.env.PDF_DEPLOY_COMMIT,
    siteOrigin: process.env.PDF_DEPLOY_SITE_ORIGIN,
    expectedManifest: await readFile("publications/pdf-manifest.json"),
    githubToken: process.env.GH_TOKEN,
    eventId: process.env.PUBLICATION_EVENT_ID || "",
  })
  console.log(JSON.stringify(result))
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
