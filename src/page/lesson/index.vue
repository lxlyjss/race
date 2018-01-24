<template>
  <div id="index">
    <div class="header dflex">
      <div class="city-btn" @click="branchData.cityShow=true">
        <span class="fl place txt-dian">位置: <span class="city">{{branchData.branch}}</span></span>
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
                       :style="{backgroundImage:`url(${item.image})`,backgroundSize:'cover'}"
                       :key="item.courseId"></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="nav-tab">
      <ul class="nav-group dflex">
        <li class="nav-list tc" :class="lessonType==k?'active':''" v-for="(item,k) in lessonList.list" @click="changeTab(k)" :key="item.level">
          <i class="iconfont icon-liebiao9"></i> {{item.levelName}}
        </li>
      </ul>
    </div>
    <div class="tab-container">
      <lesson-list v-show="lessonType==key" v-if="lessonList.list" :lesson="item" v-for="(item,key) in lessonList.list" :key="key"></lesson-list>
    </div>
    <mt-popup
      v-model="branchData.cityShow" pop-transition="popup-fade"
      position="center">
      <p class="title">选择所在城市和地区</p>
      <mt-picker :slots="branchData.slots" :visibleItemCount="3" @change="onValuesChange"></mt-picker>
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
import { setCache,getCache } from '../../config/cache';

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
        banner: {//banner图数据
          list:[]
        },
        lessonList:{//课程列表数据
          list:[]
        }
      }
    },
    methods: {
      ...mapActions("lesson", [
        "getBanner", "getLessonList",
        "getIndexData","getBranchList"
      ]),
      ...mapMutations("lesson", [
        "changeLessonType","setFormatBranch",
        "setSlotsByLxl","setBranchData"
      ]),
      changeTab(n) {
        this.changeLessonType(n);
      },
      setDate(time) {
        var temp = new Date();
        temp.setTime(time * 1000);
        return temp.toLocaleDateString().replace(/\//g, "-") + temp.toLocaleTimeString()
      },
      onValuesChange(picker, values) {
        picker.setSlotValues(1, this.formatBranchList[values[0]]);
        this.setBranchData({type:"tempBranch",value:values[1]});
      },
      selectCity(bool) {//确定选择分部
        this.setBranchData({type:"cityShow",value:false});
        if (bool) {
          this.setBranchData({type:"branch",value:this.branchData.tempBranch});
          this.setBranchData({type:"branchId",value:this.getPFCode(this.branchList.list,this.branchData.branch)});
          console.log(this.branchData);
          setCache("branchData",JSON.stringify({
            "branch":this.branchData.branch,
            "branchId": this.branchData.branchId
          }))
        }
      },
      setProvienceArr(list) {//将省份和分部列表存储;
        let tempObj = {};
        if(list instanceof Array) {
          for(let i = 0; i < list.length;i++) {
            let arr = [];
            for(let j = 0; j < list[i].list.length;j++) {
              arr.push(list[i].list[j].name);
            }
            tempObj[list[i].name] = arr;
          }
        }else{
          console.log("list不是数组类型")
        }
        return tempObj;
      },
      //给城市选择器设置初始化数据
      setSlotsValues(formatData) {
        let arr = [];
        if(formatData instanceof Object){
          for(let k in formatData) {
            arr.push(k);
          }
        }else{
          console.log("formatData不是object类型")
        }
        return arr;
      },
      //根据选择的分部名称获取分部code,并且赋值给branchData;
      getPFCode(list,f) {
        let code = "";
        if(list instanceof Array) {
          for(let i = 0; i < list.length;i++) {
            for(let j = 0 ; j < list[i].list.length; j++) {
              if(list[i].list[j].name == f) {
                code = list[i].list[j].code;
              }
            }
          }
        }else{
          console.log("formatData不是数组类型")
        }
        return code;
      },
      setBranchFn() {
        let branchData = JSON.parse(getCache("branchData"));
        if(branchData) {
          this.setBranchData({type:"branch",value:branchData.branch});
          this.setBranchData({type:"branchId",value:branchData.branchId});
        }
      }
    },
    watch: {
    },
    computed: {
      ...mapState("lesson",["lessonType","branchList","branchData","formatBranchList"])
    },
    created() {
      this.changeTab(this.lessonType);
      this.setBranchFn();
      //获取固定首页数据
      this.getIndexData({
        "branchId": 1,
        "type": 1,
        "page": 1,
        "pageSize": 10
      }).then(res=>{
        res[0].status==0?(this.lessonList = res[0].data):(this.lessonList);
        res[1].status==0?(this.banner = res[1].data):(this.banner);
        this.loading = false;
      });
      //获取分部列表
      this.getBranchList().then(res=>{
        console.log(this.branchList);
        //获取到分部列表之后,需要将所有省份和分部按照固定格式存储起来,
        this.setFormatBranch(this.setProvienceArr(this.branchList.list));
        this.setSlotsByLxl(this.setSlotsValues(this.formatBranchList));
        console.log(this.formatBranchList);
      });
    }
  }
</script>
<style lang="stylus">
  #index {
    width: 100%;
    padding: 50px 0;
    position: absolute;
    top: 0;
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
        min-width: 4rem;
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
    .tab-container{
      position: relative;
    }
    .lesson-list {
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
