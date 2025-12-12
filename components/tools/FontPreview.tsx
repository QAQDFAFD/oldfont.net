import { forwardRef } from 'react'
import { FontOption } from '@/lib/fonts'

export type FontPreviewProps = {
  text: string
  selectedFont: FontOption
  fontSize: number
  lineHeight: number
}

const FontPreview = forwardRef<HTMLDivElement, FontPreviewProps>(
  ({ text, selectedFont, fontSize, lineHeight }, ref) => {
    // 移动端自动缩小字体大小
    const responsiveFontSize = typeof window !== 'undefined' && window.innerWidth < 640 ? Math.min(fontSize, 48) : fontSize

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
          className='mt-2 min-h-[120px] overflow-x-auto whitespace-pre-wrap break-words text-ink sm:min-h-[150px]'
          style={{
            fontFamily: selectedFont.fontFamily,
            fontSize: `clamp(16px, ${fontSize}px, min(${fontSize}px, 12vw))`,
            lineHeight,
            wordBreak: 'break-word',
            overflowWrap: 'break-word'
          }}>
          {text || 'OldFont.net – type your text to preview old English, gothic, and typewriter styles.'}
        </div>
      </div>
    )
  }
)

FontPreview.displayName = 'FontPreview'

export default FontPreview
