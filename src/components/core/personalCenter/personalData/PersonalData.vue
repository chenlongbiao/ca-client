<template>
  <div>
    个人资料
  </div>
</template>
<script>
  export default {
    components: {
    },
    beforeMount () {
      this.$emit('breadcrumbs', this.breadcrumbs)
    },
    data () {
      return {
        breadcrumbs: ['个人中心', '个人资料']
      }
    }
  }
</script>
<style>
</style>
