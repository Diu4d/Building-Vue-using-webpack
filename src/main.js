import App from './App.vue';
import Vue from 'vue';
import http from '../http/http'

Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')