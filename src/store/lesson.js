import axios from 'axios'
export default {
  namespaced: true,
  state:{
    banner:{
      list:[]
    },
    lessonList:{
      list:[]
    },
    branchList:{

    },
    lessonDetial:{
      signList:[]
    }
  },
  getters:{

  },
  mutations:{
    setBanner(state,res) {
      state.banner = res
    },
    setLessonList(state, res) {
      state.lessonList = res;
    },
    setDetial(state, res) {
      state.lessonDetial = res
      console.log(res);
    }
  },
  actions:{
    getBanner(context) {
      axios.get('lessonDatas/banner.json').then(res=>{
        console.log(res.data.data);
        context.commit('setBanner',res.data.data);
      })
    },
    getLessonList(context) {
      axios.get('lessonDatas/lessonList.json').then(res=>{
        console.log(res.data.data)
        context.commit("setLessonList",res.data.data)
      })
    }
  }
}
