import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  data: {
    // data não é uma function, e sim uma object literal
    // porque aqui não é um componente, é uma instância da vue 
    // apenas dentro de componentes data é um método.
    // esse estado compartilhado não é recomendado porque fica na instância root e compartilhado com toda a aplicação.
    location: JSON.parse(JSON.stringify(window.location))
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
