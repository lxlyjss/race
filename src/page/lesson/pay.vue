<template>
  <div id="pay" class="bs">
    <div class="header">
      <mt-header title="儿童滑步车培训(初级三期)">
      </mt-header>
    </div>
    <div class="vote-info">
      <p class="title">订单提交成功!</p>
      <p>您的订单: 201845656867454656</p>
      <p>请您在30分钟内完成付款!</p>
      <p>总金额￥<span class="price">7900.00</span></p>
    </div>
    <ul class="pay-way">
      <li>
        <p><label for="wechatPay"><img src="../../assets/images/wechatPay.png"><input class="fr" type="radio" name="payWay" checked id="wechatPay"></label></p>
      </li>
      <li>
        <p><label for="aliPay"><img src="../../assets/images/aliPay.png"><input class="fr" type="radio" name="payWay" id="aliPay"></label></p>
      </li>
    </ul>
    <div class="btn-group">
      <div class="btn" @click="active='tab-container2'">
        <span>查看订单</span>
      </div>
      <div class="btn red-btn" @click="$router.push('/lesson/payResult')">
        <span>确认支付</span>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

</script>
<style lang="stylus">
  #pay{
    padding: 40px 0 50px;
    .vote-info{
      padding: 50px 20px;
      background: #fff;
      margin-top: 10px;
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
      margin-top: 10px;
      background: #fff;
      li{
        background: #f7f7f7;
        padding: 5px 10px;
        margin-bottom: 10px;
        p{
          label{
            display: block;
            height: 100%;
            width: 100%;
            input{
              margin-top: 14px;
            }
          }
          img{
            width: 130px;
          }
        }
      }
    }
  }
</style>
