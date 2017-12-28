<template>
  <div id="pay" class="bs">
    <div class="header">
      <mt-header title="儿童滑步车培训(初级三期)">
      </mt-header>
    </div>
    <div class="vote-info">
      <p>支付结果</p>
      <p class="title">支付成功!</p>
      <p>总金额￥<span class="price">7900.00</span></p>
    </div>
    <div class="coupon-box">
      <p class="tc">折扣券已放入"个人中心"-我的优惠券中</p>
      <ul class="coupon-group">
        <li class="coupon-list">
          <label for="coupon1" class="dflex">
            <div class="coupon-img">
              <img src="../../assets/images/coupon.png">
            </div>
            <div class="coupon-info">
              <p>滑步车初级课折扣券</p>
              <p>券号: 84565656</p>
              <p><span>截止日期:2018.05.31</span><span class="fr">仅限本人使用</span></p>
            </div>
          </label>
        </li>
        <li class="coupon-list">
          <label for="coupon2" class="dflex">
            <div class="coupon-img">
              <img src="../../assets/images/coupon.png">
            </div>
            <div class="coupon-info">
              <p>滑步车初级课折扣券</p>
              <p>券号: 84565656</p>
              <p><span>截止日期:2018.05.31</span><span class="fr">仅限本人使用</span></p>
            </div>
          </label>
        </li>
      </ul>
    </div>
    <div class="connect-box">
      <p class="tc">报名后如有问题可直接联系客服</p>
      <p class="tc">客服电话: 010-80448861</p>
      <p class="tc">微信联系: 大白</p>
      <p class="tc"><img src="../../assets/images/code.jpg" width="50"></p>
    </div>
    <div class="btn-group">
      <div class="btn" @click="active='tab-container2'">
        <span>联系客服</span>
      </div>
      <div class="btn red-btn" @click="$router.push('/lesson/classInfo')">
        <span>查看课程</span>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

</script>
<style lang="stylus">
  #pay{
    height: auto;
    padding: 40px 0 50px;
    .vote-info{
      padding: 20px 20px;
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
      margin-top: 10px;
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
    .coupon-box{
      padding: 20px;
      background: #fff;
      margin-top: 10px;
      >p{
        color: #777;
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
            padding: 0 10px;
            p{
              line-height: 20px;
              font-size: 12px;
              color: #777;
            }
          }
          .select-box{
            width: 10%;
            flex: 1 1 auto;
            background: #fff;
            line-height: 20px;
            text-align: center;
            line-height: 60px;
          }
        }
      }
    }
    .connect-box{
      background: #fff;
      padding: 20px;
      margin-top: 10px;
      p{
        line-height: 30px;
        font-size: 12px;
        color: #777;
      }
    }
  }
</style>
