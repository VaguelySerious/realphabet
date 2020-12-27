<template>
  <div class="chart-wrapper">
    <div class="chart">
      <div class="chart-row-wrapper" v-for="(row, i) in layout">
        <div
          class="chart-row"
          :class="{ selected: selected[i] }"
          @click="$emit('selectRow', i)"
        >
          <span class="chart-item" v-for="char in row">
            <span class="chart-item-char">{{ char }}</span>
            <span class="chart-item-rom">{{ map[char] }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { characters } from '../data'

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
      return characters[this.lang].layout
    },
    map() {
      return characters[this.lang].map
    },
  },
}
</script>

<style lang="sass">
@import "../style"

.chart
  display: flex
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
    &-wrapper
      &:not(:last-child)
        border-right: 1px solid grey

    display: flex
    flex-direction: column
    align-items: center

    &:hover
      background-color: darken($color-bg, 5%)
      cursor: pointer

    &.selected
      background-color: darken($color-bg, 10%) !important

  &-item
    padding: 0.25rem 1rem
    margin: 0
    display: flex
    width: 20%
    flex-direction: column
    align-items: center

    &-char
      text-align: center

    &-rom
      font-size: 0.5em
</style>
