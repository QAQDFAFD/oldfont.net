import {
  Inter,
  Cormorant_Garamond,
  Cormorant_Unicase,
  Cinzel,
  Cinzel_Decorative,
  UnifrakturCook,
  UnifrakturMaguntia,
  Special_Elite,
  MedievalSharp,
  Pirata_One,
  IM_Fell_DW_Pica,
  IM_Fell_English,
  IM_Fell_English_SC,
  Almendra,
  Almendra_Display,
  Almendra_SC,
  Abril_Fatface,
  Crimson_Text,
  EB_Garamond,
  Libre_Baskerville,
  Merriweather,
  Playfair_Display,
  Texturina,
  Uncial_Antiqua,
  Inknut_Antiqua,
  Grenze,
  Grenze_Gotisch,
  Astloch,
  Bokor,
  Germania_One,
  Metamorphous,
  Rye,
  Sancreek,
  Arvo,
  Lora,
  Rokkitt,
  Josefin_Slab,
  Cardo,
  Vollkorn,
  Eagle_Lake,
  Jim_Nightshade,
  Meddon,
  Monsieur_La_Doulaise
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

export const oldEnglishishFont = localFont({
  src: '../public/fonts/OldEnglishish-Regular.ttf',
  variable: '--font-old-englishish',
  fallback: ['serif'],
  display: 'swap'
})

export const unifrakturMaguntiaFont = localFont({
  src: '../public/fonts/OldEnglish-Charset-UnifrakturMaguntia.ttf',
  variable: '--font-unifraktur-maguntia',
  fallback: ['cursive'],
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

export const almendraRegularFont = Almendra({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-almendra-regular'
})

export const almendraDisplayFont = Almendra_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-almendra-display'
})

export const cormorantUnicaseFont = Cormorant_Unicase({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cormorant-unicase'
})

export const cinzelFont = Cinzel({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cinzel'
})

export const unifrakturMaguntiaGoogleFont = UnifrakturMaguntia({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-unifraktur-maguntia-google'
})

export const texturinaFont = Texturina({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-texturina'
})

export const uncialAntiquaFont = Uncial_Antiqua({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-uncial-antiqua'
})

export const inknutAntiquaFont = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inknut-antiqua'
})

export const grenzeFont = Grenze({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-grenze'
})

export const grenzeGotischFont = Grenze_Gotisch({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-grenze-gotisch'
})

export const astlochFont = Astloch({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-astloch'
})

export const bokorFont = Bokor({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bokor'
})

export const germaniaOneFont = Germania_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-germania-one'
})

export const metamorphousFont = Metamorphous({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-metamorphous'
})

export const ryeFont = Rye({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-rye'
})

export const sancreekFont = Sancreek({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-sancreek'
})

export const abrilFatfaceFont = Abril_Fatface({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-abril-fatface'
})

export const crimsonTextFont = Crimson_Text({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-crimson-text'
})

export const ebGaramondFont = EB_Garamond({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-eb-garamond'
})

export const libreBaskervilleFont = Libre_Baskerville({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-libre-baskerville'
})

export const merriweatherFont = Merriweather({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-merriweather'
})

export const playfairDisplayFont = Playfair_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-playfair-display'
})

export const arvoFont = Arvo({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-arvo'
})

export const loraFont = Lora({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lora'
})

export const rokkittFont = Rokkitt({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-rokkitt'
})

export const josefinSlabFont = Josefin_Slab({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-josefin-slab'
})

export const cardoFont = Cardo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cardo'
})

export const vollkornFont = Vollkorn({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-vollkorn'
})

export const eagleLakeFont = Eagle_Lake({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-eagle-lake'
})

export const jimNightshadeFont = Jim_Nightshade({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jim-nightshade'
})

export const meddonFont = Meddon({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-meddon'
})

export const monsieurLaDoulaiseFont = Monsieur_La_Doulaise({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-monsieur-la-doulaise'
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
  { id: 'almendra-regular', label: 'Almendra (Regular)', fontFamily: 'var(--font-almendra-regular), serif' },
  { id: 'almendra-display', label: 'Almendra Display', fontFamily: 'var(--font-almendra-display), serif' },
  { id: 'cormorant-unicase', label: 'Cormorant Unicase', fontFamily: 'var(--font-cormorant-unicase), serif' },
  { id: 'cinzel-plain', label: 'Cinzel (Roman)', fontFamily: 'var(--font-cinzel), serif' },
  { id: 'unifraktur-maguntia', label: 'Unifraktur Maguntia', fontFamily: 'var(--font-unifraktur-maguntia), cursive' },
  { id: 'texturina', label: 'Texturina (Blackletter)', fontFamily: 'var(--font-texturina), serif' },
  { id: 'uncial-antiqua', label: 'Uncial Antiqua', fontFamily: 'var(--font-uncial-antiqua), serif' },
  { id: 'inknut-antiqua', label: 'Inknut Antiqua', fontFamily: 'var(--font-inknut-antiqua), serif' },
  { id: 'grenze', label: 'Grenze (Gothic)', fontFamily: 'var(--font-grenze), serif' },
  { id: 'grenze-gotisch', label: 'Grenze Gotisch', fontFamily: 'var(--font-grenze-gotisch), serif' },
  { id: 'astloch', label: 'Astloch (Blackletter)', fontFamily: 'var(--font-astloch), cursive' },
  { id: 'bokor', label: 'Bokor (Old English)', fontFamily: 'var(--font-bokor), serif' },
  { id: 'germania-one', label: 'Germania One (Gothic)', fontFamily: 'var(--font-germania-one), serif' },
  { id: 'metamorphous', label: 'Metamorphous (Fantasy)', fontFamily: 'var(--font-metamorphous), cursive' },
  { id: 'rye', label: 'Rye (Wood Type)', fontFamily: 'var(--font-rye), serif' },
  { id: 'sancreek', label: 'Sancreek (Western)', fontFamily: 'var(--font-sancreek), serif' },
  { id: 'abril-fatface', label: 'Abril Fatface (Display)', fontFamily: 'var(--font-abril-fatface), serif' },
  { id: 'crimson-text', label: 'Crimson Text (Classic)', fontFamily: 'var(--font-crimson-text), serif' },
  { id: 'eb-garamond', label: 'EB Garamond (Classic)', fontFamily: 'var(--font-eb-garamond), serif' },
  { id: 'libre-baskerville', label: 'Libre Baskerville', fontFamily: 'var(--font-libre-baskerville), serif' },
  { id: 'merriweather', label: 'Merriweather (Classic)', fontFamily: 'var(--font-merriweather), serif' },
  { id: 'playfair-display', label: 'Playfair Display (Elegant)', fontFamily: 'var(--font-playfair-display), serif' },
  { id: 'arvo', label: 'Arvo (Slab Serif)', fontFamily: 'var(--font-arvo), serif' },
  { id: 'lora', label: 'Lora (Serif)', fontFamily: 'var(--font-lora), serif' },
  { id: 'rokkitt', label: 'Rokkitt (Slab)', fontFamily: 'var(--font-rokkitt), serif' },
  { id: 'josefin-slab', label: 'Josefin Slab (Vintage)', fontFamily: 'var(--font-josefin-slab), serif' },
  { id: 'cardo', label: 'Cardo (Classic)', fontFamily: 'var(--font-cardo), serif' },
  { id: 'vollkorn', label: 'Vollkorn (Classic)', fontFamily: 'var(--font-vollkorn), serif' },
  { id: 'eagle-lake', label: 'Eagle Lake (Calligraphy)', fontFamily: 'var(--font-eagle-lake), cursive' },
  { id: 'jim-nightshade', label: 'Jim Nightshade (Script)', fontFamily: 'var(--font-jim-nightshade), cursive' },
  { id: 'meddon', label: 'Meddon (Script)', fontFamily: 'var(--font-meddon), cursive' },
  { id: 'monsieur-la-doulaise', label: 'Monsieur La Doulaise', fontFamily: 'var(--font-monsieur-la-doulaise), cursive' }
]

export const fontVariables = [
  bodyFont.variable,
  displayFont.variable,
  gothicFont.variable,
  blackletterFont.variable,
  typewriterFont.variable,
  medievalFont.variable,
  pirataFont.variable,
  fellEnglishFont.variable,
  almendraFont.variable,
  almendraRegularFont.variable,
  almendraDisplayFont.variable,
  cormorantUnicaseFont.variable,
  cinzelFont.variable,
  unifrakturMaguntiaFont.variable,
  unifrakturMaguntiaGoogleFont.variable,
  texturinaFont.variable,
  uncialAntiquaFont.variable,
  inknutAntiquaFont.variable,
  grenzeFont.variable,
  grenzeGotischFont.variable,
  astlochFont.variable,
  bokorFont.variable,
  germaniaOneFont.variable,
  metamorphousFont.variable,
  ryeFont.variable,
  sancreekFont.variable,
  abrilFatfaceFont.variable,
  crimsonTextFont.variable,
  ebGaramondFont.variable,
  libreBaskervilleFont.variable,
  merriweatherFont.variable,
  playfairDisplayFont.variable,
  arvoFont.variable,
  loraFont.variable,
  rokkittFont.variable,
  josefinSlabFont.variable,
  cardoFont.variable,
  vollkornFont.variable,
  eagleLakeFont.variable,
  jimNightshadeFont.variable,
  meddonFont.variable,
  monsieurLaDoulaiseFont.variable
].join(' ')
