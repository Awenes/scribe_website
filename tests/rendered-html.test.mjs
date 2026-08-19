import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the Scribe landing page", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Your workday/);
  assert.match(html, /Install for VS Code/);
  assert.match(html, /Local by design/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("server-renders the documentation route", async () => {
  const response = await render("/docs");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Documentation — Scribe/);
  assert.match(html, /activityTracker\.interval/);
  assert.match(html, /snapshot.*means log history/i);
  assert.match(html, /Open an issue on GitHub/);
});
