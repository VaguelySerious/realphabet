export default [
  {
    text:
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
    characters: 'がぎぐげご'.split(''),
    groups: [1], // all that have dakuten
    options: ['dakuten'],
  },
  {
    characters: 'ざじずぜぞ'.split(''),
    groups: [2], // all that have dakuten
    options: ['dakuten'],
  },
  {
    characters: 'だぢづでど'.split(''),
    groups: [3], // all that have dakuten
    options: ['dakuten'],
  },
  {
    characters: 'ばびぶべぼぱぴぷぺぽ'.split(''),
    groups: [5], // all that have dakuten
    options: ['dakuten'],
  },
  {
    // text: 'The last lesson will be on learning yoon (combinations)',
    characters: ['きゃ', 'きゅ', 'きょ'],
    groups: [1, 2, 3, 4, 5, 6, 7, 8],
    options: ['dakuten', 'yoon'],
  },
]
