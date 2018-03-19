<template>
  <div id="coupon">
    <div class="header" style="border-bottom: 1px solid #ccc;">
      <mt-header title="我的优惠券" fixed>
        <router-link to="/index/user" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="coupon-box">
        <p class="tc">折扣券已放入"个人中心"-我的优惠券中</p>
        <ul class="coupon-group">
          <li class="coupon-list" v-for="item in coupon.list" :key="item.id">
            <label for="coupon1" class="dflex">
              <div class="coupon-img" style="position: re;">
                <img src="../../assets/images/coupon.png">
                <p class="tc" style="position: absolute;top: 40%;">
                  <span style="color: white;font-size: 18px" v-if="item.type==0">{{item.price}}折</span>
                  <span style="color: white;font-size: 18px" v-if="item.type==1">{{item.price}}元</span>
                </p>
              </div>
              <div class="coupon-info">
                <p>
                  {{item.couponName}}
                  <span class="fr" style="color: green;font-size: 18px" v-if="item.type==0">{{item.price}}折</span>
                  <span class="fr" style="color: green;font-size: 18px" v-if="item.type==1">{{item.price}}元</span>
                </p>
                <p>
                  <br>
                </p>
                <p>
                  <span v-if="item.type==0">折扣券</span>
                  <span v-if="item.type==1">抵扣券</span>
                  <span class="fr">仅限本人使用</span>
                </p>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        coupon:{
          list:[]
        }
      }
    },
    methods:{
      ...mapActions("user",['getCouponList']),
      getMyCouponList() {
        let send = {
          userId: this.$route.query.userId
        };
        this.getCouponList(send).then(res=>{
          if(res.status == "0") {
            console.log(res);
            this.coupon.list = res.data.list;
          }
        })
      }
    },
    mounted(){
      if("userId" in this.$route.query) {
        this.getMyCouponList();
      }
    }
  }
</script>
<style lang="stylus">
  #coupon{
    background: #fff;
    .coupon-box{
      padding: 20px;
    }
    .coupon-group{
      margin-top: 10px;
      .coupon-list{
        padding: 10px;
        .coupon-img{
          flex: 1 1 auto;
          width: 20%;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .coupon-info{
          width: 70%;
          flex: 2 1 auto;
          background: #f7f7f7;
          padding: 10px;
          p{
            line-height: 16px;
          }
        }
      }
    }
  }
</style>
