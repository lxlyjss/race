import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import lesson_modules from './lesson.js'
import user_modules from './user.js'
import { fetch } from "../config/fetch"

Vue.use(Vuex)

const state = {
  //当前浏览器数据
  isPc: false,//是否是pc端
  isWechat: false,//是否是微信页面
  isLogined: false,//是否有登录
  //底部tab数据
  footer:{
    nowTab: 0,
    tabList:[
      {
        name:"课程",
        limit: 0,
        path:"/index/lesson",
        icon:"icon-zixingche"
      },
      {
        name:"活动",
        limit: 1,
        path:"/index/race",
        icon:"icon-icon"
      },
      {
        name:"商城",
        limit: 2,
        path:"/index/shop",
        icon:"icon-gouwu"
      },
      {
        name:"我的",
        limit: 3,
        path:"/index/user",
        icon:"icon-ren"
      }
    ]
  }
}
const getters = {

}
const mutations = {
  //切换底部tab显示
  changeFooter(state,i) {
    state.footer.nowTab = i;
  },
  //更改pc端还是移动端
  changeIsPc(state, res){
    state.isPc = res;
  },
  //更改是否微信浏览器
  changeIsWechat(state, res) {
    state.isWechat = res;
  },
  changeLogined(state, res) {
    state.isLogined = res;
  }
};
const actions = {
  //上传图片接口
  async uploadImgAjax(context, data) {
    let res;
    res = await fetch("post","uploadImg",data);
    return res;
  },
  //删除图片接口
  async deleteImgAjax(context, data) {
    let res;
    res = await fetch("post","deleteImg",data);
    return res;
  }
};
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules:{
    lesson: lesson_modules,
    user: user_modules
  }

})
