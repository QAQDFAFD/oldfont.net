'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import FontPreview from './FontPreview'
import FontControls from './FontControls'
import { fontOptions } from '@/lib/fonts'
import type { FontOption } from '@/lib/fonts'
import { clamp, escapeHtml, getExportTextColor, sanitizeHexColor } from '@/lib/sanitize'

export type FontGeneratorToolProps = {
  pageTitle: string
  pageDescription: string
  primaryKeyword: string
  secondaryKeywords?: string[]
  defaultFontId?: string
  allowedFontIds?: string[]
}

const DEFAULT_EXPORT_BG_COLOR = '#f7f4eb'

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
  const [isCopying, setIsCopying] = useState(false)
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
  const [exportBackgroundColor, setExportBackgroundColor] = useState(DEFAULT_EXPORT_BG_COLOR)
  const [exportPadding, setExportPadding] = useState(30)

  const selectedFont: FontOption = useMemo(
    () => availableFonts.find(option => option.id === fontId) ?? availableFonts[0],
    [fontId, availableFonts]
  )

  const safeFontSize = useMemo(() => clamp(fontSize, 12, 120), [fontSize])
  const safeLineHeight = useMemo(() => clamp(lineHeight, 1, 2), [lineHeight])
  const safeExportPadding = useMemo(() => clamp(exportPadding, 0, 100), [exportPadding])
  const safeExportBackgroundColor = useMemo(
    () => sanitizeHexColor(exportBackgroundColor, DEFAULT_EXPORT_BG_COLOR),
    [exportBackgroundColor]
  )

  useEffect(() => {
    setCopySuccess(false)
  }, [text, fontId, safeFontSize, safeLineHeight, safeExportBackgroundColor, safeExportPadding])

  useEffect(() => {
    if (!copySuccess) return
    const timer = window.setTimeout(() => setCopySuccess(false), 2000)
    return () => window.clearTimeout(timer)
  }, [copySuccess])

  const copyHtml = useCallback(async () => {
    setIsCopying(true)
    setCopySuccess(false)
    try {
      const fontFamily = previewRef.current
        ? getComputedStyle(previewRef.current).fontFamily
        : selectedFont.fontFamily
      const html = `<span style="font-family: ${escapeHtml(fontFamily)}; font-size: ${safeFontSize}px; line-height: ${safeLineHeight}; white-space: pre-wrap; color: ${getExportTextColor(safeExportBackgroundColor)}; background-color: ${safeExportBackgroundColor}; padding: ${safeExportPadding}px;">${escapeHtml(text)}</span>`
      await navigator.clipboard.writeText(html)
      setCopySuccess(true)
    } catch (error) {
      console.error('Failed to copy HTML:', error)
      alert('Could not copy HTML. Please allow clipboard access and try again.')
    } finally {
      setIsCopying(false)
    }
  }, [selectedFont.fontFamily, safeFontSize, safeLineHeight, safeExportBackgroundColor, safeExportPadding, text])

  const exportToPng = useCallback(async () => {
    if (!previewRef.current) return

    setIsExporting(true)
    try {
      const { toPng } = await import('html-to-image')
      await document.fonts.ready
      const dataUrl = await toPng(previewRef.current, {
        cacheBust: true,
        backgroundColor: safeExportBackgroundColor,
        pixelRatio: 2,
        style: {
          color: getExportTextColor(safeExportBackgroundColor),
          padding: `${safeExportPadding}px`
        }
      })

      // 创建下载链接
      const link = document.createElement('a')
      link.download = `oldfont-${selectedFont.id}-${Date.now()}.png`
      link.href = dataUrl
      link.click()
    } catch (error) {
      console.error('Failed to export PNG:', error)
      alert('Export failed. Please try again.')
    } finally {
      setIsExporting(false)
    }
  }, [selectedFont.id, safeExportBackgroundColor, safeExportPadding])

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
        isCopying={isCopying}
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
        fontSize={safeFontSize}
        lineHeight={safeLineHeight}
        exportBackgroundColor={safeExportBackgroundColor}
        exportPadding={safeExportPadding}
      />
    </section>
  )
}
