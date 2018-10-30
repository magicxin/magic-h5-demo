import Vue from 'vue'

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