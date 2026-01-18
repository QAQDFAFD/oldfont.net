export type JsonLd = Record<string, unknown>;

export const websiteSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "OldFont.net",
  url: "https://oldfont.net",
  description:
    "Free online old font generator with 40+ fonts including old English, vintage, gothic, medieval, and typewriter styles. Type, preview, copy or download instantly.",
  inLanguage: "en",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://oldfont.net/?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const organizationSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OldFont.net",
  url: "https://oldfont.net",
  description:
    "Free online font generator platform offering 40+ old English, gothic, vintage, medieval, and typewriter fonts for designers, creators, and enthusiasts.",
  logo: "https://oldfont.net/og/og-image.png",
  sameAs: [
    "https://oldfont.net",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: "Worldwide",
    availableLanguage: "English"
  }
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
    availability: "https://schema.org/InStock"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1250",
    bestRating: "5",
    worstRating: "1"
  },
  author: {
    "@type": "Organization",
    name: "OldFont.net",
    url: "https://oldfont.net"
  }
});

export const fontCollectionSchema = (config: {
  name: string;
  description: string;
  url: string;
  items: Array<{
    name: string;
    description: string;
    url?: string;
    fileFormat?: string;
  }>;
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: config.name,
  url: config.url,
  description: config.description,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: config.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: item.name,
        description: item.description,
        applicationCategory: "Font",
        operatingSystem: "Windows, macOS, Linux",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD"
        },
        ...(item.url && { url: item.url }),
        ...(item.fileFormat && { fileFormat: item.fileFormat })
      }
    }))
  }
});

export const howToSchema = (config: {
  name: string;
  description: string;
  steps: Array<{
    name: string;
    text: string;
  }>;
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: config.name,
  description: config.description,
  step: config.steps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text
  }))
});

export const personSchema = (config: {
  name: string;
  description?: string;
  url?: string;
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: config.name,
  description: config.description,
  url: config.url
});
