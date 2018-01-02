<template>
  <div id="myBaby" class="bs">
    <div class="header">
      <mt-header title="个人资料" fixed>
        <router-link to="/index/user" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="container">
      <ul class="group">
        <li class="item dflex" v-for="(item,key) in myBabyList.list" :key="key">
          <div class="left">
            <div class="img circle" :style="{backgroundImage: `url(${item.headImg})`}"></div>
          </div>
          <div class="right">
            <h1>
              <i class="iconfont icon-nan1" v-show="item.sex=='0'"></i>
              <i class="iconfont icon-nv" v-show="item.sex=='1'"></i>
              {{item.name}}
            </h1>
            <p class="number">{{item.c_number}}</p>
            <p class="edit-btn">
              <span><i class="iconfont icon-edit"></i>编辑</span>
              <span><i class="iconfont icon-shanchu"></i>删除</span></p>
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
  export default {
    data() {
      return {

      }
    },
    methods:{
      ...mapActions("user",["getMyBabyList"]),
      addBaby() {
        this.$router.push("/user/addBaby")
      }
    },
    computed:{
      ...mapState("user",["myBabyList"])
    },
    created() {
      this.getMyBabyList();
    }
  }
</script>
<style lang="stylus">
  #myBaby{
    padding: 40px 0 50px;
    height: auto;
    min-height: 100%;
    background: #fff;
    .container{
      padding: 20px;
      .group{
        .item{
          padding: 10px 0;
          border-bottom: 1px solid #ddd;
          &>div{
            flex: 1 1 auto;
          }
          .left{
            .img{
              width: 2rem;
              height: 2rem;
              -webkit-background-size: cover;
              background-size: cover;
              margin: 0 auto;
            }
          }
          .right{
            h1{
              font-size: 18px;
              line-height: 30px;
              .icon-nan1{
                color: #60de2e;
              }
              .icon-nv{
                color: #e03fda;
              }
            }
            .number{
              color: #777;
              line-height: 20px;
            }
            .edit-btn{
              color: #777;
              line-height: 30px;
              span:first-of-type{
                color: #26a2ff;
                margin-right: 20px;
              }
              span:last-of-type{
                color: #d81e06;
              }
            }
          }
        }
      }
    }
    .add-btn{
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 50px;
      line-height: 50px;
    }
  }
</style>
