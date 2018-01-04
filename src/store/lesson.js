import axios from 'axios'
import {fetch} from "../config/fetch";

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
    //获取banner图列表
    async getBanner(context) {
      let res = await fetch("get","getBanner");
      return res;
    },
    //获取课程列表
    async getLessonList(context) {
      let res = await fetch("get","getLessonList");
      return res;
    },
    //获取课程详情
    async getLessonDetial(context) {
      let res = await fetch("get","getLessonDetial");
      return res;
    },
    //获取评价列表
    async getCommentList(context) {
      let res = await fetch("get","getCommentList");
      return res;
    },
    //获取客服信息
    async getKefuData(context) {
      let res = await fetch("get","getKefuData");
      return res;
    },
    //获取课程课时列表
    getLessonDate(context) {
      axios.get("lessonDatas/classDate.json").then(res=>{
        console.log(res.data.data);
        context.commit("setLessonDate",res.data.data);
      })
    },
    //获取课件包列表
    getPackList(context) {
      axios.get("lessonDatas/classPack.json").then(res=>{
        console.log(res.data.data);
        context.commit("setPackList",res.data.data)
      })
    },
    //获取教练列表
    getTeacherList(context) {
      axios.get("lessonDatas/teachers.json").then(res=>{
        console.log(res.data.data);
        context.commit("setTeacherList",res.data.data);
      })
    },
    //获取评价页面标签列表
    async getTagList(context) {
      let res;
      res = await fetch("get","getTagList");
      return res;
    },
    //获取评价页面历史评价
    async getHistoryComment(context) {
      let res;
      res = await fetch("get","getHistoryCommentList");
      return res;
    }
  }
}
