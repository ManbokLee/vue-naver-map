# vue-naver-map
 
 > [네이버 맵 API](https://navermaps.github.io/maps.js.ncp/docs/index.html)의 기본 기능(맵, 마커, 클러스터)을 사용할 수 있습니다. 네이버 맵, 마커 및 클러스터를 컴포넌트로 사용할 수 있으며 각 객체에 접근하려면 선언된 엘리먼트의 ref를 사용해서 접근 가능합니다. 접근성, 편의성을 체크해서 개발중인 상태입니다.

### Use
```javascript
// main.js
import Vue from 'vue'
import VueNaverMap from 'vue-naver-map'
Vue.use(VueNaverMap, {
  key: /* your key, type: String */,
  libraries: ['geocoder'] /* type: Array */
})
```
```html
<!-- in component -->
<naver-map style="width: 100%; height: 100%;">
  <naver-map-marker-cluster>
    <naver-map-marker />
  </naver-map-marker-cluster>
</naver-map>
```
#### Use Naver map service
```javascript
// Case geocode 
this.$navers.naver.maps.Service.geocode({ query: '덕수궁길 15' }, function(status, response) {
    if (status === this.$navers.naver.maps.Service.Status.ERROR) {
        return alert('Something wrong!');
    }
    console.log(response)
});
```
#### Event binding on Map [참고](https://github.com/ManbokLee/vue-naver-map/blob/master/src/App.vue)
```html
<!-- in component -->
<naver-map style="width: 100%; height: 100%;" @click="handlerClickMap">
  ...
</naver-map>
```
```javascript
/// map event binding
...
methods: {
  handlerClickMap(event) {
    console.log(event)
  }
}
...
```

### Use Nuxt
```javascript
 // nuxt.config.js
 ...
 plugins: [
   ...
    '~/plugins/naverMap.client.js'
  ],
...
```
```javascript
// plugins/naverMap.client.js
import Vue from 'vue'
import VueNaverMap from 'vue-naver-map'
Vue.use(VueNaverMap, {
  key: /* your key, type: String */,
  libraries: ['geocoder'] /* type: Array */
})
```
```html
<!-- in component -->
<client-only>
  <naver-map style="width: 100%; height: 100%;">
    <naver-map-marker-cluster>
      <naver-map-marker />
    </naver-map-marker-cluster>
  </naver-map>
</client-only>
```

### Marker Sample
```html
<!-- in component -->
<naver-map
  :zoom="10"
  style="width: 100%; height: 100%;"
>
  <naver-map-marker />
  <naver-map-marker :options="markerOptions.imageIcon" />
  <naver-map-marker :options="markerOptions.imageIconScaledSize" />
  <naver-map-marker
    :options="markerOptions.html"
    @click="dialogVisible = !dialogVisible"
  />
  <naver-map-marker :options="markerOptions.animation" />
  <naver-map-marker :options="markerOptions.polygon" />

  <naver-map-marker-cluster @click-cluster="handlerClickCluster">
    <naver-map-marker 
      v-for="n in 30"
      :key="n"
      :options="{
        position: { lat: (37.3 + n * 0.001), lng: 126.9641624 }  
      }"
    />
  </naver-map-marker-cluster>
</naver-map>
```
```javascript
// script
export default {
  name: 'App',
  data() {
    return {
      dialogVisible: false,
      markerOptions: {
        imageIcon: {
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
    handlerClickCluster (markers) {
      console.log(markers)
    }
  }
};
```
```css
/* in style scss */
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
      background-color: black;
      color: white;
      border-color: red;
    }
  }
```


### naver map 사용
```html
<!-- in component -->
<naver-map
  ref="maps"
  :zoom="10"
  style="width: 100%; height: 100%;"
>
  <!-- ... -->
</naver-map>
```
```javascript
// script
const map = this.$refs.maps.map
map.setScale(2)
```

### 특정 마커 찾아서 변환하기
```html
  <!-- in component -->
  <naver-map
    v-if="mapVisible"
    ref="maps"
    :zoom="10"
    style="width: 100%; height: 100%;"
  >
    <naver-map-marker 
      :options="markerOptions.imageIcon" 
      @click="changeMarkerIcon(markerOptions.imageIcon)" 
    />
  </naver-map>
```
```javascript
// script
...
data () {
  return {
    markerOptions: {
      imageIcon: {
        id: 777,
        position: { lat: 37.2067362, lng: 126.9841624 },
        icon: '/favicon.ico' 
      },
      html: {
        icon: {
          content: `<div class="marker-html">HM</div>`,
          size: { width: 20, height: 20},
          origin: { x:0, y:0 },
          anchor: { x: 10, y: 20 }
        } 
      }
    }
  }
},
methdos: {
  changeMarkerIcon(markerOption) {
    const target = this.$refs.maps.map.getMarkerByKey(markerOption, 'id')
    // available -> const target = this.$refs.maps.map.getMarkerByKey(markerOption) // 'id' is default key
    if (target.icon === '/favicon.ico') {
      target.setIcon(this.markerOptions.html.icon)
    } else {
      target.setIcon('/favicon.ico')
    }
  }
}
...
```


### 외부 라이브러리
```
Naver map MarkerClustering.js (Apache License 2.0)
 - 원본경로: https://github.com/navermaps/marker-tools.js/tree/master/marker-clustering
 - 수정사항:
   - 모듈화하여 사용하기위해 해당 라이브러리를 export 할 수 있게 수정.
   - 기타 변경점 없음.
```


### 업데이트 로그
```
2020.07.14 @babel/preset-env 적용
2020.07.14 마커 옵션, 이벤트 바인딩 적용
2020.07.16 라이브러리 호출을 위한 키와 서비스를 모듈 실행부분으로 변경(맵로딩하지 않아도 this.$navers.naver 으로 라이브러리 접근 가능)
2020.07.16 맵 컴포넌트의 이벤트 바인딩 적용
2020.10.05 maps ref에서 맵에 존재하는 marker를 특정할 수 있게 적용
2021.05.27 클러스터 클릭 emit 추가
```