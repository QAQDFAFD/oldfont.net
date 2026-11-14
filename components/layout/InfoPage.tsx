import type { ReactNode } from 'react'

type InfoPageProps = {
  title: string
  children: ReactNode
}

export default function InfoPage({ title, children }: InfoPageProps) {
  return (
    <article className='mx-auto max-w-3xl space-y-4 pb-16 pt-6 text-gray-700'>
      <h1 className='text-3xl font-semibold text-ink'>{title}</h1>
      {children}
    </article>
  )
}
