(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nMap"] = factory();
	else
		root["nMap"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".index.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonpnMap"] = window["webpackJsonpnMap"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {


module.exports = function load (src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0]
  var script = document.createElement('script')

  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  opts = opts || {}
  cb = cb || function() {}

  script.type = opts.type || 'text/javascript'
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true
  script.src = src

  if (opts.attrs) {
    setAttributes(script, opts.attrs)
  }

  if (opts.text) {
    script.text = '' + opts.text
  }

  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
  onend(script, cb)

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb);
  }

  head.appendChild(script)
}

function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}

function stdOnEnd (script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null
    cb(null, script)
  }
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null
    cb(new Error('Failed to load ' + this.src), script)
  }
}

function ieOnEnd (script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') return
    this.onreadystatechange = null
    cb(null, script) // there is no way to catch loading errors in IE8
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "NaverMap", function() { return /* reexport */ Map; });
__webpack_require__.d(__webpack_exports__, "NaverMapMarker", function() { return /* reexport */ Marker; });
__webpack_require__.d(__webpack_exports__, "NaverMapMarkerCluster", function() { return /* reexport */ Cluster; });
__webpack_require__.d(__webpack_exports__, "install", function() { return /* binding */ install; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-naver-map/components/Map.vue?vue&type=template&id=59e75b73&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        ref: "map",
        staticClass: "map",
        staticStyle: { width: "100%", height: "100%" }
      },
      [!_vm.loading ? _vm._t("default") : _vm._e()],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/vue-naver-map/components/Map.vue?vue&type=template&id=59e75b73&

// EXTERNAL MODULE: ./node_modules/load-script/index.js
var load_script = __webpack_require__(0);
var load_script_default = /*#__PURE__*/__webpack_require__.n(load_script);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/vue-naver-map/components/Map.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Mapvue_type_script_lang_js_ = ({
  provide() {
    const core = {};
    Object.defineProperty(core, "map", {
      get: () => this.map,
    });
    Object.defineProperty(core, "naver", {
      get: () => this.naver,
    });
    return { core };
  },
  props: {
    naverKey: {
      type: String,
      default: "",
    },
    center: {
      type: Object,
      default: () => ({}),
    },
    zoom: {
      type: Number,
      default: 10,
    },
    libraries: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      map: null,
      naver: null,
      loading: true,
    };
  },
  created() {
    this.loadMap();
  },
  methods: {
    async loadMap() {
      const isSsr = await this.checkServer()
      if (isSsr) {
        return
      }
      load_script_default()(
        `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${this.naverKey}&submodules=${this.libraries.join(",")}`,
        (error) => {
          if (error) {
            throw new Error(error);
          }
          this.naver = window.naver
          this.loading = false;
          const mapOptions = {
            ...this.options,
            center: new this.naver.maps.LatLng(this.center.lat || 37.3595704, this.center.lng || 127.105399),
            zoom: this.zoom
          };
          window.map = this.map = new this.naver.maps.Map(
            this.$refs.map,
            mapOptions
          );
        }
      );
    },
    checkServer() {
      return typeof window === 'undefined'
    }
  },
});

// CONCATENATED MODULE: ./src/vue-naver-map/components/Map.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Mapvue_type_script_lang_js_ = (Mapvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/vue-naver-map/components/Map.vue





/* normalize component */

var component = normalizeComponent(
  components_Mapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue-naver-map/components/Map.vue"
/* harmony default export */ var Map = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/vue-naver-map/components/Marker.vue?vue&type=script&lang=js&

/* harmony default export */ var Markervue_type_script_lang_js_ = ({
  inject: {
    core: {
      type: Object,
      required: true,
    },
    cluster: {
      type: [Object, Boolean],
      default: false,
    },
  },
  props: {
    position: {
      type: Object,
      required: false,
      default: () => ({ lat: 37.3377362, lng: 126.9941624 }),
    },
  },
  data() {
    return {
      marker: null,
    };
  },
  created() {
    this.createMarker();
  },
  beforeDestroy() {
    this.destroyMarker();
  },
  methods: {
    createMarker() {
      if (!this.core.map) {
        throw new Error("Map loading is not finish.");
      }
      if (this.cluster) {
        this.insertCluster();
        return;
      }
      this.marker = new this.core.naver.maps.Marker({
        position: new this.core.naver.maps.LatLng(
          this.position.lat,
          this.position.lng
        ),
        map: this.core.map,
      });
    },
    insertCluster() {
      this.marker = new this.core.naver.maps.Marker({
        position: new this.core.naver.maps.LatLng(
          this.position.lat,
          this.position.lng
        ),
      });
      this.cluster.clustering.markers.push(this.marker)
      if (this.core.map._debounceThing) {
        clearTimeout(this.core.map._debounceThing);
      }
      this.core.map._debounceThing = setTimeout(this.redrawCluster, 500);
    },
    redrawCluster() {
      this.cluster.clustering.setMap(this.cluster.clustering.getMap());
    },
    destroyMarker() {
      this.marker.setMap(null);
      this.marker = null;
    },
  },
  render() {
    return {};
  },
});

// CONCATENATED MODULE: ./src/vue-naver-map/components/Marker.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Markervue_type_script_lang_js_ = (Markervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/vue-naver-map/components/Marker.vue
var Marker_render, Marker_staticRenderFns




/* normalize component */

var Marker_component = normalizeComponent(
  components_Markervue_type_script_lang_js_,
  Marker_render,
  Marker_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Marker_api; }
Marker_component.options.__file = "src/vue-naver-map/components/Marker.vue"
/* harmony default export */ var Marker = (Marker_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-naver-map/components/Cluster.vue?vue&type=template&id=260a7191&
var Clustervue_type_template_id_260a7191_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [!_vm.loading ? _vm._t("default") : _vm._e()], 2)
}
var Clustervue_type_template_id_260a7191_staticRenderFns = []
Clustervue_type_template_id_260a7191_render._withStripped = true


// CONCATENATED MODULE: ./src/vue-naver-map/components/Cluster.vue?vue&type=template&id=260a7191&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/vue-naver-map/components/Cluster.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var Clustervue_type_script_lang_js_ = ({
  provide() {
    const cluster = {};
    Object.defineProperty(cluster, "clustering", {
      enumerable: true,
      get: () => this.cluster,
    });
    return { cluster };
  },
  inject: {
    core: {
      type: Object,
      required: true,
    },
  },
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      cluster: null,
      loading: true,
    };
  },
  created() {
    this.createCluster();
  },
  beforeDestroy() {
    this.destroyCluster();
  },
  methods: {
    async createCluster() {
      if (!this.core.map) {
        throw new Error("Map loading is not finish.");
      }
      Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 2)).then((script) => {
        this.cluster = new script.default({
          map: this.core.map,
          markers: [],
          minClusterSize: this.getOption("minClusterSize", 1),
          maxZoom: this.getOption("maxZoom", 20),
          disableClickZoom: this.getOption("disableClickZoom"),
          gridSize: this.getOption("gridSize", 120),
          icons: this.getOption("icons", this.getDefaultIcons()),
          indexGenerator: this.getOption("indexGenerator", [
            10,
            100,
            200,
            500,
            1000,
          ]),
          stylingFunction: this.getOption(
            "stylingFunction",
            this.getDefaultStylingFunction()
          ),
        });
        this.loading = false;
      });
    },
    destroyCluster() {
      this.cluster.setMap(null);
      this.cluster = null;
    },
    getOption(key, defaultValue = false) {
      return this.options[key] === undefined ? defaultValue : this.options[key];
    },
    getDefaultStylingFunction() {
      return function(clusterMarker, count) {
        clusterMarker
          .getElement()
          .getElementsByTagName("div")[0].innerText = count;
      };
    },
    getDefaultIcons() {
      return [
        {
          content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:black;text-align:center;font-weight:bold;background-color: #adffb3;border-radius:20px;"></div>`,
          size: this.core.naver.maps.Size(40, 40),
          anchor: this.core.naver.maps.Point(20, 20),
        },
        {
          content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:black;text-align:center;font-weight:bold;background-color: #75ff7f;border-radius:20px;"></div>`,
          size: this.core.naver.maps.Size(40, 40),
          anchor: this.core.naver.maps.Point(20, 20),
        },
        {
          content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:black;text-align:center;font-weight:bold;background-color: #1dff2d;border-radius:20px;"></div>`,
          size: this.core.naver.maps.Size(40, 40),
          anchor: this.core.naver.maps.Point(20, 20),
        },
        {
          content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:black;text-align:center;font-weight:bold;background-color: #e7ff1d;border-radius:20px;"></div>`,
          size: this.core.naver.maps.Size(40, 40),
          anchor: this.core.naver.maps.Point(20, 20),
        },
        {
          content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:black;text-align:center;font-weight:bold;background-color: #ffa51d;border-radius:20px;"></div>`,
          size: this.core.naver.maps.Size(40, 40),
          anchor: this.core.naver.maps.Point(20, 20),
        },
      ];
    },
  },
});

// CONCATENATED MODULE: ./src/vue-naver-map/components/Cluster.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Clustervue_type_script_lang_js_ = (Clustervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/vue-naver-map/components/Cluster.vue





/* normalize component */

var Cluster_component = normalizeComponent(
  components_Clustervue_type_script_lang_js_,
  Clustervue_type_template_id_260a7191_render,
  Clustervue_type_template_id_260a7191_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Cluster_api; }
Cluster_component.options.__file = "src/vue-naver-map/components/Cluster.vue"
/* harmony default export */ var Cluster = (Cluster_component.exports);
// CONCATENATED MODULE: ./src/vue-naver-map/index.js






function install(Vue, options = {}) {
  options = {
    installComponents: true,
    autobindAllEvents: false,
    ...options,
  };

  if (options.installComponents) {
    Vue.component("NaverMap", Map);
    Vue.component("NaverMapMarker", Marker);
    Vue.component("NaverMapMarkerCluster", Cluster);
  }
}

/* harmony default export */ var vue_naver_map = __webpack_exports__["default"] = ({
  install,
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright 2016 NAVER Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable */
/**
 * 마커 클러스터링을 정의합니다.
 * @param {Object} options 마커 클러스터링 옵션
 */
var MarkerClustering = function(options) {
	// 기본 값입니다.
	this.DEFAULT_OPTIONS = {
		// 클러스터 마커를 올릴 지도입니다.
		map: null,
		// 클러스터 마커를 구성할 마커입니다.
		markers: [],
		// 클러스터 마커 클릭 시 줌 동작 여부입니다.
		disableClickZoom: true,
		// 클러스터를 구성할 최소 마커 수입니다.
		minClusterSize: 2,
		// 클러스터 마커로 표현할 최대 줌 레벨입니다. 해당 줌 레벨보다 높으면, 클러스터를 구성하고 있는 마커를 노출합니다.
		maxZoom: 13,
		// 클러스터를 구성할 그리드 크기입니다. 단위는 픽셀입니다.
		gridSize: 100,
		// 클러스터 마커의 아이콘입니다. NAVER Maps JavaScript API v3에서 제공하는 아이콘, 심볼, HTML 마커 유형을 모두 사용할 수 있습니다.
		icons: [],
		// 클러스터 마커의 아이콘 배열에서 어떤 아이콘을 선택할 것인지 인덱스를 결정합니다.
		indexGenerator: [10, 100, 200, 500, 1000],
		// 클러스터 마커의 위치를 클러스터를 구성하고 있는 마커의 평균 좌표로 할 것인지 여부입니다.
		averageCenter: false,
		// 클러스터 마커를 갱신할 때 호출하는 콜백함수입니다. 이 함수를 통해 클러스터 마커에 개수를 표현하는 등의 엘리먼트를 조작할 수 있습니다.
		stylingFunction: function() {}
	};

	this._clusters = [];

	this._mapRelations = null;
	this._markerRelations = [];

	this.setOptions(naver.maps.Util.extend({}, this.DEFAULT_OPTIONS, options), true);
	this.setMap(options.map || null);
};

naver.maps.Util.ClassExtend(MarkerClustering, naver.maps.OverlayView, {
	onAdd: function() {
		var map = this.getMap();

		this._mapRelations = naver.maps.Event.addListener(map, 'idle', naver.maps.Util.bind(this._onIdle, this));

		if (this.getMarkers().length > 0) {
			this._createClusters();
			this._updateClusters();
		}
	},

	draw: naver.maps.Util.noop,

	onRemove: function() {
		naver.maps.Event.removeListener(this._mapRelation);

		this._clearClusters();

		this._geoTree = null;
		this._mapRelation = null;
	},

	/**
	 * 마커 클러스터링 옵션을 설정합니다. 설정한 옵션만 반영됩니다.
	 * @param {Object | string} newOptions 옵션
	 */
	setOptions: function(newOptions) {
		var _this = this;

		if (typeof newOptions === 'string') {
			var key = newOptions,
				value = arguments[1];

			_this.set(key, value);
		} else {
			var isFirst = arguments[1];

			naver.maps.Util.forEach(newOptions, function(value, key) {
				if (key !== 'map') {
					_this.set(key, value);
				}
			});

			if (newOptions.map && !isFirst) {
				_this.setMap(newOptions.map);
			}
		}
	},

	/**
	 * 마커 클러스터링 옵션을 반환합니다. 특정 옵션 이름을 지정하지 않으면, 모든 옵션을 반환합니다.
	 * @param {string} key 반환받을 옵션 이름
	 * @return {Any} 옵션
	 */
	getOptions: function(key) {
		var _this = this,
			options = {};

		if (key !== undefined) {
			return _this.get(key);
		} else {
			naver.maps.Util.forEach(_this.DEFAULT_OPTIONS, function(value, key) {
				options[key] = _this.get(key);
			});

			return options;
		}
	},

	/**
	 * 클러스터를 구성하는 최소 마커 수를 반환합니다.
	 * @return {number} 클러스터를 구성하는 최소 마커 수
	 */
	getMinClusterSize: function() {
		return this.getOptions('minClusterSize');
	},

	/**
	 * 클러스터를 구성하는 최소 마커 수를 설정합니다.
	 * @param {number} size 클러스터를 구성하는 최소 마커 수
	 */
	setMinClusterSize: function(size) {
		this.setOptions('minClusterSize', size);
	},

	/**
	 * 클러스터 마커를 노출할 최대 줌 레벨을 반환합니다.
	 * @return {number} 클러스터 마커를 노출할 최대 줌 레벨
	 */
	getMaxZoom: function() {
		return this.getOptions('maxZoom');
	},

	/**
	 * 클러스터 마커를 노출할 최대 줌 레벨을 설정합니다.
	 * @param {number} zoom 클러스터 마커를 노출할 최대 줌 레벨
	 */
	setMaxZoom: function(zoom) {
		this.setOptions('maxZoom', zoom);
	},

	/**
	 * 클러스터를 구성할 그리드 크기를 반환합니다. 단위는 픽셀입니다.
	 * @return {number} 클러스터를 구성할 그리드 크기
	 */
	getGridSize: function() {
		return this.getOptions('gridSize');
	},

	/**
	 * 클러스터를 구성할 그리드 크기를 설정합니다. 단위는 픽셀입니다.
	 * @param {number} size 클러스터를 구성할 그리드 크기
	 */
	setGridSize: function(size) {
		this.setOptions('gridSize', size);
	},

	/**
	 * 클러스터 마커의 아이콘을 결정하는 인덱스 생성기를 반환합니다.
	 * @return {Array | Function} 인덱스 생성기
	 */
	getIndexGenerator: function() {
		return this.getOptions('indexGenerator');
	},

	/**
	 * 클러스터 마커의 아이콘을 결정하는 인덱스 생성기를 설정합니다.
	 * @param {Array | Function} indexGenerator 인덱스 생성기
	 */
	setIndexGenerator: function(indexGenerator) {
		this.setOptions('indexGenerator', indexGenerator);
	},

	/**
	 * 클러스터로 구성할 마커를 반환합니다.
	 * @return {Array.<naver.maps.Marker>} 클러스터로 구성할 마커
	 */
	getMarkers: function() {
		return this.getOptions('markers');
	},

	/**
	 * 클러스터로 구성할 마커를 설정합니다.
	 * @param {Array.<naver.maps.Marker>} markers 클러스터로 구성할 마커
	 */
	setMarkers: function(markers) {
		this.setOptions('markers', markers);
	},

	/**
	 * 클러스터 마커 아이콘을 반환합니다.
	 * @return {Array.<naver.maps.Marker~ImageIcon | naver.maps.Marker~SymbolIcon | naver.maps.Marker~HtmlIcon>} 클러스터 마커 아이콘
	 */
	getIcons: function() {
		return this.getOptions('icons');
	},

	/**
	 * 클러스터 마커 아이콘을 설정합니다.
	 * @param {Array.<naver.maps.Marker~ImageIcon | naver.maps.Marker~SymbolIcon | naver.maps.Marker~HtmlIcon>} icons 클러스터 마커 아이콘
	 */
	setIcons: function(icons) {
		this.setOptions('icons', icons);
	},

	/**
	 * 클러스터 마커의 엘리먼트를 조작할 수 있는 스타일링 함수를 반환합니다.
	 * @return {Funxtion} 콜백함수
	 */
	getStylingFunction: function() {
		return this.getOptions('stylingFunction');
	},

	/**
	 * 클러스터 마커의 엘리먼트를 조작할 수 있는 스타일링 함수를 설정합니다.
	 * @param {Function} func 콜백함수
	 */
	setStylingFunction: function(func) {
		this.setOptions('stylingFunction', func);
	},

	/**
	 * 클러스터 마커를 클릭했을 때 줌 동작 수행 여부를 반환합니다.
	 * @return {boolean} 줌 동작 수행 여부
	 */
	getDisableClickZoom: function() {
		return this.getOptions('disableClickZoom');
	},

	/**
	 * 클러스터 마커를 클릭했을 때 줌 동작 수행 여부를 설정합니다.
	 * @param {boolean} flag 줌 동작 수행 여부
	 */
	setDisableClickZoom: function(flag) {
		this.setOptions('disableClickZoom', flag);
	},

	/**
	 * 클러스터 마커의 위치를 클러스터를 구성하고 있는 마커의 평균 좌표로 할 것인지 여부를 반환합니다.
	 * @return {boolean} 평균 좌표로 클러스터링 여부
	 */
	getAverageCenter: function() {
		return this.getOptions('averageCenter');
	},

	/**
	 * 클러스터 마커의 위치를 클러스터를 구성하고 있는 마커의 평균 좌표로 할 것인지 여부를 설정합니다.
	 * @param {boolean} averageCenter 평균 좌표로 클러스터링 여부
	 */
	setAverageCenter: function(averageCenter) {
		this.setOptions('averageCenter', averageCenter);
	},

	// KVO 이벤트 핸들러
	changed: function(key, value) {
		if (!this.getMap()) return;

		switch (key) {
			case 'marker':
			case 'minClusterSize':
			case 'gridSize':
			case 'averageCenter':
				this._redraw();
				break;
			case 'indexGenerator':
			case 'icons':
				this._clusters.forEach(function(cluster) {
					cluster.updateIcon();
				});
				break;
			case 'maxZoom':
				this._clusters.forEach(function(cluster) {
					if (cluster.getCount() > 1) {
						cluster.checkByZoomAndMinClusterSize();
					}
				});
				break;
			case 'stylingFunction':
				this._clusters.forEach(function(cluster) {
					cluster.updateCount();
				});
				break;
			case 'disableClickZoom':
				var exec = 'enableClickZoom';

				if (value) {
					exec = 'disableClickZoom';
				}

				this._clusters.forEach(function(cluster) {
					cluster[exec]();
				});
				break;
		}
	},

	/**
	 * 현재 지도 경계 영역 내의 마커에 대해 클러스터를 생성합니다.
	 * @private
	 */
	_createClusters: function() {
		var map = this.getMap();

		if (!map) return;

		var bounds = map.getBounds(),
			markers = this.getMarkers();

		for (var i = 0, ii = markers.length; i < ii; i++) {
			var marker = markers[i],
				position = marker.getPosition();

			if (!bounds.hasLatLng(position)) continue;

			var	closestCluster = this._getClosestCluster(position);

			closestCluster.addMarker(marker);

			this._markerRelations.push(naver.maps.Event.addListener(marker, 'dragend', naver.maps.Util.bind(this._onDragEnd, this)));
		}
	},

	/**
	 * 클러스터의 아이콘, 텍스트를 갱신합니다.
	 * @private
	 */
	_updateClusters: function() {
		var clusters = this._clusters;

		for (var i = 0, ii = clusters.length; i < ii; i++) {
			clusters[i].updateCluster();
		}
	},

	/**
	 * 클러스터를 모두 제거합니다.
	 * @private
	 */
	_clearClusters: function() {
		var clusters = this._clusters;

		for (var i = 0, ii = clusters.length; i < ii; i++) {
			clusters[i].destroy();
		}

		naver.maps.Event.removeListener(this._markerRelations);

		this._markerRelations = [];
		this._clusters = [];
	},

	/**
	 * 생성된 클러스터를 모두 제거하고, 다시 생성합니다.
	 * @private
	 */
	_redraw: function() {
		this._clearClusters();
		this._createClusters();
		this._updateClusters();
	},

	/**
	 * 전달된 위/경도에서 가장 가까운 클러스터를 반환합니다. 없으면 새로 클러스터를 생성해 반환합니다.
	 * @param {naver.maps.LatLng} position 위/경도
	 * @return {Cluster} 클러스터
	 */
	_getClosestCluster: function(position) {
		var proj = this.getProjection(),
			clusters = this._clusters,
			closestCluster = null,
			distance = Infinity;

		for (var i = 0, ii = clusters.length; i < ii; i++) {
			var cluster = clusters[i],
				center = cluster.getCenter();

			if (cluster.isInBounds(position)) {
				var delta = proj.getDistance(center, position);

				if (delta < distance) {
					distance = delta;
					closestCluster = cluster;
				}
			}
		}

		if (!closestCluster) {
			closestCluster = new Cluster(this);
			this._clusters.push(closestCluster);
		}

		return closestCluster;
	},

	/**
	 * 지도의 Idle 상태 이벤트 핸들러입니다.
	 */
	_onIdle: function() {
		this._redraw();
	},

	/**
	 * 각 마커의 드래그 종료 이벤트 핸들러입니다.
	 */
	_onDragEnd: function() {
		this._redraw();
	}
});

/**
 * 마커를 가지고 있는 클러스터를 정의합니다.
 * @param {MarkerClustering} markerClusterer
 */
var Cluster = function(markerClusterer) {
	this._clusterCenter = null;
	this._clusterBounds = null;
	this._clusterMarker = null;
	this._relation = null;

	this._clusterMember = [];

	this._markerClusterer = markerClusterer;
};

Cluster.prototype = {
	constructor: Cluster,

	/**
	 * 클러스터에 마커를 추가합니다.
	 * @param {naver.maps.Marker} marker 클러스터에 추가할 마커
	 */
	addMarker: function(marker) {
		if (this._isMember(marker)) return;

		if (!this._clusterCenter) {
			var position = marker.getPosition();

			this._clusterCenter = position;
			this._clusterBounds = this._calcBounds(position);
		}

		this._clusterMember.push(marker);
	},

	/**
	 * 클러스터를 제거합니다.
	 */
	destroy: function() {
		naver.maps.Event.removeListener(this._relation);

		var members = this._clusterMember;

		for (var i = 0, ii = members.length; i < ii; i++) {
			members[i].setMap(null);
		}

		this._clusterMarker.setMap(null);

		this._clusterMarker = null;
		this._clusterCenter = null;
		this._clusterBounds = null;
		this._relation = null;

		this._clusterMember = [];
	},

	/**
	 * 클러스터 중심점을 반환합니다.
	 * @return {naver.maps.LatLng} 클러스터 중심점
	 */
	getCenter: function() {
		return this._clusterCenter;
	},

	/**
	 * 클러스터 경계 영역을 반환합니다.
	 * @return {naver.maps.LatLngBounds} 클러스터 경계 영역
	 */
	getBounds: function() {
		return this._clusterBounds;
	},

	/**
	 * 클러스터를 구성하는 마커 수를 반환합니다.
	 * @return {number} 클러스터를 구성하는 마커 수
	 */
	getCount: function() {
		return this._clusterMember.length;
  },

  /**
	 * 현재의 클러스터 멤버 마커 객체를 반환합니다.
	 * @return {naver.maps.Marker[]} 클러스터를 구성하는 마커 객체 집합
	 */
  getClusterMember: function() {
    return this._clusterMember;
  },

	/**
	 * 전달된 위/경도가 클러스터 경계 영역 내에 있는지 여부를 반환합니다.
	 * @param {naver.maps.LatLng} latlng 위/경도
	 * @return {boolean} 클러스터 경계 영역 내의 위치 여부
	 */
	isInBounds: function(latlng) {
		return this._clusterBounds && this._clusterBounds.hasLatLng(latlng);
  },

	/**
	 * 클러스터 마커 클릭 시 줌 동작을 수행하도록 합니다.
	 */
	enableClickZoom: function() {
		if (this._relation) return;

		var map = this._markerClusterer.getMap();

		this._relation = naver.maps.Event.addListener(this._clusterMarker, 'click', naver.maps.Util.bind(function(e) {
			map.morph(e.coord, map.getZoom() + 1);
		}, this));
	},

	/**
	 * 클러스터 마커 클릭 시 줌 동작을 수행하지 않도록 합니다.
	 */
	disableClickZoom: function() {
		if (!this._relation) return;

		naver.maps.Event.removeListener(this._relation);
		this._relation = null;
	},

	/**
	 * 클러스터 마커가 없으면 클러스터 마커를 생성하고, 클러스터 마커를 갱신합니다.
	 * - 클러스터 마커 아이콘
	 * - 마커 개수
	 * - 클러스터 마커 노출 여부
	 */
	updateCluster: function() {
		if (!this._clusterMarker) {
			var position;

			if (this._markerClusterer.getAverageCenter()) {
				position = this._calcAverageCenter(this._clusterMember);
			} else {
				position = this._clusterCenter;
			}

			this._clusterMarker = new naver.maps.Marker({
				position: position,
				map: this._markerClusterer.getMap()
			});

			if (!this._markerClusterer.getDisableClickZoom()) {
				this.enableClickZoom();
			}
		}

		this.updateIcon();
		this.updateCount();

		this.checkByZoomAndMinClusterSize();
	},

	/**
	 * 조건에 따라 클러스터 마커를 노출하거나, 노출하지 않습니다.
	 */
	checkByZoomAndMinClusterSize: function() {
		var clusterer = this._markerClusterer,
			minClusterSize = clusterer.getMinClusterSize(),
			maxZoom = clusterer.getMaxZoom(),
			currentZoom = clusterer.getMap().getZoom();

		if (this.getCount() < minClusterSize) {
			this._showMember();
		} else {
			this._hideMember();

			if (maxZoom <= currentZoom) {
				this._showMember();
			}
		}
	},

	/**
	 * 클러스터를 구성하는 마커 수를 갱신합니다.
	 */
	updateCount: function() {
		var stylingFunction = this._markerClusterer.getStylingFunction();

		stylingFunction && stylingFunction(this._clusterMarker, this.getCount());
	},

	/**
	 * 클러스터 마커 아이콘을 갱신합니다.
	 */
	updateIcon: function() {
		var count = this.getCount(),
			index = this._getIndex(count),
			icons = this._markerClusterer.getIcons();

		index = Math.max(index, 0);
		index = Math.min(index, icons.length - 1);

		this._clusterMarker.setIcon(icons[index]);
	},

	/**
	 * 클러스터를 구성하는 마커를 노출합니다. 이때에는 클러스터 마커를 노출하지 않습니다.
	 * @private
	 */
	_showMember: function() {
		var map = this._markerClusterer.getMap(),
			marker = this._clusterMarker,
			members = this._clusterMember;

		for (var i = 0, ii = members.length; i < ii; i++) {
			members[i].setMap(map);
		}

		if (marker) {
			marker.setMap(null);
		}
	},

	/**
	 * 클러스터를 구성하는 마커를 노출하지 않습니다. 이때에는 클러스터 마커를 노출합니다.
	 * @private
	 */
	_hideMember: function() {
		var map = this._markerClusterer.getMap(),
			marker = this._clusterMarker,
			members = this._clusterMember;

		for (var i = 0, ii = members.length; i < ii; i++) {
			members[i].setMap(null);
		}

		if (marker && !marker.getMap()) {
			marker.setMap(map);
		}
	},

	/**
	 * 전달된 위/경도를 중심으로 그리드 크기만큼 확장한 클러스터 경계 영역을 반환합니다.
	 * @param {naver.maps.LatLng} position 위/경도
	 * @return {naver.maps.LatLngBounds} 클러스터 경계 영역
	 * @private
	 */
	_calcBounds: function(position) {
		var map = this._markerClusterer.getMap(),
			bounds = new naver.maps.LatLngBounds(position.clone(), position.clone()),
			mapBounds = map.getBounds(),
			proj = map.getProjection(),
			map_max_px = proj.fromCoordToOffset(mapBounds.getNE()),
			map_min_px = proj.fromCoordToOffset(mapBounds.getSW()),
			max_px = proj.fromCoordToOffset(bounds.getNE()),
			min_px = proj.fromCoordToOffset(bounds.getSW()),
			gridSize = this._markerClusterer.getGridSize() / 2;

		max_px.add(gridSize, -gridSize);
		min_px.add(-gridSize, gridSize);

		var max_px_x = Math.min(map_max_px.x, max_px.x),
			max_px_y = Math.max(map_max_px.y, max_px.y),
			min_px_x = Math.max(map_min_px.x, min_px.x),
			min_px_y = Math.min(map_min_px.y, min_px.y),
			newMax = proj.fromOffsetToCoord(new naver.maps.Point(max_px_x, max_px_y)),
			newMin = proj.fromOffsetToCoord(new naver.maps.Point(min_px_x, min_px_y));

		return new naver.maps.LatLngBounds(newMin, newMax);
	},

	/**
	 * 클러스터를 구성하는 마커 수에 따라 노출할 아이콘을 결정하기 위한 인덱스를 반환합니다.
	 * @param {number} count 클러스터를 구성하는 마커 수
	 * @return {number} 인덱스
	 * @private
	 */
	_getIndex: function(count) {
		var indexGenerator = this._markerClusterer.getIndexGenerator();

		if (naver.maps.Util.isFunction(indexGenerator)) {
			return indexGenerator(count);
		} else if (naver.maps.Util.isArray(indexGenerator)) {
			var index = 0;

			for (var i = index, ii = indexGenerator.length; i < ii; i++) {
				var factor = indexGenerator[i];

				if (count < factor) break;

				index++;
			}

			return index;
		}
	},

	/**
	 * 전달된 마커가 이미 클러스터에 속해 있는지 여부를 반환합니다.
	 * @param {naver.maps.Marker} marker 마커
	 * @return {boolean} 클러스터에 속해 있는지 여부
	 * @private
	 */
	_isMember: function(marker) {
		return this._clusterMember.indexOf(marker) !== -1;
	},

	/**
	 * 전달된 마커들의 중심 좌표를 반환합니다.
	 * @param {Array.<naver.maps.Marker>} markers 마커 배열
	 * @return {naver.maps.Point} 마커들의 중심 좌표
	 * @private
	 */
	_calcAverageCenter: function(markers) {
		var numberOfMarkers = markers.length;
		var averageCenter = [0, 0];

		for (var i = 0; i < numberOfMarkers; i++) {
			averageCenter[0] += markers[i].position.x;
			averageCenter[1] += markers[i].position.y;
		}

		averageCenter[0] /= numberOfMarkers;
		averageCenter[1] /= numberOfMarkers;

		return new naver.maps.Point(averageCenter[0], averageCenter[1]);
	}


};

/* harmony default export */ __webpack_exports__["default"] = (MarkerClustering);

/***/ })
/******/ ]);
});