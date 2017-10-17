<template>
  <div>
    <top :breadcrumbs=breadcrumbs></top>
    共享文件
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
        breadcrumbs: ['知识库', '附件文件']
      }
    }
  }
</script>
<style>
</style>
