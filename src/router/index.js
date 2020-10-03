import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import She from '../components/She.vue'
// import TabBar from '../views/TabBar.vue'

import Shang from '../components/Shang.vue'
import Cart from '../components/Cart.vue'
import XiangQing from '../views/XiangQing'

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/home'},
  {path: '/home',component: Home},
  {path: '/shang',component: Shang},
  {path: '/cart',component: Cart},
  {path: '/she',component: She},
  {path: '/xiangqing/:iid',component: XiangQing}
]

const router = new VueRouter({
  routes
})

export default router
