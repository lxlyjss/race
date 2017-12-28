<template>
  <div id="detial">
    <div class="header">
      <mt-header title="课程详情" fixed>
        <router-link to="/index/lesson" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="container">
      <div class="top-img" :style="{backgroundImage:`url(${lessonDetial.imgUrl})`}">
        <div class="filter-black">
          <h2>{{lessonDetial.title}}</h2>
        </div>
      </div>
      <div class="detial-info gray-c">
        <table>
          <tbody>
          <tr>
            <td width="60">课程时间:</td>
            <td>{{lessonDetial.date}}</td>
          </tr>
          <tr>
            <td>课程分类:</td>
            <td>{{lessonDetial.type}}</td>
          </tr>
          <tr>
            <td>适用年龄:</td>
            <td>{{lessonDetial.minAge}}-{{lessonDetial.maxAge}}岁</td>
          </tr>
          <tr>
            <td>上课地点:</td>
            <td>{{lessonDetial.school}}</td>
          </tr>
          </tbody>
        </table>
        <p class="fr item-status finish" v-show="lessonDetial.status==0">已结束</p>
        <p class="fr item-status doing" v-show="lessonDetial.status==1">进行中</p>
        <p class="fr item-status signing" v-show="lessonDetial.status==2">报名中</p>
      </div>
      <div class="price-box">
        <p class="fl">￥<span class="price">{{lessonDetial.price/100}}</span>起</p>
        <div class="fr sign-group">
          <ul>
            <li v-for="(item,key) in lessonDetial.signList" :style="{backgroundImage:`url(${item})`}" :key="key"></li>
          </ul>
          <p>{{lessonDetial.currentCount}}/{{lessonDetial.totalCount}}</p>
        </div>
      </div>
      <div class="nav-tab">
        <ul class="nav-group dflex">
          <li class="nav-list tc active" @click="changeTab(1)">
            关于课程
          </li>
          <li class="nav-list tc" @click="changeTab(2)">
            查看评价
          </li>
        </ul>
      </div>
      <div class="tab-container">
        <mt-tab-container v-model="active" swipeable="swipeable">
          <mt-tab-container-item id="tab-container1">
            <div class="list-container">
              <ul class="lesson-list">
                <li class="list-item dflex">
                  <div class="item-img"></div>
                  <div class="item-detial">
                    <h2 class="fw">儿童滑步车培训(初级三期)</h2>
                    <p>报名: 2017.11.01-2018.12.01</p>
                    <p>开课: 2017.11.01-2018.12.01</p>
                    <p>年龄: 2-3岁</p>
                    <p class="fl">￥<span class="item-price">3972</span>起</p>
                    <p class="fr item-status finish">已结束 ></p>
                  </div>
                </li>
                <li class="list-item dflex">
                  <div class="item-img"></div>
                  <div class="item-detial">
                    <h2 class="fw">儿童滑步车培训(初级三期)</h2>
                    <p>报名: 2017.11.01-2018.12.01</p>
                    <p>开课: 2017.11.01-2018.12.01</p>
                    <p>年龄: 2-3岁</p>
                    <p class="fl">￥<span class="item-price">3972</span>起</p>
                    <p class="fr item-status doing">进行中 ></p>
                  </div>
                </li>
                <li class="list-item dflex">
                  <div class="item-img"></div>
                  <div class="item-detial">
                    <h2 class="fw">儿童滑步车培训(初级三期)</h2>
                    <p>报名: 2017.11.01-2018.12.01</p>
                    <p>开课: 2017.11.01-2018.12.01</p>
                    <p>年龄: 2-3岁</p>
                    <p class="fl">￥<span class="item-price">3972</span>起</p>
                    <p class="fr item-status signing">报名中 ></p>
                  </div>
                </li>
                <li class="list-item dflex">
                  <div class="item-img"></div>
                  <div class="item-detial">
                    <h2 class="fw">儿童滑步车培训(初级三期)</h2>
                    <p>报名: 2017.11.01-2018.12.01</p>
                    <p>开课: 2017.11.01-2018.12.01</p>
                    <p>年龄: 2-3岁</p>
                    <p class="fl">￥<span class="item-price">3972</span>起</p>
                    <p class="fr item-status signing">报名中 ></p>
                  </div>
                </li>
                <li class="list-item dflex">
                  <div class="item-img"></div>
                  <div class="item-detial">
                    <h2 class="fw">儿童滑步车培训(初级三期)</h2>
                    <p>报名: 2017.11.01-2018.12.01</p>
                    <p>开课: 2017.11.01-2018.12.01</p>
                    <p>年龄: 2-3岁</p>
                    <p class="fl">￥<span class="item-price">3972</span>起</p>
                    <p class="fr item-status signing">报名中 ></p>
                  </div>
                </li>
                <li class="list-item dflex">
                  <div class="item-img"></div>
                  <div class="item-detial">
                    <h2 class="fw">儿童滑步车培训(初级三期)</h2>
                    <p>报名: 2017.11.01-2018.12.01</p>
                    <p>开课: 2017.11.01-2018.12.01</p>
                    <p>年龄: 2-3岁</p>
                    <p class="fl">￥<span class="item-price">3972</span>起</p>
                    <p class="fr item-status signing">报名中 ></p>
                  </div>
                </li>
              </ul>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container2">
            <div class="list-container">
              <ul class="lesson-list">
                <li class="list-item dflex">
                  <div class="item-img"></div>
                  <div class="item-detial">
                    <h2 class="fw">儿童滑步车培训(晋级班三期)</h2>
                    <p>报名: 2017.11.01-2018.12.01</p>
                    <p>开课: 2017.11.01-2018.12.01</p>
                    <p>年龄: 2-3岁</p>
                    <p class="fl">￥<span class="item-price">3972</span>起</p>
                    <p class="fr item-status finish">已结束 ></p>
                  </div>
                </li>
                <li class="list-item dflex">
                  <div class="item-img"></div>
                  <div class="item-detial">
                    <h2 class="fw">儿童滑步车培训(晋级班三期)</h2>
                    <p>报名: 2017.11.01-2018.12.01</p>
                    <p>开课: 2017.11.01-2018.12.01</p>
                    <p>年龄: 2-3岁</p>
                    <p class="fl">￥<span class="item-price">3972</span>起</p>
                    <p class="fr item-status doing">进行中 ></p>
                  </div>
                </li>
                <li class="list-item dflex">
                  <div class="item-img"></div>
                  <div class="item-detial">
                    <h2 class="fw">儿童滑步车培训(晋级班三期)</h2>
                    <p>报名: 2017.11.01-2018.12.01</p>
                    <p>开课: 2017.11.01-2018.12.01</p>
                    <p>年龄: 2-3岁</p>
                    <p class="fl">￥<span class="item-price">3972</span>起</p>
                    <p class="fr item-status signing">报名中 ></p>
                  </div>
                </li>
              </ul>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container3">
            <div class="list-container">
              <ul class="lesson-list">
                <li class="list-item dflex">
                  <div class="item-img"></div>
                  <div class="item-detial">
                    <h2 class="fw">儿童脚踏车培训</h2>
                    <p>报名: 2017.11.01-2018.12.01</p>
                    <p>开课: 2017.11.01-2018.12.01</p>
                    <p>年龄: 2-3岁</p>
                    <p class="fl">￥<span class="item-price">3972</span>起</p>
                    <p class="fr item-status finish">已结束 ></p>
                  </div>
                </li>
                <li class="list-item dflex">
                  <div class="item-img"></div>
                  <div class="item-detial">
                    <h2 class="fw">儿童脚踏车培训</h2>
                    <p>报名: 2017.11.01-2018.12.01</p>
                    <p>开课: 2017.11.01-2018.12.01</p>
                    <p>年龄: 2-3岁</p>
                    <p class="fl">￥<span class="item-price">3972</span>起</p>
                    <p class="fr item-status doing">进行中 ></p>
                  </div>
                </li>
                <li class="list-item dflex">
                  <div class="item-img"></div>
                  <div class="item-detial">
                    <h2 class="fw">儿童脚踏车培训</h2>
                    <p>报名: 2017.11.01-2018.12.01</p>
                    <p>开课: 2017.11.01-2018.12.01</p>
                    <p>年龄: 2-3岁</p>
                    <p class="fl">￥<span class="item-price">3972</span>起</p>
                    <p class="fr item-status signing">报名中 ></p>
                  </div>
                </li>
              </ul>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
    <div class="btn-group">
      <div class="btn" @click="popupVisible=true">
        <span>联系客服</span>
      </div>
      <div class="btn red-btn" @click="$router.push('/lesson/sign')">
        <span>马上报名</span>
      </div>
    </div>
    <mt-popup v-model="popupVisible" pop-transition="popup-fade"
      position="center">
      <div class="alert-container">
        <p>客服电话: 010-80448861</p>
        <p>微信联系: 大白<img src="../../assets/images/code.jpg" width="40" alt=""></p>
      </div>
    </mt-popup>
  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from "vue";
  import {mapState, mapActions,mapMutations} from 'vuex';
  import { Popup,TabContainer,TabContainerItem  } from 'mint-ui';


  Vue.component(Popup.name, Popup);
  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);

  export default {
    data() {
      return {
        active:"tab-container1",
        popupVisible: false,
        img:require('@/assets/images/top-img.jpg')
      }
    },
    methods:{
      changeTab(n) {
        this.active = "tab-container"+n;
      },
      ...mapActions("lesson",["getLessonList"]),
      ...mapMutations("lesson",["setDetial"])
    },
    computed:{
      ...mapState("lesson",["lessonList","lessonDetial"])
    },
    watch:{
      'lessonList'(n,o){
        if(n!=o){
          for(var i = 0; i < this.lessonList.list.length;i++){
            if(i == this.$route.query.lessonType){
              for(var j = 0; j < this.lessonList.list[i].list.length;j++){
                if(j == this.$route.query.lessonId){
                  this.setDetial(this.lessonList.list[i].list[j]);
                }
              }
            }
          }
        }
      }
    },
    created(){
      if(!("id" in this.lessonDetial)){
        this.getLessonList();
      }
    }
  }
</script>
<style lang="stylus">
  #detial{
    padding: 40px 0;
    .container{
      .top-img{
        height: 6rem;
        background-size: cover;
        .filter-black{
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,.3);
          position: relative;
          h2{
            width: 100%;
            position: absolute;
            bottom: 10px;
            text-align: center;
            color: #fff;
            font-size: 18px;
          }
        }
      }
      .detial-info{
        padding: 10px 20px;
        background: #fff;
        position: relative;
        table{
          line-height:20px;
          font-size: 12px;
          max-width: 70%;
        }
        .item-status{
          position: absolute;
          top: 10px;
          right: 20px;
          padding: 2px 10px;
          color: #fff;
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
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
      .price-box{
        background: #fff;
        height: 1.4rem;
        line-height: 1.4rem;
        padding: 0 20px;
        .price{
          font-size: 18px;
        }
        .sign-group{
          ul{
            position: relative;
            right: 20px;
            top: .2rem;
            li{
              width: 1rem;
              height: 1rem;
              background: url(../../assets/images/user.jpg) no-repeat;
              -webkit-background-size: cover;
              background-size: cover;
              -webkit-border-radius: 50%;
              -moz-border-radius: 50%;
              border-radius: 50%;
              position: absolute;
            }
            li:nth-of-type(1){
              z-index: 4;
              right: 2rem;
            }
            li:nth-of-type(2){
              z-index: 3;
              right: 1.2rem;
            }
            li:nth-of-type(3){
              z-index: 2;
              right: .4rem;
            }
          }
        }
      }
      .nav-tab{
        width: 100%;
        overflow: hidden;
        background: #fff;
        .nav-group{
          padding: 20px 10px;
          .nav-list{
            flex: 1 1 auto;
            color: #9d98a0;
            border-right: 1px solid #9d98a0;
          }
          .active{
            color: #e51f22;
          }
          .nav-list:last-of-type{
            border-right: none;
          }
        }
      }
    }
    .nav-tab{
      margin-top: 7px;
    }
    .alert-container{
      background: #fff;
      padding: 40px 0;
      p{
        line-height: 40px;
        text-align: center;
        img{
          vertical-align: middle;
          margin-left: 30px;
        }
      }
    }
    .mint-popup{
      width: 90%;
      margin: 0 auto;
      border-radius: 10px;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      overflow: hidden;
    }

  }
</style>
