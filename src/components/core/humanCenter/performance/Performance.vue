<template>
  <div class="perClass">
    <el-input
      placeholder="输入工号/姓名/学历检索"
      icon="search"
      class="per_search"
      v-model="input2"
      @click="arSearch('job')">
    </el-input>
    <el-pagination
      class="ar_page"
      layout="prev, pager, next"
      :total="50">
    </el-pagination>
    <el-button
      type="primary">考勤表模板下载</el-button>
    <el-button
      type="primary">考勤表解析上传</el-button>
    <el-button
      type="primary">绩效导出</el-button>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="工号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="position"
        label="职位"
        width="180">
      </el-table-column>
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
        tableData: [
          {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试',
            lastMonthKPI: '1.0',
            thisMonth: '22'
          }
        ],
        breadcrumbs: ['人力中心', '绩效管理']
      }
    }
  }
</script>
<style>
  .per_search {
    margin-top: 5px;
    width: 220px;
  }
</style>
