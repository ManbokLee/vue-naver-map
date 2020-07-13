# vue-naver-map

### 주의사항
```
 개발중인 브랜치입니다.
```

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
 - 네이버 라이브러리를 지도 로딩전에 사용할 수 있게 적용
 - 크로스브라우징 테스트
```

### package use
```
import Vue from 'vue'
import VueNaverMap from 'vue-naver-map'
Vue.use(VueNaverMap)
```

### 외부 라이브러리
```
Naver map MarkerClustering.js (Apache License 2.0)
 - 원본경로: https://github.com/navermaps/marker-tools.js/tree/master/marker-clustering
 - 수정사항:
   - 모듈화하여 사용하기위해 해당 라이브러리를 export 할 수 있게 수정.
   - 기타 변경점 없음.
```
