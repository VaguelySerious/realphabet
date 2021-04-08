function zipCombine(consonants, vowels) {
  return consonants.reduce((acc, consonant) => {
    for (const vowel of vowels) {
      const char = consonant[0] + vowel[0]
      const v = vowel[1]
      const c = consonant[1]
      acc[char] = {
        rom: c.rom + v.rom,
        input: c.input + v.input,
        ipa: c.ipa + v.ipa,
        mem: c.mem + ' ' + v.mem,
      }
    }
    return acc
  }, {})
}

function unpack(arr) {
  return arr.reduce((acc, a) => {
    acc[a[0]] = a[1]
    return acc
  }, {})
}

export const hindiPartialVowels = [
  [
    '',
    {
      input: 'a',
      rom: 'a',
      ipa: '',
      mem: 'The vowel part is the default "a" sound.',
      partial: true,
    },
  ],
  [
    'ा',
    {
      input: 'aa',
      rom: 'ā',
      ipa: '',
      mem: 'A straight line on the back just extends the default "a" sound.',
      partial: true,
    },
  ],
  ['ि', { input: 'i', rom: 'i', ipa: '', mem: '', partial: true }],
  ['ी', { input: 'ii', rom: 'ī', ipa: '', mem: '', partial: true }],
  ['ु', { input: 'u', rom: 'u', ipa: '', mem: '', partial: true }],
  ['ू', { input: 'uu', rom: 'ū', ipa: '', mem: '', partial: true }],
  ['े', { input: 'e', rom: '', ipa: '', mem: '', partial: true }],
  ['ै', { input: 'ai', rom: '', ipa: '', mem: '', partial: true }],
  ['ो', { input: 'o', rom: '', ipa: '', mem: '', partial: true }],
  ['ौ', { input: 'au', rom: '', ipa: '', mem: '', partial: true }],
]

export const hindiConsonants = [
  [
    'क',
    {
      input: 'k',
      rom: 'k',
      ipa: '',
      mem:
        "Looks like a person (the stick) with a parachute on the left side, raising their leg (right side) to do a Karate Kick. It's a karate parachute trooper.",
    },
  ],
  ['न', { input: 'n', rom: 'n', ipa: '', mem: '' }],
  ['य', { input: 'y', rom: 'y', ipa: '', mem: '' }],
  ['म', { input: 'm', rom: 'm', ipa: '', mem: '' }],
  ['ह', { input: 'h', rom: 'h', ipa: '', mem: '' }],
  ['ल', { input: 'l', rom: 'l', ipa: '', mem: '' }],
  ['र', { input: 'r', rom: 'r', ipa: '', mem: '' }],
  ['व', { input: 'v', rom: 'v', ipa: '', mem: '' }],
  ['ब', { input: 'b', rom: 'b', ipa: '', mem: '' }],
  ['श', { input: 'sh', rom: 'sh', ipa: '', mem: '' }],
  ['ट', { input: 't', rom: 't', ipa: '', mem: '' }],
  ['त', { input: 't', rom: 't', ipa: '', mem: '' }],
  ['द', { input: 'd', rom: 'd', ipa: '', mem: '' }],
  ['ध', { input: 'dh', rom: 'dh', ipa: '', mem: '' }],
  ['प', { input: 'p', rom: 'p', ipa: '', mem: '' }],
  ['फ', { input: 'ph', rom: 'ph', ipa: '', mem: '' }],
  ['फ़', { input: 'f', rom: 'f', ipa: '', mem: '' }],
  ['च', { input: 'ch', rom: 'ch', ipa: '', mem: '' }],
  ['छ', { input: 'chh', rom: 'chh', ipa: '', mem: '' }],
  ['ज', { input: 'j', rom: 'j', ipa: '', mem: '' }],
]

export const hindiVowels = [
  ['अ', { input: 'a', rom: 'a', ipa: '', mem: '' }],
  ['आ', { input: 'aa', rom: 'ā', ipa: '', mem: '' }],
  ['इ', { input: 'i', rom: 'i', ipa: '', mem: '' }],
  ['ई', { input: 'ii', rom: 'ī', ipa: '', mem: '' }],
  ['उ', { input: 'u', rom: 'u', ipa: '', mem: '' }],
  ['ऊ', { input: 'uu', rom: 'ū', ipa: '', mem: '' }],
  ['ऋ', { input: 'r', rom: 'ṛ', ipa: '', mem: '' }],
  ['ए', { input: 'e', rom: 'e', ipa: '', mem: '' }],

  ['ऍ', { input: 'e', rom: 'ê', ipa: '', mem: '' }],
  ['ऐ', { input: 'ai', rom: 'ai', ipa: '', mem: '' }],
  ['ओं', { input: 'o', rom: 'o', ipa: '', mem: '' }],
  ['ऑ', { input: 'o', rom: 'ô', ipa: '', mem: '' }],

  ['औ', { input: 'au', rom: 'au', ipa: '', mem: '' }],
  ['अं', { input: 'an', rom: 'aṇ', ipa: '', mem: '' }],
  ['अः', { input: 'ah', rom: 'aḥ', ipa: '', mem: '' }],
  ['ॲं', { input: 'am', rom: 'aṃ', ipa: '', mem: '' }],
]

const ret = {
  ...unpack(hindiConsonants),
  ...unpack(hindiVowels),
  ...unpack(hindiPartialVowels),
  ...zipCombine(hindiConsonants, hindiPartialVowels),
}

export default ret
