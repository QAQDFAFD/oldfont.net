/**
 * Unicode 字符映射表 - 用于将普通文本转换为特殊 Unicode 字符
 * 这样复制的文本在社交媒体等平台上也能保持样式
 */

// 数学字母数字符号 - Fraktur (哥特体/Old English 风格)
const frakturBold: Record<string, string> = {
  a: '𝖆',
  b: '𝖇',
  c: '𝖈',
  d: '𝖉',
  e: '𝖊',
  f: '𝖋',
  g: '𝖌',
  h: '𝖍',
  i: '𝖎',
  j: '𝖏',
  k: '𝖐',
  l: '𝖑',
  m: '𝖒',
  n: '𝖓',
  o: '𝖔',
  p: '𝖕',
  q: '𝖖',
  r: '𝖗',
  s: '𝖘',
  t: '𝖙',
  u: '𝖚',
  v: '𝖛',
  w: '𝖜',
  x: '𝖝',
  y: '𝖞',
  z: '𝖟',
  A: '𝕬',
  B: '𝕭',
  C: '𝕮',
  D: '𝕯',
  E: '𝕰',
  F: '𝕱',
  G: '𝕲',
  H: '𝕳',
  I: '𝕴',
  J: '𝕵',
  K: '𝕶',
  L: '𝕷',
  M: '𝕸',
  N: '𝕹',
  O: '𝕺',
  P: '𝕻',
  Q: '𝕼',
  R: '𝕽',
  S: '𝕾',
  T: '𝕿',
  U: '𝖀',
  V: '𝖁',
  W: '𝖂',
  X: '𝖃',
  Y: '𝖄',
  Z: '𝖅'
}

// 数学字母数字符号 - Fraktur (普通)
const fraktur: Record<string, string> = {
  a: '𝔞',
  b: '𝔟',
  c: '𝔠',
  d: '𝔡',
  e: '𝔢',
  f: '𝔣',
  g: '𝔤',
  h: '𝔥',
  i: '𝔦',
  j: '𝔧',
  k: '𝔨',
  l: '𝔩',
  m: '𝔪',
  n: '𝔫',
  o: '𝔬',
  p: '𝔭',
  q: '𝔮',
  r: '𝔯',
  s: '𝔰',
  t: '𝔱',
  u: '𝔲',
  v: '𝔳',
  w: '𝔴',
  x: '𝔵',
  y: '𝔶',
  z: '𝔷',
  A: '𝔄',
  B: '𝔅',
  C: 'ℌ',
  D: '𝔇',
  E: '𝔈',
  F: '𝔉',
  G: '𝔊',
  H: 'ℌ',
  I: 'ℑ',
  J: '𝔍',
  K: '𝔎',
  L: '𝔏',
  M: '𝔐',
  N: '𝔑',
  O: '𝔒',
  P: '𝔓',
  Q: '𝔔',
  R: 'ℜ',
  S: '𝔖',
  T: '𝔗',
  U: '𝔘',
  V: '𝔙',
  W: '𝔚',
  X: '𝔛',
  Y: '𝔜',
  Z: 'ℨ'
}

// Monospace (打字机风格)
const monospace: Record<string, string> = {
  a: '𝚊',
  b: '𝚋',
  c: '𝚌',
  d: '𝚍',
  e: '𝚎',
  f: '𝚏',
  g: '𝚐',
  h: '𝚑',
  i: '𝚒',
  j: '𝚓',
  k: '𝚔',
  l: '𝚕',
  m: '𝚖',
  n: '𝚗',
  o: '𝚘',
  p: '𝚙',
  q: '𝚚',
  r: '𝚛',
  s: '𝚜',
  t: '𝚝',
  u: '𝚞',
  v: '𝚟',
  w: '𝚠',
  x: '𝚡',
  y: '𝚢',
  z: '𝚣',
  A: '𝙰',
  B: '𝙱',
  C: '𝙲',
  D: '𝙳',
  E: '𝙴',
  F: '𝙵',
  G: '𝙶',
  H: '𝙷',
  I: '𝙸',
  J: '𝙹',
  K: '𝙺',
  L: '𝙻',
  M: '𝙼',
  N: '𝙽',
  O: '𝙾',
  P: '𝙿',
  Q: '𝚀',
  R: '𝚁',
  S: '𝚂',
  T: '𝚃',
  U: '𝚄',
  V: '𝚅',
  W: '𝚆',
  X: '𝚇',
  Y: '𝚈',
  Z: '𝚉',
  '0': '𝟶',
  '1': '𝟷',
  '2': '𝟸',
  '3': '𝟹',
  '4': '𝟺',
  '5': '𝟻',
  '6': '𝟼',
  '7': '𝟽',
  '8': '𝟾',
  '9': '𝟿'
}

// Script (手写体风格)
const script: Record<string, string> = {
  a: '𝒶',
  b: '𝒷',
  c: '𝒸',
  d: '𝒹',
  e: 'ℯ',
  f: '𝒻',
  g: 'ℊ',
  h: '𝒽',
  i: '𝒾',
  j: '𝒿',
  k: '𝓀',
  l: '𝓁',
  m: '𝓂',
  n: '𝓃',
  o: 'ℴ',
  p: '𝓅',
  q: '𝓆',
  r: '𝓇',
  s: '𝓈',
  t: '𝓉',
  u: '𝓊',
  v: '𝓋',
  w: '𝓌',
  x: '𝓍',
  y: '𝓎',
  z: '𝓏',
  A: '𝒜',
  B: 'ℬ',
  C: '𝒞',
  D: '𝒟',
  E: 'ℰ',
  F: 'ℱ',
  G: '𝒢',
  H: 'ℋ',
  I: 'ℐ',
  J: '𝒥',
  K: '𝒦',
  L: 'ℒ',
  M: 'ℳ',
  N: '𝒩',
  O: '𝒪',
  P: '𝒫',
  Q: '𝒬',
  R: 'ℛ',
  S: '𝒮',
  T: '𝒯',
  U: '𝒰',
  V: '𝒱',
  W: '𝒲',
  X: '𝒳',
  Y: '𝒴',
  Z: '𝒵'
}

export type UnicodeStyle = 'fraktur' | 'fraktur-bold' | 'monospace' | 'script'

const styleMap: Record<UnicodeStyle, Record<string, string>> = {
  fraktur: fraktur,
  'fraktur-bold': frakturBold,
  monospace: monospace,
  script: script
}

/**
 * 将普通文本转换为 Unicode 特殊字符
 * @param text 要转换的文本
 * @param style Unicode 样式
 * @returns 转换后的文本
 */
export function convertToUnicode(text: string, style: UnicodeStyle = 'fraktur-bold'): string {
  const charMap = styleMap[style]

  return text
    .split('')
    .map(char => charMap[char] || char) // 如果字符不在映射表中,保持原样
    .join('')
}

/**
 * 检测字体是否适合使用 Unicode 转换
 * @param fontId 字体 ID
 * @returns Unicode 样式或 null
 */
export function getUnicodeStyleForFont(fontId: string): UnicodeStyle | null {
  // 根据字体 ID 返回对应的 Unicode 样式
  const fontStyleMap: Record<string, UnicodeStyle> = {
    'im-fell-dw-pica': 'fraktur',
    'uncial-antiqua': 'fraktur',
    cinzel: 'fraktur-bold',
    'special-elite': 'monospace',
    'courier-prime': 'monospace',
    'dancing-script': 'script'
  }

  return fontStyleMap[fontId] || null
}
