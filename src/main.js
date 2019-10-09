import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css'
import router from './assets/js/router.js'
import './assets/css/cssreset.css'
import './assets/css/animate.css'
import './assets/font/font2/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
import axios from 'axios'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.prototype.$http = axios 
Vue.use(VueAwesomeSwiper)
Vue.use(Mint);
Vue.use(VueRouter)
new Vue({
  el: '#app',
  render: h => h(App),
  router
})