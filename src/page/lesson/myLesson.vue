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
        <li class="item">
          <div class="img" :style="{backgroundImage: `url(${listImg})`}"></div>
          <div class="black"></div>
          <div class="info">
            <h1 class="tc">
              <i class="iconfont icon-nan1"></i>
              <span class="name">李佳</span>
              <span class="fr item-status finish">已结束</span>
            </h1>
            <p>
              <i class="iconfont icon-note"></i>
              <span>滑步车初级班(三期)</span>
            </p>
            <p>
              <i class="iconfont icon-shijian"></i>
              <span>上课时间: 2018.01.25</span>
            </p>
            <p>
              <i class="iconfont icon-didian"></i>
              <span>上课地点: 北京市朝阳区来广营西路26号</span>
            </p>
          </div>
          <div class="lesson-btn clear">
            <div class="left fl bs">
              <span><i class="iconfont icon-note"></i>课程详情</span>
            </div>
            <div class="right fr bs">
              <span><i class="iconfont icon-riqi"></i>课时详情 <i class="iconfont icon-icon2"></i></span>
            </div>
          </div>
          <class-info></class-info>
        </li>
        <li class="item">
          <div class="img" :style="{backgroundImage: `url(${listImg})`}"></div>
          <div class="black"></div>
          <div class="info">
            <h1 class="tc">
              <i class="iconfont icon-nv"></i>
              <span class="name">李佳</span>
              <span class="fr item-status finish">已结束</span>
            </h1>
            <p>
              <i class="iconfont icon-note"></i>
              <span>滑步车初级班(三期)</span>
            </p>
            <p>
              <i class="iconfont icon-shijian"></i>
              <span>上课时间: 2018.01.25</span>
            </p>
            <p>
              <i class="iconfont icon-didian"></i>
              <span>上课地点: 北京市朝阳区来广营西路26号</span>
            </p>
          </div>
          <div class="lesson-btn clear">
            <div class="left fl bs">
              <span><i class="iconfont icon-note"></i>课程详情</span>
            </div>
            <div class="right fr bs">
              <span><i class="iconfont icon-riqi"></i>课时详情 <i class="iconfont icon-icon2"></i></span>
            </div>
          </div>
          <class-info></class-info>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import classInfo from '@/components/classInfo'
  export default {
    data() {
      return {
        listImg: require("../../assets/images/lesson-img.jpg")
      }
    },
    components:{
      classInfo
    }
  }
</script>
<style lang="stylus">
  #myLesson{
    padding: 40px 0 50px;
    .container{
      background: #fff;
    }
    .group{
      .item{
        position: relative;
        .img{
          width: 100%;
          height: 4rem;
          background-size: cover;
        }
        .item-status{
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
        .finish{
          background: #f38218;
        }
        .signing{
          background: #e1324a;
        }
        .doing{
          background: #3cdc20;
        }
      }
      .black{
        width: 100%;
        height: 4rem;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.6);
        z-index: 1;
      }
      .info{
        position: absolute;
        z-index: 3;
        top: .6rem;
        left: 1rem;
        width: 82%;
        p,h1{
          color: #eee;
        }
        h1{
          line-height:40px;
          font-size: 20px;
        }
        .icon-nan1{
          color: #26a2ff;
          font-size: 20px;
        }
        .icon-nv{
          color: #dd2934;
          font-size: 20px;
        }
        p{
          line-height: 20px;
          font-size: 12px;
        }
        i{
          font-size: 12px;
        }
      }
      .lesson-btn{
        width: 100%;
        height: 1.2rem;
        line-height: 1.2rem;
        .left,.right{
          width: 50%;
          text-align: center;
          color: #777;
        }
        .left{
          border-right: 1px solid #eee;
        }
      }
    }
  }
</style>
