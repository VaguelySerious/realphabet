<template>
  <div @click="play" class="ccard">
    <div class="ccard-show">
      <div class="ccard-show-char">
        {{ char }}
      </div>
      <div class="ccard-show-actions">
        <Action type="audio" @click="play" />
        <Action type="draw" />
      </div>
    </div>

    <div class="ccard-explain">
      <div class="ccard-explain-top">
        <div v-if="info.mem" v-html="info.mem"></div>
        <div v-else>
          We don't have a mnemonic for this character currently. Try to make up
          a story around why the character could look it does, and why it sounds
          like it sounds. The crazier the story, the better you'll remember it.
        </div>
      </div>
      <div class="ccard-explain-bot">
        <div class="ccard-explain-bot-ipa">
          <span class="ccard-highlight">{{ info.rom }}</span>
          <!-- like in "original" -->
        </div>
        <div class="ccard-explain-bot-notes">
          <Action type="warning" />
          <Action type="danger" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.ccard
  background-color: white
  cursor: pointer
  width: 100%
  display: flex
  padding: 1rem 1rem
  margin: 1rem 0
  border-radius: 10px

  &-highlight
    //
    color: blue
    font-size: 1.25em

  &-show
    flex: 1 1 auto
    display: flex
    &-char
      font-size: 10rem
      max-height:200px
      align-items: center
      justify-content: center
      text-align: center
    &-actions
      display: flex
      flex-direction: column

  &-explain
    flex: 2 2 auto
    display: flex
    flex-direction: column
    justify-content: space-between
    &-top
      font-size: 1.5rem
    &-bot
      display: flex
      justify-content: space-between
      align-items: end
      &-ipa
        //
      &-notes
        display: flex
        flex-wrap: nowrap
</style>

<script>
import { data } from '../data/index'
import { save, load, play } from '../util'
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
