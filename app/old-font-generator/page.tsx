import type { Metadata } from 'next'
import Link from 'next/link'
import FontGeneratorTool from '@/components/tools/FontGeneratorTool'
import UnicodeTextTool from '@/components/tools/UnicodeTextTool'
import { fontOptions } from '@/lib/fonts'
import { buildToolMetadata } from '@/lib/seo'
import { applicationSchema, breadcrumbSchema } from '@/lib/schema'

const url = 'https://oldfont.net/old-font-generator'
const primaryKeyword = 'old font generator'
const secondaryKeywords = [
  'old english font generator',
  'old english font text generator copy and paste',
  'old english generator font',
  'olde english font generator',
  'old style font generator',
  'old font easy',
  'old fonts generator',
  'vintage font generator',
  'gothic font generator',
  'medieval font generator',
  'antique font generator',
  'old school font generator',
  'old times font',
  'classic serif font generator',
  'heritage font generator',
  'display font generator',
  'old font poster maker',
  'vintage poster text generator',
  'retro poster font generator',
  'old english poster maker',
  'text poster generator',
  'old timey font generator'
]

const eras = [
  { era: '1700s & colonial print', fonts: 'IM Fell DW Pica, Cardo, EB Garamond', fontId: 'fell', sample: 'Ye Olde Almanack' },
  { era: '1800s & Victorian', fonts: 'Libre Baskerville, Playfair Display, Almendra Display', fontId: 'playfair-display', sample: 'Grand Exhibition 1851' },
  { era: 'Wild West wanted posters', fonts: 'Rye, Sancreek', fontId: 'rye', sample: 'WANTED' },
  { era: '1900s–1920s newspapers', fonts: 'Abril Fatface, Vollkorn, Merriweather', fontId: 'abril-fatface', sample: 'Extra! Extra!' },
  { era: '1930s–1940s typewritten notes', fonts: 'Special Elite, Courier New', fontId: 'typewriter', sample: 'Classified Report' },
  { era: 'Medieval & Old English', fonts: 'UnifrakturCook, Texturina, Uncial Antiqua', fontId: 'unifraktur', sample: 'Olde Tavern' }
]

export const generateMetadata = (): Metadata =>
  buildToolMetadata({
    title: 'Old Font Generator – Vintage, Antique & Old Timey Fonts',
    description:
      'Type your text in 50+ old fonts: 1800s serifs, Victorian, Wild West, 1940s typewriter and gothic. Copy & paste old timey text or export a PNG. Free, no download.',
    url,
    keywords: [primaryKeyword, ...secondaryKeywords]
  })

export default function OldFontGeneratorPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      applicationSchema({
        name: 'Old Font Generator – Vintage & Antique Fonts',
        url,
        description:
          'Preview vintage, antique, gothic and typewriter fonts online, copy old timey Unicode text, or export PNG images.'
      }),
      breadcrumbSchema([
        { name: 'Home', url: 'https://oldfont.net/' },
        { name: 'Old Font Generator', url }
      ])
    ]
  }

  return (
    <div className='space-y-10 pb-16'>
      <div className='space-y-4'>
        <nav aria-label='Breadcrumb' className='text-sm text-gray-600'><Link href='/' className='underline'>Home</Link> / Old Font Generator</nav>
        <h1 className='text-3xl font-semibold text-ink sm:text-4xl'>Old Font Generator – Vintage, Antique &amp; Old Timey Text</h1>
        <p className='max-w-3xl text-lg text-gray-700'>
          Preview your words in 50+ old fonts, from 1700s print and Victorian posters to 1940s typewriters. Export a PNG for invitations,
          logos and signs, or copy old timey text straight into your bio.
        </p>
      </div>

      <FontGeneratorTool
        pageTitle='Old Font Generator'
        pageDescription='Pick a vintage font, adjust the layout, then export a PNG.'
        primaryKeyword={primaryKeyword}
        secondaryKeywords={secondaryKeywords}
        defaultFontId='fell'
      />

      <UnicodeTextTool heading='Copy &amp; paste old timey text' defaultText='Old Timey Text'
        description='These styles are Unicode letters, so they paste into Instagram, TikTok, Discord and most apps.'
        styles={['script', 'fraktur', 'small-caps', 'monospace', 'bold-script', 'bold-fraktur']} />

      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold text-ink'>Old fonts by era</h2>
        <p className='text-gray-700'>Not sure which font fits? Start with the era you want to recreate, then pick one of these in the font list above.</p>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {eras.map(item => (
            <div key={item.era} className='rounded-lg border border-brass/30 bg-white p-5'>
              <h3 className='font-semibold text-ink'>{item.era}</h3>
              <p className='mt-3 text-2xl text-ink' style={{ fontFamily: fontOptions.find(font => font.id === item.fontId)?.fontFamily }}>{item.sample}</p>
              <p className='mt-3 text-sm text-gray-700'>Try: {item.fonts}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='space-y-4 text-gray-700'>
        <h2 className='text-2xl font-semibold text-ink'>How to use the old font generator</h2>
        <ol className='list-decimal space-y-2 pl-6'>
          <li>Type your name, title or phrase in the text box.</li>
          <li>Choose a font from the list. The preview updates instantly.</li>
          <li>Adjust size, line height, background color and padding.</li>
          <li>Press Export PNG to download a high-resolution image (2× pixel ratio).</li>
        </ol>
        <p>
          Need text you can paste instead of an image? Use the copy &amp; paste box above, or the{' '}
          <Link href='/old-english-font-generator' className='underline'>Old English text generator</Link> for gothic lettering.
          Looking for 90s web fonts like Comic Sans and Tahoma? Try the{' '}
          <Link href='/old-internet-font-generator' className='underline'>old internet font generator</Link>. To install a font on your
          computer, visit <Link href='/free-old-fonts-download' className='underline'>free old fonts download</Link>.
        </p>
      </section>

      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  )
}
