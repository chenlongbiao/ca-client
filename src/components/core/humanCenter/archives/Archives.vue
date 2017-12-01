<template>
  <div>
    <div class="archClass">
      <el-tabs v-model="activeName" class="ar_tab" @tab-click="handleClick">
        <el-tab-pane label="在职档案" name="job">
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
              prop="position"
              label="操作">
              <template scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看详细</el-button>
                <el-button type="text" size="small">归档</el-button>
                <el-button type="text" size="small">编辑</el-button>
                <el-button type="text" size="small">注销</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            class="ar_page"
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="归档档案" name="quit">
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
              prop="position"
              label="操作">
              <template scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看详细</el-button>
                <el-button type="text" size="small">注销</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            class="ar_page"
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="添加档案" name="add">添加</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
  export default {
    components: {
    },
    data () {
      return {
        tableData: [
          {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }, {
            id: '1',
            date: '2017/12/1',
            name: '王大虎',
            position: '测试'
          }
        ],
        activeName: 'job',
        breadcrumbs: ['人力中心', '人事档案']
      }
    },
    methods: {
      handleClick () {
        console.log(this.activeName)
      }
    },
    beforeMount () {
      this.$emit('breadcrumbs', this.breadcrumbs)
    }
  }
</script>
<style>
  .ar_tab .el-tabs__header {
    margin: 0;
  }
  .ar_tab .el-table__body-wrapper {
    height: 720px;
    overflow: hidden;
  }
  .ar_butt {
    float: right;
  }
  .ar_page {
    margin: 0 auto;
    width: 30%;
  }
</style>
