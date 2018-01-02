import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import lesson_modules from './lesson.js'
import user_modules from './user.js'

Vue.use(Vuex)

const state = {
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
  changeFooter(state,i) {
    state.footer.nowTab = i;
    console.log(i)
  }
}
const actions = {

}
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
