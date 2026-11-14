import type { Metadata } from 'next'
import Link from 'next/link'
import InfoPage from '@/components/layout/InfoPage'
import { buildToolMetadata } from '@/lib/seo'
import { pageUrl } from '@/lib/site'

const url = pageUrl('/about')

export const generateMetadata = (): Metadata =>
  buildToolMetadata({
    title: 'About',
    description:
      'OldFont.net is a free browser-based old font generator for copy-and-paste Unicode text and PNG previews. No account is required.',
    url
  })

export default function AboutPage() {
  return (
    <InfoPage title='About OldFont.net'>
      <p>
        OldFont.net is a free website for trying old-fashioned lettering in a browser. You can copy Unicode text that looks like Old English, script, or a typewriter, or preview a real font and save a PNG. Nothing here asks you to create an account.
      </p>
      <p>
        This site is not a font foundry. The typefaces in the preview come from Google Fonts, plus two font files hosted with the download page. Each file keeps its own license. OldFont.net does not claim ownership of those fonts.
      </p>
      <p>No company name, street address, or registered organization is published for this site, because none is being claimed here.</p>
      <h2 className='pt-2 text-xl font-semibold text-ink'>Tools</h2>
      <ul className='list-disc space-y-2 pl-5'>
        <li><Link className='underline underline-offset-4' href='/old-font-generator'>Old font generator</Link> for a wide vintage and antique preview.</li>
        <li><Link className='underline underline-offset-4' href='/old-english-font-generator'>Old English font generator</Link> for copy-and-paste blackletter and gothic images.</li>
        <li><Link className='underline underline-offset-4' href='/vintage-font-generator'>Vintage font generator</Link> for invitations, labels, and book titles.</li>
        <li><Link className='underline underline-offset-4' href='/retro-font-generator'>Retro font generator</Link> for posters, diner boards, and arcade lettering.</li>
        <li><Link className='underline underline-offset-4' href='/typewriter-font-generator'>Typewriter font generator</Link> for monospaced notes and posters.</li>
        <li><Link className='underline underline-offset-4' href='/old-internet-font-generator'>Old internet font generator</Link> for 1990s and 2000s computer faces.</li>
        <li><Link className='underline underline-offset-4' href='/free-old-fonts-download'>Free old fonts download</Link> for TTF files and license notes.</li>
      </ul>
      <p>
        Questions about the site itself go on the <Link className='underline underline-offset-4' href='/contact'>contact page</Link>.
      </p>
    </InfoPage>
  )
}
