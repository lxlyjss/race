<template>
  <div id="footer">
    <ul class="nav-bar">
      <li class="nav-item" @click="selectFn(0)">
        <router-link to="/index/lesson">
          <div class="item-icon">
            <img width="28" v-if="index!==0" :src="imgList.lesson.normal" alt="">
            <img width="28" v-if="index===0" :src="imgList.lesson.active" alt="">
          </div>
          <p class="text">
            课程
          </p>
        </router-link>
      </li>
      <li class="nav-item" @click="">
        <a href="javascript:;">
          <div class="item-icon">
            <img width="24" :src="imgList.event.normal" alt="">
          </div>
          <p class="text">
            活动
          </p>
        </a>
      </li>
      <li class="nav-item" @click="">
        <a href="javascript:;">
        <div class="item-icon">
          <img width="24" :src="imgList.shop.normal" alt="">
        </div>
        <p class="text">
          商城
        </p>
        </a>
      </li>
      <li class="nav-item" @click="selectFn(3)">
        <router-link to="/index/user">
          <div class="item-icon">
            <img width="22" v-if="index!==3" :src="imgList.user.normal" alt="">
            <img width="22" v-if="index===3" :src="imgList.user.active" alt="">
          </div>
          <p class="text">
            我的
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        index: 0,
        imgList:{
          event:{
            normal: require("@/assets/images/event_gray.png"),
            active: require("@/assets/images/event_red.png")
          },
          lesson:{
            normal: require("@/assets/images/lesson_black.png"),
            active: require("@/assets/images/lesson_red.png")
          },
          shop:{
            normal: require("@/assets/images/shop_gray.png"),
            active: require("@/assets/images/shop_red.png")
          },
          user:{
            normal: require("@/assets/images/user_black.png"),
            active: require("@/assets/images/user_red.png")
          }
        }
      }
    },
    methods:{
      selectFn(i) {
        this.index = i;
        console.log(this.index)
      }
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
            padding-top: 4px;
            padding-bottom: 4px;
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
