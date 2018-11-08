<template>
  <div id="app" :data-theme="$root.theme">
    <van-popup class="login-box" v-model="$root.showLoginBox" position="right">
      <van-cell-group class="form-box">
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
        />
        <van-field
          class="mb-14"
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
        <van-button class="mb-14" size="large" type="danger" @click="login">登录</van-button>
        <van-button class="mb-14" size="large" @click="cancel">取消</van-button>
      </van-cell-group>
    </van-popup>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        count: 0,
        username: '',
        password: ''
      }
    },
    created() {
      //  console.log(this.$route.exit)
    },
    methods: {
      plusReady() {
        let that = this
        plus.key.addEventListener("backbutton", function() {
          var ws = plus.webview.currentWebview()
          if(that.$route.meta.exit) {
            that.count++
              if(that.count === 1) {
                that.$toast('再按一次退出')
                setTimeout(function() {
                  that.count = 0
                }, 1500)
              }
          }
          if(that.count >= 2) {
            plus.webview.close(ws, 'auto')
          }
        }, false);
        //    plus.webview.create('./launch.html', 'launch')
        //      plus.webview.show('launch');
        //      setTimeout(function() {
        //        plus.webview.close('launch')
        //      },1000)
      },
      cancel() {
        this.$root.showLoginBox = false
      },
      login() {
        this.$axios.post('/headline/user/login',{password:this.password,username:this.username})
        .then(res=>{
          console.log(res.data)
          this.$root.user = res.data.data
          this.$root.showLoginBox = false
        })
      }
    }
  }
</script>

<style lang="scss">
  #app {
    /*height:100vh;
  @include bg_color($background-color-theme);*/
     .login-box {
        width: 100vw;
        height: 100vh;
      }
      .form-box {
        padding:20px;
      }
      .mb-14 {
        margin-bottom: 14px;
      }
  }
  
  
</style>