import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, LogWindow, marketplaceUrl } from "./components";

export const metadata: Metadata = { title: "Scribe — A local-first developer activity journal", description: "Turn VS Code activity into readable, Git-backed work logs that stay on your machine." };

const features = [
  ["01", "Tracks the edits", "Scribe counts file changes as you work, grouped into a logging interval you control."],
  ["02", "Writes the record", "Each interval becomes a plain Markdown entry—readable in your editor and easy to search."],
  ["03", "Commits the history", "Logs are committed to a private Git repository under your local .scribe directory."],
  ["04", "Closes the loop", "Daily and weekly summaries turn a stream of small edits into a useful work journal."],
];

export default function Home() {
  return <main>
    <Header />
    <section className="hero" aria-labelledby="hero-heading"><div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> Local-first for VS Code</p><h1 id="hero-heading">Your workday,<br /><em>written down.</em></h1><p className="hero-intro">Scribe quietly turns your editing activity into readable Markdown logs and Git-backed history—right on your machine.</p><div className="hero-actions"><a className="button" href={marketplaceUrl}>Install for VS Code <span aria-hidden="true">↗</span></a><Link className="text-link" href="/docs">Read the docs <span aria-hidden="true">→</span></Link></div><p className="microcopy">Free and open source. No account required.</p></div><LogWindow /></section>

    <section className="proof-strip" aria-label="Scribe product attributes"><span>✦ Works quietly in the background</span><span>✦ Plain Markdown output</span><span>✦ Git-backed local history</span></section>

    <section className="story section-shell" id="how-it-works"><div className="section-heading"><p className="kicker">How it works</p><h2>A paper trail,<br />without the paperwork.</h2></div><p className="section-lede">No timers to start. No updates to write at the end of the day. Open a workspace and Scribe keeps the record while you keep your flow.</p><div className="feature-grid">{features.map(([number,title,copy]) => <article className="feature-card" key={number}><span>{number}</span><div className="feature-icon" aria-hidden="true">{number === "01" ? "⌁" : number === "02" ? "¶" : number === "03" ? "⑂" : "✓"}</div><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className="local-section"><div className="section-shell local-grid"><div><p className="kicker kicker-light">Local by design</p><h2>Your activity is<br /><em>yours alone.</em></h2><p>Scribe writes to a workspace-specific folder on your computer. There is no account, hosted dashboard, or remote sync in the current extension.</p><Link className="light-link" href="/docs#privacy">Read the privacy notes <span aria-hidden="true">→</span></Link></div><div className="folder-card"><div className="folder-label">Your machine</div><code><span>~</span>/.scribe/<strong>your-workspace</strong>/</code><ul><li><span>MD</span> log-2026-08-19.md</li><li><span>MD</span> daily-summary-2026-08-19.md</li><li><span>GIT</span> .git / local history</li></ul><p><span>●</span> Nothing leaves this folder</p></div></div></section>

    <section className="summary-section section-shell"><div className="summary-demo"><div className="summary-paper"><p>DAILY SUMMARY</p><h3>Wednesday, August 19</h3><hr /><div><strong>10:30</strong><span>Updated Header.tsx and page.tsx</span></div><div><strong>14:00</strong><span>Refined navigation and documentation</span></div><div><strong>17:45</strong><span>Final activity log committed</span></div><blockquote>3 activity records captured locally.</blockquote></div></div><div><p className="kicker">Built-in summaries</p><h2>Remember what<br />moved forward.</h2><p>Daily and weekly summaries collect Scribe&apos;s Git commit messages into a lightweight account of your activity. Useful for reflection, stand-ups, or simply picking up where you left off.</p><Link className="text-link" href="/docs#log-format">See the log format <span aria-hidden="true">→</span></Link></div></section>

    <section className="final-cta"><p className="eyebrow"><span className="status-dot" /> Ready when you are</p><h2>Let your editor<br /><em>keep the notes.</em></h2><p>Install Scribe and start building your local work journal today.</p><a className="button button-lime" href={marketplaceUrl}>Install for VS Code <span aria-hidden="true">↗</span></a><small>Requires VS Code 1.80+ and Git</small></section>
    <Footer />
  </main>;
}
