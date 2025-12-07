import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OldFont.net - Old Font Generator',
    short_name: 'OldFont',
    description: 'Free online old font generator with 10+ fonts. Create old English, gothic, vintage, and typewriter text.',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf8f3',
    theme_color: '#b8860b',
    icons: [
      {
        src: '/og/og-image.png',
        sizes: '1200x630',
        type: 'image/png',
      },
    ],
  }
}

