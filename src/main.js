// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'

import myLoading from "@/components/myLoading"

import { fetch } from "./config/fetch"
import { getCache } from "./config/cache"

import { Header, Button, Spinner, Toast,Indicator} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Spinner.name, Spinner);

//全局注册loading组件
Vue.component(myLoading.name, myLoading);

Vue.prototype.$http = axios;
//注册全局检查登录方法;
Vue.prototype.$checkLogin = (fn) =>{
  Indicator.open({
    spinnerType: 'fading-circle',
    text:"获取数据中..."
  });
  let self = this;
  let token = getCache("access_token");
  if(token){
    axios.get("open/isLogin",{
      params:{
        token: token
      }
    }).then(res=>{
      Indicator.close();
      console.log(res.data);
      if(res.data.status == 0) {
        if(res.data.data.result === 0) {//登录成功之后
          fn(1);
        }else{
          //登录已过期;
          Toast({message:"登录已过期,请重新登录!",duration: 1000})
          setTimeout(()=>{
            router.push("/user/login");
          },1000);
        }
      }else{
        Toast({message:res.data.msg,duration: 1000});
      }
    }).catch(err=>{
      Indicator.close();
      Toast("网络错误,请重新刷新")
    });
  }else{
    Indicator.close();
    Toast({message:"当前未登录!请登录!",duration: 1000})
    setTimeout(()=>{
      router.push("/user/login");
    },1000);
  }
};

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
