<template>
  <table>
    <tr v-for="column in columns">
      <td
        v-for="item in column"
        @click="toggle(item)"
        :class="{ selected: selected[item] }"
        class="hover"
      >
        {{ item }}
      </td>
    </tr>
  </table>
</template>

<script>
import hiragana from '../hiragana'

export default {
  name: 'Selector',
  // props: {
  //   msg: String,
  // },
  data() {
    return {
      selected: {},
      columns: hiragana.reduce(
        (acc, kana) => {
          const column = Math.floor(acc.count % 5)
          if (!acc.columns[column]) {
            acc.columns[column] = []
          }
          acc.columns[column].push(kana.character)
          acc.count++
          return acc
        },
        { count: 0, columns: [] }
      ).columns,
    }
  },
  methods: {
    toggle(item) {
      if (item in this.selected) {
        delete this.selected[item]
      } else {
        this.selected[item] = true
      }
      this.$emit('selectCharacters', this.selected)
    },
  },
}
</script>

<style lang="sass">
table
  border-spacing: 0.5rem
tr
  border: 1px solid black
td
  border: 1px solid black
  padding: 0.1rem
  margin: 0rem 2rem

.hover
  &:hover
    background-color: lightblue
    cursor: pointer

.selected
  background-color: darken(lightblue, 10%)
</style>
