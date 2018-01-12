<template>
  <div id="payResult" class="bs">
    <div class="header">
      <mt-header title="儿童滑步车培训(初级三期)">
      </mt-header>
    </div>
    <div class="vote-info">
      <p class="title tc">支付成功!</p>
      <p class="tc">总金额￥<span class="price">7900.00</span></p>
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
              <p><span class="fr">仅限本人使用</span></p>
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
