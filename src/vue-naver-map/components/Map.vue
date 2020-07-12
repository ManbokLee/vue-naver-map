<template>
    <div>
        <div ref="map" class="map" style="width: 100%; height: 100%;">
            <slot v-if="!loading" />
        </div>
    </div>
</template>

<script>
import loadScript from 'load-script'

export default {
    provide() {
        const map = {}
        Object.defineProperty(map, 'map', {
            enumerable: true,
            get: () => this.map
        })
        return { map }
    },
    props: {
        naverKey: {
            type: String,
            default: ''
        },
        center: {
            type: Object,
            dafault: () =>  ({})
        },
        zoom: {
            type: Number,
            default: 10
        },
        libraries: {
            type: Array,
            default: () => []
        },
        options: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            map: null,
            naver: null,
            loading: true
        }
    },
    created () {
        this.loadMap()
    },
    methods: {
        loadMap () {
            loadScript(`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${this.naverKey}&submodules=${this.libraries.join(',')}`, (error, script) => {
                if (error) {
                    throw new Error(error)
                }
                this.loading = false
                const mapOptions = {
                    center: new window.naver.maps.LatLng(37.3595704, 127.105399),
                    zoom: 10,
                    script: script,
                    mapTypeControl: false,
                    mapTypeControlOptions: {
                        style: window.naver.maps.MapTypeControlStyle.DROPDOWN
                    }
                }
                window.map = this.map = new window.naver.maps.Map(this.$refs.map, mapOptions)
            })
        }
    }
}
</script>
