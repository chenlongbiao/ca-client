<template>
  <div>
    组织关系
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
        breadcrumbs: ['个人中心', '组织关系']
      }
    }
  }
</script>
<style>
</style>
