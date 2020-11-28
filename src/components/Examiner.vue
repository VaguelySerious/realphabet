<template>
  <div>
    <p>{{ items[current] }}</p>
    <input v-model="textInput" @input="check" type="text" />
    <p v-if="state === 'error'" class="error">Wrong!</p>
    <p v-if="state === 'success'" class="success">Nice!</p>
  </div>
</template>

<script>
import { byCharacter } from '../hiragana'

export default {
  name: 'Examiner',
  props: {
    selected: Object,
  },
  data() {
    const items = Object.keys(this.selected)
    return {
      items,
      textInput: '',
      current: 0,
      state: '',
    }
  },
  methods: {
    check() {
      const current = this.items[this.current]
      const character = byCharacter[current]
      if (this.textInput.length >= character.romanization.length) {
        if (this.textInput === character.romanization) {
          this.state = 'success'
          setTimeout(() => {
            if (this.state === 'success') {
              this.state = 'blank'
            }
          }, 1000)
          this.textInput = ''
          this.current++
        } else {
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
.error
  color: red
  font-weight: 700
.success
  color: darkgreen
  font-weight: 700
</style>
