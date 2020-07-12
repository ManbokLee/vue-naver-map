<template>
    <div><slot v-if="!loading" /></div>
</template>

<script>
export default {
    provide() {
        const cluster = {}
        Object.defineProperty(cluster, 'cluster', {
            enumerable: true,
            get: () => this.cluster
        })
        return { cluster }
    },
    inject: ['map'],
    props: {
        options: {
            type: Object,
            default: () => ({})
        },
        icons: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            cluster: null,
            loading: true
        }
    },
    created () {
        this.createCluster ()
    },
    beforeDestroy () {
        this.destroyCluster ()
    },
    methods: {
       async createCluster () {
            if (!this.map.map) {
            console.log('map loading is not finish.')
            }

            import('../lib/markerClustering.js').then((script) => {
                this.cluster = new script.default({
                    minClusterSize: this.getOption('minClusterSize', 1),
                    maxZoom: this.getOption('maxZoom', 20),
                    map: this.map.map,
                    markers: this.markers,
                    disableClickZoom: false,
                    gridSize: 120,
                    icons: this.icons.length === 0 ? this.getDefaultIcons() : this.icons,
                    indexGenerator: [10, 100, 200, 500, 1000],
                    stylingFunction: function(clusterMarker, count) {
                        clusterMarker.getElement().getElementsByTagName('div')[0].innerText = count
                    }
                });
                this.loading = false
                window.c = this.cluster
            })
       },
       getOption (key, defaultValue = false) {
           return this.options[key] ? this.options[key] : defaultValue
       },
       getDefaultIcons () {
           return [
                {
                    content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url('https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-1.png');background-size:contain;"></div>`,
                    size: window.naver.maps.Size(40, 40),
                    anchor: window.naver.maps.Point(20, 20)
                },
                {
                    content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url('https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-2.png');background-size:contain;"></div>`,
                    size: window.naver.maps.Size(40, 40),
                    anchor: window.naver.maps.Point(20, 20)
                },
                {
                    content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url('https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-3.png');background-size:contain;"></div>`,
                    size: window.naver.maps.Size(40, 40),
                    anchor: window.naver.maps.Point(20, 20)
                },
                {
                    content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url('https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-4.png');background-size:contain;"></div>`,
                    size: window.naver.maps.Size(40, 40),
                    anchor: window.naver.maps.Point(20, 20)
                },
                {
                    content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url('https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-5.png');background-size:contain;"></div>`,
                    size: window.naver.maps.Size(40, 40),
                    anchor: window.naver.maps.Point(20, 20)
                }
            ]
       },
       destroyCluster () {
           this.cluster.setMap(null)
           this.cluster = null
       }
    }
}
</script>
