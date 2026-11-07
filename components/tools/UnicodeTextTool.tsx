'use client'

import clsx from 'clsx'
import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import Textarea from '@/components/ui/Textarea'
import { trackFontEvent } from '@/lib/analytics'
import { MAX_UNICODE_TEXT_LENGTH, toUnicodeFont, unicodeFontStyles } from '@/lib/unicode-fonts'
import type { UnicodeFontStyle } from '@/lib/unicode-fonts'

type UnicodeTextToolProps = {
  heading?: string
  description?: string
  defaultText?: string
  styles?: UnicodeFontStyle[]
  compact?: boolean
  sharedText?: { value: string; onChange: (text: string) => void }
}

export default function UnicodeTextTool({
  heading = 'Copy & paste old font text',
  description = 'Type once, compare vintage styles, and copy your favorite. No font installation needed.',
  defaultText = 'Old English',
  styles,
  compact = false,
  sharedText
}: UnicodeTextToolProps) {
  const inputId = useId()
  const [localText, setLocalText] = useState(defaultText)
  const text = sharedText?.value ?? localText
  const setText = sharedText?.onChange ?? setLocalText
  const [pending, setPending] = useState(false)
  const [feedback, setFeedback] = useState<{ message: string; input: string; copiedStyle?: UnicodeFontStyle } | null>(null)
  const revision = useRef(0)

  useEffect(() => {
    revision.current += 1
    setFeedback(null)
  }, [text])
  const results = useMemo(() => {
    const visibleStyles = styles
      ? styles.flatMap(id => unicodeFontStyles.filter(style => style.id === id))
      : unicodeFontStyles
    return visibleStyles.map(style => ({ ...style, text: toUnicodeFont(text, style.id) }))
  }, [styles, text])

  const handleCopy = useCallback(async (value: string, label: string, style: UnicodeFontStyle) => {
    const currentRevision = revision.current
    setPending(true)
    setFeedback(null)
    try {
      await navigator.clipboard.writeText(value)
      trackFontEvent('copy_text_success', style, 'unicode')
      if (currentRevision === revision.current) {
        setFeedback({ message: `${label} copied. Paste it into your app.`, input: text, copiedStyle: style })
      }
    } catch (error) {
      console.error('Failed to copy Unicode text:', error)
      if (currentRevision === revision.current) {
        setFeedback({ message: 'Copy was blocked. Select the result and copy it manually.', input: text })
        const result = document.getElementById(`${inputId}-${style}`) as HTMLTextAreaElement | null
        result?.focus()
        result?.select()
      }
    } finally {
      setPending(false)
    }
  }, [inputId, text])

  const currentFeedback = feedback?.input === text ? feedback : null

  return (
    <section className={clsx('rounded-xl border border-brass/30 bg-white p-4 text-ink shadow-soft sm:p-6', compact ? 'space-y-3' : 'space-y-4')} aria-labelledby={`${inputId}-heading`}>
      <div>
        <h2 id={`${inputId}-heading`} className='text-xl font-semibold'>{heading}</h2>
        <p className='mt-1 text-sm text-gray-600'>{description}</p>
      </div>
      <div className='space-y-2'>
        <label htmlFor={inputId} className='block text-sm font-medium'>Your text</label>
        <Textarea id={inputId} value={text} rows={compact ? 1 : 2} maxLength={MAX_UNICODE_TEXT_LENGTH} className='text-base'
          onChange={event => setText(event.target.value)}
          aria-describedby={`${inputId}-help`} />
      </div>
      <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
        {results.map(result => (
          <div key={result.id} className={clsx('min-w-0 rounded-lg border border-brass/20 bg-parchment/40 p-3', compact ? 'grid grid-cols-[minmax(0,1fr)_auto] items-end gap-x-2 gap-y-1' : 'space-y-3')}>
            <label htmlFor={`${inputId}-${result.id}`} className={clsx('block text-sm font-semibold', compact && 'col-span-2')}>{result.label}</label>
            <textarea id={`${inputId}-${result.id}`} readOnly value={result.text} rows={compact ? 1 : 2}
              aria-label={`${result.label} result`} spellCheck={false}
              className={clsx('w-full rounded-md border border-brass/20 bg-white text-ink focus-visible:outline-brass',
                compact ? 'min-h-11 resize-none px-2 py-1 text-xl leading-8' : 'resize-y p-3 text-2xl leading-relaxed')} />
            <Button type='button' className={clsx('min-h-11', compact ? 'min-w-[4.5rem] !bg-ink !px-2 hover:!bg-ink/90' : 'w-full')}
              aria-label={currentFeedback?.copiedStyle === result.id ? `Copied! ${result.label}` : `Copy ${result.label}`} disabled={!text.trim() || pending}
              onClick={() => handleCopy(result.text, result.label, result.id)}>
              {currentFeedback?.copiedStyle === result.id ? 'Copied!' : compact ? 'Copy' : `Copy ${result.label}`}
            </Button>
          </div>
        ))}
      </div>
      <p role='status' aria-live='polite' className={clsx('text-sm text-ink', currentFeedback ? 'min-h-5' : 'sr-only')}>{currentFeedback?.message}</p>
      <p id={`${inputId}-help`} className='text-xs leading-relaxed text-gray-600'>
        These are Unicode characters, not downloadable fonts. Only A–Z and a–z change (plus digits in Typewriter); other characters stay unchanged.
        Some apps may show missing symbols or limit usernames. For accessible names and important information, use plain text.
        Maximum {MAX_UNICODE_TEXT_LENGTH.toLocaleString('en-US')} characters.
      </p>
    </section>
  )
}
