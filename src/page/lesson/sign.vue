<template>
  <div id="sign" class="bs">
    <div class="header">
      <mt-header :title="lessonInfo.course.courseName">
        <span @click="$router.goBack()" slot="left">
          <mt-button icon="back">返回</mt-button>
        </span>
      </mt-header>
    </div>
    <tab-list></tab-list>
    <div class="container">
      <div class="tab-container">
        <transition :name="slideType">
          <div class="page-container page-index1" v-show="signIndex==0">
            <div class="user-info">
              <p class="title tc">家长信息</p>
              <p class="input-box"><input type="text" v-model="userInfo.parentName" placeholder="家长姓名"></p>
              <p class="input-box"><input type="number" v-model="userInfo.phone" placeholder="家长电话" oninput="if(value>=11)value=value.slice(0,11)"></p>
              <p class="input-box"><input type="text" v-model="userInfo.wechat" placeholder="家长微信号"></p>
              <p class="title tc">宝宝信息</p>
              <p class="input-box"><input type="text" v-model="userInfo.babyName" placeholder="宝宝姓名(全名)"></p>
              <p class="input-box"><input type="text" v-model="userInfo.smallName" placeholder="宝宝小名"></p>
              <p class="sex-box clear">
                宝宝性别
                <span class="fr" :class="userInfo.sex=='1'?'active':''" @click="changeSex(1)"><i class="iconfont icon-nv"></i>女宝</span>
                <span class="fr" :class="userInfo.sex=='0'?'active':''" @click="changeSex(0)"><i class="iconfont icon-nan1"></i>男宝</span>
              </p>
              <p class="birthday-box">
                <span>宝宝出生日期</span>
                <span class="input-date">
                  <input type="text" class="tr" v-model="birthdayData.date" readonly aria-readonly="" @click="openPicker()"></span>
              </p>
              <textarea v-model="userInfo.mark" placeholder="备注信息"></textarea>
            </div>
            <div class="gift-container">
              <ul class="gift-box">
                <li class="list-item" v-for="(item,key) in lessonInfo.coursewares" :key="key">
                  <p>
                    <span @click="changePack(item.id,item.price,item.giftName
)">
                      <span class="checkbox"><i class="iconfont icon-icon1" v-if="packInfo.selectedId==item.id"></i></span>
                      <span class="title">{{item.giftName}}</span>
                    </span>
                    <span class="fr">
                      优惠价￥<span class="price">{{item.price}}</span>
                    </span>
                  </p>
                  <ul class="gift-group dflex">
                    <li class="gift-list" v-for="(item1,key1) in item.goods" :key="key1">
                      <p class="img">
                        <img :src="item1.image">
                      </p>
                      <p class="info tc">{{item1.price}} {{item1.title}}</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </transition>
        <transition :name="slideType">
          <div class="page-container page-index2" v-show="signIndex==1">
            <div class="submit-container">
              <div class="submit-info">
                <p class="title">{{lessonInfo.course.courseName}}</p>
                <p class="text"><span>{{userInfo.babyName}}</span><span>{{lessonInfo.course.ageMin}}-{{lessonInfo.course.ageMax}}岁</span><span>{{packInfo.name}}</span></p>
                <p class="price">￥<span>{{packInfo.price}}</span></p>
              </div>
              <div class="mark-box">
                <textarea v-model="userInfo.mark" placeholder="备注信息"></textarea>
              </div>
              <p class="all-price">总金额￥<span class="price">{{packInfo.price}}</span></p>
              <ul class="coupon-group">
                <li class="coupon-list dflex" @click="couponId=0">
                  <div class="coupon-img">
                    <img src="../../assets/images/coupon.png">
                  </div>
                  <div class="coupon-info">
                    <p>滑步车初级课折扣券</p>
                    <p>券号: 84565656</p>
                    <p><span class="fr">仅限本人使用</span></p>
                  </div>
                  <div class="select-box selected">
                    <span class="checkbox fr coupon-check"><i class="iconfont icon-icon1" v-if="couponId==0"></i></span>
                  </div>
                </li>
                <li class="coupon-list dflex" @click="couponId=1">
                  <div class="coupon-img">
                    <img src="../../assets/images/coupon.png">
                  </div>
                  <div class="coupon-info">
                    <p>滑步车初级课折扣券</p>
                    <p>券号: 84565656</p>
                    <p><span class="fr">仅限本人使用</span></p>
                  </div>
                  <div class="select-box">
                    <span class="checkbox fr coupon-check"><i class="iconfont icon-icon1" v-if="couponId==1"></i></span>
                  </div>
                </li>
              </ul>
              <br>
              <p class="all-price">实际支付￥<span class="price">{{packInfo.price}}</span></p>
              <p class="access">
                <span class="checkbox access-check" :class="isAccess?'active':''" @click="isAccess=!isAccess"><i class="iconfont icon-icon1" v-if="isAccess"></i></span>
                <span>提交订单默认您已阅读并同意《服务条款》</span>
              </p>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="btn-group" v-if="signIndex==0">
      <div class="btn" @click="kefuShow=true">
        <span>联系客服</span>
      </div>
      <div class="btn red-btn" @click="checkInfoPage">
        <span>下一步</span>
      </div>
    </div>
    <div class="btn-group" v-if="signIndex==1">
      <div class="btn" @click="changeSignIndex(0)">
        <span>上一步</span>
      </div>
      <div class="btn" :class="isAccess?'red-btn':'gray-btn'" @click="submitVote">
        <span>确认订单</span>
      </div>
    </div>
    <mt-popup v-model="kefuShow" id="kefuBox" pop-transition="popup-fade"
              position="center">
      <div class="kefu-container">
        <p><i class="iconfont icon-dianhua"></i>可点击拨打: <span class="phone">{{kefuData.phone}}</span></p>
        <p><i class="iconfont icon-ren"></i>微信联系: 大白</p>
        <p><img src="../../assets/images/code.jpg" width="60"></p>
      </div>
    </mt-popup>
    <!--日期选择器-->
    <mt-datetime-picker
      ref="picker"
      type="date"
      :startDate="birthdayData.startDate"
      :endDate="birthdayData.endDate"
      v-model="birthdayData.show" @confirm="selectedDate">
    </mt-datetime-picker>
  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue';
  import {mapState, mapMutations, mapActions} from 'vuex';
  import { DatetimePicker, Toast } from 'mint-ui';
  import tabList from "@/components/tabList";
  Vue.component(DatetimePicker.name, DatetimePicker);
  Vue.component(tabList.name, tabList);

  export default {
    data() {
      return {
        kefuShow: false,//客服弹框是否显示
        slideType:"slide-right",
        couponId: 1,
        courseId: "",//课程id
        isAccess: true,//是否勾选了同意服务条款
        lessonInfo:{
          course:{},
          coursewares:[]
        },
        kefuData:{
          phone: "",
        },
        birthdayData:{//日期配置参数
          date:"",
          show: false,
          startDate: new Date("2000-01-01"),
          endDate: new Date()
        },
        userInfo:{//存储用户输入的信息
          parentName:"",
          phone:"",
          wechat:"",
          babyName:"",
          smallName:"",
          sex:"",
          birthday:"",
          mark:""
        },
        packInfo:{//存储用户选择的课件包信息
          selectedId: "",
          price:"",
          name:""
        },
      }
    },
    methods:{
      ...mapActions("lesson",["getLessonDetial","getKefuData","submitVoteAjax"]),
      ...mapMutations("lesson",["changeSignIndex"]),
      //进入确认信息页面
      checkInfoPage() {
        if(this.checkInput()) {
          this.changeSignIndex(1);
        }
      },
      //判断当前页面是否是直接进入的
      checkLessonId() {
        let self = this;
        if('lessonId' in this.$route.query){
          this.courseId = this.$route.query.lessonId;
          this.getLessonDetial({courseId:this.$route.query.lessonId}).then(res=>{
            console.log(res);
            if(res.status == 0) {
              this.lessonInfo = res.data;
              console.log(this.lessonInfo);
            }else{
              alert("获取数据失败!请重新刷新网页")
            }
          });
          //this.getKefuData(this.$route.query.lessonId);
        }else{
          Toast("页面错误,没有课程id");
          self.$router.push("/index/lesson");
        }
      },
      openPicker() {
        this.$refs.picker.open();
      },
      //设置日期
      selectedDate(value) {
        this.birthdayData.date = value.toLocaleDateString().replace(/\//g,"-");
        this.userInfo.birthday = this.birthdayData.date;
      },
      changeSex(i) {
        this.userInfo.sex = i;
      },
      //选择课件包
      changePack(i,p,n) {
        if(this.packInfo.selectedId == i){
          this.packInfo.selectedId = "";
          this.packInfo.price = "0";
          this.packInfo.name = "";
        }else{
          this.packInfo.selectedId = i;
          this.packInfo.price = p;
          this.packInfo.name = n;
        }
      },
      //检查输入选项是否有误
      checkInput() {
        function checkFun(str,info) {
          if(str === "" || str === null || str === "undefined") {
            Toast({
              message: info,
              duration: 2000
            });
            return false;
          }
          return true;
        }
        if(
          !checkFun(this.userInfo.parentName, "请输入家长姓名") ||
          !checkFun(this.userInfo.phone, "请输入家长电话") ||
          !checkFun(this.userInfo.babyName, "请输入宝宝姓名") ||
          !checkFun(this.userInfo.smallName, "请输入宝宝小名") ||
          !checkFun(this.userInfo.sex, "请选择宝宝性别") ||
          !checkFun(this.userInfo.birthday, "请选择宝宝出生日期") ||
          !checkFun(this.packInfo.selectedId, "请选择课件包")
        ){
          return false;
          return;
        };
        return true;
      },
      submitVote() {
        let send_data = {
          courseId: this.courseId,
          userName: this.userInfo.parentName,
          phone: this.userInfo.phone,
          wechatNum: this.userInfo.wechat,
          babyRealname: this.userInfo.babyName,
          babyPetName: this.userInfo.smallName,
          gender: this.userInfo.sex,
          birthday: this.userInfo.birthday,
          remark: this.userInfo.mark,
          coursewareId: this.packInfo.selectedId,
          couponId: this.couponId
        };
        console.log(send_data);
        this.submitVoteAjax(send_data).then(res=>{
          console.log(res);
          if(res.status == 0) {
            Toast("提交订单成功");
            this.goPay();
          }else{
            alert("提交失败!请联系管理员")
          }
        }).catch(err=>{
          cosnole.log(err);
        })
      },
      goPay() {
        if(this.isAccess){
          this.$router.push("/lesson/pay");
        }else{
          Toast("请阅读并同意服务条款!");
        }
      },
      getCourseId() {
        if("lessonId" in this.$route.query) {
          this.courseId = this.$route.query.lessonId;
        }else{
          alert("没有课程id");
          this.$router.push("/index/lesson");
        }
      }
    },
    watch:{
      "signIndex"(n,o) {
        if(n>o) {
          console.log("left");
          this.slideType = "slide-left";
        }else{
          console.log("right");
          this.slideType = "slide-right";
        }
      }
    },
    computed:{
      ...mapState("lesson",["signIndex"])
    },
    created() {
      this.checkLessonId();
      this.changeSignIndex(0);//进入该页面将报名步骤清0
    }
  }
</script>
<style lang="stylus">
  #sign{
    height: auto;
    padding: 110px 0 50px;
    color: #777;
    .container{
      margin-top: 10px;
    }
    .tab-container{
      position: relative;
    }
    .page-container{
      width: 100%;
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
      padding-bottom: 50px;
      transition: all .5s cubic-bezier(.55, 0, .1, 1);
    }
    .user-info{
      padding: 10px 20px;
      .title{
        font-size: 15px;
        font-weight: 900;
        line-height: 30px;
      }
      .input-box{
        line-height: 40px;
        margin-bottom: 8px;
        border: 1px solid #ddd;
      }
      .sex-box{
        line-height: 30px;
        margin: 10px 0;
        padding-left: 10px;
        span{
          padding: 5px 20px;
          border-radius: 5px;
          line-height: 20px;
          border: 1px solid #e51f22;
          margin-left: 10px;
          i{
            margin-right: 3px;
          }
        }
        .active{
          background: #e51f22;
          color: #fff;
        }
      }
      .birthday-box{
        color: #777;
        line-height: 30px;
        margin-bottom: 15px;
        padding-left: 10px;
        .input-date{
          display: block;
          border: 1px solid #ddd;
          width: 57%;
          float: right;
        }
      }
    }
    .gift-container{
      padding: 10px 20px;
      .gift-group{
        flex-wrap: wrap;
        width: 100%;
      }
      .gift-list{
        width: 23.33%;
        margin: 0 5%;
        .img{
          background: #f7f7f7;
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
          line-height: 0;
          padding: 8px;
          img{
            width: 100%;
          }
        }
        .info{
          font-size: 12px;
          line-height: 20px;
        }
      }
      .list-item{
        padding: 10px 0;
        p{
          line-height: 30px;
          .title{
            font-size: 14px;
            vertical-align: middle;
          }
          span{
            font-size: 12px;
          }
          .price{
            font-size: 20px;
          }
        }
      }
    }
    .submit-container{
      padding: 10px 20px;
      .submit-info{
        position: relative;
        padding: 10px 0;
        border-bottom: 1px solid #ddd;
        p{
          line-height: 26px;
        }
        .title{
          font-size: 16px;
          font-weight: 600;
        }
        .text{
          span{
            margin-right: 30px;
            color: #777;
            font-size: 12px;
          }
        }
        .price{
          position: absolute;
          bottom: 0;
          right: 0;
          span{
            font-size: 20px;
          }
        }
      }
      .mark-box{
        padding: 10px 0;
      }
      .all-price{
        text-align: right;
        .price{
          font-size: 20px;
        }
      }
      .coupon-group{
        border: 1px solid #ddd;
        margin-top: 10px;
        .coupon-list{
          padding: 10px;
          .coupon-img{
            flex: 1 1 auto;
            width: 20%;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .coupon-info{
            width: 70%;
            flex: 2 1 auto;
            background: #f7f7f7;
            padding: 0 10px;
            p{
              line-height: 20px;
              font-size: 12px;
            }
          }
          .select-box{
            width: 10%;
            flex: 1 1 auto;
            background: #f7f7f7;
            text-align: center;
            line-height: 60px;
          }
        }
      }
      .access{
        text-align: center;
        font-size: 12px;
        line-height: 50px;
        input{
          vertical-align: middle;
        }
      }
    }
    #kefuBox{
      width: 90%;
      margin: 0 auto;
      border-radius: 10px;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      overflow: hidden;
      .kefu-container{
        background: #fff;
        padding: 40px 0;
        p{
          color: #777;
          line-height: 40px;
          text-align: center;
          i{
            margin-right: 10px;
          }
        }
      }
    }
    input[type=text],input[type=number],textarea{
      color: #777;
      padding: 0 10px;
      width: 100%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }
    textarea{
      padding: 10px;
      font-size: 14px;
      height: 130px;
      background: #f7f7f7;
    }
    .checkbox{
      display: block;
      width: 20px;
      height: 20px;
      border: 1px solid #ddd;
      float: left;
      margin-top: 4px;
      margin-right: 4px;
      text-align: center;
      line-height: 20px;
      i{
        color: #26a2ff;
      }
    }
    .access-check{
      float: none;
      display: inline;
      padding: 3px 11px;
    }
    .coupon-check{
      margin-top: 18px;
      border-color: #ccc;
      background: #fff;
    }
    .active{
      padding: 3px 5px 3px 3px;
    }
    .gray-btn{
      background: gray;
      color: #fff;
    }
  }
</style>
