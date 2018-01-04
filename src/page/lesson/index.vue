<template>
  <div id="index">
    <div class="header dflex">
      <div class="city-btn" @click="cityBox=true">
        <span class="fl place txt-dian">位置: <span class="city">{{city.text}}</span></span>
        <span class="fr"><img src="../../assets/images/sanjiao.png" width="10"></span>
      </div>
      <div class="search-btn">
        <div class="search-box" @click="$router.push('/lesson/search')">
          <span class="fl">搜索</span>
          <i class="fr iconfont icon-sousuo"></i>
        </div>
      </div>
    </div>
    <div class="swiper-w">
      <mt-swipe :auto="2000">
        <mt-swipe-item v-if="banner.list" v-for="item in banner.list"
                       :style="{backgroundImage:`url(${item.imgUrl})`,backgroundSize:'cover'}"
                       :key="item.lessonid"></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="nav-tab">
      <ul class="nav-group dflex">
        <li class="nav-list tc" :class="lessonType.index==k?'active':''" v-for="(item,k) in lessonList.list" @click="changeTab(k)" :key="item.levelId">
          <i class="iconfont icon-liebiao9"></i> {{item.level}}
        </li>
      </ul>
    </div>
    <div class="tab-container">
      <lesson-list v-show="lessonType.index==key" v-if="lessonList.list" :lesson="item" v-for="(item,key) in lessonList.list" :trun="lessonType.trunLeft" :key="key"></lesson-list>
    </div>
    <mt-popup
      v-model="cityBox" pop-transition="popup-fade"
      position="center">
      <p class="title">选择所在城市和地区</p>
      <mt-picker :slots="slots" :visibleItemCount="3" @change="onValuesChange"></mt-picker>
      <p class="clear save-btn">
        <span class="fl bs" @click="selectCity(false)">取消</span>
        <span class="fr bs" @click="selectCity(true)">保存</span></p>
    </mt-popup>
    <my-loading :visible="loading"></my-loading>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'
  import lessonList from '@/components/lessonList'
  import {Swipe, SwipeItem, TabContainer, TabContainerItem, Popup, Picker} from 'mint-ui';
  import Vue from 'vue';

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);
  Vue.component(Popup.name, Popup);
  Vue.component(Picker.name, Picker);
  Vue.component(lessonList.name, lessonList);

  export default {
    data() {
      return {
        loading: true,
        banner: {},//banner图数据
        lessonList:{
          list:[]
        },//课程列表数据
        lessonType: {
          index: 0
        },

        cityBox: false,
        city: {
          text: "骑二无比总部",
          tempCity: "北京",
          tempBranch: "骑二无比总部"
        },
        slots: [
          {
            flex: 1,
            defaultIndex: 1,
            values: ['南通', '北京', '武汉', '长春', '青岛', '廊坊'],
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ["骑二无比总部", "南通分部2", "南通分部3"],
            className: 'slot3',
            textAlign: 'center'
          }
        ],
        cityList: {
          "南通": ["南通分部1", "南通分部2", "南通分部3"],
          "北京": ["骑二无比总部1", "骑二无比总部2", "骑二无比总部3"],
          "武汉": ["武汉分部1", "武汉分部2", "武汉分部3"],
          "长春": ["长春分部1", "长春分部2"],
          "青岛": ["青岛分部1", "青岛分部2"],
          "廊坊": ["廊坊分部1", "廊坊分部2"]
        }
      }
    },
    methods: {
      ...mapActions("lesson", ["getBanner", "getLessonList"]),
      ...mapMutations("lesson", ["setDetial"]),
      changeTab(n) {
        this.lessonType.active = "tab-container" + n;
        this.lessonType.index = n;
      },
      setDate(time) {
        var temp = new Date();
        temp.setTime(time * 1000);
        return temp.toLocaleDateString().replace(/\//g, "-") + temp.toLocaleTimeString()
      },
      onValuesChange(picker, values) {
        picker.setSlotValues(1, this.cityList[values[0]]);
        this.city.tempCity = values[0];
        this.city.tempBranch = values[1];
      },
      selectCity(is) {
        this.cityBox = false;
        if (is) {
          this.city.text = this.city.tempBranch;
        }
      }
    },
    watch: {
    },
    computed: {

    },
    components: {},
    created() {
      //获取banner数据
      this.getBanner().then(res=>{
        this.loading = false;
        if(res.status == 0){
          this.banner = res.data;
        }else{
          console.log(res.massage);
        }
      }).catch(res=>{
        this.loading = false;
        console.log("接口报错了"+res);
      });
      //获取课程数据
      this.getLessonList().then(res=>{
        this.loading = false;
        if(res.status == 0){
          this.lessonList = res.data;
        }else{
          console.log(res.massage);
        }
      }).catch(res=>{
        this.loading = false;
        console.log("接口报错了"+res);
      });
      this.changeTab(this.lessonType.index);
    }
  }
</script>
<style lang="stylus">
  #index {
    padding: 50px 0;
    .header {
      width: 100%;
      height: 1.5rem;
      background: #fff;
      position: fixed;
      top: 0;
      z-index: 9;
      .city-btn {
        flex: 1 1 auto;
        line-height: 1.5rem;
        text-align: center;
        max-width: 4rem;
        padding: 0 13px;
        .city {
          color: #26a2ff;
        }
        .place {
          display: block;
          max-width: 3.8rem;
        }
      }
      .search-btn {
        flex: 1 1 auto;
        .search-box {
          width: 5rem;
          height: .9rem;
          margin-top: .3rem;
          border: 1px solid #eee;
          -webkit-border-radius: .45rem;
          -moz-border-radius: .45rem;
          border-radius: .45rem;
          background: #f7f7f7;
          overflow: hidden;
          line-height: .9rem;
        }
        span {
          color: #777;
          margin-left: 10px;
        }
        .icon-sousuo {
          color: #777;
          margin-right: 5px;
          font-size: 20px;
        }
      }
    }
    .swiper-w {
      height: 6rem;
    }
    .nav-tab {
      width: 100%;
      overflow: hidden;
      background: #fff;
      .nav-group {
        padding: 20px 10px;
        .nav-list {
          flex: 1 1 auto;
          color: #9d98a0;
          border-right: 1px solid #9d98a0;
        }
        .active {
          color: #e51f22;
        }
        .nav-list:last-of-type {
          border-right: none;
        }
      }
    }
    .list-container {
      background: #fff;
      padding: 10px;
      margin-top: 10px;
    }
    .lesson-list {
      padding: 0 10px;
      .list-item {
        border-bottom: 1px solid #f7f7f7;
        padding: 10px 0;
        .item-img {
          width: 2.5rem;
          height: 2.5rem;
          background: url(../../assets/images/user.jpg) no-repeat;
          background-size: cover;
          background-position: center;
          -webkit-border-radius: 10px;
          -moz-border-radius: 10px;
          border-radius: 10px;
        }
        .item-detial {
          flex: 3 1 auto;
          padding-left: 10px;
          position: relative;
          i{
            font-size: 12px;
            margin-right: 3px;
          }
          h2 {
            font-size: 14px;
            margin-bottom: 5px;
            color: #423e45;
          }
          p {
            line-height: 20px;
            font-size: 12px;
            color: #878585;
          }
          .item-price {
            font-size: 18px;
            color: #635f5f;
          }
          .item-status {
            padding: 2px 10px;
            color: #fff;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
          }
          .finish {
            background: #f38218;
          }
          .signing {
            background: #e1324a;
          }
          .doing {
            background: #3cdc20;
          }
        }
      }
    }
    .mint-popup {
      width: 80%;
      margin: 0 auto;
      border-radius: 10px;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      overflow: hidden;
      .title {
        font-size: 18px;
      }
      p {
        line-height: 40px;
        text-align: center;
        img {
          vertical-align: middle;
          margin-left: 30px;
        }
      }
      .save-btn {
        border-top: 1px solid #ddd;
        margin-top: 20px;
        color: #777;
        span {
          display: block;
          width: 50%;
          text-align: center;
        }
        span:last-of-type {
          border-left: 1px solid #ddd;
        }
      }
    }
  }
</style>
