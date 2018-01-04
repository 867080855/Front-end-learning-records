import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexTemp from '@/components/Index'

Vue.use(Router)

// 定义两个页面可以跳转的路由
// 一般情况下一个路由可以由多个组件组成，但是一个页面通常对应一个路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'IndexTemp',
      component: IndexTemp
    }
  ]
})
