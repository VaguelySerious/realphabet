function zipCombine(consonants, vowels) {
  return consonants.reduce((acc, consonant) => {
    for (const vowel of vowels) {
      const char = consonant[0] + vowel[0]
      const v = vowel[1]
      const c = consonant[1]
      acc[char] = {
        rom: (c.rom || c.input) + (v.rom || v.input),
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
  ['', { input: 'a', mem: '', audio: 'अ' }],
  [
    'ा',
    {
      input: 'aa',
      rom: 'ā',
      mem: `A straight line on the back just extends the default "<span class="-sound">a</span>" sound. Just like
the additional pillar in आ is a long "<span class="-sound">aa</span>" sound.`,
      audio: 'आ',
    },
  ],
  ['ो', { input: 'o', mem: ``, audio: 'ओ' }],
  ['ौ', { input: 'au', mem: ``, audio: 'औ' }],
  [
    'ि',
    {
      input: 'i',
      rom: 'i',
      mem: `There's a sickle <span class="-sound">i</span>n front of the consonant. This
is the only vowel combination that puts something <span class="-sound">i</span>n front
of the character it modifies.`,
      audio: 'इ',
    },
  ],
  [
    'ी',
    {
      input: 'ii',
      rom: 'ī',
      mem: `There's a sickle on the other side. That's <span class="-sound">e</span>asy
too. What is not <span class="-sound">e</span>asy, is that the hook on top points in the
opposite direction as in ई, which are the same vowel.`,
      audio: 'ई',
    },
  ],
  ['ु', { input: 'u', mem: `It also looks similar to उ.`, audio: 'उ' }],
  ['ू', { input: 'uu', rom: 'ū', mem: ``, audio: 'ऊ' }],
  ['ृ', { input: 'r', mem: ``, audio: 'ऋ' }],
  ['े', { input: 'e', mem: ``, audio: 'ए' }],
  ['ै', { input: 'ai', mem: `Anyone `, audio: 'ऐ' }],
]

export const hindiVowels = [
  ['अ', { input: 'a', rom: 'a', mem: '' }],
  ['आ', { input: 'aa', rom: 'ā', mem: '' }],
  ['ओ', { input: 'o', rom: 'o', mem: '' }],
  ['औ', { input: 'au', rom: 'au', mem: '' }],

  ['इ', { input: 'i', rom: 'i', mem: '' }],
  ['ई', { input: 'ii', rom: 'ī', mem: '' }],
  ['ए', { input: 'e', rom: 'e', mem: '' }],
  ['ऐ', { input: 'ai', rom: 'ai', mem: '' }],

  ['उ', { input: 'u', rom: 'u', mem: '' }],
  ['ऊ', { input: 'uu', rom: 'ū', mem: '' }],
  ['ऋ', { input: 'r', rom: 'ṛ', mem: '' }],

  // Nasalized vowels
  ['अँ', { input: 'an', rom: 'aṇ' }],
  ['आँ', { input: 'aan', rom: 'aaṇ' }],
  ['ओं', { input: 'on', rom: 'oṇ' }],
  ['औं', { input: 'aun', rom: 'auṇ' }],
  ['इँ', { input: 'in', rom: 'iṇ' }],
  ['ईं', { input: 'iin', rom: 'iiṇ' }],
  ['एँ', { input: 'en', rom: 'eṇ' }],
  ['ऐं', { input: 'ain', rom: 'aiṇ' }],
  ['उँ', { input: 'un', rom: 'uṇ' }],
  ['ऊँ', { input: 'uun', rom: 'uuṇ' }],

  // ??
  // ['ऍ', { input: 'e', rom: 'ê' }],
  // ['ऑ', { input: 'o', rom: 'ô' }],
  // ['अः', { input: 'ah', rom: 'aḥ' }],
  // ['ॲं', { input: 'am', rom: 'aṃ' }],
]

export const hindiConsonants = [
  // Gutturals
  [
    'क',
    {
      input: 'k',
      mem:
        "Looks like a person (the stick) with a parachute on the left side, raising their leg (right side) to do a Karate Kick. It's a karate parachute trooper.",
    },
  ],
  ['ख', { input: 'kh', mem: '' }],
  ['ग', { input: 'g', mem: '' }],
  ['घ', { input: 'gh', mem: '' }],
  ['ङ', { input: 'n', rom: 'ṅ', mem: '' }],

  ['च', { input: 'c', mem: '' }],
  ['छ', { input: 'ch', mem: '' }],
  ['ज', { input: 'j', mem: '' }],
  ['झ', { input: 'jh', mem: '' }],
  ['ञ', { input: 'n', rom: 'ñ', mem: '' }],

  ['ट', { input: 't', mem: '' }],
  ['ठ', { input: 'th', mem: '' }],
  ['ड', { input: 'd', mem: '' }],
  ['ढ', { input: 'dh', mem: '' }],
  ['ण', { input: 'n', rom: 'ṇ', mem: '' }],

  ['त', { input: 't', mem: '' }],
  [
    'थ',
    {
      input: 'th',
      mem: '',
      note:
        "This character interrupts the horizontal line spanning a word, but doesn't constitute a word break.",
    },
  ],
  ['द', { input: 'd', mem: '' }],
  [
    'ध',
    {
      input: 'dh',
      mem: '',
      note:
        "This character interrupts the horizontal line spanning a word, but doesn't constitute a word break.",
    },
  ],
  ['न', { input: 'n', mem: '' }],

  ['प', { input: 'p', mem: '' }],
  ['फ', { input: 'ph', mem: '' }],
  ['ब', { input: 'b', mem: '' }],
  [
    'भ',
    {
      input: 'bh',
      mem: '',
      note:
        "This character interrupts the horizontal line spanning a word, but doesn't constitute a word break.",
    },
  ],
  ['म', { input: 'm', mem: '' }],

  [
    'श',
    {
      input: 'sh',
      mem: '',
      note:
        "This character interrupts the horizontal line spanning a word, but doesn't constitute a word break.",
    },
  ],
  [
    'ष',
    {
      input: 'sh',
      mem: '',
      note:
        'Historically ष sha was pronounced as a retroflex consonant, with the tongue rolled back, but this is very rare these days. The letters श sha and ष sha both sound identical, but there is always only one correct way to spell a word.',
    },
  ],
  ['स', { input: 's', mem: '' }],
  ['ह', { input: 'h', mem: '' }],
]

const ret = {
  ...unpack(hindiConsonants),
  ...unpack(hindiVowels),
  ...unpack(hindiPartialVowels),
  ...zipCombine(hindiConsonants, hindiPartialVowels),
}

export default ret
