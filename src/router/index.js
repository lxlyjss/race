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

Router.prototype.goBack = function (){
  this.isBack = true;
  window.history.go(-1);
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {
          path: '/index',
          redirect: '/index/race'
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
  ]
})
