<template>
  <div class="practice">
    <div class="practice-char">{{ items[current].char }}</div>
    <input
      ref="input"
      v-model="textInput"
      @input="check"
      class="input practice-input"
      type="text"
      placeholder="Your input"
      :disabled="state === 'failed'"
      :class="{
        'is-success': state === 'success',
        'is-danger': state === 'wrong',
      }"
    />
    <div class="practice-messages">
      <p v-if="state === 'wrong'" class="practice-message error">Wrong!</p>
      <p v-if="state === 'success'" class="practice-message success">Nice!</p>
      <p v-if="state === 'failed'" class="practice-message error">
        It's "{{ items[current].roman }}"
      </p>
      <!-- <p v-if="state === 'failed'" class="practice-message">
        Press enter or tap the input to continue
      </p> -->
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
import { shuffle, save, load } from '../util'
import { characters } from '../data'

export default {
  name: 'Practice',
  data() {
    const practiceLength = this.$route.query.mode === 'test' ? 4 : 3
    const { opt = '', grp = '' } = this.$route.query
    const { lang } = this.$route.params
    const items = characters[lang].parse(
      grp
        .split(',')
        .filter((x) => x !== '')
        .map(Number),
      opt.split(',').filter((x) => x !== '')
    )
    const pile = [
      shuffle(items.slice()),
      ...[...Array(practiceLength - 1).keys()].map((x) => []),
    ]
    return {
      items,
      textInput: '',
      current: items.indexOf(pile[0][0]),
      state: '',
      pile,
      failed: 0,
      debug: load('', 'debug'),
    }
  },
  methods: {
    getNext(failedCurrent = false) {
      const current = this.items[this.current]
      // Find current in pile
      let stack = 0
      let card = 0
      for (stack; stack < this.pile.length; stack++) {
        card = 0
        for (card; card < this.pile[stack].length; card++) {
          if (this.pile[stack][card] === this.items[this.current]) {
            break
          }
        }
        if (this.pile[stack][card] === this.items[this.current]) {
          break
        }
      }
      if (stack === this.pile.length) {
        throw new Error(`Could not find ${this.items[this.current]}`)
      }

      // If failed, knock one down, otherwise raise
      const removed = this.pile[stack].splice(card, 1)
      if (failedCurrent) {
        this.pile[(stack || 1) - 1].push(removed[0])
      } else {
        this.pile[stack + 1].push(removed[0])
      }

      // End condition
      if (this.pile[this.pile.length - 1].length === this.items.length) {
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

      // Then get next one on pile
      const nextCard = this.pile.find((stack) => stack[0])[0]
      this.current = this.items.findIndex((item) => item === nextCard)
    },
    check() {
      const current = this.items[this.current]
      const hasMultiple = Array.isArray(current.roman)
      const maxLength = !hasMultiple
        ? current.roman.length
        : current.roman.reduce((acc, a) => (a.length > acc ? a.length : acc), 0)
      const minLength = !hasMultiple
        ? current.roman.length
        : current.roman.reduce((acc, a) => (a.length < acc ? a.length : acc), 9)
      if (this.textInput.length >= minLength) {
        if (
          this.textInput === current.roman ||
          (hasMultiple && current.roman.includes(this.textInput))
        ) {
          this.state = 'success'
          setTimeout(() => {
            if (this.state === 'success') {
              this.state = 'blank'
            }
          }, 1000)
          this.textInput = ''
          const failed = this.failed
          this.failed = 0
          this.getNext(failed)
        } else if (this.textInput.length >= maxLength) {
          this.failed++
          this.state = 'wrong'
          if (this.failed >= 3) {
            // TODO Show correct one and move on
            this.state = 'failed'
            setTimeout(() => {
              this.state = 'blank'
              this.getNext(true)
              this.textInput = ''
              setTimeout(() => {
                this.$refs.input.focus()
              }, 100)
            }, 1500)
          }
        }
      } else {
        this.state = 'blank'
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
    font-size: 2em

  &-input
    // width: 100px
    // height: 50px
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
