<template>
  <div>
    我的文件
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
        breadcrumbs: ['知识库', '普通文件']
      }
    }
  }
</script>
<style>
</style>
