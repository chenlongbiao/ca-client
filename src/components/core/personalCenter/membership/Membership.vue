<template>
  <div>
    <top :breadcrumbs=breadcrumbs></top>
    组织关系
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
        breadcrumbs: ['个人中心', '组织关系']
      }
    }
  }
</script>
<style>
</style>
