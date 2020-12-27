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
      <div @click="startPractice" class="home-card card">
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
          <div class="home-card-left-title">Custom</div>
          <div class="home-card-left-description">
            Select what you want to focus on.
          </div>
        </div>
        <div class="home-card-right"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { characters, alphabets } from '../data'
import { save, load } from '../util'

export default {
  name: 'Home',
  components: {},
  data() {
    const { lang } = this.$route.params
    return {
      level: load(lang, 'level') || 0,
      proficiency: load(lang, 'proficiency') || 1,
      alphabet: characters[lang],
      state: this.$route.query.state,
      maxLevel: characters[lang].info.levels.length,
    }
  },
  watch: {
    $route(r) {
      const { lang } = r.params
      this.level = load(lang, 'level') || 0
      this.proficiency = load(lang, 'proficiency') || 1
      this.alphabet = characters[lang]
      this.maxLevel = characters[lang].info.levels.length
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
      // TODO options, see Learn.vue
      // const options = this.options.filter((o) => o.value).map((o) => o.id)
      const options = []
      const groups = []
      for (let i = 0; i < this.level + 1; i++) {
        groups.push(i)
      }
      this.$router.push({
        name: 'Practice',
        params: { lang: this.$route.params.lang },
        query: {
          mode: 'practice',
          opt: options.join(','),
          grp: groups.join(','),
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
    background-color: white
    margin: 0 auto
    cursor: pointer
    display: flex
    color: black
    justify-content: space-between

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
