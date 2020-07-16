
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
    }
  },
  data() {
    return {
      map: null,
      naver: null,
      loading: true,
      key: this.$navers.key || this.naverKey,
      libs: this.$navers.libraries.length ? this.$navers.libraries : this.libraries
    };
  },
  created() {
    this.checkDeprecation();
    this.loadMap();
  },
  beforeDestroy() {
    this.map.destroy()
  },
  methods: {
    checkDeprecation() {
      if (this.naverKey) {
        console.log(this.$navers.key)
        console.warn('[vue-naver-map] NaverKey in Map component is deprecation, use options.key in module insert. more info: https://www.npmjs.com/package/vue-naver-map')
      }
    },
    loadMap() {
      if (this.checkServer()) {
        return
      }
      if (this.$navers.naver) {
        this.$nextTick(() => {
          this.createMap()
        })
      } else {
        this.loadNaverMapLib()
      }
    },
    createMap() {
      this.naver = this.$navers.naver
      this.loading = false;
      const mapOptions = {
        ...this.options,
        center: new this.naver.maps.LatLng(this.center.lat || 37.3595704, this.center.lng || 127.105399),
        zoom: this.zoom
      };
      this.map = new this.naver.maps.Map(
        this.$refs.map,
        mapOptions
      );
      this.registerEvent()
    },
    checkServer() {
      return typeof window === 'undefined'
    },
    loadNaverMapLib() {
      const key = this.naverKey || this.$navers.key
      const libraries = this.libraries.length ? this.libraries : this.$navers.libraries
      loadScript(
        `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${key}&submodules=${libraries.join(",")}`,
        (error) => {
          if (error) {
            throw new Error(error);
          }
          this.$navers.naver = window.naver
          this.createMap()
        }
      );
    },
    registerEvent () {
      Object.keys(this.$listeners).forEach(key => {
        this.naver.maps.Event.addListener(this.map, key, this.$listeners[key])
      });
    }
  },
  render: function (createElement) {
    return createElement(
        'div',
        {
          ref: 'map',
          style: {
            width: '100%',
            height: '100%'
          }
        },
        !this.loading ? this.$slots.default : null
      );
  }
};
