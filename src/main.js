import Vue from 'vue'
import launch from './utils/launch'
import App from './App'
import router from './router'
import Vant from 'vant'
import FastClick from 'fastclick';
import '@/css/common.scss'
import 'vant/lib/index.css'
import '@/css/_reset.scss'

Vue.config.productionTip = false
Vue.use(Vant)
FastClick.attach(document.body);

import init from './utils/init'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data() {
    return{
      theme:'theme',
      isLogin: false,
      showLoginBox:false,
      user:''
    }
  }
})
