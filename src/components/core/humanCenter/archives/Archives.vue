<template>
  <div>
    <div class="archClass">
      人事档案
    </div>
  </div>
</template>
<script>
  export default {
    components: {
    },
    data () {
      return {
        breadcrumbs: ['人力中心', '人事档案']
      }
    },
    beforeMount () {
      this.$emit('breadcrumbs', this.breadcrumbs)
    }
  }
</script>
<style>
</style>
