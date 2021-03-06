// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/utils/rem.js' // 开启rem适配
// import './vant.js'
import './assets/css/common.css'
import Carousel3d from 'vue-carousel-3d';
Vue.use(Carousel3d);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
