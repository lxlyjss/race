<template>
  <div id="voteDetial" class="bs">
    <div class="header">
      <mt-header title="订单详情" fixed>
        <span @click="goVoteList" slot="left">
          <mt-button icon="back">返回</mt-button>
        </span>
      </mt-header>
    </div>
    <div class="content">
      <div class="detial-top" :style="{backgroundImage: `url(http://www.72bike.com/img/activitys/a1/2.jpg)`}">
        <div class="black"></div>
        <div class="detial-text bs">
          <h1>骑二无比北京总部</h1>
          <p>
            <i class="iconfont icon-shuben"></i>
            滑步车课程初级班(三期)
          </p>
          <p>
            <i class="iconfont icon-lesson1"></i>
            课件包(含车)
          </p>
          <p>
            ￥3855
          </p>
          <span class="fr status-btn success">已完成</span>
          <span class="fr status-btn ready" v-show="false">未完成</span>
          <span class="fr status-btn lose" v-show="false">已失效</span>
        </div>
      </div>
      <div class="section">
        <h1><span>订单信息</span></h1>
        <p>
          <i class="iconfont icon-biaoqian"></i>
          订单号码: 8785656565646
        </p>
        <p>
          <i class="iconfont icon-icon--"></i>
          订单状态: 已支付
        </p>
        <p>
          <i class="iconfont icon-riqi"></i>
          订单日期: 2017.12.14 14:52
        </p>
        <p>
          <i class="iconfont icon-weixin"></i>
          支付方式: 微信支付
        </p>
        
      </div>
      <div class="section">
        <h1><span>报名资料</span></h1>
        <p>
          <i class="iconfont icon-biaoqian"></i>
          家长姓名: 刘琦
        </p>
        <p>
          <i class="iconfont icon-dianhua"></i>
          联系电话: 15456568565
        </p>
        <p>
          <i class="iconfont icon-weixin"></i>
          微信号: dkfjk
        </p>
        <p>
          <i class="iconfont icon-biaoqian"></i>
          宝宝姓名: 刘祥祥
        </p>
        <p>
          <i class="iconfont icon-ren"></i>
          宝宝小名: 刘琦
        </p>
        <p>
          <i class="iconfont icon-riqi"></i>
          出生日期: 1992-12-23
        </p>
        <p>
          <i class="iconfont icon-edit"></i>
          备注信息: 孩子还没有满岁,请在交的时候细心一点
        </p>
      </div>
      <div class="price-box">
        <p class="clear">商品价格<span class="fr">￥ <span class="price">3698</span></span></p>
        <p class="clear">优惠券使用<span class="fr">￥ <span class="price">172</span></span></p>
        <p class="clear">优惠券<span class="fr">滑步车初级课程优惠券</span></p>
        <hr>
        <p class="real-price clear"> <span class="fr">实际付款 <span class="price">￥3800</span></span></p>
      </div>
    </div>
    <div class="btn red-btn tuikuan">
      <i class="iconfont icon-tuikuan"></i>
      申请退款
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data() {
      return {

      }
    },
    methods:{
      goVoteList() {
        this.$router.isBack = true;
        this.$router.push("/lesson/myVotes");
      }
    }
  }
</script>
<style lang="stylus">
  #voteDetial{
    padding: 40px 0 50px;
    .content{
      .detial-top{
        padding: 20px 40px;
        height: 3rem;
        position relative;
        background-size: cover;
        background-position: center;
        .black{
          background rgba(0,0,0,.5);
          position absolute;
          width: 100%;
          height 100%;
          left: 0;
          top: 0;
        }
        .detial-text{
          width: 100%;
          position absolute;
          top: 0;
          left: 0;
          z-index 2;
          color: #fff;
          padding: 30px 40px;
          h1{
            font-size: 16px;
            margin-bottom: 20px;
          }
          p{
            line-height: 20px;
          }
          .status-btn{
            position: absolute;
            top: 30px;
            right: 30px;
            padding: 2px 5px;
            border-radius: 3px;
          }
          .success{
            background: #48c547;
          }
          .ready{
            background: #2e8cde;
          }
          .lose{
            background: #d43f3f;
          }
        }
      }
      .section{
        background: #fff;
        margin-bottom: 10px;
        padding: 20px 40px;
        h1{
          text-align: center;
          line-height: 40px;
          span{
            padding: 0 10px;
            border-bottom: 1px solid #ccc;
          }
        }
        p{
          line-height: 30px;
          color: #777;
          i{
            margin-right: 10px;
          }
        }
      }
      .price-box{
        padding: 20px 40px;
        background: #fff;
        p{
          line-height: 30px;
          color: #777;
          .price{
            color: #000;
            font-weight: 900;
            font-size: 16px;
          }
        }
      }
    }
    .tuikuan{
      width: 100%;
      text-align: center;
      line-height: 50px;
      position: fixed;
      bottom: 0;
    }
  }
</style>
