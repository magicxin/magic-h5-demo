<template>
	<div class="micro-news">
		<div v-for="(item,index) in [1]">
		  <div class="micro-item">
		    <header>
		      <div class="avatar">
		        
		      </div>
		      <div>成都商报</div>
		      <div>关注</div>
		    </header>
		    <content>
		      <div></div>
		      <div></div>
		    </content>
		  </div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'micro-news',
		data() {
			return {
        
			}
		},
		created() {
			
		},
		methods: {
			plusReady() {
			  
			}
		}
	}
</script>

<style lang="scss">
	.micro-news {
	  .micro-item {
	    header {
	      display:flex;
	    }
	  }
	}
</style>