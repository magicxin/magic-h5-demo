import Vue from 'vue'

Vue.directive('scroll', {
  bind(el) {
    el.addEventListener('scroll', function(e) {
      el.dataset.top = e.target.scrollTop
    })
  }
})