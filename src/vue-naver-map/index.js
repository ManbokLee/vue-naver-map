import Vue from 'vue'
import NaverMap from './components/map'
import NaverMapMarker from './components/marker'
import NaverMapMarkerCluster from './components/cluster'
import { generateNaverInstance } from './utils'

export { NaverMap, NaverMapMarker, NaverMapMarkerCluster }

const navers = new Vue({
  data: () => ({
    key: null,
    libraries: [],
    options: {},
    naver: null,
    clustering: null
  })
})

export function install (Vue, options = {}) {
  options = {
    installComponents: true,
    ...options
  }

  Vue.prototype.$navers = navers
  navers.options = options

  if (!options.key) {
    console.warn('[vue-naver-map] Naver key is required. more info: https://www.npmjs.com/package/vue-naver-map')
  } else {
    generateNaverInstance(navers)
  }

  if (options.installComponents) {
    Vue.component('NaverMap', NaverMap)
    Vue.component('NaverMapMarker', NaverMapMarker)
    Vue.component('NaverMapMarkerCluster', NaverMapMarkerCluster)
  }
}

export default {
  install
}
