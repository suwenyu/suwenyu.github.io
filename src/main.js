import Vue from 'vue'
import App from './App.vue'

import router from './router'
import pdf from 'vue-pdf'

Vue.config.productionTip = false


new Vue({
  router,
  pdf,
  render: h => h(App),
}).$mount('#app')
