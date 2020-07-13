<template>
  <div>
    <div
      ref="map"
      class="map"
      style="width: 100%; height: 100%;"
    >
      <slot v-if="!loading" />
    </div>
  </div>
</template>

<script>
import loadScript from "load-script";

export default {
  provide() {
    const core = {};
    Object.defineProperty(core, "map", {
      get: () => this.map,
    });
    Object.defineProperty(core, "naver", {
      get: () => this.naver,
    });
    return { core };
  },
  props: {
    naverKey: {
      type: String,
      default: "",
    },
    center: {
      type: Object,
      default: () => ({}),
    },
    zoom: {
      type: Number,
      default: 10,
    },
    libraries: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      map: null,
      naver: null,
      loading: true,
    };
  },
  created() {
    this.loadMap();
  },
  methods: {
    async loadMap() {
      const isSsr = await this.checkServer()
      if (isSsr) {
        return
      }
      loadScript(
        `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${this.naverKey}&submodules=${this.libraries.join(",")}`,
        (error) => {
          if (error) {
            throw new Error(error);
          }
          this.naver = window.naver
          this.loading = false;
          const mapOptions = {
            ...this.options,
            center: new this.naver.maps.LatLng(this.center.lat || 37.3595704, this.center.lng || 127.105399),
            zoom: this.zoom
          };
          window.map = this.map = new this.naver.maps.Map(
            this.$refs.map,
            mapOptions
          );
        }
      );
    },
    checkServer() {
      return typeof window === 'undefined'
    }
  },
};
</script>
