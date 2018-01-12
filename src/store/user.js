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
      res = await fetch("userLogin",data);
      return res;
    },
    //注册接口
    async userRegister(context,data) {
      let res;
      res = await fetch("userRegister",data);
      return res;
    },
    //获取用户数据
    getUserInfo(context) {
      axios.get("lessonDatas/userInfo.json").then(res=>{
        console.log(res.data.data);
        context.commit("setUserInfo",res.data.data);
      })
    },
    //获取宝宝列表
    getMyBabyList(context) {
      axios.get("lessonDatas/babyList.json").then(res=>{
        console.log(res.data.data);
        context.commit("setMyBabyList",res.data.data)
      })
    }
  }
}
