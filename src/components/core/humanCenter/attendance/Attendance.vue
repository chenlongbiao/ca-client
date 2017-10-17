<template>
  <div>
    <top :breadcrumbs=breadcrumbs></top>
    考勤
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
        breadcrumbs: ['人力中心', '考勤管理']
      }
    }
  }
</script>
<style>
</style>
