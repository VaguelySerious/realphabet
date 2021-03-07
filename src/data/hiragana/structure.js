const yoon = {
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
}

const dakuten = {
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
}

const archaic = ['ゐ', 'ゑ']

export const options = [
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
]

export const layout = [
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
]

export function parse(groups, options) {
  const chars = this.layout.filter((row, i) => groups.includes(i)).flat()

  const dakutenList = options.includes('dakuten')
    ? chars.map((char) => dakuten[char] || []).flat()
    : []
  const yoonList = options.includes('yoon')
    ? Object.keys(yoon)
        .map((key) =>
          yoon[key].every((comp) => chars.includes(comp)) ? key : []
        )
        .flat()
    : []
  const archaicList = options.includes('archaic') ? archaic : []

  return chars
    .filter((char) => char !== '')
    .concat(dakutenList, yoonList, archaicList)
    .map((char) => ({ char, roman: this.map[char] }))
}
