<template>
  <div>
    资料修改
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
        breadcrumbs: ['个人中心', '资料修改']
      }
    }
  }
</script>
<style>
</style>
