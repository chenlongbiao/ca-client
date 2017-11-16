<template>
  <div class="signUp_class">
    <h4>
    </h4>
    <el-input id="inp3" class="signUp_input" placeholder="公司名" v-model="user.userName">
      <template  slot="prepend">
        <!--<span style="background: url('../../../assets/user.jpg');height:40px"></span>-->
        <img src="../../../assets/company.jpg"/>
        <!--<Icon type="ios-telephone-outline"></Icon>-->
      </template>
    </el-input>
    <el-input id="inp4" class="signUp_input" placeholder="密码" v-model="user.passWord">
      <template  slot="prepend">
        <!--<span style="background: url('../../../assets/user.jpg');height:40px"></span>-->
        <img src="../../../assets/password.jpg"/>
      </template>
    </el-input>
    <el-input id="inp5" class="signUp_input" placeholder="联系人手机号" v-model="user.passWord">
      <template  slot="prepend">
        <!--<span style="background: url('../../../assets/user.jpg');height:40px"></span>-->
        <img src="../../../assets/phone.jpg"/>
      </template>
    </el-input>
    <el-input id="inp6" class="signUp_input" placeholder="企业邮箱" v-model="user.passWord">
      <template  slot="prepend">
        <!--<span style="background: url('../../../assets/user.jpg');height:40px"></span>-->
        <img src="../../../assets/email.jpg"/>
      </template>
    </el-input>
    <button class="sign_sub" @click="toSignIn">注  册</button>
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
      toSignIn () {
        this.$emit('toSignIn', 1)
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
  .signUp_input .el-input-group{
    /*width: 85%;*/
    margin-top: 20px;
    padding: 0;
  }
  .signIn_input .el-input__inner{
    width: 223px;
  }
  /*.signIn_input, .el-input-group{*/
  /*width: 263px;*/
  /*}*/
  #inp3 {
    margin-top: 20px;
    width: 263px;
  }
  #inp4 {
    margin-top: 10px;
    width: 263px;
  }
  #inp5 {
    margin-top: 10px;
    width: 263px;
  }
  #inp6 {
    margin-top: 10px;
    width: 263px;
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
    letter-spacing: 15px;
    font-size: 18px;
    color: white;
  }
</style>
