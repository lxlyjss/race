<template>
  <div id="payResult" class="bs">
    <div class="header">
      <mt-header :title="title">
      </mt-header>
    </div>
    <div class="vote-info">
      <p class="title tc">支付成功!</p>
      <p class="tc">总金额￥<span class="price">{{order.totalPrice}}</span></p>
    </div>
    <div class="coupon-box">
      <p class="tc">折扣券已放入"个人中心"-我的优惠券中</p>
      <ul class="coupon-group">
        <li class="coupon-list" v-for="item in couponList">
          <label for="coupon1" class="dflex">
            <div class="coupon-img">
              <img src="../../assets/images/coupon.png">
            </div>
            <div class="coupon-info">
              <p>
                {{item.couponName}}
                <span class="fr" style="color: green;font-size: 18px" v-if="item.type==0">{{item.price}}折</span>
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
    <div class="connect-box">
      <p class="tc">报名后如有问题可直接联系客服</p>
      <p class="tc">客服电话: {{kefuData.customerService.phone}}</p>
      <p class="tc">微信联系: {{kefuData.customerService.name}}</p>
      <p class="tc"><img :src="kefuData.customerService.image" width="50"></p>
    </div>
    <div class="btn-group">
      <div class="btn" @click="$router.push('/index/lesson')">
        <span><i class="iconfont icon-home1"></i> 返回首页</span>
      </div>
      <div class="btn red-btn" @click="$router.push('/lesson/myLesson')">
        <span><i class="iconfont icon-note"></i> 查看课程</span>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {getCache} from "@/config/cache"
  import {mapActions} from "vuex";
  import {Toast} from "mint-ui"
  export default {
    data() {
      return {
        title: "",
        order:{},
        kefuData:{
          customerService:{}
        },
        branchData:{},
        couponList:[]
      }
    },
    methods:{
      ...mapActions("lesson",["getOrderPay","getKefuData","getCouponData"]),
      //根据订单id获取订单信息
      getOrderInfo() {
        let send = {
          orderId: this.$route.query.orderId
        };
        console.log(send);
        this.getOrderPay(send).then(res=>{
          console.log(res);
          if(res.status == "0") {
            this.order = res.data.order;
            this.title = res.data.title;
            this.getCoupon();
          }else{
            Toast(res.msg);
          }
        }).catch(err=>{
          console.log(err);
        });
      },
      getKefuInfo() {
        console.log(this.branchData);
        this.getKefuData({
          branchId: this.branchData.branchId,
          type: 0
        }).then(res => {
          console.log(res);
          if (res.status == 0) {
            this.kefuData = res.data;
          } else {
            Toast(res.msg);
          }
        }).catch(err => {
          console.log(err);
          Toast("网络错误!获取客服信息失败");
          console.log(err);
        });
      },
      getCoupon() {
        this.getCouponData({
          orderId: this.$route.query.orderId
        }).then(res => {
          console.log(res);
          if (res.status == 0) {
            this.couponList = res.data.list;
          } else {
            Toast(res.msg);
          }
        }).catch(err => {
          console.log(err);
          Toast("网络错误!获取客服信息失败");
          console.log(err);
        });
      },
    },
    mounted() {
      let branchData = getCache("branchData");
      if(branchData) {
        this.branchData = JSON.parse(getCache("branchData"));
        this.getKefuInfo();
      }
      if("orderId" in this.$route.query) {
        this.getOrderInfo();
      }else{
        alert("orderId=null");
      }
    }
  }
</script>
<style lang="stylus">
  #payResult{
    font-size: 12px;
    padding: 40px 0 50px;
    background: #fff;
    color: #777;
    .vote-info{
      padding: 20px 20px;
      p{
        line-height: 30px;
        .price{
          font-size: 20px;
          color: #000;
        }
      }
      .title{
        font-size: 20px;
        color: #000;
      }
    }
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
    .connect-box{
      padding: 0 20px;
      p{
        line-height: 30px;
      }
    }
  }
</style>
