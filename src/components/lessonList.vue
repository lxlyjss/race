<template>
  <transition :name="type">
    <ul class="lesson-list bs">
      <li class="list-item dflex" v-for="item in lesson.list" :key="item.id" @click="goDetial(item.id)">
        <div class="item-img" :style="{backgroundImage:`url(${item.image})`}"></div>
        <div class="item-detial">
          <h2 class="fw">{{item.courseName}}</h2>
          <p><i class="iconfont icon-icon"></i>课程时间: {{item.enrollBeginDate}}</p>
          <p><i class="iconfont icon-ren"></i>适用年龄: {{item.ageMin}}-{{item.ageMax}}岁</p>
          <p class="fl">￥<span class="item-price">{{item.price}}</span>起</p>
          <p class="fr item-status finish" v-show="item.state==0">已结束</p>
          <p class="fr item-status doing" v-show="item.state==1">进行中</p>
          <p class="fr item-status signing" v-show="item.state==2">报名中</p>
        </div>
      </li>
    </ul>
  </transition>
</template>
<script type="text/ecmascript-6">
  import { mapState } from "vuex";
  export default {
    name: "lessonList",
    props: ["lesson"],
    data() {
      return {
        type:"slide-left"
      }
    },
    methods:{
      goDetial(id) {
        this.$router.push({path: '/lesson/detial', query: {'lessonId': id}});
      }
    },
    computed:{
      ...mapState("lesson",["lessonType"])
    },
    watch:{
      "lessonType"(n,o) {
        if(n>o) {
          this.type = "slide-right";
        }else{
          this.type = "slide-left";
        }
      }
    }
  }
</script>
<style lang="stylus">
  .lesson-list {
    padding: 10px 20px 50px;
    background: #fff;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
  }
</style>
