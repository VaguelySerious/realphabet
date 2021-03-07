<template>
  <div class="app">
    <nav class="nav">
      <router-link class="nav-title title" :to="'/' + $route.params.lang">
        RealPhabet
      </router-link>
      <div
        v-if="$route.path !== '/'"
        class="nav-item dropdown is-right"
        :class="{ 'is-active': dropdown }"
        name="lang"
        id="lang"
      >
        <div @click="dropdown = !dropdown" class="dropdown-trigger">
          <span>{{ alphabets.find((a) => a.slug === lang).shortName }}</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </div>
        <div class="dropdown-menu">
          <div class="dropdown-content">
            <a
              href="#"
              class="dropdown-item"
              v-for="l in alphabets"
              @click="navigate(l)"
            >
              {{ l.name }}
            </a>
          </div>
        </div>
      </div>
    </nav>

    <div class="app-container">
      <router-view />
    </div>

    <footer class="app-footer">
      <div class="app-footer-content">
        <!-- <span>
          <a href="https://wielander.me/posts/learning-alphabets">About</a>.
        </span> -->
        <span>
          Made with love by
          <a href="https://wielander.me/">Peter Wielander</a>.
        </span>
        <span>
          Inspired by <a href="https://realkana.com/">RealKana</a> and
          <a href="https://www.tofugu.com/japanese/learn-hiragana/">Tofugu</a>.
        </span>
        <span>
          Open source on
          <a href="https://github.com/VaguelySerious/realphabet">Github</a>.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import { alphabets } from './data/index'
import { save, load } from './util'

export default {
  name: 'App',
  data() {
    return {
      alphabets,
      lang: '',
      dropdown: false,
    }
  },
  watch: {
    $route(to) {
      this.lang = to.params.lang
      const lang = this.$route.params.lang
      const level = load(lang, 'level')
      const proficiency = load(lang, 'proficiency')
      if (!level) {
        save(lang, 'level', 0)
      }
      if (!proficiency) {
        save(lang, 'proficiency', 1)
      }
    },
  },
  methods: {
    navigate(l) {
      this.lang = l.slug
      this.$router.push({ name: 'Home', params: { lang: l.slug } })
      this.dropdown = false
    },
  },
}
</script>

<style lang="sass">
@import "./style"

.app
  min-height: 100vh
  position: relative
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

  &-container
    max-width: 800px
    margin: 0 auto

.nav
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  align-items: center
  background-image: none
  background-color: white
  border-bottom: 1px solid black
  margin-bottom: 2rem
  padding: 0.5rem 0

  &-title
    margin-left: 3rem
    margin-bottom: 0 !important

  &-item
    margin-right: 3rem
    padding: 0.2rem

    // &:hover
    //   background-color: gray
    //   cursor: pointer

.app-footer
  height: 150px
  max-width: 800px

  &-content
    margin: 2rem
    padding-bottom: 2rem
    position: absolute
    bottom: 0

  & a
    text-decoration: none
    color: inherit
    border-bottom: 2px solid gray
    &:hover
      border-bottom: 2px solid black
      color: black
</style>
