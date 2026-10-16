import type { Metadata } from 'next'
import Link from 'next/link'
import FontGeneratorTool from '@/components/tools/FontGeneratorTool'
import UnicodeTextTool from '@/components/tools/UnicodeTextTool'
import { buildToolMetadata } from '@/lib/seo'
import { applicationSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'

const url = 'https://oldfont.net/old-english-font-generator'
const faqs = [
  { question: 'How do I copy and paste Old English text?', answer: 'Enter your text above, choose Old English or Bold Old English, and press Copy. Paste the result into your app. These are Unicode characters; support varies by app and device.' },
  { question: 'Can I copy any blackletter font into my bio?', answer: 'No. The two copyable styles use Unicode characters. Fonts such as UnifrakturCook and Pirata One change how text is drawn on this website. Use the image maker to export those fonts as PNG images.' },
  { question: 'Why do some characters stay the same or show as boxes?', answer: 'The converter changes only the Latin letters A–Z and a–z. Numbers, accented letters, other scripts and emoji stay unchanged. Boxes indicate that the receiving app or device lacks a font for those Unicode symbols.' },
  { question: 'Is this an Old English language translator?', answer: 'No. It changes the appearance of letters, not their language or meaning. Old English here refers to the popular name for blackletter-style lettering.' },
  { question: 'Can I use the result for a tattoo or logo?', answer: 'Use the image maker to compare lettering before sharing a PNG with your designer. Check the original font license before commercial use. Keep important information in plain text for accessibility.' }
]

export const generateMetadata = (): Metadata => buildToolMetadata({
  title: 'Old English Font Generator – Copy & Paste',
  description: 'Create Old English text to copy and paste in regular or bold Fraktur. Preview blackletter fonts and export PNG images for tattoos, logos and invitations.',
  url
})

export default function OldEnglishFontGeneratorPage() {
  const schema = { '@context': 'https://schema.org', '@graph': [
    applicationSchema({ name: 'Old English Font Generator', url, description: 'Convert Latin letters to copyable Unicode Fraktur, or create PNG images with blackletter fonts.' }),
    breadcrumbSchema([{ name: 'Home', url: 'https://oldfont.net/' }, { name: 'Old English Font Generator', url }]),
    faqSchema(faqs)
  ] }

  return (
    <div className='space-y-8 pb-16'>
      <header className='space-y-3'>
        <nav aria-label='Breadcrumb' className='text-sm text-gray-600'><Link href='/' className='underline'>Home</Link> / Old English Font Generator</nav>
        <h1 className='text-3xl font-semibold text-ink sm:text-4xl'>Old English Font Generator</h1>
        <p className='max-w-3xl text-lg text-gray-700'>Create copyable gothic lettering for a nickname or bio, or make an image with a real blackletter font. Free to use, with no account required.</p>
        <a href='#image-maker' className='inline-block text-sm font-semibold text-ink underline underline-offset-4'>Need a tattoo, logo or invitation? Jump to the image maker ↓</a>
      </header>
      <UnicodeTextTool />
      <section id='image-maker' className='scroll-mt-6 space-y-4'>
        <h2 className='text-2xl font-semibold text-ink'>Blackletter font image maker</h2>
        <p className='text-gray-700'>Preview your words in Unifraktur, Texturina and other gothic-inspired fonts. Export a PNG to keep the exact lettering. This mode creates images, not copyable Unicode text.</p>
        <FontGeneratorTool pageTitle='Create a blackletter image' pageDescription='Choose a font, adjust the layout, then export a PNG.'
          primaryKeyword='old english font generator' defaultFontId='unifraktur'
          allowedFontIds={['unifraktur', 'unifraktur-maguntia', 'texturina', 'grenze-gotisch', 'astloch', 'bokor', 'germania-one', 'medieval', 'pirata']} />
      </section>
      <section className='space-y-4 text-gray-700'>
        <h2 className='text-2xl font-semibold text-ink'>Copyable text or a font image?</h2>
        <div className='grid gap-4 sm:grid-cols-2'>
          <div className='rounded-lg border border-brass/30 bg-white p-5'><h3 className='font-semibold text-ink'>For nicknames and short captions</h3><p className='mt-2'>Unicode Fraktur travels with the text when pasted. It does not require installing a font, but some platforms restrict special characters. Screen readers and search may handle these symbols differently from ordinary letters.</p></div>
          <div className='rounded-lg border border-brass/30 bg-white p-5'><h3 className='font-semibold text-ink'>For designs and printed lettering</h3><p className='mt-2'>Real fonts offer distinct letter shapes. Compare a short name or phrase in the image maker, then export at twice the preview resolution. Add a plain-text caption when sharing an image.</p></div>
        </div>
      </section>
      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold text-ink'>Frequently asked questions</h2>
        {faqs.map(faq => <div key={faq.question} className='rounded-lg border border-brass/20 bg-white p-5'><h3 className='font-semibold text-ink'>{faq.question}</h3><p className='mt-2 text-gray-700'>{faq.answer}</p></div>)}
      </section>
      <nav aria-label='Related tools' className='flex flex-wrap gap-4 text-sm font-semibold text-ink underline underline-offset-4'>
        <Link href='/free-old-fonts-download'>Download fonts and check licenses</Link>
        <Link href='/old-font-generator'>Vintage font image maker</Link>
        <Link href='/typewriter-font-generator'>Typewriter font image maker</Link>
      </nav>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  )
}
