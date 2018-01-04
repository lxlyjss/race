<template>
  <div id="loading" v-if="visible">
    <mt-spinner id="spinner" type="fading-circle" color="#d81e06"></mt-spinner>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: "myLoading",
    props:["visible"],
    data() {
      return {

      }
    }
  }
</script>
<style lang="stylus">
  #loading{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    background: #fff;
  }
  #spinner{
    width: 28px;
    height: 28px;
    position: absolute;
    top: 0;
    left: 0;
    margin: auto;
    right: 0;
    bottom: 0;
  }
</style>
