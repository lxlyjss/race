<template>
  <div id="myRaceVote">
    <div class="header-title">
      <mt-header title="我的赛事收藏" :style="{background:'#1965b5'}">
        <router-link to="/index/user" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="raceList-w bs">
      <ul class="raceList-content">
        <li class="list-item clear" v-if="userInfo.userCollectionRaceList" v-for="race in userInfo.userCollectionRaceList" :key="race.race_id" @click="goDetial(race.race_id)">
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
  import {mapState,mapActions} from 'vuex'
  export default {
    data() {
      return {

      }
    },
    methods:{
      ...mapActions(['getUserInfo']),
      setDate(time){
        var temp = new Date();
        temp.setTime(time*1000);
        return temp.toLocaleDateString().replace(/\//g,"-")+temp.toLocaleTimeString()
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    created() {
      if(this.userInfo.userCollectionRaceList.length <= 0){
        this.getUserInfo();
      }
    }
  }
</script>
<style lang="stylus">
  #myRaceVote{
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
