import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = "http://baqidemazha.imwork.net:30229/ucenter/";
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
  getCommentList:"lessonDatas/comments.json",//获取评论列表
  getKefuData:"lessonDatas/kefu.json",//获取客服信息
  getBranchList: "open/organization/organizations",//获取省份和分部列表
  //评价相关接口
  getTagList:"lessonDatas/tagList.json",
  getHistoryCommentList:"lessonDatas/comments.json",
  //上传图片删除图片相关接口
  uploadImg: "ucenter/upload/image",
  deleteImg: "ucenter/upload/delImage",
  //个人中心相关接口
  getMyLessonList: "lessonDatas/myLessonList.json",
};

export var fetch = async(type = 'POST', url = '', data = {}) => {
  let result
  type = type.toUpperCase()
  url = ajaxURL[url]
  if (type === 'GET') {
    await axios.get(url, { params: data })
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
