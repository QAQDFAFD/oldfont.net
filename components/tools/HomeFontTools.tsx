'use client'

import { useState } from 'react'
import FontGeneratorTool from './FontGeneratorTool'
import UnicodeTextTool from './UnicodeTextTool'

export default function HomeFontTools() {
  const [text, setText] = useState('Old English')
  const sharedText = { value: text, onChange: setText }

  return (
    <div className='space-y-6'>
      <UnicodeTextTool compact sharedText={sharedText} description='Type a name or phrase, then copy the style you like.' />

      <nav aria-label='Other font outputs' className='flex flex-wrap gap-x-5 text-sm font-semibold text-ink'>
        <a href='#font-image' className='inline-flex min-h-11 items-center underline underline-offset-4'>Create a PNG</a>
        <a href='/free-old-fonts-download' className='inline-flex min-h-11 items-center underline underline-offset-4'>Download a font</a>
      </nav>

      <section id='font-image' className='scroll-mt-24 space-y-4' aria-labelledby='font-image-heading'>
        <h2 id='font-image-heading' className='font-typewriter text-center text-3xl font-semibold text-ink'>
          Create a font image
        </h2>
        <FontGeneratorTool
          pageTitle='Font image maker'
          pageDescription='Preview real fonts and export your lettering as a PNG image.'
          primaryKeyword='old font generator'
          defaultFontId='unifraktur'
          sharedText={sharedText}
        />
      </section>
    </div>
  )
}
