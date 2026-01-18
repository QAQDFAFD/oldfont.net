import type { Metadata } from 'next'
import FontGeneratorTool from '@/components/tools/FontGeneratorTool'
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
  'display font generator'
]

export const generateMetadata = (): Metadata =>
  buildToolMetadata({
    title: 'Old Font Generator – Easy Old Style, Gothic & Vintage Fonts Online',
    description:
      'The easiest old font generator online. Create old English, old style, gothic, vintage, and medieval text instantly. 20+ free fonts. Adjust size, spacing, then copy or export as PNG. Perfect for logos, tattoos, invitations, and designs. No download required.',
    url,
    keywords: [primaryKeyword, ...secondaryKeywords]
  })

export default function OldFontGeneratorPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      applicationSchema({
        name: 'Old Font Generator – Old English & Vintage Fonts',
        url,
        description:
          'Generate Old English, gothic, and vintage style text online. Customize font size and line height, then copy or export instantly.'
      }),
      breadcrumbSchema([
        { name: 'Home', url: 'https://oldfont.net/' },
        { name: 'Old Font Generator', url }
      ])
    ]
  }

  return (
    <main className='space-y-10 pb-16'>
      <div className='space-y-4'>
        <p className='text-sm font-semibold uppercase tracking-wide text-brass'>{primaryKeyword}</p>
        <h1 className='text-3xl font-semibold text-ink'>Old Font Generator – Vintage & Classic Style Text</h1>
        <p className='text-lg text-gray-700'>
          Craft elegant vintage lettering with this {primaryKeyword}. Preview heritage scripts, classic serifs, gothic,
          and old English fonts, then copy your text or HTML for invitations, branding, and elegant designs.
        </p>
      </div>

      <FontGeneratorTool
        pageTitle='Old Font Generator'
        pageDescription='Preview heritage scripts, elegant serifs, and vintage fonts for all occasions.'
        primaryKeyword={primaryKeyword}
        secondaryKeywords={secondaryKeywords}
        defaultFontId='fell'
      />

      <section className='prose prose-stone max-w-none space-y-6 text-gray-800'>
        <h2>The Easiest Old Font Generator Online</h2>
        <p>
          OldFont.net provides the most user-friendly old font generator. Our old fonts online platform makes it incredibly
          simple to create old style text—just type, choose your font, and copy. No registration, no downloads,
          completely free. This old font easy approach means you can generate vintage text in seconds.
        </p>
        <p>
          Whether you need an old style font generator for wedding invitations, a gothic font generator for gaming channels,
          or an antique font generator for vintage branding, our platform delivers perfect results every time.
        </p>

        <h2>How to Use This Old Font Generator</h2>
        <p>
          Enter your phrase, choose from the list of old fonts, and adjust font size and line height. The live preview
          updates instantly, so you can copy the exact styling you need. The Copy HTML button wraps your words in an
          inline style for quick use in CMS tools or email editors.
        </p>
        <p>
          Because this is an <em>old english generator font</em>, letterforms emphasize ornate strokes. Pair a
          larger font size with balanced line height for legibility, or tighten spacing when you want an inked,
          traditional look.
        </p>

        <h2>Old English Font Generator Copy and Paste</h2>
        <p>
          Many visitors look for an <strong>old english font text generator copy and paste</strong>. This page keeps
          things simple: type once, preview in Old English or Gothic, and copy formatted text. Use it for Instagram
          bios, TikTok overlays, printable certificates, or tattoo mockups.
        </p>
        <p>
          You can also switch to vintage serif option for wedding invitations and certificates, or decorative
          gothic display for dramatic headings. Every option is optimized for readability while keeping the antique
          mood.
        </p>

        <h2>Old School and Classic Font Styles</h2>
        <p>
          Our old fonts generator includes old school font generator options for retro projects. These nostalgic styles bring
          authentic vintage character to your designs, perfect for themed events, nostalgic branding, and retro media.
          From old times font styles to classic serif elegance, find the perfect old style font generator for any project.
        </p>

        <h2>Why OldFont.net Is Your Best Old Fonts Online Choice</h2>
        <p>
          With 20+ carefully curated fonts, our old font generator offers the most comprehensive collection of old style,
          gothic, vintage, and medieval typography. The old font easy interface means anyone can create professional
          vintage text without design experience.
        </p>
        <p>
          Whether you call it an olde english font generator, antique font generator, or old times font creator, our
          platform delivers consistent, high-quality results that will make your designs stand out.
        </p>
      </section>

      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  )
}
