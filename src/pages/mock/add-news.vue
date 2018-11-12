<template>
	<div class="add-news">
	  图片<input type="file" accept="image/*" multiple="multiple" @change="change"/><br>
	 <select v-model="type">
	   <option value="hot">热门</option>
	   <option value="city">长春</option>
	   <option value="entertainment">娱乐</option>
	 </select><br>
	  标题<input v-model="title"/><br>
	  作者<input v-model="author"/><br>
	  内容<textarea v-model="article"></textarea><br>
	<van-button size="normal" @click="tap">上传</van-button><br>
	  
	</div>
</template>

<script>
	export default {
		name: 'add_news',
		data() {
			return {
				title:'',
				author: '',
				article: '',
				type: 'hot'
			}
		},
		created() {
//			this.getNewsList()
		},
		methods: {
			tap() {
			  this.$axios.post('/headline/news/create',{
			    title: this.title,
			    type: this.type,
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
	.add-news {
		
	}
</style>