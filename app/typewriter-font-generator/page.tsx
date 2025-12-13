import type { Metadata } from 'next'
import FontGeneratorTool from '@/components/tools/FontGeneratorTool'
import { buildToolMetadata } from '@/lib/seo'
import { applicationSchema, breadcrumbSchema } from '@/lib/schema'

const url = 'https://oldfont.net/typewriter-font-generator'
const primaryKeyword = 'typewriter font generator'
const secondaryKeywords = ['vintage font generator', 'retro typewriter text online']

export const generateMetadata = (): Metadata =>
  buildToolMetadata({
    title: 'Typewriter Font Generator – Retro Text Online',
    description:
      'Create nostalgic typewriter text online. Preview vintage monospaced lettering, adjust spacing, and copy your text instantly.',
    url,
    keywords: [primaryKeyword, ...secondaryKeywords]
  })

export default function TypewriterFontGeneratorPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      applicationSchema({
        name: 'Typewriter Font Generator – Retro Text',
        url,
        description:
          'Preview and copy typewriter-style monospaced text for retro designs, captions, and code-inspired branding.'
      }),
      breadcrumbSchema([
        { name: 'Home', url: 'https://oldfont.net/' },
        { name: 'Typewriter Font Generator', url }
      ])
    ]
  }

  return (
    <main className='space-y-10 pb-16'>
      <div className='space-y-4'>
        <p className='text-sm font-semibold uppercase tracking-wide text-brass'>{primaryKeyword}</p>
        <h1 className='text-3xl font-semibold text-ink'>Typewriter Font Generator – Retro Text Online</h1>
        <p className='text-lg text-gray-700'>
          Channel analog charm with this {primaryKeyword}. Preview vintage monospaced fonts, set your preferred size and
          line height, and copy text or HTML for captions, newsletters, or nostalgic UI designs.
        </p>
      </div>

      <FontGeneratorTool
        pageTitle='Typewriter Font Generator'
        pageDescription='Create retro monospaced lettering with instant preview and copy tools.'
        primaryKeyword={primaryKeyword}
        secondaryKeywords={secondaryKeywords}
        defaultFontId='typewriter'
      />

      <section className='prose prose-stone max-w-none space-y-6 text-gray-800'>
        <h2>How to Create Typewriter Text</h2>
        <p>
          Typewriter fonts mimic classic mechanical keyboards with uniform spacing and subtle ink irregularities. Use
          this generator to test a few variations, then copy the output for social captions, blog headers, or retro app
          interfaces. Increasing the line height improves readability for longer paragraphs, while smaller sizes with
          tight spacing feel authentic to vintage printouts.
        </p>
        <p>
          Because everything runs in the browser, you can experiment freely without installing fonts. The Copy HTML
          option preserves spacing for embeds on websites or newsletters.
        </p>

        <h2>Best Places to Use Typewriter Fonts</h2>
        <p>
          Use a typewriter face when you want a nostalgic voice: journaling apps, note-taking interfaces, cocktail
          menus, or detective-themed event invites. Pair the font with warm parchment backgrounds for extra
          authenticity, or mix it with modern sans-serif text for contrast.
        </p>
        <p>
          For headlines, scale up the font size and keep line height close to 1.1 for dense, punchy titles. For body
          text, increase line height to 1.4–1.6 to maintain clarity on mobile screens.
        </p>
      </section>

      <script type='application/ld+json' suppressHydrationWarning>
        {JSON.stringify(schema)}
      </script>
    </main>
  )
}
