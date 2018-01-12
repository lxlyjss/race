import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = "http://baqidemazha.imwork.net:30229/ucenter/";
// axios.defaults.baseURL = "http://localhost:8083/";
// axios.defaults.baseURL = "http://192.168.9.4:4396/race/dist/";
const ajaxURL = {
  //登录相关
  userLogin: "open/login",//登录接口
  userRegister: "open/register/registerMobile",//注册
  //课程列表相关接口
  getBanner: "lessonDatas/banner.json",
  getLessonList: "lessonDatas/lessonList.json",
  getLessonDetial: "lessonDatas/lessonDetial.json",
  getCommentList:"lessonDatas/comments.json",
  getKefuData:"lessonDatas/kefu.json",
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
