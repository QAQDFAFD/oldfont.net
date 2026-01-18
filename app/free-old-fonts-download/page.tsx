import type { Metadata } from 'next'
import { buildToolMetadata } from '@/lib/seo'
import { breadcrumbSchema, faqSchema, fontCollectionSchema, howToSchema } from '@/lib/schema'

const url = 'https://oldfont.net/free-old-fonts-download'
const primaryKeyword = 'free old fonts download'
const secondaryKeywords = [
  'antique font generator',
  'old english font download',
  'gothic font free download',
  'blackletter font ttf',
  'vintage font download',
  'medieval font free',
  'old style font download',
  'free gothic fonts',
  'antique fonts download',
  'free old english fonts',
  'free blackletter fonts',
  'free medieval fonts',
  'free vintage fonts',
  'free gothic fonts ttf',
  'google fonts download',
  'free serif fonts download',
  'free display fonts download'
]

export const generateMetadata = (): Metadata =>
  buildToolMetadata({
    title: 'Free Antique Fonts Download – Gothic, Vintage, Medieval & Blackletter TTF/OTF',
    description:
      'Download 40+ free antique fonts including old English, gothic, vintage, medieval, and blackletter styles. High-quality TTF & OTF files from Google Fonts. Perfect antique font generator for design, tattoos, logos, and print. No registration required, instant download.',
    url,
    keywords: [primaryKeyword, ...secondaryKeywords]
  })

// 字体数据配置
const downloadableFonts = [
  {
    id: 'old-english-unifraktur',
    name: 'Old English Unifraktur Maguntia',
    description: 'A classic blackletter font based on traditional German Fraktur typefaces. Ideal for gothic designs, tattoos, and medieval-themed projects.',
    style: 'Blackletter / Fraktur',
    format: 'TTF',
    fileSize: '85 KB',
    fileName: 'OldEnglish-Charset-UnifrakturMaguntia.ttf',
    previewText: 'Old English',
    fontFamily: 'var(--font-unifraktur-maguntia), cursive',
    license: 'SIL Open Font License'
  },
  {
    id: 'old-englishish',
    name: 'Old Englishish Regular',
    description: 'A modern interpretation of Old English lettering with improved readability. Great for logos, headlines, and display text.',
    style: 'Gothic / Display',
    format: 'TTF',
    fileSize: '32 KB',
    fileName: 'OldEnglishish-Regular.ttf',
    previewText: 'Old Englishish',
    fontFamily: 'var(--font-old-englishish), serif',
    license: 'Free for personal use'
  }
]

// Google Fonts 推荐（可在线使用）
const googleFontsRecommended = [
  {
    id: 'unifrakturcook',
    name: 'UnifrakturCook',
    style: 'Blackletter / Fraktur',
    googleUrl: 'https://fonts.google.com/specimen/UnifrakturCook',
    description: 'Bold blackletter font perfect for headlines and logos. Based on traditional German Fraktur.',
    previewText: 'UnifrakturCook',
    fontFamily: 'var(--font-blackletter), cursive',
    license: 'SIL Open Font License',
    source: 'Google Fonts'
  },
  {
    id: 'medieval-sharp',
    name: 'MedievalSharp',
    style: 'Medieval',
    googleUrl: 'https://fonts.google.com/specimen/MedievalSharp',
    description: 'Sharp medieval-style font with great readability. Perfect for game titles and fantasy themes.',
    previewText: 'MedievalSharp',
    fontFamily: 'var(--font-medieval), cursive',
    license: 'SIL Open Font License',
    source: 'Google Fonts'
  },
  {
    id: 'pirata-one',
    name: 'Pirata One',
    style: 'Gothic / Pirate',
    googleUrl: 'https://fonts.google.com/specimen/Pirata+One',
    description: 'Decorative gothic font with a pirate theme. Bold and impactful for headlines.',
    previewText: 'Pirata One',
    fontFamily: 'var(--font-pirata), cursive',
    license: 'SIL Open Font License',
    source: 'Google Fonts'
  },
  {
    id: 'im-fell-dw-pica',
    name: 'IM Fell DW Pica',
    style: 'Classic Serif',
    googleUrl: 'https://fonts.google.com/specimen/IM+Fell+DW+Pica',
    description: 'Historic typeface based on 17th century printing. Authentic vintage character.',
    previewText: 'IM Fell DW Pica',
    fontFamily: 'var(--font-fell), serif',
    license: 'SIL Open Font License',
    source: 'Google Fonts'
  },
  {
    id: 'almendra-sc',
    name: 'Almendra SC',
    style: 'Vintage Serif',
    googleUrl: 'https://fonts.google.com/specimen/Almendra+SC',
    description: 'Elegant vintage serif with small caps style. Great for formal designs.',
    previewText: 'Almendra SC',
    fontFamily: 'var(--font-almendra), serif',
    license: 'SIL Open Font License',
    source: 'Google Fonts'
  },
  {
    id: 'cinzel-decorative',
    name: 'Cinzel Decorative',
    style: 'Classical / Roman',
    googleUrl: 'https://fonts.google.com/specimen/Cinzel+Decorative',
    description: 'Decorative classical font inspired by Roman inscriptions. Perfect for titles.',
    previewText: 'Cinzel Decorative',
    fontFamily: 'var(--font-gothic), serif',
    license: 'SIL Open Font License',
    source: 'Google Fonts'
  },
  {
    id: 'special-elite',
    name: 'Special Elite',
    style: 'Typewriter',
    googleUrl: 'https://fonts.google.com/specimen/Special+Elite',
    description: 'Authentic typewriter font with vintage character. Great for retro designs.',
    previewText: 'Special Elite',
    fontFamily: 'var(--font-typewriter), monospace',
    license: 'SIL Open Font License',
    source: 'Google Fonts'
  },
  {
    id: 'cormorant-garamond',
    name: 'Cormorant Garamond',
    style: 'Elegant Serif',
    googleUrl: 'https://fonts.google.com/specimen/Cormorant+Garamond',
    description: 'Refined serif font perfect for elegant designs. Contemporary take on classic Garamond.',
    previewText: 'Cormorant',
    fontFamily: 'var(--font-display), serif',
    license: 'SIL Open Font License',
    source: 'Google Fonts'
  },
  {
    id: 'texturina',
    name: 'Texturina',
    style: 'Blackletter / Gothic',
    googleUrl: 'https://fonts.google.com/specimen/Texturina',
    description: 'Modern blackletter font with multiple optical sizes. Versatile for display and body text.',
    previewText: 'Texturina',
    fontFamily: 'var(--font-texturina), serif',
    license: 'SIL Open Font License',
    source: 'Google Fonts'
  },
  {
    id: 'uncial-antiqua',
    name: 'Uncial Antiqua',
    style: 'Medieval / Uncial',
    googleUrl: 'https://fonts.google.com/specimen/Uncial+Antiqua',
    description: 'Beautiful uncial script with medieval appearance. Great for fantasy and Celtic designs.',
    previewText: 'Uncial Antiqua',
    fontFamily: 'var(--font-uncial-antiqua), serif',
    license: 'SIL Open Font License',
    source: 'Google Fonts'
  },
  {
    id: 'grenze-gotisch',
    name: 'Grenze Gotisch',
    style: 'Gothic Blackletter',
    googleUrl: 'https://fonts.google.com/specimen/Grenze+Gotisch',
    description: 'Gothic blackletter font with modern geometry. Perfect for dramatic headlines.',
    previewText: 'Grenze Gotisch',
    fontFamily: 'var(--font-grenze-gotisch), serif',
    license: 'SIL Open Font License',
    source: 'Google Fonts'
  },
  {
    id: 'astloch',
    name: 'Astloch',
    style: 'Blackletter',
    googleUrl: 'https://fonts.google.com/specimen/Astloch',
    description: 'Distinctive blackletter font with ornate details. Great for certificates and formal documents.',
    previewText: 'Astloch',
    fontFamily: 'var(--font-astloch), cursive',
    license: 'SIL Open Font License',
    source: 'Google Fonts'
  },
  {
    id: 'germania-one',
    name: 'Germania One',
    style: 'Gothic / Display',
    googleUrl: 'https://fonts.google.com/specimen/Germania+One',
    description: 'Bold display font with gothic influence. Strong and impactful for titles.',
    previewText: 'Germania One',
    fontFamily: 'var(--font-germania-one), serif',
    license: 'SIL Open Font License',
    source: 'Google Fonts'
  },
  {
    id: 'rye',
    name: 'Rye',
    style: 'Western / Wood Type',
    googleUrl: 'https://fonts.google.com/specimen/Rye',
    description: 'Vintage western wood type style. Perfect for rustic and cowboy themes.',
    previewText: 'Rye Font',
    fontFamily: 'var(--font-rye), serif',
    license: 'SIL Open Font License',
    source: 'Google Fonts'
  },
  {
    id: 'abril-fatface',
    name: 'Abril Fatface',
    style: 'Display / Didone',
    googleUrl: 'https://fonts.google.com/specimen/Abril+Fatface',
    description: 'Ultra-bold display font with dramatic contrast. Perfect for magazine headlines.',
    previewText: 'Abril Fatface',
    fontFamily: 'var(--font-abril-fatface), serif',
    license: 'SIL Open Font License',
    source: 'Google Fonts'
  },
  {
    id: 'cinzel',
    name: 'Cinzel',
    style: 'Classical / Roman',
    googleUrl: 'https://fonts.google.com/specimen/Cinzel',
    description: 'Elegant classical Roman font inspired by inscriptions. Great for luxury brands.',
    previewText: 'Cinzel',
    fontFamily: 'var(--font-cinzel), serif',
    license: 'SIL Open Font License',
    source: 'Google Fonts'
  },
  {
    id: 'playfair-display',
    name: 'Playfair Display',
    style: 'Transitional / Display',
    googleUrl: 'https://fonts.google.com/specimen/Playfair+Display',
    description: 'High-contrast serif with historical influence. Perfect for elegant editorial designs.',
    previewText: 'Playfair Display',
    fontFamily: 'var(--font-playfair-display), serif',
    license: 'SIL Open Font License',
    source: 'Google Fonts'
  },
  {
    id: 'eb-garamond',
    name: 'EB Garamond',
    style: 'Classic Serif',
    googleUrl: 'https://fonts.google.com/specimen/EB+Garamond',
    description: 'Beautiful revival of Claude Garamond\'s typeface. Excellent for body text and headlines.',
    previewText: 'EB Garamond',
    fontFamily: 'var(--font-eb-garamond), serif',
    license: 'SIL Open Font License',
    source: 'Google Fonts'
  },
  {
    id: 'vollkorn',
    name: 'Vollkorn',
    style: 'Humanist Serif',
    googleUrl: 'https://fonts.google.com/specimen/Vollkorn',
    description: 'Comfortable serif font with high readability. Great for long-form text.',
    previewText: 'Vollkorn',
    fontFamily: 'var(--font-vollkorn), serif',
    license: 'SIL Open Font License',
    source: 'Google Fonts'
  },
  {
    id: 'cardo',
    name: 'Cardo',
    style: 'Classic Serif',
    googleUrl: 'https://fonts.google.com/specimen/Cardo',
    description: 'Classic serif designed for scholarly publications. Excellent for academic texts.',
    previewText: 'Cardo Font',
    fontFamily: 'var(--font-cardo), serif',
    license: 'SIL Open Font License',
    source: 'Google Fonts'
  },
  {
    id: 'merriweather',
    name: 'Merriweather',
    style: 'Slab Serif',
    googleUrl: 'https://fonts.google.com/specimen/Merriweather',
    description: 'Designed specifically for comfortable on-screen reading. High legibility.',
    previewText: 'Merriweather',
    fontFamily: 'var(--font-merriweather), serif',
    license: 'SIL Open Font License',
    source: 'Google Fonts'
  }
]

const faqs = [
  {
    question: 'Are these fonts free to use?',
    answer: 'Yes! All downloadable fonts on this page are free for personal use. Some are also licensed for commercial use - check the license info for each font.'
  },
  {
    question: 'What file formats are included?',
    answer: 'We provide fonts in TTF (TrueType Font) and OTF (OpenType Font) formats, which work on Windows, Mac, and Linux systems.'
  },
  {
    question: 'How do I install a font?',
    answer: 'On Windows: Right-click the font file and select "Install". On Mac: Double-click the font file and click "Install Font". The font will then be available in all your applications.'
  },
  {
    question: 'Can I use these fonts for commercial projects?',
    answer: 'License terms vary by font. Check the license information displayed with each font. Fonts under SIL Open Font License can be used commercially.'
  }
]

export default function FreeFontsDownloadPage() {
  const downloadableFontsSchema = fontCollectionSchema({
    name: 'Free Old Fonts Download',
    description: 'Download 40+ free old English, gothic, vintage, medieval, and blackletter fonts in TTF and OTF formats.',
    url,
    items: downloadableFonts.map(font => ({
      name: font.name,
      description: font.description,
      fileFormat: font.format
    }))
  })

  const installInstructionsSchema = howToSchema({
    name: 'How to Install Fonts',
    description: 'Step-by-step guide to install fonts on Windows, macOS, and Linux systems.',
    steps: [
      {
        name: 'Windows Installation',
        text: 'Download the font file, right-click the .ttf or .otf file, and select "Install" or "Install for all users". The font will be ready to use in all applications.'
      },
      {
        name: 'macOS Installation',
        text: 'Download the font file, double-click to open it in Font Book, then click "Install Font". The font will be available in all your applications.'
      },
      {
        name: 'Linux Installation',
        text: 'Download the font file, copy it to ~/.local/share/fonts/ directory, then run the command: fc-cache -f -v to refresh the font cache.'
      }
    ]
  })

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      downloadableFontsSchema,
      breadcrumbSchema([
        { name: 'Home', url: 'https://oldfont.net/' },
        { name: 'Free Old Fonts Download', url }
      ]),
      installInstructionsSchema,
      faqSchema(faqs)
    ]
  }

  return (
    <main className='space-y-12 pb-16'>
      {/* Hero Section */}
      <section className='space-y-4'>
        <p className='text-sm font-semibold uppercase tracking-wide text-brass'>{primaryKeyword}</p>
        <h1 className='text-3xl font-semibold text-ink md:text-4xl'>
          Free Old Fonts Download – Gothic, Vintage & Blackletter
        </h1>
        <p className='max-w-3xl text-lg text-gray-700'>
          Download high-quality old English, gothic, and vintage fonts for free. All fonts are ready to install on Windows, Mac, and Linux. Perfect for logos, tattoos, invitations, and creative projects.
        </p>
      </section>

      {/* Downloadable Fonts Section */}
      <section className='space-y-6'>
        <div className='flex items-center gap-3'>
          <span className='text-3xl'>📥</span>
          <h2 className='text-2xl font-semibold text-ink'>Direct Download Fonts</h2>
        </div>
        <p className='text-gray-600'>Click the download button to get the font file instantly. No registration required.</p>
        
        <div className='grid gap-6'>
          {downloadableFonts.map(font => (
            <div
              key={font.id}
              className='group relative overflow-hidden rounded-2xl border border-brass/30 bg-gradient-to-br from-white to-parchment/30 p-6 shadow-soft transition-all hover:border-brass/50 hover:shadow-lg'
            >
              <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
                {/* Font Info */}
                <div className='flex-1 space-y-3'>
                  <div className='flex flex-wrap items-center gap-3'>
                    <h3 className='text-xl font-semibold text-ink'>{font.name}</h3>
                    <span className='rounded-full bg-brass/10 px-3 py-1 text-xs font-medium text-brass'>
                      {font.style}
                    </span>
                  </div>
                  <p className='text-gray-700'>{font.description}</p>
                  
                  {/* Font Preview */}
                  <div 
                    className='rounded-lg bg-white/80 p-4 text-3xl md:text-4xl'
                    style={{ fontFamily: font.fontFamily }}
                  >
                    {font.previewText}
                  </div>
                  
                  {/* Meta Info */}
                  <div className='flex flex-wrap gap-4 text-sm text-gray-600'>
                    <span className='flex items-center gap-1'>
                      <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' />
                      </svg>
                      {font.format}
                    </span>
                    <span className='flex items-center gap-1'>
                      <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125' />
                      </svg>
                      {font.fileSize}
                    </span>
                    <span className='flex items-center gap-1'>
                      <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
                      </svg>
                      {font.license}
                    </span>
                  </div>
                </div>

                {/* Download Button */}
                <div className='flex-shrink-0'>
                  <a
                    href={`/fonts/${font.fileName}`}
                    download={font.fileName}
                    className='inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brass to-amber-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:from-brass/90 hover:to-amber-500 hover:shadow-xl active:scale-95'
                  >
                    <svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3' />
                    </svg>
                    Download {font.format}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Google Fonts Section */}
      <section className='space-y-6'>
        <div className='flex items-center gap-3'>
          <span className='text-3xl'>🌐</span>
          <h2 className='text-2xl font-semibold text-ink'>Recommended Google Fonts</h2>
        </div>
        <p className='text-gray-600'>
          These fonts are available on Google Fonts and can be used directly in your web projects or downloaded for free. Click the button to get them from Google Fonts.
        </p>
        
        <div className='grid gap-6'>
          {googleFontsRecommended.map(font => (
            <div
              key={font.id}
              className='group relative overflow-hidden rounded-2xl border border-brass/30 bg-gradient-to-br from-white to-parchment/30 p-6 shadow-soft transition-all hover:border-brass/50 hover:shadow-lg'
            >
              <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
                {/* Font Info */}
                <div className='flex-1 space-y-3'>
                  <div className='flex flex-wrap items-center gap-3'>
                    <h3 className='text-xl font-semibold text-ink'>{font.name}</h3>
                    <span className='rounded-full bg-brass/10 px-3 py-1 text-xs font-medium text-brass'>
                      {font.style}
                    </span>
                  </div>
                  <p className='text-gray-700'>{font.description}</p>
                  
                  {/* Font Preview */}
                  <div 
                    className='rounded-lg bg-white/80 p-4 text-3xl md:text-4xl'
                    style={{ fontFamily: font.fontFamily }}
                  >
                    {font.previewText}
                  </div>
                  
                  {/* Meta Info */}
                  <div className='flex flex-wrap gap-4 text-sm text-gray-600'>
                    <span className='flex items-center gap-1'>
                      <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
                      </svg>
                      {font.license}
                    </span>
                    <span className='flex items-center gap-1'>
                      <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25' />
                      </svg>
                      {font.source}
                    </span>
                  </div>
                </div>

                {/* Google Fonts Button */}
                <div className='flex-shrink-0'>
                  <a
                    href={font.googleUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:from-blue-500 hover:to-blue-600 hover:shadow-xl active:scale-95'
                  >
                    <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z' />
                    </svg>
                    Get on Google Fonts
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Install Section */}
      <section className='rounded-2xl border border-brass/30 bg-gradient-to-br from-parchment/50 to-white p-8'>
        <h2 className='mb-6 text-2xl font-semibold text-ink'>How to Install Fonts</h2>
        <div className='grid gap-6 md:grid-cols-3'>
          <div className='space-y-3'>
            <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl'>
              🪟
            </div>
            <h3 className='font-semibold text-ink'>Windows</h3>
            <ol className='space-y-1 text-sm text-gray-700'>
              <li>1. Download the font file</li>
              <li>2. Right-click the .ttf or .otf file</li>
              <li>3. Select "Install" or "Install for all users"</li>
              <li>4. Font is ready to use!</li>
            </ol>
          </div>
          <div className='space-y-3'>
            <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl'>
              🍎
            </div>
            <h3 className='font-semibold text-ink'>macOS</h3>
            <ol className='space-y-1 text-sm text-gray-700'>
              <li>1. Download the font file</li>
              <li>2. Double-click the font file</li>
              <li>3. Click "Install Font" in Font Book</li>
              <li>4. Font is ready to use!</li>
            </ol>
          </div>
          <div className='space-y-3'>
            <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl'>
              🐧
            </div>
            <h3 className='font-semibold text-ink'>Linux</h3>
            <ol className='space-y-1 text-sm text-gray-700'>
              <li>1. Download the font file</li>
              <li>2. Copy to ~/.local/share/fonts/</li>
              <li>3. Run: fc-cache -f -v</li>
              <li>4. Font is ready to use!</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className='space-y-6'>
        <h2 className='text-2xl font-semibold text-ink'>Perfect For</h2>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {[
            { emoji: '🎨', title: 'Logos & Branding', desc: 'Create memorable brand identities with distinctive typography' },
            { emoji: '💉', title: 'Tattoo Designs', desc: 'Preview your tattoo text before committing to ink' },
            { emoji: '💌', title: 'Invitations', desc: 'Design elegant wedding and event invitations' },
            { emoji: '🎮', title: 'Gaming & Media', desc: 'Add atmosphere to game titles and video content' }
          ].map(item => (
            <div key={item.title} className='rounded-xl border border-brass/20 bg-white p-5 shadow-sm'>
              <div className='mb-3 text-3xl'>{item.emoji}</div>
              <h3 className='font-semibold text-ink'>{item.title}</h3>
              <p className='mt-1 text-sm text-gray-600'>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className='space-y-6'>
        <h2 className='text-2xl font-semibold text-ink'>Frequently Asked Questions</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          {faqs.map((faq, i) => (
            <div key={i} className='rounded-lg border border-brass/20 bg-white p-6 shadow-sm'>
              <h3 className='font-semibold text-ink'>{faq.question}</h3>
              <p className='mt-2 text-gray-700'>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className='rounded-2xl bg-gradient-to-r from-ink to-gray-800 p-8 text-center text-white md:p-12'>
        <h2 className='text-2xl font-semibold md:text-3xl'>Want to Preview Fonts First?</h2>
        <p className='mx-auto mt-3 max-w-2xl text-gray-300'>
          Try our free online font generators to see how your text looks before downloading. Type, preview, and copy instantly!
        </p>
        <div className='mt-6 flex flex-wrap justify-center gap-4'>
          <a
            href='/old-font-generator'
            className='rounded-lg bg-brass px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-brass/90'
          >
            Try Old Font Generator
          </a>
          <a
            href='/old-english-font-generator'
            className='rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10'
          >
            Try Old English Generator
          </a>
        </div>
      </section>

      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  )
}

