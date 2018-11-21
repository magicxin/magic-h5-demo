<template>
	<div class="home">
		<header class="ma-header">
      <div class="logo"></div>
      <div class="search" @click="routeTo">
        <van-icon name="search" />
        <div style="margin-left:4px;">爬山偶遇外交部长</div>
      </div>
    </header>
    <van-tabs v-model="swipe" swipeable>
      <van-tab class="tab-container" ref="$scrolltop" v-scroll v-for="(item,index) in tabs" :title="item.title" :key="index">
          <news-list :type="item.type"></news-list>
      </van-tab>
    </van-tabs>
	</div>
</template>

<script>
  import newsList from 'pages/home/newslist'
	export default {
		name: 'home',
		components: {newsList},
		data() {
			return {
			  tabs: [{
        title: '推荐',
        type: ''
      },{
        title: '热点',
        type: 'hot'
      },{
        title: '长春',
        type: 'city'
      },{
        title: '娱乐',
        type: 'entertainment'
      }],
        swipe: 0,
			}
		},
		created() {
			
		},
		mounted() {
		  
		},
		methods: {
			routeTo() {
			  this.$router.push('search')
			}
		},
    activated() {
      this.$refs.$scrolltop.forEach((item,index)=>{
        item.$el.scrollTop = item.$el.dataset.top
      })
    }
	}
</script>

<style lang="scss" scoped>
	.home {
	  .ma-header {
      width: 100%;
      height: 46px;
      position: relative;
      top: 0;
      left: 0;
      display:flex;
      align-items:center;
      line-height: 46px;
      font-size: 17px;
      background: #D74B28;
      /*background: -webkit-linear-gradient(top,rgba(215,75,40,1),rgba(215,75,40,0.8));*/
      z-index: 1999;
      /*border-bottom: 1px solid rgba(215,75,40,0.8);*/
      -ms-touch-action: none;
      padding: 0 14px;
    }
    .search {
      flex:1;
      height:20px;
      display:flex;
      align-items: center;
      margin-left:14px;
      background: #F4F5F7;
      @include bg_color($background-color-theme);
      color:#333;
      font-size:12px;
      padding: 0 12px;
      border-radius: 4px;
    }
    .logo {
      width:70px;
      height: 18px;
      background-image:url('~@/../static/img/logo.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .tab-container {
      height:calc(100vh - 140px);
    }
	}
</style>