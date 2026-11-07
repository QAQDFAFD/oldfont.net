# oldfont.net

## Usage analytics

Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` to the site's GA4 web stream ID (`G-…`) before building to enable analytics.

- `copy_text_success` fires when the clipboard write succeeds.
- `export_png_success` fires when a PNG is generated and the browser download is initiated.
- `font_download_click` distinguishes local TTF downloads from clicks through to Google Fonts.

The events include the page path, style ID and output type. User-entered lettering stays in the browser.
