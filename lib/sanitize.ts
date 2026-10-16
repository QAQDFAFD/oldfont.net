const hexColorPattern = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/

export function clamp(value: number, min: number, max: number): number {
  if (Number.isNaN(value)) return min
  return Math.min(Math.max(value, min), max)
}

export function sanitizeHexColor(value: string, fallback: string): string {
  return hexColorPattern.test(value.trim()) ? value.trim() : fallback
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// Keep exported artwork independent of the site's light/dark theme.
export function getExportTextColor(background: string): '#1f2937' | '#ffffff' {
  let hex = sanitizeHexColor(background, '#f7f4eb').slice(1)
  if (hex.length === 3) hex = Array.from(hex, character => character.repeat(2)).join('')
  const channels = [0, 2, 4].map(offset => {
    const channel = parseInt(hex.slice(offset, offset + 2), 16) / 255
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
  })
  const luminance = channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722
  const inkLuminance = 0.0215
  const inkContrast = (Math.max(luminance, inkLuminance) + 0.05) / (Math.min(luminance, inkLuminance) + 0.05)
  return inkContrast >= 1.05 / (luminance + 0.05) ? '#1f2937' : '#ffffff'
}
