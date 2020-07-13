import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// import VueNaverMap from './vue-naver-map'
import VueNaverMap from 'vue-naver-map'
Vue.use(VueNaverMap)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
