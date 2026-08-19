import { mkdir, readFile, writeFile } from "node:fs/promises";

const builtHtml = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
const siteOrigin = (process.env.URL ?? process.env.SITE_URL ?? "").replace(/\/$/, "");
const absolute = (path) => `${siteOrigin}${path}` || path;
const withSharedUrls = builtHtml
  .replaceAll('content="/og.png"', `content="${absolute("/og.png")}"`);
const rootHtml = withSharedUrls.replace("</head>", `  <meta property="og:url" content="${absolute("/")}" />\n  <link rel="canonical" href="${absolute("/")}" />\n  </head>`);
const docsHtml = rootHtml
  .replace("Scribe — A local-first developer activity journal</title>", "Documentation — Scribe</title>")
  .replace("Turn VS Code activity into readable, Git-backed work logs that stay on your machine.", "Install, configure, and understand the Scribe developer activity logger for VS Code.")
  .replaceAll("A local-first developer activity journal for VS Code.", "Install, configure, and understand Scribe for VS Code.")
  .replace(`content="${absolute("/")}"`, `content="${absolute("/docs")}"`)
  .replace(`href="${absolute("/")}"`, `href="${absolute("/docs")}"`)
  .replaceAll("Scribe — Your workday, written down.", "Scribe documentation");

const docsDir = new URL("../dist/docs/", import.meta.url);
await mkdir(docsDir, { recursive: true });
await writeFile(new URL("../dist/index.html", import.meta.url), rootHtml);
await writeFile(new URL("index.html", docsDir), docsHtml);
