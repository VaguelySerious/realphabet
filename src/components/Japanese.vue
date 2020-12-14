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
  <div class="selector-option">
    <div class="selector-option-item">
      <label class="selector-option-label" for="dakuten">
        Include Dakuten (<a
          href="https://en.wikipedia.org/wiki/Dakuten_and_handakuten"
          class="help-link"
          >What is this?</a
        >)
      </label>
      <input
        class="selector-option-input"
        type="checkbox"
        id="dakuten"
        name="dakuten"
        v-model="dakuten"
      />
    </div>
    <div class="selector-option-item">
      <label class="selector-option-label" for="yoon">
        Include Yōon (<a
          href="https://en.wikipedia.org/wiki/Y%C5%8Don"
          class="help-link"
          >What is this?</a
        >)
      </label>
      <input
        class="selector-option-input"
        type="checkbox"
        id="yoon"
        name="yoon"
        v-model="yoon"
      />
    </div>
    <div class="selector-option-item">
      <label class="selector-option-label" for="archaic">
        Include Archaic Hiragana
      </label>
      <input
        class="selector-option-input"
        type="checkbox"
        id="archaic"
        name="archaic"
        v-model="archaic"
      />
    </div>
  </div>
  <button @click="done" type="button" class="button -primary">Go</button>
</template>

<script>
import { map, layout, dakuten, yoon, archaic } from '../characters/kana'

export default {
  name: 'Japanese',
  emits: ['done'],
  // TODO Use these to preselect
  props: {
    items: Array,
  },
  data() {
    return {
      dakuten: false,
      yoon: false,
      archaic: false,
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
      let chars = this.layout
        .filter((row, i) => this.selectedRows[i])
        .flat()
        .filter((char) => char !== '')

      // Evaluate dakuten and yoon
      const dakutenList = this.dakuten
        ? chars.map((char) => dakuten[char] || []).flat()
        : []
      const yoonList = this.yoon
        ? Object.keys(yoon)
            .map((key) => {
              console.log(yoon[key].map((comp) => chars.includes(comp)))
              return yoon[key].every((comp) => chars.includes(comp)) ? key : []
            })
            .flat()
        : []
      const archaicList = this.archaic ? archaic : []

      chars = chars.concat(dakutenList, yoonList, archaicList)
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
