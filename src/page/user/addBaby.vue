<template>
  <div id="addBaby" class="bs">
    <div class="header">
      <mt-header :title="pageTitle" fixed>
        <span @click="goMybaby" slot="left">
          <mt-button icon="back">返回</mt-button>
        </span>
      </mt-header>
    </div>
    <div class="container">
      <ul class="item-group">
        <li class="item">
          <p class="clear" @click="goUploadImg">
            <span class="title fl"><i class="iconfont icon-xingming"></i>头像</span>
            <i class="iconfont icon-arrow-right fr" style="margin-left: 10px;"></i>
            <span class="header-img fr" :style="{backgroundImage: 'url('+babyInfo.headImg+')'}"></span>
          </p>
        </li>
        <li class="item">
          <p class="clear">
            <span class="title fl"><i class="iconfont icon-biaoqian"></i>姓名</span>
            <span class="fr">
              <input type="text" v-model="babyInfo.name" >
            </span>
          </p>
        </li>
        <li class="item">
          <p class="clear">
            <span class="title fl"><i class="iconfont icon-biaoqian"></i>小名</span>
            <span class="fr">
              <input type="text" v-model="babyInfo.smallName" >
            </span>
          </p>
        </li>
        <li class="item">
          <p class="clear">
            <span class="title fl"><i class="iconfont icon-xingbie"></i>性别</span>
            <span class="fr" style="text-align:right;">
              <select name="sex" v-model="babyInfo.sex" id="sex" style="direction: rtl">
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
              {{babyInfo.birthday}}
            </span>
          </p>
        </li>
        <li class="item">
          <p class="clear">
            <span class="title fl"><i class="iconfont icon-xingbie"></i>证件类型</span>
            <span class="fr" style="text-align:right;">
              <select name="sex" v-model="babyInfo.c_type" id="c_type" style="direction: rtl">
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
              <input type="text" v-model="babyInfo.c_number" />
            </span>
          </p>
        </li>
      </ul>
    </div>
    <div class="red-btn tc save-btn" @click="saveInfo">
      <i class="iconfont icon-baocun" style="margin-right: 10px;"></i>保存
    </div>
    <mt-datetime-picker
      ref="picker"
      type="date"
      :startDate="startDate"
      :endDate="endDate"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      v-model="pickerValue" @confirm="selectedDate">
    </mt-datetime-picker>
  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue';
  import { DatetimePicker } from 'mint-ui';
  import {mapState, mapActions, mapMutations} from "vuex";
  Vue.component(DatetimePicker.name, DatetimePicker);

  export default {
    data() {
      return {
        pageTitle:"新增宝宝",
        pickerValue: "",
        startDate:new Date('1970'),
        endDate: new Date()
      }
    },
    methods:{
      ...mapActions("user",["getMyBabyList"]),
      ...mapMutations("user",["setBabyInfo"]),
      openPicker() {
        this.$refs.picker.open();
      },
      selectedDate(value) {
        this.pickerValue = value.toLocaleDateString().replace(/\//g,"-");
        this.babyInfo.birthday = this.pickerValue;
      },
      saveInfo(){
        console.log(this.babyInfo);
      },
      goMybaby() {
        this.$router.isBack = true;
        this.$router.push("/user/myBaby");
      },
      getBabyInfo(list,id) {
        let tempArr = [];
        if(typeof list === "object") {
          if(list instanceof Array) {
            for(let i = 0; i < list.length;i++) {
              if(list[i].id == id) {
                tempArr = list[i];
              }
            }
          }
        }else{
          alert("myBabyLIst is not Array");
        }
        return tempArr;
      },
      addBabyFn() {
        console.log("增加宝宝哦")
        this.pageTitle = "增加宝宝";
      },
      changeBabyFn() {
        console.log("修改宝宝哦")
        this.pageTitle = "修改宝宝信息";
        if(this.myBabyList.list.length <= 0) {//如果当前页面宝宝列表没有信息,则请求接口获取
          this.getMyBabyList();
        }else{
          this.setBabyInfo(this.getBabyInfo(this.myBabyList.list,this.$route.query.babyId));//检索得到宝宝信息
        }
      },
      goUploadImg() {
        if("babyId" in this.$route.query){
          this.$router.push({path:'/user/userInfo/uploadBabyImg',query:{'babyId':this.$route.query.babyId}});
        }else{
          this.$router.push("/user/userInfo/uploadBabyImg");
        }
      }
    },
    watch:{
      "myBabyList"() {
        this.setBabyInfo(this.getBabyInfo(this.myBabyList.list,this.$route.query.babyId));//检索得到宝宝信息
      }
    },
    computed:{
      ...mapState("user",['myBabyList','babyInfo'])
    },
    created() {
      if(!this.babyInfo.id) {
        if("babyId" in this.$route.query) {//页面有没有宝宝的id,有是修改宝宝信息,无是增加宝宝
          console.log("有baobao id")
          this.changeBabyFn();
        }else{
          this.addBabyFn();
        }
      }
    },
    mounted(){
      //this.pickerValue = this.babyInfo.birthday
    }
  }
</script>
<style lang="stylus">
  #addBaby{
    padding: 40px 0 50px;
    background: #fff;
    .container{
      padding: 30px 20px;
    }
    .item-group{
      .item{
        padding: 8px 10px;
        border-bottom: 1px solid #ddd;
        p{
          line-height: 40px;
          color: #777;
          .title{
            font-size: 12px;
            i{
              margin-right: 5px;
            }
            .icon-xiaohai{
              font-size: 19px;
            }
          }
          .header-img{
            display: block;
            width: 40px;
            height: 40px;
            -webkit-background-size: cover;
            background-size: cover;
          }
          span{
            width: 50%;
            input,select{
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
    .save-btn{
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 50px;
      line-height: 50px;
    }
  }
</style>
