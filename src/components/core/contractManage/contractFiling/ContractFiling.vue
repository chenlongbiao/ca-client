<template>
  <div>
    归档
  </div>
</template>
<script>
  export default {
    components: {
    },
    data () {
      return {
        breadcrumbs: ['合同管理', '合同归档']
      }
    },
    beforeMount () {
      this.$emit('breadcrumbs', this.breadcrumbs)
    }
  }
</script>
<style>
</style>
