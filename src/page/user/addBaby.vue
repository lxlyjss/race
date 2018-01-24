<template>
  <div id="addBaby" class="bs">
    <div class="header">
      <mt-header :title="pageTitle" fixed>
        <span @click="goMybaby" slot="left">
          <mt-button icon="back">返回</mt-button>
        </span>
      </mt-header>
    </div>
    <transition :name="slideType">
      <div class="container bs" v-show="tab==0">
        <ul class="item-group">
          <li class="item">
            <p class="clear" @click="tab=1">
              <span class="title fl"><i class="iconfont icon-xingming"></i>头像</span>
              <i class="iconfont icon-arrow-right fr" style="margin-left: 10px;"></i>
              <span class="header-img fr" :style="{backgroundImage: 'url('+updateBabyInfo.image+')'}"></span>
            </p>
          </li>
          <li class="item">
            <p class="clear">
              <span class="title fl"><i class="iconfont icon-biaoqian"></i>姓名</span>
              <span class="fr">
              <input type="text" v-model="updateBabyInfo.babyRealname">
            </span>
            </p>
          </li>
          <li class="item">
            <p class="clear">
              <span class="title fl"><i class="iconfont icon-biaoqian"></i>小名</span>
              <span class="fr">
              <input type="text" v-model="updateBabyInfo.babyPetName">
            </span>
            </p>
          </li>
          <li class="item">
            <p class="clear">
              <span class="title fl"><i class="iconfont icon-xingbie"></i>性别</span>
              <span class="fr" style="text-align:right;">
              <select name="sex" v-model="updateBabyInfo.gender" id="sex" style="direction: rtl">
                <option value="0">男</option>
                <option value="1">女</option>
                <option value="2">保密</option>
              </select>
            </span>
            </p>
          </li>
          <li class="item">
            <p class="clear">
              <span class="title fl"><i class="iconfont icon-riqi"></i>出生日期</span>
              <span class="fr" @click="openPicker()" style="text-align:right;display: block;height: 40px;">
              {{updateBabyInfo.birthday}}
            </span>
            </p>
          </li>
          <li class="item">
            <p class="clear">
              <span class="title fl"><i class="iconfont icon-xingbie"></i>证件类型</span>
              <span class="fr" style="text-align:right;">
              <select name="sex" v-model="updateBabyInfo.paperType" id="c_type" style="direction: rtl">
                <option value="0">身份证</option>
                <option value="1">护照</option>
                <option value="2">港澳通行证</option>
                <option value="3">台湾通行证</option>
              </select>
            </span>
            </p>
          </li>
          <li class="item">
            <p class="clear">
              <span class="title fl"><i class="iconfont icon-shouji"></i>证件号码</span>
              <span class="fr">
              <input type="text" v-model="updateBabyInfo.paperNum"/>
            </span>
            </p>
          </li>
        </ul>
        <div class="red-btn tc save-btn" @click="saveInfo">
          <i class="iconfont icon-baocun" style="margin-right: 10px;"></i>保存
        </div>
      </div>
    </transition>
    <transition :name="slideType">
      <div class="uploadImg-box" v-show="tab==1">
        <upload-img @changeImgUrl="changeImg" @changeTabIndex="changeTab"></upload-img>
      </div>
    </transition>
    <mt-datetime-picker
      ref="picker"
      type="date"
      :startDate="startDate"
      :endDate="endDate"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      v-model="tempDate" @confirm="selectedDate">
    </mt-datetime-picker>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from "vue";
import uploadImg from "@/components/uploadUserImg";
import { DatetimePicker, Toast, Indicator } from "mint-ui";
import { mapActions } from "vuex";
import { getCache } from "../../config/cache";
Vue.component(DatetimePicker.name, DatetimePicker);
export default {
  data() {
    return {
      tab: 0,
      slideType: "slide-right",
      pageTitle: "新增宝宝",
      tempDate: "",
      startDate: new Date("1970"),
      endDate: new Date(),
      myBabyList: {
        list: []
      },
      updateBabyInfo: {
        userId: "",
        image: "",
        babyRealname: "",
        babyPetName: "",
        paperType: "",
        birthday: "",
        paperNum: "",
        gender: ""
      }
    };
  },
  methods: {
    ...mapActions("user", ["getMyBabyList", "saveBabyAjax", "updateBabyAjax"]),
    openPicker() {
      this.$refs.picker.open();
    },
    selectedDate(value) {
      this.tempDate = value.toLocaleDateString().replace(/\//g, "-");
      this.updateBabyInfo.birthday = this.tempDate;
    },
    changeTab(n) {
      console.log(n);
      this.tab = n;
    },
    changeImg(data) {
      console.log(data);
      this.updateBabyInfo.image = data;
    },
    saveInfo() {
      console.log(this.updateBabyInfo);
      if (this.updateBabyInfo.id == undefined || this.updateBabyInfo.id == "") {
        this.saveBabyAjax(this.updateBabyInfo)
          .then(res => {
            console.log(res);
            if (res.status === 0) {
              Toast({
                message: "添加成功",
                duration: 1000
              });
              this.$router.push("/user/myBaby");
            }
          })
          .catch(err => {
            console.log(err);
            Toast({
              message: "网络错误",
              duration: 3000
            });
            this.$router.push("/user/myBaby");
          });
      } else {
        this.updateBabyAjax(this.updateBabyInfo)
          .then(res => {
            console.log(res);
            if (res.status === 0) {
              Toast({
                message: "修改成功",
                duration: 1000
              });
              this.$router.push("/user/myBaby");
            }
          })
          .catch(err => {
            console.log(err);
            Toast({
              message: "网络错误",
              duration: 3000
            });
            this.$router.push("/user/myBaby");
          });
      }
    },
    goMybaby() {
      this.$router.isBack = true;
      this.$router.push("/user/myBaby");
    },
    getaBabyInfo(list, id) {
      console.log(list, id);
      let tempArr = [];
      if (list instanceof Array) {
        for (let i = 0; i < list.length; i++) {
          if (list[i].id == id) {
            tempArr = list[i];
          }
        }
      } else {
        alert("myBabyLIst is not Array");
      }
      console.log(tempArr);
      return tempArr;
    },
    addBabyFn() {
      //增加宝宝
      this.pageTitle = "增加宝宝";
      let uId = JSON.parse(getCache("user")).id;
      if (uId) {
        this.updateBabyInfo.userId = uId;
      } else {
        Toast("未登录,请重新登录");
        this.$router.push("/user/login");
      }
    },
    changeBabyFn() {
      //修改宝宝信息
      this.pageTitle = "修改宝宝信息";
      this.getList();
    },
    changeBabyInfo(data) {
      this.updateBabyInfo.id = data.id;
      this.updateBabyInfo.image = data.image;
      this.updateBabyInfo.babyRealname = data.babyRealname;
      this.updateBabyInfo.babyPetName = data.babyPetName;
      this.updateBabyInfo.paperType = data.paperType;
      this.updateBabyInfo.birthday = data.birthday;
      this.updateBabyInfo.phoneNumber = data.phoneNumber;
      this.updateBabyInfo.paperNum = data.paperNum;
      this.updateBabyInfo.gender = data.gender;
    },
    getList() {
      let uId = JSON.parse(getCache("user")).id;
      if (uId) {
        Indicator.open({ spinnerType: "fading-circle" });
        this.getMyBabyList({
          userId: uId
        })
          .then(res => {
            console.log(res);
            Indicator.close();
            if (res.status === 0) {
              this.myBabyList = res.data;
              this.changeBabyInfo(
                this.getaBabyInfo(this.myBabyList.list, this.updateBabyInfo.id)
              );
            } else {
              Toast({
                message: res.msg,
                duration: 2000
              });
            }
          })
          .catch(err => {
            Indicator.close();
            console.log(err);
            Toast({
              message: "网络错误",
              duration: 2000
            });
          });
      } else {
        Toast("未登录,请重新登录");
        this.$router.push("/user/login");
      }
    }
  },
  watch: {
    tab(n, o) {
      if (n < o) {
        console.log("right");
        this.slideType = "slide-right";
      } else {
        console.log("left");
        this.slideType = "slide-left";
      }
    }
  },
  components: {
    uploadImg
  },
  created() {
    //页面有没有宝宝的id,有是修改宝宝信息,无是增加宝宝
    if ("babyId" in this.$route.query) {
      this.changeBabyFn();
      this.updateBabyInfo.id = this.$route.query.babyId;
    } else {
      this.addBabyFn();
    }
  }
};
</script>
<style lang="stylus">
#addBaby {
  padding: 40px 0 50px;
  background: #fff;
  height: 100vh;
  position: relative;

  .container {
    width: 100%;
    height: 100vh;
    background: #fff;
    padding: 40px 20px 50px;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .item-group {
    .item {
      padding: 8px 10px;
      border-bottom: 1px solid #ddd;

      p {
        line-height: 40px;
        color: #777;

        .title {
          font-size: 12px;

          i {
            margin-right: 5px;
          }

          .icon-xiaohai {
            font-size: 19px;
          }
        }

        .header-img {
          display: block;
          width: 40px;
          height: 40px;
          -webkit-background-size: cover;
          background-size: cover;
        }

        span {
          width: 50%;

          input, select {
            border: none;
            outline: none;
            text-align: right;
            width: 100%;
            color: #777;
            background: #fff;
          }
        }
      }
    }
  }

  .save-btn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
  }

  .uploadImg-box {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }
}
</style>
