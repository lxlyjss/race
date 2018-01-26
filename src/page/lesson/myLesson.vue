<template>
  <div id="myLesson" class="bs">
    <div class="header">
      <mt-header title="我的课程" fixed>
        <router-link to="/index/user" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="container">
      <ul class="group">
        <li class="item" v-for="(item,key) in myLessonList.list" :key="key">
          <div class="img" :style="{backgroundImage: `url(${listImg})`}"></div>
          <div class="black"></div>
          <div class="info">
            <h1 class="tc">
              <i class="iconfont icon-nan1"></i>
              <span class="name">{{item.name}}</span>
              <span class="fr item-status unstart" v-if="item.status==0">未开始</span>
              <span class="fr item-status doing" v-if="item.status==1">进行中</span>
              <span class="fr item-status finish" v-if="item.status==2">已结束</span>
            </h1>
            <p>
              <i class="iconfont icon-note"></i>
              <span>{{item.title}}</span>
            </p>
            <p>
              <i class="iconfont icon-shijian"></i>
              <span>上课时间: {{item.date}}</span>
            </p>
            <p>
              <i class="iconfont icon-didian"></i>
              <span>上课地点: {{item.school}}</span>
            </p>
          </div>
          <div class="lesson-btn clear">
            <div class="left fl bs">
              <span><i class="iconfont icon-note"></i>课程详情</span>
            </div>
            <div class="right fr bs" @click="changeClassShow(key)">
              <span><i class="iconfont icon-riqi"></i>课时详情 <i class="iconfont icon-icon2"></i></span>
            </div>
          </div>
          <div class="classInfo-box" v-show="showData[key].show">
            <transition name="slide-down">
              <class-info :index="key" :itemId="item.id" :classInfo="item.classInfo" :classLeave="item.classLeave"></class-info>
            </transition>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import classInfo from '@/components/classInfo';
  import {mapState, mapActions, mapMutations} from "vuex";
import myVotesVue from './myVotes.vue';

  export default {
    data() {
      return {
        listImg: require("../../assets/images/lesson-img.jpg"),
        myLessonList:{
          list:[]
        },
        showData:[]
      }
    },
    methods: {
      ...mapActions("lesson",["getMyLessonList"]),
      getListFn() {   //获取课程列表
        this.getMyLessonList().then(res=>{
          this.myLessonList = res.data;
          this.setShowData(this.myLessonList.list);
        }).catch(err=>{
          console.log(err);
        });
      },
      setShowData(data) {   //设置显示与隐藏的数据
        for(let i = 0; i < data.length;i++) {
          this.showData.push({
            show: false
          });
        }
        this.showData[0].show = true;
      },
      changeClassShow(i) {
        this.showData[i].show = !this.showData[i].show;
      }
    },
    components: {
      classInfo
    },
    created() {
      this.getListFn();
    }
  }
</script>
<style lang="stylus">
  .slide-down-enter, .slide-down-leave-active {
    opacity: 0;
    -webkit-transform: translate(0, -100%);
    transform: translate(0, -100%);
  }
  #myLesson {
    padding: 40px 0 50px;
    .container {
      background: #fff;
    }
    .classInfo-box{
      width: 100%;
      height: auto;
      overflow: hidden;
    }
    .comment-btn{
      text-align: center;
      background: #f00;
      color: #fff;
      line-height: 40px;
      height: 40px;
      width: 150px;
      margin: 0 auto;
      border-radius: 5px;
      position: absolute;
      bottom: 0px;
      left: 0;
      right: 0;
    }
    .group {
      .item {
        position: relative;
        background: #f7f7f7;
        .img {
          width: 100%;
          height: 4rem;
          background-size: cover;
        }
        .item-status {
          font-size: 12px;
          position: absolute;
          top: 10px;
          right: 0px;
          padding: 3px 10px;
          color: #fff;
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
          line-height: 14px;
        }
        .finish {
          background: #5c88f3;
        }
        .unstart {
          background: #e1324a;
        }
        .doing {
          background: #3cdc20;
        }
      }
      .black {
        width: 100%;
        height: 4rem;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .6);
        z-index: 1;
      }
      .info {
        position: absolute;
        z-index: 3;
        top: .6rem;
        left: 1rem;
        width: 82%;
        p, h1 {
          color: #eee;
        }
        h1 {
          line-height: 40px;
          font-size: 20px;
        }
        .icon-nan1 {
          color: #26a2ff;
          font-size: 20px;
        }
        .icon-nv {
          color: #dd2934;
          font-size: 20px;
        }
        p {
          line-height: 20px;
          font-size: 12px;
        }
        i {
          font-size: 12px;
        }
      }
      .lesson-btn {
        width: 100%;
        height: 1.2rem;
        line-height: 1.2rem;
        .left, .right {
          width: 50%;
          text-align: center;
          color: #777;
        }
        .left {
          border-right: 1px solid #eee;
        }
      }
    }
  }
</style>
