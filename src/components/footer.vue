<template>
  <div id="footer">
    <ul class="nav-bar">
      <li class="nav-item" v-for="(item,k) in footer.tabList" @click="selectFn(item.limit)">
        <router-link :to="{path: item.path}">
          <div class="item-icon">
            <i class="iconfont" :class="item.icon"></i>
          </div>
          <p class="text">
            {{item.name}}
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapState,mapMutations} from 'vuex'
  export default {
    methods:{
      ...mapMutations(["changeFooter"]),
      selectFn(i) {
        this.changeFooter(i);
      }
    },
    computed:{
      ...mapState(["footer"])
    }
  }
</script>
<style lang="stylus">
  #footer{
    width: 100%;
    max-width: 500px;
    position: fixed;
    bottom: 0;
    height: 50px;
    background: #fff;
    border-top: 1px solid #ddd;
    .nav-bar{
      width: 100%;
      height: 100%;
      display: flex;
      display: -webkit-flex;
      .nav-item{
        flex: 1 1 auto;
        a{
          display: block;
          width: 100%;
          height: 100%;
          text-align: center;
          .item-icon{
            height: 20px;
            padding-top: 5px;
            .iconfont{
              font-size: 24px;
            }
            .icon-ren{
              font-size: 20px;
            }
            .icon-icon{
              font-size: 23px;
            }
          }
          p{
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
      .router-link-active{
        .iconfont{
          color: #d81e06;
        }
        .text{
          color: #d81e06;
        }
      }
    }
  }

</style>
