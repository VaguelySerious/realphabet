<template>
  <div class="action" :class="styling">
    <span class="icon is-large">
      <i class="fas fa-lg fa-volume-up" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Action',
  props: {
    type: String,
  },
  computed: {
    styling() {
      const type = ['warning', 'error'].includes(this.type) ? this.type : 'info'
      return [`is-${type}`]
    },
  },
}
</script>

<style lang="sass">
.action
  border-radius: 5px
  cursor: pointer
  display: flex
  justify-content: center
  align-items: center
  padding: 0.5rem
  margin: 1rem
  width: 40px
  height: 40px
</style>
