import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../pages/main'
import accelerometer from '../pages/examples/accelerometer'
import launch from '../pages/launch'

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
    }
  ]
})
