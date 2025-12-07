import type { Metadata } from "next";

export type ToolSeoConfig = {
  title: string;
  description: string;
  url: string;
  keywords?: string[];
};

export function buildToolMetadata({ title, description, url, keywords = [] }: ToolSeoConfig): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "OldFont.net",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
