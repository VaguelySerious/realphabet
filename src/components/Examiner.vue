<template>
  <div class="exam">
    <p class="exam-char">{{ items[current].char }}</p>
    <input v-model="textInput" @input="check" class="exam-input" type="text" />
    <p v-if="state === 'error'" class="exam-message error">Wrong!</p>
    <p v-if="state === 'success'" class="exam-message success">Nice!</p>

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
import { shuffle } from '../util'

export default {
  name: 'Examiner',
  props: {
    items: Array,
  },
  data() {
    console.log({ items: this.items })
    const pile = [shuffle(this.items.slice()), [], [], [], [], []]
    return {
      textInput: '',
      current: 0,
      state: '',
      pile,
      failed: 0,
      debug: false,
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

      console.log()

      // If failed, knock one down, otherwise raise
      const removed = this.pile[stack].splice(card, 1)
      if (failedCurrent) {
        this.pile[(stack || 1) - 1].push(removed[0])
      } else {
        this.pile[stack + 1].push(removed[0])
      }

      // End condition
      if (this.pile[this.pile.length - 1].length === this.items.length) {
        // TODO Finish message / modal
        alert('Finished!')
      }

      // Then get next one on pile
      const nextCard = this.pile.find((stack) => stack[0])[0]
      this.current = this.items.findIndex((item) => item === nextCard)

      console.log({ current: this.current })
    },
    check() {
      const current = this.items[this.current]
      if (this.textInput.length >= current.roman.length) {
        if (this.failed >= 3) {
          // Show correct one an move on
        }
        if (this.textInput === current.roman) {
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
        } else {
          this.failed++
          this.state = 'error'
        }
      } else {
        this.state = 'blank'
      }
    },
  },
}
</script>

<style lang="sass">
.exam

  &-char
    font-size: 3em

  &-message
    font-size: 2em

  &-input
    width: 100px
    height: 50px
    font-size: 2em

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
