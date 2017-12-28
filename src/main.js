// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'

import jQuery from "@/assets/js/jquery-1.8.3.min.js"

import { Header, Button } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);


Vue.prototype.$http = axios;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
