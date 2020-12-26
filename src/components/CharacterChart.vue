<template>
  <div class="chart">
    <div class="chart-row-wrapper" v-for="(row, i) in layout">
      <div
        class="chart-row hover"
        :class="{ selected: selected[i] }"
        @click="$emit('selectRow', i)"
      >
        <span class="chart-item" v-for="char in row">
          {{ char }}
          <span class="chart-item-rom">{{ map[char] }}</span>
        </span>
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
.chart
  width: 100%
  display: flex
  overflow-x: auto
  overflow-y: hidden
  font-size: 1.75em

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
    height: 100%
    flex-direction: column
    justify-content: space-between
    margin-bottom: 0.1rem

  &-item
    padding: 0 1rem
    display: flex
    width: 20%
    flex-direction: column
    align-items: center

    &-rom
      font-size: 0.5em

.hover
  &:hover
    background-color: #eee
    cursor: pointer

.selected
  background-color: #888 !important
</style>
