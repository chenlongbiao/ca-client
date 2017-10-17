<template>
  <div>
    <top :breadcrumbs=breadcrumbs></top>
    归档
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
        breadcrumbs: ['合同管理', '合同归档']
      }
    }
  }
</script>
<style>
</style>
