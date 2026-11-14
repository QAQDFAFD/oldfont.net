import type { Metadata } from 'next'
import Link from 'next/link'
import InfoPage from '@/components/layout/InfoPage'
import { buildToolMetadata } from '@/lib/seo'
import { pageUrl } from '@/lib/site'

const url = pageUrl('/terms')

export const generateMetadata = (): Metadata =>
  buildToolMetadata({
    title: 'Terms of Use',
    description:
      'Plain-language terms for the free OldFont.net tools, PNG exports, Unicode text, and font downloads.',
    url
  })

export default function TermsPage() {
  return (
    <InfoPage title='Terms of Use'>
      <p>Last updated: 14 November 2026.</p>
      <p>
        OldFont.net is offered for free, with no account and no fee. The tools are provided as they are. They may change, break, or be removed. There is no service-level promise and no warranty that a particular font, Unicode character, or PNG will look the same in every app.
      </p>
      <p>
        Copy-and-paste results are Unicode characters, not a font you own. Some websites reject those characters. PNG exports are pictures for you to download. You are responsible for how you use them, including on tattoos, logos, and commercial work.
      </p>
      <p>
        Font files linked from the <Link className='underline underline-offset-4' href='/free-old-fonts-download'>download page</Link> stay under their own licenses. Read that page before redistributing a file. OldFont.net does not grant you the font authors&apos; rights.
      </p>
      <p>
        Do not misuse the site, attempt to disrupt it, or present it as a different product. These notes are a plain description of how the site is offered. They are not legal advice, and no governing company or jurisdiction is stated here because none is published for this website.
      </p>
    </InfoPage>
  )
}
