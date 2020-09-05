import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './static/iconfont/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import 'video.js/dist/video-js.css'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
