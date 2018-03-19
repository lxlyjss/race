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
              <p class="input-box"><input type="text" v-model="userInfo.parentName" placeholder="家长姓名" maxlength="8"></p>
              <p class="input-box"><input type="number" v-model="userInfo.phone" placeholder="家长电话" oninput="if(value>=11)value=value.slice(0,11)"></p>
              <p class="input-box"><input type="text" v-model="userInfo.wechat" placeholder="家长微信号"></p>
              <p class="title tc" style="margin-bottom: 10px;">
                宝宝信息
                <span class="fr select-baby" @click="openMyBabyBox">选择宝宝</span>
              </p>
              <p class="input-box"><input type="text" v-model="userInfo.babyName" placeholder="宝宝姓名(大名)"></p>
              <p class="input-box"><input type="text" v-model="userInfo.smallName" placeholder="宝宝小名"></p>
              <p class="sex-box clear">
                宝宝性别
                <span class="fr" :class="userInfo.sex=='1'?'active':''" @click="changeSex(1)"><i class="iconfont icon-nv"></i>女宝</span>
                <span class="fr" :class="userInfo.sex=='0'?'active':''" @click="changeSex(0)"><i class="iconfont icon-nan1"></i>男宝</span>
              </p>
              <p class="birthday-box">
                <span>宝宝出生日期</span>
                <span class="input-date">
                  <input type="date" @input="selectedDate" class="tr" v-model="birthdayData.date"></span>
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
                      <p class="info tc">{{item1.goodsName}}</p>
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
                <!--<li class="coupon-list dflex" @click="couponId=0">-->
                  <!--<div class="coupon-img">-->
                    <!--<img src="../../assets/images/coupon.png">-->
                  <!--</div>-->
                  <!--<div class="coupon-info">-->
                    <!--<p>滑步车初级课折扣券</p>-->
                    <!--<p>券号: 84565656</p>-->
                    <!--<p><span class="fr">仅限本人使用</span></p>-->
                  <!--</div>-->
                  <!--<div class="select-box selected">-->
                    <!--<span class="checkbox fr coupon-check"><i class="iconfont icon-icon1" v-if="couponId==0"></i></span>-->
                  <!--</div>-->
                <!--</li>-->
                <!--<li class="coupon-list dflex" @click="couponId=1">-->
                  <!--<div class="coupon-img">-->
                    <!--<img src="../../assets/images/coupon.png">-->
                  <!--</div>-->
                  <!--<div class="coupon-info">-->
                    <!--<p>滑步车初级课折扣券</p>-->
                    <!--<p>券号: 84565656</p>-->
                    <!--<p><span class="fr">仅限本人使用</span></p>-->
                  <!--</div>-->
                  <!--<div class="select-box">-->
                    <!--<span class="checkbox fr coupon-check"><i class="iconfont icon-icon1" v-if="couponId==1"></i></span>-->
                  <!--</div>-->
                <!--</li>-->
              </ul>
              <br>
              <p class="all-price">实际支付￥<span class="price">{{packInfo.price}}</span></p>
              <p class="access">
                <span class="checkbox access-check" :class="isAccess?'active':''" @click="isAccess=!isAccess"><i class="iconfont icon-icon1" v-if="isAccess"></i></span>
                <span>提交订单默认您已阅读并同意《<span @click="openReadme" style="color: #2ca9f6">服务条款</span>》</span>
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
        <p><a :href="'tel:'+kefuData.customerService.phone"><i class="iconfont icon-dianhua"></i>可点击拨打: <span
          class="phone">{{kefuData.customerService.phone}}</span></a></p>
        <p><i class="iconfont icon-ren"></i>微信联系: {{kefuData.customerService.name}}</p>
        <p><img :src="kefuData.customerService.image" width="60"></p>
      </div>
    </mt-popup>
    <!--日期选择器-->
    <!--<mt-datetime-picker-->
      <!--ref="picker"-->
      <!--type="date"-->
      <!--:startDate="birthdayData.startDate"-->
      <!--:endDate="birthdayData.endDate"-->
      <!--v-model="birthdayData.show" @confirm="selectedDate">-->
    <!--</mt-datetime-picker>-->
    <!--我的宝宝列表-->
    <div class="black-w" v-show="myBaby.show">
      <p>我的宝宝列表</p>
      <div class="content">
        <div class="list">
          <p
            v-for="item in myBaby.list"
            :key="item.id"
            :class="myBaby.tempId==item.id?'active':''"
            @click="selectBaby(item.id)"
          >{{item.babyRealname}}</p>
        </div>
        <div class="baby-btn">
          <span class="btn" @click="myBaby.show=false">取消</span>
          <span class="btn red-btn" @click="selectBabyDone">确定</span>
        </div>
      </div>
    </div>
    <mt-popup
      v-model="readme.show" pop-transition="popup-fade"
      position="center" class="read-wrapper">
      <div class="read-content">
        <h2 style="font-weight: 900;text-align:center;">《中国2017儿童滑步车赛事嘉年华——北京站》免责声明</h2>
        <p class="text">本人自愿参加“中国2017儿童滑步车赛事嘉年华——北京站“活动（以下简称为“滑步车嘉年华”），在已经完全熟知滑步车嘉年华活动规则并充分了解风险警示的情况下，特作出如下声明：</p>
        <p class="text">1.本人/监护人已充分知悉，户外骑行活动具有一定的危险性和不可预见性。本人确认已经详细阅读本声明书，并已清楚了解本声明书的全部内容，自愿接受本声明书内容的约束。</p>
        <p class="text">2.本人已经年满18周岁，是具备完全民事行为能力的成年人，或本人虽未满18周岁，但本人的法定监护人已同意本人参加滑步车嘉年华的活动，并陪同本人签署此声明书。本人/监护人已充分了解参加滑步车嘉年华活动存在伤亡的风险（包括经济损失及其相关损失的风险），前述风险既可能因本人的行为、不行为或疏忽而造成，也可能因他人的行为、不行为或疏忽而造成，或者因对活动的有关设备、设施、道具或场区的状况条件不熟悉等因素造成。本人对上述风险已经知悉，并且自愿承担上述风险。</p>
        <p class="text">3.本人/监护人了解参与滑步车嘉年华活动时购买人身意外伤害（商业）保险的意义，并委托主办方代为本人购买相关保险，并自行承担在滑步车嘉年华活动中发生人身伤亡的全部后果（包括但不限于医疗费用、交通费、误工费等）、全部或部分丧失能力或死亡的后果等，并自行承受由此引起的任何风险。</p>
        <p class="text">4.本人/监护人充分理解户外活动可能对身体有严格的要求，如可能需在崎岖地带和恶劣天气中进行活动。当参加户外活动时，发生的风险有可能使活动参与人受到伤害。这些风险包括并不限于摔伤、磕碰等意外。本人/监护人清楚理解活动共同发起人、活动策划人、联系人、其他参与者均无法全面预见该活动中所有的风险和其他无法预见的不利因素。本人/监护人理解以上所列的风险并不完全含括了活动中所有可能遇到的风险，并且同意本文件中关于免责和放弃权利的声明并不仅局限于以上所列的风险中。</p>
        <p class="text">5.本人/监护人承诺不会就滑步车嘉年华参与人的人身伤害、财产损失或死亡后果向活动任何赞助商、推广单位、主办单位、协办单位、承办单位、组委会和活动场地单位等提起关于因活动参与人参加滑步车嘉年华活动而导致的损害赔偿的诉讼或提出有关索赔。</p>
        <p class="text">6.本人/监护人承诺已预先熟悉活动场地、遵守活动规程。</p>
        <p class="text">7.本人/监护人同意凡是与本人参加滑步车嘉年华活动有关的本人的所有照片、图片、影片、录像片和影音片等权属归活动组委会所有，并同意活动组委会使用前述照片、图片、影片、录像片和影音片等资料，保证不向组委会收取任何费用。</p>
        <p class="text">8.本人/监护人保证滑步车嘉年华活动报名时所提供的个人信息是本人/监护人自愿提供且真实有效，如果提供虚假信息的，本人/监护人将自愿承担由此引起的一切责任和后果。</p>
        <p class="text">9.本人/监护人保证，本人将亲自参与滑步车嘉年华活动，并不会将活动名额以任何形式转让给第三人。如本人转让或者由第三人代替本人参加活动的，由此产生的任何风险或者责任将由本人/监护人自行承担。
        <p class="text">特此声明并承诺！</p>
        <p class="text">安全提示：</p>
        <p class="text">1.严禁在活动中单独行动，严禁在赛道之外骑行。</p>
        <p class="text">2.骑行时严禁追逐打闹，严禁做危险性动作。</p>
        <p class="text">3.如遇见紧急情况，应立即联系主办方处理。</p>
        <p class="text">4.必须全程佩戴安全护具。</p>
        <p class="text">5.请严格遵守活动现场秩序，不蓄意破坏。</p>
        <p class="text">6.参加活动前，请确保身体无碍。</p>
        <p class="text">本人对上述声明书及安全警示的内容已经详细阅读，承诺并保证在活动中遵守上述规定。</p>
      </div>
      <p class="read-close">
        <span @click="readme.show=false">关闭</span>
      </p>
    </mt-popup>
  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue';
  import {mapState, mapMutations, mapActions} from 'vuex';
  import { DatetimePicker, Toast, Button,Indicator} from 'mint-ui';
  import {getCache} from "@/config/cache"
  import tabList from "@/components/tabList";
  Vue.component(DatetimePicker.name, DatetimePicker);
  Vue.component(tabList.name, tabList);
  Vue.component(Button.name, Button);

  export default {
    data() {
      return {
        kefuShow: false,//客服弹框是否显示
        slideType:"slide-right",
        branchId: "",
        couponId: 1,
        courseId: "",//课程id
        isAccess: true,//是否勾选了同意服务条款
        lessonInfo:{
          course:{},
          coursewares:[]
        },
        kefuData:{
          customerService: {}
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
          sex:"0",
          birthday:"",
          mark:""
        },
        packInfo:{//存储用户选择的课件包信息
          selectedId: "",
          price:"",
          name:""
        },
        myBaby:{
          show: false,
          list:[],
          tempId:""
        },
        readme: {
          show: false,
          tempUrl: "",
          url: "http://sport.72bike.com/72ucenter/readme.html"
        }
      }
    },
    methods:{
      ...mapActions("lesson",["getLessonDetial","getKefuData","submitVoteAjax"]),
      ...mapActions("user",["getMyBabyList"]),
      ...mapMutations("lesson",["changeSignIndex"]),
      //进入确认信息页面
      checkInfoPage() {
        if(this.checkInput()) {
          if(this.userInfo.phone.length != 11) {
            Toast({
              message: "请输入11位手机号码",
              duration: 2000
            });
            return;
          }
          //检查小孩年龄
          if(this.checkKidsAge(
            this.lessonInfo.course.ageMin,
            this.lessonInfo.course.ageMax,
            this.userInfo.birthday,
            this.lessonInfo.course.beginDate
          )){
            console.log("符合年龄")
          }else{
            console.log("不符合")
            Toast("很抱歉,宝宝年龄不符合哦");
            return;
          };
          this.changeSignIndex(1);
        }
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
              this.branchId = this.lessonInfo.course.orgId;
              this.getKefuFn();
              this.setFirstPack();
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
      selectedDate() {
        this.userInfo.birthday = this.birthdayData.date;
      },
      changeSex(i) {
        this.userInfo.sex = i;
      },
      //设置默认选择第一个课件包
      setFirstPack() {
        this.packInfo.selectedId = this.lessonInfo.coursewares[0].id;
        this.packInfo.price = this.lessonInfo.coursewares[0].price;
        this.packInfo.name = this.lessonInfo.coursewares[0].name;
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
      //判断小孩的年龄是否符合该课程的限制
      checkKidsAge(minAge,maxAge,birthday,startDate) {
        let start1 = startDate.substr(0,10).split("");
        let start2 = startDate.substr(0,10).split("");
        start1[3] = String(start1[3]-minAge);
        start2[3] = String(start2[3]-maxAge);
        let maxDate = start1.join("");
        let minDate = start2.join("");
        let nowAge = new Date(birthday).getTime();
        if(nowAge > (new Date(minDate).getTime()-24*3600*1000) && nowAge < (new Date(maxDate).getTime()+24*3600*1000)){
          return true;
        }else{
          return false;
        }
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
          // couponId: this.couponId
        };
        console.log(send_data);
        this.submitVoteAjax(send_data).then(res=>{
          console.log(res);
          if(res.status == 0) {
            if(res.data.result == 0) {
              Toast("提交订单成功");
              let orderId = res.data.orderId;
              this.goPay(orderId);
            }else{
              Toast(res.data.msg);
            }
          }else{
            alert("提交失败!请联系管理员")
          }
        }).catch(err=>{
          cosnole.log(err);
        })
      },
      //判断该用户有没有优惠券
      getCouponInfo() {
        let branchId = getCache("branchData");
        let courseId = this.courseId;
        let userId = JSON.parse(getCache("user")).id;
        this.getCouponAjax({
          branchId: branchId,
          courseId: courseId,
          userId: userId
        }).then(res=>{
          console.log(res);
        })
      },
      goPay(orderId) {
        if(this.isAccess){
          this.$router.push({path:"/lesson/pay",query:{orderId: orderId}});
        }else{
          Toast("请阅读并同意服务条款!");
        }
      },
      openMyBabyBox() {
        this.getUserBabyList();
      },
      //获取用户宝宝列表
      getUserBabyList() {
        Indicator.open({spinnerType: "fading-circle"});
        this.getMyBabyList().then(res => {
          console.log(res);
          Indicator.close();
          if (res.status === 0) {
            this.myBaby.show = true;
            this.myBaby.list = res.data.list;
          } else {
            Toast({
              message: res.msg,
              duration: 2000
            });
          }
        }).catch(err => {
          Indicator.close();
          console.log(err);
          Toast({
            message: "网络错误",
            duration: 2000
          });
        });
      },
      //选择宝宝
      selectBaby(id) {
        this.myBaby.tempId = id;
      },
      selectBabyDone() {
        this.myBaby.show=false;
        for(let i = 0;i < this.myBaby.list.length;i++) {
          if(this.myBaby.list[i].id = this.myBaby.tempId) {
            //给数据赋值
            this.userInfo.babyName = this.myBaby.list[i].babyRealname;
            this.userInfo.smallName = this.myBaby.list[i].babyPetName;
            this.userInfo.sex = this.myBaby.list[i].gender;
            this.userInfo.birthday = this.myBaby.list[i].birthday;
            this.birthdayData.date = new Date(this.myBaby.list[i].birthday).format("yyyy-MM-dd");
          }
        }
      },
      getCourseId() {
        if("lessonId" in this.$route.query) {
          this.courseId = this.$route.query.lessonId;
        }else{
          alert("没有课程id");
          this.$router.push("/index/lesson");
        }
      },
      openReadme() {
        this.readme.show = true;
        this.readme.tempUrl = this.readme.url;
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
    .black-w{
      width: 100%;
      height: 100vh;
      background: rgba(0,0,0,.5);
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;
      .content{
        width: 80%;
        margin: 200px auto;
        background: #fff;
        border-radius: 5px;
        position: relative;
        height: 200px;
        .list{
          height: 120px;
          padding: 10px;
          overflow-y: scroll;
        }
        p{
          font-size: 14px
          line-height: 40px;
          text-align: center;
        }
        .active{
          background: #e63161;
          color: #fff;
        }
        .baby-btn{
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 40px;
          border-top: 1px solid #ccc;
          text-align: center;
          span{
            line-height: 40px;
          }
        }
      }
    }
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
      .select-baby{
        padding: 1px 10px;
        background: #2ca9f6;
        color: #fff;
        font-size: 12px;
        border-radius: 5px;
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
    .readme-box{
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;
      background: #fff;
      overflow-y: scroll;
      .iframe-box{
        width: 100%;
        height: 96%;
        padding-top: 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      .close{
        color: #2ca9f6;
        margin: 10px 20px 0;
      }
    }
    .read-wrapper{
      width: 80%;
      height: 70vh;
      padding: 30px 10px 50px;
      border-radius: 10px;
      .read-content{
        height: 100%;
        overflow: scroll;
        p{
          line-height: 20px;
        }
      }
      .read-close{
        text-align: center;
        margin-top: 15px;
        span{
          padding: 3px 10px;
          border: 1px solid #ccc;
          border-radius: 3px;
        }
      }
    }
  }
</style>
