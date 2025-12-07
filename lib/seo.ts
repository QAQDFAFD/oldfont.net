import type { Metadata } from "next";

export type ToolSeoConfig = {
  title: string;
  description: string;
  url: string;
  keywords?: string[];
  ogImage?: string;
};

export function buildToolMetadata({ 
  title, 
  description, 
  url, 
  keywords = [],
  ogImage = "/og/og-image.png"
}: ToolSeoConfig): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { 
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "OldFont.net",
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@oldfontnet"
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
