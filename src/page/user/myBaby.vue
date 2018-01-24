<template>
  <div id="myBaby" class="bs">
    <div class="header">
      <mt-header title="我的宝宝" fixed>
        <router-link to="/index/user" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="container">
      <ul class="group">
        <li class="item dflex" v-for="(item,key) in myBabyList.list" :key="key">
          <div class="left">
            <div class="img circle" :style="{backgroundImage: `url(${item.image})`}"></div>
          </div>
          <div class="right">
            <h1>
              <i class="iconfont icon-nan1" v-show="item.sex=='0'"></i>
              <i class="iconfont icon-nv" v-show="item.sex=='1'"></i>
              {{item.babyRealname}}
            </h1>
            <p class="number">{{item.c_number}}</p>
            <p class="edit-btn">
              <span @click="editBaby(item.id)"><i class="iconfont icon-edit"></i>编辑</span>
              <span @click="deleteBaby(item.id)"><i class="iconfont icon-shanchu"></i>删除</span></p>
          </div>
        </li>
      </ul>
    </div>
    <div class="red-btn tc add-btn" @click="addBaby()">
      <i class="iconfont icon-tianjiahaoyou" style="margin-right: 10px;"></i>新增宝宝
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapState, mapActions} from "vuex"
  import {Toast, Indicator} from "mint-ui";
  import {getCache} from "../../config/cache"

  export default {
    data() {
      return {
        sessionId: "",
        myBabyList: {
          list: []
        }
      }
    },
    methods: {
      ...mapActions("user", ["getMyBabyList","deleteBabyAjax"]),
      addBaby() {
        this.$router.push("/user/addBaby")
      },
      editBaby(id) {
        this.$router.push({path: "/user/addBaby", query: {babyId: id}});
      },
      deleteBaby(id) {
        if(!id){
          alert("未找到宝宝id")
          return
        }
        this.deleteBabyAjax({
          sessionId: this.sessionId,
          babyId: id
        }).then(res=>{
          console.log(res);
          if(res.status===0) {
            Toast({
              message: "删除成功",
              duration: 2000
            })
            this.getList();
          }
        }).catch(err=>{
          conosle.log(err)
          Toast({
            message: "网络错误",
            duration: 1000
          });
        })
      },
      getList() {
        let uId = JSON.parse(getCache("user")).id;
        let sId = getCache("sessionId");
        if (uId) {
          Indicator.open({spinnerType: "fading-circle"});
          this.getMyBabyList({
            userId: uId,
            sessionId: sId
          }).then(res => {
            console.log(res)
            Indicator.close();
            if (res.status === 0) {
              this.myBabyList = res.data;
            } else {
              Toast({
                message: res.msg,
                duration: 2000
              });
            }
          }).catch(err => {
            Indicator.close();
            console.log(err);
            Toast({
              message: "网络错误",
              duration: 2000
            });
          });
        } else {
          Toast("未登录,请重新登录");
          this.$router.push("/user/login");
        }
      },
      getSessionId() {
        let sId = getCache("sessionId");
        if(sId) {
          this.sessionId = sId;
        }else{
          alert("未登录");
          this.$router.push("/user/login");
        }
      }
    },
    created() {
      this.getSessionId();
      this.getList();
    }
  }
</script>
<style lang="stylus">
  #myBaby {
    padding: 40px 0 50px;
    height: auto;
    min-height: 100%;
    background: #fff;
    .container {
      padding: 20px;
      .group {
        .item {
          padding: 10px 0;
          border-bottom: 1px solid #ddd;
          & > div {
            flex: 1 1 auto;
          }
          .left {
            .img {
              width: 2rem;
              height: 2rem;
              -webkit-background-size: cover;
              background-size: cover;
              margin: 0 auto;
            }
          }
          .right {
            h1 {
              font-size: 18px;
              line-height: 30px;
              .icon-nan1 {
                color: #60de2e;
              }
              .icon-nv {
                color: #e03fda;
              }
            }
            .number {
              color: #777;
              line-height: 20px;
            }
            .edit-btn {
              color: #777;
              line-height: 30px;
              span:first-of-type {
                color: #26a2ff;
                margin-right: 20px;
              }
              span:last-of-type {
                color: #d81e06;
              }
            }
          }
        }
      }
    }
    .add-btn {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 50px;
      line-height: 50px;
    }
  }
</style>
