<template>
  <div><slot v-if="!loading" /></div>
</template>

<script>
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
      default: () => ({}),
    },
  },
  data() {
    return {
      cluster: null,
      loading: true,
    };
  },
  created() {
    this.createCluster();
  },
  beforeDestroy() {
    this.destroyCluster();
  },
  methods: {
    async createCluster() {
      if (!this.core.map) {
        throw new Error("Map loading is not finish.");
      }
      import("../lib/markerClustering.js").then((script) => {
        this.cluster = new script.default({
          map: this.core.map,
          markers: [],
          minClusterSize: this.getOption("minClusterSize", 1),
          maxZoom: this.getOption("maxZoom", 20),
          disableClickZoom: this.getOption("disableClickZoom"),
          gridSize: this.getOption("gridSize", 120),
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
      });
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
      return [
        {
          content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:black;text-align:center;font-weight:bold;background-color: #adffb3;border-radius:20px;"></div>`,
          size: this.core.naver.maps.Size(40, 40),
          anchor: this.core.naver.maps.Point(20, 20),
        },
        {
          content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:black;text-align:center;font-weight:bold;background-color: #75ff7f;border-radius:20px;"></div>`,
          size: this.core.naver.maps.Size(40, 40),
          anchor: this.core.naver.maps.Point(20, 20),
        },
        {
          content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:black;text-align:center;font-weight:bold;background-color: #1dff2d;border-radius:20px;"></div>`,
          size: this.core.naver.maps.Size(40, 40),
          anchor: this.core.naver.maps.Point(20, 20),
        },
        {
          content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:black;text-align:center;font-weight:bold;background-color: #e7ff1d;border-radius:20px;"></div>`,
          size: this.core.naver.maps.Size(40, 40),
          anchor: this.core.naver.maps.Point(20, 20),
        },
        {
          content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:black;text-align:center;font-weight:bold;background-color: #ffa51d;border-radius:20px;"></div>`,
          size: this.core.naver.maps.Size(40, 40),
          anchor: this.core.naver.maps.Point(20, 20),
        },
      ];
    },
  },
};
</script>
