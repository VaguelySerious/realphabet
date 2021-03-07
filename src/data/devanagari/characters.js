function zipCombine(consonants, vowels) {
  return consonants.reduce((acc, consonant) => {
    // Schwa / Default vowel
    acc[consonant[0]] = consonant[1] + 'a'
    // All vowel combinations
    for (const vowel of vowels) {
      const char = consonant[0] + vowel[0]
      const rom = consonant[1] + vowel[1]
      acc[char] = rom
    }
    return acc
  }, {})
}

export const hindiVowels = [
  ['ा', { input: 'aa', rom: '', ipa: '' }],
  ['ि', { input: 'i', rom: '', ipa: '' }],
  ['ी', { input: 'ii', rom: '', ipa: '' }],
  ['ु', { input: 'u', rom: '', ipa: '' }],
  ['ू', { input: 'uu', rom: '', ipa: '' }],
  ['े', { input: 'e', rom: '', ipa: '' }],
  ['ै', { input: 'ai', rom: '', ipa: '' }],
  ['ो', { input: 'o', rom: '', ipa: '' }],
  ['ौ', { input: 'au', rom: '', ipa: '' }],
]

const hindiConsonants = [
  ['क', 'k'],
  ['न', 'n'],
  ['य', 'y'],
  ['म', 'm'],
  ['ह', 'h'],
  ['ल', 'l'],
  ['र', 'r'],
  ['व', 'v'],
  ['ब', 'b'],
  ['श', 'sh'],
  ['ट', 't'],
  ['त', 't'],
  ['द', 'd'],
  ['ध', 'dh'],
  ['प', 'p'],
  ['फ', 'ph'],
  ['फ़', 'f'],
  ['च', 'ch'],
  ['छ', 'chh'],
  ['ज', 'j'],
]

export default {
  'ा': { input: 'aa', rom: 'ā', ipa: '', expl: '', partial: true },
  'ि': { input: 'i', rom: 'i', ipa: '', expl: '', partial: true },
  'ी': { input: 'ii', rom: 'ī', ipa: '', expl: '', partial: true },
  'ु': { input: 'u', rom: 'u', ipa: '', expl: '', partial: true },
  'ू': { input: 'uu', rom: 'ū', ipa: '', expl: '', partial: true },
  'े': { input: 'e', rom: '', ipa: '', expl: '', partial: true },
  'ै': { input: 'ai', rom: '', ipa: '', expl: '', partial: true },
  'ो': { input: 'o', rom: '', ipa: '', expl: '', partial: true },
  'ौ': { input: 'au', rom: '', ipa: '', expl: '', partial: true },
  // TODO
  // I wanted to write a custom zipper function that combines the ipa, and mems for all the consontant+vowel pairs

  अ: { input: 'a', rom: 'a', ipa: '', expl: '', mem: '' },
  आ: { input: 'aa', rom: 'ā', ipa: '', expl: '', mem: '' },
  इ: { input: 'i', rom: 'i', ipa: '', expl: '', mem: '' },
  ई: { input: 'ii', rom: 'ī', ipa: '', expl: '', mem: '' },
  उ: { input: 'u', rom: 'u', ipa: '', expl: '', mem: '' },
  ऊ: { input: 'uu', rom: 'ū', ipa: '', expl: '', mem: '' },
  ऋ: { input: 'r', rom: 'ṛ', ipa: '', expl: '', mem: '' },
  ए: { input: 'e', rom: 'e', ipa: '', expl: '', mem: '' },

  ऍ: { input: 'e', rom: 'ê', ipa: '', expl: '', mem: '' },
  ऐ: { input: 'ai', rom: 'ai', ipa: '', expl: '', mem: '' },
  ओं: { input: 'o', rom: 'o', ipa: '', expl: '', mem: '' },
  ऑ: { input: 'o', rom: 'ô', ipa: '', expl: '', mem: '' },

  औ: { input: 'au', rom: 'au', ipa: '', expl: '', mem: '' },
  अं: { input: 'an', rom: 'aṇ', ipa: '', expl: '', mem: '' },
  अः: { input: 'ah', rom: 'aḥ', ipa: '', expl: '', mem: '' },
  ॲं: { input: 'am', rom: 'aṃ', ipa: '', expl: '', mem: '' },

  ...zipCombine(hindiConsonants, hindiVowels),
}
