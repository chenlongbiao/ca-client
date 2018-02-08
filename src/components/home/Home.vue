<template>
  <div class="layout">
      <div  class="layout-menu-left">
        <el-menu :default-active=defaultActive :unique-opened=true  class="el-menu-vertical-demo" @select="handleSelect" router>
          <el-menu-item index="/home">
            <template slot="title">
              首页
            </template>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              人力中心
            </template>
            <el-menu-item index="/humancenter/Archives">
              人事档案
            </el-menu-item>
            <el-menu-item index="/humancenter/Performance">
              绩效考核
            </el-menu-item>
            <el-menu-item index="/humancenter/InviteJob">
              招聘管理
            </el-menu-item>
            <el-menu-item index="/humancenter/Attendance">
              考勤管理
            </el-menu-item>
            <el-menu-item index="/humancenter/train">
              培训管理
            </el-menu-item>
            <el-menu-item index="/humancenter/Salary">
              工资管理
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              合同管理
            </template>
            <el-menu-item index="/contractManage/contractApprove">
              合同审批
            </el-menu-item>
            <el-menu-item index="/contractManage/contractFiling">
              合同归档
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              知识库
            </template>
            <el-menu-item index="/repository/commonFile">
              我的文件
            </el-menu-item>
            <el-menu-item index="/repository/attachement">
              共享文件
            </el-menu-item>
          </el-submenu>
          <!--<el-submenu index="5">-->
            <!--<template slot="title">-->
              <!--个人中心-->
            <!--</template>-->
            <!--<el-menu-item index="/personalCenter/personalData">-->
              <!--个人资料-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="/personalCenter/membership">-->
              <!--组织关系-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="/personalCenter/dataModification">-->
              <!--资料修改-->
            <!--</el-menu-item>-->
          <!--</el-submenu>-->
          <el-menu-item index="/setting">
            <template slot="title">
              设置
            </template>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="home_right">
          <top :breadcrumbs=this.breadcrumbs @showLogs = showLogs></top>
          <router-view @breadcrumbs = breadcrumbsF></router-view>
      </div>
  </div>
</template>
<script>
  import Top from '../top/Top'
  export default {
    data () {
      return {
        breadcrumbs: '',
        showLog: false,
        showLog1: false
      }
    },
    methods: {
      showLogs (msg) {
        this.showLog = msg
        console.log(msg)
      },
      handleSelect (index, indexPath) {
//        console.log(index)
//        console.log(indexPath)
      },
      breadcrumbsF (msg) {
//        console.log(msg)
        this.breadcrumbs = msg
      }
    },
    computed: {
      defaultActive () {
        return this.$route.path
      }
    },
    components: {
      Top
    }
  }
</script>
<style>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    height: 100%;
    overflow: hidden;
    min-width: 1024px;
  }
  .el-menu-vertical-demo  .el-submenu .el-menu{
    background-color: #3e8db8;
    /*color: red;*/
  }
  .el-menu-vertical-demo  .el-menu-item{
    color: white;
  }
  .el-menu-vertical-demo  .el-submenu__title{
    color: white;
  }
  .el-menu-vertical-demo {
    background-color: #4796e5;
  }
  .layout-menu-left {
    background: #4796e5;
    min-height: 1000px;
    width: 250px;
    overflow: auto;
    color: red;
    float: left;
  }
  .home_right {
    min-width: 1090px;
    margin-left: 250px;
    /*float: left;*/
    height: 100%;
  }
</style>
