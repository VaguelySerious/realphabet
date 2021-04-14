<template>
  <div class="practice">
    <div class="practice-char">{{ queue[0] }}</div>
    <input
      ref="input"
      v-model="textInput"
      @keydown.enter="check"
      class="input practice-input"
      type="text"
      placeholder="Your input"
      :class="{
        'is-success': state === 'success',
        'is-danger': state === 'wrong',
      }"
    />
    <!-- :disabled="state === 'failed'" -->
    <div class="practice-messages">
      <p v-if="state === 'wrong'" class="practice-message error">Wrong!</p>
      <p v-if="state === 'success'" class="practice-message success">Nice!</p>
      <p v-if="state === 'failed'" class="practice-card">
        <CharacterCard :lang="$route.params.lang" :char="queue[0]" />
      </p>
      <p v-if="state === 'failed'" class="practice-message">
        Press enter to continue
      </p>
    </div>

    <div v-if="debug" class="debug">
      <div v-for="(stack, i) in pile">
        <hr class="hr" />
        <div class="debug-stack">
          <p>{{ i }}</p>
          <p v-for="card in stack">{{ card.char }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { shuffle, save, load, play } from '../util'
import { data } from '../data/index'
import CharacterCard from '../components/CharacterCard.vue'

// All characters from the last levels
function accumulatedLevelChars(lang, level, lastLevelOnly) {
  const levels = data[lang].levels
  if (lastLevelOnly) {
    return levels[level].characters
  }
  return levels
    .slice(0, level + 1)
    .reduce((acc, a) => acc.concat(a.reviewCharacters || a.characters), [])
}

export default {
  name: 'Practice',
  components: {
    CharacterCard,
  },
  data() {
    const { opt = '', grp = '', level, mode } = this.$route.query
    const { lang } = this.$route.params
    const selectedGroups = grp
      .split(',')
      .filter((x) => x !== '')
      .map(Number)
    const selectedOptions = opt.split(',').filter((x) => x !== '')

    const items = level
      ? accumulatedLevelChars(lang, +level, mode === 'test')
      : data[lang].parse(selectedGroups, selectedOptions)
    const queue = shuffle(items.slice())
    const stats = queue.reduce((acc, a) => {
      acc[a] = { correct: 0, failed: 0 }
      return acc
    }, {})
    console.log('Items', queue)
    return {
      textInput: '',
      state: '',
      queue,
      stats,
      failed: 0,
      debug: load('', 'debug'),
    }
  },
  computed: {
    map() {
      return data[this.$route.params.lang].map
    },
  },
  methods: {
    play() {
      const lang = this.$route.params.lang
      const char = this.queue[0]
      play(lang, char)
    },
    nextItem(failedCurrent = false) {
      const curr = this.queue.shift()
      const next = this.queue[0]
      const stats = this.stats[curr]
      // Update stats
      if (failedCurrent) {
        stats.failed += 1
      } else {
        stats.correct += 1
      }

      // Pile item on the end again if not reviewed enough
      const REVIEW_LEVEL = 2
      if (stats.correct <= stats.failed + REVIEW_LEVEL) {
        this.queue.push(curr)
      }

      // End condition
      if (!next) {
        const mode = this.$route.query.mode
        const lang = this.$route.params.lang
        const query = { state: 'practiced' }
        if (mode === 'test') {
          // Levelup
          save(lang, 'level', +load(lang, 'level') + 1)
          query.state = 'levelup'
        } else if (mode === 'practice') {
          // Proficiency up
          const newProf = +load(lang, 'proficiency') + 1
          save(lang, 'proficiency', newProf >= 5 ? 5 : newProf)
        }
        this.$router.push({ name: 'Home', query })
      }
    },
    check() {
      const current = this.map[this.queue[0]]

      if (this.state === 'failed') {
        this.nextItem(true)
        this.state = 'blank'
        this.textInput = ''
        return
      }

      const setTempState = (state) => {
        this.state = state
        setTimeout(() => {
          if (this.state === state) {
            this.state = 'blank'
          }
        }, 1000)
      }

      if (this.textInput === current.input) {
        this.play()
        setTempState('success')
        this.textInput = ''
        this.nextItem(false)
        this.failed = 0
      } else {
        this.failed++
        if (this.failed >= 3) {
          this.state = 'failed'
          this.failed = 0
          this.play()
        } else {
          setTempState('wrong')
        }
      }
    },
  },
}
</script>

<style lang="sass">
.practice

  &-char
    text-align: center
    font-size: 5rem

  &-messages
    text-align: center

  &-message
    margin-top: 0.5rem
    font-size: 2rem

  &-card
    display: flex
    justify-content: center

  &-input
    text-align: center
    font-size: 1.5em

    &:focus
      outline: none
    &::-moz-placeholder
      opacity: 0
    &::-webkit-placeholder
      opacity: 0

.hr
  background-color: white
  width: 100%
  height: 1px
  margin: 0
.error
  color: red
  font-weight: 700
.success
  color: darkgreen
  font-weight: 700
.debug
  position: absolute
  bottom: 10rem
  left: 5rem

  & p
    margin: 0

  &-stack
    display: flex
</style>
