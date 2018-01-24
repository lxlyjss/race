<template>
  <div id="user">
    <div class="user-info" :style="{backgroundImage:`url(${userImg})`}">
      <div class="black"></div>
      <div class="user-box" >
        <div class="user-text">
          <p class="txt-dian">{{userInfo.nickname}}</p>
          <div class="user-img" @click="$router.push('/user/userInfo')" :style="{backgroundImage: 'url('+userInfo.userImage+')'}">
            <i class="iconfont icon-edit"></i>
          </div>
        </div>
      </div>
    </div>
    <p class="title">
      <i class="iconfont icon-lesson1"></i>
      <span>我的课程</span>
      <i class="iconfont icon-arrow fr"></i>
    </p>
    <section class="my-lesson">
      <ul class="group-content">
        <li class="group-list" @click="$router.push({path:'/lesson/myLesson',query:{userId: userInfo.id}})">
          <div class="img-icon">
            <i class="iconfont icon-riqi"></i>
          </div>
          <p>我的课程</p>
        </li>
        <li class="group-list" @click="$router.push({path:'/lesson/myVotes',query:{userId: userInfo.id}})">
          <div class="img-icon">
            <i class="iconfont icon-liebiao9"></i>
          </div>
          <p>我的订单</p>
        </li>
        <li class="group-list" @click="$router.push({path:'/user/myBaby',query:{userId: userInfo.id}})">
          <div class="img-icon">
            <i class="iconfont icon-baobaoyi"></i>
          </div>
          <p>我的宝宝</p>
        </li>
        <li class="group-list">
          <div class="img-icon">
            <i class="iconfont icon-quan_3"></i>
          </div>
          <p>我的优惠券</p>
        </li>
      </ul>
    </section>
    <p class="title" style="color: #ccc;">
      <i class="iconfont icon-yinliang"></i>
      <span>我的赛事</span>
      <i class="iconfont icon-arrow fr"></i>
    </p>
    <section class="my-race"></section>
    <p class="title" style="color: #ccc;">
      <i class="iconfont icon-gouwu"></i>
      <span>我的商品</span>
      <i class="iconfont icon-arrow fr"></i>
    </p>
    <section class="my-shop"></section>
  </div>
</template>
<script type="text/ecmascript-6">
  import {Toast} from "mint-ui"
  import {mapState,mapActions,mapMutations} from 'vuex'
  import {getCache,setCache} from "../../config/cache"
  import axios from "axios";
  export default {
    data() {
      return {
        userImg:require("../../assets/images/userImg.jpg"),
      }
    },
    methods:{
      ...mapActions("user",['getUserInfo']),
      ...mapMutations("user",["setUserInfo"]),
      text() {
        axios.get("ucenter/manage/coupon/coupons",{
          params:{
            courseId:1,
            userId:1,
            branchId:1
          }
        }).then(res=>{
          console.log(res.data);
        }).catch(res=>{
          console.log("失败"+res)
        })
      },
      //获取用户数据
      getUserData() {
        this.getUserInfo().then(res=>{
          console.log(res);
          if(res.status === 0) {
            if(res.data.result === 0) {
              this.setUserInfo(res.data.user);
              setCache("user", JSON.stringify(res.data.user));
            }else{
              Toast(res.msg);
            }
          }else{
            Toast(res.msg);
            this.$router.push("/user/login")
          }
        });
      }
    },
    computed:{
      ...mapState("user",['userInfo'])
    },
    created() {
      this.$checkLogin(this.getUserData);
    }
  }
</script>
<style lang="stylus">
  .blank-div{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: rgba(255,255,255,.5);
  }
  #user{
    width: 100%;
    background: #f7f7f7;
    position: absolute;
    top: 0;
    .user-info{
      height: 180px;
      position: relative;
      background: #000;
      background-size: cover;
    }
    .black{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0,0,0,.7);
    }
    .user-box{
      width: 4.1rem;
      margin: 0 auto;
      padding: 20px 0;
      position: relative;

      .user-img{
        width: 2rem;
        height: 2rem;
        margin: 20px auto;
        background-position: center;
        background-size: cover;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        position: relative;
        .icon-edit{
          color: #fff;
          background: #d81e06;
          position: absolute;
          bottom: -5px;
          right: -5px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          padding: 5px;
          font-size: 12px;
        }
      }
      .user-text{
        width: 100%;
        p{
          color: #fff;
          line-height: .6rem;
          font-size: 16px;
          text-align: center;
        }
      }
    }
    .title{
      background: #fff;
      font-size: 16px;
      color: #666;
      padding: 10px;
      margin: 5px 0;
      .icon-arrow{
        float: right;
      }
    }
    section{
      width: 100%;
      background: #fff;
      .group-content{
        width: 100%;
        display: flex;
        display: -webkit-flex;
        padding: 20px 0;
        .group-list{
          cursor: pointer;
          flex: 1 1 0;
          border: 1px solid #ddd;
          border-top: none;
          border-bottom: none;
          border-left: none;
          color: #777;
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
