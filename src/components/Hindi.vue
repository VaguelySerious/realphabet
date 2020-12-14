<template>
  <div class="selector-wrapper">
    <div class="selector">
      <div class="selector-rows" v-for="(row, i) in layout">
        <div
          class="row hover"
          :class="{ selected: selectedRows[i] }"
          @click="selectRow(i)"
        >
          <span class="row-item" v-for="char in row">
            {{ char }}
            <span class="row-item-rom">{{ map[char] }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
  <button @click="done" type="button" class="button -primary">Go</button>
</template>

<script>
import { layout, map } from '../characters/hindi'

export default {
  name: 'Hindi',
  emits: ['done'],
  props: {
    items: Array,
  },
  data() {
    return {
      selectedRows: {},
      map,
      layout,
    }
  },
  methods: {
    selectRow(i) {
      this.selectedRows[i] = !this.selectedRows[i]
    },
    done() {
      const chars = this.layout
        .filter((row, i) => this.selectedRows[i])
        .flat()
        .filter((char) => char !== '')

      this.$emit(
        'done',
        chars.map((char) => ({ char, roman: map[char] }))
      )
    },
  },
}
</script>

<style lang="sass">
.selector
  border-spacing: 1rem
  font-size: 1.75em

  &-wrapper
    max-height: 800px
    width: 100%
    display: flex
    justify-content: space-around
    // align-items: center
    // justify-items: center
    overflow-y: scroll

    @media (max-width: 800px)
      overflow-y: auto
      max-height: 100%
      height: 100%

  &-option
    margin-top: 2rem

    &-item
      padding: 0.25rem

    // &-input

  &-rows
    &:not(:last-child)
      border-bottom: 1px solid grey


.row
  display: flex
  margin-bottom: 0.1rem

  // &-list

  // &-check

  &-item
    margin-left: 1rem
    display: flex
    width: 20%
    flex-direction: column
    &-rom
      font-size: 0.5em


.selected
  background-color: lighten(#444, 10%) !important

.hover
  &:hover
    background-color: #555
    cursor: pointer
</style>
