<template>
  <div class="learn">
    <h1 class="learn-headline">Learn new characters</h1>

    <div class="learn-content">
      Take a look at these few characters:

      <div class="learn-show">
        <div v-for="character in group" class="learn-show-item">
          <div class="learn-show-item-char">
            {{ character }}
          </div>
          {{ map[character] }}
          {{ mnemonics[character] }}
        </div>
      </div>

      <div v-if="level < levels.length" class="learn-explanation">
        {{ levels[level].info }}
      </div>
      <div v-else class="notification learn-notification">
        All done! You can revisit previous levels by using the arrows above.
      </div>

      <p>and make up a story for each of them.</p>
      <p>Hovering over them will play their pronounciation.</p>
      <p>Once you think you can distinguish between them, take the test!</p>
      <p>
        If you feel tired or unable to learn, take a break or practice at your
        current level.
      </p>
    </div>

    <div v-if="level === currentLevel">
      <router-link :to="{ name: 'Home' }">
        <button type="button" class="button -primary">I'm not ready yet</button>
      </router-link>
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
    const { lang, level } = this.$route.params
    const { map, layout, info = {} } = characters[lang]
    const { levels = [], mnemonics = {} } = info
    const currentLevel = +load(lang, 'level') || 0
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
      return this.layout[level].filter((char) => char !== '')
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

  &-show
    margin: 1rem
    display: flex
    justify-content: center

    &-item
      padding: 0.2rem 0.4rem
      margin: 0.2rem
      border: 1px solid gray

      &-char
        font-size: 4rem
        width: 120px
</style>
