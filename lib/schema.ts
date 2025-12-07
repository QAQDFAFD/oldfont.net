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

export const faqSchema = (faqs: { question: string; answer: string }[]): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const softwareAppSchema = (config: {
  name: string;
  url: string;
  description: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: config.name,
  url: config.url,
  applicationCategory: "DesignApplication",
  operatingSystem: "Web Browser",
  description: config.description,
  offers: {
    "@type": "Offer",
    price: config.offers?.price || "0",
    priceCurrency: config.offers?.priceCurrency || "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1250",
    bestRating: "5",
    worstRating: "1"
  }
});
