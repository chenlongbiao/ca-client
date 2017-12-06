<template>
  <div class="inviteClass">
    <div class="presentClass">
      <el-table
        :data="tableData"
        style="width: 100%;height: 100%">
        <el-table-column
          prop="lastMonthKPI"
          label="上月绩效">
        </el-table-column>
        <el-table-column
          prop="thisMonth"
          label="本月考勤(天)">
        </el-table-column>
        <el-table-column
          prop="position"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看详细</el-button>
            <el-button type="text" size="small">设置绩效</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="myInvite">
      223
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
    overflow: auto;
    vertical-align:top;
  }
  .presentClass {
    height: 100%;
    width: 50%;
    background: #5e7382;
    display: inline-block;
    vertical-align:top;

  }
  .myInvite {
    height: 100%;
    width: 49%;
    background: #1c8de0;
    display: inline-block;
  }
</style>
