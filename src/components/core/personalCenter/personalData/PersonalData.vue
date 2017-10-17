<template>
  <div>
    <top :breadcrumbs=breadcrumbs></top>
    个人资料
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
        breadcrumbs: ['个人中心', '个人资料']
      }
    }
  }
</script>
<style>
</style>
