<template>
  <div class="inviteClass">
    <div class="presentClass">
      当前列表
    </div>
    <div class="myInvite">
      我的发布
    </div>
    <div>
      审核
    </div>
  </div>
</template>
<script>
  export default {
    components: {
    },
    beforeMount () {
      this.$emit('breadcrumbs', this.breadcrumbs)
    },
    data () {
      return {
        breadcrumbs: ['人力中心', '招聘管理']
      }
    }
  }
</script>
<style>
  .inviteClass {
    height: 100%;
  }
  .presentClass {
    height: 80%;
    width: 50%;
    background: #5e7382;
    display: inline-block;
  }
  .myInvite {
    height: 80%;
    width: 49%;
    background: #1c8de0;
    display: inline-block;
  }
</style>
