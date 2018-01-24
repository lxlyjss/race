<template>
  <div id="pay" class="bs">
    <div class="header">
      <mt-header title="儿童滑步车培训(初级三期)">
      </mt-header>
    </div>
    <tab-list :index="signIndex"></tab-list>
    <div class="vote-info">
      <p class="title">订单提交成功!</p>
      <p>您的订单: 201845656867454656</p>
      <p>请您在30分钟内完成付款!</p>
      <p>总金额￥<span class="price">7900.00</span></p>
    </div>
    <ul class="pay-way">
      <li @click="payType=0">
        <p>
          <img src="../../assets/images/wechatPay.png">
          <span class="checkbox fr"><i class="iconfont icon-icon1" v-if="payType==0"></i></span>
        </p>
      </li>
      <li @click="payType=1">
        <p>
          <img src="../../assets/images/aliPay.png">
          <span class="checkbox fr"><i class="iconfont icon-icon1" v-if="payType==1"></i></span>
        </p>
      </li>
    </ul>
    <div class="pay-content" v-html="htmlData">

    </div>
    <div class="btn-group">
      <div class="btn" @click="$router.push('/user/myVoteList')">
        <span>查看订单</span>
      </div>
      <div class="btn red-btn" @click="gopay">
        <span>确认支付</span>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import axios from "axios"
  import tabList from "@/components/tabList";
  export default {
    data() {
      return {
        signIndex: 2,
        payType: 0,//支付方式id,默认0为微信支付
        htmlData: ""
      }
    },
    components:{
      tabList
    },
    methods:{
      gopay() {
        this.$router.push("/lesson/payResult")
      }
    }
  }
</script>
<style lang="stylus">
  #pay{
    padding: 110px 0 50px;
    background: #fff;
    .gray-kong{
      height: 10px;
      background: #f7f7f7;
      margin-bottom: 30px;
    }
    .vote-info{
      background: #fff;
      padding: 20px;
      p{
        line-height: 30px;
        text-align: center;
        color: #777;
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
    .pay-way{
      padding: 20px;
      background: #fff;
      li{
        background: #f7f7f7;
        padding: 5px 10px;
        margin-bottom: 10px;
        p{
          img{
            width: 130px;
          }
        }
      }
    }
    .checkbox{
      display: block;
      width: 20px;
      height: 20px;
      border: 1px solid #ccc;
      margin-top: 11px;
      margin-right: 4px;
      text-align: center;
      line-height: 20px;
      background: #fff;
      i{
        color: #26a2ff;
      }
    }
  }
</style>
