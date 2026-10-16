import { forwardRef } from 'react'
import clsx from 'clsx'
import { getExportTextColor } from '@/lib/sanitize'
import type { FontOption } from '@/lib/fonts'

export type FontPreviewProps = {
  text: string
  selectedFont: FontOption
  fontSize: number
  lineHeight: number
  exportBackgroundColor: string
  exportPadding: number
}

const FontPreview = forwardRef<HTMLDivElement, FontPreviewProps>(
  ({ text, selectedFont, fontSize, lineHeight, exportBackgroundColor, exportPadding }, ref) => {
    return (
      <div className='rounded-lg border border-brass/30 bg-white p-3 shadow-soft sm:p-4'>
        <div className='flex items-center justify-between'>
          <p className='text-xs uppercase tracking-wide text-gray-600'>Preview</p>
          <p className='text-[10px] text-gray-500 sm:hidden'>
            {fontSize}px · {lineHeight.toFixed(1)}
          </p>
        </div>
        <div
          ref={ref}
          className={clsx('mt-2 min-h-[120px] overflow-x-auto whitespace-pre-wrap break-words sm:min-h-[150px]', getExportTextColor(exportBackgroundColor) === '#ffffff' ? 'text-white' : 'text-[#1f2937]')}
          style={{
            fontFamily: selectedFont.fontFamily,
            fontSize: `clamp(16px, ${fontSize}px, min(${fontSize}px, 12vw))`,
            lineHeight,
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
            backgroundColor: exportBackgroundColor,
            padding: `${exportPadding}px`
          }}>
          {text || 'OldFont.net – type your text to preview old English, gothic, and typewriter styles.'}
        </div>
      </div>
    )
  }
)

FontPreview.displayName = 'FontPreview'

export default FontPreview
