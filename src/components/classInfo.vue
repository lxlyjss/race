<template>
  <div class="classInfo clear">
    <div class="point-box fl">
      <ul>
        <li v-for="(item,key) in classInfo" :key="key">
          <span v-if="item.state==2"><i class="done"></i></span>
          <span v-if="item.state==1"><i class="miss"></i></span>
          <span v-if="item.state==0"><i class="unstart"></i></span>
        </li>
      </ul>
      <ul>
        <li v-for="(item,key) in classLeave" :key="key">
          <span><i class="unstart"></i></span>
        </li>
      </ul>
    </div>
    <div class="info-box fr">
      <ul>
        <li class="clear" v-for="(item,key) in classInfo" :key="key">
          <span class="sanjiao"></span>
          <p class="text">
            <span class="title">{{key+1}}</span>
            <span class="date">{{item.date}}</span>
            <span class="time">{{item.time}}</span>
            <span class="class-btn fr done" v-if="item.state==2">照片</span>
            <span class="class-btn fr miss" v-if="item.state==1">已请假</span>
            <span class="class-btn fr unstart" v-if="item.state==0">请假</span>
          </p>
        </li>
        <li class="clear" v-for="(item,key) in classLeave" :key="key">
          <span class="sanjiao"></span>
          <p class="text bs" style="padding-left: 20px;">
            <span class="date">{{item.date}} 顺延课时</span>
            <span class="class-btn fr unstart">请假</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="comment-btn" @click="$router.push({path:'/lesson/comment',query:{'courseId': itemId}})">
      <i class="iconfont icon-liaotian1"></i>
      课后评价
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapState} from "vuex";
  export default {
    props:["classInfo","classLeave","itemId"],
    data() {
      return {

      }
    },
    created() {
      
    }
  }
</script>
<style lang="stylus">
  .classInfo{
    padding: 20px 15px 50px;
    background: #f7f7f7;
    transition: all .3s;
    position: relative;
    .point-box{
      width: 10%;
      ul{
        li{
          &::after,&::before{
            display: block;
            content: '';
            width: 1px;
            height: 14px;
            background: #ccc;
            margin: 0 auto;
          }
          &::after{
            height: 15px;
          }
          span{
            display: block;
            font-size: 0;
            width: 21px;
            height: 21px;
            background: #f7f7f7;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            margin: 0 auto;
            padding: 5px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            i{
              display: block;
              font-size: 0;
              width: 11px;
              height: 11px;
              background: #33b9f6;
              -webkit-border-radius: 50%;
              -moz-border-radius: 50%;
              border-radius: 50%;
            }

          }
        }
      }
    }
    .miss{
      background: #f32222!important;
    }
    .done{
      background: #6a6969!important;
    }
    .unstart{
      background: #33b9f6!important;
    }
    .info-box{
      width: 85%;
      li{
        position: relative;
        margin: 4px 0;
      }
      .sanjiao{
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 8px;
        border-color: transparent;
        border-right-color: #fff;
        position: absolute;
        left: -16px;
        top: 12px;
      }
      .text{
        width: 100%;
        background: #fff;
        float: left;
        line-height: 41px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        overflow: hidden;
        .class-btn{
          background: #33b9f6;
          color: #fff;
          padding: 0 8px;
          line-height: 45px;
          width: 42px;
          text-align: center;
        }
        .title,.date,.time{
          color: #777;
        }
        .title{
          font-size: 24px;
          padding: 0 10px;
        }
        .date{
          font-size: 16px;
        }
        .time{
          font-size: 12px;
        }
      }
    }
  }
</style>
