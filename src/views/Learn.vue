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
        <span v-if="levels[level].info">{{ levels[level].info }}</span>
      </div>
      <div v-else class="notification learn-notification">
        All done! You can revisit previous levels by using the arrows above.
      </div>

      <div v-if="level < levels.length">
        <!-- <p>Hovering over them will play their pronounciation.</p>
        <p>Once you think you can distinguish between them, take the test!</p> -->
      </div>

      <div class="learn-show">
        <div v-for="character in group" class="learn-show-item">
          <div class="learn-show-item-char">
            {{ character }}
          </div>
          {{ map[character] }}
          {{ mnemonics[character] }}
        </div>
      </div>
    </div>

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
</template>

<script>
import { characters } from '../data'
import { save, load } from '../util'

export default {
  name: 'Learn',
  data() {
    const { lang } = this.$route.params
    const { map, layout, info = {} } = characters[lang]
    const { levels = [], mnemonics = {} } = info
    const currentLevel = +load(lang, 'level') || 0
    console.log({ currentLevel })
    return {
      currentLevel,
      layout,
      map,
      levels,
      mnemonics,
    }
  },
  computed: {
    group() {
      const { level } = this.$route.params
      if (level >= this.levels.length) {
        return []
      }
      return this.levels[level].characters
    },
    level() {
      const { level } = this.$route.params
      return +level
    },
  },
  methods: {
    startTest() {
      // TODO options
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
          mode: 'test',
          opt: options.join(','),
          grp: groups.join(','),
        },
      })
    },
  },
}
</script>

<style lang="sass">
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
      background-color: white
      color: black

      &.-active
        background-color: gray

      &.-current
        background-color: lightgreen

      &.-disabled
        color: gray
        background-color: darkgray

  &-content
    margin-top: 2rem

  &-show
    margin: 1rem
    display: flex
    justify-content: center
    flex-wrap: wrap

    &-item
      padding: 0.2rem 0.4rem
      margin: 0.2rem
      border: 1px solid gray
      background-color: white

      &-char
        white-space: nowrap
        font-size: 4rem
        width: 120px

  &-notification
    margin: 2rem 0
</style>
