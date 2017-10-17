<template>
  <div>
    招聘
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
        breadcrumbs: ['人力中心', '招聘管理']
      }
    }
  }
</script>
<style>
</style>
