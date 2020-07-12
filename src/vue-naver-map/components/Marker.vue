
<script>
export default {
    // inject: ['map', 'cluster'],
    inject: {
        map: {
            type: Object,
            required: true
        },
        cluster: {
            type: [Object, Boolean],
            default: false
        }
    },
    props: {
        position: {
            type: Object,
            required: false,
            default: () => ({ lat: 37.3377362, lng: 126.9941624 })
        }
    },
    data() {
        return {
            marker: null,
            debounceCheck: null
        }
    },
    created () {
        this.createMarker ()
    },
    beforeDestroy () {
        this.destroyMarker ()
    },
    methods: {
       createMarker () {
           if (!this.map.map) {
               throw new Error('map loading is not finish.')
           }
           if (this.cluster) {
                this.insertCluster()
                return
           }
           this.marker = new window.naver.maps.Marker({
               position: new window.naver.maps.LatLng(this.position.lat, this.position.lng),
               map: window.map
           })
       },
       insertCluster() {
            this.marker = new window.naver.maps.Marker({
                position: new window.naver.maps.LatLng(this.position.lat, this.position.lng),
            })
            this.cluster.cluster.setMarkers([...this.cluster.cluster.markers, this.marker])
            if (this.map.map._debounceThing) {
                clearTimeout(this.map.map._debounceThing);
            }
            this.map.map._debounceThing = setTimeout(
                this.redrawCluster,
                500
            )
       },
       redrawCluster () {
            this.cluster.cluster.setMap(this.cluster.cluster.getMap())
       },
       destroyMarker () {
           this.marker.setMap(null)
           this.marker = null
       }
    },
    render() {
        return {}
    }
}
</script>
