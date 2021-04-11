export const layout = [
  ['अ', 'अं', 'अः', 'ॲं'],
  ['औ', 'आ', 'ओं', 'ऑ'],
  ['इ', 'ई', 'उ', 'ऊ'],
  ['ए', 'ऍ', 'ऐ', 'ऋ'],
  ['क', 'न', 'य', 'म'],
  ['ह', 'ल', 'र', 'व'],
  ['ब', 'श', 'ट', 'त'],
  ['द', 'ध', 'प', 'फ'],
  ['फ़', 'च', 'छ', 'ज'],
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
  return chars.filter((char) => char !== '')
}
