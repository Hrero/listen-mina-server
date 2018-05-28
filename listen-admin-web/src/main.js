// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import $ from 'jquery' // jqeury
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI)

axios.defaults.baseURL = '/api'

Vue.config.productionTip = false


Vue.prototype.$http = axios
Vue.prototype.$j = $

/* eslint-disable no-new */
window.v = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})