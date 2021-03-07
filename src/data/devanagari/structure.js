export const layout = [
  ['अ', 'आ', 'ओं', 'ऑ'],
  ['औ', 'अं', 'अः', 'ॲं'],
  ['इ', 'ई', 'उ', 'ऊ'],
  ['ए', 'ऍ', 'ऐ', 'ऋ'],
]

export const options = [
  {
    id: 'combinations',
    text: 'Include vowel+consonant combinations',
    value: false,
    help: 'https://en.wikipedia.org/wiki/Devanagari#Vowel_diacritics',
  },
]

export function parse(groups, options) {
  const chars = layout.filter((row, i) => groups.includes(i)).flat()
  return chars
    .filter((char) => char !== '')
    .map((char) => ({ char, roman: this.map[char] }))
}
