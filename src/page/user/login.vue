<template>
  <div id="login" class="bs">
    <div class="header">
      <mt-header title="登录" fixed>
        <span @click="$router.goBack()" slot="left">
          <mt-button icon="back">返回</mt-button>
        </span>
        <mt-button class="iconfont icon-home1" @click="$router.push('/index/lesson')" slot="right"></mt-button>
      </mt-header>
    </div>
    <div class="container">
      <div class="top-img" :style="{backgroundImage: `url(${topImg})`}">
        <div class="black"></div>
        <h1>骑二无比</h1>
        <h2>教你把自行车玩的更有品味</h2>
      </div>
      <div class="login-box">
        <p class="input-box">
          <input type="text" v-model="loginInfo.phone" placeholder="输入手机号码" oninput="if(value>=11)value=value.slice(0,11)" @blur="checkPhone()">
        </p>
        <p class="alert-info" v-show="alertInfo.pLength">*手机号码位数不足11位</p>
        <p class="alert-info" v-show="alertInfo.pKong">*请输入手机号码</p>
        <p class="input-box">
          <input type="password" v-model="loginInfo.password" @blur="checkPw()" placeholder="输入密码">
        </p>
        <p class="alert-info" v-model="loginInfo.password" v-show="alertInfo.pwKong">*密码不能为空</p>
        <p class="login-btn red-btn" @click="login">
          <span>登录</span>
        </p>
        <p class="clear">
          <span class="fl">没有账号?</span>
          <span class="fl toReg" @click="$router.push({path:'/user/register'})">立即注册</span>
          <span class="fr toFind" @click="$router.push('/user/findPw')">忘记密码</span>
        </p>
        <p class="other-title">
          其他登录方式
        </p>
        <p>
          <i class="iconfont icon-weixin1"></i>
        </p>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { mapState,mapMutations,mapActions } from "vuex";
  import {Toast,Indicator} from "mint-ui"
  import {setCache} from "../../config/cache"
  export default {
    data() {
      return {
        topImg:require("../../assets/images/login-img.jpg"),
        loginInfo:{
          phone: "",
          password: ""
        },
        alertInfo:{
          pLength: false,
          pKong: false,
          pwKong: false
        }
      }
    },
    methods:{
      ...mapMutations(["changeLogined"]),
      ...mapActions("user",["userLogin"]),
      //验证手机号码是否符合规则
      checkPhone() {
        if(this.loginInfo.phone.length < 11 && this.loginInfo.phone.length > 0){
          this.alertInfo.pLength = true;
        }else{
          this.alertInfo.pLength = false;
        }
        if(this.loginInfo.phone.length == 0){
          this.alertInfo.pKong = true;
        }else{
          this.alertInfo.pKong = false;
        }
      },
      //验证密码是否符合规则
      checkPw() {
        if(this.loginInfo.password.length == 0){
          this.alertInfo.pwKong = true;
        }else{
          this.alertInfo.pwKong = false;
        }
      },
      isCheck() {
        //判断所有条件是否符合

      },
      login() {
        if(this.loginInfo.phone == "") {
          Toast("请输入用户名!");
          return;
        }
        if(this.loginInfo.password == "") {
          Toast("请输入密码!");
          return;
        }
        Indicator.open({
          spinnerType: 'fading-circle',
          text:"登录中..."
        });
        this.userLogin(this.loginInfo).then(res=>{
          console.log(res);
          Indicator.close();
          if(res.status == 0) {
            setCache("access_token", res.data.token);
            setCache("sessionId", res.data.sessionId);
            setCache("user", JSON.stringify(res.data.user));
            if("nowUrl" in this.$route.query) {
              this.isBack = true;
              this.$router.push(decodeURIComponent(this.$route.query.nowUrl));
            }else{
              this.$router.push("/index/lesson");
            }
          }else{
            Toast({
              message: res.msg,
              duration: 1000
            });
          }
        }).catch(res=>{
          Indicator.close();
          Toast("网络出错")
        });
      }
    },
    watch:{
      "loginInfo.phone"(n,o) {
        if(n.length == 11){
          this.alertInfo.pLength = false;
        }
        if(n.length != 0){
          this.alertInfo.pKong = false;
        }
      },
      "loginInfo.password"(n,o) {
        if(n.length > 0){
          this.alertInfo.pwKong = false;
        }
      }
    },
    created() {
    }
  }
</script>
<style lang="stylus">
  $red = #d81e06;
  #login{
    padding: 40px 0 0px;
    min-height: 100%;
    height: auto;
    background: #fff;
    .login-box{
      padding: 1rem 1.5rem 0;
      .input-box{
        line-height: 28px;
        margin-top: 20px;
      }
    }
    .alert-info{
      line-height: 12px;
      font-size: 12px;
      color: red;
      text-align: left;
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
    p{
      line-height: 40px;
      text-align: center;
    }
    .input-box{
      border-bottom: 1px solid #ddd;
      margin-bottom: 12px;
      line-height: 28px;
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
