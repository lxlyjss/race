<template>
  <div id="footer">
    <ul class="nav-bar">
      <li class="nav-item"  v-for="item in footer.tabList" @click="selectFn(item.limit)">
        <router-link :to="{path: item.path}">
          <div class="item-icon">
            <img :src="footer.nowTab===item.limit?item.imgUrl_a:item.imgUrl" alt="">
          </div>
          <p :class="footer.nowTab===item.limit?'active':''">
            {{item.name}}
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    data() {
      return {

      }
    },
    methods:{
      selectFn(i) {
        this.$store.commit("changeFooter",i);
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
          div{
            height: 20px;
            padding-top: 5px;
            img{
              width: 0.6rem;
              vertical-align: 20%;
            }
          }

          p{
            font-size: 14px;
            line-height: 24px;
          }
          .active{
            color: red;
          }
        }
      }
    }
  }

</style>
