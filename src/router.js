import Vue from 'vue'
import Router from 'vue-router'
import City from './views/City.vue'
import Cinema from './views/Cinema.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'city',
      component: City
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: Cinema
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
