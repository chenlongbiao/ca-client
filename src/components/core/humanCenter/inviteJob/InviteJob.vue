<template>
  <div class="inviteClass">
    <div class="presentClass">
      <span class="topSpan">招聘列表</span>
      <el-table
        :data="tableData"
        style="width: 100%;height: 100%">
        <el-table-column
          prop="lastMonthKPI"
          label="提交日期">
        </el-table-column>
        <el-table-column
          prop="thisMonth"
          label="岗位">
        </el-table-column>
        <el-table-column
          prop="thisMonth"
          label="提交人">
        </el-table-column>
        <el-table-column
          prop="position"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看详细</el-button>
            <el-button type="text" size="small">通过</el-button>
            <el-button type="text" size="small">退回</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="myInvite">
      <span class="topSpan">我的招聘
        <el-button @click="dialogTableVisible = !dialogTableVisible" style="height: 70%; float: right; margin-top:10px ">新建招聘</el-button>
      </span>
      <el-table
        :data="tableData"
        style="width: 100%;height: 100%">
        <el-table-column
          prop="lastMonthKPI"
          label="提交日期">
        </el-table-column>
        <el-table-column
          prop="thisMonth"
          label="岗位">
        </el-table-column>
        <el-table-column
          prop="position"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看详细</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">关闭</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog class="ar_dialog" title="新建招聘申请" :visible.sync="dialogTableVisible">
        <div class="add_in">
          <span class="add_in_span"><label>岗位 :</label><el-input class="in_input"></el-input></span>
          <span class="add_in_span"><label>学历 :</label><el-input class="in_input"></el-input></span>
          <span class="add_in_span"><label>起始日期 :</label><el-input class="in_input"></el-input></span>
          <span class="add_in_span"><label>岗位描述 :</label><el-input type="textarea" :autosize="{minRows: 2,maxRows: 2}" class="in_input"></el-input></span>
          <span class="add_in_span"><label>其他要求 :</label><el-input class="in_input"></el-input></span>
          <span class="up_span"><el-button @click="addin" class="up_btt" type="primary">添加</el-button><el-button type="danger" class="clear_btt">清空</el-button></span>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  export default {
    components: {},
    beforeMount () {
      this.$emit('breadcrumbs', this.breadcrumbs)
    },
    data () {
      return {
        tableData: [],
        dialogTableVisible: false,
        breadcrumbs: ['人力中心', '招聘管理']
      }
    },
    methods: {
      addin () {
        console.log(111)
      }
    }
  }
</script>
<style>
  .ar_dialog .el-dialog {
    width: 680px;
    height: 620px;
  }
  .add_in {
    width: 60%;
    margin: 0 auto;
  }
  .add_in label {
    width: 80px;
    display: inline-block;
    text-align: right;
    margin: 20px;
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
  .in_input {
    width: 180px;
    margin-top: 20px;
  }
  .add_in_span {
    width: 90%;
    display: inline-block;
  }
  .topSpan {
    display: inline-block;
    height: 50px;
    width: 99.8%;
    line-height: 50px;
    border: #eef1f6 1px solid;
  }
  .inviteClass {
    height: 100%;
    overflow: auto;
  }
  .presentClass {
    height: 100%;
    width: 50%;
    display: inline-block;
    vertical-align:top;
  }
  .myInvite {
    height: 100%;
    width: 49.5%;
    display: inline-block;
  }
</style>
