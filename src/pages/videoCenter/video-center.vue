<template>
	<div class="video-center">
		<div v-for="item in [1,1,1,1,1,1,1,1,1,1,1,2,3,4,5,7,8,9,9]" style="padding:40px;" @click="goto">{{item}}</div>
	</div>
</template>

<script>
	export default {
		name: 'video-center',
		data() {
			return {
        
			}
		},
		created() {
			
		},
		mounted() {
		  console.log('mounted')
		},
		activated() {
		  console.log('activated')
		},
		methods: {
			goto() {
			  this.$router.push({
			    name:'news_detail',
			    params: {
			      _id: '5be8d3cc250ab718e857513f'
			    }
			  })
			}
		}
	}
</script>

<style lang="scss">
	
</style>