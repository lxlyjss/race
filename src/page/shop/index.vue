<template>
  <div id="index">
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {

      }
    },
    methods:{
      change() {
        this.$store.commit("changeFooter",2)
      }
    },
    components:{
    },
    created() {
      this.change();
    }
  }
</script>
<style>

</style>
