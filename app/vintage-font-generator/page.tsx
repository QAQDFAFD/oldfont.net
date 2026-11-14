import type { Metadata } from 'next'
import Link from 'next/link'
import FontGeneratorTool from '@/components/tools/FontGeneratorTool'
import UnicodeTextTool from '@/components/tools/UnicodeTextTool'
import { buildToolMetadata } from '@/lib/seo'
import { applicationSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import { HOME_URL, pageUrl } from '@/lib/site'

const url = pageUrl('/vintage-font-generator')
const vintageFontIds = [
  'playfair-display',
  'cormorant',
  'cormorant-unicase',
  'cinzel',
  'cinzel-plain',
  'fell',
  'almendra',
  'almendra-regular',
  'almendra-display',
  'libre-baskerville',
  'eb-garamond',
  'cardo',
  'crimson-text',
  'vollkorn'
]

const uses = [
  {
    name: 'Wedding suites and place cards',
    faces: 'Playfair Display, Cormorant, Libre Baskerville',
    note: 'High-contrast serifs read as formal print. Keep the guest name short so the thin strokes stay clear on a small card.'
  },
  {
    name: 'Book titles and chapter openers',
    faces: 'EB Garamond, Cardo, Crimson Text',
    note: 'These faces come from book typography. They suit a title page or a poem better than a loud poster.'
  },
  {
    name: 'Shop signs, wine labels, and hotel names',
    faces: 'Cinzel, Almendra Display, Vollkorn',
    note: 'Caps and small caps feel engraved. Export a PNG when the sign has to match on screen and in print.'
  }
]

const faqs = [
  {
    question: 'What is a vintage font generator?',
    answer:
      'It turns a short phrase into lettering that looks like older print: invitations, book titles, labels, and shop signs. On this page that means antique serif and inscription faces, plus Unicode script and small caps you can paste.'
  },
  {
    question: 'Can I copy and paste vintage text for free?',
    answer:
      'Yes. Type in the copy box, choose Script, Small Caps, or Old English, and press Copy. The result is Unicode text, so it can go into a caption or bio where special characters are allowed. The tool is free and does not require an account.'
  },
  {
    question: 'How is this different from the Old English generator?',
    answer:
      'The Old English page is for blackletter and gothic lettering. This vintage page is for antique serifs and engraved caps used on invitations, books, and labels. Use Old English when you want Fraktur. Use vintage when you want a quieter, printed look.'
  },
  {
    question: 'Can I use the PNG for an invitation or a label?',
    answer:
      'Yes. The image maker exports a PNG at twice the preview resolution. Check the font license on the download page before you use a face commercially, and keep a plain-text version of the names for accessibility.'
  },
  {
    question: 'Will the copied text look the same everywhere?',
    answer:
      'No. Unicode script and small caps depend on the font installed on the device that displays them. A PNG is the reliable way to keep the exact vintage face from the preview.'
  }
]

export const generateMetadata = (): Metadata =>
  buildToolMetadata({
    title: 'Vintage Font Generator – Copy & Paste Text (Free)',
    description:
      'Free vintage font generator to copy and paste antique lettering. Style a wedding card, book title, wine label, or shop sign, then export a PNG. No sign-up.',
    url,
    keywords: [
      'vintage font generator',
      'vintage text generator',
      'antique font generator',
      'copy and paste vintage text',
      'free vintage fonts'
    ]
  })

export default function VintageFontGeneratorPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      applicationSchema({
        name: 'Vintage Font Generator',
        url,
        description: 'Copy and paste vintage Unicode text, or export a PNG in antique serif and inscription fonts.'
      }),
      breadcrumbSchema([
        { name: 'Home', url: HOME_URL },
        { name: 'Vintage Font Generator', url }
      ]),
      faqSchema(faqs)
    ]
  }

  return (
    <div className='space-y-8 pb-16'>
      <header className='space-y-3'>
        <nav aria-label='Breadcrumb' className='text-sm text-gray-600'>
          <Link href='/' className='underline'>Home</Link> / Vintage Font Generator
        </nav>
        <h1 className='text-3xl font-semibold text-ink sm:text-4xl'>Vintage Font Generator – Copy &amp; Paste Text (Free)</h1>
        <p className='max-w-3xl text-lg text-gray-700'>
          Free vintage font generator for copy and paste text. Set a name for a wedding card, a book title, a wine label, or a shop sign in antique serif lettering, then copy Unicode script or save a PNG. No account is required.
        </p>
      </header>

      <UnicodeTextTool
        heading='Copy and paste vintage text'
        description='Script and small caps travel as text. Old English is here if the line needs a blackletter accent, but the serif previews below are the vintage look.'
        defaultText='Grand Hotel'
        styles={['script', 'small-caps', 'fraktur']}
      />

      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold text-ink'>Vintage serif image maker</h2>
        <p className='text-gray-700'>
          Preview the same words in Playfair Display, Cormorant, Cinzel, and other antique faces, then export a PNG. This makes a picture, not copyable text.
        </p>
        <FontGeneratorTool
          pageTitle='Create a vintage image'
          pageDescription='Pick an antique serif, adjust the layout, then export a PNG.'
          primaryKeyword='vintage font generator'
          defaultFontId='playfair-display'
          allowedFontIds={vintageFontIds}
        />
      </section>

      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold text-ink'>Where vintage lettering fits</h2>
        <div className='grid gap-4 sm:grid-cols-3'>
          {uses.map(item => (
            <div key={item.name} className='rounded-lg border border-brass/30 bg-white p-5'>
              <h3 className='font-semibold text-ink'>{item.name}</h3>
              <p className='mt-1 text-sm font-medium text-brass'>{item.faces}</p>
              <p className='mt-2 text-gray-700'>{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='space-y-3 text-gray-700'>
        <h2 className='text-2xl font-semibold text-ink'>Vintage, Old English, or retro?</h2>
        <p>
          Vintage on this page means aged print and engraved caps. It is not the heavy gothic of the{' '}
          <Link href='/old-english-font-generator' className='underline'>Old English font generator</Link>, and it is not the mid-century poster look of the{' '}
          <Link href='/retro-font-generator' className='underline'>retro font generator</Link>.
          For a typed note, use the <Link href='/typewriter-font-generator' className='underline'>typewriter font generator</Link>.
          To install a face, read the licenses on <Link href='/free-old-fonts-download' className='underline'>free old fonts download</Link>.
        </p>
      </section>

      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold text-ink'>Frequently asked questions</h2>
        {faqs.map(faq => (
          <div key={faq.question} className='rounded-lg border border-brass/20 bg-white p-5'>
            <h3 className='font-semibold text-ink'>{faq.question}</h3>
            <p className='mt-2 text-gray-700'>{faq.answer}</p>
          </div>
        ))}
      </section>

      <nav aria-label='Related tools' className='flex flex-wrap gap-4 text-sm font-semibold text-ink underline underline-offset-4'>
        <Link href='/old-font-generator'>Old font generator</Link>
        <Link href='/old-english-font-generator'>Old English font generator</Link>
        <Link href='/retro-font-generator'>Retro font generator</Link>
        <Link href='/free-old-fonts-download'>Download fonts and check licenses</Link>
      </nav>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  )
}
