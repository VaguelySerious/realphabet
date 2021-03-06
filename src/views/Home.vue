<template>
  <div class="home">
    <div class="home-text">
      <h1 class="home-title">Learn {{ language.name }}</h1>

      <div class="home-desc" v-html="language.desc"></div>
    </div>

    <div v-if="state" class="notification success">
      {{
        state === 'practiced'
          ? `Nice job! You're getting to know them better and better`
          : `Level up! Take a short break before you learn more, and don't forget to
        practice your current level from time to time.`
      }}
    </div>

    <div class="home-card-wrapper">
      <router-link
        :to="{ name: 'Learn', params: { level } }"
        class="home-card card"
      >
        <div class="home-card-left">
          <div class="home-card-left-title">Learn</div>
          <div class="home-card-left-description">
            Get introduced to new characters level by level.
          </div>
        </div>
        <div class="home-card-right">
          <div class="home-card-right-desc">Level</div>
          <div class="home-card-right-num">{{ level }} / {{ maxLevel }}</div>
        </div>
      </router-link>
    </div>

    <div class="home-card-wrapper">
      <div
        @click="startPractice"
        class="home-card card"
        :class="{ '-disabled': level === 0 }"
      >
        <div class="home-card-left">
          <div class="home-card-left-title">Practice</div>
          <div class="home-card-left-description">
            Reinforce what you learned in the lessons.
          </div>
        </div>
        <div class="home-card-right">
          <div class="home-card-right-desc">Practice level</div>
          <div class="home-card-right-num">{{ proficiency }} / 5</div>
        </div>
      </div>
    </div>

    <!-- div class="home-card-wrapper">
      <router-link :to="{ name: 'Read' }" class="home-card card">
        <div class="home-card-left">
          <div class="home-card-left-title">Reading</div>
          <div class="home-card-left-description">
            Practice reading actual text as fast as you can.
          </div>
        </div>
        <div class="home-card-right">
          <div class="home-card-right-desc">Reading speed</div>
          <div class="home-card-right-num">0/min</div>
        </div>
      </router-link>
    </div> -->

    <div class="home-card-wrapper">
      <router-link :to="{ name: 'Select' }" class="home-card card">
        <div class="home-card-left">
          <div class="home-card-left-title">Overview</div>
          <div class="home-card-left-description">
            View all characters and start custom practice sessions.
          </div>
        </div>
        <div class="home-card-right"></div>
      </router-link>
    </div>

    <!-- <p>FAQ</p>
    <p>How does this work?</p>
    <p>Why is this the best way to learn Japanese Hiragana?</p>
    <p>What are Japanese Hiragana?</p>
    <p>Why would you want to learn Japanese Hiragana?</p> -->
  </div>
</template>

<script>
import { data, alphabets } from '../data/index'
import { save, load } from '../util'

export default {
  name: 'Home',
  components: {},
  data() {
    const { lang } = this.$route.params
    return {
      level: load(lang, 'level') || 0,
      proficiency: load(lang, 'proficiency') || 1,
      state: this.$route.query.state,
      maxLevel: data[lang].levels.length,
    }
  },
  watch: {
    $route(r) {
      const { lang } = r.params
      this.level = load(lang, 'level') || 0
      this.proficiency = load(lang, 'proficiency') || 1
      this.maxLevel = data[lang].levels.length
    },
  },
  computed: {
    language() {
      const { lang } = this.$route.params
      return alphabets.find((a) => a.slug === lang)
    },
  },
  mounted() {
    // Clear messages
    this.$router.replace({ state: null })
  },
  methods: {
    startPractice() {
      if (this.level === 0) {
        return
      }
      this.$router.push({
        name: 'Practice',
        params: { lang: this.$route.params.lang },
        query: {
          mode: 'practice',
          level: this.level - 1,
        },
      })
    },
  },
}
</script>

<style lang="sass">
.home

  &-text
    @media (max-width: 800px)
      margin-left: 1rem
      margin-right: 1rem

  &-title
    font-size: 2rem

  &-desc
    margin-bottom: 2rem

  &-card
    padding: 1rem 2rem
    max-width: 800px
    margin: 0 auto
    cursor: pointer
    display: flex
    justify-content: space-between

    &.-disabled
      color: gray
      background-color: lightgray !important
      cursor: default

    &-wrapper
      margin-bottom: 2rem
      // display: flex
      // width: 100%
      // justify-content: space-around


    &-left
      margin-right: 2rem

      &-title
        font-size: 2rem

      &-description
        font-size: 1rem

    &-right
      font-size: 0.8rem
      width: 200px

      &-num
        font-size: 2.5rem

      &-desc
        font-size: 1rem
</style>
