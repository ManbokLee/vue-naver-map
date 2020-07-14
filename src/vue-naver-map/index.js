import NaverMap from "./components/map";
import NaverMapMarker from "./components/marker";
import NaverMapMarkerCluster from "./components/cluster";

export { NaverMap, NaverMapMarker, NaverMapMarkerCluster };

export function install(Vue, options = {}) {
  options = {
    installComponents: true,
    autobindAllEvents: false,
    ...options,
  };

  if (options.installComponents) {
    Vue.component("NaverMap", NaverMap);
    Vue.component("NaverMapMarker", NaverMapMarker);
    Vue.component("NaverMapMarkerCluster", NaverMapMarkerCluster);
  }
}

export default {
  install,
};
