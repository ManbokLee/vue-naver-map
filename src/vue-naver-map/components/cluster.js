import { imortMarkerclustering } from '../utils'
export default {
  provide () {
    const cluster = {}
    Object.defineProperty(cluster, 'clustering', {
      enumerable: true,
      get: () => this.cluster
    })
    return { cluster }
  },
  inject: {
    core: {
      type: Object,
      required: true
    }
  },
  props: {
    options: {
      type: Object,
      default: () => ({
        markers: [],
        minClusterSize: 1,
        maxZoom: 17,
        disableClickZoom: false,
        gridSize: 120
      })
    }
  },
  data () {
    return {
      Clustering: null,
      cluster: null,
      loading: true
    }
  },
  created () {
    this.loadcluster()
  },
  beforeDestroy () {
    this.destroyCluster()
  },
  methods: {
    async loadcluster () {
      if (!this.core.map) {
        throw new Error('Map loading is not finish.')
      }
      if (!this.$navers.clustering) {
        await imortMarkerclustering(this.$navers)
      }
      this.Clustering = this.$navers.clustering
      this.createCluster()
    },
    createCluster () {
      this.cluster = new this.Clustering({
        ...this.options,
        map: this.core.map,
        icons: this.getOption('icons', this.getDefaultIcons()),
        indexGenerator: this.getOption('indexGenerator', [
          10,
          100,
          200,
          500,
          1000
        ]),
        stylingFunction: this.getOption(
          'stylingFunction',
          this.getDefaultStylingFunction()
        )
      })
      this.core.map.cluster = this.cluster
      this.loading = false
    },
    destroyCluster () {
      this.cluster.setMap(null)
      this.cluster = null
    },
    getOption (key, defaultValue = false) {
      return this.options[key] === undefined ? defaultValue : this.options[key]
    },
    getDefaultStylingFunction () {
      return function (clusterMarker, count) {
        clusterMarker
          .getElement()
          .getElementsByTagName('div')[0].textContent = count
      }
    },
    getDefaultIcons () {
      return [
        {
          content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:black;text-align:center;font-weight:bold;background-color: #adffb3;border-radius:20px;"></div>',
          size: this.core.naver.maps.Size(40, 40),
          anchor: this.core.naver.maps.Point(20, 20)
        },
        {
          content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:black;text-align:center;font-weight:bold;background-color: #75ff7f;border-radius:20px;"></div>',
          size: this.core.naver.maps.Size(40, 40),
          anchor: this.core.naver.maps.Point(20, 20)
        },
        {
          content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:black;text-align:center;font-weight:bold;background-color: #1dff2d;border-radius:20px;"></div>',
          size: this.core.naver.maps.Size(40, 40),
          anchor: this.core.naver.maps.Point(20, 20)
        },
        {
          content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:black;text-align:center;font-weight:bold;background-color: #e7ff1d;border-radius:20px;"></div>',
          size: this.core.naver.maps.Size(40, 40),
          anchor: this.core.naver.maps.Point(20, 20)
        },
        {
          content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:black;text-align:center;font-weight:bold;background-color: #ffa51d;border-radius:20px;"></div>',
          size: this.core.naver.maps.Size(40, 40),
          anchor: this.core.naver.maps.Point(20, 20)
        }
      ]
    }
  },
  render (createElement) {
    return createElement(
      'div',
      !this.loading ? this.$slots.default : null
    )
  }
}
