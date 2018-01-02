import axios from 'axios'
export default {
  namespaced: true,
  state:{
    userInfo:{

    },
    myBabyList:{

    }
  },
  getters:{

  },
  mutations:{
    setUserInfo(state, res) {
      state.userInfo = res;
    },
    setMyBabyList(state, res) {
      state.myBabyList = res;
    }
  },
  actions:{
    getUserInfo(context) {
      axios.get("lessonDatas/userInfo.json").then(res=>{
        console.log(res.data.data);
        context.commit("setUserInfo",res.data.data);
      })
    },
    getMyBabyList(context) {
      axios.get("lessonDatas/babyList.json").then(res=>{
        console.log(res.data.data);
        context.commit("setMyBabyList",res.data.data)
      })
    }
  }
}
