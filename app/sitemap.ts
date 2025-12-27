import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://oldfont.net'

  // 最后更新日期 - 2025年1月14日
  const lastModified = new Date('2025-01-14')

  const routes = [
    {
      url: '/',
      priority: 1.0,
      changeFrequency: 'weekly' as const
    },
    {
      url: '/old-font-generator',
      priority: 0.9,
      changeFrequency: 'monthly' as const
    },
    {
      url: '/old-english-font-generator',
      priority: 0.8,
      changeFrequency: 'monthly' as const
    },
    {
      url: '/typewriter-font-generator',
      priority: 0.8,
      changeFrequency: 'monthly' as const
    },
    {
      url: '/free-old-fonts-download',
      priority: 0.8,
      changeFrequency: 'monthly' as const
    }
  ]

  return routes.map(route => ({
    url: `${baseUrl}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }))
}
