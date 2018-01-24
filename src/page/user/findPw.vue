<template>
  <div id="findPw" class="bs">
    <div class="header">
      <mt-header title="找回密码" fixed>
        <router-link to="/index/user" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button class="iconfont icon-home1" @click="$router.push('/index/lesson')" slot="right"></mt-button>
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
            <input type="number" oninput="if(value.length>11)value=value.slice(0,11)" placeholder="输入手机号码" v-model="findInfo.phone" @blur="checkPhone" />
          </p>
          <p class="alert-info" v-show="alertInfo.pLength">*手机号码位数不足11位</p>
          <p class="alert-info" v-show="alertInfo.pKong">*请输入手机号码</p>
          <p class="alert-info" v-show="alertInfo.pHasReg">*该手机号码尚未注册过</p>
          <p class="input-box clear">
            <input type="number" oninput="if(value.length>6)value=value.slice(0,6)" class="fl code-input" v-model="findInfo.code" @blur="checkCode" placeholder="输入验证码" />
            <span class="get-code fr" @click="getCode" v-show="codeInfo.unclick">{{codeInfo.codeText}}</span>
            <span class="get-code fr get-code-gray" v-show="!codeInfo.unclick">{{codeInfo.codeTime}} s</span>
          </p>
          <p class="alert-info" v-show="alertInfo.codeError">*请输入6位数验证码</p>
          <p class="login-btn red-btn" @click="nextTo">
            <span>下一步</span>
          </p>
        </div>
      </transition>
      <transition name="slide-left">
        <div class="login-box" v-show="index==2">
          <p class="input-box">
            <input type="password" oninput="if(value.length>11)value=value.slice(0,11)" placeholder="输入密码" v-model="findInfo.password" @blur="checkPw" />
          </p>
          <p class="alert-info" v-show="alertInfo.pwKong">*请输入密码</p>
          <p class="alert-info" v-show="alertInfo.pwLength">*密码长度必须大于6位</p>
          <p class="input-box">
            <input type="password" oninput="if(value.length>11)value=value.slice(0,11)" placeholder="再次输入密码" v-model="findInfo.password2" @blur="checkPw2" />
          </p>
          <p class="alert-info" v-show="alertInfo.pwKong2">*请再次输入密码</p>
          <p class="alert-info" v-show="alertInfo.pwError">*两次密码输入不一致</p>
          <p class="login-btn red-btn" @click="findFun">
            <span>重置</span>
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapActions} from "vuex";
  import {Toast,Indicator} from "mint-ui"
  export default {
    data() {
      return {
        topImg:require("../../assets/images/login-img.jpg"),
        index: 1,
        findInfo:{
          phone:"",
          code:"",
          password:"",
          password2:""
        },
        codeInfo:{
          codeText: "获取验证码",
          codeTime: 60,//60秒的时间
          unclick: true//是否能点击获取验证码,true为可以点击
        },
        alertInfo:{
          pLength: false,//手机号长度错误
          pHasReg: false,//判断手机有没有注册过
          pKong: false,//手机号是否为空
          codeError: false,//验证码位数错误
          pwKong: false,//密码1是否为空
          pwKong2: false,//密码2是否为空
          pwLength: false,//密码长度不能小于6位数
          pwError: false//两次密码是否一致
        }
      }
    },
    methods:{
      ...mapActions("user",["findPwAjax","getCodeAjax","checkPhoneHasReg"]),
      checkPhone() {
        if(this.findInfo.phone.length < 11 && this.findInfo.phone.length > 0){
          this.alertInfo.pLength = true;
        }else{
          this.alertInfo.pLength = false;
        }
        if(this.findInfo.phone.length == 0){
          this.alertInfo.pKong = true;
        }else{
          this.alertInfo.pKong = false;
        }
        if(this.findInfo.phone.length === 11) {
          this.checkPhoneHasReg({
            "phone": this.findInfo.phone
          }).then(res=>{
            console.log(res);
            if(res.status == 0) {
              //判断手机号码有没有被注册过,0是有,1是没有
              if(res.data.hasUser == 0) {
                this.alertInfo.pHas = false;
              }else{
                this.alertInfo.pHas = true;
              }
            }
          }).catch(res=>{
            console.log(res);
            Toast("网络出错")
          });
        }
      },
      //验证码是否符合规则
      checkCode() {
        if(this.findInfo.code.length != 6){
          this.alertInfo.codeError = true;
        }else{
          this.alertInfo.codeError = false;
        }
      },
      //验证密码是否符合规则
      checkPw() {
        if(this.findInfo.password.length == 0){
          this.alertInfo.pwKong = true;
        }else{
          this.alertInfo.pwKong = false;
        }
        if(this.findInfo.password.length < 6 && this.findInfo.password.length > 0){
          this.alertInfo.pwLength = true;
        }else{
          this.alertInfo.pwLength = false;
        }
      },
      checkPw2() {
        if(this.findInfo.password2.length == 0){
          this.alertInfo.pwKong2 = true;
        }else{
          this.alertInfo.pwKong2 = false;
        }
      },
      //验证两次密码是否相同
      checkPwSame(){
        if(this.findInfo.password2){
          if(this.findInfo.password === this.findInfo.password2) {
            this.alertInfo.pwError = false;
          }else{
            this.alertInfo.pwError = true;
          }
        }
      },
      //发送手机验证码函数
      getCode() {
        if(this.findInfo.phone == "") {
          Toast({
            message: "请输入手机号码",
            duration: 1000
          });
          return;
        }
        Indicator.open({
          spinnerType: 'fading-circle',
          text:"发送中..."
        });
        this.getCodeAjax({
          "phone":this.findInfo.phone,
          "type": 1
        }).then(res=>{
          console.log(res);
          Indicator.close()
          if(res.status == 0) {
            this.seconds();
            this.codeInfo.unclick = false;
            Toast({
              message: "验证码已成功发送至您手机",
              duration: 1000
            });
          }else{
            Toast({
              message: res.msg,
              duration: 1000
            })
          }
        }).catch(res=>{
          console.log(res);
          Indicator.close();
          Toast("网络出错")
        });
      },
      //60秒倒计时函数
      seconds() {
        let _this = this;
        (function down() {
          let _that = _this;
          setTimeout(function () {
            _that.codeInfo.codeTime--;
            if(_that.codeInfo.codeTime<0){
              _that.codeInfo.unclick = true;
              _that.codeInfo.codeTime = 60;
              return;
            }else{
              down();
            }
          },1000);
        })();
      },
      nextTo() {
        this.checkPhone();
        this.checkCode();
        if(this.findInfo.phone.length === 11 && this.findInfo.code) {
          this.index = 2;
        }
      },
      //检查所有数据是否符合规则
      checkAll() {
        this.checkPhone();
        this.checkCode();
        this.checkPw();
        this.checkPw2();
        this.checkPwSame();//检查是否两次密码一致
        for(let item in this.alertInfo){
          if(this.alertInfo[item]){
            console.log(item);
            return false;
          }
        }
        return true;
      },
      //点击注册按钮
      findFun() {
        console.log(this.alertInfo);
        if(this.checkAll()){//检查所有数据都通过
          Indicator.open({
            spinnerType: 'fading-circle',
            text:"重置中..."
          });
          this.findPwAjax(this.findInfo).then(res=>{
            Indicator.close();
            if(res.status == 0) {
              Toast({
                message: "恭喜您,重置成功!2s后跳转至登录页面",
                duration: 1000
              });
              setTimeout(()=>{
                this.$router.push("/user/login");
              },2000);
            }else{
              Toast({
                message: res.msg,
                duration: 1000
              })
            }
          }).catch(res=>{
            console.log(res)
            Indicator.close();
            Toast("网络出错")
          });
        }else{
          Toast("信息填写有误");
        }
      }
    },
    watch:{
      "findInfo.phone"(n,o) {
        if(n.length == 11){
          this.alertInfo.pLength = false;
        }
        if(n.length > 0){
          this.alertInfo.pKong = false;
        }
      },
      "findInfo.password"(n,o) {
        if(n.length > 0){
          this.alertInfo.pwKong = false;
        }
      },
      "findInfo.password2"(n,o) {
        if(n.length > 0){
          this.alertInfo.pwKong2 = false;
        }
        if(n!=o){
          this.alertInfo.pwError = false;
        }
      },
      "findInfo.code"(n,o) {
        if(n.length == 6){
          this.alertInfo.codeError = false;
        }
      },
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
    .alert-info{
      line-height: 18px;
      font-size: 12px;
      color: red;
      text-align: left;
      height: 12px;
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
      width: 60px;
      border: 1px solid $red;
      color: $red;
      font-size: 12px;
      padding: 0 5px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      line-height: 24px;
    }
    .get-code-gray{
      border: 1px solid gray;
      color: gray;
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
      margin-top: 24px;
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
