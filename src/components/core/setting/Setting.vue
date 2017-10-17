<template>
  <div>
    设置
  </div>
</template>
<script>
  export default {
    components: {
    },
    data () {
      return {
        breadcrumbs: ['设置']
      }
    },
    beforeMount () {
      this.$emit('breadcrumbs', this.breadcrumbs)
    }
  }
</script>
<style>
</style>
