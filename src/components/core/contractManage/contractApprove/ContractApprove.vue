<template>
  <div>
    审批
  </div>
</template>
<script>
  export default {
    components: {
    },
    data () {
      return {
        breadcrumbs: ['合同管理', '合同审批']
      }
    },
    beforeMount () {
      this.$emit('breadcrumbs', this.breadcrumbs)
    }

  }
</script>
<style>
</style>
