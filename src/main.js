import Vue from 'vue'
import App from './App.vue'
// let a = 20
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
