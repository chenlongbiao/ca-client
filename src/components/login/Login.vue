<template>
  <div class="login_class">
    <div class="login_mid">
      <sign-up v-if="signFlag === 0" @toSignIn = changeLogin></sign-up>
      <sign-in v-if="signFlag === 1" @toSignUp = changeLogin></sign-in>
    </div>
  </div>
</template>
<script>
  import SignUp from './signUp/SignUp'
  import SignIn from './signIn/SignIn'
  export default {
    data () {
      return {
        signFlag: 1
      }
    },
    components: {
      SignUp,
      SignIn
    },
    methods: {
      changeLogin (flag) {
        this.signFlag = flag
      }
    }
  }
</script>
<style>
  .login_class {
    height: 920px;
    min-width: 1280px;
    /*margin: 150px auto;*/
    background: url("../../assets/login.jpg") no-repeat;
    overflow: hidden;
  }
  .login_mid {
    height: 400px;
    width: 314px;
    background: #ffffff;
    border: 2px #e5e5e5 solid;
    float: right;
    margin-right: 127px;
    margin-top: 260px;
    /*opacity:0.9;*/
  }
</style>
