<template>
  <div id="vote">
    <div class="header-title">
      <mt-header title="赛事活动报名" :style="{background:'#1965b5'}">
        <span @click="$router.goBack()" slot="left">
          <mt-button icon="back">返回</mt-button>
        </span>
      </mt-header>
    </div>
    <div class="content bs" v-if="nowIndex==1">
      <section class="bs">
        <div class="section-title">
          <p>选择套餐</p>
        </div>
        <p class="item-title">
          <img src="../../assets/images/star.png" style="vertical-align: text-bottom;" width="20">
          基础套餐(必选)
        </p>
        <ul class="base-group bs">
          <li class="list-item active">
            <p class="item">套餐名称: 一大一小</p>
            <p class="item">套餐价格: ￥472.00</p>
            <p class="item">剩余数量: 43</p>
            <div class="queding">
              <img src="../../assets/images/queding.png" width="20">
            </div>
          </li>
          <li class="list-item">
            <p class="item">套餐名称: 两大一小</p>
            <p class="item">套餐价格: ￥472.00</p>
            <p class="item">剩余数量: 43</p>
            <div class="queding">
              <img src="../../assets/images/queding.png" width="20">
            </div>
          </li>
        </ul>
        <p class="item-title">
          <img src="../../assets/images/star_1.png" style="vertical-align: text-bottom;" width="18">
          附加套餐(选填)
        </p>
        <ul class="other-group bs">
          <li class="list-item active">
            <p class="item">套餐名称: 增加一宝宝</p>
            <p class="item">套餐价格: ￥172.00</p>
            <p class="item">剩余数量: 43</p>
            <div class="count-content">
              <span class="reduce-btn">-</span>
              <span class="count">0</span>
              <span class="add-btn">+</span>
            </div>
          </li>
          <li class="list-item">
            <p class="item">套餐名称: 豪华住宿</p>
            <p class="item">套餐价格: ￥372.00</p>
            <p class="item">剩余数量: 43</p>
            <div class="count-content">
              <span class="reduce-btn">-</span>
              <span class="count">0</span>
              <span class="add-btn">+</span>
            </div>
          </li>
          <li class="list-item">
            <p class="item">套餐名称: 舒适住宿</p>
            <p class="item">套餐价格: ￥372.00</p>
            <p class="item">剩余数量: 43</p>
            <div class="count-content">
              <span class="reduce-btn">-</span>
              <span class="count">0</span>
              <span class="add-btn">+</span>
            </div>
          </li>
          <li class="list-item">
            <p class="item">套餐名称: 经济住宿</p>
            <p class="item">套餐价格: ￥372.00</p>
            <p class="item">剩余数量: 43</p>
            <div class="count-content">
              <span class="reduce-btn">-</span>
              <span class="count">0</span>
              <span class="add-btn">+</span>
            </div>
          </li>
        </ul>
      </section>
      <section class="bs">
        <div class="section-title">
          <p>填写报名信息(*为必填项)</p>
        </div>
        <div class="person-content bs">
          <ul class="parent person-group">
            <li class="person-list">
              <p class="item-title" style="padding: 10px 0;">
                <img src="../../assets/images/star.png" style="vertical-align: text-bottom;" width="18">
                第一位家长信息
                <span class="connect fr"><img src="../../assets/images/persons.png" width="14" style="vertical-align: -8%;padding-right: 5px;">联系人</span>
              </p>
              <p>*真实姓名 <input type="text"></p>
              <p>
                *证件类型
                <select name="" id="">
                  <option value="身份证">身份证</option>
                  <option value="身份证">护照</option>
                  <option value="身份证">港澳通行证</option>
                  <option value="身份证">台湾通行证</option>
                </select>
              </p>
              <p>*证件号码 <input type="text"></p>
              <p>*出生日期 <input type="text"></p>
              <p>
                *性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别
                <label for="sex_man">男<input type="radio" name="sex1" id="sex_man"></label>
                <label for="sex_woman">女<input type="radio" name="sex1" id="sex_women"></label>
              </p>
              <p>*手机号码 <input type="text"></p>
              <p>&nbsp;电子邮箱 <input type="text"></p>
              <p>微&nbsp;&nbsp;信&nbsp;&nbsp;号 <input type="text"></p>
              <div class="save-content">
                <p>
                  <span class="save-btn">保存</span>
                  <span class="delete-btn">删除</span>
                </p>
              </div>
            </li>
            <li class="person-list">
              <p class="item-title" style="padding: 10px 0;">
                <img src="../../assets/images/star.png" style="vertical-align: text-bottom;" width="18">
                第二位家长信息
                <span class="connect fr"><img src="../../assets/images/persons.png" width="14" style="vertical-align: -8%;padding-right: 5px;">联系人</span>
              </p>
              <p>*真实姓名 <input type="text"></p>
              <p>
                *证件类型
                <select name="" id="">
                  <option value="身份证">身份证</option>
                  <option value="身份证">护照</option>
                  <option value="身份证">港澳通行证</option>
                  <option value="身份证">台湾通行证</option>
                </select>
              </p>
              <p>*证件号码 <input type="text"></p>
              <p>*出生日期 <input type="text"></p>
              <p>
                *性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别
                <label for="sex_man">男<input type="radio" name="sex1" id="sex_man"></label>
                <label for="sex_woman">女<input type="radio" name="sex1" id="sex_women"></label>
              </p>
              <p>*手机号码 <input type="text"></p>
              <p>&nbsp;电子邮箱 <input type="text"></p>
              <p>微&nbsp;&nbsp;信&nbsp;&nbsp;号 <input type="text"></p>
              <div class="save-content">
                <p>
                  <span class="save-btn">保存</span>
                  <span class="delete-btn">删除</span>
                </p>
              </div>
            </li>
          </ul>
          <ul class="children person-group">
            <li class="person-list">
              <p class="item-title" style="padding: 10px 0;">
                <img src="../../assets/images/star.png" style="vertical-align: text-bottom;" width="18">
                第一位宝宝信息
                <span class="connect fr"><img src="../../assets/images/persons.png" width="14" style="vertical-align: -8%;padding-right: 5px;">联系人</span>
              </p>
              <p>*真实姓名 <input type="text"></p>
              <p>
                *证件类型
                <select name="" id="">
                  <option value="身份证">身份证</option>
                  <option value="身份证">护照</option>
                  <option value="身份证">港澳通行证</option>
                  <option value="身份证">台湾通行证</option>
                </select>
              </p>
              <p>*证件号码 <input type="text"></p>
              <p>*出生日期 <input type="text"></p>
              <p>
                *性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别
                <label for="sex_man">男<input type="radio" name="sex1" id="sex_man"></label>
                <label for="sex_woman">女<input type="radio" name="sex1" id="sex_women"></label>
              </p>
              <div class="save-content">
                <p>
                  <span class="save-btn">保存</span>
                  <span class="delete-btn">删除</span>
                </p>
              </div>
            </li>
            <li class="person-list">
              <p class="item-title" style="padding: 10px 0;">
                <img src="../../assets/images/star.png" style="vertical-align: text-bottom;" width="18">
                第二位宝宝信息
                <span class="connect fr"><img src="../../assets/images/persons.png" width="14" style="vertical-align: -8%;padding-right: 5px;">联系人</span>
              </p>
              <p>*真实姓名 <input type="text"></p>
              <p>
                *证件类型
                <select name="" id="">
                  <option value="身份证">身份证</option>
                  <option value="身份证">护照</option>
                  <option value="身份证">港澳通行证</option>
                  <option value="身份证">台湾通行证</option>
                </select>
              </p>
              <p>*证件号码 <input type="text"></p>
              <p>*出生日期 <input type="text"></p>
              <p>
                *性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别
                <label for="sex_man">男<input type="radio" name="sex1" id="sex_man"></label>
                <label for="sex_woman">女<input type="radio" name="sex1" id="sex_women"></label>
              </p>
              <div class="save-content">
                <p>
                  <span class="save-btn">保存</span>
                  <span class="delete-btn">删除</span>
                </p>
              </div>
            </li>
          </ul>
          <ul class="danger person-group">
            <li class="person-list">
              <p class="item-title" style="padding: 10px 0;">
                <img src="../../assets/images/star.png" style="vertical-align: text-bottom;" width="18">
                紧急联系人
              </p>
              <p>*真实姓名 <input type="text"></p>
              <p>*手机号码 <input type="text"></p>
              <p>电子邮箱 <input type="text"></p>
              <div class="save-content">
                <p>
                  <span class="save-btn">保存</span>
                  <span class="delete-btn">删除</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div class="bottom-box" v-if="nowIndex==1">
      <div class="price-box fl">
        <p>
          <span>￥ 472.00</span>
          <span class="detial-btn">明细</span>
        </p>
      </div>
      <div class="submit-btn fr" @click="goSubmit()">
        提交
      </div>
    </div>
    <div class="bottom-box" v-if="nowIndex==2">
      <div class="return-box fl" @click="nowIndex=1">
        返回修改
      </div>
      <div class="buy-btn fr" @click="goBuy()">
        确认订单
      </div>
    </div>
    <div class="vote-content content bs" v-if="nowIndex==2">
      <div class="vote-info bs">
        <p class="tc" style="margin-bottom: 10px;">请核对您的订单</p>
        <p class="item-title">
        <img src="../../assets/images/star.png" style="vertical-align: text-bottom;" width="20">
        套餐信息
      </p>
        <ul class="meal-content bs">
          <li class="bs">
            <p>套餐名称: 一大一小</p>
            <p>套餐价格: ￥472.00</p>
            <span>
              1份
            </span>
          </li>
          <li class="bs">
            <p>套餐名称: 增加一位宝宝</p>
            <p>套餐价格: ￥172.00</p>
            <span>
              1份
            </span>
          </li>
          <li class="bs">
            <p>套餐名称: 豪华住宿</p>
            <p>套餐价格: ￥400.00</p>
            <span>
              1份
            </span>
          </li>
        </ul>
        <p class="item-title">
          <img src="../../assets/images/star.png" style="vertical-align: text-bottom;" width="20">
          人员信息
        </p>
        <ul class="person-content bs">
          <li class="bs">
            <p class="tc fw">第一位家长</p>
            <p>真实姓名: 隔壁老王</p>
            <p>证件类型: 身份证</p>
            <p>证件号码: 61254566895656566</p>
            <p>出生日期: 2017-10-12</p>
            <p>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别: 男</p>
            <p>手机号码: 18721455458</p>
            <p>电子邮箱: 8754545@qq.com</p>
            <p>微&nbsp;&nbsp;信&nbsp;&nbsp;号: lxlink</p>
          </li>
          <li class="bs">
            <p class="tc fw">第二位家长</p>
            <p>真实姓名: 隔壁老王</p>
            <p>证件类型: 身份证</p>
            <p>证件号码: 61254566895656566</p>
            <p>出生日期: 2017-10-12</p>
            <p>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别: 男</p>
            <p>手机号码: 18721455458</p>
            <p>电子邮箱: 8754545@qq.com</p>
            <p>微&nbsp;&nbsp;信&nbsp;&nbsp;号: lxlink</p>
          </li>
          <li class="bs">
            <p class="tc fw">第一位宝宝</p>
            <p>真实姓名: 隔壁老王</p>
            <p>证件类型: 身份证</p>
            <p>证件号码: 61254566895656566</p>
            <p>出生日期: 2017-10-12</p>
            <p>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别: 男</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { MessageBox } from 'mint-ui';
  export default {
    data() {
      return {
        nowIndex: 1
      }
    },
    methods:{
      goSubmit() {
        this.nowIndex = 2;
      },
      goBuy() {
        MessageBox({
          title: '提示',
          message: '提交订单成功,请在30分钟之内完成支!',
          showCancelButton: true,
          showConfirmButton: true,
          confirmButtonText: "立即支付",
          cancelButtonText: "查看订单"
        }).then((action)=>{
          if(action == "cancel"){
            alert("查看订单")
          }else{
            this.$router.push("/race/pay");
          }
        });
      }
    },
    created() {
      $(window).scrollTop(0);
    }
  }
</script>
<style lang="stylus">
  #vote{
    .header-title{
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 9;
    }
    .content{
      width: 100%;
      padding: 50px .3rem 40px;
      section{
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border:1px solid #ccc;
        background: #fff;
        margin-bottom: 10px;
        .section-title{
          width: 100%;
          line-height: 36px;
          text-align: center;
          background: #1965b5;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          p{
            font-size: 14px;
            color: #fff;
          }
        }
        .item-title{
          line-height: 30px;
          border-bottom: 1px solid #ccc;
          padding-left: 10px;
          .connect{
            margin-right: 20px;
            color: #1965b5;
          }
        }
        .base-group{
          width: 100%;
          padding: .3rem;

          .list-item{
            border: 3px solid #ccc;
            padding: .3rem;
            margin-bottom: 10px;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            position: relative;
            p{
              line-height: 16px;
            }
            .queding{
              width: .6rem;
              height: .6rem;
              background: #1965b5;
              position: absolute;
              right: 0;
              top: 0;
              display: none;
            }
          }
          .active{
            border-color: #1965b5;
            color: #1965b5;
            .queding{
              display: block!important;
            }
          }
        }
        .other-group{
          width: 100%;
          padding: .3rem;
          .list-item{
            border: 3px solid #ccc;
            padding: .3rem;
            margin-bottom: 10px;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            position: relative;
            p{
              line-height: 16px;
            }
            .count-content{
              position: absolute;
              right: .5rem;
              top: .5rem;
              span{
                display: inline-block;
                width: .8rem;
                height: .8rem;
                text-align: center;
                line-height: .7rem;
                border: 1px solid #ccc;
                font-size: 24px;
                font-weight: 900;
                vertical-align: middle;
              }
              .count{
                font-size: 16px;
                font-weight: normal;
                line-height: .8rem;
              }
            }
          }
        }
        .person-content{
          padding: .3rem;
          .person-group{
            .person-list{
              border-bottom: 1px solid #ccc;
              p{
                line-height: 20px;
                margin-bottom: 5px;
                label{
                  padding-left: 20px;
                  input[type=radio]{
                    vertical-align: -35%;
                    width: 20px;
                    height: 20px;
                  }
                }
                input[type=text]{
                  width: 75%;
                }
                select{
                  width: 76%;
                }
              }
              .save-content{
                width: 100%;
                margin: 20px 0;
                p{
                  text-align: center;
                  span{
                    padding: .15rem .4rem;
                    color: #fff;
                    -webkit-border-radius: 5px;
                    -moz-border-radius: 5px;
                    border-radius: 5px;
                  }
                  .save-btn{
                    background: #1965b5;
                    margin-right: 20px;
                  }
                  .delete-btn{
                    background: #de2e2e;
                  }
                }
              }
            }
          }
          .danger{
            .person-list{
              border: none;
            }
          }
        }
      }
    }
    .bottom-box{
      width: 100%;
      height: 40px;
      position: fixed;
      bottom: 0;
      background: #fff;
      border-top: 1px solid #ccc;
      .price-box{
        width: 70%;
        line-height: 40px;
        p{
          font-size: 16px;
          padding-left: 10px;
          .detial-btn{
            margin-left: 20px;
            padding: .1rem .25rem;
            background: #1965b5;
            color: #fff;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
          }
        }
      }
      .submit-btn{
        width: 30%;
        text-align: center;
        background: #1965b5;
        color: #fff;
        line-height: 40px;
      }
      .return-box{
        width: 50%;
        background: #fff;
        text-align: center;
        line-height: 40px;
      }
      .buy-btn{
        width: 50%;
        background: #1965b5;
        text-align: center;
        line-height: 40px;
        color: #fff;
      }
    }
    .vote-content{
      padding: 50px .3rem;
      .vote-info{
        background: #fff;
        padding: .3rem;
        .item-title{
          line-height: 30px;
          border-bottom: 1px solid #ccc;
          padding-left: 10px;
        }
        .meal-content{
          padding: .3rem;
          li{
            border: 1px solid #ccc;
            padding: .3rem;
            margin-bottom: 10px;
            position: relative;
            p{
              width: 70%;
              line-height: 20px;
            }
            span{
              display: block;
              position: absolute;
              top: 25px;
              right: 20px;
            }
          }
        }
        .person-content{
          padding: .3rem;
          li {
            border: 1px solid #ccc;
            padding: .3rem;
            margin-bottom: 10px;
            p{
              line-height: 20px;
            }
          }
        }
      }
    }
  }
</style>
