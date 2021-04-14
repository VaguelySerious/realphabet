import characters, { hindiVowels } from './characters'

const allStartingWith = (consonantList, toSlice) =>
  consonantList.reduce(
    (acc, c) =>
      acc.concat(
        Object.keys(characters)
          .filter((c) => c.startsWith('क'))
          .map((c) => c.slice(toSlice ? 1 : 0))
          .filter(Boolean)
      ),
    []
  )

export default [
  {
    info: `<a href="https://en.wikipedia.org/wiki/Devanagari">Devanagari</a> consists
of ~11 vowels and ~33 consonants. We will start out learning all the vowels.
The first lesson contains four vowels that are very easy to confuse.
All of them look like a "3" attached to a pillar, and make sounds that are close to "a", so make sure to focus on the differences
between them when learning.<br>Click on characters to play the sound they make.<br>
You may notice that all characters also have a horizontal line on top of them.
Words formed by different letters are joined by this line.`,
    characters: ['अ', 'आ', 'ओ', 'औ'],
  },
  {
    info: `This is the next set of vowels. While they share little similarity with
the previous ones, you may notice that they also all have a horizontal line on the top.
This line is present on every single character in Hindi, and joins them together into
words (e.g. कलम). A break in the line at top means that a word has ended.`,
    characters: ['इ', 'ई', 'ए', 'ऐ'],
  },
  {
    info: `This is the final set of vowels.`,
    characters: ['उ', 'ऊ', 'ऋ'],
  },
  {
    info: `Every vowel in Hindi, apart from ऋ ri, also has a
<a href="https://en.wikipedia.org/wiki/Nasal_vowel">nasalized version</a>.
The nasalized version is pronounced just like the normal version, but with some
air being expelled through the nose while making the sound.<br>
The nasalized versions look just the same as the normal vowels, but with an added dot,
also called <a href="https://en.wikipedia.org/wiki/Chandrabindu">moon-dot</a>.<br>
In romanization, the letter "n" is amended to indicate this, but note that no "n"
sound actually follows the vowel.`,
    reviewCharactes: [],
    characters: ['अँ', 'आँ', 'ओं', 'औं', 'इँ', 'ईं', 'एँ', 'ऐं', 'उँ', 'ऊँ'],
  },
  {
    info: `Good job on learning all the vowels! Finally, we can look at the
first consonant. In Devanagari, all consonants are used together with a vowel to form
a pair. When a vowel is combined with a consonant, it changes its appearance.
This means you will need to re-learn every vowel. We will look at the consonant
"क" ("k") to see how these pairs are constructed. You haven't learned that consonant yet,
but we'll only be using it to show the combinations.<br>
For example, the vowel उ ("u") turns into " ु" when combined. In the learning cards below, the dotted circle is a placeholder
for the consonant. So if we combine it with "क" ("k"), it turns into "कु" ("ku").
<br> Note that if no vowel is added, the sound defaults to "अ" ("a"), except if it is
at the end of a word. Thus "ककुक" would be pronounced "kakuk".`,
    reviewCharactes: [],
    characters: allStartingWith(['क'], true),
  },
  {
    info: `The way that vowels combine with consonants is always the same, so we can
now focus on learning the rest of the consonants by themselves. The following consonants,
along with the previously learned क, belong to a group called the
<a href="https://en.wikipedia.org/wiki/Guttural">gutturals</a>, which means they are
all produced in the back of the throat.<br>An "h" in the romanization of the character
indicates that is is voiced, i.e. that air is expelled forcefully when making the sound (TODO).`,
    characters: ['क', 'ख', 'ग', 'घ', 'ङ'],
  },
  {
    info: `The following five consonants are part of a group called the
<a href="https://en.wikipedia.org/wiki/Palatal_consonant">palatals</a>, which means
they are all produced while touching the tongue to the roof of the mouth.`,
    characters: ['च', 'छ', 'ज', 'झ', 'ञ'],
  },
  {
    info: `In this lesson, we are taking a break from learning new consonants, to review
vowel combinations for the consonants we already had, along with everything we've learned
so far. Consider this a sort of mid-term test. Expect it to take ~15 minutes if you have
been keeping up well so far.<br>
You aren't actually learning anything new here, so don't worry about looking at the cards
below, but testing out of this level will require you to know all the past lessons very
well. You can always practice the characters individually from the main screen,
and you can revisit previous levels to study up on the characters that you find difficult.`,
    characters: allStartingWith('कखगघङचछजझञ'.split('')).concat(
      hindiVowels.map((v) => v[0])
    ),
  },
  {
    info: ``,
    characters: ['ट', 'ठ', 'ड', 'ढ', 'ण'],
  },
  {
    info: ``,
    characters: ['त', 'थ', 'द', 'ध', 'न'],
  },
  {
    info: ``,
    characters: ['प', 'फ', 'ब', 'भ', 'म'],
  },
  {
    info: ``,
    characters: ['श', 'ष', 'स', 'ह'],
  },
]
