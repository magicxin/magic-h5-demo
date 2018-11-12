import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../pages/main'
import accelerometer from '../pages/examples/accelerometer'
import launch from '../pages/launch'
import addNews from '../pages/mock/add-news'
import newsDetail from '../pages/home/news-detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: HelloWorld,
      meta: {
      	exit: true
      }
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
      component: newsDetail
    },
  ]
})
