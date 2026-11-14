import type { Metadata } from 'next'
import InfoPage from '@/components/layout/InfoPage'
import { buildToolMetadata } from '@/lib/seo'
import { pageUrl } from '@/lib/site'

const url = pageUrl('/privacy')

export const generateMetadata = (): Metadata =>
  buildToolMetadata({
    title: 'Privacy Policy',
    description:
      'How OldFont.net handles text you type, optional Google Analytics, and ordinary hosting logs. No account is required.',
    url
  })

export default function PrivacyPage() {
  return (
    <InfoPage title='Privacy Policy'>
      <p>Last updated: 14 November 2026.</p>
      <p>
        OldFont.net is a static website of font tools. You do not create an account, and the generators do not ask for your name or email. Text you type is converted or drawn in your browser. Copying to the clipboard and exporting a PNG happen on your device. The site has no form that uploads that text to OldFont.net.
      </p>
      <h2 className='pt-2 text-xl font-semibold text-ink'>Analytics</h2>
      <p>
        If a Google Analytics measurement ID is configured for the deployment, the site loads Google Analytics and can record three events: a successful copy, a successful PNG export, and a font-download click. Those events include the page path, a style id, and the output type (Unicode text, PNG, a TTF file, or a Google Fonts link). They do not include the words you typed. Google signals are turned off in the Analytics snippet. If no measurement ID is set, the Analytics script is not added.
      </p>
      <h2 className='pt-2 text-xl font-semibold text-ink'>Hosting</h2>
      <p>
        The public site is served by Vercel. Like other hosts, Vercel can keep ordinary server logs such as IP address, user agent, and the URL requested. OldFont.net does not sell personal information, and it does not run an account database.
      </p>
      <h2 className='pt-2 text-xl font-semibold text-ink'>Fonts</h2>
      <p>
        Preview fonts are bundled with the site at build time, so opening a generator does not send your text to a font vendor. System fonts such as Times New Roman or Comic Sans are drawn by your own device.
      </p>
    </InfoPage>
  )
}
