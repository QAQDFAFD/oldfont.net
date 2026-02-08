import type { Metadata } from 'next'
import FontGeneratorTool from '@/components/tools/FontGeneratorTool'
import { breadcrumbSchema, organizationSchema, websiteSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Old Font Generator & Old Fonts Online – 40+ Free Vintage & Gothic Fonts',
  description:
    'The easiest old font generator online. Create old English, gothic, vintage, medieval & typewriter fonts instantly. 40+ free old fonts online. Type, preview, copy HTML or export as PNG poster. Perfect for logos, social media & tattoos. 100% free!',
  keywords: [
    'old font generator',
    'old fonts online',
    'old fonts generator',
    'old font',
    'old fonts',
    'old style font generator',
    'old font easy',
    'old english font generator',
    'olde english font generator',
    'old timey font generator',
    'vintage font generator',
    'gothic font generator',
    'typewriter font generator',
    'blackletter font',
    'medieval font generator',
    'antique font generator',
    'free font generator',
    'free old fonts',
    'online font generator',
    'gothic text generator',
    'blackletter text generator',
    'vintage text generator',
    'medieval text generator',
    'western font generator',
    'wood type font generator',
    'old font poster maker',
    'vintage text poster generator',
    'retro poster maker',
    'old english poster maker',
    'gothic poster text',
    'text poster generator'
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
    answer: 'Yes! All font generators and 40+ fonts are completely free and run directly in your browser.'
  },
  {
    question: 'Can I copy and paste the results?',
    answer:
      'Absolutely. Use the Copy Text button for plaintext or Copy HTML to preserve styling. Works everywhere—social media, websites, and design tools.'
  },
  {
    question: 'Do I need to download fonts?',
    answer: 'No downloads needed. All 40+ fonts load from Google Fonts and local sources, so you can start creating immediately.'
  },
  {
    question: 'How many fonts are available?',
    answer: 'OldFont.net offers 40+ free fonts including old English, gothic, vintage, medieval, blackletter, and typewriter styles from Google Fonts and curated collections.'
  },
  {
    question: 'Is this an old font easy to use?',
    answer: 'Yes! OldFont.net is the easiest old font generator online. Simply type, choose your font, adjust settings, and copy or export. No registration or downloads required.'
  },
  {
    question: 'Do you have old school font generator options?',
    answer: 'Absolutely! Our old font generator includes old school font generator styles perfect for retro projects, nostalgic branding, and themed designs.'
  },
  {
    question: 'Can I find antique font generator options?',
    answer: 'Yes! Our free old fonts download section offers 20+ antique font generator options including vintage serifs, classic displays, and old-style typefaces.'
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
        <h1 className='font-gothic text-4xl font-semibold leading-tight text-ink md:text-5xl lg:text-6xl'>
          Old Font Generator & Old Fonts Online – 40+ Free Fonts
        </h1>
        <p className='font-display mx-auto max-w-2xl text-lg text-gray-700 md:text-xl italic'>
          The easiest old font generator online. Transform ordinary words into old English, gothic, vintage, and typewriter-style lettering.
          Type once, preview instantly, and copy your stylized text. No download required, completely free.
        </p>
        <div className='flex flex-wrap justify-center gap-4'>
          {heroCta.map(cta => (
            <a
              key={cta.href}
              className='font-medieval rounded-lg bg-brass px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-brass/90 hover:shadow-lg'
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
            title: '40+ Old Fonts',
            desc: 'Choose from blackletter, gothic, vintage, medieval, typewriter, and classic English fonts from Google Fonts.',
            font: 'font-unifraktur'
          },
          { 
            title: 'Old Fonts Online', 
            desc: 'The easiest old fonts online generator. No installation, no registration, just type and create.',
            font: 'font-display'
          },
          {
            title: 'Old Font Easy',
            desc: 'Simple, fast, and free old font generator. Type, preview, and copy in seconds.',
            font: 'font-medieval'
          }
        ].map(feature => (
          <div key={feature.title} className='rounded-xl border border-brass/30 bg-white p-6 shadow-soft'>
            <h2 className={`text-xl font-semibold text-ink ${feature.font}`}>{feature.title}</h2>
            <p className='mt-3 text-gray-700'>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Why Use Old Font Generator */}
      <section className='rounded-2xl border border-brass/30 bg-gradient-to-br from-parchment/30 to-white p-8 md:p-12'>
        <div className='mx-auto max-w-3xl space-y-8'>
          <div className='text-center'>
            <h2 className='font-cinzel text-3xl font-semibold text-ink'>Why Use Our Old Font Generator?</h2>
            <p className='font-display mt-4 text-lg text-gray-700 italic'>
              OldFont.net is the most user-friendly old fonts online generator. Whether you need an old style font generator for
              wedding invitations, a gothic font generator for gaming channels, or an antique font generator for vintage
              branding, we have you covered.
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-2'>
            <div className='space-y-3'>
              <h3 className='font-almendra text-xl font-semibold text-ink'>🎨 40+ Font Styles</h3>
              <ul className='space-y-2 text-gray-700'>
                <li>• <span className='font-old-englishish'>Old English</span> - Unifraktur, MedievalSharp, Pirata One</li>
                <li>• <span className='font-texturina'>Gothic</span> - Blackletter, Texturina, Germania One</li>
                <li>• <span className='font-cormorant-unicase'>Vintage</span> - Cormorant Garamond, Almendra, IM Fell</li>
                <li>• <span className='font-typewriter'>Typewriter</span> - Special Elite, monospaced fonts</li>
                <li>• <span className='font-uncial-antiqua'>Medieval</span> - Uncial Antiqua, Grenze Gotisch</li>
              </ul>
            </div>

            <div className='space-y-3'>
              <h3 className='font-gothic text-xl font-semibold text-ink'>✨ Perfect For</h3>
              <ul className='space-y-2 text-gray-700'>
                <li>• Social media bios & posts</li>
                <li>• Logos & branding</li>
                <li>• Tattoo designs & mockups</li>
                <li>• Certificates & invitations</li>
                <li>• Gaming & entertainment</li>
                <li>• Retro website design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tools */}
      <section className='space-y-8'>
        <div className='text-center'>
          <h2 className='font-blackletter text-3xl font-semibold text-ink'>Choose Your Style</h2>
          <p className='font-display mt-2 text-gray-600 italic'>Select the perfect font generator for your project</p>
        </div>
        <div className='grid gap-6 md:grid-cols-3'>
          {[
            {
              href: '/old-font-generator',
              title: 'Old Font Generator',
              desc: 'Classic English & vintage fonts for elegant designs',
              emoji: '📜',
              font: 'font-old-englishish'
            },
            {
              href: '/old-english-font-generator',
              title: 'Old English Generator',
              desc: 'Gothic & blackletter fonts for bold statements',
              emoji: '🏰',
              font: 'font-unifraktur'
            },
            {
              href: '/typewriter-font-generator',
              title: 'Typewriter Generator',
              desc: 'Retro mechanical fonts for nostalgic vibes',
              emoji: '⌨️',
              font: 'font-typewriter'
            },
            {
              href: '/free-old-fonts-download',
              title: 'Free Font Downloads',
              desc: 'Download gothic & vintage fonts in TTF/OTF format',
              emoji: '📥',
              font: 'font-medieval'
            }
          ].map(tool => (
            <a
              key={tool.href}
              className='group rounded-xl border border-brass/30 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-brass/50 hover:shadow-lg'
              href={tool.href}>
              <div className='mb-3 text-4xl'>{tool.emoji}</div>
              <p className={`text-xl font-semibold text-ink group-hover:text-brass ${tool.font}`}>{tool.title}</p>
              <p className='mt-2 text-sm text-gray-700'>{tool.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Live Demo Section */}
      <section className='space-y-6'>
        <div className='text-center'>
          <h2 className='font-typewriter text-3xl font-semibold text-ink'>Try It Now!</h2>
          <p className='font-display mt-2 text-gray-600 italic'>Type below and see the magic happen</p>
        </div>
        <div className='rounded-xl border-2 border-brass/20 bg-white p-4 shadow-lg'>
          <FontGeneratorTool
            pageTitle='Live Demo'
            pageDescription='Type your text and see it transform instantly'
            primaryKeyword='typewriter font generator'
            secondaryKeywords={[
              'retro font generator',
              'vintage text generator',
              'monospace font generator'
            ]}
            defaultFontId='typewriter'
          />
        </div>
      </section>

      {/* Font Categories */}
      <section className='space-y-8'>
        <div className='text-center'>
          <h2 className='font-inknut-antiqua text-3xl font-semibold text-ink'>Popular Font Styles</h2>
          <p className='font-display mt-2 text-gray-600 italic'>Explore our most requested font categories</p>
        </div>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {[
            { title: 'Old School Font Generator', desc: 'Authentic old school fonts for retro and nostalgic designs. Perfect for vintage branding and themed projects.', link: '/old-font-generator', font: 'font-fell' },
            { title: 'Old Times Font Styles', desc: 'Classic serif fonts inspired by traditional typography. Elegant, readable, and timeless for professional designs.', link: '/old-font-generator', font: 'font-crimson-text' },
            { title: 'Antique Font Generator', desc: 'Beautiful antique and vintage fonts for elegant, old-fashioned designs. Perfect for wedding invitations and formal documents.', link: '/free-old-fonts-download', font: 'font-playfair-display' }
          ].map((feature, i) => (
            <a
              key={i}
              href={feature.link}
              className='group rounded-xl border border-brass/30 bg-white p-5 shadow-sm transition hover:border-brass/50 hover:shadow-md'
            >
              <h3 className={`text-lg font-semibold text-ink group-hover:text-brass ${feature.font}`}>{feature.title}</h3>
              <p className='mt-2 text-sm text-gray-600'>{feature.desc}</p>
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
              installation required. Our old font easy approach means anyone can create professional vintage text in seconds.
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

      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  )
}
