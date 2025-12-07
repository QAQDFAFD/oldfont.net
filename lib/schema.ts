export type JsonLd = Record<string, unknown>;

export const websiteSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "OldFont.net",
  url: "https://oldfont.net",
  description:
    "OldFont.net is an online old font generator focused on old English, vintage, gothic, and typewriter style fonts. Type your text, preview in old fonts, and copy or download in seconds.",
  inLanguage: "en",
});

export const organizationSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OldFont.net",
  url: "https://oldfont.net",
  description:
    "OldFont.net is an online old font generator focused on old English, vintage, gothic, and typewriter style fonts. Type your text, preview in old fonts, and copy or download in seconds.",
  logo: "https://oldfont.net/og/og-image.png",
  sameAs: [
    "https://oldfont.net",
  ],
});

export const applicationSchema = (config: {
  name: string;
  url: string;
  description: string;
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: config.name,
  url: config.url,
  applicationCategory: "Utility",
  operatingSystem: "All",
  description: config.description,
});

export const breadcrumbSchema = (trail: { name: string; url: string }[]): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
