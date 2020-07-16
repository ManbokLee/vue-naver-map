import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import VueNaverMap from './vue-naver-map'
Vue.use(VueNaverMap, {
  key: process.env.VUE_APP_NAVER_KEY,
  libraries: ['geocoder']
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
