import axios from 'axios'
import {fetch} from "../config/fetch";

export default {
  namespaced: true,
  state:{
    lessonType: 0,//首页切换课程类型当前定位
    signIndex: 0,//报名页面当前进行第几步
    branchList:{

    },
    lessonDetial:{//因为课程详情里的信息很多地方需要用到,所以这里需要全局储存课程详情
      signList: [],
      classDate: [],
      classPack: [],
      teachers: []
    },
    kefuData:{//客服信息其他页面内也需要,所以也储存

    },
    myLessonList:{//全局储存我的课程数据
      list:[],
    },
    classShow:[]//储存课时详情是否显示
  },
  getters:{

  },
  mutations:{
    //切换课程类型
    changeLessonType(state, res) {
      state.lessonType = res;
    },
    setKefuData(state, res){
      state.kefuData = res;
    },
    //存储课程详情
    setLessonDetial(state, res) {
      state.lessonDetial = res;
    },
    //改变报名当前步骤
    changeSignIndex(state, res) {
      state.signIndex = res;
    },
    //设置我的课程列表
    setMyLessonList(state, res) {
      state.myLessonList = res;
      if(res.list) {
        for(let i = 0;i< res.list.length;i++){
          state.classShow.push({show:i==0?true:false})
        }
      }
    },
    changeClassShow(state, key) {
      state.classShow[key].show = !state.classShow[key].show;
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
    //测试获取多个数据
    async getIndexData(context) {
      let arr = [];
      try{
        let res1 = await fetch("get","getLessonList");
        arr.push(res1);
      }catch(e) {
        arr.push({status:1});
      }
      try{
        let res2 = await fetch("get","getBanner");
        arr.push(res2);
      }catch(e) {
        arr.push({status:1});
      }
      return arr;
    },
    //获取课程详情
    async getLessonDetial(context) {
      let res = await fetch("get","getLessonDetial");
      context.commit("setLessonDetial",res.data);
    },
    //获取评价列表
    async getCommentList(context) {
      let res = await fetch("get","getCommentList");
      return res;
    },
    //获取客服信息
    async getKefuData(context) {
      let res = await fetch("get","getKefuData");
      context.commit("setKefuData",res);
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
    },
    //获取我的课程信息
    async getMyLessonList(context) {
      let res;
      res = await fetch("get","getMyLessonList");
      context.commit("setMyLessonList",res.data);
    }
  }
}
