import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import type { MetadataRoute } from 'next'
import { pageUrl } from '@/lib/site'

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>

const routeMeta: Record<string, { priority: number; changeFrequency: ChangeFrequency }> = {
  '/': { priority: 1, changeFrequency: 'daily' },
  '/old-font-generator': { priority: 0.95, changeFrequency: 'weekly' },
  '/old-english-font-generator': { priority: 0.95, changeFrequency: 'weekly' },
  '/typewriter-font-generator': { priority: 0.95, changeFrequency: 'weekly' },
  '/old-internet-font-generator': { priority: 0.9, changeFrequency: 'weekly' },
  '/free-old-fonts-download': { priority: 0.9, changeFrequency: 'weekly' },
  '/vintage-font-generator': { priority: 0.85, changeFrequency: 'weekly' },
  '/retro-font-generator': { priority: 0.85, changeFrequency: 'weekly' },
  '/about': { priority: 0.4, changeFrequency: 'monthly' },
  '/contact': { priority: 0.3, changeFrequency: 'yearly' },
  '/privacy': { priority: 0.3, changeFrequency: 'yearly' },
  '/terms': { priority: 0.3, changeFrequency: 'yearly' }
}

function pageFiles(dir: string): string[] {
  const files: string[] = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name.startsWith('_') || entry.name.startsWith('[') || entry.name === 'api') continue
      files.push(...pageFiles(full))
    } else if (entry.name === 'page.tsx' || entry.name === 'page.ts' || entry.name === 'page.mdx') {
      files.push(full)
    }
  }
  return files
}

function routeFromFile(file: string, appDir: string): string | null {
  const rel = path.relative(appDir, path.dirname(file))
  if (!rel || rel === '.') return '/'
  const segments = rel.split(path.sep).filter(segment => !(segment.startsWith('(') && segment.endsWith(')')))
  if (segments.some(segment => segment.startsWith('[') || segment.startsWith('_'))) return null
  return `/${segments.join('/')}`
}

function lastModified(file: string): Date {
  try {
    const iso = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], {
      cwd: process.cwd(),
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore']
    }).trim()
    if (iso) {
      const date = new Date(iso)
      if (!Number.isNaN(date.getTime())) return date
    }
  } catch {
    // Uncommitted pages, or a build without git history, fall back to the file time.
  }
  return fs.statSync(file).mtime
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), 'app')
  return pageFiles(appDir)
    .flatMap(file => {
      const route = routeFromFile(file, appDir)
      if (!route) return []
      const meta = routeMeta[route] ?? { priority: 0.5, changeFrequency: 'monthly' as const }
      return [{
        url: pageUrl(route),
        lastModified: lastModified(file),
        changeFrequency: meta.changeFrequency,
        priority: meta.priority
      }]
    })
    .sort((a, b) => b.priority - a.priority || a.url.localeCompare(b.url))
}
