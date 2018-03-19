<template>
  <div id="search">
    <div class="header">
      <mt-header title="搜索" fixed>
        <router-link to="/index/lesson" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="container">
      <div class="search-box">
        <input type="text" placeholder="快来看看从这里你能搜索出什么吧...">
        <i class="iconfont icon-sousuo" @click="searchContent"></i>
      </div>
      <p class="tc search-title">搜索结果</p>
      <div class="result-box">
        <ul class="lesson-list bs">
          <li class="list-item dflex" v-for="(item1,key1) in lesson.list" :key="key1" @click="goDetial(item1.typeId,key1)">
            <div class="item-img" :style="{backgroundImage:`url(${item1.imgUrl})`}"></div>
            <div class="item-detial">
              <h2 class="fw">{{item1.title}}</h2>
              <p>开课: {{item1.date}}</p>
              <p>年龄: {{item1.minAge}}-{{item1.maxAge}}岁</p>
              <p class="fl">￥<span class="item-price">{{item1.price / 100}}</span>起</p>
              <p class="fr item-status finish" v-show="item1.status==0">已结束</p>
              <p class="fr item-status doing" v-show="item1.status==1">进行中</p>
              <p class="fr item-status signing" v-show="item1.status==2">报名中</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapActions} from "vuex";
  export default {
    data() {
      return {
        lesson: {
          list:[]
        }
      }
    },
    methods:{
      ...mapActions("lesson",["getLessonList"]),
      goDetial(id) {
        this.$router.push({path: '/lesson/detial', query: {'lessonType': key, 'lessonId': id}});
      },
      getLessonList() {
        let send = {

        };
        this.getLessonList(send).then(res=>{
          console.log(res);
          if(res.status == 0) {
            this.lesson.list = res.list;
          }
        })
      },
      searchContent() {
        this.getLessonList();
      }
    }
  }
</script>
<style lang="stylus">
  #search {
    padding: 40px 0 50px;
    background: #fff;
    .container {
      padding: 20px;
    }
    .search-title{
      line-height: 30px;
      color: #777;
    }
    .search-box {
      border-bottom: 1px solid #ddd;
      padding-bottom: 5px;
      input {
        border: none;
        outline: none;
        width: 80%;
        color: #777;
      }
      i {
        float: right;
        margin-right: 10px;
        font-size: 20px;
      }
    }
    .result-box{
      position: relative;
    }
    .lesson-list{
      padding: 10px 0 50px;
    }
    .list-item {
      border-bottom: 1px solid #f7f7f7;
      padding: 10px 0;
      .item-img {
        width: 2.5rem;
        height: 2.5rem;
        background: url(../../assets/images/user.jpg) no-repeat;
        background-size: cover;
        background-position: center;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
      }
      .item-detial {
        flex: 3 1 auto;
        padding-left: 10px;
        position: relative;
        h2 {
          font-size: 14px;
          margin-bottom: 5px;
          color: #423e45;
        }
        p {
          line-height: 20px;
          font-size: 12px;
          color: #878585;
        }
        .item-price {
          font-size: 18px;
          color: #635f5f;
        }
        .item-status {
          padding: 2px 10px;
          color: #fff;
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
        }
        .finish {
          background: #f38218;
        }
        .signing {
          background: #e1324a;
        }
        .doing {
          background: #3cdc20;
        }
      }
    }
  }
</style>
