<template>
  <div id="register" class="bs">
    <div class="header">
      <mt-header title="注册" fixed>
        <router-link to="/index/user" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="container">
      <div class="top-img" :style="{backgroundImage: `url(${topImg})`}">
        <div class="black"></div>
        <h1>骑二无比</h1>
        <h2>教你把自行车玩的更有品味</h2>
      </div>
      <div class="register-box">
        <p class="input-box">
          <input type="number" placeholder="输入手机号码" oninput="if(value>=11)value=value.slice(0,11)" v-model="regInfo.phone" @blur="checkPhone">
        </p>
        <p class="alert-info" v-show="alertInfo.pLength">*手机号码位数不足11位</p>
        <p class="alert-info" v-show="alertInfo.pKong">*请输入手机号码</p>
        <p class="input-box clear">
          <input type="number" class="fl code-input" oninput="if(value>=6)value=value.slice(0,6)" placeholder="输入验证码" v-model="regInfo.code" @blur="checkCode">
          <span class="get-code fr">获取验证码</span>
        </p>
        <p class="alert-info" v-show="alertInfo.codeError">*请输入6位数验证码</p>
        <p class="input-box">
          <input type="password" placeholder="请输入密码" v-model="regInfo.password">
        </p>
        <p class="input-box">
          <input type="password" placeholder="请再次输入密码" v-model="regInfo.password2">
        </p>
        <p class="login-btn red-btn">
          <span>注册</span>
        </p>
        <p class="clear">
          <span>已有账号?</span>
          <span class="toReg" @click="$router.push({path:'/user/login'})">立即登录</span>
        </p>
        <p class="other-title">
          <span>其他登录方式</span>
        </p>
        <p>
          <i class="iconfont icon-weixin1"></i>
        </p>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        topImg:require("../../assets/images/login-img.jpg"),
        regInfo:{
          phone: "",
          code: "",
          password: "",
          password2: ""
        },
        alertInfo:{
          pLength: false,
          pKong: false,
          pwKong: false,
          codeError: false
        }
      }
    },
    methods:{
      //验证手机号码是否符合规则
      checkPhone() {
        if(this.regInfo.phone.length < 11 && this.regInfo.phone.length > 0){
          this.alertInfo.pLength = true;
        }else{
          this.alertInfo.pLength = false;
        }
        if(this.regInfo.phone.length == 0){
          this.alertInfo.pKong = true;
        }else{
          this.alertInfo.pKong = false;
        }
      },
      //验证密码是否符合规则
      checkPw() {
        if(this.regInfo.password.length == 0){
          this.alertInfo.pwKong = true;
        }else{
          this.alertInfo.pwKong = false;
        }
      },
      //验证码是否符合规则
      checkCode() {
        if(this.regInfo.code.length != 6){
          this.alertInfo.codeError = true;
        }else{
          this.alertInfo.codeError = false;
        }
      }
    },
    watch:{
      "regInfo.phone"(n,o) {
        if(n.length == 11){
          this.alertInfo.pLength = false;
        }
      },
      "regInfo.password"(n,o) {
        if(n.length > 0){
          this.alertInfo.pwKong = false;
        }
      },
      "regInfo.code"(n,o) {
        if(n.length == 6){
          this.alertInfo.pwKong = false;
        }else{
          this.alertInfo.pwKong = true;
        }
      },
    }
  }
</script>
<style lang="stylus">
  $red = #d81e06;
  #register{
    padding: 40px 0 50px;
    background: #fff;
    .register-box{
      padding: 1rem 1.5rem;
    }
    .alert-info{
      line-height: 18px;
      font-size: 12px;
      color: red;
      text-align: left;
      height: 12px;
    }
    .top-img{
      height: 4rem;
      background-size: cover;
      position: relative;
      color: #fff;
      h1{
        font-size: 32px;
        z-index: 3;
        position: absolute;
        right: .7rem;
        bottom: 1.8rem;
      }
      h2{
        font-size: 18px;
        z-index: 3;
        position: absolute;
        right: .7rem;
        bottom: 1rem;
      }
    }
    .black{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0,0,0,.4);
      z-index: 1;
    }
    input{
      border: none;
      outline: none;
      width: 100%;
      color: #777;
    }
    p{
      line-height: 40px;
      text-align: center;
      height: 30px;
    }
    .input-box{
      border-bottom: 1px solid #ddd;
      margin-top: 12px;
      line-height: 28px;
    }
    .login-btn{
      margin-top: 20px;
      line-height: 44px;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      height: 42px;
    }
    .get-code{
      border: 1px solid $red;
      color: $red;
      font-size: 12px;
      padding: 0 5px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      line-height: 24px;
    }
    .code-input{
      width: 50%;
      margin-top: 7px;
    }
    .toReg{
      color: $red;
    }
    .toFind{
      color: $red;
    }
    .clear{
      font-size: 12px;
    }
    .other-title{
      font-size: 12px;
      color: #777;
    }
    .icon-weixin1{
      font-size: 24px;
      color: #555;
    }
  }
</style>
