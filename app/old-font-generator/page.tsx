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
  'olde english font generator'
]

export const generateMetadata = (): Metadata =>
  buildToolMetadata({
    title: 'Old Font Generator – Old English & Vintage Style Text',
    description:
      'Use this old font generator to style text in old English, gothic, and vintage lettering. Type, preview, and copy or download in seconds.',
    url,
    keywords: [primaryKeyword, ...secondaryKeywords]
  })

export default function OldFontGeneratorPage() {
  const schema = [
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

  return (
    <main className='space-y-10 pb-16'>
      <div className='space-y-4'>
        <p className='text-sm font-semibold uppercase tracking-wide text-brass'>{primaryKeyword}</p>
        <h1 className='text-3xl font-semibold text-ink'>Old Font Generator – Vintage & Classic Style Text</h1>
        <p className='text-lg text-gray-700'>
          Craft elegant vintage lettering with this {primaryKeyword}. Preview ornate scripts, classic serifs, gothic,
          and old English fonts, then copy your text or HTML for invitations, branding, and elegant designs.
        </p>
      </div>

      <FontGeneratorTool
        pageTitle='Old Font Generator'
        pageDescription='Preview ornate scripts, elegant serifs, and vintage fonts for all occasions.'
        primaryKeyword={primaryKeyword}
        secondaryKeywords={secondaryKeywords}
        defaultFontId='almendra'
        allowedFontIds={[
          'almendra',
          'cormorant',
          'cinzel',
          'unifraktur',
          'maguntia',
          'fraktur',
          'goudy',
          'medieval',
          'pirata'
        ]}
      />

      <section className='prose prose-stone max-w-none space-y-6 text-gray-800'>
        <h2>How to Use This Old Font Generator</h2>
        <p>
          Enter your phrase, choose from the list of old fonts, and adjust font size and line height. The live preview
          updates instantly, so you can copy the exact styling you need. The Copy HTML button wraps your words in an
          inline style for quick use in CMS tools or email editors.
        </p>
        <p>
          Because this is an <em>old english generator font</em>, the letterforms emphasize ornate strokes. Pair a
          larger font size with balanced line height for legibility, or tighten spacing when you want an inked,
          traditional look.
        </p>

        <h2>Old English Font Generator Copy and Paste</h2>
        <p>
          Many visitors look for an <strong>old english font text generator copy and paste</strong>. This page keeps
          things simple: type once, preview in Old English or Gothic, and copy the formatted text. Use it for Instagram
          bios, TikTok overlays, printable certificates, or tattoo mockups.
        </p>
        <p>
          You can also switch to the vintage serif option for wedding invitations and certificates, or the decorative
          gothic display for dramatic headings. Every option is optimized for readability while keeping the antique
          mood.
        </p>

        <h2>Where to Use Old Fonts</h2>
        <p>
          Old fonts shine on social media captions, gamer tags, product packaging, and personal logos. They bring
          gravitas to awards and certificates, while the typewriter variant feels nostalgic and approachable. Whether
          you need an <em>olde english font generator</em> for a guild emblem or a vintage face for a café menu, the
          workflow stays the same—type, preview, copy.
        </p>
        <p>
          Experiment with multiple phrases and sizes until the balance feels right. Save your favorite combinations so
          your brand voice stays consistent across platforms.
        </p>
      </section>

      <script type='application/ld+json' suppressHydrationWarning>
        {JSON.stringify(schema)}
      </script>
    </main>
  )
}
