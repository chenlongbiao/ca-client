<template>
  <div>
    <top :breadcrumbs=breadcrumbs></top>
    资料修改
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
        breadcrumbs: ['个人中心', '资料修改']
      }
    }
  }
</script>
<style>
</style>
