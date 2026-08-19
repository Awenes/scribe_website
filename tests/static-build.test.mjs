import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

test("build emits a static homepage", async () => {
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
  assert.match(html, /Scribe — A local-first developer activity journal/);
  assert.match(html, /<div id="root"><\/div>/);
  assert.match(html, /assets\/.*\.js/);
  assert.doesNotMatch(html, /vinext|_rsc|server\/index/i);
});

test("build emits a directly loadable docs route with route metadata", async () => {
  const html = await readFile(new URL("../dist/docs/index.html", import.meta.url), "utf8");
  assert.match(html, /Documentation — Scribe/);
  assert.match(html, /canonical" href="\/docs"/);
  await access(new URL("../dist/og.png", import.meta.url));
});

test("build output contains only static deployment assets", async () => {
  const files = await readdir(new URL("../dist/", import.meta.url));
  assert.ok(files.includes("index.html"));
  assert.ok(files.includes("assets"));
  assert.ok(files.includes("docs"));
  assert.ok(!files.includes("server"));
});

test("scroll reveals are progressive and respect reduced motion", async () => {
  const [source, css] = await Promise.all([
    readFile(new URL("../src/main.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);
  assert.match(source, /IntersectionObserver/);
  assert.match(source, /prefers-reduced-motion: reduce/);
  assert.match(css, /\.reveal-ready\.is-visible/);
  assert.match(css, /@media\(prefers-reduced-motion:reduce\)/);
});

test("mobile layout guards intrinsic-width and long-content overflow", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /\.log-window\s*\{[^}]*min-width:0/);
  assert.match(css, /\.docs-content\s*\{\s*min-width:0/);
  assert.match(css, /overflow-wrap:anywhere/);
  assert.match(css, /@media\(max-width:420px\)/);
  assert.match(css, /\.docs-sidebar nav\{grid-template-columns:minmax\(0,1fr\)/);
});
