import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import { Tabbar, TabbarItem, NavBar,Swipe, SwipeItem,Col, Row,Tab, Tabs,Icon } from 'vant'
Vue.use(Tabbar,)
Vue.use(TabbarItem, NavBar)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(NavBar)
Vue.use(Col)
Vue.use(Row)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Icon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
