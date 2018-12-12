import Vue from 'vue'
import './plugins/vuetify'
import Dap from './Dap.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Dap)
}).$mount('#app')
