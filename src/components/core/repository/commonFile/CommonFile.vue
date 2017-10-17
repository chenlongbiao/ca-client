<template>
  <div>
    <top :breadcrumbs=breadcrumbs></top>
    我的文件
  </div>
</template>
<script>
  import Top from '@/components/top/Top.vue'
  export default {
    components: {
      Top
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
