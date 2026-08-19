import { Link as RouterLink } from "react-router-dom";
import type { PropsWithChildren } from "react";

export function Link({ href, children, ...props }: PropsWithChildren<{ href: string; className?: string; "aria-label"?: string; "aria-current"?: "page" }>) {
  return <RouterLink to={href} {...props}>{children}</RouterLink>;
}

export const marketplaceUrl = "https://marketplace.visualstudio.com/items?itemName=pr3ciousCanCod3.scribe-dev-logger";
export const githubUrl = "https://github.com/Awenes/Scribe";

export function Header({ docs = false }: { docs?: boolean }) {
  return <nav className="site-nav" aria-label="Main navigation"><Link className="wordmark" href="/" aria-label="Scribe home"><span aria-hidden="true">✎</span> Scribe</Link><div className="nav-links"><Link aria-current={docs ? "page" : undefined} href="/docs">Docs</Link><a href={githubUrl}>GitHub</a><a className="button button-small" href={marketplaceUrl}>Install Scribe</a></div></nav>;
}

export function Footer() {
  return <footer className="site-footer"><Link className="wordmark footer-wordmark" href="/"><span aria-hidden="true">✎</span> Scribe</Link><p>Made by <a href="https://github.com/Awenes">Precious Awe</a> for developers who like a paper trail.</p><div><Link href="/docs">Docs</Link><a href={githubUrl}>GitHub</a><a href={`${githubUrl}/blob/master/LICENSE`}>MIT License</a></div></footer>;
}

export function LogWindow() {
  return <div className="log-window" aria-label="Example Scribe activity log"><div className="window-bar"><div className="window-dots" aria-hidden="true"><span /><span /><span /></div><span>log-2026-08-19.md</span><span className="window-mark">S</span></div><div className="file-tab"><span>✎</span> log-2026-08-19.md <span>×</span></div><pre><code><span className="line-number">1</span><span className="md-heading">### 19/08/2026, 10:30:00</span>{"\n"}<span className="line-number">2</span>{"\n"}<span className="line-number">3</span><span className="md-bullet">-</span> Edited: /src/components/Header.tsx <span className="md-muted">(4 times)</span>{"\n"}<span className="line-number">4</span><span className="md-bullet">-</span> Edited: /src/app/page.tsx <span className="md-muted">(2 times)</span>{"\n"}<span className="line-number">5</span>{"\n"}<span className="line-number">6</span><span className="md-comment"># committed locally by Scribe</span></code></pre><div className="commit-note"><span className="check">✓</span><div><strong>Activity logged</strong><small>Committed to your local Scribe repository</small></div><span className="commit-time">just now</span></div></div>;
}
