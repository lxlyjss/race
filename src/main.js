// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'

import myLoading from "@/components/myLoading"

import { fetch } from "./config/fetch"

import { Header, Button, Spinner} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Spinner.name, Spinner);

//全局注册loading组件
Vue.component(myLoading.name, myLoading);

Vue.prototype.$http = axios;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
