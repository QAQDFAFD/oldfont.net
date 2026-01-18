import type { Metadata } from 'next'
import FontGeneratorTool from '@/components/tools/FontGeneratorTool'
import { buildToolMetadata } from '@/lib/seo'
import { applicationSchema, breadcrumbSchema } from '@/lib/schema'

const url = 'https://oldfont.net/old-english-font-generator'
const primaryKeyword = 'old english font generator'
const secondaryKeywords = [
  'old english font text generator copy and paste',
  'old english generator font',
  'olde english font generator',
  'gothic font generator',
  'blackletter font generator',
  'medieval font generator',
  'fraktur font generator',
  'gothic text generator',
  'blackletter text generator',
  'ornate font generator'
]

export const generateMetadata = (): Metadata =>
  buildToolMetadata({
    title: 'Olde English Font Generator – Gothic Blackletter & Fraktur Text',
    description:
      'The ultimate olde English font generator with 15+ gothic and blackletter fonts. Create ornate gothic lettering instantly. Type, preview, adjust size, then copy or export as PNG. Perfect for tattoos, logos, certificates, and medieval designs. Free old english font generator copy and paste.',
    url,
    keywords: [primaryKeyword, ...secondaryKeywords]
  })

export default function OldEnglishFontGeneratorPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      applicationSchema({
        name: 'Old English Font Generator – Copy & Paste',
        url,
        description: 'Type gothic and blackletter text online with adjustable size and spacing, then copy instantly.'
      }),
      breadcrumbSchema([
        { name: 'Home', url: 'https://oldfont.net/' },
        { name: 'Old English Font Generator', url }
      ])
    ]
  }

  return (
    <main className='space-y-10 pb-16'>
      <div className='space-y-4'>
        <p className='text-sm font-semibold uppercase tracking-wide text-brass'>{primaryKeyword}</p>
        <h1 className='text-3xl font-semibold text-ink'>Old English Font Generator – Copy & Paste Gothic Text</h1>
        <p className='text-lg text-gray-700'>
          Design ornate gothic lettering with this {primaryKeyword}. Preview blackletter fonts, tweak spacing, and copy
          your text or HTML for bios, certificates, and creative projects.
        </p>
      </div>

      <FontGeneratorTool
        pageTitle='Old English Font Generator'
        pageDescription='Type Old English, blackletter, and gothic fonts without downloads.'
        primaryKeyword={primaryKeyword}
        secondaryKeywords={secondaryKeywords}
        defaultFontId='unifraktur'
      />

      <section className='prose prose-stone max-w-none space-y-6 text-gray-800'>
        <h2>The Ultimate Olde English Font Generator</h2>
        <p>
          OldFont.net provides the most comprehensive olde English font generator available. Whether you need gothic text generator
          for dramatic headlines or blackletter text generator for authentic medieval designs, our platform delivers perfect results.
          This old English font generator features 15+ carefully curated fonts including Unifraktur, MedievalSharp, and Pirata One.
        </p>

        <h2>Why Use an Old English Font Text Generator?</h2>
        <p>
          Old English lettering adds drama and heritage to headlines, event invites, and personal monograms. This tool
          lets you test multiple blackletter weights so you can decide whether a sharp gothic look or a softer vintage
          serif fits your project. Adjust size and line height for maximum readability in your chosen layout.
        </p>
        <p>
          With copy-and-paste convenience, this generator doubles as an{' '}
          <em>old english font text generator copy and paste</em> for social posts and profile bios. You can also export
          HTML to drop into your landing page or newsletter.
        </p>

        <h2>Gothic and Fraktur Text Generator Options</h2>
        <p>
          Our olde English font generator includes authentic fraktur font generator styles. These classic German Fraktur
          typefaces feature ornate strokes and historical authenticity, perfect for certificates, awards, and formal documents.
          Choose from gothic text generator options for bold, impactful headings or delicate blackletter text generator
          for elegant body text.
        </p>

        <h2>Best Uses for Old English Fonts</h2>
        <p>
          Gothic fonts excel on certificates, retro gaming titles, tattoo mockups, and medieval-themed events. Pair them
          with minimalist backgrounds so the ornate strokes remain legible. If you need something more approachable,
          switch to vintage serif option within the same tool.
        </p>
        <p>
          For longer paragraphs, keep line height generous. For logos or monograms, try larger sizes with tighter
          spacing to enhance the decorative flair.
        </p>

        <h2>Tips for Consistent Branding</h2>
        <p>
          Save specific font family, size, and line height you like, then reuse them across your graphics.
          Consistency helps your audience recognize your brand even when you experiment with different phrases. Because
          the generator previews everything live, you can iterate quickly without installing fonts.
        </p>
      </section>

      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  )
}
