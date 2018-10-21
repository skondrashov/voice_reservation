import Vue from 'vue'
import Router from 'vue-router'
import Speech from './views/Speech.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Speech
    },
  ]
})
