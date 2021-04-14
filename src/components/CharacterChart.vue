<template>
  <div class="chart-wrapper">
    <div class="chart">
      <div class="chart-row-wrapper" v-for="(row, i) in layout">
        <div class="chart-row" :class="{ selected: selected[i] }">
          <input
            type="checkbox"
            :id="'row' + i"
            :name="'row' + i"
            @click="$emit('selectRow', i)"
            :checked="selected[i]"
          />
          <span class="chart-item" v-for="char in row" @click="play(char)">
            <span class="chart-item-char">{{ char }}</span>
            <span v-if="map[char]" class="chart-item-rom">{{
              map[char].rom || map[char].input
            }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { data } from '../data/index'
import { play } from '../util'

export default {
  name: 'CharacterChart',
  emits: ['selectRow'],
  props: {
    selectable: {
      default: true,
      type: Boolean,
    },
    lang: String,
    selected: Object,
  },
  computed: {
    layout() {
      return data[this.lang].layout
    },
    map() {
      return data[this.lang].map
    },
  },
  methods: {
    play(char) {
      const lang = this.$route.params.lang
      play(lang, char)
    },
  },
}
</script>

<style lang="sass">
@import "../style"

.chart
  // display: flex
  // flex-wrap: wrap
  overflow-x: auto
  overflow-y: hidden
  font-size: 2.5rem

  &-wrapper
    display: flex
    justify-content: center

  @media (max-width: 800px)
    overflow-y: auto
    max-height: 100%
    height: 100%

  &-option
    margin-top: 2rem

    &-item
      padding: 0.25rem


  &-row
    display: flex
    align-items: center

    &.selected
      background-color: darken($color-bg, 10%) !important

  &-item
    padding: 0.25rem 1rem
    margin: 0
    display: flex
    width: 20%
    flex-direction: column
    align-items: center

    &:hover
      background-color: darken($color-bg, 5%)
      cursor: pointer

    &-char
      text-align: center

    &-rom
      font-size: 0.5em
</style>
