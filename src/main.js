import Vue from 'vue'
import launch from './utils/launch'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import '@/css/common.css'
import '@/css/vant-mixin.css'
import '@/css/_reset.scss'

Vue.config.productionTip = false
Vue.use(Vant)

import init from './utils/init'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
