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
    },
    lessonDate:{
      list:[]
    },
    packList:{
      list:[]
    },
    teacherList:{
      list:[]
    },
    commentList:{
      list:[]
    },
    kefuInfo:{

    },
    packList:{
      list:[]
    }
  },
  getters:{

  },
  mutations:{
    //获取banner列表
    setBanner(state,res) {
      state.banner = res
    },
    //获取课程列表
    setLessonList(state, res) {
      state.lessonList = res;
    },
    //获取点击的课程详情
    setDetial(state, res) {
      state.lessonDetial = res
      console.log(res);
    },
    //获取课时详情
    setLessonDate(state, res) {
      state.lessonDate = res;
    },
    //获取课件包列表
    setPackList(state, res) {
      state.packList = res
    },
    //设置教练列表
    setTeacherList(state, res) {
      state.teacherList = res;
    },
    setCommentList(state, res){
      state.commentList = res;
    },
    setKefuInfo(state, res){
      state.kefuInfo = res;
    },
    setPackList(state, res) {
      state.packList = res;
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
    },
    getLessonDate(context) {
      axios.get("lessonDatas/classDate.json").then(res=>{
        console.log(res.data.data);
        context.commit("setLessonDate",res.data.data);
      })
    },
    getPackList(context) {
      axios.get("lessonDatas/classPack.json").then(res=>{
        console.log(res.data.data);
        context.commit("setPackList",res.data.data)
      })
    },
    getTeacherList(context) {
      axios.get("lessonDatas/teachers.json").then(res=>{
        console.log(res.data.data);
        context.commit("setTeacherList",res.data.data);
      })
    },
    getCommentList(context){
      axios.get("lessonDatas/comments.json").then(res=>{
        console.log(res.data.data);
        context.commit("setCommentList",res.data.data);
      })
    },
    getKefuInfo(context) {
      axios.get("lessonDatas/kefu.json").then(res=>{
        console.log(res.data.data);
        context.commit("setKefuInfo",res.data.data);
      })
    },
    getPackList(context) {
      axios.get("lessonDatas/classPack.json").then(res=>{
        console.log(res.data.data);
        context.commit("setPackList",res.data.data);
      })
    }
  }
}
