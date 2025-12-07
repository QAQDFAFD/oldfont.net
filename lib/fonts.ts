import {
  Inter,
  Cormorant_Garamond,
  Cinzel_Decorative,
  UnifrakturCook,
  Special_Elite,
  MedievalSharp,
  Pirata_One,
  IM_Fell_DW_Pica,
  Almendra_SC
} from 'next/font/google'
import localFont from 'next/font/local'

export const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body'
})

export const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display'
})

export const gothicFont = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-gothic'
})

export const blackletterFont = UnifrakturCook({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-blackletter'
})

export const typewriterFont = Special_Elite({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-typewriter'
})

export const heritageScript = localFont({
  src: '../public/fonts/HeritageScript.otf',
  variable: '--font-heritage',
  fallback: ['Georgia', 'serif'],
  display: 'swap'
})

export const medievalFont = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-medieval'
})

export const pirataFont = Pirata_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pirata'
})

export const fellEnglishFont = IM_Fell_DW_Pica({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-fell',
  display: 'swap'
})

export const almendraFont = Almendra_SC({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-almendra'
})

export type FontOption = {
  id: string
  label: string
  fontFamily: string
}

export const fontOptions: FontOption[] = [
  { id: 'inter', label: 'Classic Sans (Inter)', fontFamily: 'var(--font-body), sans-serif' },
  { id: 'cormorant', label: 'Elegant Serif (Cormorant)', fontFamily: 'var(--font-display), serif' },
  { id: 'cinzel', label: 'Vintage Caps (Cinzel Decorative)', fontFamily: 'var(--font-gothic), serif' },
  { id: 'unifraktur', label: 'Old English (UnifrakturCook)', fontFamily: 'var(--font-blackletter), cursive' },
  { id: 'medieval', label: 'Medieval Sharp', fontFamily: 'var(--font-medieval), cursive' },
  { id: 'pirata', label: 'Pirata One (Gothic)', fontFamily: 'var(--font-pirata), cursive' },
  { id: 'fell', label: 'IM Fell DW Pica (Classic)', fontFamily: 'var(--font-fell), serif' },
  { id: 'almendra', label: 'Almendra SC (Vintage)', fontFamily: 'var(--font-almendra), serif' },
  { id: 'typewriter', label: 'Typewriter (Special Elite)', fontFamily: 'var(--font-typewriter), monospace' },
  { id: 'heritage', label: 'Heritage Script', fontFamily: 'var(--font-heritage), serif' }
]

export const fontVariables = [
  bodyFont.variable,
  displayFont.variable,
  gothicFont.variable,
  blackletterFont.variable,
  typewriterFont.variable,
  heritageScript.variable,
  medievalFont.variable,
  pirataFont.variable,
  fellEnglishFont.variable,
  almendraFont.variable
].join(' ')
