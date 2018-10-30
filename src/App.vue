<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
  	return {
  		count: 0
  	}
  },
  created() {
//	console.log(this.$route.exit)
  },
  methods: {
	plusReady() {
		let that = this
		plus.key.addEventListener("backbutton",function () {
      var ws = plus.webview.currentWebview()
      if(that.$route.meta.exit) {
      	that.count++
      	if(that.count === 1) {
      		that.$toast('再按一次退出')
      		setTimeout(function() {
      			that.count = 0
      		},1500)
      	}
      }
      if(that.count >= 2) {
      	plus.webview.close(ws, 'auto')
      }
   },false);
//		plus.webview.create('./launch.html', 'launch')
//			plus.webview.show('launch');
//			setTimeout(function() {
//				plus.webview.close('launch')
//			},1000)
	}
  }
}
</script>

<style>

</style>
