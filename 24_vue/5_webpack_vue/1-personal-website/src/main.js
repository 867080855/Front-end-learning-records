// 引入vue
import Vue from 'vue'
// 引入各种组件
import App from './App'
// 引入路由
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
