import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cards from '../views/Cards.vue'

Vue.use(VueRouter) // plugin que instancia e define um conjunto de rotas 

  const routes = [ // array de object literals
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cards',
    name: 'cards',
    component: Cards
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({ // cria uma instancia do roteador
  mode: 'history', // mode do html5 para pushState
  base: process.env.BASE_URL,
  routes // todas as rotas
})

export default router
