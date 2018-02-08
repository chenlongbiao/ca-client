<template>
  <div>
    <el-tabs v-model="activeName" class="ar_tab" @tab-click="handleClick">
      <el-tab-pane label="最近考核情况" name="lastCheck">
      </el-tab-pane>
      <el-tab-pane label="题库管理" name="questionManage">
      </el-tab-pane>
      <el-tab-pane label="试卷管理" name="tpManage">
      </el-tab-pane>
      <el-tab-pane label="答题" name="answer">
      </el-tab-pane>
      <el-tab-pane label="我的考核" name="answer">
      </el-tab-pane>
    </el-tabs>
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
        breadcrumbs: ['人力中心', '培训管理']
      }
    }
  }
</script>
<style>
</style>
