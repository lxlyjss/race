<template>
  <div id="pay">
    <div class="header-title" v-if="nowPay==1">
      <mt-header title="支付订单" :style="{background:'#1965b5'}">
      </mt-header>
    </div>
    <div class="header-title" v-if="nowPay==2">
      <mt-header title="支付结果" :style="{background:'#1965b5'}">
      </mt-header>
    </div>
    <div class="content" v-if="nowPay==1">
      <div class="vote-info box">
        <p class="item-title">
          <img src="../../assets/images/star.png" style="vertical-align: text-bottom;" width="20">
          订单信息
        </p>
        <div class="vote-detial">
          <p class="fw title">2017儿童滑步车赛事嘉年华北京站</p>
          <p>套餐信息: 一大一小,增加一位宝宝x1,豪华酒店x1</p>
          <p>报名日期: 2017-10-12 12:52:23</p>
          <p>订单金额: ￥ 560.00</p>
        </div>
      </div>
      <div class="pay-way box">
        <p class="item-title">
          <img src="../../assets/images/star.png" style="vertical-align: text-bottom;" width="20">
          支付方式
        </p>
        <ul class="pay-select">
          <li class="active">
            <img src="../../assets/images/weixin.jpg">
            <div class="queding">
              <img src="../../assets/images/queding.png" width="20">
            </div>
          </li>
          <li>
            <img src="../../assets/images/zhifubao.jpg">
            <div class="queding">
              <img src="../../assets/images/queding.png" width="20">
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="content" v-if="nowPay==2">
      <div class="vote-info box info2">
        <p class="item-title">
          <img src="../../assets/images/star.png" style="vertical-align: text-bottom;" width="20">
          订单信息
        </p>
        <div class="vote-detial">
          <p class="fw title">2017儿童滑步车赛事嘉年华北京站</p>
          <p>套餐信息: 一大一小,增加一位宝宝x1,豪华酒店x1</p>
          <p>报名日期: 2017-10-12 12:52:23</p>
          <p>订单金额: ￥ 560.00</p>
        </div>
        <div class="clear circle-box">
          <div class="circle fl">
            <img src="../../assets/images/queding.png" width="20">
          </div>
          <div class="circle-text fl">支付成功</div>
        </div>
        <div class="group-btn">
          <p @click="$router.push('/race/voteList')">查看订单</p>
          <p @click="$router.push('/index/race')">返回首页</p>
        </div>
      </div>
    </div>
    <div class="pay-btn" v-if="nowPay==1" @click="nowPay=2">
      立即支付
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        nowPay: 1
      }
    },
    created() {
      $(window).scrollTop(0);
    }
  }
</script>
<style lang="stylus">
  #pay{
    .content{
      padding: .3rem;
      .info2{
        height: calc(100vh - 90px);
        height: -webkit-calc(100vh - 90px);
      }
      .box{
        padding: .3rem;
        background: #fff;
        .item-title{
          line-height: 30px;
          border-bottom: 1px solid #ccc;
          padding-left: 10px;
        }
        .vote-detial{
          padding: .3rem;
          .title{
            font-size: 16px;
          }
          p{
            line-height: 20px;
          }
        }
        .pay-select{
          li{
            text-align: center;
            height: 30px;
            border: 1px solid #ccc;
            margin-top: 10px;
            padding: .2rem;
            position: relative;
            img{
              height: 100%;
            }
            .queding{
              position: absolute;
              top: 0;
              right: 0;
              background: #008000;
              display: none;
            }
          }
          .active{
            border-color: #008000;
            border-width: 3px;
            .queding{
              display: block;
            }
          }
        }
        .circle-box{
          width: 100px;
          margin: 0 auto;
          .circle{
            width: 30px;
            height: 30px;
            background: green;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            img{
              margin: 5px;
            }
          }
          .circle-text{
            height: 30px;
            line-height: 30px;
            margin-left: 10px;
          }
        }
        .group-btn{
          padding: 1rem 0;
          p{
            line-height: 40px;
            background: green;
            text-align: center;
            color: #fff;
            margin-bottom: 10px;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
          }
          p:nth-of-type(1){
            background: #1965b5;
          }
        }
      }

    }
    .pay-btn{
      width: 100%;
      background: green;
      height: 40px;
      position: fixed;
      bottom: 0;
      line-height: 40px;
      text-align: center;
      color: #fff;
    }
  }
</style>
