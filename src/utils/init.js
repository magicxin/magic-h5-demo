import Vue from 'vue'
import axios from 'axios'
import config from '../../config'
Vue.$axios = Vue.prototype.$axios = axios
Vue.mixin({
  created() {
  	if(this.plusReady) {
  		let that = this
  		document.addEventListener("plusready", this.plusReady, false)
  	}
  },
  destroyed() {
  	document.removeEventListener("plusready", this.plusReady)
  },
  methods: {
    routeLogin() {
      this.$root.showLoginBox = true
    },
    addPath(url) {
      return config.asset + url
    }
  }
})

//Vue.directive('theme',{
//bind(el) {
//  console.log(el)
//  el.dataset.theme = Vue.$theme
//},
//updated(el) {
//  console.log(el)
//  el.dataset.theme = Vue.$theme
//}
//})

