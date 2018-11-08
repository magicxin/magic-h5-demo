<template>
	<div class="newslist">
	   图片<input type="file" accept="image/*" multiple="multiple" @change="change"/><br>
		 <select v-model="newsType">
			 <option value="all">推荐</option>
			 <option value="hot">热点</option>
			 <option value="city">长春</option>
			 <option value="entertainment">娱乐</option>
		 </select><br>
	  标题<input v-model="title"/><br>
	  作者<input v-model="author"/><br>
	  内容<textarea v-model="article"></textarea><br>
	<van-button size="normal" @click="tap">普通按钮</van-button><br>
	  
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
				isLoading: false,
				article:'',
				title: '',
				author: '',
				images: [],
				newsType: 'all',
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
//			this.getNewsList()
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
			},
			tap() {
			  this.$axios.post('/headline/news/create',{
					title: this.title,
					type: this.newsType,
          author:{
            name:this.author,
            avatar:'/avatar.jpg'
          },
          images:this.images,
          content:this.article    
			  })
			  .then(()=>{
			    this.$toast('创建文章成功！')
			  })
			},
			change(e) {
			  console.log(e.target.files)
			  var formData = new FormData();
			  Array.prototype.slice.call(e.target.files).forEach((item,index)=>{
			    formData.append('file' + index, item);
			  })
			  this.$axios.post('/headline/upload/upload',formData)
			  .then((res)=>{
			    console.log(res.data)
			    this.images = res.data.urls
			    this.$toast('上传成功')
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