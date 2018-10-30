<template>
  <div class="main">
  	<!--<van-nav-bar title="标题"/>-->
  	<header class="header">
  		<div class="logo"></div>
  		<div class="search">
  			<van-icon name="search" />
  			<div style="margin-left:4px;">爬山偶遇外交部长</div>
  		</div>
  	</header>
		<van-tabs v-model="swipe" swipeable>
		  <van-tab class="tab-container" v-for="(item,index) in tabs" :title="item.title" :key="index">内容{{ index }}</van-tab>
		</van-tabs>
		
		<div class="send-news">
			+
		</div>
		
    <van-tabbar v-model="active">
		  <van-tabbar-item icon="shop">首页</van-tabbar-item>
		  <van-tabbar-item icon="chat">视频</van-tabbar-item>
		  <van-tabbar-item icon="chat">视频</van-tabbar-item>
		  <van-tabbar-item icon="records">微头条</van-tabbar-item>
		  <van-tabbar-item icon="gold-coin">我的</van-tabbar-item>
		</van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
  	return {
  		tabs: [{
  			title: '推荐'
  		},{
  			title: '热点'
  		},{
  			title: '长春'
  		},{
  			title: '娱乐'
  		}],
  		active: 0,
  		swipe: 0
  	}
  },
  mounted() {
  	
  },
  methods: {
  	
  }
}
</script>

<style lang="scss">
	.main {
		.header {
			width:100%;
			height: 46px;
	    position: relative;
	    display:flex;
	    align-items:center;
	    line-height: 46px;
	    padding: 0 14px;
		}
		.search {
			flex:1;
			height:20px;
			display:flex;
			align-items: center;
			margin-left:14px;
			background: #F4F5F7;
			color:#333;
			font-size:12px;
			padding: 0 12px;
			border-radius: 4px;
		}
		.logo {
			width:70px;
			height: 18px;
			background-image:url('//s3b.pstatp.com/growth/mobile_list/image/wap_logo@3x_581de69e.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
		}
		.tab-container {
			height:calc(100vh - 140px);
		}
		.send-news {
			width:50px;
			height:50px;
			position:absolute;
			left:50%;
			bottom: 6px;
			transform: translate(-50%);
			color:#000;
			border: 1px solid #E4E4E4;
			z-index: 2;
			background:#fff;
			border-radius: 50%;
			font-size:30px;
			line-height:50px;
			text-align: center;
			
		}
	}
	
</style>
