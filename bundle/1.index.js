(window.webpackJsonpnMap=window.webpackJsonpnMap||[]).push([[1],{122:function(t,e,r){"use strict";var n=r(3),s=r(85).indexOf,i=r(52),o=r(20),a=[].indexOf,u=!!a&&1/[1].indexOf(1,-0)<0,l=i("indexOf"),c=o("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:u||!l||!c},{indexOf:function(t){return u?a.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},123:function(t,e,r){"use strict";r.r(e);r(51),r(122),r(37),r(53);var n=function(t){this.DEFAULT_OPTIONS={map:null,markers:[],disableClickZoom:!0,minClusterSize:2,maxZoom:13,gridSize:100,icons:[],indexGenerator:[10,100,200,500,1e3],averageCenter:!1,stylingFunction:function(){}},this._clusters=[],this._mapRelations=null,this._markerRelations=[],this.setOptions(naver.maps.Util.extend({},this.DEFAULT_OPTIONS,t),!0),this.setMap(t.map||null)};naver.maps.Util.ClassExtend(n,naver.maps.OverlayView,{onAdd:function(){var t=this.getMap();this._mapRelations=naver.maps.Event.addListener(t,"idle",naver.maps.Util.bind(this._onIdle,this)),this.getMarkers().length>0&&(this._createClusters(),this._updateClusters())},draw:naver.maps.Util.noop,onRemove:function(){naver.maps.Event.removeListener(this._mapRelation),this._clearClusters(),this._geoTree=null,this._mapRelation=null},setOptions:function(t){var e=this;if("string"==typeof t){var r=t,n=arguments[1];e.set(r,n)}else{var s=arguments[1];naver.maps.Util.forEach(t,(function(t,r){"map"!==r&&e.set(r,t)})),t.map&&!s&&e.setMap(t.map)}},getOptions:function(t){var e=this,r={};return void 0!==t?e.get(t):(naver.maps.Util.forEach(e.DEFAULT_OPTIONS,(function(t,n){r[n]=e.get(n)})),r)},getMinClusterSize:function(){return this.getOptions("minClusterSize")},setMinClusterSize:function(t){this.setOptions("minClusterSize",t)},getMaxZoom:function(){return this.getOptions("maxZoom")},setMaxZoom:function(t){this.setOptions("maxZoom",t)},getGridSize:function(){return this.getOptions("gridSize")},setGridSize:function(t){this.setOptions("gridSize",t)},getIndexGenerator:function(){return this.getOptions("indexGenerator")},setIndexGenerator:function(t){this.setOptions("indexGenerator",t)},getMarkers:function(){return this.getOptions("markers")},setMarkers:function(t){this.setOptions("markers",t)},getIcons:function(){return this.getOptions("icons")},setIcons:function(t){this.setOptions("icons",t)},getStylingFunction:function(){return this.getOptions("stylingFunction")},setStylingFunction:function(t){this.setOptions("stylingFunction",t)},getDisableClickZoom:function(){return this.getOptions("disableClickZoom")},setDisableClickZoom:function(t){this.setOptions("disableClickZoom",t)},getAverageCenter:function(){return this.getOptions("averageCenter")},setAverageCenter:function(t){this.setOptions("averageCenter",t)},changed:function(t,e){if(this.getMap())switch(t){case"marker":case"minClusterSize":case"gridSize":case"averageCenter":this._redraw();break;case"indexGenerator":case"icons":this._clusters.forEach((function(t){t.updateIcon()}));break;case"maxZoom":this._clusters.forEach((function(t){t.getCount()>1&&t.checkByZoomAndMinClusterSize()}));break;case"stylingFunction":this._clusters.forEach((function(t){t.updateCount()}));break;case"disableClickZoom":var r="enableClickZoom";e&&(r="disableClickZoom"),this._clusters.forEach((function(t){t[r]()}))}},_createClusters:function(){var t=this.getMap();if(t)for(var e=t.getBounds(),r=this.getMarkers(),n=0,s=r.length;n<s;n++){var i=r[n],o=i.getPosition();if(e.hasLatLng(o))this._getClosestCluster(o).addMarker(i),this._markerRelations.push(naver.maps.Event.addListener(i,"dragend",naver.maps.Util.bind(this._onDragEnd,this)))}},_updateClusters:function(){for(var t=this._clusters,e=0,r=t.length;e<r;e++)t[e].updateCluster()},_clearClusters:function(){for(var t=this._clusters,e=0,r=t.length;e<r;e++)t[e].destroy();naver.maps.Event.removeListener(this._markerRelations),this._markerRelations=[],this._clusters=[]},_redraw:function(){this._clearClusters(),this._createClusters(),this._updateClusters()},_getClosestCluster:function(t){for(var e=this.getProjection(),r=this._clusters,n=null,i=1/0,o=0,a=r.length;o<a;o++){var u=r[o],l=u.getCenter();if(u.isInBounds(t)){var c=e.getDistance(l,t);c<i&&(i=c,n=u)}}return n||(n=new s(this),this._clusters.push(n)),n},_onIdle:function(){this._redraw()},_onDragEnd:function(){this._redraw()}});var s=function(t){this._clusterCenter=null,this._clusterBounds=null,this._clusterMarker=null,this._relation=null,this._clusterMember=[],this._markerClusterer=t};s.prototype={constructor:s,addMarker:function(t){if(!this._isMember(t)){if(!this._clusterCenter){var e=t.getPosition();this._clusterCenter=e,this._clusterBounds=this._calcBounds(e)}this._clusterMember.push(t)}},destroy:function(){naver.maps.Event.removeListener(this._relation);for(var t=this._clusterMember,e=0,r=t.length;e<r;e++)t[e].setMap(null);this._clusterMarker.setMap(null),this._clusterMarker=null,this._clusterCenter=null,this._clusterBounds=null,this._relation=null,this._clusterMember=[]},getCenter:function(){return this._clusterCenter},getBounds:function(){return this._clusterBounds},getCount:function(){return this._clusterMember.length},getClusterMember:function(){return this._clusterMember},isInBounds:function(t){return this._clusterBounds&&this._clusterBounds.hasLatLng(t)},enableClickZoom:function(){if(!this._relation){var t=this._markerClusterer.getMap();this._relation=naver.maps.Event.addListener(this._clusterMarker,"click",naver.maps.Util.bind((function(e){t.morph(e.coord,t.getZoom()+1)}),this))}},disableClickZoom:function(){this._relation&&(naver.maps.Event.removeListener(this._relation),this._relation=null)},updateCluster:function(){var t;this._clusterMarker||(t=this._markerClusterer.getAverageCenter()?this._calcAverageCenter(this._clusterMember):this._clusterCenter,this._clusterMarker=new naver.maps.Marker({position:t,map:this._markerClusterer.getMap()}),this._markerClusterer.getDisableClickZoom()||this.enableClickZoom());this.updateIcon(),this.updateCount(),this.checkByZoomAndMinClusterSize()},checkByZoomAndMinClusterSize:function(){var t=this._markerClusterer,e=t.getMinClusterSize(),r=t.getMaxZoom(),n=t.getMap().getZoom();this.getCount()<e?this._showMember():(this._hideMember(),r<=n&&this._showMember())},updateCount:function(){var t=this._markerClusterer.getStylingFunction();t&&t(this._clusterMarker,this.getCount())},updateIcon:function(){var t=this.getCount(),e=this._getIndex(t),r=this._markerClusterer.getIcons();e=Math.max(e,0),e=Math.min(e,r.length-1),this._clusterMarker.setIcon(r[e])},_showMember:function(){for(var t=this._markerClusterer.getMap(),e=this._clusterMarker,r=this._clusterMember,n=0,s=r.length;n<s;n++)r[n].setMap(t);e&&e.setMap(null)},_hideMember:function(){for(var t=this._markerClusterer.getMap(),e=this._clusterMarker,r=this._clusterMember,n=0,s=r.length;n<s;n++)r[n].setMap(null);e&&!e.getMap()&&e.setMap(t)},_calcBounds:function(t){var e=this._markerClusterer.getMap(),r=new naver.maps.LatLngBounds(t.clone(),t.clone()),n=e.getBounds(),s=e.getProjection(),i=s.fromCoordToOffset(n.getNE()),o=s.fromCoordToOffset(n.getSW()),a=s.fromCoordToOffset(r.getNE()),u=s.fromCoordToOffset(r.getSW()),l=this._markerClusterer.getGridSize()/2;a.add(l,-l),u.add(-l,l);var c=Math.min(i.x,a.x),h=Math.max(i.y,a.y),m=Math.max(o.x,u.x),f=Math.min(o.y,u.y),g=s.fromOffsetToCoord(new naver.maps.Point(c,h)),d=s.fromOffsetToCoord(new naver.maps.Point(m,f));return new naver.maps.LatLngBounds(d,g)},_getIndex:function(t){var e=this._markerClusterer.getIndexGenerator();if(naver.maps.Util.isFunction(e))return e(t);if(naver.maps.Util.isArray(e)){for(var r=0,n=r,s=e.length;n<s;n++){if(t<e[n])break;r++}return r}},_isMember:function(t){return-1!==this._clusterMember.indexOf(t)},_calcAverageCenter:function(t){for(var e=t.length,r=[0,0],n=0;n<e;n++)r[0]+=t[n].position.x,r[1]+=t[n].position.y;return r[0]/=e,r[1]/=e,new naver.maps.Point(r[0],r[1])}},e.default=n}}]);