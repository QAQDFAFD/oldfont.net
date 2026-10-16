import { describe, expect, it } from 'vitest'
import { toUnicodeFont } from './unicode-fonts'

describe('copyable Old English text', () => {
  it('covers every regular Fraktur letter including the five legacy symbols', () => {
    expect(toUnicodeFont('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 'fraktur'))
      .toBe('𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷')
  })
  it('covers every bold Fraktur letter', () => {
    expect(toUnicodeFont('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 'bold-fraktur'))
      .toBe('𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟')
  })
  it.each(['fraktur', 'bold-fraktur', 'script', 'bold-script', 'small-caps'] as const)('preserves non-Latin text, accents, numbers, emoji and whitespace in %s', style => {
    const unchanged = '中文 é 0123456789 👩‍💻 !?\n\t𝔄'
    expect(toUnicodeFont(unchanged, style)).toBe(unchanged)
    expect(toUnicodeFont('', style)).toBe('')
  })
  it('covers every script letter including the legacy letterlike symbols', () => {
    expect(toUnicodeFont('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 'script'))
      .toBe('𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏')
  })
  it('converts bold script, typewriter digits and small caps', () => {
    expect(toUnicodeFont('Az', 'bold-script')).toBe('𝓐𝔃')
    expect(toUnicodeFont('Win 95', 'monospace')).toBe('𝚆𝚒𝚗 𝟿𝟻')
    expect(toUnicodeFont('Old Times 1900', 'small-caps')).toBe('Oʟᴅ Tɪᴍᴇꜱ 1900')
  })
  it('converts text without interpreting HTML', () => {
    expect(toUnicodeFont('<Hi>\nA & B', 'fraktur')).toBe('<ℌ𝔦>\n𝔄 & 𝔅')
  })
})
