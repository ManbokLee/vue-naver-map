import { imortMarkerclustering } from '../utils'
export default {
  provide() {
    const cluster = {};
    Object.defineProperty(cluster, "clustering", {
      enumerable: true,
      get: () => this.cluster,
    });
    return { cluster };
  },
  inject: {
    core: {
      type: Object,
      required: true,
    },
  },
  props: {
    options: {
      type: Object,
      default: () => ({
        markers: [],
        minClusterSize: 1,
        maxZoom: 17,
        disableClickZoom: false,
        gridSize: 120,
        class: 'cluster'
      }),
    },
  },
  data() {
    return {
      clustering: null,
      cluster: null,
      loading: true,
    };
  },
  created() {
    this.loadcluster();
  },
  beforeDestroy() {
    this.destroyCluster();
  },
  methods: {
    async loadcluster() {
      if (!this.core.map) {
        throw new Error("Map loading is not finish.");
      }
      if (!this.$navers.clustering) {
        await imortMarkerclustering(this.$navers)
      }
      this.clustering = this.$navers.clustering
      this.createCluster()
    },
    createCluster() {
      this.cluster = new this.clustering({
        ...this.options,
        map: this.core.map,
        icons: this.getOption("icons", this.getDefaultIcons()),
        indexGenerator: this.getOption("indexGenerator", [
          10,
          100,
          200,
          500,
          1000,
        ]),
        stylingFunction: this.getOption(
          "stylingFunction",
          this.getDefaultStylingFunction()
        ),
      });
      this.loading = false;
    },
    destroyCluster() {
      this.cluster.setMap(null);
      this.cluster = null;
    },
    getOption(key, defaultValue = false) {
      return this.options[key] === undefined ? defaultValue : this.options[key];
    },
    getDefaultStylingFunction() {
      return function(clusterMarker, count) {
        clusterMarker
          .getElement()
          .getElementsByTagName("div")[0].innerText = count;
      };
    },
    getDefaultIcons() {
      const customClass = this.getOption('class', 'cluster')
      const defaultStyles = 'cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:black;text-align:center;font-weight:bold;border-radius:20px;'
      return [
        {
          content: `<div style="${defaultStyles}background-color: #adffb3;" class="${customClass} lv1"></div>`,
          size: this.core.naver.maps.Size(40, 40),
          anchor: this.core.naver.maps.Point(20, 20),
        },
        {
          content: `<div style="${defaultStyles}background-color: #75ff7f;" class="${customClass} lv2"></div>`,
          size: this.core.naver.maps.Size(40, 40),
          anchor: this.core.naver.maps.Point(20, 20),
        },
        {
          content: `<div style="${defaultStyles}background-color: #1dff2d;" class="${customClass} lv3"></div>`,
          size: this.core.naver.maps.Size(40, 40),
          anchor: this.core.naver.maps.Point(20, 20),
        },
        {
          content: `<div style="${defaultStyles}background-color: #e7ff1d;" class="${customClass} lv4"></div>`,
          size: this.core.naver.maps.Size(40, 40),
          anchor: this.core.naver.maps.Point(20, 20),
        },
        {
          content: `<div style="${defaultStyles}background-color: #ffa51d;" class="${customClass} lv5"></div>`,
          size: this.core.naver.maps.Size(40, 40),
          anchor: this.core.naver.maps.Point(20, 20),
        },
      ];
    },
  },
  render: function(createElement) {
    return createElement(
      'div',
      !this.loading ? this.$slots.default : null
    );
  }
};
