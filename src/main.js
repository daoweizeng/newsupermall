import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vue.config.productionTip = false

createApp(App).use(store).use(router).mount('#app')



// import VueRouter from 'vue-router'

// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function (location) {
//   return routerPush.call(this, location).catch(error => error)
// }