<template>
  <div>
    <top :breadcrumbs=breadcrumbs></top>
    绩效
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
        breadcrumbs: ['人力中心', '绩效管理']
      }
    }
  }
</script>
<style>
</style>
