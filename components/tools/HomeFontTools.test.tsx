import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { toPng } from 'html-to-image'
import FontDownloadLink from './FontDownloadLink'
import HomeFontTools from './HomeFontTools'

vi.mock('@/lib/fonts', () => ({
  fontOptions: [{ id: 'unifraktur', label: 'Old English', fontFamily: 'serif' }]
}))

vi.mock('html-to-image', () => ({ toPng: vi.fn() }))

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
  delete window.gtag
})

it('shares input in both directions and tracks only successful outputs without input text', async () => {
  const writeText = vi.fn().mockResolvedValue(undefined)
  Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } })
  Object.defineProperty(document, 'fonts', { configurable: true, value: { ready: Promise.resolve() } })
  window.gtag = vi.fn()
  vi.mocked(toPng).mockResolvedValue('data:image/png;base64,AAA')
  vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {})

  render(<HomeFontTools />)
  const copyInput = screen.getByLabelText('Your text', { selector: 'textarea:not(#text-input)' }) as HTMLTextAreaElement
  const pngInput = screen.getByRole('textbox', { name: 'old font generator input' }) as HTMLTextAreaElement

  fireEvent.change(copyInput, { target: { value: 'Hi' } })
  expect(pngInput.value).toBe('Hi')
  fireEvent.change(pngInput, { target: { value: 'Hi 中文' } })
  expect(copyInput.value).toBe('Hi 中文')

  fireEvent.click(screen.getByRole('button', { name: 'Copy Old English' }))
  await waitFor(() => expect(writeText).toHaveBeenCalledWith('ℌ𝔦 中文'))
  await waitFor(() => expect(window.gtag).toHaveBeenCalledWith('event', 'copy_text_success', {
    page_path: '/', style_id: 'fraktur', output_type: 'unicode'
  }))

  fireEvent.click(screen.getByRole('button', { name: 'Export as PNG' }))
  await waitFor(() => expect(window.gtag).toHaveBeenCalledWith('event', 'export_png_success', {
    page_path: '/', style_id: 'unifraktur', output_type: 'png'
  }))
  expect(vi.mocked(toPng).mock.calls[0]?.[0].textContent).toBe('Hi 中文')

  vi.mocked(toPng).mockResolvedValue('data:,')
  vi.spyOn(console, 'error').mockImplementation(() => {})
  const alert = vi.spyOn(window, 'alert').mockImplementation(() => {})
  fireEvent.click(screen.getByRole('button', { name: 'Export as PNG' }))
  await waitFor(() => expect(alert).toHaveBeenCalled())
  expect(window.gtag).toHaveBeenCalledTimes(2)
})

it('distinguishes font file downloads from Google Fonts clicks', () => {
  window.gtag = vi.fn()
  render(
    <div onClick={event => event.preventDefault()}>
      <FontDownloadLink href='/fonts/sample.ttf' fontId='sample' source='ttf'>Download TTF</FontDownloadLink>
      <FontDownloadLink href='https://fonts.google.com/' fontId='sample' source='google_fonts'>Get on Google Fonts</FontDownloadLink>
    </div>
  )

  fireEvent.click(screen.getByRole('link', { name: 'Download TTF' }))
  fireEvent.click(screen.getByRole('link', { name: 'Get on Google Fonts' }))
  expect(window.gtag).toHaveBeenNthCalledWith(1, 'event', 'font_download_click', {
    page_path: '/', style_id: 'sample', output_type: 'ttf'
  })
  expect(window.gtag).toHaveBeenNthCalledWith(2, 'event', 'font_download_click', {
    page_path: '/', style_id: 'sample', output_type: 'google_fonts'
  })
})
