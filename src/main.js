import Vue from 'vue'
import App from './App.vue'

import router from './router'
import pdf from 'vue-pdf'

import SuiVue from 'semantic-ui-vue';


Vue.config.productionTip = false

Vue.use(SuiVue);


import 'semantic-ui-css/semantic.min.css';
import 'terminal.css'
require('@/assets/css/mystyle.css');


new Vue({
  router,
  pdf,
  render: h => h(App),
}).$mount('#app')
