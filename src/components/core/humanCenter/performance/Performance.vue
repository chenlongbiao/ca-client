<template>
  <div>
    绩效
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
        breadcrumbs: ['人力中心', '绩效管理']
      }
    }
  }
</script>
<style>
</style>
