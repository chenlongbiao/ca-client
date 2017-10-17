<template>
  <div>
    培训
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
        breadcrumbs: ['人力中心', '培训管理']
      }
    }
  }
</script>
<style>
</style>
