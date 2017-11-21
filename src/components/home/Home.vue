<template>
  <div class="layout">
      <div  class="layout-menu-left">
        <el-menu :default-active=defaultActive class="el-menu-vertical-demo" @select="handleSelect" router>
          <el-menu-item index="/home">
            <template slot="title">
              <Icon type="home"></Icon>
              首页
            </template>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <Icon type="android-people"></Icon>
              人力中心
            </template>
            <el-menu-item index="/humancenter/Archives">
              <Icon type="ios-book-outline"></Icon>
              人事档案
            </el-menu-item>
            <el-menu-item index="/humancenter/Performance">
              <Icon type="android-walk"></Icon>
              绩效考核
            </el-menu-item>
            <el-menu-item index="/humancenter/InviteJob">
              <Icon type="android-call"></Icon>
              招聘管理
            </el-menu-item>
            <el-menu-item index="/humancenter/Attendance">
              <Icon type="android-apps"></Icon>
              考勤管理
            </el-menu-item>
            <el-menu-item index="/humancenter/train">
              <Icon type="ios-list-outline"></Icon>
              培训管理
            </el-menu-item>
            <el-menu-item index="/humancenter/Salary">
              <Icon type="social-yen"></Icon>
              工资管理
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <Icon type="android-document"></Icon>
              合同管理
            </template>
            <el-menu-item index="/contractManage/contractApprove">
              <Icon type="ios-paper-outline"></Icon>
              合同审批
            </el-menu-item>
            <el-menu-item index="/contractManage/contractFiling">
              <Icon type="ios-briefcase-outline"></Icon>
              合同归档
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <Icon type="ios-folder"></Icon>
              知识库
            </template>
            <el-menu-item index="/repository/commonFile">
              <Icon type="ios-list"></Icon>
              我的文件
            </el-menu-item>
            <el-menu-item index="/repository/attachement">
              <Icon type="ios-cloud-download-outline"></Icon>
              共享文件
            </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <Icon type="person"></Icon>
              个人中心
            </template>
            <el-menu-item index="/personalCenter/personalData">
              <Icon type="ios-book"></Icon>
              个人资料
            </el-menu-item>
            <el-menu-item index="/personalCenter/membership">
              <Icon type="ios-calendar"></Icon>
              组织关系
            </el-menu-item>
            <el-menu-item index="/personalCenter/dataModification">
              <Icon type="wrench"></Icon>
              资料修改
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="/setting">
            <template slot="title">
              <Icon type="ios-gear"></Icon>
              设置
            </template>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="home_right">
        <div>
          <top :breadcrumbs=this.breadcrumbs @showLogs = showLogs></top>
          <router-view @breadcrumbs = breadcrumbsF></router-view>
        </div>
      </div>
    <el-input></el-input>
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
    min-height: 920px;
    overflow: hidden;
    min-width: 1024px;
  }
  .el-menu-vertical-demo  .el-submenu .el-menu{
    background-color: #3e8db8;
    color: red;
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
  }
</style>
