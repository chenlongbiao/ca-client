<template>
  <div class="signUp_class">
    <h4>
    </h4>
    <el-input class="signUp_input" placeholder="公司名" v-model="user.userName">
      <template  slot="prepend">
        <!--<span style="background: url('../../../assets/user.jpg');height:40px"></span>-->
        <img src="../../../assets/company.jpg"/>
        <!--<Icon type="ios-telephone-outline"></Icon>-->
      </template>
    </el-input>
    <el-input  class="signUp_input" placeholder="密码" v-model="user.passWord">
      <template  slot="prepend">
        <!--<span style="background: url('../../../assets/user.jpg');height:40px"></span>-->
        <img src="../../../assets/password.jpg"/>
      </template>
    </el-input>
    <el-input  class="signUp_input" placeholder="联系人手机号" v-model="user.passWord">
      <template  slot="prepend">
        <!--<span style="background: url('../../../assets/user.jpg');height:40px"></span>-->
        <img src="../../../assets/phone.jpg"/>
      </template>
    </el-input>
    <el-input  class="signUp_input" placeholder="企业邮箱" v-model="user.passWord">
      <template  slot="prepend">
        <!--<span style="background: url('../../../assets/user.jpg');height:40px"></span>-->
        <img src="../../../assets/email.jpg"/>
      </template>
    </el-input>
    <button class="sign_sub">登录</button>
    <!--<div class="login_btt">-->
      <!--<el-button type="text" @click="toSignUp">我要注册</el-button>-->
    <!--</div>-->
  </div>
</template>
<script>
  export default {
    data () {
      return {
        user: {
          userName: '',
          passWord: ''
        }
      }
    },
    methods: {
      toSignUp () {
        this.$emit('')
      }
    }
  }
</script>
<style>
  .signUp_class {
    height: 100%;
    text-align: center;
    overflow: hidden;
  }
  .signUp_class h4{
    background: url("../../../assets/title1.jpg");
    height: 40px;
  }
  .signUp_input input{
    height: 40px;
  }
  .signUp_input{
    width: 85%;
    margin-top: 20px;
    padding: 0;
  }
  .signUp_input .el-input-group__prepend{
    padding: 0;
    border:none;
  }
  .sign_sub {
    width: 80%;
    height: 35px;
    /*border: 1px red solid;*/
    border-radius: 30px;
    /*line-height: 34px;*/
    margin-top: 40px;
    outline:none;
    background: #006cd4;
    /*color: white;*/
  }
</style>
