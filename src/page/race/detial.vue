<template>
  <div id="detial">
    <div class="header-title">
      <mt-header title="赛事活动详情" :style="{background:'#1965b5'}">
        <span @click="$router.goBack()" slot="left">
          <mt-button icon="back">返回</mt-button>
        </span>
      </mt-header>
    </div>
    <div class="content">
      <div class="poster">
        <img :src="detial.poster" alt="活动图片">
        <div class="collection" @click="collection()">
          <img :src="starImg.src[starImg.isCollection]" alt="收藏">
        </div>
      </div>
      <div class="race-content bs">
        <div class="race-info bs">
          <p class="title" style="width: 7.3rem;">{{detial.title}}</p>
          <p class="date">主办方: 骑二无比南通分部</p>
          <p class="date">参赛年龄: 2-6岁</p>
          <p class="date">赛事类型: 儿童滑步车</p>
          <p class="date">报名开始: {{setDate(detial.signup_start_time)}}</p>
          <p class="date">报名结束: {{setDate(detial.signup_end_time)}}</p>
          <p class="date">比赛开始: {{setDate(detial.start_time)}}</p>
          <p class="date">比赛结束: {{setDate(detial.end_time)}}</p>
          <p class="date">活动地点: {{detial.address}} <a href="#" style="color: #0872c1" class="place fr"><img src="../../assets/images/place.png" width="16" style="vertical-align: text-bottom;">活动地点</a></p>
          <p class="date">报名人数: {{detial.register_count}}</p>
          <p class="date"><img style="vertical-align: -36%;" width="20" src="../../assets/images/eye.png"> {{detial.views_num}}</p>
          <p class="tc"><a href="#" style="color: #0872c1;">查看详细</a></p>
          <div class="invitation">
            <a href="#">
            <div style="text-align:center;"><img src="../../assets/images/invitation.png" width="20"></div>
            <div><p style="text-align:center;font-size: 12px;color: #0872c1">邀请卡</p></div></a>
          </div>
        </div>
        <div class="race-info bs">
          <p class="title tc">套餐信息</p>
          <ul class="group-content">
            <li class="list-item">
              <p class="date">套餐分类: 基础套餐</p>
              <p class="date">套餐名称: 一大一小</p>
              <p class="date">套餐价格: ￥472.00</p>
              <p class="date">剩余数量: 25</p>
              <p class="date">套餐说明: 一个大人加一个小孩</p>
            </li>
            <li class="list-item">
              <p class="date">套餐分类: 基础套餐</p>
              <p class="date">套餐名称: 一大一小</p>
              <p class="date">套餐价格: ￥472.00</p>
              <p class="date">剩余数量: 25</p>
              <p class="date">套餐说明: 一个大人加一个小孩</p>
            </li>
            <li class="list-item">
              <p class="date">套餐分类: 基础套餐</p>
              <p class="date">套餐名称: 一大一小</p>
              <p class="date">套餐价格: ￥472.00</p>
              <p class="date">剩余数量: 25</p>
              <p class="date">套餐说明: 一个大人加一个小孩</p>
            </li>
          </ul>
          <p class="tc"><a href="#" style="color: #0872c1;">查看更多</a></p>
        </div>
        <div class="race-info bs">
          <p class="title tc">报名信息</p>
          <ul class="vote-content">
            <li class="list-item">
              <p class="date">已报名人: 隔壁老王</p>
              <p class="date">报名日期: 2017-12-10 14:35:25</p>
              <p class="date">报名套餐: 一大一小,加一宝宝,豪华住宿</p>
            </li>
            <li class="list-item">
              <p class="date">已报名人: 隔壁老王</p>
              <p class="date">报名日期: 2017-12-10 14:35:25</p>
              <p class="date">报名套餐: 一大一小,加一宝宝,豪华住宿</p>
            </li>
            <li class="list-item">
              <p class="date">已报名人: 隔壁老王</p>
              <p class="date">报名日期: 2017-12-10 14:35:25</p>
              <p class="date">报名套餐: 一大一小,加一宝宝,豪华住宿</p>
            </li>
          </ul>
          <p class="tc"><a href="#" style="color: #0872c1;">查看更多</a></p>
        </div>
        <div class="kefu-content race-info bs">
          <p class="title tc">联系客服</p>
          <p class="kefu-text tc" style="font-size: 20px;color: #2cce2c;font-weight: 900;">010-80448861</p>
          <p class="tc tel-p"><a class="tel-btn" href="tel:01080448861">立即拨打</a></p>
          <p class="kefu-text tc">客服微信</p>
          <p class="date tc"><img width="150" src="../../assets/images/kefu.png" alt=""></p>
          <p class="kefu-text tc" style="color: #1965b5;">长按识别图中二维码添加客服微信</p>
          <p class="kefu-text" style="color: red;">注意事项:</p>
          <div class="ques-group">
            <p>1.报名后如何确认报名成功?</p>
            <p>付费成功后,您的报名手机将会收到报名成功确认短信</p>
            <p>1.报名后如何确认报名成功?</p>
            <p>付费成功后,您的报名手机将会收到报名成功确认短信</p>
          </div>
          <br>
          <p class="tc"><a href="#" style="color: #0872c1;">了解更多</a></p>
        </div>
      </div>
    </div>
    <div class="vote-btn">
      <router-link style="display: block;width: 100%;height: 100%;" :to="{path:'/race/vote',query:{raceId: 298}}">立即报名</router-link>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapActions,mapState} from 'vuex'
  import { Toast } from 'mint-ui';
  export default {
    data() {
      return {
        starImg:{
          isCollection: 0,
          src:[
            require("../../assets/images/star_w.png"),
            require("../../assets/images/star_y.png")
          ]
        }
      }
    },
    methods:{
      ...mapActions(['getDetial']),
      setDate(time){
        var temp = new Date();
        temp.setTime(time*1000);
        return temp.toLocaleDateString().replace(/\//g,"-")+temp.toLocaleTimeString()
      },
      collection() {
        if(this.starImg.isCollection === 0){
          this.starImg.isCollection = 1;
          Toast({
            message: '收藏成功',
            position: 'center',
            duration: 1000
          });
        }else{
          this.starImg.isCollection = 0;
          Toast({
            message: '取消收藏',
            position: 'center',
            duration: 1000
          });
        }
      }
    },
    computed:{
      ...mapState(['detial'])
    },
    created() {
      this.getDetial();
      $(window).scrollTop(0);
    }
  }
</script>
<style lang="stylus">
  #detial{
    width: 100%;
    position: relative;
    .header-title{
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 9;
    }
    .content{
      width: 100%;
      padding-bottom: 40px;
      padding-top: 40px;
      .poster{
        width:  100%;
        position: relative;
        img{
          width: 100%;
        }
        .collection{
          width: 1.2rem;
          height: 1.2rem;
          position: absolute;
          right: .5rem;
          bottom: .5rem;
          background: rgba(0,0,0,.6);
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          img{
            width: .8rem;
            margin: .2rem 0 0 .2rem;
          }
        }
      }
      .race-content{
        width: 100%;
        padding: .3rem;
      }
      .race-info{
        width: 100%;
        padding: 0.3rem;
        margin-bottom: 10px;
        background: #fff;
        position: relative;
        .title{
          font-size: 16px;
          font-weight: 900;
          margin-bottom: 10px;
        }
        .date{
          font-size: 12px;
          line-height: 16px;
        }
        .invitation{
          width: 1rem;
          position: absolute;
          top: .3rem;
          right: .5rem;
        }
        .group-content{
          width: 100%;
          .list-item{
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
            margin-bottom: 10px;
          }
        }
        .vote-content{
          width: 100%;
          .list-item{
            border: 1px solid #ddd;
            padding: 0.3rem;
            margin-bottom: 10px;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
          }
        }
      }
      .kefu-content{
        .kefu-text{
          font-size: 14px;
          margin-bottom: 10px;
        }
        .tel-p{
          line-height: 40px;
          .tel-btn{
            padding: 5px 20px;
            background: #1965b5;
            color: #fff;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
          }
        }
        .ques-group{
          padding-bottom: 10px;
          border-bottom: 1px solid #ccc;
          p{
            line-height: 20px;
            font-size: 12px;
          }
        }
      }
    }
    .vote-btn{
      width: 100%;
      height: 45px;
      background: #1965b5;
      text-align: center;
      position: fixed;
      bottom: 0;
      line-height: 50px;
      a{
        font-size: 16px;
        color: #ffffff;
      }
    }
  }
</style>
