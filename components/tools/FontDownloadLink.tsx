'use client'

import type { ComponentProps } from 'react'
import { trackFontEvent } from '@/lib/analytics'

type FontDownloadLinkProps = Omit<ComponentProps<'a'>, 'onClick' | 'onAuxClick'> & {
  fontId: string
  source: 'ttf' | 'google_fonts'
}

export default function FontDownloadLink({ fontId, source, ...props }: FontDownloadLinkProps) {
  const trackClick = () => trackFontEvent('font_download_click', fontId, source)

  return <a {...props} onClick={trackClick} onAuxClick={event => { if (event.button === 1) trackClick() }} />
}
