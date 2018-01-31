import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import '../css/reset.scss'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
