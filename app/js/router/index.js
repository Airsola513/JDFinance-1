import Vue from 'vue'
import Router from 'vue-router'
import Home from '../home/index.vue'
import Money from '../money/index.vue'
import Ious from '../ious/index.vue'
import Raise from '../raise/index.vue'
import Mine from '../mine/index.vue'
import Download from '../download/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias: '/home'
    },
    {
      path: '/money',
      name: 'money',
      component: Money
    },
    {
      path: '/ious',
      name: 'ious',
      component: Ious
    },
    {
      path: '/raise',
      name: 'raise',
      component: Raise
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/download',
      name: 'download',
      component: Download
    }
  ]
})
