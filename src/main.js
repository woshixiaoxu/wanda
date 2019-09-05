import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import vueAxios from 'vue-axios'
import loading from './plugins/v-loading'
import './assets/font-awesome-4.7.0/css/font-awesome.css'
Vue.use(loading)
Vue.use(MintUI)
Vue.use(vueAxios,axios)

import './assets/css/public.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
