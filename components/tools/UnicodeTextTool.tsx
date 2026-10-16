'use client'

import { useCallback, useId, useMemo, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import Textarea from '@/components/ui/Textarea'
import { toUnicodeFont, unicodeFontStyles } from '@/lib/unicode-fonts'
import type { UnicodeFontStyle } from '@/lib/unicode-fonts'

type UnicodeTextToolProps = {
  heading?: string
  description?: string
  defaultText?: string
  styles?: UnicodeFontStyle[]
}

export default function UnicodeTextTool({
  heading = 'Copy & paste old font text',
  description = 'Type once, compare vintage styles, and copy your favorite. No font installation needed.',
  defaultText = 'Old English',
  styles
}: UnicodeTextToolProps) {
  const inputId = useId()
  const [text, setText] = useState(defaultText)
  const [pending, setPending] = useState(false)
  const [status, setStatus] = useState('')
  const revision = useRef(0)
  const results = useMemo(() => {
    const visibleStyles = styles
      ? styles.flatMap(id => unicodeFontStyles.filter(style => style.id === id))
      : unicodeFontStyles
    return visibleStyles.map(style => ({ ...style, text: toUnicodeFont(text, style.id) }))
  }, [styles, text])

  const handleCopy = useCallback(async (value: string, label: string, style: UnicodeFontStyle) => {
    const currentRevision = revision.current
    setPending(true)
    setStatus('')
    try {
      await navigator.clipboard.writeText(value)
      if (currentRevision === revision.current) setStatus(`${label} copied. Paste it into your app.`)
    } catch (error) {
      console.error('Failed to copy Unicode text:', error)
      if (currentRevision === revision.current) {
        setStatus('Copy was blocked. Select the result below and copy it manually.')
        const result = document.getElementById(`${inputId}-${style}`) as HTMLTextAreaElement | null
        result?.focus()
        result?.select()
      }
    } finally {
      setPending(false)
    }
  }, [inputId])

  return (
    <section className='space-y-4 rounded-xl border border-brass/30 bg-white p-4 text-ink shadow-soft sm:p-6' aria-labelledby={`${inputId}-heading`}>
      <div>
        <h2 id={`${inputId}-heading`} className='text-xl font-semibold'>{heading}</h2>
        <p className='mt-1 text-sm text-gray-600'>{description}</p>
      </div>
      <div className='space-y-2'>
        <label htmlFor={inputId} className='block text-sm font-medium'>Your text</label>
        <Textarea id={inputId} value={text} rows={2} maxLength={2000} className='text-base'
          onChange={event => { revision.current += 1; setText(event.target.value); setStatus('') }}
          aria-describedby={`${inputId}-help`} />
      </div>
      <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
        {results.map(result => (
          <div key={result.id} className='min-w-0 space-y-3 rounded-lg border border-brass/20 bg-parchment/40 p-3'>
            <label htmlFor={`${inputId}-${result.id}`} className='block text-sm font-semibold'>{result.label}</label>
            <textarea id={`${inputId}-${result.id}`} readOnly value={result.text} rows={2}
              aria-label={`${result.label} result`} spellCheck={false}
              className='w-full resize-y rounded-md border border-brass/20 bg-white p-3 text-2xl leading-relaxed text-ink focus-visible:outline-brass' />
            <Button className='min-h-11 w-full' disabled={!text.trim() || pending}
              onClick={() => handleCopy(result.text, result.label, result.id)}>
              Copy {result.label}
            </Button>
          </div>
        ))}
      </div>
      <p role='status' aria-live='polite' className='min-h-5 text-sm text-ink'>{status}</p>
      <p id={`${inputId}-help`} className='text-xs leading-relaxed text-gray-600'>
        These are Unicode characters, not downloadable fonts. Only A–Z and a–z change (plus digits in Typewriter); other characters stay unchanged.
        Some apps may show missing symbols or limit usernames. For accessible names and important information, use plain text.
        Maximum 2,000 characters.
      </p>
    </section>
  )
}
