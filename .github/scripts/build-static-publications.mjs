// Managed by cimcai/website-main: static approved publication pages.
import { createHash } from "node:crypto"
import { lstat, mkdir, readFile, rm, writeFile } from "node:fs/promises"
import { dirname, join, resolve } from "node:path"
import { pathToFileURL } from "node:url"
import { validateConfig } from "./sync-publication-pdfs.mjs"

const hash = (bytes) => createHash("sha256").update(bytes).digest("hex")
const slugPattern = /^[a-z0-9](?:[a-z0-9-]{1,78})[a-z0-9]$/
const uuidPattern =
  /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/
const pdfFilename = (name) =>
  typeof name === "string" &&
  name.length <= 200 &&
  /^[A-Za-z0-9][A-Za-z0-9._-]*\.pdf$/i.test(name) &&
  !name.includes("..")
const safePath = (path) =>
  typeof path === "string" &&
  (/^(?:publications\/(?:[a-z0-9-]+\/)?index\.html|writing\/(?:[a-z0-9-]+\/)?index\.html|pub\/feed\.xml|pub\/static-(?:assets|editions)\/[a-f0-9]{64}\.[a-z0-9]+)$/.test(
    path,
  ) ||
    (path.startsWith("publications/") && pdfFilename(path.slice(13))))
async function assertSafeFile(target, path) {
  let current = target
  for (const part of path.split("/")) {
    current = join(current, part)
    try {
      if ((await lstat(current)).isSymbolicLink())
        throw new Error("Refusing symlink in static output")
    } catch (e) {
      if (e.code !== "ENOENT") throw e
    }
  }
}
const htmlEscape = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  )
const json = (v) =>
  JSON.stringify(v)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029")
const headers = (config) => ({
  apikey: config.anonKey,
  ...(config.anonKey.startsWith("sb_publishable_")
    ? {}
    : { Authorization: `Bearer ${config.anonKey}` }),
})
async function download(url, config, fetcher, limit = 16 * 1024 * 1024) {
  const response = await fetcher(url, {
    headers: headers(config),
    redirect: "error",
    cache: "no-store",
    signal: AbortSignal.timeout(60_000),
  })
  if (!response.ok)
    throw new Error(`Public publication download failed (${response.status})`)
  const chunks = []
  let size = 0
  for await (const chunk of response.body) {
    size += chunk.length
    if (size > limit)
      throw new Error("Public publication exceeds the build size limit")
    chunks.push(chunk)
  }
  return {
    bytes: Buffer.concat(chunks),
    type: response.headers.get("content-type")?.split(";")[0],
  }
}
export async function readArticles(config, fetcher = fetch) {
  const validated = validateConfig(config)
  const articles = []
  let cursor = ""
  const slugs = new Set()
  for (let page = 0; page < 1000; page++) {
    const url = new URL(`${validated.url}/rest/v1/publishing_articles`)
    url.searchParams.set("select", "draft_id,slug,meta,doc,source_revision")
    url.searchParams.set("order", "draft_id.asc")
    url.searchParams.set("limit", "100")
    if (cursor) url.searchParams.set("draft_id", `gt.${cursor}`)
    const rows = JSON.parse((await download(url, validated, fetcher)).bytes)
    if (!Array.isArray(rows))
      throw new Error("Public archive response was not an array")
    if (!rows.length) return articles
    for (const row of rows) {
      if (
        !uuidPattern.test(row.draft_id) ||
        row.draft_id <= cursor ||
        !slugPattern.test(row.slug) ||
        row.slug !== row.meta?.slug ||
        slugs.has(row.slug) ||
        row.doc?.type !== "doc" ||
        typeof row.meta.title !== "string" ||
        !Array.isArray(row.meta.authors) ||
        !Array.isArray(row.meta.tags)
      )
        throw new Error("Invalid approved public article")
      cursor = row.draft_id
      slugs.add(row.slug)
      articles.push({
        meta: row.meta,
        doc: row.doc,
        draftId: row.draft_id,
        sourceRevision: row.source_revision,
      })
    }
  }
  throw new Error("Public archive exceeded the pagination limit")
}
/**
 * The Studio's current stored renderings of published revisions, keyed by
 * draft. Row access (current rendering of the published revision) is enforced
 * by the database; the build verifies content before serving it.
 */
export async function readRenderings(config, fetcher = fetch) {
  const validated = validateConfig(config)
  const renderings = new Map()
  let cursor = ""
  for (let page = 0; page < 1000; page++) {
    const url = new URL(
      `${validated.url}/rest/v1/publishing_article_renderings`,
    )
    url.searchParams.set(
      "select",
      "draft_id,slug,source_revision,reader_version,body_html,sha256",
    )
    url.searchParams.set("is_current", "eq.true")
    url.searchParams.set("order", "draft_id.asc")
    url.searchParams.set("limit", "50")
    if (cursor) url.searchParams.set("draft_id", `gt.${cursor}`)
    let rows
    try {
      rows = JSON.parse(
        (await download(url, validated, fetcher, 64 * 1024 * 1024)).bytes,
      )
    } catch (e) {
      // Projects without stored renderings yet build every article themselves.
      if (/\((404)\)/.test(e.message) && !page) return renderings
      throw e
    }
    if (!Array.isArray(rows))
      throw new Error("Stored renderings response was not an array")
    if (!rows.length) return renderings
    for (const row of rows) {
      if (
        !uuidPattern.test(row.draft_id) ||
        row.draft_id <= cursor ||
        !slugPattern.test(row.slug) ||
        !Number.isSafeInteger(Number(row.source_revision)) ||
        typeof row.body_html !== "string" ||
        !/^[a-f0-9]{64}$/.test(row.sha256)
      )
        throw new Error("Invalid stored rendering")
      cursor = row.draft_id
      renderings.set(row.draft_id, row)
    }
  }
  throw new Error("Stored renderings exceeded the pagination limit")
}
const readerVersionPattern = /^[0-9]{1,4}\.[0-9]{1,4}\.[0-9]{1,6}$/
const readerFileTypes = {
  css: "text/css",
  js: "text/javascript",
  woff2: "font/woff2",
  ttf: "font/ttf",
}
/**
 * The article files (stylesheet, fonts, islands script) of each reader
 * version, as stored by the Studio. The database accepts only manifests the
 * Studio server signed; every file is checked against its manifest here.
 */
export async function readReaderReleases(config, versions, fetcher = fetch) {
  const validated = validateConfig(config)
  const releases = new Map()
  if (!versions.length) return releases
  if (versions.some((version) => !readerVersionPattern.test(version)))
    throw new Error("Invalid reader version")
  const url = new URL(`${validated.url}/rest/v1/publishing_reader_releases`)
  url.searchParams.set("select", "reader_version,manifest,stylesheet,script")
  url.searchParams.set("reader_version", `in.(${versions.join(",")})`)
  const rows = JSON.parse(
    (await download(url, validated, fetcher, 1024 * 1024)).bytes,
  )
  if (!Array.isArray(rows))
    throw new Error("Reader releases response was not an array")
  for (const row of rows) {
    const manifest = JSON.parse(row.manifest)
    if (
      !versions.includes(row.reader_version) ||
      manifest.readerVersion !== row.reader_version ||
      manifest.stylesheet !== row.stylesheet ||
      manifest.script !== row.script ||
      !Array.isArray(manifest.files) ||
      !manifest.files.length ||
      manifest.files.length > 200
    )
      throw new Error(`Invalid reader release ${row.reader_version}`)
    for (const file of manifest.files) {
      const extension = /^([a-f0-9]{64})\.([a-z0-9]+)$/.exec(file.name)
      if (
        !extension ||
        extension[1] !== file.sha256 ||
        readerFileTypes[extension[2]] !== file.type ||
        !Number.isSafeInteger(file.bytes)
      )
        throw new Error(`Invalid file in reader release ${row.reader_version}`)
    }
    const names = manifest.files.map((file) => file.name)
    if (!names.includes(row.stylesheet) || !names.includes(row.script))
      throw new Error(
        `Reader release ${row.reader_version} names no stylesheet or script`,
      )
    const filesUrl = new URL(`${validated.url}/rest/v1/publishing_reader_files`)
    filesUrl.searchParams.set("select", "name,body")
    filesUrl.searchParams.set("name", `in.(${names.join(",")})`)
    const stored = JSON.parse(
      (await download(filesUrl, validated, fetcher, 64 * 1024 * 1024)).bytes,
    )
    if (!Array.isArray(stored))
      throw new Error("Reader files response was not an array")
    const bodies = new Map(
      stored.map((item) => [
        item.name,
        // PostgREST sends bytea as \x-prefixed hex.
        typeof item.body === "string" && /^\\x([a-f0-9]{2})*$/.test(item.body)
          ? Buffer.from(item.body.slice(2), "hex")
          : null,
      ]),
    )
    const files = manifest.files.map((file) => {
      const bytes = bodies.get(file.name)
      if (!bytes || bytes.length !== file.bytes || hash(bytes) !== file.sha256)
        throw new Error(`Reader file ${file.name} does not match its release`)
      return { path: `pub/static-assets/${file.name}`, bytes }
    })
    releases.set(row.reader_version, {
      stylesheet: `/pub/static-assets/${row.stylesheet}`,
      script: `/pub/static-assets/${row.script}`,
      files,
    })
  }
  for (const version of versions)
    if (!releases.has(version))
      throw new Error(`Reader ${version}'s files are not stored`)
  return releases
}
async function optionalJson(path) {
  try {
    return JSON.parse(await readFile(path, "utf8"))
  } catch (e) {
    if (e.code === "ENOENT") return null
    throw e
  }
}
export async function buildPublications({
  targetDir,
  config,
  renderer,
  fetcher = fetch,
}) {
  const target = resolve(targetDir)
  const root = await lstat(target)
  if (!root.isDirectory() || root.isSymbolicLink())
    throw new Error("Static build root must be a real directory")
  const site = (await readFile(join(target, "CNAME"), "utf8")).trim()
  if (!["cimc.ai", "staging.cimc.ai"].includes(site))
    throw new Error("Unexpected static publication destination")
  const origin = `https://${site}`
  const manifestPath = join(target, "publications/static-manifest.json")
  await assertSafeFile(target, "publications/static-manifest.json")
  const previous = await optionalJson(manifestPath)
  if (
    previous &&
    (previous.managedBy !== "cimc-static-publications" ||
      previous.version !== 1 ||
      !Array.isArray(previous.files) ||
      previous.files.some(
        (file) =>
          !safePath(file.path) ||
          !/^[a-f0-9]{64}$/.test(file.sha256) ||
          !Number.isSafeInteger(file.bytes) ||
          file.bytes < 0,
      ) ||
      (previous.adoptedReleaseSlugs !== undefined &&
        (!Array.isArray(previous.adoptedReleaseSlugs) ||
          previous.adoptedReleaseSlugs.some(
            (slug) => !slugPattern.test(slug),
          ))))
  )
    throw new Error("Unrecognized static publication manifest")
  const adoptedReleaseSlugs = new Set(previous?.adoptedReleaseSlugs || [])
  await assertSafeFile(target, ".github/publication-release.json")
  const approvedRelease = await optionalJson(
    join(target, ".github/publication-release.json"),
  )
  if (
    approvedRelease &&
    (site !== "cimc.ai" ||
      approvedRelease.version !== 1 ||
      approvedRelease.siteOrigin !== origin ||
      typeof approvedRelease.approval !== "string" ||
      !approvedRelease.approval.trim() ||
      approvedRelease.approval.length > 2000 ||
      !Array.isArray(approvedRelease.articles) ||
      approvedRelease.articles.length > 100 ||
      !approvedRelease.webEditions ||
      typeof approvedRelease.webEditions !== "object" ||
      Array.isArray(approvedRelease.webEditions))
  )
    throw new Error("Invalid approved production publication release")
  const settings = JSON.parse(
    await readFile(
      join(target, ".github/static-publication-build.json"),
      "utf8",
    ),
  )
  if (
    !/^\/assets\/[A-Za-z0-9_.-]+\.js$/.test(settings.client) ||
    !Array.isArray(settings.css) ||
    settings.css.some((s) => !/^\/assets\/[A-Za-z0-9_.-]+\.css$/.test(s)) ||
    !/^\/assets\/[A-Za-z0-9_.-]+\.css$/.test(settings.readerCss)
  )
    throw new Error("Invalid static renderer assets")
  const validated = validateConfig(config)
  const source = await readArticles(validated, fetcher)
  // Every article except a custom web edition is served as the Studio
  // rendered it; there is no other way to build one.
  const storedRenderings = await readRenderings(validated, fetcher)
  const servedRenderings = new Map()
  /** Fail the build unless the stored rendering is exactly this article's. */
  const checkStored = (stored, article, mirrored) => {
    const slug = article.meta.slug
    if (!stored)
      throw new Error(
        `${slug} has no website version. Save it in the Studio (Published view).`,
      )
    if (hash(Buffer.from(stored.body_html, "utf8")) !== stored.sha256)
      throw new Error(
        `The stored rendering of ${slug} does not match its checksum`,
      )
    // Throws for anything the reader would not render.
    const { readerVersion } = renderer.checkStoredRendering(stored.body_html)
    if (
      stored.slug !== slug ||
      Number(stored.source_revision) !== Number(article.sourceRevision)
    )
      throw new Error(`The stored rendering of ${slug} is for another revision`)
    if (readerVersion !== stored.reader_version)
      throw new Error(
        `The stored rendering of ${slug} has an inconsistent reader version`,
      )
    for (const [match] of stored.body_html.matchAll(
      /\/pub\/static-assets\/[a-f0-9]{64}\.[a-z0-9]+/g,
    ))
      if (!mirrored.has(match))
        throw new Error(
          `The stored rendering of ${slug} refers to unmirrored media ${match}`,
        )
  }
  const snapshot =
    site === "staging.cimc.ai"
      ? await optionalJson(join(target, "pub/staging-release/release.json"))
      : null
  const articles = new Map(
    source.map((article) => [article.meta.slug, structuredClone(article)]),
  )
  const bootstrapSlugs = new Set()
  const stagingSlugs = new Set()
  const releaseSlugs = new Set()
  for (const article of approvedRelease?.articles || []) {
    if (
      !slugPattern.test(article.meta?.slug) ||
      article.doc?.type !== "doc" ||
      typeof article.meta.title !== "string" ||
      !Array.isArray(article.meta.authors) ||
      !Array.isArray(article.meta.tags) ||
      releaseSlugs.has(article.meta.slug)
    )
      throw new Error("Invalid approved production article")
    const slug = article.meta.slug
    releaseSlugs.add(slug)
    if (articles.has(slug)) adoptedReleaseSlugs.add(slug)
    else if (!adoptedReleaseSlugs.has(slug)) {
      articles.set(slug, structuredClone(article))
      bootstrapSlugs.add(slug)
    }
  }
  if (snapshot) {
    if (snapshot.version !== 1 || !Array.isArray(snapshot.articles))
      throw new Error("Invalid approved staging snapshot")
    for (const article of snapshot.articles) {
      if (
        !slugPattern.test(article.meta?.slug) ||
        article.doc?.type !== "doc" ||
        releaseSlugs.has(article.meta.slug)
      )
        throw new Error("Invalid staging publication")
      const slug = article.meta.slug
      releaseSlugs.add(slug)
      if (articles.has(slug)) adoptedReleaseSlugs.add(slug)
      else if (!adoptedReleaseSlugs.has(slug)) {
        articles.set(slug, structuredClone(article))
        stagingSlugs.add(slug)
      }
    }
  }
  const prepared = new Map()
  const editionUrls = new Map()
  const assets = new Map()
  const publicPdfPaths = new Set(
    source.flatMap((article) => {
      const pdf = article.doc.attrs?.manuscript?.pdf
      return pdf && pdfFilename(pdf.filename)
        ? [`publications/${pdf.filename}`]
        : []
    }),
  )
  for (const article of articles.values()) {
    const canonicalPdf = article.doc.attrs?.manuscript?.pdf
    if (canonicalPdf) {
      if (!pdfFilename(canonicalPdf.filename))
        throw new Error("Invalid canonical PDF filename")
      const canonicalPath = `publications/${canonicalPdf.filename}`
      const sourcePath = bootstrapSlugs.has(article.meta.slug)
        ? `pub/approved-release/${canonicalPdf.filename}`
        : canonicalPath
      await assertSafeFile(target, sourcePath)
      const bytes = await readFile(join(target, sourcePath))
      if (
        bytes.length !== canonicalPdf.bytes ||
        hash(bytes) !== canonicalPdf.sha256 ||
        bytes.subarray(0, 5).toString() !== "%PDF-"
      )
        throw new Error(
          "Static article PDF does not match its approved snapshot",
        )
      if (bootstrapSlugs.has(article.meta.slug)) {
        await assertSafeFile(target, canonicalPath)
        try {
          const existing = await readFile(join(target, canonicalPath))
          if (
            !existing.equals(bytes) &&
            !previous?.files.some((file) => file.path === canonicalPath)
          )
            throw new Error(
              "Approved release PDF collides with an unrelated file",
            )
          if (publicPdfPaths.has(canonicalPath) && !existing.equals(bytes))
            throw new Error(
              "Approved release PDF conflicts with a public article",
            )
        } catch (e) {
          if (e.code !== "ENOENT") throw e
        }
        if (!publicPdfPaths.has(canonicalPath))
          prepared.set(canonicalPath, bytes)
      }
      // Staging PDFs are copied separately, but still need an ownership receipt
      // so public PDF synchronization can adopt or later remove these exact bytes.
      if (stagingSlugs.has(article.meta.slug)) {
        if (publicPdfPaths.has(canonicalPath))
          throw new Error("Staging release PDF conflicts with a public article")
        prepared.set(canonicalPath, bytes)
      }
    }
    const edition = renderer.getWebEdition(article.doc)
    if (edition) {
      let bytes
      const bootstrap = bootstrapSlugs.has(article.meta.slug)
      const local = bootstrap
        ? approvedRelease.webEditions[edition.path]
        : stagingSlugs.has(article.meta.slug)
          ? snapshot?.webEditions?.[edition.path]
          : undefined
      if (bootstrap && !local)
        throw new Error("Approved production web edition is missing")
      if (local) {
        const pattern = bootstrap
          ? /^\/pub\/approved-release\/[a-z0-9][a-z0-9._-]*\.html$/
          : /^\/pub\/staging-release\/[a-z0-9._-]+$/
        if (!pattern.test(local) || local.includes(".."))
          throw new Error("Invalid release web edition path")
        await assertSafeFile(target, local.slice(1))
        bytes = await readFile(join(target, local.slice(1)))
      } else
        bytes = (
          await download(
            `${validated.url}/storage/v1/object/authenticated/publishing-web-editions/${edition.path}`,
            validated,
            fetcher,
            edition.bytes,
          )
        ).bytes
      if (bytes.length !== edition.bytes || hash(bytes) !== edition.sha256)
        throw new Error("Approved web edition integrity check failed")
      const pdf = article.doc.attrs?.manuscript?.pdf
      const publicPdf = pdf
        ? {
            filename: pdf.filename,
            url: `${origin}/publications/${pdf.filename}`,
          }
        : undefined
      // Keep authored scripts isolated in an opaque sandbox, as in the existing reader.
      const html = renderer.prepareEdition(bytes.toString(), origin, publicPdf)
      const path = `pub/static-editions/${hash(html)}.html`
      prepared.set(path, Buffer.from(html))
      editionUrls.set(article.meta.slug, `/${path}`)
    }
    const mirrored = new Set()
    const rewrite = async (value) => {
      if (typeof value === "string") {
        const path = renderer.managedAssetPath(value, validated.url)
        if (!path) return value
        if (assets.has(path)) {
          mirrored.add(assets.get(path))
          return assets.get(path)
        }
        const asset = await download(
          `${validated.url}/storage/v1/object/authenticated/publishing-assets/${path}`,
          validated,
          fetcher,
        )
        const extension = {
          "image/png": "png",
          "image/jpeg": "jpg",
          "image/webp": "webp",
          "image/gif": "gif",
          "image/avif": "avif",
          "application/pdf": "pdf",
          "text/plain": "txt",
        }[asset.type]
        if (!extension)
          throw new Error("Unsupported approved media type for static hosting")
        const dest = `pub/static-assets/${hash(asset.bytes)}.${extension}`
        prepared.set(dest, asset.bytes)
        assets.set(path, `/${dest}`)
        mirrored.add(`/${dest}`)
        return `/${dest}`
      }
      if (Array.isArray(value)) return Promise.all(value.map(rewrite))
      if (value && typeof value === "object")
        return Object.fromEntries(
          await Promise.all(
            Object.entries(value).map(async ([k, v]) => [k, await rewrite(v)]),
          ),
        )
      return value
    }
    article.meta = await rewrite(article.meta)
    article.doc = await rewrite(article.doc)
    if (!edition) {
      const stored = article.draftId && storedRenderings.get(article.draftId)
      checkStored(stored, article, mirrored)
      servedRenderings.set(article.meta.slug, stored)
    }
  }
  // Each article links the files of the reader that rendered it.
  const releases = await readReaderReleases(
    validated,
    [...new Set([...servedRenderings.values()].map((r) => r.reader_version))],
    fetcher,
  )
  for (const release of releases.values())
    for (const file of release.files) prepared.set(file.path, file.bytes)
  const list = [...articles.values()]
    .map((article) => article.meta)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  const page = (data) => {
    const { html, styles } = renderer.renderPublication(data)
    // A stored article is in the page once: the client reads it from the DOM.
    const clientData = data.rendering
      ? {
          ...data,
          rendering: undefined,
          article: { meta: data.article.meta },
          storedRendering: true,
        }
      : data
    // A stored article brings its reader's stylesheet and islands script;
    // other pages use the website's reader styles.
    const release =
      data.rendering &&
      releases.get(servedRenderings.get(data.article.meta.slug).reader_version)
    const readerLinks = release
      ? `<link rel="stylesheet" href="${release.stylesheet}"><script defer src="${release.script}"></script>`
      : `<link rel="stylesheet" href="${settings.readerCss}">`
    const title = data.article ? data.article.meta.title : "Publications"
    const canonical = `${origin}${data.path}`
    const meta = data.article?.meta
    const citationAuthors = meta?.citationAuthors?.length
      ? meta.citationAuthors
      : undefined
    const contributors = meta?.authors.map((a) => ({
      "@type": "Person",
      name: a.name,
    }))
    const structured = meta
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: meta.title,
          description: meta.summary,
          author: citationAuthors
            ? citationAuthors.map(({ name, url }) => ({
                // Cite as names an institution, e.g. CIMC.
                "@type": "Organization",
                name,
                ...(url ? { url } : {}),
              }))
            : contributors,
          ...(citationAuthors ? { contributor: contributors } : {}),
          datePublished: meta.publishedAt,
          dateModified: meta.updatedAt || meta.publishedAt,
          url: canonical,
        }
      : {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Publications",
          url: canonical,
        }
    return Buffer.from(
      `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${htmlEscape(title)} — CIMC</title><meta name="description" content="${htmlEscape(meta?.summary || "Research papers, essays, and articles from CIMC.")}"><link rel="canonical" href="${canonical}"><link rel="icon" href="/favicon.png"><link rel="alternate" type="application/rss+xml" title="CIMC Publications" href="/pub/feed.xml">${settings.css.map((s) => `<link rel="stylesheet" href="${s}">`).join("")}${readerLinks}${styles}<style>.static-related{max-width:1100px;margin:auto;padding:16px 24px}.static-edition{display:block;width:100%;height:calc(100dvh - 96px);border:0}.static-related h2{font-size:24px}.static-related a{text-decoration:underline}</style><script type="application/ld+json">${json(structured)}</script></head><body><div id="static-publication-root">${html}</div><script id="static-publication-data" type="application/json">${json(clientData)}</script><script type="module" src="${settings.client}"></script></body></html>`,
    )
  }
  prepared.set(
    "publications/index.html",
    page({ origin, path: "/publications/", articles: list }),
  )
  for (const article of articles.values()) {
    const path = `/publications/${article.meta.slug}/`
    prepared.set(
      `publications/${article.meta.slug}/index.html`,
      page({
        origin,
        path,
        articles: list,
        // A stored article needs no manuscript; editions keep theirs for the fallback.
        article: servedRenderings.has(article.meta.slug)
          ? { meta: article.meta }
          : { meta: article.meta, doc: article.doc },
        editionUrl: editionUrls.get(article.meta.slug),
        rendering: servedRenderings.get(article.meta.slug)?.body_html,
      }),
    )
    const legacy = `${origin}${path}`
    prepared.set(
      `writing/${article.meta.slug}/index.html`,
      Buffer.from(
        `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${htmlEscape(legacy)}"><link rel="canonical" href="${htmlEscape(legacy)}"><title>${htmlEscape(article.meta.title)} — CIMC</title></head><body><a href="${htmlEscape(legacy)}">${htmlEscape(article.meta.title)}</a></body></html>`,
      ),
    )
  }
  prepared.set(
    "writing/index.html",
    Buffer.from(
      `<!doctype html><html lang="en"><head><meta http-equiv="refresh" content="0;url=/publications/"></head><body><a href="/publications/">Publications</a></body></html>`,
    ),
  )
  const items = list
    .map(
      (a) =>
        `<item><title>${htmlEscape(a.title)}</title><link>${origin}/publications/${a.slug}/</link><guid isPermaLink="true">${origin}/publications/${a.slug}/</guid><description>${htmlEscape(a.summary)}</description><pubDate>${new Date(`${a.publishedAt}T12:00:00Z`).toUTCString()}</pubDate></item>`,
    )
    .join("")
  prepared.set(
    "pub/feed.xml",
    Buffer.from(
      `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>CIMC Publications</title><link>${origin}/publications/</link><description>Research papers, essays, and articles from CIMC.</description>${items}</channel></rss>`,
    ),
  )
  // A build must never commit a mixture of snapshots taken across publication changes.
  if (
    JSON.stringify(source) !==
    JSON.stringify(await readArticles(validated, fetcher))
  )
    throw new Error("Public archive changed during the build; retry")
  for (const file of [
    ...(previous?.files || []),
    ...[...prepared.keys()].map((path) => ({ path })),
  ]) {
    if (!safePath(file.path)) throw new Error("Invalid managed static path")
    await assertSafeFile(target, file.path)
  }
  for (const file of previous?.files || []) {
    // Current public PDFs were checked against their approved descriptor above;
    // their bytes may have changed during the preceding backend PDF sync.
    if (publicPdfPaths.has(file.path)) continue
    try {
      if (hash(await readFile(join(target, file.path))) !== file.sha256)
        throw new Error(
          "Managed static publication was modified outside the builder",
        )
    } catch (e) {
      if (e.code !== "ENOENT") throw e
    }
  }
  for (const file of previous?.files || [])
    if (!prepared.has(file.path) && !publicPdfPaths.has(file.path))
      await rm(join(target, file.path), { force: true })
  for (const [path, bytes] of prepared) {
    await mkdir(dirname(join(target, path)), { recursive: true })
    await writeFile(join(target, path), bytes)
  }
  const manifest = {
    managedBy: "cimc-static-publications",
    version: 1,
    articles: list.map((a) => a.slug),
    adoptedReleaseSlugs: [...adoptedReleaseSlugs].sort(),
    files: [...prepared].map(([path, bytes]) => ({
      path,
      sha256: hash(bytes),
      bytes: bytes.length,
    })),
  }
  await mkdir(dirname(manifestPath), { recursive: true })
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)
  return { count: list.length, files: prepared.size }
}
async function main() {
  const args = process.argv.slice(2)
  const value = (name) => args[args.indexOf(name) + 1]
  const target = resolve(value("--target"))
  const config = JSON.parse(await readFile(value("--config"), "utf8"))
  const renderer = await import(
    pathToFileURL(
      join(target, ".github/scripts/static-publication-renderer.mjs"),
    )
  )
  console.log(
    JSON.stringify(
      await buildPublications({ targetDir: target, config, renderer }),
    ),
  )
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
)
  main().catch((e) => {
    console.error(e.message)
    process.exitCode = 1
  })
