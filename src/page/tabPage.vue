<template>
  <div id="tabpage">
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <my-footer></my-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapState, mapMutations} from "vuex"
  import myFooter from '@/components/footer'
  export default {
    components:{
      myFooter
    },
    methods:{
      ...mapMutations(["changeIsPc","changeIsWechat"]),
      checkIsPc(state) {//判断是否是pc端
        let sUserAgent = navigator.userAgent.toLowerCase();
        let bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        let bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        let bIsMidp = sUserAgent.match(/midp/i) == "midp";
        let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        let bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        let bIsAndroid = sUserAgent.match(/android/i) == "android";
        let bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        let bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
          return true
        }
        return false
      },
      //判断是不是微信浏览器
      checkIsWechat(state) {
        let u = navigator.userAgent;
        if(!!u.match(/MicroMessenger/i)){
          return true;
        }else{
          return false;
        }
      }
    },
    computed:{
      ...mapState(["isPc","isWechat"])
    },
    mounted() {
      if(this.checkIsPc() === true) {
        console.log("pc")
        this.changeIsPc(true);
      }else{
        console.log("移动端")
        this.checkIsPc(false);
        if(this.checkIsWechat()) {
          console.log("微信浏览器")
          this.changeIsWechat(true);
        }else{
          console.log("不是微信浏览器")
          this.changeIsWechat(false);
        }
      }
    }
  }
</script>
<style lang="stylus">
  $red = #d81e06;
</style>
