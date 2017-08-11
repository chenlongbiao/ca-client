<template>
  <div class="layout">
    <Row type="flex">
      <i-col span="4" class="layout-menu-left">
        <el-menu default-active="2" class="el-menu-vertical-demo" @select="handleSelect" theme="dark">
          <router-link to="/index">
            <el-menu-item index="1">
              <template slot="title"><Icon type="home"></Icon>首页</template>
            </el-menu-item>
          </router-link>
          <el-submenu index="2">
            <template slot="title"><Icon type="android-people" ></Icon>人力中心</template>
            <router-link to="/humancenter/Archives"><el-menu-item index="2-1"><Icon type="ios-book-outline"></Icon>人事档案</el-menu-item></router-link>
            <router-link to="/humancenter/Performance"><el-menu-item index="2-2"><Icon type="android-walk"></Icon>绩效考核</el-menu-item></router-link>
            <router-link to="/humancenter/InviteJob"><el-menu-item index="2-3"><Icon type="android-call"></Icon>招聘管理</el-menu-item></router-link>
            <router-link to="/humancenter/Attendance"><el-menu-item index="2-4"><Icon type="android-apps"></Icon>考勤管理</el-menu-item></router-link>
            <router-link to="/humancenter/Train"><el-menu-item index="2-5"><Icon type="ios-list-outline"></Icon>培训管理</el-menu-item></router-link>
            <router-link to="/humancenter/Salary"><el-menu-item index="2-6"><Icon type="social-yen"></Icon>工资管理</el-menu-item></router-link>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><Icon type="android-document"></Icon>合同管理</template>
            <router-link to="/contractManage/contractApprove"><el-menu-item index="3-1"><Icon type="ios-paper-outline"></Icon>合同审批</el-menu-item></router-link>
            <router-link to="/contractManage/contractFiling"><el-menu-item index="3-2"><Icon type="ios-briefcase-outline"></Icon>合同归档</el-menu-item></router-link>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><Icon type="ios-folder"></Icon>知识库</template>
            <router-link to="/repository/commonFile"><el-menu-item index="4-1"><Icon type="ios-list"></Icon>普通文件</el-menu-item></router-link>
            <router-link to="/repository/attachement"><el-menu-item index="4-2"><Icon type="ios-cloud-download-outline"></Icon>附件文件</el-menu-item></router-link>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><Icon type="person"></Icon>个人中心</template>
            <router-link to="/personalCenter/personalData"><el-menu-item index="5-1"><Icon type="ios-book"></Icon>个人资料</el-menu-item></router-link>
            <router-link to="/personalCenter/membership"><el-menu-item index="5-2"><Icon type="ios-calendar"></Icon>组织关系</el-menu-item></router-link>
            <router-link to="/personalCenter/dataModification"><el-menu-item index="5-3"><Icon type="wrench"></Icon>资料修改</el-menu-item></router-link>
          </el-submenu>
          <router-link to="/setting">
            <el-menu-item index="6">
              <template slot="title"><Icon type="ios-gear"></Icon>设置</template>
            </el-menu-item>
          </router-link>
        </el-menu>
      </i-col>
      <i-col span="20" class="home_right">
        <div class="layout-header">
          <Breadcrumb class="bread_left">
            <Breadcrumb-item href="/">首页</Breadcrumb-item>
            <Breadcrumb-item>应用中心</Breadcrumb-item>
            <Breadcrumb-item>某应用</Breadcrumb-item>
          </Breadcrumb>
          <div class="home_top">
            <img src="../../assets/logo1.png"/>
          </div>
        </div>
        <!--<div class="layout-breadcrumb">-->

        <!--</div>-->
        <div class="layout-content">
          <router-view></router-view>
        </div>
        <div class="layout-copy">
          2011-2016 &copy; TalkingData
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
  export default {
    methods: {
      handleSelect (index, indexPath) {
        console.log(index)
        console.log(indexPath)
      }
    }
  }
</script>
<style>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    min-height: 900px;
  }
  i {
    width: 14px;
    margin-right: 10px
  }
  .layout-content{
    min-height: 790px;
    margin: 25px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left{
    background: #324157;
    min-height: 900px;
  }
  .layout-header{
    text-align: left;
    line-height: 60px;
    height: 60px;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    display: flex;
    justify-content: space-between;
    -webkit-box-align: center;
  }
  .home_top {
    height: 60px;
  }
  .bread_left{
    /*float: left;*/
    /*width: 90%;*/
    margin-left: 20px;
  }
</style>
