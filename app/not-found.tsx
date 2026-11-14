import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page not found'
}

export default function NotFound() {
  return (
    <div className='mx-auto max-w-xl space-y-4 py-16 text-center'>
      <p className='text-sm font-semibold uppercase tracking-wide text-brass'>404</p>
      <h1 className='text-3xl font-semibold text-ink'>This page could not be found</h1>
      <p className='text-gray-700'>
        The address may be misspelled, or the page may have been removed. The font tools are still available from the home page.
      </p>
      <p>
        <Link href='/' className='font-semibold text-ink underline underline-offset-4'>
          Back to OldFont.net
        </Link>
      </p>
    </div>
  )
}
