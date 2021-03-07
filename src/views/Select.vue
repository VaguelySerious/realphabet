<template>
  <div class="selector">
    <CharacterChart
      :lang="$route.params.lang"
      :selected="selectedRows"
      @selectRow="selectRow"
    />
    <div class="selector-option">
      <div v-for="option in options" class="selector-option-item">
        <label class="selector-option-label" :for="option.id">
          {{ option.text }}
          <span v-if="option.help">
            (<a :href="option.help" class="help-link">What is this?</a>)
          </span>
        </label>
        <input
          class="selector-option-input"
          type="checkbox"
          :id="option.id"
          :name="option.id"
          v-model="option.value"
        />
      </div>
    </div>
    <button
      :disabled="hasSelected"
      @click="done"
      type="button"
      class="button -primary"
    >
      Practice
    </button>
    <button @click="all" type="button" class="button -primary">
      Toggle all
    </button>
  </div>
</template>

<script>
import CharacterChart from '../components/CharacterChart.vue'
import { data } from '../data/index'
import { save, load } from '../util'

export default {
  components: { CharacterChart },
  name: 'Select',
  data() {
    const { lang } = this.$route.params
    const { map, layout, options = [] } = data[lang]
    return {
      selectedRows: load(lang, 'selectedRows') || { 0: true },
      layout,
      options,
      map,
    }
  },
  computed: {
    hasSelected() {
      return Object.values(this.selectedRows).every((r) => !r)
    },
  },
  methods: {
    selectRow(i) {
      this.selectedRows[i] = !this.selectedRows[i]
      save(this.$route.params.lang, 'selectedRows', this.selectedRows)
    },
    all() {
      if (
        this.options.every((opt) => opt.value) &&
        Object.keys(this.selectedRows).length === this.layout.length
      ) {
        this.options.forEach((opt) => (opt.value = false))
        this.selectedRows = {}
        return
      }
      this.options.forEach((opt) => (opt.value = true))
      for (let i = 0; i < this.layout.length; i++) {
        this.selectedRows[i] = true
      }
      save(this.$route.params.lang, 'selectedRows', this.selectedRows)
    },
    done() {
      const options = this.options
        .filter((o) => o.value)
        .map((o) => o.id)
        .join(',')
      const groups = Object.entries(this.selectedRows)
        .filter((r) => r[1])
        .map((r) => r[0])
        .join(',')
      this.$router.push({
        name: 'Practice',
        params: { lang: this.$route.params.lang },
        query: {
          mode: 'custom',
          grp: groups,
          ...(options.length ? { opt: options } : {}),
        },
      })
    },
  },
}
</script>

<style lang="sass">
.selector

  &-option
    margin-top: 2rem

    &-item
      padding: 0.25rem


    // &-input
</style>
