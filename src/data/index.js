import hiraganaCharacters from './hiragana/characters'
import hiraganaLevels from './hiragana/levels'
import * as hiraganaStructure from './hiragana/structure'

import devanagariCharacters from './devanagari/characters'
import devanagariLevels from './devanagari/levels'
import * as devanagariStructure from './devanagari/structure'

// Hindi sounds from "Learning Hindi" (https://drive.google.com/drive/folders/0B-Du37mNuyYLX2dTMW5Bd0hWQVE)
// Hiragana sounds from ???

export const data = {
  hiragana: {
    map: hiraganaCharacters,
    levels: hiraganaLevels,
    ...hiraganaStructure,
  },
  devanagari: {
    map: devanagariCharacters,
    levels: devanagariLevels,
    ...devanagariStructure,
  },
}

export const alphabets = [
  {
    name: 'Japanese Hiragana (日本語・ひらがな)',
    shortName: 'Hiragana',
    slug: 'hiragana',
    lang: 'japanese',
    desc: `Hiragana (ひらがな) is a Japanese syllabary,
and one component of the Japanese writing system, next to katakana and kanji.
It is a phonetic lettering system consisting of 46 primary characters
(combinations of 5 vowels and 10 consonants), and is used by 126 million native speakers.
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
    desc: `Devanagari (as used by Hindi),
is an alphasyllabary composed of 44 primary characters (11 vowels, 33 consonants) and is the
fourth most widely adopted writing system in the world,
being used for over 120 languages and by roughly 1.7 billion native speakers.
`,
  },
]
