<template>
  <div class="main">
  	<!--<van-nav-bar title="标题"/>-->
		<div class="send-news" @click="popup">
			+
		</div>
		<component :is="page[active]"></component>
    <van-tabbar v-model="active">
		  <van-tabbar-item icon="shop">首页</van-tabbar-item>
		  <van-tabbar-item icon="chat">视频</van-tabbar-item>
		  <van-tabbar-item icon="chat">视频</van-tabbar-item>
		  <van-tabbar-item icon="records">微头条</van-tabbar-item>
		  <van-tabbar-item icon="gold-coin">我的</van-tabbar-item>
		</van-tabbar>
		
		<van-popup v-model="showPop" position="bottom" class="popup">
			<div class="flex-row justify-around toolbars">
				<div class="flex-column flex-center" @click="navTo">
					<div class="icon-container">
						<van-icon name="edit-data" class="icon-text"/>
					</div>
					<span>文字</span>
				</div>
				
				<div class="flex-column flex-center" @click="navTo">
					<div class="icon-container">
						<van-icon name="photo"  class="icon-image"/>
					</div>
					<span>图片</span>
				</div>
			</div>
			<div class="flex-row flex-center" @click="close">
				<van-icon name="close" />
			</div>
		</van-popup>
  </div>
</template>

<script>
import home from 'pages/home/home'
import videoCenter from 'pages/videoCenter/video-center'
import microNews from 'pages/microNews/micro-news'
import userCenter from 'pages/userCenter/user-center'
export default {
  name: 'hello',
  components: {home,videoCenter,microNews,userCenter},
  data() {
  	return {
  		active: 0,
  		showPop: false,
  		page: [home.name,videoCenter.name,'',microNews.name,userCenter.name]
  	}
  },
  mounted() {
  	
  },
  methods: {
  	popup() {
  		this.showPop = true
  	},
  	close() {
  		this.showPop = false
  	},
  	navTo() {
//		this.$router.push('')
  	}
  }
}
</script>

<style lang="scss" scoped>
	.main {
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
			/*background:#fff;*/
			@include bg_color($background-color-theme);
			border-radius: 50%;
			font-size:30px;
			line-height:50px;
			text-align: center;
		}
		.popup {
			padding:24px 24px 12px 24px;
		}
		.toolbars {
			padding: 24px 0;
		}
		.icon-container {
        font-size:20px;
        line-height:1em;
        padding:14px 14px 12px 14px;
        border: 1px solid #EBEBEB;
        border-radius: 18px;
        margin: 14px;
      }
      .icon-text {
        color: #578FEC;
      }
      .icon-image {
        color: #16DD9A;
      }
	}
	
</style>
