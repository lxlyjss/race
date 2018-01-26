import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = "http://sport.72bike.com/ucenter/";
// axios.defaults.baseURL = "http://localhost:8083/";
// axios.defaults.baseURL = "http://192.168.9.4:4396/race/dist/";
const ajaxURL = {
  //登录相关
  userLogin: "open/login",//登录接口
  userRegister: "open/register/registerMobile",//注册
  getCode: "open/code/getCode",//获取验证码接口
  checkPhoneHasReg: "open/user/exist",//获取手机号有没有注册过接口
  findPwAjax: "open/user/forgetPassword",//忘记密码重置接口
  //课程列表相关接口
  getBanner: "open/bannerTraining/banners",//获取 轮播图
  getLessonList: "open/course/courses",//获取课程列表
  getLessonDetial: "open/course/courseInfo",//获取课程详情
  getVoteList: "open/order/orders",//获取我的订单列表
  getCommentList:"/open/graduation/perceptions",//获取评论列表
  getKefuData:"open/customerService/getCustomer",//获取客服信息
  getBranchList: "open/organization/organizations",//获取省份和分部列表
  hasOtherVote: "open/order/unpaid",//是否还有未支付的订单
  getMyCoupons: "open/coupon/myCoupons",//优惠券列表
  //评价相关接口
  getTagList:"/open/label/labels",
  getHistoryCommentList:"/open/graduation/evaluates",
  sendComment: "open/graduation/saveEvaluation",
  //订单相关
  createVotes: "/open/order/createOrder",
  //上传图片删除图片相关接口
  uploadImg: "upload/image",
  deleteImg: "upload/delImage",
  //个人中心相关接口
  getMyLessonList: "/open/course/myCourses",
  getUserInfo:"open/user/userInfo",//获取用户资料接口
  editUserInfo: "open/user/updateUser",//修改用户资料
  getMyBabyList: "open/baby/myBaby",//获取我的宝宝列表
  updateMyBaby:"open/baby/updateBaby",//修改我的宝宝信息
  addMyBaby: "open/baby/saveBaby",//增加宝宝
  delMyBaby: "open/baby/delBaby",//删除我的宝宝
  bindPhone: "open/user/updateMobile",//绑定手机号

};

export var fetch = async(type = 'POST', url = '', data = {}) => {
  let result
  type = type.toUpperCase()
  url = ajaxURL[url]
  if (type === 'GET') {
    await axios.get(url, {
      params: data
    })
      .then(res => {
        result = res.data
      })
  } else if (type === 'POST') {
    await axios.post(url, qs.stringify(data))
      .then(res => {
        result = res.data
      })
  }
  return result
}
