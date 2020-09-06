export default {
  inject: {
    core: {
      type: Object,
      required: true
    },
    cluster: {
      type: [Object, Boolean],
      default: false
    }
  },
  props: {
    options: {
      type: Object,
      required: false,
      default: () => ({
        position: { lat: 37.3377362, lng: 126.9941624 }
      })
    }
  },
  data () {
    return {
      marker: null,
      markerOptions: null
    }
  },
  created () {
    this.createMarker()
  },
  beforeDestroy () {
    this.destroyMarker()
  },
  methods: {
    createMarker () {
      if (!this.core.map) {
        throw new Error('Map loading is not finish.')
      }
      if (this.cluster) {
        this.insertCluster()
        return
      }
      this.setMarker()
      this.marker.setMap(this.core.map)
      this.registerEvent()
    },
    insertCluster () {
      this.setMarker()
      this.cluster.clustering.markers.push(this.marker)
      if (this.core.map._debounceThing) {
        clearTimeout(this.core.map._debounceThing)
      }
      this.core.map._debounceThing = setTimeout(this.redrawCluster, 100)
      this.registerEvent()
    },
    setMarker () {
      this.markerOptions = { ...this.options }
      this.markerOptions.position = new this.core.naver.maps.LatLng(
        this.options.position.y || this.options.position.lat,
        this.options.position.x || this.options.position.lng
      )
      Object.keys(this.options).forEach((option) => {
        if (typeof this.options[option] === 'object') {
          if (this.options[option].size) {
            this.markerOptions[option].size = this.core.naver.maps.Size(this.options[option].size.width, this.options[option].size.height)
          }
          if (this.options[option].scaledSize) {
            this.markerOptions[option].scaledSize = this.core.naver.maps.Size(this.options[option].scaledSize.width, this.options[option].scaledSize.height)
          }
          if (this.options[option].origin) {
            this.markerOptions[option].origin = this.core.naver.maps.Point(this.options[option].origin.x, this.options[option].origin.y)
          }
          if (this.options[option].anchor) {
            this.markerOptions[option].anchor = this.core.naver.maps.Point(this.options[option].anchor.x, this.options[option].anchor.y)
          }
        }
      })
      if (this.options.icon && typeof this.options.icon === 'object' && this.options.icon.path) {
        this.markerOptions.icon.path = this.options.icon.path.reduce((acc, cur) => {
          acc.push(this.core.naver.maps.Point(cur.x, cur.y))
          return acc
        }, [])
      }
      if (this.options.animation) {
        this.markerOptions.animation = this.core.naver.maps.Animation[this.options.animation]
      }
      this.marker = new this.core.naver.maps.Marker(this.markerOptions)
    },
    registerEvent () {
      Object.keys(this.$listeners).forEach((key) => {
        this.core.naver.maps.Event.addListener(this.marker, key, this.$listeners[key])
      })
    },
    redrawCluster () {
      this.cluster.clustering.setMap(this.cluster.clustering.getMap())
    },
    destroyMarker () {
      if (this.cluster) {
        this.removeMarkerInCluster()
      }
      this.marker.setMap(null)
      this.marker = null
    },
    removeMarkerInCluster () {
      try {
        if (this.cluster && this.cluster.clustering) {
          this.cluster.clustering.markers = this.cluster.clustering.markers.filter(marker => marker !== this.marker)
          this.redrawCluster()
        }
      } catch (error) {
        //
      }
    }
  },
  render () {
    return null
  }
}
