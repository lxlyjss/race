import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/tabPage'
import race from '@/page/race/index'
import lesson from '@/page/lesson/index'
import shop from '@/page/shop/index'
import user from '@/page/user/index'

import detial from '@/page/race/detial'
import vote from '@/page/race/vote'
import pay from '@/page/race/pay'
import myRace from '@/page/race/myRace'
import myRaceVote from '@/page/race/myRaceVote'
import myCollectionRace from '@/page/race/myCollectionRace'

import lessonDetial from '@/page/lesson/detial'
import lessonSign from '@/page/lesson/sign'
import lessonPay from '@/page/lesson/pay'
import payResult from '@/page/lesson/payResult'
import classInfo from '@/page/lesson/classInfo'
import myLesson from '@/page/lesson/myLesson'
import search from '@/page/lesson/search'

import shopDetial from '@/page/shop/detial'

import userInfo from '@/page/user/userInfo'
import myBaby from '@/page/user/myBaby'
import addBaby from '@/page/user/addBaby'
import login from '@/page/user/login'
import register from '@/page/user/register'
import findPw from '@/page/user/findPw'

Router.prototype.goBack = function (){
  this.isBack = true;
  window.history.go(-1);
}
Vue.use(Router)

let raceRoute = [
  {
    path: '/',
    redirect: '/index/lesson'
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    children:[
      {
        path: '/index',
        redirect: '/index/lesson'
      },
      {
        path: '/index/race',
        name: 'race',
        component: race
      },
      {
        path: '/index/lesson',
        name: 'lesson',
        component: lesson
      },
      {
        path: '/index/shop',
        name: 'shop',
        component: shop
      },
      {
        path: '/index/user',
        name: 'user',
        component: user
      }
    ]
  },
  {
    path: '/race/detial',
    name: 'raceDetial',
    component: detial
  },
  {
    path: '/race/vote',
    name: 'vote',
    component: vote
  },
  {
    path: '/race/pay',
    name: 'pay',
    component: pay
  },
  {
    path: '/race/myRaceVote',
    name: 'myRaceVote',
    component: myRaceVote
  },
  {
    path: '/race/myCollectionRace',
    name: 'myCollectionRace',
    component: myCollectionRace
  },
  {
    path: '/race/myRace',
    name: 'myRace',
    component: myRace
  }
];
let lessonRoute = [
  {
    path: '/lesson/detial',
    name: 'lessonDetial',
    component: lessonDetial
  },
  {
    path: '/lesson/sign',
    name: 'lessonSign',
    component: lessonSign
  },
  {
    path: '/lesson/pay',
    name: 'lessonPay',
    component: lessonPay
  },
  {
    path: '/lesson/payResult',
    name: 'payResult',
    component: payResult
  },
  {
    path: '/lesson/classInfo',
    name: 'classInfo',
    component: classInfo
  },
  {
    path: '/lesson/myLesson',
    name: 'myLesson',
    component: myLesson
  },
  {
    path: '/lesson/search',
    name: 'search',
    component: search
  }
];
let shopRoute = [
  {
    path: '/shop/detial',
    name: 'shopDetial',
    component: shopDetial
  }
];
let userRoute = [
  {
    path: '/user/userInfo',
    name: 'userInfo',
    component: userInfo
  },
  {
    path: '/user/login',
    name: 'login',
    component: login
  },
  {
    path: '/user/register',
    name: 'register',
    component: register
  },
  {
    path: '/user/findPw',
    name: 'findPw',
    component: findPw
  },
  {
    path: '/user/myBaby',
    name: 'myBaby',
    component: myBaby
  },
  {
    path: '/user/addBaby',
    name: 'addBaby',
    component: addBaby
  }
];
let allRoute = raceRoute.concat(lessonRoute,shopRoute,userRoute)
export default new Router({
  routes: allRoute,
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

