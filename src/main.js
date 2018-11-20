import Vue from 'vue'
import launch from './utils/launch'
import App from './App'
import router from './router'
import Vant from 'vant'
import FastClick from 'fastclick';
import VueVideoPlayer from 'vue-video-player'
//import '@/css/common.scss'
import 'vant/lib/index.css'
import '@/css/_reset.scss'
import 'video.js/dist/video-js.css'

Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)
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
