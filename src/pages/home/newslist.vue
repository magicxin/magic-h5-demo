<template>
	<div class="newslist">
	  <!--<van-pull-refresh class="list-container" v-model="isLoading" @refresh="getNewsList">-->
    <!-- content goes here -->
	  <jc-loadmore class="list-container" :onRefresh="refresh" :onInfinite="loadmore">
      <div class="card flex-column" v-for="(item,index) in newsList" :key="index" @click="routeTo(item._id)">
        <section class="flex-row">
          <header class="title">{{item.title}}</header>
          <div class="image-container">
            <img :src="addPath(item.images[0])"/>
          </div>
        </section>
        <footer class="footer">
          <van-icon name="contact" class="icon-author"/>
          <span>{{item.author.name}}</span>
        </footer>
      </div>
      <div v-if="finished" slot="infinite" class="text-center">没有更多数据</div>
      </jc-loadmore>
      
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
  import jcLoadmore from 'components/jc-loadmore'
	export default {
		name: 'newslist',
		components: {jcLoadmore},
		data() {
			return {
				newsList: [],
        count:0,
        finished:false
			}
		},
		props: {
			type: {
				type: String,
				default: "all",
				validator: val => ["", "hot", "city", "entertainment"].indexOf(val) > -1
			}
		},
		created() {
			this.getNewsList('hot','5','0')
        .then(res=>{
          this.newsList = res.data.data
        })
		},
		mounted() {
		  
		},
		methods: {
			plusReady() {
//			  let video = new plus.video.VideoPlayer('video',{
//        src:'http://vjs.zencdn.net/v/oceans.mp4',
//        controls: false
//      });
			},
			loadmore(done) {
			  this.count++
			  this.getNewsList('hot','5',this.count*5)
			  .then(res=>{
			    this.newsList = this.newsList.concat(res.data.data)
			    if(res.data.data.length === 0) {
			      this.finished = true
			    }
			    done()
			  })
			},
			refresh(done) {
			  this.getNewsList('hot','5','0')
			  .then(res=>{
			    this.newsList = res.data.data
			    done()
			  })
			},
			getNewsList(type,pageSize,count) {
			  this.isLoading = true
				return new Promise((resolve,reject)=>{
				  this.$axios.get(this.addHost('/headline/news/list'),{
            params:{
              type:this.type,
              pageSize: pageSize,
              count: count
            }
          }).then(resolve)
          .catch(reject)
				})
//				.then(res=>{
//				  this.newsList = this.newsList.concat(res.data.data)
//				  console.log(this.newsList)
//				  this.isLoading = false
//				  this.bottomLoaded = false;
//				  if(res.data.data.length === 0) this.finished = true
//				})
			},
			routeTo(id) {
			  this.$router.push({
			    name:'news_detail',
			    params: {
			      _id: id
			    }
			  })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.newslist {
	  height:100%;
	  position:relative;
	  /*.list-container {
	    height:100%;
	    overflow: scroll;
      -webkit-overflow-scrolling : touch;
	  }*/
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
				height:33vw;
				img {
					width:100%;
					height:100%;
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