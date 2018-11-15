<template>
	<div class="user-center">
	  <div v-if="$root.user" class="user-background">
	    <div class="user-cell">
	      <div class="avatar"><img :src="addPath($root.user.avatar)"/></div>
	      <div class="nickname">{{$root.user.nickname}}</div>
	      <div class="icon flex-row flex-center">
	        <van-icon name="arrow" />
	      </div>
	    </div>
	    <div class="user-tools">
	      <!--start tools -->
      <div class="tool-item">
          <span>{{$root.user.dynamic.length}}</span>
          <span class="dark-grey">动态</span>
        </div>
        
        <div class="tool-item">
          <span>{{$root.user.followers.length}}</span>
          <span class="dark-grey">粉丝</span>
        </div>
        
        <div class="tool-item" @click="toggleTheme">
          <span>{{$root.user.watchers.length}}</span>
          <span class="dark-grey">七天访客</span>
        </div>
      <!--end tools -->
	    </div>
	  </div>
	  <div v-else class="user-background">
      <div class="user-cell" @click="routeLogin">
        <div class="avatar"><img src="../../../static/img/avatar.png"/></div>
        <div class="nickname">请登录</div>
        <div class="icon flex-row flex-center">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="user-tools">
        <!--start tools -->
      <div class="tool-item">
          <span>0</span>
          <span class="dark-grey">动态</span>
        </div>
        
        <div class="tool-item">
          <span>0</span>
          <span class="dark-grey">粉丝</span>
        </div>
        
        <div class="tool-item" @click="toggleTheme">
          <span>0</span>
          <span class="dark-grey">七天访客</span>
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
		
		<div class="bold-line"></div>
		<van-cell title="我的关注" is-link />
		<van-cell title="消息通知" is-link />
		<div class="bold-line"></div>
		<van-cell title="我的钱包" is-link value="手机充值"/>
		<div class="bold-line"></div>
		<van-cell title="用户反馈" is-link />
		<van-cell title="系统设置" is-link />
		<van-cell title="广告设置" is-link />
		<div class="bold-line"></div>
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
	  height:calc(100vh - 50px);
	  overflow:scroll;
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
        .nickname {
          flex: 4 1 0;
        }
        .icon {
          flex:1 1 0;
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
      .dark-grey {
          color:#9D9D9D;
        }
	  }
	  .bold-line {
	    width:100vw;
	    height:10px;
	    background-color:#F4F5F7;
	  }
	}
</style>