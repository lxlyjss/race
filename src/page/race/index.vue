<template>
  <div id="index">
    赛事报名系统正在开发中,敬请期待...
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {

      }
    },
    methods:{

    },
    computed:{

    },
    components:{
    },
    created() {
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
