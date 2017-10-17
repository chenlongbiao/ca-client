<template>
  <div class="indexClass">
    个人主页
  </div>
</template>
<script>
  export default {
    data () {
      return {
        breadcrumbs: ['首页']
      }
    },
    components: {
    },
    beforeMount () {
      this.$emit('breadcrumbs', this.breadcrumbs)
    }

  }
</script>
<style>
</style>
