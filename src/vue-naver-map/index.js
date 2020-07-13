import NaverMap from "./components/Map.vue";
import NaverMapMarker from "./components/Marker.vue";
import NaverMapMarkerCluster from "./components/Cluster.vue";

let naver;

export { NaverMap, naver, NaverMapMarker, NaverMapMarkerCluster };

export function install(Vue, options = {}) {
  options = {
    installComponents: true,
    autobindAllEvents: false,
    ...options,
  };

  naver = new Vue({ data: { naver: null } });

  if (options.installComponents) {
    Vue.component("NaverMap", NaverMap);
    Vue.component("NaverMapMarker", NaverMapMarker);
    Vue.component("NaverMapMarkerCluster", NaverMapMarkerCluster);
  }
}

export default {
  install,
};
