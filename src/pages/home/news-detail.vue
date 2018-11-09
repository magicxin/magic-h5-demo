<template>
	<div class="news-detail">
	  <div v-html="content"></div>
	</div>
</template>

<script>
	export default {
		name: 'news_detail',
		data() {
			return {
				content:''
			}
		},
		created() {
			console.log(this.$route.params)
			this.$axios.get(this.addHost('/headline/news/search'),{
			  params:{
			    _id:this.$route.params._id
			  }
			})
			.then(res=> {
			  this.content = res.data.data.content
			  console.log(res)
			})
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.news-detail {
	  article {
	    padding:10px;
	    img {
	      width:100%;
	      margin:10px 0;
	    }
	  }
	  .article__author {
	    display:flex;
	    align-items: center;
	    padding:4px 0;
	  }
	  .article__author > * {
	    margin-right:4px;
	  }
	  .avatar {
	    width: 24px;
      height: 24px;
      img {
        margin:0;
        width:100%;
        height:100%;
        object-fit: cover;
      }
	  }
	}
</style>