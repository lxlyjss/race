<template>
  <div id="clipPhoto">
    <div class="header">
      <mt-header title="裁剪上传图片" fixed>
      </mt-header>
    </div>
    <div id="clipArea"></div>
    <div class="chooseBtn">
      <span id="chooseBtn" @click="chooseImg">选择图片</span>
    </div>
    <div class="btn-group">
      <input type="file" id="file" accept="image/*" style="display: none;">
      <span class="btn cancle" @click="returnUserInfo">取消</span>
      <span class="btn red-btn" id="clipBtn" >确定并上传</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import PhotoClip from "photoclip"
  import {Indicator,Toast} from "mint-ui"
  import {mapState,mapMutations, mapActions} from "vuex";

  export default {
    methods: {
      ...mapActions(["uploadImgAjax"]),
      //图片裁剪初始化
      photoClipFun() {
        let self = this;
        new PhotoClip('#clipArea', {
          size: 260,
          outputSize: 640,
          //adaptive: ['60%', '80%'],
          file: '#file',
          ok: '#clipBtn',
          loadStart: function () {
            console.log('开始读取照片');
            Indicator.open({
              spinnerType: "fading-circle"
            });
          },
          loadComplete: function () {
            console.log('照片读取完成');
            Indicator.close();
          },
          //确认裁剪
          done: function (dataURL) {
            Indicator.open({spinnerType: "fading-circle"});
            self.uploadImgAjax({image: dataURL}).then(res=>{
              Indicator.close();
              console.log(res)
              if(res.status===0) {
                Toast({
                  message:"上传成功!",
                  duration: 2000
                });
                self.$emit("changeImgUrl", res.data.picture.imageUrl);
                self.returnUserInfo();
              }else{
                Toast({
                  message:res.msg,
                  duration: 2000
                });
              }
            }).catch(res=>{
              Toast({
                message:"网络错误",
                duration: 2000
              });
              Indicator.close();
            });
          },
          fail: function (msg) {
            alert(msg);
          }
        });
      },
      chooseImg() {
        document.getElementById("file").click();
      },
      returnUserInfo() {
        this.$emit("changeTabIndex", 0);
      }
    },
    mounted() {
      this.photoClipFun();
    }
  }
</script>
<style lang="stylus">
  #clipPhoto {
    #clipArea {
      height: 440px;
      margin-top: 40px;
    }
    .chooseBtn {
      text-align: center;
      padding: 10px;
      line-height: 50px;
      #chooseBtn {
        background: #26a2ff;
        padding: 5px 20px;
        color: #fff;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
      }
    }
    .btn-group {
      span {
        text-align: center;
      }
    }
  }
</style>
