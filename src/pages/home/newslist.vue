<template>
	<div class="newslist">
	  <van-pull-refresh v-model="isLoading" @refresh="getNewsList">
      <div class="card flex-column" v-for="(item,index) in newsList" :key="index">
        <section class="flex-row">
          <header class="title">{{item.title}}</header>
          <div class="image-container">
            <img :src="item.images[0]"/>
          </div>
        </section>
        <footer class="footer">
          <van-icon name="contact" class="icon-author"/>
          <span>{{item.author}}</span>
        </footer>
      </div>
    </van-pull-refresh>
		<!--<div class="card flex-column">
			<section class="flex-row">
				<header class="title">习近平主持政治局会议 分析研究当前经济形势和经济工作</header>
				<div class="image-container">
					<div id="video" style="width:100%;height:100px;background-color:#000000;margin:auto"></div>
				</div>
			</section>
			<footer class="footer">
				<van-icon name="edit-data" class="icon-text"/>
				<span>央视网新闻</span>
			</footer>
		</div>-->
	</div>
</template>

<script>
	export default {
		name: 'newslist',
		data() {
			return {
				newsList: [],
				isLoading: false
			}
		},
		props: {
			type: {
				type: String,
				default: "all",
				validator: val => ["all", "hot", "city", "entertainment"].indexOf(val) > -1
			}
		},
		created() {
			this.getNewsList()
		},
		methods: {
			plusReady() {
//			  let video = new plus.video.VideoPlayer('video',{
//        src:'http://vjs.zencdn.net/v/oceans.mp4',
//        controls: false
//      });
			},
			getNewsList() {
			  this.isLoading = true
				this.$axios.get('getNews',{params: {
				  type:this.type
				}})
				.then(res=>{
				  console.log(res.data)
				  this.newsList = res.data
				  this.isLoading = false
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.newslist {
		.card {
			display:flex;
			padding:14px;
			.title {
			  color:#333;
				padding-right:10px;
				flex: 5 1 0;
			}
			.image-container {
				flex: 3 1 0;
				img {
					width:100%;
					object-fit: cover;
				}
				video {
					width:100%;
					height:100px;
					object-fit: cover;
				}
			}
			.footer {
			  display: flex;
			  align-items: center;
				padding: 4px 0;
				font-size: 12px;
				border-bottom: 1px solid #EBEBEB;
			}
			.icon-author {
			  color: red;
        margin-right:4px;
			}
		}
	}
</style>