import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  footer:{
    nowTab: 0,
    tabList:[
      {
        name:"赛事",
        limit: 0,
        path:"/index/race",
        imgUrl:require("../assets/images/race.png"),
        imgUrl_a:require("../assets/images/race_active.png")
      },
      {
        name:"课程",
        limit: 1,
        path:"/index/lesson",
        imgUrl:require("../assets/images/lesson.png"),
        imgUrl_a:require("../assets/images/lesson_active.png")
      },
      {
        name:"商城",
        limit: 2,
        path:"/index/shop",
        imgUrl:require("../assets/images/shop.png"),
        imgUrl_a:require("../assets/images/shop_active.png")
      },
      {
        name:"我的",
        limit: 3,
        path:"/index/user",
        imgUrl:require("../assets/images/user.png"),
        imgUrl_a:require("../assets/images/user_active.png")
      }
    ]
  },
  banner:{
    data:[]
  },
  racelist:{
    list:[]
  },
  detial:{

  },
  userInfo:{
    userRaceVoteList:[

    ],
    userCollectionRaceList:[

    ],
    userRaceList:[

    ],
    userConnectList:[

    ]
  }
}
const getters = {
  setDate:state=> {
    function setDateFn(time) {
      let temp = new Date();
      temp.setTime(time*1000);
      console.log(temp.toLocaleDateString())
      return temp.toLocaleDateString()
    }
    for(let i = 0; i < this.state.racelist.list.length;i++){
      state.racelist.list[i].start_time = setDateFn(state.racelist.list[i].start_time)
      state.racelist.list[i].end_time = setDateFn(state.racelist.list[i].end_time)
    }
    return state.racelist
  }
}
const mutations = {
  changeFooter(state,i) {
    state.footer.nowTab = i;
  },
  setBanner(state,res) {
    state.banner = res;
  },
  setRacelist(state,res) {
    state.racelist = res;
  },
  setDetial(state,res) {
    state.detial = res;
  },
  setUserInfo(state,res) {
    state.userInfo = res;
  }
}
const actions = {
  getBanner(context) {
    axios.get("mock/banner.json").then(res=>{
      console.log(res.data.data)
      context.commit("setBanner",res.data.data)
    })
  },
  getRacelist(context) {
    axios.get("mock/racelist.json").then(res=>{
      console.log(res.data.data)
      context.commit("setRacelist",res.data.data)
    })
  },
  getDetial(context) {
    axios.get("mock/raceInfo.json").then(res=>{
      console.log(res.data.data)
      context.commit("setDetial",res.data.data)
    })
  },
  getUserInfo(context) {
    axios.get("mock/user.json").then(res=>{
      console.log(res.data.userInfo)
      context.commit("setUserInfo",res.data.userInfo)
    })
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
