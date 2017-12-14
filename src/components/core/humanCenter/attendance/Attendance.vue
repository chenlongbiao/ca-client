<template>
  <div class="att_class">
    <div class="att_top">
      <el-button>
        录入考勤
      </el-button>
      <el-button>
        操作日志
      </el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="工号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="position"
        label="职位">
      </el-table-column>
      <el-table-column
        prop="thisMonth"
        label="本月考勤(天)">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看详细</el-button>
          <el-button type="text" size="small">修改</el-button>
          <el-button type="text" size="small">确认</el-button>
        </template>
      </el-table-column>
    </el-table>
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
        breadcrumbs: ['人力中心', '考勤管理']
      }
    }
  }
</script>
<style>
  .att_top {
    height: 50px;
    background: white;
  }
</style>
