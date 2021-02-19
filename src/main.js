import App from './App.vue';
import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')