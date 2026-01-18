import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://oldfont.net'
  const lastModified = new Date('2026-01-18')

  const routes = [
    {
      url: '/',
      priority: 1.0,
      changeFrequency: 'daily' as const
    },
    {
      url: '/old-font-generator',
      priority: 0.95,
      changeFrequency: 'weekly' as const
    },
    {
      url: '/old-english-font-generator',
      priority: 0.95,
      changeFrequency: 'weekly' as const
    },
    {
      url: '/typewriter-font-generator',
      priority: 0.95,
      changeFrequency: 'weekly' as const
    },
    {
      url: '/free-old-fonts-download',
      priority: 0.9,
      changeFrequency: 'weekly' as const
    }
  ]

  return routes.map(route => ({
    url: `${baseUrl}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }))
}
