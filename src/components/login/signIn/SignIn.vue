<template>
  <div class="signIn_class">
      <h4>
    </h4>
    <el-input id="inp1" class="signIn_input" placeholder="请输入手机号或邮箱" v-model="user.userName">
      <template  slot="prepend">
        <!--<span style="background: url('../../../assets/user.jpg');height:40px"></span>-->
        <img src="../../../assets/user.jpg"/>
      </template>
    </el-input>
    <el-input id="inp2" class="signIn_input" placeholder="请输入密码" v-model="user.passWord">
      <template  slot="prepend">
        <!--<span style="background: url('../../../assets/user.jpg');height:40px"></span>-->
        <img src="../../../assets/password.jpg"/>
      </template>
    </el-input>
    <button class="sign_sub1" @click="login">登   录</button>
    <div class="login_btt">
      <el-button type="text" @click="toSignUp">我要注册</el-button>
    </div>
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
      login () {
        this.$router.push('home')
      },
      toSignUp () {
        this.$emit('toSignUp', 0)
      }
    }
  }
</script>
<style>
  .signIn_class {
    height: 100%;
    text-align: center;
    overflow: hidden;
  }
  .signIn_class h4{
    background: url("../../../assets/title.jpg");
    height: 40px;
  }
  .signIn_input input{
    height: 40px;
  }
  .signIn_input{
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
  #inp1 {
    width: 263px;
  }
  #inp2 {
    width: 263px;
  }
  .signIn_input .el-input-group__prepend{
    padding: 0;
    border:none;
  }
  /*.signIn_class button {*/
    /*width: 60%;*/
    /*height: 34px;*/
    /*border: none;*/
    /*border-radius: 71px;*/
  /*}*/
  .sign_sub1 {
    width: 80%;
    height: 35px;
    /*border: 1px red solid;*/
    border-radius: 30px;
    /*line-height: 34px;*/
    margin-top: 120px;
    outline:none;
    background: #006cd4;
    letter-spacing: 15px;
    font-size: 18px;
    color: white;
  }
  .login_btt {
    width: 80%;
    margin: 30px auto;
    text-align: center;
  }
</style>
