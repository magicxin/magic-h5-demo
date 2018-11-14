import Vue from 'vue'
import axios from 'axios'
import config from '../../config'
import plus from './plus'

Vue.$axios = Vue.prototype.$axios = axios
Vue.use(plus)
//var onPlusReady = function(callback, context = this) {
//if(window.plus) {
//  callback.call(context);
//} else {
//  document.addEventListener('plusready', callback.bind(context));
//}
//console.log(context.plusReady)
//callback();
//};

Vue.mixin({
//beforeCreate: function() {
//  onPlusReady(this.plusReady?this.plusReady:function(){},this);
//},
//created() {
//  if(this.plusReady) {
//    let that = this
//    document.addEventListener("plusready", this.plusReady, false)
//  }
//},
//destroyed() {
//  document.removeEventListener("plusready", this.plusReady)
//},
  methods: {
    routeLogin() {
      this.$root.showLoginBox = true
    },
    addPath(url) {
      return config[config.env].origin + url
    },
    addHost(url) {
      return config[config.env].hostname + ':' + config[config.env].port + url
    }
  }
})

Vue.directive('scroll', {
  bind(el) {
    el.addEventListener('scroll', function(e) {
      el.dataset.top = e.target.scrollTop
    })
  }
})
//Vue.directive('theme',{
//bind(el) {
//  console.log(el)
//  el.dataset.theme = Vue.$theme
//},
//updated(el) {
//  console.log(el)
//  el.dataset.theme = Vue.$theme
//}
//})