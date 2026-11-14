import type { Metadata } from 'next'
import Link from 'next/link'
import FontGeneratorTool from '@/components/tools/FontGeneratorTool'
import UnicodeTextTool from '@/components/tools/UnicodeTextTool'
import { buildToolMetadata } from '@/lib/seo'
import { applicationSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import { HOME_URL, pageUrl } from '@/lib/site'

const url = pageUrl('/retro-font-generator')
const retroFontIds = [
  'abril-fatface',
  'rye',
  'sancreek',
  'josefin-slab',
  'lora',
  'arvo',
  'typewriter',
  'press-start',
  'silkscreen',
  'impact'
]

const boards = [
  {
    name: '1960s concert and fair posters',
    faces: 'Abril Fatface',
    note: 'A very fat display serif fills a poster line. Use one or two words, then export a PNG so the thick and thin strokes do not depend on the fonts installed on someone else\'s screen.'
  },
  {
    name: 'Diner boards and western storefronts',
    faces: 'Rye, Sancreek',
    note: 'Wood-type shapes with a western lean. They are for menu headers and saloon signs, not for a paragraph of body text.'
  },
  {
    name: '1970s magazine headlines',
    faces: 'Josefin Slab, Lora, Arvo',
    note: 'Slab and geometric serifs feel like a printed magazine rather than a computer screen. Pair a short headline with ordinary body text.'
  },
  {
    name: 'Arcade cabinets',
    faces: 'Press Start 2P, Silkscreen',
    note: 'Pixel letters recall game marquees. They are retro display faces, not the system fonts of a 1990s website.'
  }
]

const faqs = [
  {
    question: 'What is a retro font generator?',
    answer:
      'On this page, retro means mid-century posters, diner boards, magazine headlines, and arcade lettering. You can copy Unicode text for a username, or export a PNG that keeps a display face.'
  },
  {
    question: 'Can I copy and paste retro text for free?',
    answer:
      'Yes. The copy box makes typewriter-style Unicode, small caps, and script from the letters you type. It is free, with no account. Display faces such as Rye or Abril Fatface cannot be pasted as live text; export those as a PNG.'
  },
  {
    question: 'How is retro different from old internet fonts?',
    answer:
      'The old internet generator previews the system fonts of 1990s and 2000s computers, such as Comic Sans, Tahoma, and Times New Roman. This retro page is about posters and signs from roughly the 1960s through the 1980s, plus pixel display faces. Use the old internet page when the reference is a website or a Windows screen.'
  },
  {
    question: 'Which output should I use for a poster versus a username?',
    answer:
      'Use the PNG export for a poster, menu board, or album title so the face stays put. Use the Unicode copy box for a username or a short caption, and expect some apps to reject special characters.'
  },
  {
    question: 'Do I need to install anything?',
    answer:
      'No. Previews and PNG files are made in the browser. If you want the font file itself, the download page lists licenses and files. Installing a font is separate from copying Unicode text.'
  }
]

export const generateMetadata = (): Metadata =>
  buildToolMetadata({
    title: 'Retro Font Generator – Copy & Paste Text (Free)',
    description:
      'Free retro font generator to copy and paste poster text. Preview 1960s–1980s display, diner, and arcade lettering, then save a PNG. No sign-up.',
    url,
    keywords: [
      'retro font generator',
      'retro text generator',
      'copy and paste retro text',
      'vintage poster font',
      'free retro fonts'
    ]
  })

export default function RetroFontGeneratorPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      applicationSchema({
        name: 'Retro Font Generator',
        url,
        description: 'Copy and paste retro Unicode text, or export a PNG of poster, diner, and arcade lettering.'
      }),
      breadcrumbSchema([
        { name: 'Home', url: HOME_URL },
        { name: 'Retro Font Generator', url }
      ]),
      faqSchema(faqs)
    ]
  }

  return (
    <div className='space-y-8 pb-16'>
      <header className='space-y-3'>
        <nav aria-label='Breadcrumb' className='text-sm text-gray-600'>
          <Link href='/' className='underline'>Home</Link> / Retro Font Generator
        </nav>
        <h1 className='text-3xl font-semibold text-ink sm:text-4xl'>Retro Font Generator – Copy &amp; Paste Text (Free)</h1>
        <p className='max-w-3xl text-lg text-gray-700'>
          Free retro font generator for copy and paste text. Try a concert poster, a diner board, a magazine headline, or an arcade marquee, then copy Unicode letters or save a PNG. No account is required.
        </p>
      </header>

      <UnicodeTextTool
        heading='Copy and paste retro text'
        description='Typewriter Unicode and small caps work in many usernames and captions. Script is included for a looser poster line.'
        defaultText='Night Drive'
        styles={['monospace', 'small-caps', 'script']}
      />

      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold text-ink'>Retro poster image maker</h2>
        <p className='text-gray-700'>
          Preview display faces made for signs and headlines, then export a PNG. Pixel fonts here are cabinet lettering, not a substitute for the old web’s system fonts.
        </p>
        <FontGeneratorTool
          pageTitle='Create a retro image'
          pageDescription='Pick a poster or pixel face, adjust the layout, then export a PNG.'
          primaryKeyword='retro font generator'
          defaultFontId='abril-fatface'
          allowedFontIds={retroFontIds}
        />
      </section>

      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold text-ink'>Retro lettering by job</h2>
        <div className='grid gap-4 sm:grid-cols-2'>
          {boards.map(item => (
            <div key={item.name} className='rounded-lg border border-brass/30 bg-white p-5'>
              <h3 className='font-semibold text-ink'>{item.name}</h3>
              <p className='mt-1 text-sm font-medium text-brass'>{item.faces}</p>
              <p className='mt-2 text-gray-700'>{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='space-y-3 text-gray-700'>
        <h2 className='text-2xl font-semibold text-ink'>Pick the neighboring tool when the reference changes</h2>
        <p>
          A 1990s homepage or a Windows XP window belongs on the{' '}
          <Link href='/old-internet-font-generator' className='underline'>old internet font generator</Link>.
          A mechanical office note belongs on the{' '}
          <Link href='/typewriter-font-generator' className='underline'>typewriter font generator</Link>.
          Antique invitations and book titles belong on the{' '}
          <Link href='/vintage-font-generator' className='underline'>vintage font generator</Link>.
          Licenses for the files are on <Link href='/free-old-fonts-download' className='underline'>free old fonts download</Link>.
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
        <Link href='/old-internet-font-generator'>Old internet font generator</Link>
        <Link href='/typewriter-font-generator'>Typewriter font generator</Link>
        <Link href='/vintage-font-generator'>Vintage font generator</Link>
        <Link href='/old-font-generator'>Old font generator</Link>
      </nav>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  )
}
