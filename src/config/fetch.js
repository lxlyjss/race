import axios from 'axios'
import qs from 'qs'

//axios.defaults.baseURL = "http://192.168.9.21:8080/";
axios.defaults.baseURL = "http://localhost:8083/";
const ajaxURL = {
  getBanner: "lessonDatas/banner.json",
  getLessonList: "lessonDatas/lessonList.json",
  getLessonDetial: "lessonDatas/lessonDetial.json",
  getCommentList:"lessonDatas/comments.json",
  getKefuData:"lessonDatas/kefu.json",
  getTagList:"lessonDatas/tagList.json",
  getHistoryCommentList:"lessonDatas/comments.json",
  uploadImg: "ucenter/upload/image",
  deleteImg: "ucenter/upload/delImage"
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
