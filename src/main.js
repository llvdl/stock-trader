import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import store from './store/index'
import price from './filters/price'

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

Vue.filter('price', price)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
