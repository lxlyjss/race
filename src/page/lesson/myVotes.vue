<template>
  <div id="myVotes" class="bs">
    <div class="header">
      <mt-header title="我的订单" fixed>
        <router-link to="/index/user" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="container">
      <ul class="group">
        <li class="item" v-for="(item,key) in myVoteList.list" :key="key" @click="$router.push({path: '/lesson/voteDetial',query:{'voteId':item.orderId}})">
          <p class="title">
            <i class="iconfont icon-home1"></i>
            {{item.branchName}} >
            <span class="fr" style="color: #777" v-show="item.state==1">已付款</span>
            <span class="fr" style="color: #777" v-show="item.state==0">未付款</span>
            <span class="fr" style="color: #777" v-show="item.state==2">已失效</span>
          </p>
          <div class="bs clear list-box">
            <div class="fl img" :style="{backgroundImage: `url(${item.image})`}"></div>
            <div class="fl lesson bs">
              课程名称: {{item.courseName}}
            </div>
          </div>
          <p class="price">
            实付款: ￥{{item.price}}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { mapActions} from "vuex";
  import {Toast } from "mint-ui"

  export default {
    data() {
      return {
        listImg: require("../../assets/images/lesson-img.jpg"),
        myVoteList:{
          list:[]
        }
      }
    },
    methods: {
      ...mapActions("lesson",["getVoteList"]),
      getVoteListFn() {
        this.getVoteList().then(res=>{
          console.log(res);
          if(res.status == 0) {
            this.myVoteList = res.data;
          }else{
            Toast(res.msg)
          }
        }).catch(err=>{
          console.log(err);
          Toast("网络错误");
        });
      }
    },
    created() {
      this.getVoteListFn();
    }
  }
</script>
<style lang="stylus">
  .slide-down-enter, .slide-down-leave-active {
    opacity: 0;
    -webkit-transform: translate(0, -100%);
    transform: translate(0, -100%);
  }
  #myVotes {
    padding: 40px 0 50px;
    .container {
      background: #f7f7f7;
    }
    .group{
      .item{
        margin-top: 5px;
        .title{
          padding: 0 30px;
          line-height: 40px;
          background: #fff;
        }
        .list-box{
          background: #f7f7f7;
          padding: 20px 30px;
          .img{
            width: 40%;
            padding-top: 25%;
            background-size: cover;
            background-position: center;
          }
          .lesson{
            width: 60%;
            line-height: 20px;
            color: #777;
            padding: 20px 0px 20px 10px;
          }
        }
        .price{
          text-align: right;
          line-height: 40px;
          background: #fff;
          padding-right: 30px;
        }
      }
    }
  }
</style>
