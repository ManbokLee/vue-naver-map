<script>
export default {
  inject: {
    core: {
      type: Object,
      required: true,
    },
    cluster: {
      type: [Object, Boolean],
      default: false,
    },
  },
  props: {
    position: {
      type: Object,
      required: false,
      default: () => ({ lat: 37.3377362, lng: 126.9941624 }),
    },
  },
  data() {
    return {
      marker: null,
    };
  },
  created() {
    this.createMarker();
  },
  beforeDestroy() {
    this.destroyMarker();
  },
  methods: {
    createMarker() {
      if (!this.core.map) {
        throw new Error("Map loading is not finish.");
      }
      if (this.cluster) {
        this.insertCluster();
        return;
      }
      this.marker = new this.core.naver.maps.Marker({
        position: new this.core.naver.maps.LatLng(
          this.position.lat,
          this.position.lng
        ),
        map: this.core.map,
      });
    },
    insertCluster() {
      this.marker = new this.core.naver.maps.Marker({
        position: new this.core.naver.maps.LatLng(
          this.position.lat,
          this.position.lng
        ),
      });
      this.cluster.clustering.markers.push(this.marker)
      if (this.core.map._debounceThing) {
        clearTimeout(this.core.map._debounceThing);
      }
      this.core.map._debounceThing = setTimeout(this.redrawCluster, 500);
    },
    redrawCluster() {
      this.cluster.clustering.setMap(this.cluster.clustering.getMap());
    },
    destroyMarker() {
      this.marker.setMap(null);
      this.marker = null;
    },
  },
  render() {
    return {};
  },
};
</script>
