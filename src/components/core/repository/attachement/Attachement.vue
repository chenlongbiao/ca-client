<template>
  <div>
    共享文件
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
        breadcrumbs: ['知识库', '附件文件']
      }
    }
  }
</script>
<style>
</style>
