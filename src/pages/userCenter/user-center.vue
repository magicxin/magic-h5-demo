<template>
	<div class="user-center">
	  <div class="user-background">
	    <div class="user-cell">
	      <div class="avatar"><img src="../../../static/img/news8.jpg"/></div>
	      <div>MagicSui</div>
	      <div>
	        <van-icon slot="right-icon" />
	      </div>
	    </div>
	    <div class="user-tools">
	      <!--start tools -->
      <div class="tool-item">
          <span>3</span>
          <span>动态</span>
        </div>
        
        <div class="tool-item">
          <span>4</span>
          <span>粉丝</span>
        </div>
        
        <div class="tool-item" @click="toggleTheme">
          <span>4</span>
          <span>七天访客</span>
        </div>
      <!--end tools -->
	    </div>
	  </div>
		<div class="tools-container">
		  <!--start tools -->
		  <div class="tool-item">
        <van-icon name="like-o" class="icon icon-collection"/>
        <span>收藏</span>
      </div>
      
      <div class="tool-item">
        <van-icon name="clock" class="icon icon-history"/>
        <span>历史</span>
      </div>
      
      <div class="tool-item" @click="toggleTheme">
        <van-icon name="password-not-view" class="icon icon-theme"/>
        <span>夜间</span>
      </div>
      
      <div v-show="false" class="tool-item">
        <van-icon name="password-view" class="icon icon-theme"/>
        <span>日间</span>
      </div>
		  <!--end tools -->
		</div>
	</div>
</template>

<script>
	export default {
		name: 'user-center',
		data() {
			return {
        
			}
		},
		created() {
			
		},
		methods: {
			toggleTheme() {
			  this.$root.theme = this.$root.theme === 'theme1' ? 'theme' : 'theme1'
			}
		}
	}
</script>

<style lang="scss">
	.user-center {
	  .user-background {
	    color:#fff;
	    background: #3b3b3b;
	    .user-cell {
	      display:flex;
	      align-items: center;
	      padding:20px;
	      .avatar {
          width:60px;
          height:60px;
          margin-right:20px;
          border-radius:50%;
          overflow:hidden;
          img {
            width:100%;
            height:100%;
            object-fit: cover;
          }
        }
	    }
	  }
	  .tools-container,.user-tools {
	    display:flex;
	  }
	  .tool-item {
	    font-size:12px;
	    display:flex;
	    flex-flow: column;
	    justify-content: center;
	    align-items: center;
	    flex: 1 1 0;
	    padding:14px 0;
	    .icon {
	      font-size:20px;
	      margin-bottom:4px;
	    }
	    .icon-collection {
	      color:#DFA35B;
	    }
	    .icon-history {
        color:#D5869C;
      }
      .icon-theme {
        color:#87A2E5;
      }
	  }
	}
</style>