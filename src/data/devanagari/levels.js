import characters, { hindiVowels } from './characters'

export default [
  {
    info: `Devanagari consists of ~16 vowels and ~33 consonants.
We will start out learning all the vowels. The first lesson contains four vowels
that are very easy to confuse. All of them look like a "3" attached to a pillar,
and make sounds that are close to "a", so make sure to focus on the differences
between them when learning. Click on characters to play the sound they make.`,
    characters: ['अ', 'अं', 'अः', 'ॲं'],
  },
  {
    info: `The next four vowels are also quite similar to the previous ones,
in that they all start with what looks like a "3", and two pillars at the end,
and they make sounds that are somewhere between "a" and "o".`,
    characters: ['औ', 'आ', 'ओं', 'ऑ'],
  },
  {
    info: `The next vowels all look very different, and make different sounds to
the ones we learned previously. We arranged them in pairs by similarity. Again, make sure to
focus on the differen between them.`,
    characters: ['इ', 'ई', 'उ', 'ऊ'],
  },
  {
    info: `This is the final set of vowels.`,
    characters: ['ए', 'ऍ', 'ऐ', 'ऋ'],
  },
  {
    info: `Good job on learning all the vowels. Finally, we can look at the
first consonant. In Devanagari, all consonants are used together with a vowel to form a pair.
When a vowel is combined, it changes its appearance. This means you will need
to re-learn every vowel from scratch (*sad trombone sounds*). The default vowel is "अ" ("a"),
so every consonant is automatically paired with "a" unless otherwise noted. We will look
at the consonant "क" ("k") to see how these pairs are constructed.`,
    reviewCharactes: ['क'],
    characters: Object.keys(characters).filter((c) => c.startsWith('क')),
  },
  {
    info: `This level is still under construction. There will likely be around
20 levels soon. In the meantime, we recommend practicing with other resources.`,
    characters: [],
    groups: [],
  },
]
