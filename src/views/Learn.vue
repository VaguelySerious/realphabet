<template>
  <div class="learn">
    <h1 class="learn-headline title">Learn new characters</h1>

    <div class="learn-levels">
      <router-link
        class="learn-levels-item -left"
        :class="{ '-disabled': level === 0 }"
        :to="{ params: { level: level > 0 ? level - 1 : 0 } }"
      >
        <span class="icon is-small">
          <i class="fas fa-arrow-left" aria-hidden="true"></i>
        </span>
      </router-link>
      <div class="learn-levels-list">
        <router-link
          class="learn-levels-item"
          v-for="(l, i) in levels"
          :class="{
            '-active': i === level,
            '-current': i === currentLevel,
          }"
          :to="{ params: { level: i } }"
        >
          {{ i }}
        </router-link>
      </div>
      <router-link
        class="learn-levels-item -left"
        :to="{
          params: { level: level < levels.length - 1 ? level + 1 : level },
        }"
        :class="{ '-disabled': level === levels.length - 1 }"
      >
        <span class="icon is-small">
          <i class="fas fa-arrow-right" aria-hidden="true"></i>
        </span>
      </router-link>
    </div>

    <div class="learn-content">
      <div v-if="level < levels.length" class="learn-explanation">
        <span v-if="levels[level].info" v-html="levels[level].info"></span>
      </div>
      <div v-else class="notification learn-notification">
        <p>
          All done! You can revisit previous levels by using the navigation
          above.
        </p>
        <p>
          The next step in your learning journey is reading practice! Find some
          text and try to read and pronounce the words. It might be slow at the
          start, but you'll get a lot faster over time.
        </p>
      </div>

      <div class="learn-show">
        <CharacterCard
          v-for="character in group"
          :lang="$route.params.lang"
          :char="character"
        />
      </div>
    </div>

    <div class="learn-next">
      <div v-if="level === currentLevel">
        <button @click="startTest" type="button" class="button -primary">
          Take the test
        </button>
      </div>
      <div v-else>
        <router-link :to="{ params: { level: currentLevel } }">
          <button type="button" class="button -primary">
            Jump to current level
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { data } from '../data/index'
import { save, load } from '../util'
import CharacterCard from '../components/CharacterCard.vue'

export default {
  name: 'Learn',
  components: {
    CharacterCard,
  },
  data() {
    const { lang } = this.$route.params
    const { map, layout, levels = [] } = data[lang]
    const currentLevel = +load(lang, 'level') || 0
    return {
      currentLevel,
      layout,
      map,
      levels,
    }
  },
  computed: {
    group() {
      const level = this.level
      if (level >= this.levels.length) {
        return []
      }
      return this.levels[level].characters
    },
    level() {
      return +this.$route.params.level
    },
  },
  methods: {
    startTest() {
      this.$router.push({
        name: 'Practice',
        params: { lang: this.$route.params.lang },
        query: {
          mode: 'test',
          level: this.level,
          options: this.levels[this.level].options,
        },
      })
    },
  },
}
</script>

<style lang="sass">
@import '../style'

.learn

  &-levels
    display: flex
    justify-content: space-between

    &-list
      display: flex
      flex-wrap: wrap

    &-item
      text-align: center
      min-width: 40px
      padding: 0.5rem
      background-color: $color-bg
      color: $color-text

      &.-active
        background-color: gray

      &.-current
        background-color: lightgreen

      &.-disabled
        color: lightgray
        cursor: default

  &-content
    margin-top: 2rem

  &-show
    margin: 1rem
    display: flex
    justify-content: center
    flex-wrap: wrap

  &-notification
    margin: 2rem 0

  &-next
    display: flex
    justify-content: center
</style>
