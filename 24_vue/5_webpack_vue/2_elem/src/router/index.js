import Vue from 'vue'
import Router from 'vue-router'
import star from '@/components/star/star'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: app
    }
  ]
})
