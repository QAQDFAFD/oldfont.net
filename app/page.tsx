import type { Metadata } from 'next'
import FontGeneratorTool from '@/components/tools/FontGeneratorTool'
import { breadcrumbSchema, organizationSchema, websiteSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Free Old Font Generator – 10+ Vintage & Gothic Fonts Online',
  description:
    'Create stunning old English, gothic, vintage & typewriter fonts instantly. 10+ fonts, PNG export, copy HTML. Perfect for logos, social media & tattoos. 100% free!',
  keywords: [
    'old font generator',
    'old english font generator',
    'vintage font generator',
    'gothic font generator',
    'free font generator',
    'online font generator',
    'blackletter font',
    'medieval font generator'
  ],
  alternates: {
    canonical: 'https://oldfont.net'
  }
}

const heroCta = [
  { href: '/old-font-generator', label: 'Use Old Font Generator' },
  { href: '/old-english-font-generator', label: 'Old English Generator' }
]

const faqs = [
  {
    question: 'Is OldFont.net free to use?',
    answer: 'Yes! All font generators are completely free and run directly in your browser.'
  },
  {
    question: 'Can I copy and paste the results?',
    answer:
      'Absolutely. Use the Copy Text button for plaintext or Copy HTML to preserve styling. Works everywhere—social media, websites, and design tools.'
  },
  {
    question: 'Do I need to download fonts?',
    answer: 'No downloads needed. All fonts load from the web, so you can start creating immediately.'
  }
]

export default function HomePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      websiteSchema(),
      organizationSchema(),
      breadcrumbSchema([{ name: 'Home', url: 'https://oldfont.net/' }]),
      faqSchema(faqs)
    ]
  }

  return (
    <div className='space-y-16 pb-16'>
      {/* Hero Section */}
      <section className='space-y-6 text-center'>
        <p className='text-sm font-semibold uppercase tracking-wide text-brass'>Vintage typography made easy</p>
        <h1 className='text-4xl font-semibold leading-tight text-ink md:text-5xl lg:text-6xl'>
          Old Font Generator & Old English Text Online
        </h1>
        <p className='mx-auto max-w-2xl text-lg text-gray-700 md:text-xl'>
          Transform ordinary words into old English, gothic, vintage, and typewriter-style lettering. Type once, preview
          instantly, and copy your stylized text.
        </p>
        <div className='flex flex-wrap justify-center gap-4'>
          {heroCta.map(cta => (
            <a
              key={cta.href}
              className='rounded-lg bg-brass px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-brass/90 hover:shadow-lg'
              href={cta.href}>
              {cta.label}
            </a>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className='grid gap-6 md:grid-cols-3'>
        {[
          {
            title: '10+ Old Fonts',
            desc: 'Choose from blackletter, gothic, vintage, typewriter, and classic English fonts.'
          },
          { title: 'Instant Preview', desc: 'See your text transform in real-time as you type and adjust settings.' },
          {
            title: 'Copy & Paste Ready',
            desc: 'One-click copy for text or HTML. Works everywhere—social media, websites, and more.'
          }
        ].map(feature => (
          <div key={feature.title} className='rounded-xl border border-brass/30 bg-white p-6 shadow-soft'>
            <h2 className='text-xl font-semibold text-ink'>{feature.title}</h2>
            <p className='mt-3 text-gray-700'>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Popular Tools */}
      <section className='space-y-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-semibold text-ink'>Choose Your Style</h2>
          <p className='mt-2 text-gray-600'>Select the perfect font generator for your project</p>
        </div>
        <div className='grid gap-6 md:grid-cols-3'>
          {[
            {
              href: '/old-font-generator',
              title: 'Old Font Generator',
              desc: 'Classic English & vintage fonts for elegant designs',
              emoji: '📜'
            },
            {
              href: '/old-english-font-generator',
              title: 'Old English Generator',
              desc: 'Gothic & blackletter fonts for bold statements',
              emoji: '🏰'
            },
            {
              href: '/typewriter-font-generator',
              title: 'Typewriter Generator',
              desc: 'Retro mechanical fonts for nostalgic vibes',
              emoji: '⌨️'
            }
          ].map(tool => (
            <a
              key={tool.href}
              className='group rounded-xl border border-brass/30 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-brass/50 hover:shadow-lg'
              href={tool.href}>
              <div className='mb-3 text-4xl'>{tool.emoji}</div>
              <p className='text-xl font-semibold text-ink group-hover:text-brass'>{tool.title}</p>
              <p className='mt-2 text-sm text-gray-700'>{tool.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className='rounded-2xl border border-brass/30 bg-gradient-to-br from-parchment/30 to-white p-8 md:p-12'>
        <div className='mx-auto max-w-3xl space-y-8'>
          <div className='text-center'>
            <h2 className='text-3xl font-semibold text-ink'>What Is an Old Font Generator?</h2>
            <p className='mt-4 text-lg text-gray-700'>
              A simple online tool that transforms your text with vintage and blackletter-inspired typefaces—no software
              installation required.
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-2'>
            <div className='space-y-3'>
              <h3 className='text-xl font-semibold text-ink'>🎨 Font Styles</h3>
              <ul className='space-y-2 text-gray-700'>
                <li>
                  • <strong>Old English</strong> - Heavy blackletter scripts
                </li>
                <li>
                  • <strong>Gothic</strong> - Medieval-inspired ornate fonts
                </li>
                <li>
                  • <strong>Vintage</strong> - Classic elegant serifs
                </li>
                <li>
                  • <strong>Typewriter</strong> - Retro mechanical style
                </li>
              </ul>
            </div>

            <div className='space-y-3'>
              <h3 className='text-xl font-semibold text-ink'>✨ Perfect For</h3>
              <ul className='space-y-2 text-gray-700'>
                <li>• Social media bios & posts</li>
                <li>• Logos & branding</li>
                <li>• Tattoo designs & mockups</li>
                <li>• Certificates & invitations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='mx-auto max-w-3xl space-y-6'>
        <h2 className='text-center text-3xl font-semibold text-ink'>Frequently Asked Questions</h2>
        <div className='space-y-4'>
          {[
            {
              q: 'Is OldFont.net free to use?',
              a: 'Yes! All font generators are completely free and run directly in your browser.'
            },
            {
              q: 'Can I copy and paste the results?',
              a: 'Absolutely. Use the Copy Text button for plaintext or Copy HTML to preserve styling. Works everywhere—social media, websites, and design tools.'
            },
            {
              q: 'Do I need to download fonts?',
              a: 'No downloads needed. All fonts load from the web, so you can start creating immediately.'
            }
          ].map((faq, i) => (
            <div key={i} className='rounded-lg border border-brass/20 bg-white p-6 shadow-sm'>
              <h3 className='font-semibold text-ink'>{faq.q}</h3>
              <p className='mt-2 text-gray-700'>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  )
}
