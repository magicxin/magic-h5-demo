import Vue from 'vue'
import Router from 'vue-router'
import main from '../pages/main'
import home from '../pages/home/home'
import videoCenter from '../pages/videoCenter/video-center'
import microNews from '../pages/microNews/micro-news'
import userCenter from '../pages/userCenter/user-center'
import accelerometer from '../pages/examples/accelerometer'
import launch from '../pages/launch'
import addNews from '../pages/mock/add-news'
import newsDetail from '../pages/home/news-detail'
import search from '../pages/home/search'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      meta: {
        exit: true,
        keepAlive: true
      },
      children: [{
        path: 'home',
        name: 'home',
        component: home,
        meta: {
          exit: true,
          keepAlive: false
        }
      }, {
        path: 'video_center',
        name: 'video_center',
        component: videoCenter,
        meta: {
          exit: true,
          keepAlive: false
        }
      }, {
        path: 'micro_news',
        name: 'micro_news',
        component: microNews,
        meta: {
          exit: true,
          keepAlive: false
        }
      }, {
        path: 'user_center',
        name: 'user_center',
        component: userCenter,
        meta: {
          exit: true,
          keepAlive: false
        }
      }]
    },

    {
      path: '/accelerometer',
      name: 'accelerometer',
      component: accelerometer
    },
    {
      path: '/launch',
      name: 'launch',
      component: launch
    },
    {
      path: '/add_news',
      name: 'add_news',
      component: addNews
    },
    {
      path: '/news_detail/:_id',
      name: 'news_detail',
      component: newsDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      meta: {
        keepAlive: false
      }
    },
  ]
})