<template>
  <div>
    <h1>RealPhabet</h1>
    <div v-if="selecting">
      <!-- TODO back-pass-in selected as array -->
      <Selector @selectCharacters="selected = $event" />
      <button @click="switch" type="button">Go</button>
    </div>
    <div v-else>
      <button @click="switch" class="button -back">Back</button>
      <Examiner :selected="selected" />
    </div>

    <footer class="footer">
      <span> Inspired by <a href="https://realkana.com/">RealKana</a>. </span>
      <span>
        Made with love by <a href="https://wielander.me/">Peter Wielander</a>.
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
      selecting: true,
      selected: {},
    }
  },
  methods: {
    switch() {
      this.selecting = !this.selecting
    },
  },
}
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

.footer
  position: absolute
  bottom: 0
  margin: 2rem
</style>
