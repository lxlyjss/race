<template>
  <div id="user">
    <div class="user-info">
      <div class="user-box">
        <div class="img-box">
          <div class="user-img" :style="{backgroundImage: 'url('+userImg+')'}">
          </div>
        </div>
        <div class="user-text">
          <p class="txt-dian">隔壁老王叔叔</p>
          <p @click="$router.push('/user/userInfo')"><u><img src="../../assets/images/edit.png" style="vertical-align: middle;" width="16">个人信息></u></p>
        </div>
      </div>
    </div>
    <section class="my-race">
      <p class="title">我的赛事</p>
      <ul class="group-content">
        <li class="group-list" @click="$router.push('/race/myRaceVote')">
          <div class="img-icon">
            <img src="../../assets/images/vote.png" width="26">
          </div>
          <p>订单</p>
        </li>
        <li class="group-list" @click="$router.push('/race/myCollectionRace')">
          <div class="img-icon">
            <img src="../../assets/images/collection.png" width="30">
          </div>
          <p>收藏</p>
        </li>
        <li class="group-list">
          <div class="img-icon">
            <img src="../../assets/images/event.png" width="30">
          </div>
          <p>我的赛事</p>
        </li>
        <li class="group-list">
          <div class="img-icon">
            <img src="../../assets/images/qiandao.png" width="30">
          </div>
          <p>签到</p>
        </li>
      </ul>
    </section>
    <section class="my-lesson">
      <p class="title">我的课程</p>
      <ul class="group-content">
        <li class="group-list">
          <div class="img-icon">
            <img src="../../assets/images/vote.png" width="30">
          </div>
          <p>订单</p>
        </li>
        <li class="group-list">
          <div class="img-icon">
            <img src="../../assets/images/collection.png" width="30">
          </div>
          <p>收藏</p>
        </li>
        <li class="group-list">
          <div class="img-icon">
            <img src="../../assets/images/lessons.png" width="30">
          </div>
          <p>我的课程</p>
        </li>
        <li class="group-list">
          <div class="img-icon">
            <img src="../../assets/images/qiandao.png" width="30">
          </div>
          <p>签到</p>
        </li>
      </ul>
    </section>
    <section class="my-shop">
      <p class="title">我的商品</p>
      <ul class="group-content">
        <li class="group-list">
          <div class="img-icon">
            <img src="../../assets/images/vote.png" width="30">
          </div>
          <p>订单</p>
        </li>
        <li class="group-list">
          <div class="img-icon">
            <img src="../../assets/images/collection.png" width="30">
          </div>
          <p>收藏</p>
        </li>
        <li class="group-list">
          <div class="img-icon">
            <img src="../../assets/images/event.png" width="30">
          </div>
          <p>我的赛事</p>
        </li>
        <li class="group-list">
          <div class="img-icon">
            <img src="../../assets/images/qiandao.png" width="30">
          </div>
          <p>签到</p>
        </li>
      </ul>
      <ul class="group-content">
        <li class="group-list">
          <div class="img-icon">
            <img src="../../assets/images/goods.png" width="30">
          </div>
          <p>代发货</p>
        </li>
        <li class="group-list">
          <div class="img-icon">
            <img src="../../assets/images/goods.png" width="30">
          </div>
          <p>待收货</p>
        </li>
        <li class="group-list">
          <div class="img-icon">
            <img src="../../assets/images/comment.png" width="30">
          </div>
          <p>待评价</p>
        </li>
        <li class="group-list">
          <div class="img-icon">
            <img src="../../assets/images/tool.png" width="30">
          </div>
          <p>退款/售后</p>
        </li>
      </ul>
    </section>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapState,mapActions} from 'vuex'
  export default {
    data() {
      return {
        userImg:require("../../assets/images/user.jpg")
      }
    },
    methods:{
      ...mapActions(['getUserInfo'])
    },
    computed:{
      ...mapState(['userInfo'])
    },
    created() {
      this.getUserInfo();
      $(window).scrollTop(0);
    }
  }
</script>
<style lang="stylus">
  #user{
    width: 100%;
    .user-info{
      position: relative;
      background: #43942f;
      padding: 30px 0;
      .user-box{
        width: 4.1rem;
        margin: 0 auto;
        display: flex;
        display: -webkit-flex;
        .img-box{
          margin-right: 10px;
          flex: 1 1 auto;
          .user-img{
            width: 1.2rem;
            height: 1.2rem;
            background-size: cover;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
          }
        }
        .user-text{
          width: 100%;
          flex: 2 1 auto;
          p{
            width: 3rem;
            color: #fff;
            line-height: .6rem;
            font-size: 12px;
          }
        }
      }
    }
    section{
      .title{
        font-size: 16px;
        color: #666;
        padding: 10px 10px 0;
      }
      width: 100%;
      background: #fff;
      .group-content{
        width: 100%;
        display: flex;
        display: -webkit-flex;
        padding: 10px 0;
        .group-list{
          cursor: pointer;
          flex: 1 1 0;
          border: 1px solid #ccc;
          border-left: none;
          padding: 10px 0;
          .img-icon{
            width: 0.6rem;
            height: auto;
            margin: 0 auto;
            img{
              width: 100%;
            }
          }
          p{
            text-align: center;
            line-height: 24px;
          }
        }
        .group-list:nth-of-type(4){
          border-right: none;
        }
      }
    }
  }
</style>
