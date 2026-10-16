export type UnicodeFontStyle = 'fraktur' | 'bold-fraktur' | 'script' | 'bold-script' | 'monospace' | 'small-caps'

export const unicodeFontStyles: { id: UnicodeFontStyle; label: string }[] = [
  { id: 'fraktur', label: 'Old English' },
  { id: 'bold-fraktur', label: 'Bold Old English' },
  { id: 'script', label: 'Old Letter Script' },
  { id: 'bold-script', label: 'Bold Script' },
  { id: 'monospace', label: 'Typewriter' },
  { id: 'small-caps', label: 'Small Caps' }
]

type AlphabetStyle = {
  upper: number
  lower: number
  digits?: number
  // Unicode reserves some mathematical slots; those letters live in Letterlike Symbols.
  exceptions?: Record<string, number>
}

const alphabetStyles: Record<Exclude<UnicodeFontStyle, 'small-caps'>, AlphabetStyle> = {
  fraktur: { upper: 0x1d504, lower: 0x1d51e, exceptions: { C: 0x212d, H: 0x210c, I: 0x2111, R: 0x211c, Z: 0x2128 } },
  'bold-fraktur': { upper: 0x1d56c, lower: 0x1d586 },
  script: {
    upper: 0x1d49c,
    lower: 0x1d4b6,
    exceptions: {
      B: 0x212c, E: 0x2130, F: 0x2131, H: 0x210b, I: 0x2110, L: 0x2112, M: 0x2133, R: 0x211b,
      e: 0x212f, g: 0x210a, o: 0x2134
    }
  },
  'bold-script': { upper: 0x1d4d0, lower: 0x1d4ea },
  monospace: { upper: 0x1d670, lower: 0x1d68a, digits: 0x1d7f6 }
}

const smallCaps = 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ'

export function toUnicodeFont(text: string, style: UnicodeFontStyle): string {
  return Array.from(text, character => {
    const code = character.codePointAt(0)!
    if (style === 'small-caps') {
      return code >= 97 && code <= 122 ? smallCaps[code - 97] : character
    }
    const { upper, lower, digits, exceptions } = alphabetStyles[style]
    if (exceptions?.[character]) return String.fromCodePoint(exceptions[character])
    if (code >= 65 && code <= 90) return String.fromCodePoint(upper + code - 65)
    if (code >= 97 && code <= 122) return String.fromCodePoint(lower + code - 97)
    if (digits && code >= 48 && code <= 57) return String.fromCodePoint(digits + code - 48)
    return character
  }).join('')
}
