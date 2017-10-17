<template>
  <div>
    <top :breadcrumbs=breadcrumbs></top>
    审批
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
        breadcrumbs: ['合同管理', '合同审批']
      }
    }
  }
</script>
<style>
</style>
