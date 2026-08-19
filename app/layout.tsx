import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Scribe — A local-first developer activity journal", template: "%s | Scribe" },
  description: "Turn VS Code activity into readable, Git-backed work logs that stay on your machine.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { type: "website", title: "Scribe — Your workday, written down.", description: "A local-first developer activity journal for VS Code.", url: "/", siteName: "Scribe", images: [{ url: "/og.png", width: 1792, height: 896, alt: "Scribe — Your workday, written down." }] },
  twitter: { card: "summary_large_image", title: "Scribe — Your workday, written down.", description: "A local-first developer activity journal for VS Code.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
