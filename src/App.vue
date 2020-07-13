<template>
  <v-app>
    <v-main>
      <v-container class="fill-height pa-0 align-start">
        <v-btn
          style="position: fixed; z-index: 9999;"
          @click="toggleMap"
        >
          Map toggle
        </v-btn>
        <NaverMap
          v-if="mapVisible"
          :naver-key="key"
          style="width: 100%; height: 100%;"
        >
          <NaverMapMarker :position="{ lat: 37.3467362, lng: 126.9641624 }" />
          <NaverMapMarkerCluster>
            <NaverMapMarker />
            <NaverMapMarker :position="{ lat: 37.3467362, lng: 126.9641624 }" />
            <NaverMapMarker :position="{ lat: 37.3477362, lng: 126.9641624 }" />
            <NaverMapMarker :position="{ lat: 37.3487362, lng: 126.9641624 }" />
            <NaverMapMarker :position="{ lat: 37.3497362, lng: 126.9641624 }" />
            <NaverMapMarker :position="{ lat: 37.3507362, lng: 126.9641624 }" />
            <NaverMapMarker :position="{ lat: 37.3517362, lng: 126.9641624 }" />
            <NaverMapMarker :position="{ lat: 37.3527362, lng: 126.9641624 }" />
            <NaverMapMarker 
              v-for="n in 1000"
              :key="n"
              :position="{ lat: (37 + n * 0.001), lng: 126.9641624 }"
            />
          </NaverMapMarkerCluster>
        </NaverMap>
        <div v-else>
          Map is hidden
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mapVisible: true,
      key: process.env.VUE_APP_NAVER_KEY
    }
  },
  methods: {
    toggleMap() {
      this.mapVisible = !this.mapVisible
    }
  }
};
</script>
