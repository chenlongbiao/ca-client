<template>
    <div class="archClass">
      <el-tabs v-model="activeName" class="ar_tab" @tab-click="handleClick">
        <el-tab-pane label="在职档案" name="job">
          <el-input
            placeholder="输入工号/姓名/学历检索"
            icon="search"
            class="ar_search"
            v-model="input2"
            @click="arSearch('job')">
          </el-input>
          <el-pagination
            class="ar_page"
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
          <el-button class="add_btt" type="info" @click="dialogTableVisible = !dialogTableVisible">添加档案</el-button>
          <el-dialog class="ar_dialog" title="添加档案" :visible.sync="dialogTableVisible">
            <div class="add_ar">
              <span class="add_ar_span"><label>姓名 :</label><el-input class="ar_input"></el-input></span>
              <span class="add_ar_span"><label>职位 :</label><el-input class="ar_input"></el-input></span>
              <span class="add_ar_span"><label>学历 :</label><el-input class="ar_input"></el-input></span>
              <span class="add_ar_span"><label>入职日期 :</label><el-input class="ar_input"></el-input></span>
              <span class="add_ar_span"><label>个人简历 :</label><input class="ar_input" type="file"/></span>
              <span class="add_ar_span"><label>职位描述 :</label><el-input type="textarea" :autosize="{minRows: 2,maxRows: 2}" class="ar_input"></el-input></span>
              <span class="up_span"><el-button @click="addAr" class="up_btt" type="primary">添加</el-button><el-button type="danger" class="clear_btt">清空</el-button></span>
            </div>
          </el-dialog>
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
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看详细</el-button>
                <el-button type="text" size="small">归档</el-button>
                <el-button type="text" size="small">编辑</el-button>
                <el-button type="text" size="small">注销</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="归档档案" name="quit">
          <el-pagination
            class="ar_page"
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
          <el-input
            placeholder="输入工号/姓名/学历检索"
            icon="search"
            class="ar_search"
            v-model="input2"
            @click="arSearch('quit')">
          </el-input>
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
              <template slot-scope="scope">
                <el-button @click="handleClick()" type="text" size="small">查看详细</el-button>
                <el-button type="text" size="small">注销</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>
<script>
  export default {
    components: {},
    data () {
      return {
        dialogTableVisible: false,
        input2: '',
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
      addAr () {
        console.log(111)
        this.dialogTableVisible = false
      },
      arSearch (data) {
        console.log(data)
      },
      handleClick (scop) {
        console.log(scop)
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
  .ar_dialog .el-dialog {
    width: 680px;
    height: 620px;
  }
  .ar_tab .el-table__body-wrapper {
    height: 720px;
    overflow: hidden;
  }
  .ar_page {
    margin-top: 8px;
    float: right;
  }

  .ar_search {
    margin-top: 5px;
    width: 220px;
  }

  .add_ar {
    width: 60%;
    margin: 0 auto;
  }

  .add_ar label {
    width: 80px;
    display: inline-block;
    text-align: right;
    margin: 20px;
  }

  .add_ar_span {
    width: 90%;
    display: inline-block;
  }
  .up_span {
    width: 80%;
    display: inline-block;
    margin: 50px auto;
  }
  .up_btt {
    float: left;
    margin-left: 80px;
    margin-right: 45px;
  }
  .clear_btt {
    float: left;
  }
  .ar_input {
    width: 180px;
    /*margin-left: 20px;*/
    margin-top: 20px;
  }
</style>
