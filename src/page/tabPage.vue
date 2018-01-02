<template>
  <div id="tabpage">
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <my-footer></my-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import myFooter from '@/components/footer'
  export default {
    components:{
      myFooter
    }
  }
</script>
<style lang="stylus">
  $red = #d81e06;
</style>
