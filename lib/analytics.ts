type FontEvent =
  | ['copy_text_success', styleId: string, 'unicode']
  | ['export_png_success', styleId: string, 'png']
  | ['font_download_click', styleId: string, 'ttf' | 'google_fonts']

type FontEventParams = {
  page_path: string
  style_id: string
  output_type: FontEvent[2]
}

declare global {
  interface Window {
    gtag?: (command: 'event', name: FontEvent[0], params: FontEventParams) => void
  }
}

export function trackFontEvent(...[name, styleId, outputType]: FontEvent) {
  window.gtag?.('event', name, {
    page_path: window.location.pathname,
    style_id: styleId,
    output_type: outputType
  })
}
