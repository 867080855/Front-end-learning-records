import Vue from 'vue'
import Router from 'vue-router'

import good from '../components/good/good.vue'
import rating from '../components/rating/rating.vue'
import seller from '../components/seller/seller.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'Home',component: app},
    {path: '/good', name: 'Good', component: good},
    {path: '/rating', name: 'Rating', component: rating},
    {path: '/seller', name: 'Seller', component: seller}
  ]
})
