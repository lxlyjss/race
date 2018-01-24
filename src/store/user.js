import axios from 'axios'
import {fetch} from "../config/fetch";
export default {
  namespaced: true,
  state:{
    //存储用户资料信息
    userInfo:{

    },
    myBabyList:{
      list:[]
    },
    babyInfo:{

    }
  },
  getters:{

  },
  mutations:{
    //设置用户数据
    setUserInfo(state, res) {
      state.userInfo = res;
    },
    setMyBabyList(state, res) {
      state.myBabyList = res;
    },
    //用户资料页面设置图片url
    setUserPhotoUrl(state, res) {
      state.userInfo.headImg = res;
    },
    //设置宝宝头像上传
    setBabyPhotoUrl(state, res) {
      state.babyInfo.headImg = res;
    },
    setBabyInfo(state, res) {
      state.babyInfo = res;
    },
  },
  actions:{
    //登录接口
    async userLogin(context,data) {
      let res;
      res = await fetch("post","userLogin",data);
      return res;
    },
    //注册接口
    async userRegister(context,data) {
      let res;
      res = await fetch("post","userRegister",data);
      return res;
    },
    //获取验证码接口
    async getCodeAjax(context,data) {
      let res;
      res = await fetch("post","getCode",data);
      return res;
    },
    //判断手机号有未被注册过
    async checkPhoneHasReg(context,data) {
      let res;
      res = await fetch("post","checkPhoneHasReg",data);
      return res;
    },
    //找回密码接口
    async findPwAjax(context,data) {
      let res;
      res = await fetch("post","findPwAjax",data);
      return res;
    },
    //绑定手机接口
    async userBindPhone(context, data) {
      let res;
      res = await fetch("post", "bindPhone", data);
      return res;
    },
    //获取用户数据
    async getUserInfo(context,data) {
      let res;
      res = await fetch("post","getUserInfo",data);
      return res;
    },
    //修改用户资料
    async changeUserInfo(context,data) {
      let res;
      res = await fetch("post","editUserInfo",data);
      return res;
    },
    //获取宝宝列表
    async getMyBabyList(context, data) {
      let res;
      res = await fetch("post","getMyBabyList",data);
      return res;
    },
    //增加宝宝
    async saveBabyAjax(context, data) {
      console.log(data);
      let res;
      res = await fetch("post", "addMyBaby", data);
      return res;
    },
    //修改宝宝
    async updateBabyAjax(context, data) {
      console.log(data);
      let res;
      res = await fetch("post", "updateMyBaby", data);
      return res;
    },
    //删除宝宝
    async deleteBabyAjax(context, data) {
      console.log(data);
      let res;
      res = await fetch("post", "delMyBaby", data);
      return res;
    },
  }
}
