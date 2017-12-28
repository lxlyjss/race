<template>
  <div id="userInfo" class="bs">
    <div class="header">
      <mt-header title="个人资料" fixed>
        <router-link to="/index/user" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="container">
      <ul class="item-group">
        <li class="item">
          <p class="clear">
            <span class="title fl">头像</span>
            <span class="header-img fr" :style="{backgroundImage: 'url('+userInfo.img+')'}"></span>
          </p>
        </li>
        <li class="item">
          <p class="clear">
            <span class="title fl">姓名</span>
            <span class="fr">
              <input type="text" v-model="userInfo.name" >
            </span>
          </p>
        </li>
        <li class="item">
          <p class="clear">
            <span class="title fl">性别</span>
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
            <span class="title fl">年龄</span>
            <span class="fr"><input type="number" v-model="userInfo.age"></span>
          </p>
        </li>
        <li class="item">
          <p class="clear">
            <span class="title fl">出生日期</span>
            <span class="fr" @click="openPicker()" style="text-align:right;display: block;height: 40px;">
              {{userInfo.birthday}}
            </span>
          </p>
        </li>
        <li class="item">
          <p class="clear"><span class="title fl">联系电话</span><span class="fr"><input type="tel" v-model="userInfo.phone"></span></p>
        </li>
        <li class="item">
          <p class="clear"><span class="title fl">电子邮箱</span><span class="fr"><input type="email" v-model="userInfo.email"></span></p>
        </li>
      </ul>
    </div>
    <div class="red-btn tc save-btn" @click="saveInfo">
      保存
    </div>
    <div class="date-box">
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
  </div>
</template>
<script type="text/ecmascript-6">
  import { DatetimePicker } from 'mint-ui';
  import {mapState} from "vuex";

  import Vue from 'vue';
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
      ...mapState(['userInfo'])
    },
    mounted(){
      this.pickerValue = this.userInfo.birthday
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
          padding: 0 10px;
          border-bottom: 1px solid #ddd;
          p{
            line-height: 40px;
            color: #777;
            .title{
              font-size: 12px;
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
