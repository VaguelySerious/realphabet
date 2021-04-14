export const layout = [
  ['अ', 'आ', 'ओ', 'औ'],
  ['इ', 'ई', 'ए', 'ऐ'],
  ['उ', 'ऊ', 'ऋ'],
  ['क', 'ख', 'ग', 'घ', 'ङ'],
  ['च', 'छ', 'ज', 'झ', 'ञ'],
  ['ट', 'ठ', 'ड', 'ढ', 'ण'],
  ['त', 'थ', 'द', 'ध', 'न'],
  ['प', 'फ', 'ब', 'भ', 'म'],
  ['श', 'ष', 'स', 'ह'],
]

export const options = [
  {
    id: 'combinations',
    text: 'Include vowel+consonant combinations',
    value: false,
    help: 'https://en.wikipedia.org/wiki/Devanagari#Vowel_diacritics',
  },
  {
    id: 'nasalizedvowels',
    text: 'Include nasalized vowels',
    value: false,
    help: 'https://en.wikipedia.org/wiki/Devanagari#Vowel_diacritics',
  },
]

export function parse(groups, options) {
  const chars = layout.filter((row, i) => groups.includes(i)).flat()
  return chars.filter((char) => char !== '')
}
