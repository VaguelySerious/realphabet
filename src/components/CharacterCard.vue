<template>
  <div @click="play" class="ccard">
    <div class="ccard-show">
      <div class="ccard-show-char">
        {{ char }}
      </div>
      <div class="ccard-highlight-wrapper">
        <span class="ccard-highlight">"{{ info.rom }}"</span>
      </div>
    </div>

    <div class="ccard-explain">
      <div v-if="info.mem" v-html="info.mem"></div>
    </div>
  </div>
</template>

<style lang="sass">
.ccard
  background-color: #eee
  cursor: pointer
  display: flex
  padding: 1rem 1rem
  margin: 1rem 0.5rem
  border-radius: 10px
  max-width: 47%

  &-highlight
    &-wrapper
      width: 100%
      text-align: center
    font-size: 1.25em

  &-show
    margin-right: 2rem
    &-char
      width: 80px
      font-size: 5rem
      align-items: center
      justify-content: center
      text-align: center

  &-explain
    // flex: 2 2 auto
    // max-width: 300px
</style>

<script>
import { data } from '../data/index'
import { play } from '../util'
import Action from './Action.vue'

export default {
  name: 'CharacterCard',
  components: {
    Action,
  },
  props: {
    lang: String,
    char: String,
  },
  data() {
    const { map } = data[this.lang]
    return {
      map,
    }
  },
  computed: {
    info() {
      return this.map[this.char]
    },
  },
  methods: {
    play() {
      const lang = this.$route.params.lang
      play(lang, this.romanization)
    },
  },
}
</script>
