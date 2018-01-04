<template>
  <div id="userInfo" class="bs">
    <div class="header">
      <mt-header title="个人资料" fixed>
        <router-link to="/user/myBaby" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="container">
      <ul class="item-group">
        <li class="item">
          <p class="clear">
            <span class="title fl"><i class="iconfont icon-xingming"></i>头像</span>
            <i class="iconfont icon-arrow-right fr" style="margin-left: 10px;"></i>
            <span class="header-img fr" :style="{backgroundImage: 'url('+userInfo.headImg+')'}"></span>
          </p>
        </li>
        <li class="item">
          <p class="clear">
            <span class="title fl"><i class="iconfont icon-biaoqian"></i>姓名</span>
            <span class="fr">
              <input type="text" v-model="userInfo.nickName" >
            </span>
          </p>
        </li>
        <li class="item">
          <p class="clear">
            <span class="title fl"><i class="iconfont icon-biaoqian"></i>小名</span>
            <span class="fr">
              <input type="text" v-model="userInfo.nickName" >
            </span>
          </p>
        </li>
        <li class="item">
          <p class="clear">
            <span class="title fl"><i class="iconfont icon-xingbie"></i>性别</span>
            <span class="fr" style="text-align:right;">
              <select name="sex" v-model="userInfo.sex" id="sex" style="direction: rtl">
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
              {{userInfo.birthday}}
            </span>
          </p>
        </li>
        <li class="item">
          <p class="clear">
            <span class="title fl"><i class="iconfont icon-xingbie"></i>证件类型</span>
            <span class="fr" style="text-align:right;">
              <select name="sex" v-model="userInfo.sex" id="c_type" style="direction: rtl">
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
              <input type="text" v-model="userInfo.nickName" />
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
  import {mapState, mapActions} from "vuex";
  Vue.component(DatetimePicker.name, DatetimePicker);

  export default {
    data() {
      return {
        pickerValue: "",
        startDate:new Date('1970'),
        endDate: new Date()
      }
    },
    methods:{
      ...mapActions("user",["getUserInfo"]),
      openPicker() {
        this.$refs.picker.open();
      },
      selectedDate(value) {
        this.pickerValue = value.toLocaleDateString().replace(/\//g,"-");
        this.userInfo.birthday = this.pickerValue;
      },
      saveInfo(){
        console.log(this.userInfo);
      }
    },
    computed:{
      ...mapState("user",['userInfo'])
    },
    mounted(){
      this.getUserInfo();
      //this.pickerValue = this.userInfo.birthday
    }
  }
</script>
<style lang="stylus">
  #userInfo{
    padding: 40px 0 50px;
    background: #fff;
    .container{
      padding: 30px 20px;
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
              }
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
