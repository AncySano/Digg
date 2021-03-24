import Vue from 'vue'
// import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import mainpage from './components/mainpage.vue'
import otherdigg from './components/otherdigg.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)
// Vue.use(Vuex)
// const store = new Vuex.Store({
//   state:{
// pills:{
//   text:null,
//   icon:null
// }
//   }
// })

const router = new VueRouter({
  routes: [
    { path: '/', component: mainpage },
    { path: '/otherdigg', component: otherdigg },
    
  ] // short for `routes: routes` urls
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
