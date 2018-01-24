import axios from 'axios'
import {fetch} from "../config/fetch";

export default {
  namespaced: true,
  state:{
    lessonType: 0,//首页切换课程类型当前定位
    signIndex: 0,//报名页面当前进行第几步
    branchData:{
      cityShow: false,
      tempBranch:"",
      branch:"全部",
      branchId: "",
      slots: [
        {
          flex: 1,
          defaultIndex: 1,
          values: [],
          className: 'slot1',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: [],
          className: 'slot3',
          textAlign: 'center'
        }
      ]
    },
    formatBranchList:{},
    branchList:{
      list:[]
    },
    lessonDetial:{//因为课程详情里的信息很多地方需要用到,所以这里需要全局储存课程详情
      course:{
        signList: [],//已报名列表
      },
      periods: [],//课程日期表
      coursewares: [],//课件包
      coachs: []//教练列表
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
    },
    setBranchList(state, res) {
      state.branchList = res;
    },
    setFormatBranch(state, res) {//将所获取的数据整理
      state.formatBranchList = res;
    },
    setSlotsByLxl(state, res) {//给slots设置初始化数据
      state.branchData.slots[0].values = res;
    },
    setBranchData(state, res) {//设置branchData数据
      state.branchData[res.type] = res.value;
    }
  },
  actions:{
    //获取分部列表
    async getBranchList(context) {
      let res = await fetch("get","getBranchList");
      context.commit("setBranchList",res.data);
      return res;
    },
    //获取多个数据
    async getIndexData(context,data) {
      let arr = [];
      try{
        let res1 = await fetch("get","getLessonList",data);//获取课程列表
        arr.push(res1);
      }catch(e) {
        arr.push({status:1});
      }
      try{
        let res2 = await fetch("get","getBanner");//获取banner图列表
        arr.push(res2);
      }catch(e) {
        arr.push({status:1});
      }
      return arr;
    },
    //获取课程详情
    async getLessonDetial(context,data) {
      let res = await fetch("get","getLessonDetial",data);
      context.commit("setLessonDetial",res.data);
      return res;
    },
    //获取评价列表
    async getCommentList(context,data) {
      let res = await fetch("get","getCommentList",data);
      return res;
    },
    //获取客服信息
    async getKefuData(context) {
      let res = await fetch("post","getKefuData");
      context.commit("setKefuData",res);
    },
    //获取评价页面标签列表
    async getTagList(context,data) {
      let res;
      res = await fetch("post","getTagList",data);
      return res;
    },
    //获取评价页面历史评价
    async getHistoryComment(context,data) {
      let res;
      res = await fetch("post","getHistoryCommentList",data);
      return res;
    },
    //提交评价
    async submitComment(context, data) {
      let res;
      res = await fetch("post", "sendComment", data);
      return res;
    },
    //获取我的课程信息
    async getMyLessonList(context) {
      let res;
      res = await fetch("post","getMyLessonList");
      return res;
    }
  }
}
