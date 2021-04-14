const chars = {
  あ: {
    input: 'a',
    rom: 'a',

    mem: '',
  },
  い: {
    input: 'i',
    rom: 'i',

    mem: '',
  },
  う: {
    input: 'u',
    rom: 'u',

    mem: '',
  },
  え: {
    input: 'e',
    rom: 'e',

    mem: '',
  },
  お: {
    input: 'o',
    rom: 'o',

    mem: `
        Can you see the letter "<span class="ccard-highlight">o</span>" in here,
        two times? This one looks similar to あ, except for its one key
        difference: there are two "o" symbols being formed in there. Make sure
        you use this to differentiate this kana (お) and that similar kana (あ).`,
  },
  か: {
    input: 'ka',
    rom: 'ka',

    mem: '',
  },
  き: {
    input: 'ki',
    rom: 'ki',

    mem: '',
  },
  く: {
    input: 'ku',
    rom: 'ku',

    mem: '',
  },
  け: {
    input: 'ke',
    rom: 'ke',

    mem: '',
  },
  こ: {
    input: 'ko',
    rom: 'ko',

    mem: '',
  },
  さ: {
    input: 'sa',
    rom: 'sa',

    mem: '',
  },
  し: {
    input: 'shi',
    rom: 'shi',

    mem: '',
  },
  す: {
    input: 'su',
    rom: 'su',

    mem: '',
  },
  せ: {
    input: 'se',
    rom: 'se',

    mem: '',
  },
  そ: {
    input: 'so',
    rom: 'so',

    mem: '',
  },
  た: {
    input: 'ta',
    rom: 'ta',

    mem: '',
  },
  ち: {
    input: 'chi',
    rom: 'chi',

    mem: '',
  },
  つ: {
    input: 'tsu',
    rom: 'tsu',

    mem: '',
  },
  て: {
    input: 'te',
    rom: 'te',

    mem: '',
  },
  と: {
    input: 'to',
    rom: 'to',

    mem: '',
  },
  な: {
    input: 'na',
    rom: 'na',

    mem: '',
  },
  に: {
    input: 'ni',
    rom: 'ni',

    mem: '',
  },
  ぬ: {
    input: 'nu',
    rom: 'nu',

    mem: '',
  },
  ね: {
    input: 'ne',
    rom: 'ne',

    mem: '',
  },
  の: {
    input: 'no',
    rom: 'no',

    mem: '',
  },
  は: {
    input: 'ha',
    rom: 'ha',

    mem: '',
  },
  ひ: {
    input: 'hi',
    rom: 'hi',

    mem: '',
  },
  ふ: {
    input: 'fu',
    rom: 'fu',

    mem: '',
  },
  へ: {
    input: 'he',
    rom: 'he',

    mem: '',
  },
  ほ: {
    input: 'ho',
    rom: 'ho',

    mem: '',
  },
  ま: {
    input: 'ma',
    rom: 'ma',

    mem: '',
  },
  み: {
    input: 'mi',
    rom: 'mi',

    mem: '',
  },
  む: {
    input: 'mu',
    rom: 'mu',

    mem: '',
  },
  め: {
    input: 'me',
    rom: 'me',

    mem: '',
  },
  も: {
    input: 'mo',
    rom: 'mo',

    mem: '',
  },
  や: {
    input: 'ya',
    rom: 'ya',

    mem: '',
  },
  ゆ: {
    input: 'yu',
    rom: 'yu',

    mem: '',
  },
  よ: {
    input: 'yo',
    rom: 'yo',

    mem: '',
  },
  ら: {
    input: 'ra',
    rom: 'ra',

    mem: '',
  },
  り: {
    input: 'ri',
    rom: 'ri',

    mem: '',
  },
  る: {
    input: 'ru',
    rom: 'ru',

    mem: '',
  },
  れ: {
    input: 're',
    rom: 're',

    mem: '',
  },
  ろ: {
    input: 'ro',
    rom: 'ro',

    mem: '',
  },
  わ: {
    input: 'wa',
    rom: 'wa',

    mem: '',
  },
  ゐ: {
    input: 'wi',
    rom: 'wi',

    mem: '',
  },
  ゑ: {
    input: 'we',
    rom: 'we',

    mem: '',
  },
  を: {
    input: 'wo',
    rom: 'wo',

    mem: '',
  },
  ん: {
    input: 'n',
    rom: 'n',

    mem: '',
  },
  が: {
    input: 'ga',
    rom: 'ga',

    mem: '',
  },
  ぎ: {
    input: 'gi',
    rom: 'gi',

    mem: '',
  },
  ぐ: {
    input: 'gu',
    rom: 'gu',

    mem: '',
  },
  げ: {
    input: 'ge',
    rom: 'ge',

    mem: '',
  },
  ご: {
    input: 'go',
    rom: 'go',

    mem: '',
  },
  ざ: {
    input: 'za',
    rom: 'za',

    mem: '',
  },
  じ: {
    input: 'ji',
    rom: 'ji',

    mem: '',
  },
  ず: {
    input: 'zu',
    rom: 'zu',

    mem: '',
  },
  ぜ: {
    input: 'ze',
    rom: 'ze',

    mem: '',
  },
  ぞ: {
    input: 'zo',
    rom: 'zo',

    mem: '',
  },
  だ: {
    input: 'da',
    rom: 'da',

    mem: '',
  },
  ぢ: {
    input: 'dji',
    rom: 'dji',

    mem: '',
  },
  づ: {
    input: 'dsu',
    rom: 'dsu',

    mem: '',
  },
  で: {
    input: 'de',
    rom: 'de',

    mem: '',
  },
  ど: {
    input: 'do',
    rom: 'do',

    mem: '',
  },
  ば: {
    input: 'ba',
    rom: 'ba',

    mem: '',
  },
  び: {
    input: 'bi',
    rom: 'bi',

    mem: '',
  },
  ぶ: {
    input: 'bu',
    rom: 'bu',

    mem: '',
  },
  べ: {
    input: 'be',
    rom: 'be',

    mem: '',
  },
  ぼ: {
    input: 'bo',
    rom: 'bo',

    mem: '',
  },
  ぱ: {
    input: 'pa',
    rom: 'pa',

    mem: '',
  },
  ぴ: {
    input: 'pi',
    rom: 'pi',

    mem: '',
  },
  ぷ: {
    input: 'pu',
    rom: 'pu',

    mem: '',
  },
  ぺ: {
    input: 'pe',
    rom: 'pe',

    mem: '',
  },
  ぽ: {
    input: 'po',
    rom: 'po',

    mem: '',
  },
  ゔ: {
    input: 'vu',
    rom: 'vu',

    mem: '',
  },
}

function zipCombine(a, b) {
  const originalVowels = {
    ゃ: 'や',
    ゅ: 'ゆ',
    ょ: 'よ',
  }
  // For every consonants
  return a.reduce((acc, consonant) => {
    const c = chars[consonant]
    // Combine with all vowels
    for (const vowel of b) {
      const newChar = consonant + vowel
      const v = chars[originalVowels[vowel]]
      acc[newChar] = {
        input: c.input.slice(0, -1) + v.input,
        rom: c.input.slice(0, -1) + v.input,
        ipa: c.ipa + v.ipa,
        mem: `This is just a combination of ${consonant} and ${originalVowels[vowel]}, which you learned individually. The ${vowel} is written slightly smaller here, indicating that is combines with the previous character.`,
      }
    }
    return acc
  }, {})
}

export default {
  ...zipCombine('ひびぴしじちぢきぎりみに'.split(''), 'ゃゅょ'.split('')),
  ...chars,
}
