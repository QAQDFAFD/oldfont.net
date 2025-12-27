import type { Metadata } from 'next'
import { buildToolMetadata } from '@/lib/seo'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

const url = 'https://oldfont.net/free-old-fonts-download'
const primaryKeyword = 'free old fonts download'

export const generateMetadata = (): Metadata =>
  buildToolMetadata({
    title: 'Free Old Fonts Download – Gothic, Vintage & Blackletter TTF/OTF',
    description:
      'Download free old English, gothic, vintage, and blackletter fonts. High-quality TTF & OTF files for design, tattoos, logos, and print. No registration required.',
    url,
    keywords: [
      primaryKeyword,
      'old english font download',
      'gothic font free download',
      'blackletter font ttf',
      'vintage font download',
      'medieval font free',
      'old style font download',
      'free gothic fonts',
      'antique fonts download'
    ]
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
    name: 'UnifrakturCook',
    style: 'Blackletter',
    googleUrl: 'https://fonts.google.com/specimen/UnifrakturCook',
    description: 'Bold blackletter font perfect for headlines and logos.'
  },
  {
    name: 'MedievalSharp',
    style: 'Medieval',
    googleUrl: 'https://fonts.google.com/specimen/MedievalSharp',
    description: 'Sharp medieval-style font with great readability.'
  },
  {
    name: 'Pirata One',
    style: 'Gothic / Pirate',
    googleUrl: 'https://fonts.google.com/specimen/Pirata+One',
    description: 'Decorative gothic font with a pirate theme.'
  },
  {
    name: 'IM Fell DW Pica',
    style: 'Classic Serif',
    googleUrl: 'https://fonts.google.com/specimen/IM+Fell+DW+Pica',
    description: 'Historic typeface based on 17th century printing.'
  },
  {
    name: 'Almendra SC',
    style: 'Vintage Serif',
    googleUrl: 'https://fonts.google.com/specimen/Almendra+SC',
    description: 'Elegant vintage serif with small caps style.'
  },
  {
    name: 'Cinzel Decorative',
    style: 'Classical',
    googleUrl: 'https://fonts.google.com/specimen/Cinzel+Decorative',
    description: 'Decorative classical font inspired by Roman inscriptions.'
  },
  {
    name: 'Special Elite',
    style: 'Typewriter',
    googleUrl: 'https://fonts.google.com/specimen/Special+Elite',
    description: 'Authentic typewriter font with vintage character.'
  },
  {
    name: 'Cormorant Garamond',
    style: 'Elegant Serif',
    googleUrl: 'https://fonts.google.com/specimen/Cormorant+Garamond',
    description: 'Refined serif font perfect for elegant designs.'
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
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'Free Old Fonts Download',
        description: 'Download free old English, gothic, vintage, and blackletter fonts in TTF and OTF formats.',
        url,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: downloadableFonts.map((font, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'SoftwareApplication',
              name: font.name,
              applicationCategory: 'Font',
              operatingSystem: 'Windows, macOS, Linux',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD'
              }
            }
          }))
        }
      },
      breadcrumbSchema([
        { name: 'Home', url: 'https://oldfont.net/' },
        { name: 'Free Old Fonts Download', url }
      ]),
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
          These fonts are available on Google Fonts and can be used directly in your web projects or downloaded for free.
        </p>
        
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {googleFontsRecommended.map(font => (
            <a
              key={font.name}
              href={font.googleUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='group rounded-xl border border-brass/20 bg-white p-5 shadow-sm transition-all hover:border-brass/40 hover:shadow-md'
            >
              <div className='space-y-2'>
                <div className='flex items-start justify-between'>
                  <h3 className='font-semibold text-ink group-hover:text-brass'>{font.name}</h3>
                  <svg className='h-4 w-4 text-gray-400 transition-colors group-hover:text-brass' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25' />
                  </svg>
                </div>
                <span className='inline-block rounded bg-parchment px-2 py-0.5 text-xs text-gray-600'>
                  {font.style}
                </span>
                <p className='text-sm text-gray-600'>{font.description}</p>
              </div>
            </a>
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

