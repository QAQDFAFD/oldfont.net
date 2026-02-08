import type { Dispatch, SetStateAction } from 'react'
import type { FontOption } from '@/lib/fonts'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Button from '@/components/ui/Button'
import Textarea from '@/components/ui/Textarea'

export type FontControlsProps = {
  text: string
  setText: Dispatch<SetStateAction<string>>
  fontId: string
  setFontId: Dispatch<SetStateAction<string>>
  fontSize: number
  setFontSize: Dispatch<SetStateAction<number>>
  lineHeight: number
  setLineHeight: Dispatch<SetStateAction<number>>
  exportBackgroundColor: string
  setExportBackgroundColor: Dispatch<SetStateAction<string>>
  exportPadding: number
  setExportPadding: Dispatch<SetStateAction<number>>
  copySuccess: boolean
  setCopySuccess: Dispatch<SetStateAction<boolean>>
  primaryKeyword: string
  secondaryKeywords?: string[]
  pageTitle: string
  pageDescription: string
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
  exportBackgroundColor,
  setExportBackgroundColor,
  exportPadding,
  setExportPadding,
  copySuccess,
  setCopySuccess,
  primaryKeyword,
  secondaryKeywords,
  pageTitle,
  pageDescription,
  onCopyHtml,
  onExportPng,
  isExporting,
  selectedFont,
  availableFonts
}: FontControlsProps) {
  const handleFontSizeChange = (value: string) => {
    const nextSize = Number(value)
    if (Number.isNaN(nextSize)) return
    setFontSize(nextSize)
  }

  const handleLineHeightChange = (value: string) => {
    const nextLineHeight = Number(value)
    if (Number.isNaN(nextLineHeight)) return
    setLineHeight(nextLineHeight)
  }

  const handlePaddingChange = (value: string) => {
    const nextPadding = Number(value)
    if (Number.isNaN(nextPadding)) return
    setExportPadding(nextPadding)
  }

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
              onChange={event => handleFontSizeChange(event.target.value)}
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
            onChange={event => handleLineHeightChange(event.target.value)}
            className='h-2 w-full cursor-pointer accent-brass'
          />
          <p className='text-xs text-gray-600'>Current: {lineHeight.toFixed(2)}</p>
        </div>

        {/* 导出选项 */}
        <div className='space-y-3 rounded-md bg-parchment/50 p-3'>
          <p className='text-sm font-semibold text-ink'>Export Options</p>
          <div className='grid gap-3 sm:grid-cols-2'>
            <div className='space-y-1'>
              <label className='block text-xs font-medium text-ink' htmlFor='bg-color'>
                Background
              </label>
              <div className='flex items-center gap-2'>
                <input
                  id='bg-color'
                  type='color'
                  value={exportBackgroundColor}
                  onChange={event => setExportBackgroundColor(event.target.value)}
                  className='h-8 w-12 cursor-pointer rounded border border-gray-300 p-0.5'
                />
                <Input
                  type='text'
                  value={exportBackgroundColor}
                  onChange={event => setExportBackgroundColor(event.target.value)}
                  className='flex-1 text-xs'
                  placeholder='#ffffff'
                />
              </div>
            </div>
            <div className='space-y-1'>
              <label className='block text-xs font-medium text-ink' htmlFor='padding'>
                Padding (px)
              </label>
              <Input
                id='padding'
                type='number'
                min={0}
                max={100}
                value={exportPadding}
                onChange={event => handlePaddingChange(event.target.value)}
                className='text-xs'
              />
            </div>
          </div>
        </div>

        {/* 操作按钮 - 移动端优化 */}
        <div className='space-y-3 relative'>
          <div className='grid grid-cols-1 gap-2 sm:flex sm:flex-wrap sm:gap-3'>
            <Button
              type='button'
              onClick={onExportPng}
              aria-label='Export as PNG'
              disabled={isExporting}
              className='w-full justify-center sm:w-auto'>
              {isExporting ? 'Exporting...' : '📸 Export PNG'}
            </Button>
            <button
              type='button'
              onClick={() => {
                onCopyHtml()
                setCopySuccess(true)
                setTimeout(() => setCopySuccess(false), 2000)
              }}
              aria-label='Copy HTML'
              style={{ backgroundColor: exportBackgroundColor }}
              className='w-full justify-center sm:w-auto inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md border border-brass/50 text-ink transition-all hover:opacity-90'>
              <span className='flex items-center gap-1'>
                <span className='text-base'>📋</span>
                <span>Copy HTML</span>
              </span>
            </button>
          </div>
          {copySuccess && (
            <div className='absolute top-full left-0 right-0 mt-2 flex justify-center animate-fade-in'>
              <span className='inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 shadow-sm'>
                <svg className='w-3.5 h-3.5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                复制成功！
              </span>
            </div>
          )}
          <p className='text-center text-xs text-gray-600 sm:text-left pt-1'>
            💡 <strong>Export PNG</strong> for images · <strong>Copy HTML</strong> for websites
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
