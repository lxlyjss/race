<template>
  <div id="sign" class="bs">
    <div class="header">
      <mt-header title="儿童滑步车培训(初级三期)">
        <span @click="$router.goBack()" slot="left">
          <mt-button icon="back">返回</mt-button>
        </span>
      </mt-header>
    </div>
    <div class="container">
      <div class="nav-tab">
        <ul class="nav-group dflex">
          <li class="nav-list tc active">
            <p><img src="../../assets/images/goods.png" width="20"></p>
            填写资料
          </li>
          <li class="nav-list tc">
            <hr>
          </li>
          <li class="nav-list tc">
            <p><img src="../../assets/images/goods.png" width="20"></p>
            选择提交
          </li>
          <li class="nav-list tc">
            <hr>
          </li>
          <li class="nav-list tc">
            <p><img src="../../assets/images/goods.png" width="20"></p>
            确认支付
          </li>
        </ul>
      </div>
      <div class="tab-container">
        <mt-tab-container v-model="active">
          <mt-tab-container-item id="tab-container1">
            <div class="user-info">
              <p class="title">填写家长信息</p>
              <p class="input-box"><input type="text" placeholder="家长姓名"></p>
              <p class="input-box"><input type="text" placeholder="家长电话"></p>
              <p class="input-box"><input type="text" placeholder="家长微信号"></p>
              <p class="title">填写宝宝信息</p>
              <p class="input-box"><input type="text" placeholder="宝宝姓名(全名)"></p>
              <p class="input-box"><input type="text" placeholder="宝宝小名"></p>
              <p class="input-box"><input type="date" placeholder="宝宝出生日期"></p>
              <p class="radio-box">
                宝宝性别
                <span class="fr">
            <label for="sex1">
            男宝
            <input type="radio" name="sex" id="sex1" checked>
          </label>
          <label for="sex2">
            女宝
            <input type="radio" name="sex" id="sex2">
          </label>
          </span>
              </p>
              <p class="input-box">
                <textarea name="mark" id="mark" placeholder="备注信息"></textarea>
              </p>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container2">
            <div class="gift-container">
              <ul class="gift-box">
                <li class="list-item">
                  <p><label for="gift1"><input type="radio" checked name="gift" id="gift1">礼包一</label><span class="fr">优惠价￥<span class="price">3200</span></span></p>
                  <ul class="gift-group dflex">
                    <li class="gift-list">
                      <p class="img"><img src="../../assets/images/bike.png" alt=""></p>
                      <p class="info tc">3200元 课程费</p>
                    </li>
                    <li class="gift-list">
                      <p class="img"><img src="../../assets/images/bike.png" alt=""></p>
                      <p class="info tc">3200元 课程费</p>
                    </li>
                    <li class="gift-list">
                      <p class="img"><img src="../../assets/images/bike.png" alt=""></p>
                      <p class="info tc">3200元 课程费</p>
                    </li>
                    <li class="gift-list">
                      <p class="img"><img src="../../assets/images/bike.png" alt=""></p>
                      <p class="info tc">3200元 课程费</p>
                    </li>
                    <li class="gift-list">
                      <p class="img"><img src="../../assets/images/bike.png" alt=""></p>
                      <p class="info tc">3200元 课程费</p>
                    </li>
                  </ul>
                </li>
                <li class="list-item">
                  <p><label for="gift2"><input type="radio" name="gift" id="gift2">礼包二</label><span class="fr">优惠价￥<span class="price">3200</span></span></p>
                  <ul class="gift-group dflex">
                    <li class="gift-list">
                      <p class="img"><img src="../../assets/images/bike.png" alt=""></p>
                      <p class="info tc">3200元 课程费</p>
                    </li>
                    <li class="gift-list">
                      <p class="img"><img src="../../assets/images/bike.png" alt=""></p>
                      <p class="info tc">3200元 课程费</p>
                    </li>
                    <li class="gift-list">
                      <p class="img"><img src="../../assets/images/bike.png" alt=""></p>
                      <p class="info tc">3200元 课程费</p>
                    </li>
                    <li class="gift-list">
                      <p class="img"><img src="../../assets/images/bike.png" alt=""></p>
                      <p class="info tc">3200元 课程费</p>
                    </li>
                    <li class="gift-list">
                      <p class="img"><img src="../../assets/images/bike.png" alt=""></p>
                      <p class="info tc">3200元 课程费</p>
                    </li>
                  </ul>
                </li>
                <li class="list-item">
                  <p><label for="gift3"><input type="radio" name="gift" id="gift3">礼包二</label><span class="fr">优惠价￥<span class="price">3200</span></span></p>
                  <ul class="gift-group dflex">
                    <li class="gift-list">
                      <p class="img"><img src="../../assets/images/bike.png" alt=""></p>
                      <p class="info tc">3200元 课程费</p>
                    </li>
                    <li class="gift-list">
                      <p class="img"><img src="../../assets/images/bike.png" alt=""></p>
                      <p class="info tc">3200元 课程费</p>
                    </li>
                    <li class="gift-list">
                      <p class="img"><img src="../../assets/images/bike.png" alt=""></p>
                      <p class="info tc">3200元 课程费</p>
                    </li>
                    <li class="gift-list">
                      <p class="img"><img src="../../assets/images/bike.png" alt=""></p>
                      <p class="info tc">3200元 课程费</p>
                    </li>
                    <li class="gift-list">
                      <p class="img"><img src="../../assets/images/bike.png" alt=""></p>
                      <p class="info tc">3200元 课程费</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container3">
            <div class="submit-container">
              <div class="submit-info">
                <p class="title">骑二无比儿童滑步车初级课程(三期班)</p>
                <p class="text"><span>张三</span><span>3岁</span><span>新会员礼包一</span></p>
                <p class="price">￥<span>3200</span></p>
              </div>
              <div class="mark-box">
                <textarea id="mark2" placeholder="备注信息"></textarea>
              </div>
              <p class="all-price">总金额￥<span class="price">7900</span></p>
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
                  <div class="select-box selected">
                    <input type="radio" name="coupon" checked id="coupon1">
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
                  <div class="select-box">
                    <input type="radio" name="coupon" id="coupon2">
                  </div>
                  </label>
                </li>
              </ul>
              <br>
              <p class="all-price">实际支付￥<span class="price">7400</span></p>
              <p class="access">
                <input type="checkbox">
                <span>提交订单默认您已阅读并同意《服务条款》</span>
              </p>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
    <div class="btn-group" v-if="active=='tab-container1'">
      <div class="btn" @click="popupVisible=true">
        <span>联系客服</span>
      </div>
      <div class="btn red-btn" @click="active='tab-container2'">
        <span>下一步</span>
      </div>
    </div>
    <div class="btn-group" v-if="active=='tab-container2'">
      <div class="btn" @click="active='tab-container1'">
        <span>上一步</span>
      </div>
      <div class="btn red-btn" @click="active='tab-container3'">
        <span>下一步</span>
      </div>
    </div>
    <div class="btn-group" v-if="active=='tab-container3'">
      <div class="btn" @click="active='tab-container2'">
        <span>上一步</span>
      </div>
      <div class="btn red-btn" @click="$router.push('/lesson/pay')">
        <span>确认订单</span>
      </div>
    </div>
    <mt-popup v-model="popupVisible" pop-transition="popup-fade"
              position="center">
      <div class="alert-container">
        <p>客服电话: 010-80448861</p>
        <p>微信联系: 大白<img src="../../assets/images/code.jpg" width="40" alt=""></p>
      </div>
    </mt-popup>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        active:"tab-container1",
        popupVisible: false,
        gift: "礼包一"
      }
    },
    methods:{
      changeTab(n) {
        this.active = "tab-container"+n;
      },
      touch(e){
        e.stopPropagation();
        e.preventDefault();
        console.log(this.active)
      }
    }
  }
</script>
<style lang="stylus">
  #sign{
    height: auto;
    padding: 40px 0 50px;
    .container{
      .nav-tab{
        margin-top: 7px;
        width: 100%;
        overflow: hidden;
        background: #fff;
        .nav-group{
          padding: 10px 10px;
          .nav-list{
            flex: 1 1 auto;
            color: #9d98a0;
            font-size: 12px;
            p{
              line-height: 24px;
            }
          }
          .active{
            color: #6493cd;
          }
        }
      }
      .tab-container{
        margin-top: 8px;
        .user-info{
          background: #fff;
          margin-top: 10px;
          padding: 10px 20px;
          .title{
            font-size: 15px;
            font-weight: 900;
            line-height: 30px;
          }
          .input-box{
            background: #f7f7f7;
            line-height: 30px;
            margin-bottom: 5px;
          }
          .radio-box{
            line-height: 30px;
            margin-bottom: 5px;
            padding-left: 20px;
            span{
              padding: 5px 30px;
              background: #f7f7f7;
              border-radius: 5px;
              line-height: 20px;
              label{
                margin-left: 20px;
                input{
                  width: 17px;
                  height: 17px;
                  vertical-align: text-bottom;
                }
              }
            }
          }
        }
        .gift-container{
          background: #fff;
          padding: 10px 20px;
          .gift-box{
            .list-item{
              p{
                line-height: 30px;
                input{
                  width: 20px;
                  height: 20px;
                  vertical-align: text-bottom;
                }
                span{
                  font-size: 12px;
                }
                .price{
                  font-size: 20px;
                }
              }
              .gift-group{
                flex-wrap: wrap;
                width: 100%;
                .gift-list{
                  width: 23.33%;
                  margin: 0 5%;
                  .img{
                    background: #f7f7f7;
                    -webkit-border-radius: 5px;
                    -moz-border-radius: 5px;
                    border-radius: 5px;
                    line-height: 0;
                    padding: 8px;
                    img{
                      width: 100%;
                    }
                  }
                  .info{
                    background: #fff;
                    font-size: 12px;
                    line-height: 20px;
                    color: #888;
                  }
                }
              }
            }
          }
        }

        .submit-container{
          background: #fff;
          padding: 10px 20px;
          .submit-info{
            position: relative;
            padding: 10px 0;
            border-bottom: 1px solid #ddd;
            p{
              line-height: 26px;
            }
            .title{
              font-size: 16px;
              font-weight: 600;
            }
            .text{
              span{
                margin-right: 30px;
                color: #777;
                font-size: 12px;
              }
            }
            .price{
              position: absolute;
              bottom: 0;
              right: 0;
              span{
                font-size: 20px;
              }
            }
          }
          .mark-box{
            padding: 10px 0;
          }
          .all-price{
            text-align: right;
            .price{
              font-size: 20px;
            }
          }
          .coupon-group{
            border: 1px solid #ddd;
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
          .access{
            text-align: center;
            font-size: 12px;
            line-height: 50px;
            input{
              vertical-align: middle;
            }
          }
        }
      }
    }
    .alert-container{
      background: #fff;
      padding: 40px 0;
      p{
        line-height: 40px;
        text-align: center;
        img{
          vertical-align: middle;
          margin-left: 30px;
        }
      }
    }
    .mint-popup{
      width: 90%;
      margin: 0 auto;
      border-radius: 10px;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      overflow: hidden;
    }
    input[type=text],textarea{
      color: #555;
      background: #f7f7f7;
      border: none;
      outline: none;
      padding: 0 10px;
      resize: none;
      width: 100%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }
    textarea{
      padding: 10px;
      font-size: 14px;
      height: 130px;
    }
  }
</style>
