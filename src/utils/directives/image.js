import Vue from 'vue'
import loading from 'assets/loading.png'
function load(el) {
  el.src = el.dataset.url
}
Vue.directive('load', {
  bind: function (el) {
    el.dataset.url = el.src
    el.removeAttribute('src')
    el.addEventListener('load',load(el))
  },
  update: function (el) {
    el.removeEventListener('load',load(el))
  }
})