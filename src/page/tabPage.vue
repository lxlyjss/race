<template>
  <div id="tabpage">
    <router-view></router-view>
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
<style>

</style>
