<template>
  <div id="findPw" class="bs">
    <div class="header">
      <mt-header title="找回密码" fixed>
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
      <transition name="slide-right">
        <div class="login-box" v-show="index==1">
          <p class="input-box">
            <input type="number" oninput="if(value.length>11)value=value.slice(0,11)" placeholder="输入手机号码" />
          </p>
          <p class="input-box clear">
            <input type="number" oninput="if(value.length>6)value=value.slice(0,6)" class="fl code-input" placeholder="输入验证码" />
            <span class="get-code fr">获取验证码</span>
          </p>
          <p class="login-btn red-btn" @click="index=2">
            <span>下一步</span>
          </p>
        </div>
      </transition>
      <transition name="slide-left">
        <div class="login-box" v-show="index==2">
          <p class="input-box">
            <input type="number" oninput="if(value.length>11)value=value.slice(0,11)" placeholder="输入密码" />
          </p>
          <p class="input-box">
            <input type="number" oninput="if(value.length>11)value=value.slice(0,11)" placeholder="再次输入密码" />
          </p>
          <p class="login-btn red-btn">
            <span>重置</span>
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        topImg:require("../../assets/images/login-img.jpg"),
        index: 1
      }
    }
  }
</script>
<style lang="stylus">
  .slide-left-enter-active, .slide-left-leave-active{
    transition: all 0.5s ease
  }
  .slide-left-enter, .slide-left-leave-active{
    opacity: 0
  }
  $red = #d81e06;
  #findPw{
    padding: 40px 0 50px;
    min-height: 100%;
    height: auto;
    background: #fff;
    .login-box{
      padding: 1rem 1.5rem;
    }
    .top-img{
      height: 6.7rem;
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
    p{
      line-height: 40px;
      text-align: center;
    }
    .input-box{
      border-bottom: 1px solid #ddd;
      margin-bottom: 24px;
      line-height: 28px;
      height: 30px;
    }
    .login-btn{
      margin-top: 20px;
      line-height: 44px;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
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
