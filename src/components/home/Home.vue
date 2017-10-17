<template>
  <div class="layout">
    <Row type="flex" class="left">
      <i-col span="4" class="layout-menu-left">
        <el-menu :default-active=defaultActive class="el-menu-vertical-demo" @select="handleSelect" theme="dark" router>
          <el-menu-item index="/">
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
      </i-col>
      <i-col span="20" class="home_right">
        <div>
          <top :breadcrumbs=this.breadcrumbs></top>
          <router-view @breadcrumbs = breadcrumbsF></router-view>
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
  import Top from '../top/Top'
  export default {
    data () {
      return {
        breadcrumbs: ''
      }
    },
    methods: {
      handleSelect (index, indexPath) {
        console.log(index)
        console.log(indexPath)
      },
      breadcrumbsF (msg) {
        console.log(msg)
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
    min-height: 900px;
    overflow: hidden;
  }

  /*i {
    width: 14px;
    margin-right: 10px
  }*/

  .layout-content {
    min-height: 790px;
    margin: 25px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main {
    padding: 10px;
  }
  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left {
    background: #324157;
    min-height: 900px;
    overflow: auto;
  }
  .left {
    overflow: hidden;
  }

</style>
