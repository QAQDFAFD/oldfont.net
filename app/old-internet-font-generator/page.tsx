import type { Metadata } from 'next'
import Link from 'next/link'
import FontGeneratorTool from '@/components/tools/FontGeneratorTool'
import UnicodeTextTool from '@/components/tools/UnicodeTextTool'
import { buildToolMetadata } from '@/lib/seo'
import { applicationSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'

const url = 'https://oldfont.net/old-internet-font-generator'

const retroFontIds = [
  'times-new-roman', 'comic-sans', 'courier-new', 'verdana', 'tahoma', 'georgia', 'arial', 'impact',
  'vt323', 'press-start', 'silkscreen', 'typewriter'
]

const eras = [
  { name: 'Early web pages (1990s)', fonts: 'Times New Roman, Courier New', note: 'Browsers showed Times New Roman when a page did not set a font, so plain early websites looked like printed documents.' },
  { name: 'Personal homepages (late 1990s)', fonts: 'Comic Sans MS, Verdana, Georgia, Impact', note: 'Comic Sans shipped with Windows in the mid-1990s, and Verdana, Georgia and Impact were part of the "core fonts for the web" that most computers had installed.' },
  { name: 'Windows 95 and 98', fonts: 'MS Sans Serif, Arial', note: 'The interface used the bitmap MS Sans Serif. Its crisp pixels are closest to Silkscreen or VT323 here.' },
  { name: 'Windows XP era (2000s)', fonts: 'Tahoma, Verdana', note: 'Tahoma was the Windows XP interface font and appeared in countless forums, chat apps and MySpace-era profiles.' },
  { name: 'DOS, terminals and 8-bit games', fonts: 'VT323, Press Start 2P', note: 'Fixed-width pixel lettering recalls green-screen terminals, BIOS screens and arcade games.' }
]

const faqs = [
  { question: 'What is an old internet font?', answer: 'It usually means the fonts people saw on websites, chat apps and computer screens in the 1990s and 2000s: Times New Roman, Comic Sans MS, Verdana, Tahoma, Courier New, and pixel bitmap lettering from old operating systems and games.' },
  { question: 'Can I copy and paste old internet text?', answer: 'Yes. The copy tool above turns your words into Unicode typewriter (monospace) letters and small caps, which you can paste into bios, captions and usernames where special characters are allowed. Fonts such as Comic Sans cannot be copied as text; export them as a PNG image instead.' },
  { question: 'Why does Comic Sans or Tahoma look different on my phone?', answer: 'Classic web fonts are system fonts. The preview uses the copy installed on your device, and many phones do not include them, so a similar fallback font is shown. For the authentic look, open the generator on a Windows or Mac computer and export a PNG.' },
  { question: 'What font did the old Google logo use?', answer: 'The Google logo used from 1999 to 2015 was based on Catull, a commercial serif typeface that is not included here. A classic serif such as Georgia or Times New Roman gives a similar early-web feel.' },
  { question: 'What font did old Windows use?', answer: 'Windows 95 and 98 used MS Sans Serif for menus and dialogs, Windows XP used Tahoma, and Windows Vista and later moved to Segoe UI. Try Tahoma or the pixel fonts above for a retro Windows look.' }
]

export const generateMetadata = (): Metadata => buildToolMetadata({
  title: 'Old Internet Font Generator – 90s & Y2K Web Fonts',
  description: 'Type in classic old internet fonts: Comic Sans, Times New Roman, Tahoma, Verdana and pixel computer fonts. Copy retro typewriter text or save a PNG. Free, no sign-up.',
  url
})

export default function OldInternetFontGeneratorPage() {
  const schema = { '@context': 'https://schema.org', '@graph': [
    applicationSchema({ name: 'Old Internet Font Generator', url, description: 'Preview 1990s and 2000s web fonts and pixel computer fonts, copy retro Unicode text or export PNG images.' }),
    breadcrumbSchema([{ name: 'Home', url: 'https://oldfont.net/' }, { name: 'Old Internet Font Generator', url }]),
    faqSchema(faqs)
  ] }

  return (
    <div className='space-y-8 pb-16'>
      <header className='space-y-3'>
        <nav aria-label='Breadcrumb' className='text-sm text-gray-600'><Link href='/' className='underline'>Home</Link> / Old Internet Font Generator</nav>
        <h1 className='text-3xl font-semibold text-ink sm:text-4xl'>Old Internet Font Generator</h1>
        <p className='max-w-3xl text-lg text-gray-700'>
          Bring back the look of 90s homepages, Windows XP chat windows and DOS screens. Preview your words in classic web fonts and
          pixel computer fonts, then save a PNG — or copy retro Unicode text for your bio.
        </p>
      </header>

      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold text-ink'>Old web and computer font previewer</h2>
        <FontGeneratorTool pageTitle='Pick an old internet font' pageDescription='Comic Sans, Tahoma, Times New Roman, pixel fonts and more. Export a PNG to keep the exact look.'
          primaryKeyword='old internet font generator' defaultFontId='comic-sans' allowedFontIds={retroFontIds} />
      </section>

      <UnicodeTextTool heading='Copy & paste retro computer text' description='Unicode typewriter letters and small caps work in many bios, captions and usernames.'
        defaultText='Welcome to my homepage' styles={['monospace', 'small-caps', 'script']} />

      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold text-ink'>Old internet fonts by era</h2>
        <div className='grid gap-4 sm:grid-cols-2'>
          {eras.map(era => (
            <div key={era.name} className='rounded-lg border border-brass/30 bg-white p-5'>
              <h3 className='font-semibold text-ink'>{era.name}</h3>
              <p className='mt-1 text-sm font-medium text-brass'>{era.fonts}</p>
              <p className='mt-2 text-gray-700'>{era.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold text-ink'>Frequently asked questions</h2>
        {faqs.map(faq => <div key={faq.question} className='rounded-lg border border-brass/20 bg-white p-5'><h3 className='font-semibold text-ink'>{faq.question}</h3><p className='mt-2 text-gray-700'>{faq.answer}</p></div>)}
      </section>

      <nav aria-label='Related tools' className='flex flex-wrap gap-4 text-sm font-semibold text-ink underline underline-offset-4'>
        <Link href='/typewriter-font-generator'>Typewriter font generator</Link>
        <Link href='/old-english-font-generator'>Old English text generator</Link>
        <Link href='/old-font-generator'>Vintage font generator</Link>
      </nav>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  )
}
