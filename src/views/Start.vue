<template>
  <div class="start">
    <div class="start-title">
      <h1>Realphabet</h1>
      <h2>Learn any alphabet for real</h2>
    </div>
    <div class="start-explanation">
      <p>This app will get you started reading in any alphabet quickly.</p>

      <div class="start-explanation-cta">
        Which alphabet would you like to learn?
      </div>
    </div>
    <div class="start-select">
      <router-link
        v-for="alphabet in alphabets"
        :to="'/' + alphabet.slug"
        class="start-select-link"
      >
        <button class="button -primary">{{ alphabet.name }}</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { alphabets } from '../data/index'

export default {
  name: 'Start',
  data() {
    return {
      alphabets,
    }
  },
}
</script>

<style lang="sass">
.start
  &-title
    h1
      font-size: 3rem
    h2
      font-size: 2rem
</style>
