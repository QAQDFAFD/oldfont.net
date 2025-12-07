import type { Metadata } from "next";
import "@/styles/globals.css";
import { fontVariables } from "@/lib/fonts";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Container from "@/components/layout/Container";
import AnalyticsPlaceholder from "@/components/layout/AnalyticsPlaceholder";

export const metadata: Metadata = {
  metadataBase: new URL("https://oldfont.net"),
  title: "OldFont.net – Old Font Generator & Old English Text Tools",
  description:
    "OldFont.net is an online old font generator focused on old English, vintage, gothic, and typewriter style fonts. Type your text, preview in old fonts, and copy or download in seconds.",
  keywords: [
    "old font generator",
    "old english font generator",
    "old english font text generator copy and paste",
    "old english generator font",
    "olde english font generator",
    "vintage font generator",
    "gothic font generator",
    "typewriter font generator",
  ],
  openGraph: {
    type: "website",
    url: "https://oldfont.net",
    title: "OldFont.net – Old Font Generator & Old English Text Tools",
    description:
      "Generate old English and vintage fonts online. OldFont.net lets you type and preview old fonts, then copy or export your text for social media, logos, or design projects.",
    siteName: "OldFont.net",
  },
  twitter: {
    card: "summary_large_image",
    title: "OldFont.net – Old Font Generator",
    description:
      "Online old font generator for old English, vintage, gothic and typewriter styles.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="min-h-screen bg-parchment text-ink">
        <SiteHeader />
        <main>
          <Container>{children}</Container>
        </main>
        <SiteFooter />
        <AnalyticsPlaceholder />
      </body>
    </html>
  );
}
