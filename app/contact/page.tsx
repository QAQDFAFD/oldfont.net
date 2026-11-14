import type { Metadata } from 'next'
import Link from 'next/link'
import InfoPage from '@/components/layout/InfoPage'
import { buildToolMetadata } from '@/lib/seo'
import { pageUrl } from '@/lib/site'

const url = pageUrl('/contact')

export const generateMetadata = (): Metadata =>
  buildToolMetadata({
    title: 'Contact',
    description: 'How to reach OldFont.net. A public email address, phone number, or social account has not been published yet.',
    url
  })

export default function ContactPage() {
  return (
    <InfoPage title='Contact'>
      <p>
        OldFont.net does not publish an email address, phone number, postal address, or social account. Please do not send personal information to an address you found elsewhere under this name.
      </p>
      <div className='rounded-lg border border-dashed border-brass/60 bg-white p-5'>
        <p className='font-semibold text-ink'>Placeholder</p>
        <p className='mt-2'>
          Add a monitored email address or contact form here before asking visitors to write in. This box is a placeholder, not a working inbox.
        </p>
      </div>
      <p>
        For how the tools behave, start with <Link className='underline underline-offset-4' href='/about'>About</Link>,{' '}
        <Link className='underline underline-offset-4' href='/privacy'>Privacy</Link>, and{' '}
        <Link className='underline underline-offset-4' href='/terms'>Terms</Link>.
      </p>
    </InfoPage>
  )
}
