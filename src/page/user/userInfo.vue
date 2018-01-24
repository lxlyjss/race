<template>
  <div id="userInfo" class="bs">
    <div class="header">
      <mt-header title="个人资料" fixed>
        <router-link to="/index/user" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>
    <transition :name="slideType">
      <div class="container bs" v-show="tab==0">
        <ul class="item-group">
          <li class="item">
            <p class="clear" @click="tab=1">
              <span class="title fl"><i class="iconfont icon-xingming"></i>头像</span>
              <i class="iconfont icon-arrow-right fr" style="margin-left: 10px;"></i>
              <span class="header-img fr" :style="{backgroundImage: 'url('+updateUserInfo.userImage+')'}"></span>
            </p>
          </li>
          <li class="item">
            <p class="clear">
              <span class="title fl"><i class="iconfont icon-biaoqian"></i>姓名</span>
              <span class="fr">
              <input type="text" v-model="updateUserInfo.nickname">
            </span>
            </p>
          </li>
          <li class="item">
            <p class="clear">
              <span class="title fl"><i class="iconfont icon-xingbie"></i>性别</span>
              <span class="fr" style="text-align:right;">
              <select name="sex" v-model="updateUserInfo.gender" id="sex" style="direction: rtl">
                <option value="1">男</option>
                <option value="2">女</option>
                <option value="3">保密</option>
              </select>
            </span>
            </p>
          </li>
          <li class="item">
            <p class="clear">
              <span class="title fl"><i class="iconfont icon-riqi"></i>出生日期</span>
              <span class="fr" @click="openPicker()" style="text-align:right;display: block;height: 40px;">
              {{updateUserInfo.birthday}}
            </span>
            </p>
          </li>
          <li class="item">
            <p class="clear">
              <span class="title fl"><i class="iconfont icon-shouji"></i>手机号码</span>
              <i class="iconfont icon-arrow-right fr" style="margin-left: 10px;"></i>
              <span class="fr" style="width: auto;">{{updateUserInfo.phoneNumber}}</span>
              <span class="fr band-text" v-if="updateUserInfo.phoneNumber">已绑定&nbsp;</span>
              <span class="fr band-text red-text"  @click="$router.push({path:'/user/userInfo/bindPhone',query:{userId:1}})" v-if="!updateUserInfo.phoneNumber">未绑定&nbsp;</span>
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
  import Vue from 'vue';
  import uploadImg from "@/components/uploadUserImg";
  import {DatetimePicker, Toast,Indicator} from 'mint-ui';
  import {mapState, mapActions, mapMutations} from "vuex";
  import {getCache, setCache} from "../../config/cache"
  Vue.component(DatetimePicker.name, DatetimePicker);

  export default {
    data() {
      return {
        tab: 0,//切换填写资料或者上传图片页面;
        slideType: "slide-right",
        tempDate: "",
        startDate: new Date('1970'),
        endDate: new Date(),
        updateUserInfo: {
          id: "",
          userImage: "",
          nickname: "",
          gender: "",
          userImage: "",
          birthday: "",
          phoneNumber: ""
        }
      }
    },
    methods: {
      ...mapActions("user", ["getUserInfo", "changeUserInfo"]),
      ...mapMutations("user", ["setUserInfo"]),
      openPicker() {
        this.$refs.picker.open();
      },
      selectedDate(value) {
        this.tempDate = value.toLocaleDateString().replace(/\//g, "-");
        this.updateUserInfo.birthday = this.tempDate;
      },
      changeTab(n) {
        this.tab = n;
      },
      changeImg(data) {
        this.updateUserInfo.userImage = data;
      },
      getCacheUserData() {
        let user = getCache("user");
        if (user) {
          this.setUpdateUserInfo(JSON.parse(user));
        } else {
          this.getUserInfo().then(res => {
            console.log(res);
            if (res.status === 0) {
              if (res.data.result === 0) {
                this.setUserInfo(res.data.user);
                this.setUpdateUserInfo(res.data.user);
                setCache("user", JSON.stringify(res.data.user));
              } else {
                Toast(res.msg + "请重新刷新页面");
              }
            } else {
              Toast(res.msg + "请重新刷新页面");
            }
          });
        }
      },
      saveInfo() {
        Indicator.open({spinnerType: "fading-circle"});
        this.changeUserInfo(this.updateUserInfo).then(res => {
          Indicator.close();
          if(res.status === 0) {
            Toast({
              message:"修改成功",
              duration: 2000
            });
            this.$router.push("/index/user");
          }else{
            Toast({
              message:res.data.msg,
              duration: 2000
            });
          }
        }).catch(err => {
          Indicator.close();
          console.log(err);
          Toast({
            message:"网络错误",
            duration: 2000
          });
        });
      },
      //将用户数据赋给临时存储对象;
      setUpdateUserInfo(data) {
        this.updateUserInfo.sessionId = getCache("sessionId");
        this.updateUserInfo.id = data.id;
        this.updateUserInfo.userImage = data.userImage;
        this.updateUserInfo.nickname = data.nickname;
        this.updateUserInfo.gender = data.gender;
        this.updateUserInfo.birthday = data.birthday;
        this.updateUserInfo.phoneNumber = data.phoneNumber;
      },
    },
    watch:{
      "tab"(n,o) {
        if(n<o) {
          console.log("right")
          this.slideType = "slide-right";
        }else{
          console.log("left")
          this.slideType = "slide-left";
        }
      }
    },
    components: {
      uploadImg
    },
    mounted() {
      this.getCacheUserData();
    }
  }
</script>
<style lang="stylus">
  #userInfo {
    height: 100vh;
    padding: 40px 0 50px;
    background: #fff;
    position: relative;
    .container {
      width: 100%;
      height: 100vh;
      background: #fff;
      padding: 40px 20px 50px;
      position: absolute;
      top: 0;
      left: 0;
      transition: all .5s cubic-bezier(.55, 0, .1, 1);
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
          .band-text {
            width: auto;
          }
          .red-text {
            color: red;
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
      transition: all .5s cubic-bezier(.55, 0, .1, 1);
    }
  }
</style>
