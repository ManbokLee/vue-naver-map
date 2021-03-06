<template>
  <v-app>
    <v-main>
      <v-container class="fill-height pa-0 align-start">
        <div style="position: fixed; z-index: 1;">
          <v-btn @click="toggleMap">
            Map toggle
          </v-btn>
          <v-btn @click="toggleScale">
            Map Scale
          </v-btn>
        </div>
        
        <NaverMap
          v-if="mapVisible"
          ref="maps"
          :zoom="10"
          style="width: 100%; height: 100%;"
          @click="handlerMapclick"
          @idle="idle"
          @dragend="dragend"
        >
          <NaverMapMarker />
          <NaverMapMarker 
            :options="markerOptions.imageIcon" 
            @click="changeMarkerIcon(markerOptions.imageIcon)" 
          />
          <NaverMapMarker :options="markerOptions.imageIconScaledSize" />
          <NaverMapMarker
            :options="markerOptions.html"
            @click="dialogVisible = !dialogVisible"
          />
          <NaverMapMarker :options="markerOptions.animation" />
          <NaverMapMarker :options="markerOptions.polygon" />

          <NaverMapMarkerCluster @click-cluster="handlerClickCluster">
            <NaverMapMarker 
              v-for="n in 30"
              :key="n"
              :options="{
                id: n,
                position: { lat: (37.3 + n * 0.001), lng: 126.9641624 }  
              }"
            />
          </NaverMapMarkerCluster>
          <NaverMapMarker 
            v-for="marker in additionalMarkers"
            :key="`added-marker-${marker.key}`"
            :options="marker.options"
            @click="removeAddedMarker(marker)"
          />
        </NaverMap>
        <div v-else>
          Map is hidden
        </div>
        <v-dialog
          v-model="dialogVisible"
          max-width="300"
        >
          <v-card>
            <v-card-title>Click Html marker</v-card-title>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      dialogVisible: false,
      mapVisible: true,
      mapScale: 0.5,
      additionalMarkers: [],
      markerOptions: {
        imageIcon: {
          id: 777,
          position: { lat: 37.2067362, lng: 126.9841624 },
          icon: '/favicon.ico' 
        },
        imageIconScaledSize: {
          position: { lat: 37.3237362, lng: 126.9431624 },
          icon: {
            url: '/favicon.ico',
            size: { width: 20, height: 20},
            scaledSize: { width: 20, height: 20},
            origin: { x:0, y:0 },
            anchor: { x: 10, y: 20 }
          }
        },
        html: {
          position: { lat: 37.4037362, lng: 127.1031624 },
          icon: {
            content: `<div class="marker-html">HM</div>`,
            size: { width: 20, height: 20},
            origin: { x:0, y:0 },
            anchor: { x: 10, y: 20 }
          } 
        },
        animation: {
          position: { lat: 37.4337362, lng: 127.0731624 },
          icon: '/favicon.ico',
          animation: 'DROP'
        },
        polygon: {
          position: { lat: 37.4337362, lng: 127.2031624 },
          icon: {
            path: [
              {x: 0, y: 70},
              {x: 20, y: 100},
              {x: 40, y: 70},
              {x: 30, y: 70},
              {x: 70, y: 0},
              {x: 10, y: 70}
            ],
            style: 'closedPath',
            anchor: { x: 23, y: 103 },
            fillColor: '#ff0000',
            fillOpacity: 1,
            strokeColor: '#000000',
            strokeStyle: 'solid',
            strokeWeight: 3
          }
        }
      }
    }
  },
  methods: {
    toggleMap() {
      this.mapVisible = !this.mapVisible
    },
    toggleScale() {
      this.mapScale = this.mapScale === 0.5 ? 2 : 0.5
      this.$refs.maps.map.setScale(this.mapScale)
    },
    handlerMapclick(event) {
      if (event && event.coord) {
        this.additionalMarkers.push({
          options: {
            position: event.coord
          },
          key: Math.random()
        })
      }
    },
    idle(event) {
      console.log('event', event)
    },
    dragend(event) {
      console.log('dragend', event)
    },
    removeAddedMarker(marker) {
      this.additionalMarkers = this.additionalMarkers.filter(addedMarker => addedMarker.key !== marker.key)
    },
    changeMarkerIcon(markerOption) {
      const target = this.$refs.maps.map.getMarkerByKey(markerOption, 'id')
      // available -> const target = this.$refs.maps.map.getMarkerByKey(markerOption) // id is default key
      if (target.icon === '/favicon.ico') {
        target.setIcon(this.markerOptions.html.icon)
      } else {
        target.setIcon('/favicon.ico')
      }
    },
    handlerClickCluster(members) {
      console.log('handlerClickCluster', members)
    }
  }
};
</script>

<style lang="scss">
  .marker-html {
    width: 30px;
    height: 30px;
    position: relative;
    background: white;
    line-height: 30px;
    text-align: center;
    font-weight: bold;
    border-radius: 15px;
    border: 1px solid black;
    transition: 0.5s;

    &:hover {
      background: black;
      color: white;
      border-color: red;
    }
  }
</style>