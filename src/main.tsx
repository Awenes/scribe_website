import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../app/page";
import { Docs } from "../app/docs/page";
import "../app/globals.css";

const descriptions = {
  home: "Turn VS Code activity into readable, Git-backed work logs that stay on your machine.",
  docs: "Install, configure, and understand the Scribe developer activity logger for VS Code.",
};

function setMeta(selector: string, attribute: string, value: string) {
  document.querySelector(selector)?.setAttribute(attribute, value);
}

function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const docs = pathname === "/docs" || pathname === "/docs/";
    const title = docs ? "Documentation — Scribe" : "Scribe — A local-first developer activity journal";
    const description = docs ? descriptions.docs : descriptions.home;
    const canonical = new URL(docs ? "/docs" : "/", window.location.origin).href;

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", canonical);
    setMeta('meta[property="og:title"]', "content", docs ? "Scribe documentation" : "Scribe — Your workday, written down.");
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[name="twitter:title"]', "content", docs ? "Scribe documentation" : "Scribe — Your workday, written down.");
    setMeta('meta[name="twitter:description"]', "content", description);

    if (hash) requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return <><RouteEffects /><Routes><Route path="/" element={<Home />} /><Route path="/docs" element={<Docs />} /><Route path="*" element={<Navigate to="/" replace />} /></Routes></>;
}

createRoot(document.getElementById("root")!).render(<StrictMode><BrowserRouter><App /></BrowserRouter></StrictMode>);
