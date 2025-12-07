import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://oldfont.net";
  const now = new Date();
  
  const routes = [
    {
      url: "/",
      priority: 1.0,
      changeFrequency: "daily" as const,
    },
    {
      url: "/old-font-generator",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      url: "/old-english-font-generator",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      url: "/typewriter-font-generator",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
