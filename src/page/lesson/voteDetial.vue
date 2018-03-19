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
          <h1>{{voteDetial.organization.organizationName}}</h1>
          <p>
            <i class="iconfont icon-shuben"></i>
            {{voteDetial.course.courseName}}
          </p>
          <p>
            <i class="iconfont icon-lesson1"></i>
            {{voteDetial.orderInfo.itemName}}
          </p>
          <p>
            ￥{{voteDetial.orderInfo.price}}
          </p>
          <span class="fr status-btn success" v-if="voteDetial.state==1">已支付</span>
          <span class="fr status-btn ready" v-if="voteDetial.state==0">未支付</span>
          <span class="fr status-btn lose" v-if="voteDetial.state==2">已失效</span>
          <span class="fr status-btn ready" v-if="voteDetial.state==3">退款中</span>
          <span class="fr status-btn ready" v-if="voteDetial.state==4">退款成功</span>
          <span class="fr status-btn ready" v-if="voteDetial.state==5">退款失败</span>
        </div>
      </div>
      <div class="section">
        <h1><span>订单信息</span></h1>
        <p>
          <i class="iconfont icon-biaoqian"></i>
          订单号码: {{voteDetial.orderNum}}
        </p>
        <p>
          <i class="iconfont icon-icon--"></i>
          订单状态: <span v-if="voteDetial.state==1">已支付</span>
          <span v-if="voteDetial.state==0">未支付</span>
          <span v-if="voteDetial.state==2">已失效</span>
        </p>
        <p>
          <i class="iconfont icon-riqi"></i>
          订单日期: {{voteDetial.createDate}}
        </p>
        <p v-if="voteDetial.state==1">
          <i class="iconfont icon-weixin"></i>
          支付方式: 微信支付
        </p>
      </div>
      <div class="section">
        <h1><span>报名资料</span></h1>
        <p>
          <i class="iconfont icon-biaoqian"></i>
          家长姓名: {{voteDetial.adult.userName}}
        </p>
        <p>
          <i class="iconfont icon-dianhua"></i>
          联系电话: {{voteDetial.adult.phone}}
        </p>
        <p>
          <i class="iconfont icon-weixin"></i>
          微信号: {{voteDetial.adult.wechatNum}}
        </p>
        <p>
          <i class="iconfont icon-biaoqian"></i>
          宝宝姓名: {{voteDetial.baby.babyRealname}}
        </p>
        <p>
          <i class="iconfont icon-ren"></i>
          宝宝小名: {{voteDetial.baby.babyPetName}}
        </p>
        <p>
          <i class="iconfont icon-riqi"></i>
          出生日期: {{voteDetial.baby.birthday}}
        </p>
        <p>
          <i class="iconfont icon-edit"></i>
          备注信息: {{voteDetial.remark}}
        </p>
      </div>
      <div class="price-box">
        <p class="clear">商品价格<span class="fr">￥ <span class="price">{{voteDetial.totalPrice}}</span></span></p>
        <p class="clear">优惠券使用<span class="fr">￥ <span class="price">{{voteDetial.refundPrice}}</span></span></p>
        <p class="clear">优惠券<span class="fr">滑步车初级课程优惠券</span></p>
        <hr>
        <p class="real-price clear"> <span class="fr">实际付款 <span class="price">{{voteDetial.totalPrice}}</span></span></p>
      </div>
    </div>
    <div class="btn red-btn tuikuan" @click="openRounder" v-if="voteDetial.state==1">
      <i class="iconfont icon-tuikuan"></i>
      申请退款
    </div>
    <div class="btn red-btn tuikuan" @click="toPay" v-if="voteDetial.state==0">
      <i class="iconfont icon-tuikuan"></i>
      立即支付
    </div>
    <div class="btn red-btn tuikuan" @click="toLessonDetial" v-if="voteDetial.state==3">
      <i class="iconfont icon-tuikuan"></i>
      重新报名
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapActions} from "vuex"
  import {MessageBox} from "mint-ui"
  export default{
    data() {
      return {
        voteDetial:{
          adult:{},
          organization:{},
          baby:{},
          orderInfo:{},
          course:{}
        }
      }
    },
    methods:{
      ...mapActions("lesson",["getOrderPay","refundOrder"]),
      goVoteList() {
        this.$router.isBack = true;
        this.$router.push("/lesson/myVotes");
      },
      getVoteDetial() {
        this.getOrderPay({
          orderId: this.$route.query.voteId
        }).then(res=>{
          console.log(res);
          if(res.status == 0) {
            this.voteDetial = res.data.order;
          }else{
            alert("获取订单信息失败,请联系管理员");
          }
        })
      },
      openRounder() {
        let self = this;
        MessageBox.confirm('确定要退款吗?').then(action => {
          self.setRoundOrder();
        });
      },
      setRoundOrder() {
        let send = {
          orderId: this.voteDetial.id
        };
        this.refundOrder(send).then(res=>{
          console.log(res);
          if(res.status==0) {
            alert("提交退款申请成功!客服审核通过后费用会退回您原账户!");
          }else{
            alert("提交退款失败!请联系客服");
          }
        })
      },
      toPay() {
        let orderId = this.voteDetial.id;
        let branchId = this.voteDetial.organization.id;
        window.location.href = "http://sport.72bike.com/ucenter/wechatPay/getCode?orderId="+orderId+"&branchId="+branchId;
      },
      toLessonDetial() {
        this.$router.push({path: "/lesson/detial",query:{lessonId: this.voteDetial.course.id}});
      }
    },
    mounted() {
      if("voteId" in this.$route.query) {
        this.getVoteDetial();
      }else{
        this.goVoteList();
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
