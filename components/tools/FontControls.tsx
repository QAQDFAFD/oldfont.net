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
  onCopyHtml: () => void
  onCopyUnicode?: () => void
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
  onCopyHtml,
  onCopyUnicode,
  onExportPng,
  isExporting,
  selectedFont,
  availableFonts
}: FontControlsProps) {
  return (
    <div className='rounded-lg border border-brass/30 bg-white p-3 shadow-soft sm:p-4'>
      {/* Header - 移动端优化 */}
      <div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4'>
        <div className='min-w-0 flex-1'>
          <p className='text-sm font-semibold text-ink'>{pageTitle}</p>
          <p className='text-xs text-gray-600'>{pageDescription}</p>
        </div>
        <span className='hidden rounded-full bg-parchment px-3 py-1 text-[11px] uppercase tracking-wide text-gray-600 sm:inline-block'>
          {primaryKeyword}
        </span>
      </div>

      <div className='mt-4 space-y-4'>
        <div className='space-y-2'>
          <label className='block text-sm font-medium text-ink' htmlFor='text-input'>
            Your text
          </label>
          <Textarea
            id='text-input'
            aria-label={`${primaryKeyword} input`}
            value={text}
            onChange={event => setText(event.target.value)}
            rows={3}
            className='text-base'
          />
        </div>

        {/* 字体选择和大小 - 移动端堆叠 */}
        <div className='grid gap-3 sm:grid-cols-2 sm:gap-4'>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-ink' htmlFor='font-select'>
              Choose font
            </label>
            <Select
              id='font-select'
              value={fontId}
              onChange={event => setFontId(event.target.value)}
              aria-label='Select old font'
              className='text-base'>
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
              className='text-base'
            />
          </div>
        </div>

        {/* 行高滑块 */}
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
            className='h-2 w-full cursor-pointer accent-brass'
          />
          <p className='text-xs text-gray-600'>Current: {lineHeight.toFixed(2)}</p>
        </div>

        {/* 操作按钮 - 移动端优化 */}
        <div className='space-y-3'>
          <div className='grid grid-cols-1 gap-2 sm:flex sm:flex-wrap sm:gap-3'>
            <Button
              type='button'
              onClick={onExportPng}
              aria-label='Export as PNG'
              disabled={isExporting}
              className='w-full justify-center sm:w-auto'>
              {isExporting ? 'Exporting...' : '📸 Export PNG'}
            </Button>
            <div className='grid grid-cols-2 gap-2 sm:flex sm:gap-3'>
              {onCopyUnicode && (
                <Button
                  type='button'
                  onClick={onCopyUnicode}
                  variant='secondary'
                  aria-label='Copy Unicode text (works on social media)'
                  className='w-full justify-center sm:w-auto'
                  title='Copy as Unicode - works on Twitter, Facebook, Instagram, etc.'>
                  ✨ Copy Unicode
                </Button>
              )}
              <Button
                type='button'
                onClick={onCopyHtml}
                variant='secondary'
                aria-label='Copy HTML'
                className='w-full justify-center sm:w-auto'>
                📋 Copy HTML
              </Button>
            </div>
          </div>
          <p className='text-center text-xs text-gray-600 sm:text-left'>
            💡 <strong>Copy Unicode</strong> for social media · <strong>Export PNG</strong> for images ·{' '}
            <strong>Copy HTML</strong> for websites
          </p>
        </div>

        {/* 预览设置信息 */}
        <div className='rounded-md bg-parchment/50 p-3 text-xs text-gray-700'>
          <p className='font-semibold text-ink'>Preview settings</p>
          <p className='break-words'>Font: {selectedFont.label}</p>
          <p>
            Size: {fontSize}px · Line height: {lineHeight.toFixed(2)}
          </p>
        </div>

        {secondaryKeywords?.length ? (
          <p className='hidden text-xs text-gray-600 sm:block'>Related: {secondaryKeywords.join(', ')}</p>
        ) : null}
      </div>
    </div>
  )
}
