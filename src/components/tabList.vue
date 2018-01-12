<template>
  <div class="nav-tab nav-tab-fixed">
    <p class="gray-b"></p>
    <ul class="nav-group dflex">
      <li class="nav-list tc active">
        <p>
          <i class="iconfont icon-icon1" v-if="signIndex>0"></i>
          <i class="iconfont icon-edit" v-if="signIndex<=0"></i>
        </p>
        填写资料
      </li>
      <li class="nav-list tc">
        <hr>
      </li>
      <li class="nav-list tc" :class="signIndex>0?'active':''">
        <p>
          <i class="iconfont icon-icon1" v-if="signIndex>1"></i>
          <i class="iconfont icon-icon-" v-if="signIndex<=1"></i>
        </p>
        确认订单
      </li>
      <li class="nav-list tc">
        <hr>
      </li>
      <li class="nav-list tc">
        <p>
          <i class="iconfont icon-icon1" v-if="signIndex>2"></i>
          <i class="iconfont icon-liebiao9" v-if="signIndex<=2"></i>
        </p>
        确认支付
      </li>
    </ul>
    <p class="gray-b"></p>
  </div>
</template>
<script type="text/ecmascript-6">
  import { mapState, mapMutations } from "vuex";
  export default {
    name:"tabList",
    props:["index"],
    methods:{
      ...mapMutations("lesson",["changeSignIndex"])
    },
    computed:{
      ...mapState("lesson",["signIndex"])
    },
    created() {
      if(this.index){
        this.changeSignIndex(2);
      }
    }
  }
</script>
<style lang="stylus">
  .nav-tab-fixed{
    position: fixed;
    top: 40px;
    z-index: 2;
  }
  .nav-tab{
    width: 100%;
    overflow: hidden;
    background: #fff;
    .gray-b{
      height: 10px;
      background: #f7f7f7;
    }
    .nav-group{
      padding: 10px 10px;
      .nav-list{
        flex: 1 1 auto;
        color: #9d98a0;
        font-size: 12px;
        p{
          line-height: 24px;
          i{
            font-size: 20px;
          }
        }
      }
      .active{
        color: #e51f22;
      }
    }
  }
</style>
