<template>
  <div id="classInfo" class="bs">
    <div class="header">
      <mt-header title="课时详情" fixed>
        <router-link to="/index/lesson" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="container">
      <ul class="class-group">
        <li class="class-item dflex">
          <div class="title status2">
            <p><img src="../../assets/images/star_w.png" width="16">第一课</p>
          </div>
          <div class="date">
            <p>2018.01.12</p>
          </div>
          <div class="btn-area">
            <p><span class="btn1">查看图片</span></p>
          </div>
        </li>
        <li class="class-item dflex">
          <div class="title status2">
            <p><img src="../../assets/images/star_w.png" width="16">第二课</p>
          </div>
          <div class="date">
            <p>2018.01.12</p>
          </div>
          <div class="btn-area">
            <p><span class="btn1">查看图片</span></p>
          </div>
        </li>
        <li class="class-item dflex">
          <div class="title status2">
            <p><img src="../../assets/images/star_w.png" width="16">第三课</p>
          </div>
          <div class="date">
            <p>2018.01.12</p>
          </div>
          <div class="btn-area">
            <p><span class="btn1">查看图片</span></p>
          </div>
        </li>
        <li class="class-item dflex">
          <div class="title status2">
            <p><img src="../../assets/images/star_w.png" width="16">第四课</p>
          </div>
          <div class="date">
            <p>2018.01.12</p>
          </div>
          <div class="btn-area">
            <p><span class="btn1">查看图片</span></p>
          </div>
        </li>
        <li class="class-item dflex">
          <div class="title status2">
            <p><img src="../../assets/images/star_w.png" width="16">第五课</p>
          </div>
          <div class="date">
            <p>2018.01.12</p>
          </div>
          <div class="btn-area">
            <p><span class="btn1">查看图片</span></p>
          </div>
        </li>
        <li class="class-item dflex">
          <div class="title status2">
            <p><img src="../../assets/images/star_w.png" width="16">第六课</p>
          </div>
          <div class="date">
            <p>2018.01.12</p>
          </div>
          <div class="btn-area">
            <p><span class="btn1">查看图片</span></p>
          </div>
        </li>
        <li class="class-item dflex">
          <div class="title status1">
            <p><img src="../../assets/images/star_w.png" width="16">第七课</p>
          </div>
          <div class="date">
            <p>2018.01.12</p>
          </div>
          <div class="btn-area">
            <p><span class="btn1">查看图片</span></p>
          </div>
        </li>
        <li class="class-item dflex">
          <div class="title">
            <p><img src="../../assets/images/star_w.png" width="16">第八课</p>
          </div>
          <div class="date">
            <p>2018.01.12</p>
          </div>
          <div class="btn-area">
            <p><span class="btn1">已请假</span></p>
          </div>
        </li>
        <li class="class-item dflex">
          <div class="title">
            <p><img src="../../assets/images/star_w.png" width="16">第九课</p>
          </div>
          <div class="date">
            <p>2018.01.12</p>
          </div>
          <div class="btn-area">
            <p><span class="btn1">请假</span></p>
          </div>
        </li>
        <li class="class-item dflex">
          <div class="title">
            <p><img src="../../assets/images/star_w.png" width="16">第十课</p>
          </div>
          <div class="date">
            <p>2018.01.12</p>
          </div>
          <div class="btn-area">
            <p><span class="btn1">请假</span></p>
          </div>
        </li>
        <li class="class-item dflex">
          <div class="title status3">
            <p>顺延课时</p>
          </div>
          <div class="date">
            <p>2018.01.12</p>
          </div>
          <div class="btn-area">
            <p><span class="btn1">请假</span></p>
          </div>
        </li>
      </ul>
    </div>
    <div class="btn-group">
      <div class="btn" @click="active='tab-container2'">
        <span>结业视频</span>
      </div>
      <div class="btn red-btn" @click="$router.push('/lesson/detial')">
        <span>评价</span>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

</script>
<style lang="stylus">
  #classInfo{
    padding: 40px 0 50px;
    height: auto;
    .container{
      padding: 10px 20px;
      background: #fff;
      .class-group{
        background: #f7f7f7;
        padding-bottom: 20px;
        .class-item{
          padding: 20px 10px 0;
          p{
            line-height: 30px;
            font-size: 12px;
            text-align: center;
            color: #777;
          }
          .title{
            width: 20%;
            background: #2ca9f6;
            padding: 0 10px;
            P{
              color: #fff;
            }
            img{
              vertical-align: text-bottom;
            }
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          .status1{
            background: #f6365a;
          }
          .status2{
            background:#5d5d5d;
          }
          .status3{
            background:#2751b1;
          }
          .date{
            width: 46%;
            background: #fff;
            p{
              text-align: center;
            }
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
          .btn-area{
            width: 24%;
            padding-left: 10px;
            .btn1{
              background: #fff;
              padding: 0 10px;
              border: 1px solid #ddd;
              border-radius: 5px;
              display: block;
            }
          }
        }
      }
    }
  }
</style>
