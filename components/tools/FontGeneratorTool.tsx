'use client'

import { useCallback, useMemo, useRef, useState } from 'react'
import { toPng } from 'html-to-image'
import FontPreview from './FontPreview'
import FontControls from './FontControls'
import { fontOptions, FontOption } from '@/lib/fonts'

export type FontGeneratorToolProps = {
  pageTitle: string
  pageDescription: string
  primaryKeyword: string
  secondaryKeywords?: string[]
  defaultFontId?: string
  allowedFontIds?: string[]
}

export default function FontGeneratorTool({
  pageTitle,
  pageDescription,
  primaryKeyword,
  secondaryKeywords,
  defaultFontId,
  allowedFontIds
}: FontGeneratorToolProps) {
  const [text, setText] = useState(
    'OldFont.net makes it simple to style your words in vintage, gothic, and typewriter fonts.'
  )
  const [isExporting, setIsExporting] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)

  // 过滤字体选项（如果指定了允许的字体列表）
  const availableFonts = useMemo(() => {
    if (allowedFontIds && allowedFontIds.length > 0) {
      return fontOptions.filter(font => allowedFontIds.includes(font.id))
    }
    return fontOptions
  }, [allowedFontIds])

  // 使用自定义默认字体或第一个可用字体
  const initialFontId = useMemo(() => {
    if (defaultFontId && availableFonts.some(f => f.id === defaultFontId)) {
      return defaultFontId
    }
    return availableFonts[0]?.id ?? fontOptions[0].id
  }, [defaultFontId, availableFonts])

  const [fontId, setFontId] = useState(initialFontId)
  const [fontSize, setFontSize] = useState(36)
  const [lineHeight, setLineHeight] = useState(1.2)
  const [exportBackgroundColor, setExportBackgroundColor] = useState('#8b5cf6')
  const [exportPadding, setExportPadding] = useState(30)

  const selectedFont: FontOption = useMemo(
    () => availableFonts.find(option => option.id === fontId) ?? availableFonts[0],
    [fontId, availableFonts]
  )

  const copyHtml = useCallback(() => {
    const html = `<span style="font-family: ${selectedFont.fontFamily}; font-size: ${fontSize}px; line-height: ${lineHeight}; background-color: ${exportBackgroundColor}; padding: ${exportPadding}px;">${text}</span>`
    navigator.clipboard.writeText(html)
  }, [selectedFont.fontFamily, fontSize, lineHeight, text, exportBackgroundColor, exportPadding])

  const exportToPng = useCallback(async () => {
    if (!previewRef.current) return

    setIsExporting(true)
    try {
      const dataUrl = await toPng(previewRef.current, {
        cacheBust: true,
        backgroundColor: exportBackgroundColor,
        pixelRatio: 2,
        style: {
          padding: `${exportPadding}px`
        }
      })

      // 创建下载链接
      const link = document.createElement('a')
      link.download = `oldfont-${selectedFont.id}-${Date.now()}.png`
      link.href = dataUrl
      link.click()
    } catch (error) {
      console.error('Failed to export PNG:', error)
      alert('导出失败，请重试')
    } finally {
      setIsExporting(false)
    }
  }, [selectedFont.id, exportBackgroundColor, exportPadding])

  return (
    <section className='grid gap-6 lg:grid-cols-2'>
      <FontControls
        text={text}
        setText={setText}
        fontId={fontId}
        setFontId={setFontId}
        fontSize={fontSize}
        setFontSize={setFontSize}
        lineHeight={lineHeight}
        setLineHeight={setLineHeight}
        exportBackgroundColor={exportBackgroundColor}
        setExportBackgroundColor={setExportBackgroundColor}
        exportPadding={exportPadding}
        setExportPadding={setExportPadding}
        copySuccess={copySuccess}
        setCopySuccess={setCopySuccess}
        primaryKeyword={primaryKeyword}
        secondaryKeywords={secondaryKeywords}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        onCopyHtml={copyHtml}
        onExportPng={exportToPng}
        isExporting={isExporting}
        selectedFont={selectedFont}
        availableFonts={availableFonts}
      />
      <FontPreview
        ref={previewRef}
        text={text}
        selectedFont={selectedFont}
        fontSize={fontSize}
        lineHeight={lineHeight}
        exportBackgroundColor={exportBackgroundColor}
        exportPadding={exportPadding}
      />
    </section>
  )
}
