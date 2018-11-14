<template>
  <div class="video-center">
    <van-pull-refresh class="list-container" v-model="isLoading" @refresh="getVideoList">
      <div v-for="(item,index) in videoList">
        <video-player class="video-js vjs-big-play-centered" :options="playerOptions" :playsinline="false"></video-player>
        <!--<div ref="'videoplayer'+index" :id="'videoplayer'+index" class="video-container">-->
        <!--ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname"

                 @play="onPlayerPlay($event)"
                 @pause="onPlayerPause($event)"
                 @ended="onPlayerEnded($event)"
                 @waiting="onPlayerWaiting($event)"
                 @playing="onPlayerPlaying($event)"
                 @loadeddata="onPlayerLoadeddata($event)"
                 @timeupdate="onPlayerTimeupdate($event)"
                 @canplay="onPlayerCanplay($event)"
                 @canplaythrough="onPlayerCanplaythrough($event)"

                 @statechanged="playerStateChanged($event)"
                 @ready="playerReadied"-->
        <!--<video autoplay :src="addPath(item.url)"></video>-->
        <!--</div>-->
        <div class="info-container align-center">
          <van-icon name="contact" class="icon-author" />
          <div>{{item.author}}</div>
          <div>{{item.follower}}</div>
          <div></div>
          <div></div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
  export default {
    name: 'video-center',
    data() {
      return {
        isLoading: false,
        videoList: [{
          author: '艺术中国',
          avatar: '',
          url: '/uploads/video/20181113/20181113-news-r64txj.mp4',
          follower: '64',
          comment: '114'
        }, 
//      {
//        author: '长春人',
//        avatar: '',
//        url: '/uploads/video/20181113/20181113-panda-gao46n.mp4',
//        follower: '2',
//        comment: '3'
//      }
        ],
        playerOptions: {
//        muted: true,
          autoplay:true,
          controls:false,
          language: 'cn',
//        playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: this.addPath('/uploads/video/20181113/20181113-panda-gao46n.mp4')
          }],
          poster: this.addPath(this.$root.user.avatar),
        },
        //      player:null
      }
    },
    created() {

    },
    mounted() {
      //    this.$plusReady(()=>{
      //      let ws=plus.webview.currentWebview();
      //      ws.setPullToRefresh({support:true,
      //        height:'50px',
      //        range:'200px',
      //        contentdown:{
      //          caption:'下拉可以刷新'
      //        },
      //        contentover:{
      //          caption:'释放立即刷新'
      //        },
      //        contentrefresh:{
      //          caption:'正在刷新...'
      //        }
      //      },this.getVideoList);
      //      
      //      if(!this.player && this.videoList.length>0) {
      //        this.player = []
      //        this.videoList.forEach((item,index)=>{
      //          this.player[index] = new plus.video.VideoPlayer('videoplayer'+index,{
      //            src:this.addPath(item.url),
      //            controls: true
      //          });
      //        })
      //      }
      //    })
    },
    activated() {
      console.log('activated')
    },
    methods: {
      getVideoList() {
        let that = this
        that.isLoading = true
        setTimeout(function() {
          that.isLoading = false
        }, 10)
      }
    }
  }
</script>

<style lang="scss">
  .video-center {
    height: calc(100vh - 50px);
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    .list-container {
      min-height: 100%;
    }
    .video-js {
      width: 100%;
      height: 60vw;
    }
    .video-js .vjs-big-play-button {
      font-size: 2.5em;
      line-height: 2.3em;
      height: 2.5em;
      width: 2.5em;
      -webkit-border-radius: 2.5em;
      -moz-border-radius: 2.5em;
      border-radius: 2.5em;
      background-color: #73859f;
      background-color: rgba(115, 133, 159, .5);
      border-width: 0.15em;
      margin-top: -1.25em;
      /*margin-left: -1.75em;*/
    }
    /* 中间的播放箭头 */
    .vjs-big-play-button .vjs-icon-placeholder {
      font-size: 1.63em;
    }
    /* 加载圆圈 */
    .vjs-loading-spinner {
      font-size: 2.5em;
      width: 2em;
      height: 2em;
      border-radius: 1em;
      margin-top: -1em;
      margin-left: -1.5em;
    }
    .video-js.vjs-playing .vjs-tech {
      pointer-events: auto;
    }
    /*.video-player-box, .video-container {
      width:100%;
      height:200px;
      margin:auto;
      z-index:-1;
    }*/
    /*video {
      display:block;
      width:100vw;
    }*/
    .info-container {
      display: flex;
      padding: 6px 14px;
    }
  }
</style>