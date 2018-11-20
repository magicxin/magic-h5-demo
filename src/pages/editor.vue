<template>
	<div class="editor">
		<van-nav-bar left-text="取消"@click-left="close" @click-right="send">
      <div slot="right">发布</div>
    </van-nav-bar>
    <div>
      <textarea class="textarea" maxlength="100" v-focus></textarea>
      <div class="img-btn">
        +
      </div>
    </div>
    <div class="bold-line"></div>
    <van-cell icon="location" title="所在位置" is-link />
	</div>
</template>

<script>
	export default {
		name:'editor',
		methods: {
		  close() {
		    this.$emit('close')
		  },
		  send() {
		    
		  }
		}
	}
</script>

<style lang="scss">
	.editor {
		.textarea {
		  width:100%;
		  height:120px;
		  border:none;
		  padding:10px;
		}
		.img-btn {
		  width:80px;
		  height:80px;
		  display:flex;
		  justify-content: center;
		  color:#999;
		  align-items: center;
		  font-size: 40px;
		  background:#EBEBEB;
		  margin:0 0 10px 10px;
		}
	}
</style>