import Vue from 'vue'
import loading from 'assets/loading.png'
function load() {
  this.src = this.dataset.url
}
Vue.directive('load', {
  bind: function (el) {
    el.dataset.url = el.src
    el.src = loading
    el.addEventListener('load',load.call(el))
  },
  componentUpdated(el) {
    el.removeEventListener('load',load.call(el))
  }
})