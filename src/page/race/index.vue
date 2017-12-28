<template>
  <div id="index">
    <div class="header-search">
      <div class="input-box">
        <span class="search-text fl">请输入赛事关键字</span>
        <span class="search-icon fr"></span>
      </div>
    </div>
    <div class="swiper">
      <mt-swipe :auto="2000">
        <mt-swipe-item v-if="banner.data" v-for="item in banner.data" :style="{backgroundImage:`url(${item.img})`,backgroundSize:'cover'}" :key="item.img"></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="raceList-w bs">
      <ul class="raceList-content">
        <li class="list-item clear" v-if="racelist.list" v-for="race in racelist.list" :key="race.race_id" @click="goDetial(race.race_id)">
          <div class="list-info fl">
            <p class="race-title">{{race.title}}</p>
            <p class="date">报名开始: {{setDate(race.signup_start_time)}}</p>
            <p class="date">报名结束: {{setDate(race.signup_end_time)}}</p>
            <p class="date">比赛开始: {{setDate(race.start_time)}}</p>
            <p class="date">比赛结束: {{setDate(race.end_time)}}</p>
            <p class="date">活动地点: {{race.address}}</p>
            <p class="date">报名人数: {{race.register_count}}</p>
            <p class="date"><img style="vertical-align: middle;" width="20" src="../../assets/images/eye.png"> {{race.views_num}}</p>
          </div>
          <div class="list-img fr">
            <img :src="race.poster">
            <p v-if="race.status==='signup'">活动报名中</p>
            <p v-if="race.status==='start'">活动进行中</p>
            <p v-if="race.status==='end'">活动已结束</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapState, mapActions,mapMutations,mapGetters} from 'vuex'
  export default {
    data() {
      return {

      }
    },
    methods:{
      ...mapActions(["getBanner","getRacelist"]),
      ...mapMutations(["setDate"]),
      setDate(time){
        var temp = new Date();
        temp.setTime(time*1000);
        return temp.toLocaleDateString().replace(/\//g,"-")+temp.toLocaleTimeString()
      },
      goDetial(id) {
        this.$router.push("/race/detial?raceId="+id);
      }
    },
    computed:{
      ...mapState(["banner","racelist"])
    },
    components:{
    },
    created() {
      this.getBanner();
      this.getRacelist();
    }
  }
</script>
<style lang="stylus">
  #index{
    width: 100%;
    padding-top: 50px;
    .header-search{
      width: 100%;
      height: 50px;
      background: #1965b5;
      position: fixed;
      z-index: 9;
      top: 0;
      .input-box{
        width: 78%;
        position: absolute;
        left: 0;
        right: 0;
        top: 10px;
        margin: 0 auto;
        height: 30px;
        background: #fff;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
        border-radius: 15px;
        overflow: hidden;
        .search-text{
          margin-top: 8px;
          padding-left: 10px;
          color: #ccc;
        }
        .search-icon{
          display: block;
          width: 20px;
          height: 20px;
          background: url(../../assets/images/search.png) no-repeat;
          -webkit-background-size: cover;
          background-size: cover;
          margin-top: 5px;
          margin-right: 5px;
        }
      }
    }
    .swiper{
      width: 100%;
      height: 5.5rem;
    }
    .raceList-w{
      width: 100%;
      padding: 0.3rem;
      padding-bottom: 1.2rem;
      background: #f1f1f1;
      .raceList-content{
        .list-item{
          margin-bottom: 10px;
          background: #fff;
          padding: 0.3rem;
          .list-info{
            width: 56%;
            .race-title{
              font-size: 14px;
              font-weight: 900;
            }
            p{
              font-size: 12px;
              line-height: 16px;
            }
          }
          .list-img{
            width: 44%;
            img{
              width: 100%;
            }
            p{
              text-align: center;
              margin: 0.5rem 0;
            }
          }
        }
      }
    }
  }

</style>
