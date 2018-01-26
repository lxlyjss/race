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
      <!-- <div class="top-img" :style="{backgroundImage:`url(${lessonDetial.course.image})`}">
        <div class="filter-black">
          <h2>{{lessonDetial.course.courseName}}</h2>
        </div>
      </div> -->
      <h2 style="text-align: center;line-height: 50px;background: #fff;font-size: 16px;font-weight: 900;">{{lessonDetial.course.courseName}}</h2>
      <!--课程介绍-->
      <div class="detial-info gray-c">
        <table>
          <tbody>
          <tr>
            <td width="70"><i class="iconfont icon-icon"></i>课程时间:</td>
            <td>{{lessonDetial.course.enrollBeginDate}}</td>
          </tr>
          <tr>
            <td><i class="iconfont icon-biaoqian"></i>课程分类:</td>
            <td>{{lessonDetial.course.levelName+lessonDetial.course.typeName}}</td>
          </tr>
          <tr>
            <td><i class="iconfont icon-ren"></i>适用年龄:</td>
            <td>{{lessonDetial.course.ageMin}}-{{lessonDetial.course.ageMax}}岁</td>
          </tr>
          <tr>
            <td><i class="iconfont icon-didian"></i>上课地点:</td>
            <td>{{lessonDetial.course.address}}</td>
          </tr>
          </tbody>
        </table>
        <p class="fr item-status finish" v-show="lessonDetial.course.state==0">已结束</p>
        <p class="fr item-status doing" v-show="lessonDetial.course.state==1">进行中</p>
        <p class="fr item-status signing" v-show="lessonDetial.course.state==2">报名中</p>
      </div>
      <!--价格-->
      <div class="price-box">
        <p class="fl">￥<span class="price">{{lessonDetial.course.price }}</span>起</p>
        <div class="fr sign-group">
          <ul>
            <li v-for="(item,key) in lessonDetial.course.signList" :style="{backgroundImage:`url(${item})`}" :key="key"></li>
          </ul>
          <p>{{lessonDetial.course.currentCount}}/{{lessonDetial.course.totalCount}}</p>
        </div>
      </div>
      <div class="nav-tab">
        <ul class="nav-group dflex">
          <li class="nav-list tc" :class="index==0?'active':''" @click="changeTab(0)">
            <i class="iconfont icon-note"></i><span>关于课程</span>
          </li>
          <li class="nav-list tc" :class="index==1?'active':''" @click="changeTab(1)">
            <i class="iconfont icon-edit"></i><span>家长感悟</span>
          </li>
        </ul>
      </div>
      <!--课程介绍和查看感悟盒子-->
      <div class="tab-container">
        <!--课程介绍模块-->
        <transition :name="slideType">
          <div class="lesson-detial" v-show="index==0">
            <div class="section lesson-info">
              <h2 class="tc">
                <span>课程介绍</span>
              </h2>
              <div class="content">
                <ul class="clear">
                  <li style="background-image: url('http://www.72bike.com/img/activitys/a1/1.jpg')"></li>
                  <li style="background-image: url('http://www.72bike.com/img/activitys/a1/2.jpg')"></li>
                  <li style="background-image: url('http://www.72bike.com/img/activitys/a1/3.jpg')"></li>
                  <li style="background-image: url('http://www.72bike.com/img/activitys/a1/4.jpg')"></li>
                  <li style="background-image: url('http://www.72bike.com/img/activitys/a1/5.jpg')"></li>
                  <li style="background-image: url('http://www.72bike.com/img/activitys/a1/6.jpg')"></li>
                  <li style="background-image: url('http://www.72bike.com/img/activitys/a1/7.jpg')"></li>
                  <li style="background-image: url('http://www.72bike.com/img/activitys/a1/8.jpg')"></li>
                  <li style="background-image: url('http://www.72bike.com/img/activitys/a1/9.jpg')"></li>
                </ul>
                <p class="text">
                  我们骑二无比的宗旨就是激发孩子的潜能,锻炼孩子们的责任.勇敢,团结等弱项,在欢快却不失专业的课堂上,学习到的不仅仅是滑步车的技能,正所谓有限的课时,无限的知识初级班七期正在招募,请各位家长速速围观
                </p>
              </div>
            </div>
            <!--课时介绍模块-->
            <div class="section date-info">
              <h2 class="tc">
                <span>课时介绍</span>
              </h2>
              <div class="content">
                <ul class="clear">
                  <li class="bs" v-if="item!==null" v-for="(item, key) in lessonDetial.periods" :key="key">
                    <p><span class="h1">{{key}}</span><i class="iconfont icon-shijian"></i><span>{{item}}</span></p>
                  </li>
                </ul>
              </div>
            </div>
            <!--课程包介绍模块-->
            <div class="section pack-info">
              <h2 class="tc">
                <span>课程包介绍</span>
              </h2>
              <div class="content">
                <ul class="pack-box">
                  <li class="item" v-if="item!==null" v-for="(item,key) in lessonDetial.coursewares" :key="key">
                    <p class="head clear">
                      <span class="index fl">{{key + 1}}</span>
                      <span class="price fr">价值<span>{{item.price }}</span>元</span>
                    </p>
                    <ul>
                      <li v-for="(item1,key1) in item.goods" :key="key1">
                        {{item1.price}}&nbsp;&nbsp;{{item1.goodsName}}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <!--教练介绍模块-->
            <div class="section teacher-info">
              <h2 class="tc">
                <span>教练介绍</span>
              </h2>
              <div class="content">
                <ul class="group">
                  <li class="item dflex" v-if="item!==null" v-for="item in lessonDetial.coachs" :key="item.id">
                    <div class="left">
                      <div class="img" :style="{backgroundImage: `url(${item.headImage})`}"></div>
                    </div>
                    <div class="right">
                      <h1>{{item.name}}</h1>
                      <p class="age">车龄/{{item.years}}年</p>
                      <p class="text">{{item.remark}}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!--注意事项模块-->
            <div class="section notice-info">
              <h2 class="tc">
                <span>注意事项</span>
              </h2>
              <div class="content">
                <img src="../../assets/images/notice.jpg" style="width: 100%;" alt="">
              </div>
            </div>
          </div>
        </transition>
        <!--评价页面-->
        <transition :name="slideType">
          <div class="lesson-comments" v-show="index==1">
            <div class="section comments">
              <ul class="group">
                <li class="item" v-for="(item,key) in commentList.list" :key="key">
                  <p class="head-box">
                    <span class="head" :style="{backgroundImage:`url(${item.user.userImage})`}"></span>
                  </p>
                  <p class="tc name">{{item.user.nickname}}</p>
                  <p class="tc date">{{item.createDate}}</p>
                  <p class="text">{{item.content}}</p>
                  <ul class="img-group clear">
                    <li class="img-list fl" v-for="(item1,key1) in item.images" :key="key1"
                        :style="{backgroundImage:`url(${item1})`}">
                    </li>
                  </ul>
                </li>
              </ul>
              <p style="text-align: center;color: #ccc;" v-show="!commentList.list.length">暂无评价</p>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="btn-group">
      <div class="btn" @click="kefuShow=true">
        <span>联系客服</span>
      </div>
      <div class="btn red-btn" @click="goSign">
        <span>马上报名</span>
      </div>
    </div>
    <mt-popup v-model="kefuShow" pop-transition="popup-fade"
              position="center">
      <div class="kefu-container">
        <p><a :href="'tel:'+kefuData.customerService.phone"><i class="iconfont icon-dianhua"></i>可点击拨打: <span
          class="phone">{{kefuData.customerService.phone}}</span></a></p>
        <p><i class="iconfont icon-ren"></i>微信联系: {{kefuData.customerService.name}}</p>
        <p><img :src="kefuData.customerService.image" width="60"></p>
      </div>
    </mt-popup>
    <my-loading :visible="loading"></my-loading>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from "vue";
import { mapState, mapActions, mapMutations } from "vuex";
import { Popup, Toast } from "mint-ui";
import { getCache } from "../../config/cache";

Vue.component(Popup.name, Popup);

export default {
  data() {
    return {
      index: 0, //当前显示课程介绍还是评价的定位,0是课程介绍,1是评价
      loading: true,
      slideType: "slide-right",
      courseId: "",
      branchId: 1,
      kefuShow: false, //客服弹框是否显示
      kefuData: {
        customerService: {}
      },
      lessonDetial: {
        coachs: [],
        course: {},
        coursewares: [],
        periods: []
      },
      commentList: {
        list: []
      }
    };
  },
  methods: {
    changeTab(n) {
      this.index = n;
    },
    ...mapActions("lesson", [
      "getLessonDetial",
      "getCommentList",
      "getKefuData"
    ]),
    goSign() {
      this.$checkLogin(this.goSignDone);
    },
    goSignDone(done) {
      if(done) {
        this.$router.push({path:'/lesson/sign',query:{'lessonId':this.courseId}});
      }
    },
    getDetialFn() {
      this.getLessonDetial({
        courseId: this.$route.query.lessonId
      })
        .then(res => {
          console.log(res);
          this.loading = false;
          if (res.status == 0) {
            this.lessonDetial = res.data;
          } else {
            Toast(res.msg);
          }
          console.log(this.lessonDetial);
        })
        .catch(res => {
          this.loading = false;
          Toast("网络错误");
          this.$router.push("/index/lesson");
        });
    },
    getCommentFn() {
      this.getCommentList({
        courseId: this.courseId
      })
        .then(res => {
          console.log(res);
          if (res.status == 0) {
            this.commentList = res.data;
          } else {
            Toast(res.msg);
          }
        })
        .catch(err => {
          Toast("网络错误!获取感悟列表失败");
          console.log(err);
        });
    },
    getKefuFn() {
      this.getKefuData({
        branchId: this.branchId,
        type: 0
      })
        .then(res => {
          console.log(res);
          if (res.status == 0) {
            this.kefuData = res.data;
          } else {
            Toast(res.msg);
          }
        })
        .catch(err => {
          console.log(err);
          Toast("网络错误!获取客服信息失败");
          console.log(err);
        });
    }
  },
  watch: {
    index(n, o) {
      if (n > o) {
        this.slideType = "slide-left";
      } else {
        this.slideType = "slide-right";
      }
    }
  },
  created() {
    if ("lessonId" in this.$route.query) {
      this.courseId = this.$route.query.lessonId;
      this.getDetialFn();
      this.getCommentFn();
      this.getKefuFn();
    } else {
      alert("未知的课程id");
    }
  }
};
</script>
<style lang="stylus">
#detial {
  padding: 40px 0 50px;
  height: auto;

  .tab-container {
    position: relative;
  }

  .lesson-detial, .lesson-comments {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
    padding-bottom: 50px;
  }

  .container {
    .top-img {
      height: 6rem;
      background-size: cover;

      .filter-black {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        position: relative;

        h2 {
          width: 100%;
          position: absolute;
          bottom: 10px;
          text-align: center;
          color: #fff;
          font-size: 18px;
        }
      }
    }

    .detial-info {
      padding: 10px 20px;
      background: #fff;
      position: relative;

      table {
        line-height: 20px;
        font-size: 12px;
        max-width: 70%;

        i {
          font-size: 12px;
          margin-right: 2px;
        }
      }

      .item-status {
        position: absolute;
        top: 10px;
        right: 20px;
        padding: 5px 10px;
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

    .nav-tab {
      width: 100%;
      overflow: hidden;
      background: #fff;

      .nav-group {
        padding: 20px 10px;

        .nav-list {
          flex: 1 1 auto;
          color: #9d98a0;
          border-right: 1px solid #9d98a0;
        }

        .active {
          color: #e51f22;
        }

        .nav-list:last-of-type {
          border-right: none;
        }
      }
    }

    .price-box {
      background: #fff;
      color: #777;
      height: 1.4rem;
      line-height: 1.4rem;
      padding: 0 20px;

      .price {
        font-size: 18px;
      }

      .sign-group {
        ul {
          position: relative;
          right: 20px;
          top: 0.2rem;

          li {
            width: 1rem;
            height: 1rem;
            background: url('../../assets/images/user.jpg') no-repeat;
            -webkit-background-size: cover;
            background-size: cover;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            position: absolute;
          }

          li:nth-of-type(1) {
            z-index: 4;
            right: 2rem;
          }

          li:nth-of-type(2) {
            z-index: 3;
            right: 1.2rem;
          }

          li:nth-of-type(3) {
            z-index: 2;
            right: 0.4rem;
          }
        }
      }
    }

    .tab-container {
      .section {
        background: #fff;
        padding: 10px 20px;

        h2 {
          font-size: 16px;

          span {
            padding: 3px 10px;
            border-bottom: 1px solid #ddd;
          }
        }
      }

      .lesson-info {
        ul {
          padding: 20px 0;

          li {
            width: 30%;
            float: left;
            padding-top: 30%;
            margin-right: 5%;
            background-size: cover;
            background-position: center;
            margin-bottom: 5%;
          }

          li:nth-of-type(3n) {
            margin-right: 0;
          }
        }

        .text {
          line-height: 20px;
          color: #777;
        }
      }

      .date-info {
        .content {
          padding: 20px 0;

          ul {
            li {
              width: 50%;
              background: #33b9f6;
              color: #fff;
              float: left;
              padding: 10px 0;
              text-align: center;
              margin-bottom: 10px;

              p {
                line-height: 25px;

                .h1 {
                  font-size: 20px;
                  margin-right: 10px;
                }

                i {
                  font-size: 12px;
                  margin-right: 5px;
                }
              }
            }

            li:nth-of-type(2n+1) {
              -webkit-border-top-left-radius: 10px;
              -moz-border-top-left-radius: 10px;
              border-top-left-radius: 10px;
              -webkit-border-bottom-left-radius: 10px;
              -moz-border-bottom-left-radius: 10px;
              border-bottom-left-radius: 10px;

              p {
                &::after {
                  display: block;
                  float: right;
                  content: '';
                  width: 1px;
                  height: 28px;
                  background: #ddd;
                }
              }
            }

            li:nth-of-type(2n) {
              -webkit-border-top-right-radius: 10px;
              -moz-border-top-right-radius: 10px;
              border-top-right-radius: 10px;
              -webkit-border-bottom-right-radius: 10px;
              -moz-border-bottom-right-radius: 10px;
              border-bottom-right-radius: 10px;
            }
          }
        }
      }

      .pack-info {
        .content {
          padding: 20px 0;

          .pack-box {
            .item {
              .head {
                .index {
                  text-align: center;
                  font-size: 20px;
                  background: #33b9f6;
                  padding: 3px 25px;
                  color: #fff;
                  -webkit-border-radius: 5px;
                  -moz-border-radius: 5px;
                  border-radius: 5px;
                }

                .price {
                  color: #33b9f6;

                  span {
                    font-size: 20px;
                  }
                }
              }

              ul {
                padding: 10px 20px;

                li {
                  list-style: disc;
                  line-height: 24px;
                  color: #777;
                }
              }
            }
          }
        }
      }

      .teacher-info {
        .content {
          padding: 20px 0px;

          .group {
            .item {
              padding: 10px 0;

              .left {
                width: 30%;

                .img {
                  width: 2.4rem;
                  height: 2.4rem;
                  background-size: cover;
                  -webkit-border-radius: 50%;
                  -moz-border-radius: 50%;
                  border-radius: 50%;
                }
              }

              .right {
                width: 70%;

                h1 {
                  font-size: 20px;
                }

                .age {
                  color: #33b9f6;
                  line-height: 30px;
                }

                .text {
                  font-size: 12px;
                  color: #777;
                  line-height: 18px;
                }
              }
            }
          }
        }
      }

      .comments {
        .group {
          .item {
            margin-bottom: 10px;
            border-bottom: 1px solid #ddd;

            p {
              color: #777;
              line-height: 20px;
            }

            .head-box {
              .head {
                display: block;
                background-image: url('http://lxlin.top/test/img/1.jpg'); // lxlin.top/test/img/1.jpg);
                width: 1.5rem;
                height: 1.5rem;
                background-size: cover;
                border-radius: 50%;
                margin: 0 auto;
              }
            }

            .date {
              color: #33b9f6;
            }

            .img-group {
              padding: 10px 0;

              .img-list {
                width: 30%;
                padding-top: 30%;
                -webkit-background-size: cover;
                background-size: cover;
                background-position: center;
                margin-right: 5%;
                margin-bottom: 10px;
              }

              .img-list:nth-of-type(3n) {
                margin-right: 0;
              }
            }
          }
        }
      }
    }
  }

  .mint-popup {
    width: 90%;
    margin: 0 auto;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    overflow: hidden;
  }
}

.kefu-container {
  background: #fff;
  padding: 40px 0;

  p {
    color: #777;
    line-height: 40px;
    text-align: center;

    i {
      margin-right: 10px;
    }
  }
}
</style>
