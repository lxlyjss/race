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
      transitionName:"slide-right"
    }
  },
  methods:{
    setFontSize() {
      $("html").css("fontSize",$(window).width()/10);
      $(window).resize(function (){
        $("html").css("fontSize",$(window).width()/10);
      })
    }
  },
  watch:{
    '$route' (to, from) {
      let isBack = this.$router.isBack;
      if(isBack){
        this.transitionName = 'slide-right';
      }else{
        this.transitionName = 'slide-left';
      }
      this.$router.isBack = false;
    }
  },
  created() {
    this.setFontSize();
  }
}
</script>

<style>
  @import './assets/css/reset.css';
  #app{
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    font-size: 14px;
  }
  .clear::after{
    display: block;
    content: '';
    clear: both;
  }
  .fr{
    float: right;
  }
  .fl{
    float: left;
  }
  .tl{
    text-align: left;
  }
  .tc{
    text-align: center;
  }
  .bs{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .fw{
    font-weight: 900;
  }
  .txt-dian{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .child-view {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
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
  body{
    background: #f0f0f0;
  }
</style>
