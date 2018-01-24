<template>
  <div id="comment">
    <div class="header">
      <mt-header title="结业感悟" fixed>
        <span @click="$router.goBack()" slot="left">
          <mt-button icon="back">返回</mt-button>
        </span>
      </mt-header>
    </div>
    <div class="container">
      <h1 class="title">课程打分</h1>
      <div class="score-w">
        <div class="star-w">
          <span class="star">
            <i class="iconfont icon-star" :class="comment.score>0?'star_a':''" @click="chooseStar(1)"></i>
          </span>
          <span class="star">
            <i class="iconfont icon-star" :class="comment.score>1?'star_a':''" @click="chooseStar(2)"></i>
          </span>
          <span class="star">
            <i class="iconfont icon-star" :class="comment.score>2?'star_a':''" @click="chooseStar(3)"></i>
          </span>
          <span class="star">
            <i class="iconfont icon-star" :class="comment.score>3?'star_a':''" @click="chooseStar(4)"></i>
          </span>
          <span class="star">
            <i class="iconfont icon-star" :class="comment.score>4?'star_a':''" @click="chooseStar(5)"></i>
          </span>
        </div>
      </div>
      <h1 class="title">课程评价</h1>
      <div class="tag-w">
        <span class="tag-list"
              @click="chooseTag(item.id)"
              :class="checkTag(item.id)"
              v-for="(item,key) in tagData.list"
              :key="key"
        >{{item.labelName}}</span>
      </div>
      <div class="content-w">
        <textarea v-model="comment.content" placeholder="写下你想说的话吧......" class="text bs"></textarea>
      </div>
      <div class="img-w">
        <ul class="clear">
          <li class="img-list" v-for="item in comment.imgList" :style="{backgroundImage: `url(${item.img})`}" :key="item.id"><span
            class="delete" @click="deleteImg(item.id)"><i class="iconfont icon-guanbi"></i></span></li>
          <li class="add-img"><input style="display: none;" id="file" type="file" accept="image/*"/><i
            class="iconfont icon-zengjia" @click="chooseImg"></i></li>
        </ul>
      </div>
      <h2><span>以下为历史评价</span></h2>
      <div class="history-w">
        <ul class="group">
          <li class="list" v-for="(item,key) in commentsData.list" :key="key">
            <h1>{{item.createDate}}</h1>
            <p class="star-b">
              <i class="iconfont icon-star star_a" v-if="item.score>0"></i>
              <i class="iconfont icon-star star_a" v-if="item.score>1"></i>
              <i class="iconfont icon-star star_a" v-if="item.score>2"></i>
              <i class="iconfont icon-star star_a" v-if="item.score>3"></i>
              <i class="iconfont icon-star star_a" v-if="item.score>4"></i>
            </p>
            <div class="tag-b">
              <span class="tag-list tag_a" v-for="(item1,key1) in item.labels" :key="key1">{{item1.labelName}}</span>
            </div>
            <div class="content-b">
              {{item.content}}
            </div>
            <ul class="img-b clear">
              <li class="img"
                  v-for="(item2,key2) in item.images"
                  :key="key2"
                  :style="{backgroundImage:`url(${item2})`}"
              >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="red-btn submit-btn" @click="submit">
      <i class="iconfont icon-icon1"></i><span>提交</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import "@/assets/lib/lrz/lrz.all.bundle";
import { mapActions } from "vuex";
import { Indicator, Toast } from "mint-ui";
import { getCache } from "../../config/cache";

export default {
  data() {
    return {
      branchId: "1",
      courseId: "",
      sessionId: "",
      tagData: {
        list: []
      },
      commentsData: {
        list: []
      },
      comment: {
        score: 0,
        tagList: [],
        content: "",
        imgList: []
      }
    };
  },
  methods: {
    ...mapActions(["uploadImgAjax", "deleteImgAjax"]),
    ...mapActions("lesson", ["getTagList", "getHistoryComment","submitComment"]),
    chooseStar(n) {
      this.comment.score = n;
    },
    chooseTag(n) {
      //移除标签
      function removeTag(arr, n) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] == n) {
            arr.splice(i, 1);
          }
        }
        return arr;
      }
      //查找标签列表是否包含此标签
      if (this.comment.tagList.indexOf(n) != -1) {
        this.comment.tagList = removeTag(this.comment.tagList, n);
      } else {
        if (this.comment.tagList.length >= 5) {
          Toast({
            message: "最多选取5个标签哦",
            duration: 1000
          });
          return;
        } else {
          this.comment.tagList.push(n);
        }
      }
      this.checkTag(n);
    },
    checkTag(n) {
      if (this.comment.tagList.indexOf(n) != -1) {
        return "tag_a";
      }
    },
    submit() {
      let ids = this.comment.imgList.map((a,b)=>{
        return a.id;
      });
      ids = ids.join();
      let labels = this.comment.tagList.join();
      let send_data = {
        courseId: this.courseId,
        content: this.comment.content,
        labelIds: labels,
        score: this.comment.score,
        orgId: this.branchId,
        imageIds: ids
      }
      console.log(send_data);
      this.submitComment(send_data).then(res=>{
        console.log(res);
        if(res.status === 0) {
          Toast({
            message: "评价成功!",
            duration: 2000
          });
          this.$router.push("/index/lesson");
        }
      }).catch(err=>{
        console.log(err);
      })
    },
    chooseImg() {
      document.querySelector("#file").click();
    },
    uploadImg() {
      let _this = this;
      document.querySelector("#file").addEventListener("change", function() {
        if (this.files.length === 0) return;
        //打开加载loading
        Indicator.open({
          spinnerType: "fading-circle",
          text: "上传中"
        });
        lrz(this.files[0])
          .then(function(rst) {
            // 处理成功会执行
            Indicator.open({ spinnerType: "fading-circle" });
            _this
              .uploadImgAjax({ image: rst.base64 })
              .then(res => {
                _this.showImg({
                  img: res.data.picture.imageUrl,
                  id: res.data.picture.id
                });
                Indicator.close();
              })
              .catch(res => {
                Toast({
                  message: "上传失败!",
                  duration: 2000
                });
                console.log(res.data);
                Indicator.close();
              });
          })
          .catch(function(err) {
            // 处理失败会执行
            alert("载入图片失败!" + err);
          })
          .always(function() {
            // 不管是成功失败，都会执行
            Indicator.close();
          });
      });
    },
    //展示照片
    showImg(data) {
      this.comment.imgList.push(data);
    },
    //删除图片
    deleteImg(id) {
      Indicator.open({ spinnerType: "fading-circle" });
      console.log(id);
      this.deleteImgAjax({ id: id })
        .then(res => {
          Indicator.close();
          if (res.status == "0") {
            if (res.data.result == 0) {
              this.removeImg(id);
            } else {
              Toast({
                message: res.msg,
                duration: 2000
              });
            }
          } else {
            Toast({
              message: "网络连接失败!",
              duration: 2000
            });
          }
        })
        .catch(res => {
          Toast({
            message: "删除照片失败!",
            duration: 2000
          });
          Indicator.close();
        });
    },
    deleteAll() {
      let ids = [];
      for (let i = 0; i < this.comment.imgList.length; i++) {
        ids.push(this.comment.imgList[i].id);
      }
      console.log(ids);
      this.deleteImg(ids.join());
    },
    //移除页面上的图片;
    removeImg(id) {
      for (let i = 0; i < this.comment.imgList.length; i++) {
        if (this.comment.imgList[i].id == id) {
          this.comment.imgList.splice(i, 1);
          console.log(this.comment.imgList);
        }
      }
    },
    //获取标签列表
    getTagListFn() {
      this.getTagList({
        sessionId: this.sessionId,
        branchId: this.branchId
      })
        .then(res => {
          console.log(res);
          if (res.status === 0) {
            if (res.data.result === 0) {
              this.tagData = res.data;
            } else {
              Toast(res.data.msg);
              this.$router.push("/user/login");
            }
          } else {
            Toast(res.data.msg);
            this.$router.push("/index/lesson");
          }
        })
        .catch(err => {
          Toast("网络错误");
          this.$router.push("/index/lesson");
        });
    },
    //获取历史评价列表
    getHistCommentFn() {
      this.getHistoryComment({
        courseId: this.courseId
      })
        .then(res => {
          console.log(res);
          if (res.status === 0) {
            this.commentsData = res.data;
            console.log(this.commentsData);
          } else {
            Toast(res.data.msg);
            this.$router.push("/index/lesson");
          }
        })
        .catch(err => {
          Toast("网络错误");
          this.$router.push("/index/lesson");
        });
    },
    getBranchData() {
      let branchData = JSON.parse(getCache("branchData"));
      if (branchData) {
        this.branchId = branchData.branchId;
      } else {
        Toast("未找到分舵信息");
        this.$router.push("/index/lesson");
      }
    },
    getSessionId() {
      let sId = getCache("sessionId");
      if (sId) {
        this.sessionId = sId;
        console.log(this.sessionId);
      } else {
        alert("未登录");
        this.$router.push("/user/login");
      }
    },
    setCourseId() {
      if ("courseId" in this.$route.query) {
        this.courseId = this.$route.query.courseId;
      } else {
        alert("未找到课程id");
        this.$router.push("/index/user");
      }
    }
  },
  mounted() {
    this.setCourseId();
    this.getTagListFn();
    this.getHistCommentFn();
    this.uploadImg(); //添加图片上传函数
  }
};
</script>
<style lang="stylus">
#comment {
  padding: 40px 0 50px;
  background: #fff;

  .tag-list {
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 6px;
    font-size: 12px;
    white-space: nowrap;
    margin-right: 10px;
    margin-top: 5px;
    display: inline-block;
  }

  .tag_a {
    background: #fe595f;
    color: #fff;
  }

  .star_a {
    color: #fe595f !important;
  }

  .container {
    padding: 10px 20px;
    color: #777;

    .title {
      text-align: center;
      font-size: 14px;
      line-height: 40px;
    }

    .star-w {
      text-align: center;
      padding: 5px 0;

      span {
        padding: 0 5%;

        i {
          font-size: 26px;
          font-weight: 900;
          color: gray;
        }
      }
    }

    .tag-w {
      .span {
        color: #777;
      }
    }

    .content-w {
      margin-top: 10px;

      .text {
        width: 100%;
        color: #777;
        height: 150px;
        padding: 10px;
        background: #f7f7f7;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
      }
    }

    .img-w {
      margin-top: 10px;

      ul {
        .img-list {
          float: left;
          margin-right: 5px;
          width: 50px;
          height: 50px;
          margin-top: 5px;
          background-image: url('http://www.72bike.com/img/activitys/a1/4.jpg');
          background-size: cover;
          background-position: center;

          .delete {
            float: right;
            background: #e41d1d;
            border-radius: 50%;
            margin-top: -3px;
            margin-right: -3px;
            color: #fff;
            padding: 3px;

            i {
              font-size: 12px;
            }
          }
        }

        .add-img {
          width: 50px;
          height: 50px;
          float: left;
          margin-top: 5px;

          i {
            font-size: 50px;
            color: #ccc;
          }
        }
      }
    }

    h2 {
      text-align: center;
      margin-top: 20px;
      color: #777;
      border-bottom: 1px solid #ddd;

      span {
        position: relative;
        top: 7px;
        background: #fff;
        padding: 5px 10px;
      }
    }
  }

  .history-w {
    font-size: 12px;
    padding: 10px 0;
    color: #777;

    .group {
      .list {
        border-bottom: 1px solid #ddd;
        margin-bottom: 10px;

        h1 {
          line-height: 20px;
        }

        .star-b {
          line-height: 20px;
          margin-bottom: 5px;
          font-weight: 900;
        }

        .tag-b {
          margin-bottom: 10px;

          span {
            padding: 5px 10px;
            background: #fe595f;
            color: #fff;
          }
        }

        .content-b {
          line-height: 20px;
          background: #f7f7f7;
          padding: 10px;
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
        }

        .img-b {
          padding: 10px 0;

          .img {
            float: left;
            width: 30%;
            padding-top: 20%;
            margin-right: 5%;
            background-image: url('http://www.72bike.com/img/activitys/a1/4.jpg');
            background-size: cover;
            background-position: center;
          }

          .img:nth-of-type(3n) {
            margin-right: 0;
          }
        }
      }
    }
  }

  .submit-btn {
    position: fixed;
    bottom: 0;
    z-index: 9;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;

    i {
      margin-right: 5px;
    }
  }
}
</style>
