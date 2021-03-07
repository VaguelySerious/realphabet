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
