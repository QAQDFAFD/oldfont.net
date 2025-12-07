import { FontOption } from '@/lib/fonts'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Button from '@/components/ui/Button'
import Textarea from '@/components/ui/Textarea'
import { Dispatch, SetStateAction } from 'react'

export type FontControlsProps = {
  text: string
  setText: Dispatch<SetStateAction<string>>
  fontId: string
  setFontId: Dispatch<SetStateAction<string>>
  fontSize: number
  setFontSize: Dispatch<SetStateAction<number>>
  lineHeight: number
  setLineHeight: Dispatch<SetStateAction<number>>
  primaryKeyword: string
  secondaryKeywords?: string[]
  pageTitle: string
  pageDescription: string
  onCopyText: () => void
  onCopyHtml: () => void
  onExportPng: () => void
  isExporting: boolean
  selectedFont: FontOption
  availableFonts: FontOption[]
}

export default function FontControls({
  text,
  setText,
  fontId,
  setFontId,
  fontSize,
  setFontSize,
  lineHeight,
  setLineHeight,
  primaryKeyword,
  secondaryKeywords,
  pageTitle,
  pageDescription,
  onCopyText,
  onCopyHtml,
  onExportPng,
  isExporting,
  selectedFont,
  availableFonts
}: FontControlsProps) {
  return (
    <div className='rounded-lg border border-brass/30 bg-white p-4 shadow-soft'>
      <div className='flex items-start justify-between gap-4'>
        <div>
          <p className='text-sm font-semibold text-ink'>{pageTitle}</p>
          <p className='text-xs text-gray-600'>{pageDescription}</p>
        </div>
        <span className='rounded-full bg-parchment px-3 py-1 text-[11px] uppercase tracking-wide text-gray-600'>
          {primaryKeyword}
        </span>
      </div>

      <div className='mt-4 space-y-4'>
        <label className='block text-sm font-medium text-ink' htmlFor='text-input'>
          Your text
        </label>
        <Textarea
          id='text-input'
          aria-label={`${primaryKeyword} input`}
          value={text}
          onChange={event => setText(event.target.value)}
          rows={4}
        />
        <div className='grid gap-4 sm:grid-cols-2'>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-ink' htmlFor='font-select'>
              Choose font
            </label>
            <Select
              id='font-select'
              value={fontId}
              onChange={event => setFontId(event.target.value)}
              aria-label='Select old font'>
              {availableFonts.map(option => (
                <option key={option.id} value={option.id} style={{ fontFamily: option.fontFamily }}>
                  {option.label}
                </option>
              ))}
            </Select>
          </div>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-ink' htmlFor='font-size'>
              Font size (px)
            </label>
            <Input
              id='font-size'
              type='number'
              min={12}
              max={120}
              value={fontSize}
              onChange={event => setFontSize(Number(event.target.value))}
            />
          </div>
        </div>
        <div className='space-y-2'>
          <label className='block text-sm font-medium text-ink' htmlFor='line-height'>
            Line height
          </label>
          <input
            id='line-height'
            type='range'
            min={1}
            max={2}
            step={0.05}
            value={lineHeight}
            onChange={event => setLineHeight(Number(event.target.value))}
            className='w-full accent-brass'
          />
          <p className='text-xs text-gray-600'>Current: {lineHeight.toFixed(2)}</p>
        </div>
        <div className='space-y-2'>
          <div className='flex flex-wrap gap-3'>
            <Button type='button' onClick={onExportPng} aria-label='Export as PNG' disabled={isExporting}>
              {isExporting ? 'Exporting...' : '📸 Export PNG'}
            </Button>
            <Button type='button' onClick={onCopyHtml} variant='secondary' aria-label='Copy HTML'>
              Copy HTML
            </Button>
            <Button type='button' onClick={onCopyText} variant='secondary' aria-label='Copy text'>
              Copy Text
            </Button>
          </div>
          <p className='text-xs text-gray-600'>
            💡 <strong>Export PNG</strong> for images · <strong>Copy HTML</strong> for websites · Copy Text for plain
            text only
          </p>
        </div>
        <div className='rounded-md bg-parchment/50 p-3 text-xs text-gray-700'>
          <p className='font-semibold text-ink'>Preview settings</p>
          <p>Font: {selectedFont.label}</p>
          <p>
            Size: {fontSize}px · Line height: {lineHeight.toFixed(2)}
          </p>
        </div>
        {secondaryKeywords?.length ? (
          <p className='text-xs text-gray-600'>Related: {secondaryKeywords.join(', ')}</p>
        ) : null}
      </div>
    </div>
  )
}
