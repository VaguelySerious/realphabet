<template>
  <p v-if="!text">
    We don't currently provide a mnemonic, sorry! You'll need to come up with
    your own.
  </p>
  <div class="mnemonic">Remember it like this: {{ text }}</div>
</template>

<script>
import { characters } from '../data'

export default {
  name: 'Mnemonic',
  props: {
    lang: String,
    character: String,
  },
  data() {
    const list = characters[lang].mnemonics || []
    const mnemonic = list[character]
    return { text: mnemonic }
  },
}
</script>

<style lang="sass">
.mnemonic
  color: darkblue
</style>
