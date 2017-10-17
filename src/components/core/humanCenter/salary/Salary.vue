<template>
  <div>
    工资
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
        breadcrumbs: ['人力中心', '工资管理']
      }
    }
  }
</script>
<style>
</style>
