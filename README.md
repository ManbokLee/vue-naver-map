# vue-naver-map

## 상태: 프로토타입
```
구현 된 Feature
 - 컴포넌트 구조를 사용한 맵 과 마커 뷰
 - 마커 클러스터를 컴포넌트 구조에 포함시킴 (<map><cluster><marker /><marker />...</cluster></map>)
 - 클러스터안의 마커 드로우시 표시문제 해결
 - 클러스터안의 마커 드로우시 성능문제 해결
```

### 남은 Feature
```
 - 맵, 클러스터, 마커 객체를 반환시켜서 사용자가 커스텀 할 수 있게 적용
 - 마커 - 클러스터 성능 테스트
 - 네이버 키를 옵션으로 받게 수정
 - 네이버 라이브러리를 지도로딩 전에 사용할 수 있게 적용
 - npm용 빌드 최적화
```

### 주의사항
```
 - 개발중인 브랜치입니다.
```

### package use
```
import Vue from 'vue'
import VueNaverMap from 'vue-naver-map'
Vue.use(VueNaverMap)
```

### package test code install and run
```
yarn install
yarn dev
```

