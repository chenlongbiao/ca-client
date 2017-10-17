<template>
  <div>
    考勤
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
        breadcrumbs: ['人力中心', '考勤管理']
      }
    }
  }
</script>
<style>
</style>
