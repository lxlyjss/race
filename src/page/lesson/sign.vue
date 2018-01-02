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
            <p>
              <i class="iconfont icon-icon1" v-if="active!='tab-container1'"></i>
              <i class="iconfont icon-edit" v-if="active=='tab-container1'"></i>
            </p>
            填写资料
          </li>
          <li class="nav-list tc">
            <hr>
          </li>
          <li class="nav-list tc" :class="active!='tab-container1'?'active':''">
            <p>
              <i class="iconfont icon-icon1" v-if="active=='tab-container3'"></i>
              <i class="iconfont icon-icon-" v-if="active!='tab-container3'"></i>
            </p>
            确认订单
          </li>
          <li class="nav-list tc">
            <hr>
          </li>
          <li class="nav-list tc">
            <p><i class="iconfont icon-liebiao9"></i></p>
            确认支付
          </li>
        </ul>
      </div>
      <div class="tab-container">
        <mt-tab-container v-model="active">
          <mt-tab-container-item id="tab-container1">
            <div class="user-info">
              <p class="title tc">家长信息</p>
              <p class="input-box"><input type="text" v-model="userInfo.parentName" placeholder="家长姓名"></p>
              <p class="input-box"><input type="text" v-model="userInfo.phone" placeholder="家长电话"></p>
              <p class="input-box"><input type="text" v-model="userInfo.wechat" placeholder="家长微信号"></p>
              <p class="title tc">宝宝信息</p>
              <p class="input-box"><input type="text" v-model="userInfo.babyName" placeholder="宝宝姓名(全名)"></p>
              <p class="input-box"><input type="text" v-model="userInfo.smallName" placeholder="宝宝小名"></p>
              <p class="sex-box clear">
                宝宝性别
                <span class="fr" :class="userInfo.sex=='1'?'active':''" @click="changeSex(1)"><i class="iconfont icon-nv"></i>女宝</span>
                <span class="fr" :class="userInfo.sex=='0'?'active':''" @click="changeSex(0)"><i class="iconfont icon-nan1"></i>男宝</span>
              </p>
              <p class="birthday-box">
                <span>宝宝出生日期</span>
                <span class="input-date">
                  <input type="text" v-model="birthdayData.date" readonly aria-readonly="" @click="openPicker()"></span>
              </p>
              <textarea v-model="userInfo.mark" placeholder="备注信息"></textarea>
            </div>
            <div class="gift-container">
              <ul class="gift-box">
                <li class="list-item" v-for="(item,key) in packList.list" :key="key">
                  <p>
                    <!--<label :for="`gift${key}`">-->
                      <!--<input type="checkbox" v-model="packInfo.selectedId" name="gift" :id="`gift${key}`">-->
                      <!--<span class="title">{{item.title}}</span>-->
                    <!--</label>-->
                    <span @click="changePack(item.id,item.price)">
                      <span class="checkbox"><i class="iconfont icon-icon1" v-if="packInfo.selectedId==item.id"></i></span>
                      <span class="title">{{item.title}}</span>
                    </span>
                    <span class="fr">
                      优惠价￥<span class="price">{{item.price/100}}</span>
                    </span>
                  </p>
                  <ul class="gift-group dflex">
                    <li class="gift-list" v-for="(item1,key1) in item.item">
                      <p class="img">
                        <img :src="item1.img">
                      </p>
                      <p class="info tc">{{item1.price}} {{item1.title}}</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container2">
            <div class="submit-container">
              <div class="submit-info">
                <p class="title">骑二无比儿童滑步车初级课程(三期班)</p>
                <p class="text"><span>张三</span><span>3岁</span><span>新会员礼包一</span></p>
                <p class="price">￥<span>{{packInfo.price/100}}</span></p>
              </div>
              <div class="mark-box">
                <textarea v-model="userInfo.mark" placeholder="备注信息"></textarea>
              </div>
              <p class="all-price">总金额￥<span class="price">{{packInfo.price/100}}</span></p>
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
                    <p><span class="fr">仅限本人使用</span></p>
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
          <mt-tab-container-item id="tab-container2">
            <div class="submit-container">
              <div class="submit-info">
                <p class="title">骑二无比儿童滑步车初级课程(三期班)</p>
                <p class="text"><span>张三</span><span>3岁</span><span>新会员礼包一</span></p>
                <p class="price">￥<span>{{packInfo.price/100}}</span></p>
              </div>
              <div class="mark-box">
                <textarea v-model="userInfo.mark" placeholder="备注信息"></textarea>
              </div>
              <p class="all-price">总金额￥<span class="price">{{packInfo.price/100}}</span></p>
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
                      <p><span class="fr">仅限本人使用</span></p>
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
        <span>确认订单</span>
      </div>
    </div>
    <div class="btn-group" v-if="active=='tab-container3'">
      <div class="btn" @click="">
        <span>查看订单</span>
      </div>
      <div class="btn red-btn" @click="$router.push('/lesson/pay')">
        <span>确认支付</span>
      </div>
    </div>
    <mt-popup v-model="popupVisible" id="kefuBox" pop-transition="popup-fade"
              position="center">
      <div class="kefu-container">
        <p><i class="iconfont icon-dianhua"></i>可点击拨打: <span class="phone">{{kefuInfo.phone}}</span></p>
        <p><i class="iconfont icon-ren"></i>微信联系: 大白</p>
        <p><img src="../../assets/images/code.jpg" width="60"></p>
      </div>
    </mt-popup>
    <!--日期选择器-->
    <mt-datetime-picker
      ref="picker"
      type="date"
      :startDate="birthdayData.startDate"
      :endDate="birthdayData.endDate"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      v-model="birthdayData.show" @confirm="selectedDate">
    </mt-datetime-picker>
  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue';
  import {mapState, mapMutations, mapActions} from 'vuex';
  import { DatetimePicker } from 'mint-ui';
  Vue.component(DatetimePicker.name, DatetimePicker);

  export default {
    data() {
      return {
        active:"tab-container1",
        popupVisible: false,
        gift: "礼包一",
        birthdayData:{
          date:"",
          show: false,
          startDate: new Date("1970-01-01"),
          endDate: new Date()
        },
        userInfo:{
          parentName:"",
          phone:"",
          wechat:"",
          babyName:"",
          smallName:"",
          sex:"",
          birthday:"",
          mark:""
        },
        packInfo:{
          selectedId: "",
          price:""
        }
      }
    },
    methods:{
      ...mapActions("lesson",["getKefuInfo","getPackList"]),
      changeTab(n) {
        this.active = "tab-container"+n;
      },
      openPicker() {
        this.$refs.picker.open();
      },
      selectedDate(value) {
        this.birthdayData.date = value.toLocaleDateString().replace(/\//g,"-");
        this.userInfo.birthday = this.pickerValue;
      },
      changeSex(i) {
        this.userInfo.sex = i;
      },
      changePack(i,p) {
        if(this.packInfo.selectedId == i){
          this.packInfo.selectedId = "";
          this.packInfo.price = "0";
        }else{
          this.packInfo.selectedId = i;
          this.packInfo.price = p;
        }
      }
    },
    computed:{
      ...mapState("lesson",["kefuInfo","packList"])
    },
    created() {
      this.getKefuInfo();
      this.getPackList();
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
              i{
                font-size: 20px;
              }
            }
          }
          .active{
            color: #e51f22;
          }
        }
      }
    }
    .tab-container{
      margin-top: 8px;

    }
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
        line-height: 40px;
        margin-bottom: 5px;
        border: 1px solid #ddd;
      }
      .sex-box{
        color: #777;
        line-height: 30px;
        margin-bottom: 10px;
        margin-top: 10px;
        padding-left: 10px;
        span{
          padding: 5px 20px;
          border-radius: 5px;
          line-height: 20px;
          border: 1px solid #e51f22;
          margin-left: 10px;
          i{
            margin-right: 3px;
          }
        }
        .active{
          background: #e51f22;
          color: #fff;
        }
      }
      .birthday-box{
        color: #777;
        line-height: 30px;
        margin-bottom: 15px;
        padding-left: 10px;
        .input-date{
          display: block;
          border: 1px solid #ddd;
          width: 57%;
          float: right;
        }
      }
    }
    .gift-container{
      background: #fff;
      padding: 10px 20px;
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
      .list-item{
        padding: 10px 0;
        p{
          line-height: 30px;
          input{
            width: 20px;
            height: 20px;
            vertical-align: middle;
          }
          .checkbox{
            display: block;
            width: 20px;
            height: 20px;
            border: 1px solid #ddd;
            float: left;
            margin-top: 4px;
            margin-right: 4px;
            text-align: center;
            line-height: 20px;
            i{
              color: #26a2ff;
            }
          }
          .title{
            font-size: 14px;
            vertical-align: middle;
          }
          span{
            font-size: 12px;
          }
          .price{
            font-size: 20px;
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
    #kefuBox{
      width: 90%;
      margin: 0 auto;
      border-radius: 10px;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      overflow: hidden;
      .kefu-container{
        background: #fff;
        padding: 40px 0;
        p{
          color: #777;
          line-height: 40px;
          text-align: center;
          i{
            margin-right: 10px;
          }
        }
      }
    }
    input[type=text],textarea{
      color: #555;
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
      background: #f7f7f7;
    }
  }
</style>
