<template>
  <div class="layout-header">
    <el-breadcrumb id="bread_left" separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }" v-if="this.breadcrumbs[1]">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in breadcrumbs" key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="home_top"  @mouseenter="showLogout" @mouseleave="showLogout">
      <img src="../../assets/logo1.png">
      <span @mouseenter="showLogOut"  @mouseleave="showLogOut2" class="logOut"  @click = logOut>
            <ul>
              <li>
                退出
              </li>
            </ul>
      </span>
    </div>
  </div>
</template>
<script>
  import img from '@/assets/logo1.png'
  export default {
    props: ['breadcrumbs'],
    data () {
      return {
        imgUrl: img,
        showLog: true
      }
    },
    methods: {
      logOut () {
        this.$router.push('/')
      },
      showLogOut () {
//        this.showLog1 = !this.showLog
        console.log(111)
      },
      showLogOut2 () {
        console.log(222)
//        this.showLog1 = !this.showLog1
      },
      showLogout () {
//        this.$emit('showLogs', this.showLog)
        this.showLog = !this.showLog
      }
    }
  }
</script>
<style>
  .layout-header{
    text-align: center;
    height: 60px;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    display: flex;
    justify-content: space-between;
    -webkit-box-align: center;
  }
  #bread_left{
    /*float: left;*/
    /*width: 90%;*/
    margin-left: 20px;
    line-height: 60px;
  }
  .logOut {
    float: right;
    height: 60px;
    width: 60px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    line-height: 60px;
  }
  .home_top {
    height: 60px;
    width: 120px;
    /*background: url("../../assets/logo1.png");*/
  }
</style>
