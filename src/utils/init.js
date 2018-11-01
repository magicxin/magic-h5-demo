import Vue from 'vue'
import axios from 'axios'

Vue.mixin({
  created() {
  	if(this.plusReady) {
  		let that = this
  		document.addEventListener("plusready", this.plusReady, false)
  	}
  },
  destroyed() {
  	document.removeEventListener("plusready", this.plusReady)
  }
})

Vue.$axios = Vue.prototype.$axios = axios