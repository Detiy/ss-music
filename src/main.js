// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './piugin/element'
import 'element-ui/lib/theme-chalk/index.css';
import './iconfont/iconfont.css';
import http from '@/api'
import './assets/css/index.css'
import './utils/rem'

Vue.config.productionTip = false

//api请求
Object.defineProperty(Vue.prototype, '$http', { value: http })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
