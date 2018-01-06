import Vue from 'vue'
import Router from 'vue-router'

import good from '../components/good/good.vue'
import rating from '../components/rating/rating.vue'
import shoper from '../components/shoper/shoper.vue'

Vue.use(Router)

export default new Router({
	'linkActiveClass': 'active',
	// 注册四个路由： 分别为主页面， 商品页面， 评价页面， 卖家页面
  	routes: [
		{path: '/',			name: 'Home',		component: app},
		{path: '/good', 	name: 'Good',		component: good},
		{path: '/rating',	name: 'Rating',		component: rating},
		{path: '/shoper', 	name: 'Seller', 	component: shoper}
		// 错误写法，引以为鉴，shoper前边多写了一个点
		// {path: './shoper', 	name: 'Seller', 	component: shoper}
  	]
})
