import App from './App.vue';
import Vue from 'vue';
import http from '../http/http';
import 'lib-flexible'
import '../rem'

Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')