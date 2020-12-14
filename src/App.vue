<template>
  <div class="app">
    <nav class="nav">
      <span v-for="l in langs" class="nav-item" @click="lang = l.code">{{
        l.name
      }}</span>
    </nav>
    <h1>RealPhabet</h1>
    <div v-if="isSelecting">
      <Japanese v-if="lang === 'jp'" :items="items" @done="select" />
      <Hindi v-if="lang === 'hi'" :items="items" @done="select" />
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
import Japanese from './components/Japanese.vue'
import Hindi from './components/Hindi.vue'
import Examiner from './components/Examiner.vue'

export default {
  name: 'App',
  components: {
    Japanese,
    Hindi,
    Examiner,
  },
  data() {
    return {
      isSelecting: true,
      items: [],
      lang: 'jp',
      langs: [
        { name: 'Japanese', code: 'jp' },
        { name: 'Hindi', code: 'hi' },
      ],
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

.app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  // color: #2c3e50

.nav
  display: flex
  flex-wrap: wrap
  justify-content: space-around

  &-item
    padding: 0.2rem

    &:hover
      background-color: gray
      cursor: pointer

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
