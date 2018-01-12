<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        transitionName: "slide-right"
      }
    },
    methods: {
      setFontSize() {
        let WIDTH = document.body.clientWidth || document.documentElement.clientWidth;
        document.querySelector("html").style.fontSize = (WIDTH / 10) + "px";
        window.onresize = function (){
          let WIDTH = document.body.clientWidth || document.documentElement.clientWidth;
          document.querySelector("html").style.fontSize = (WIDTH / 10) + "px";
        };
      }
    },
    watch: {
      '$route'(to, from,next) {
        let isBack = this.$router.isBack;
        if (isBack) {
          this.transitionName = 'slide-right';
        } else {
          if (to.fullPath.indexOf('index') != -1) {
            this.transitionName = 'slide-right';
          } else {
            this.transitionName = 'slide-left';
          }
        }

        this.$router.isBack = false;
      }
    },
    mounted() {
      this.setFontSize();
    }
  }
</script>

<style>
  @import './assets/css/reset.css';
  @import '//at.alicdn.com/t/font_522676_fuafshq212ceg66r.css';
  .iconfont{
    font-size: 14px;
  }
  #app {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    font-size: 14px;
  }

  .clear::after {
    display: block;
    content: '';
    clear: both;
  }

  .fr {
    float: right;
  }

  .fl {
    float: left;
  }

  .tl {
    text-align: left;
  }

  .tc {
    text-align: center;
  }
  .tr{
    text-align: right;
  }

  .bs {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .fw {
    font-weight: 900;
  }

  .txt-dian {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .dflex {
    display: flex;
    display: -webkit-flex;
  }

  .gray-c {
    color: #9d98a0;
  }

  .btn-group {
    width: 100%;
    height: 50px;
    font-size: 14px;
    background: #fff;
    line-height: 50px;
    position: fixed;
    bottom: 0;
    text-align: center;
    border-top: 1px solid #e51f22;
  }

  .btn {
    float: left;
    width: 50%;
    color: #e51f22;
  }

  .red-btn {
    color: #fff;
    background: -webkit-gradient(linear, 0 0, right 0, from(#f32965), to(#f4582e));
  }

  /*动画*/
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }
  .child-view {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    min-height: 100%;
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  /*公用样式*/
  body {
    background: #f7f7f7;
  }

  .header {
    width: 100%;
    height: 40px;
    position: fixed;
    top: 0;
    z-index: 99;
    border-bottom: 1px solid #ddd;
  }

  .header .mint-header {
    background-color: #fff;
    color: #333;
  }

  select {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: #fff;
    outline: 0;
  }
  input,textarea{
    outline: none;
    border: none;
    resize: none;
  }
  .circle {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .mint-indicator-mask{
    z-index: 999;
  }
</style>
