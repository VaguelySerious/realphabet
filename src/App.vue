<template>
  <div>
    <h1>RealPhabet</h1>
    <div v-if="isSelecting">
      <Selector :items="items" @done="select" />
    </div>
    <div v-else>
      <button @click="isSelecting = true" class="button -back">Back</button>
      <Examiner :items="items" />
    </div>

    <footer class="footer">
      <span> Inspired by <a href="https://realkana.com/">RealKana</a>. </span>
      <span>
        Made with love by <a href="https://wielander.me/">Peter Wielander</a>.
      </span>
      <span>
        Open source on
        <a href="https://github.com/VaguelySerious/realphabet">Github</a>.
      </span>
    </footer>
  </div>
</template>

<script>
import Selector from './components/Selector.vue'
import Examiner from './components/Examiner.vue'

export default {
  name: 'App',
  components: {
    Selector,
    Examiner,
  },
  data() {
    return {
      isSelecting: true,
      items: [],
    }
  },
  methods: {
    select(items) {
      this.items = items
      this.isSelecting = false
    },
  },
}
</script>

<style lang="sass">
html
  color: #eee
  background-color: #111
  font-size: 1.5em

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  // color: #2c3e50
  margin-top: 60px

.button
  margin-top: 1rem

  &.-primary
    font-size: inherit
    margin: 2rem

.footer
  position: absolute
  bottom: 0
  margin: 2rem

  @media (max-width: 800px)
    position: inherit
    margin-top: 2rem

  & a
    text-decoration: none
    color: inherit
    border-bottom: 2px solid gray
    &:hover
      border-bottom: 2px solid white
</style>
