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
    }
  },
  getters:{

  },
  mutations:{
    //切换课程类型
    changeLessonType(state, res) {
      state.lessonType = res;
    },
    //改变报名当前步骤
    changeSignIndex(state, res) {
      state.signIndex = res;
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
      return res;
    },
    //获取评价列表
    async getCommentList(context,data) {
      let res = await fetch("get","getCommentList",data);
      return res;
    },
    //获取客服信息
    async getKefuData(context, data) {
      let res = await fetch("post", "getKefuData", data);
      return res;
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
    },
    //提交订单
    async submitVoteAjax(context, data) {
      let res;
      res = await fetch("post", "createVotes",data);
      return res;
    },
    //获取我的订单订单
    async getVoteList(context, data) {
      let res;
      res = await fetch("post", "getVoteList", data);
      return res;
    },
  }
}
