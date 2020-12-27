export const alphabets = [
  {
    name: 'Japanese Hiragana (日本語・ひらがな)',
    shortName: 'Hiragana',
    slug: 'hiragana',
    lang: 'japanese',
    desc: `Hiragana (ひらがな) is a Japanese syllabary,
one component of the Japanese writing system, along with katakana, and kanji.
It is a phonetic lettering system consisting of 46 primary characters
(5 vowels, 14 consonants), and is used by 126 million native speakers.
`,
  },
  // {
  //   name: 'Japanese Katakana (日本語・カタカナ)',
  //   slug: 'katakana',
  //   lang: 'japanese',
  //   desc: ``,
  // },
  {
    name: 'Hindi Devanagari (हिन्दी・देवनागरी)',
    shortName: 'Devanagari',
    slug: 'devanagari',
    lang: 'hindi',
    desc: `Devanagari (देवनागरी),
is an alphasyllabary composed of 47 primary characters (14 vowels, 33 consonants) and is the
fourth most widely adopted writing system in the world,
being used for over 120 languages and by roughly 1.7 billion native speakers.
`,
  },
]

const hindiVowels = [
  ['ा', 'aa'],
  ['ि', 'i'],
  ['ी', 'ii'],
  ['ु', 'u'],
  ['ू', 'uu'],
  ['े', 'e'],
  ['ै', 'ai'],
  ['ो', 'o'],
  ['ौ', 'au'],
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

export const characters = {
  hiragana: {
    map: {
      あ: 'a',
      い: 'i',
      う: 'u',
      え: 'e',
      お: 'o',
      か: 'ka',
      き: 'ki',
      く: 'ku',
      け: 'ke',
      こ: 'ko',
      さ: 'sa',
      し: 'shi',
      す: 'su',
      せ: 'se',
      そ: 'so',
      た: 'ta',
      ち: 'chi',
      つ: 'tsu',
      て: 'te',
      と: 'to',
      な: 'na',
      に: 'ni',
      ぬ: 'nu',
      ね: 'ne',
      の: 'no',
      は: 'ha',
      ひ: 'hi',
      ふ: 'fu',
      へ: 'he',
      ほ: 'ho',
      ま: 'ma',
      み: 'mi',
      む: 'mu',
      め: 'me',
      も: 'mo',
      や: 'ya',
      ゆ: 'yu',
      よ: 'yo',
      ら: 'ra',
      り: 'ri',
      る: 'ru',
      れ: 're',
      ろ: 'ro',
      わ: 'wa',
      ゐ: 'wi',
      ゑ: 'we',
      を: 'wo',
      ん: 'n',
      が: 'ga',
      ぎ: 'gi',
      ぐ: 'gu',
      げ: 'ge',
      ご: 'go',
      ざ: 'za',
      じ: 'ji',
      ず: 'zu',
      ぜ: 'ze',
      ぞ: 'zo',
      だ: 'da',
      ぢ: ['ji', 'di', 'dji'],
      づ: ['zu', 'du', 'dsu'],
      で: 'de',
      ど: 'do',
      ば: 'ba',
      び: 'bi',
      ぶ: 'bu',
      べ: 'be',
      ぼ: 'bo',
      ぱ: 'pa',
      ぴ: 'pi',
      ぷ: 'pu',
      ぺ: 'pe',
      ぽ: 'po',
      ゔ: 'vu',
      きゃ: 'kya',
      きゅ: 'kyu',
      きょ: 'kyo',
      しゃ: 'sha',
      しゅ: 'shu',
      しょ: 'sho',
      ちゃ: 'cha',
      ちゅ: 'chu',
      ちょ: 'cho',
      にゃ: 'nya',
      にゅ: 'nyu',
      にょ: 'nyo',
      ひゃ: 'hya',
      ひゅ: 'hyu',
      ひょ: 'hyo',
      みゃ: 'mya',
      みゅ: 'myu',
      みょ: 'myo',
      りゃ: 'rya',
      りゅ: 'ryu',
      りょ: 'ryo',
      ぎゃ: 'gya',
      ぎゅ: 'gyu',
      ぎょ: 'gyo',
      じゃ: 'ja',
      じゅ: 'ju',
      じょ: 'jo',
      ぢゃ: ['ja', 'dja'],
      ぢゅ: ['ju', 'dju'],
      ぢょ: ['jo', 'djo'],
      びゃ: 'bya',
      びゅ: 'byu',
      びょ: 'byo',
      ぴゃ: 'pya',
      ぴゅ: 'pyu',
      ぴょ: 'pyo',
    },

    yoon: {
      きゃ: ['き', 'や'],
      きゅ: ['き', 'ゆ'],
      きょ: ['き', 'よ'],
      しゃ: ['し', 'や'],
      しゅ: ['し', 'ゆ'],
      しょ: ['し', 'よ'],
      ちゃ: ['ち', 'や'],
      ちゅ: ['ち', 'ゆ'],
      ちょ: ['ち', 'よ'],
      にゃ: ['に', 'や'],
      にゅ: ['に', 'ゆ'],
      にょ: ['に', 'よ'],
      ひゃ: ['ひ', 'や'],
      ひゅ: ['ひ', 'ゆ'],
      ひょ: ['ひ', 'よ'],
      みゃ: ['み', 'や'],
      みゅ: ['み', 'ゆ'],
      みょ: ['み', 'よ'],
      りゃ: ['り', 'や'],
      りゅ: ['り', 'ゆ'],
      りょ: ['り', 'よ'],
      ぎゃ: ['ぎ', 'や'],
      ぎゅ: ['ぎ', 'ゆ'],
      ぎょ: ['ぎ', 'よ'],
      じゃ: ['じ', 'や'],
      じゅ: ['じ', 'ゆ'],
      じょ: ['じ', 'よ'],
      ぢゃ: ['ぢ', 'や'],
      ぢゅ: ['ぢ', 'ゆ'],
      ぢょ: ['ぢ', 'よ'],
      びゃ: ['び', 'や'],
      びゅ: ['び', 'ゆ'],
      びょ: ['び', 'よ'],
      ぴゃ: ['ぴ', 'や'],
      ぴゅ: ['ぴ', 'ゆ'],
      ぴょ: ['ぴ', 'よ'],
    },

    dakuten: {
      か: ['が'],
      き: ['ぎ'],
      く: ['ぐ'],
      け: ['げ'],
      こ: ['ご'],
      さ: ['ざ'],
      し: ['じ'],
      す: ['ず'],
      せ: ['ぜ'],
      そ: ['ぞ'],
      た: ['だ'],
      ち: ['ぢ'],
      つ: ['づ'],
      て: ['で'],
      と: ['ど'],
      は: ['ば', 'ぱ'],
      ひ: ['び', 'ぴ'],
      ふ: ['ぶ', 'ぷ'],
      へ: ['べ', 'ぺ'],
      ほ: ['ぼ', 'ぽ'],
    },

    archaic: ['ゐ', 'ゑ'],

    options: [
      {
        id: 'dakuten',
        text: 'Include Dakuten',
        value: false,
        help: 'https://en.wikipedia.org/wiki/Dakuten_and_handakuten',
      },
      {
        id: 'yoon',
        text: 'Include Yōon',
        value: false,
        help: 'https://en.wikipedia.org/wiki/Yōon',
      },
      {
        id: 'archaic',
        text: 'Include archaic characters',
        value: false,
      },
    ],

    layout: [
      ['あ', 'い', 'う', 'え', 'お'],
      ['か', 'き', 'く', 'け', 'こ'],
      ['さ', 'し', 'す', 'せ', 'そ'],
      ['た', 'ち', 'つ', 'て', 'と'],
      ['な', 'に', 'ぬ', 'ね', 'の'],
      ['は', 'ひ', 'ふ', 'へ', 'ほ'],
      ['ま', 'み', 'む', 'め', 'も'],
      ['や', '', 'ゆ', '', 'よ'],
      ['ら', 'り', 'る', 'れ', 'ろ'],
      ['わ', '', '', '', 'を'],
      ['ん', '', '', '', ''],
    ],

    info: {
      levels: [
        {
          info:
            'We introduce character in pairs of five. Help messages and mnemonics for these sections are still under development, but you can still go through each level in turn and test yourself on the characters. If you are learning Hiragana for the first time, make sure to invent a little story for each character (i.e. a mnemonic) to help you remember its pronounciation.',
          // "We'll be learning the vowels first. There are 5 vowels in the Japanese language, just like in English. Unlike English, however, every vowel only makes one distinct sound. The Japanese 'a' sound, for example, is always pronounced the same, whereas in English, the 'a' can make different sounds, like in 'all' and 'any'.",
          characters: ['あ', 'い', 'う', 'え', 'お'],
          groups: [0],
        },
        {
          characters: ['か', 'き', 'く', 'け', 'こ'],
          groups: [1],
        },
        {
          characters: ['さ', 'し', 'す', 'せ', 'そ'],
          groups: [2],
        },
        {
          characters: ['た', 'ち', 'つ', 'て', 'と'],
          groups: [3],
        },
        {
          characters: ['な', 'に', 'ぬ', 'ね', 'の'],
          groups: [4],
        },
        {
          characters: ['は', 'ひ', 'ふ', 'へ', 'ほ'],
          groups: [5],
        },
        {
          characters: ['ま', 'み', 'む', 'め', 'も'],
          groups: [6],
        },
        {
          characters: ['ら', 'り', 'る', 'れ', 'ろ'],
          groups: [8],
        },
        {
          characters: ['や', 'ゆ', 'よ'],
          groups: [7],
        },
        {
          characters: ['わ', 'を', 'ん'],
          groups: [9, 10],
        },
        {
          characters: 'がぎぐげござじずぜぞばびぶべぼぱぴぷぺぽ'.split(''),
          groups: [1, 2, 3, 5], // all that have dakuten
          options: ['dakuten'],
        },
        {
          // info: 'The last lesson will be on learning yoon (combinations)',
          characters: ['きゃ', 'きゅ', 'きょ'],
          groups: [1, 2, 3, 4, 5, 6, 7, 8],
          options: ['dakuten', 'yoon'],
        },
      ],
      mnemonics: {},
    },

    parse: function (groups, options) {
      const chars = this.layout.filter((row, i) => groups.includes(i)).flat()

      const dakutenList = options.includes('dakuten')
        ? chars.map((char) => this.dakuten[char] || []).flat()
        : []
      const yoonList = options.includes('yoon')
        ? Object.keys(this.yoon)
            .map((key) =>
              this.yoon[key].every((comp) => chars.includes(comp)) ? key : []
            )
            .flat()
        : []
      const archaicList = options.includes('archaic') ? this.archaic : []

      return chars
        .filter((char) => char !== '')
        .concat(dakutenList, yoonList, archaicList)
        .map((char) => ({ char, roman: this.map[char] }))
    },
  },
  devanagari: {
    map: {
      अ: 'a',
      आ: 'aa', //ā
      इ: 'i',
      ई: 'ii', //ī
      उ: 'u',
      ऊ: 'uu', // ū
      ऋ: 'r', // ṛ
      ए: 'e',

      ऍ: 'e', // ê
      ऐ: 'ai',
      ओं: 'o',
      ऑ: 'o', // ô

      औ: 'au',
      अं: 'an', // an (with dot)
      अः: 'ah', // aḥ
      ॲं: 'am', // aṃ/aṁ

      ...zipCombine(hindiConsonants, hindiVowels),
    },
    layout: [
      ['अ', 'आ', 'ओं', 'ऑ'],
      ['औ', 'अं', 'अः', 'ॲं'],
      ['इ', 'ई', 'उ', 'ऊ'],
      ['ए', 'ऍ', 'ऐ', 'ऋ'],
    ],
    info: {
      levels: [
        {
          info: `Devanagari consists of ~16 vowels and ~33 consonants.
As usual, we will start out with vowels. The first lesson contains four vowels
that are very easy to confuse. All of them look like a "3" attached to a pillar,
and make sounds that are close to "a", so make sure to focus on the differences
between them when learning.`,
          characters: ['अ', 'अं', 'अः', 'ॲं'],
          groups: [0],
        },
        {
          info: `The next four vowels are also quite similar to the previous ones,
in that they all start with what looks like a "3", and two pillars at the end,
and they make sounds that are somewhere between "a" and "o".`,
          characters: ['औ', 'आ', 'ओं', 'ऑ'],
          groups: [0, 1],
        },
        {
          info: `The next vowels all look very different, and make different sounds to
the ones we learned previously. We arranged them in pairs by similarity. Again, make sure to
focus on the differen between them.`,
          characters: ['इ', 'ई', 'उ', 'ऊ'],
          groups: [0, 1, 2],
        },
        {
          info: `This is the final set of vowels.`,
          characters: ['ए', 'ऍ', 'ऐ', 'ऋ'],
          groups: [0, 1, 2, 3],
        },
        {
          info: `Good job on learning all the vowels. Finally, we can look at the
first consonant. In Devanagari, all consonants are used together with a vowel to form a pair.
When a vowel is combined, it changes its appearance. This means you will need
to re-learn every vowel from scratch (*sad trombone sounds*). The default vowel is "अ" ("a"),
so every consonant is automatically paired with "a" unless otherwise noted. We will look
at the consonant "क" ("k") to see how these pairs are constructed.`,
          characters: [[''], ...hindiVowels].map((v) => 'क' + v[0]),
          groups: [0, 1, 2, 3],
        },
        {
          info: `This level is still under construction. There will likely be around
20 levels soon. In the meantime, we recommend practicing with other resources.`,
          characters: [],
          groups: [],
        },
      ],
      mnemonics: {},
    },
    options: [
      {
        id: 'combinations',
        text: 'Include vowel+consonant combinations',
        value: false,
        help: 'https://en.wikipedia.org/wiki/Devanagari#Vowel_diacritics',
      },
    ],
    parse: function (groups, options) {
      const chars = this.layout.filter((row, i) => groups.includes(i)).flat()
      return chars
        .filter((char) => char !== '')
        .map((char) => ({ char, roman: this.map[char] }))
    },
  },
}

console.log(characters)

export function zipCombine(a, b) {
  return a.reduce((acc, consonant) => {
    // Schwa / Default vowel
    acc[consonant[0]] = consonant[1] + 'a'
    // All vowel combinations
    for (const vowel of b) {
      const char = consonant[0] + vowel[0]
      const rom = consonant[1] + vowel[1]
      acc[char] = rom
    }
    return acc
  }, {})
}
