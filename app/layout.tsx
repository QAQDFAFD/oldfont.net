import type { Metadata } from 'next'
import '@/styles/globals.css'
import { fontVariables } from '@/lib/fonts'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import Container from '@/components/layout/Container'
import AnalyticsPlaceholder from '@/components/layout/AnalyticsPlaceholder'

export const metadata: Metadata = {
  metadataBase: new URL('https://oldfont.net'),
  title: {
    default: 'OldFont.net – Free Old Font Generator & Old English Text Tools Online',
    template: '%s | OldFont.net'
  },
  description:
    'Free online old font generator with 10+ fonts. Create old English, gothic, vintage, and typewriter text instantly. Export as PNG or copy HTML. No download required!',
  keywords: [
    'old font generator',
    'old english font generator',
    'old english font text generator copy and paste',
    'old english generator font',
    'olde english font generator',
    'vintage font generator',
    'gothic font generator',
    'typewriter font generator',
    'blackletter font generator',
    'medieval font generator',
    'free font generator',
    'online font generator'
  ],
  authors: [{ name: 'OldFont.net' }],
  creator: 'OldFont.net',
  publisher: 'OldFont.net',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oldfont.net',
    title: 'OldFont.net – Free Old Font Generator & Old English Text Tools',
    description:
      'Generate old English and vintage fonts online with 10+ font styles. Export as PNG images or copy HTML. Perfect for logos, social media, tattoos, and design projects.',
    siteName: 'OldFont.net',
    images: [
      {
        url: '/og/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OldFont.net - Old Font Generator'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OldFont.net – Free Old Font Generator',
    description:
      'Create old English, gothic, vintage & typewriter fonts online. 10+ fonts, PNG export, instant preview. 100% free!',
    images: ['/og/og-image.png'],
    creator: '@oldfontnet'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={fontVariables}>
      <body className='min-h-screen bg-parchment text-ink'>
        <SiteHeader />
        <main>
          <Container>{children}</Container>
        </main>
        <SiteFooter />
        <AnalyticsPlaceholder />
      </body>
    </html>
  )
}
