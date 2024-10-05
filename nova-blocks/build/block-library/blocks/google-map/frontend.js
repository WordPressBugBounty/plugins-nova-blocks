/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/google-map/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/block-library/build/blocks/google-map/frontend.js":
/*!********************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/frontend.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REFERENCES = void 0;

var _domReady = _interopRequireDefault(__webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready"));

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _utils2 = __webpack_require__(/*! ./utils */ "./packages/block-library/build/blocks/google-map/utils/index.js");

var REFERENCES = {};
exports.REFERENCES = REFERENCES;
(0, _domReady.default)(function () {
  var _window, _window$google, _window2, _window2$sm, _window2$sm$darkMode, _window3, _window3$parent, _window3$parent$wp;

  if (!((_window = window) !== null && _window !== void 0 && (_window$google = _window.google) !== null && _window$google !== void 0 && _window$google.maps)) {
    return;
  }

  var DarkMode = (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$sm = _window2.sm) === null || _window2$sm === void 0 ? void 0 : (_window2$sm$darkMode = _window2$sm.darkMode) === null || _window2$sm$darkMode === void 0 ? void 0 : _window2$sm$darkMode.default;
  var mapsElements = Array.from(document.querySelectorAll('.js-novablocks-google-map'));
  mapsElements.forEach(function (mapElement, index) {
    var attributes = (0, _utils.getAttributes)(mapElement);
    var accentColor = attributes.accentColor,
        showControls = attributes.showControls,
        markers = attributes.markers,
        zoom = attributes.zoom;
    var refId = "google-map-".concat(index);
    var mapOptions = {
      mapTypeId: 'roadmap',
      center: (0, _utils2.getCenterFromMarkers)(markers),
      zoom: zoom,
      styles: (0, _utils2.getCompiledStyles)(attributes, accentColor),
      disableDefaultUI: !showControls,
      clickableIcons: false,
      keyboardShortcuts: false
    };
    var map = new google.maps.Map(mapElement, mapOptions);
    var mapMarkers = createMapMarkers(markers, map, attributes, accentColor);
    google.maps.event.addListenerOnce(map, 'idle', function () {
      var mapBounds = map.getBounds();
      var mapMarkersContained = mapMarkers.every(function (mapMarker) {
        return mapBounds.contains(mapMarker.latlng);
      });

      if (!mapMarkersContained) {
        (0, _utils2.fitMapBoundsToMarkers)(map, mapMarkers);
      }
    });
    mapElement.dataset.refId = refId;
    REFERENCES[refId] = {
      map: map,
      mapMarkers: mapMarkers
    };

    if (DarkMode && typeof DarkMode.bind === "function") {
      DarkMode.bind(function () {
        map.setOptions({
          styles: (0, _utils2.getCompiledStyles)(attributes, accentColor)
        });
      });
    }
  });
  var api = (_window3 = window) === null || _window3 === void 0 ? void 0 : (_window3$parent = _window3.parent) === null || _window3$parent === void 0 ? void 0 : (_window3$parent$wp = _window3$parent.wp) === null || _window3$parent$wp === void 0 ? void 0 : _window3$parent$wp.customize;

  if (!!api) {
    api('sm_color_primary', function (setting) {
      setting.bind(function (new_value) {
        mapElements.forEach(function (mapElement) {
          var attributes = (0, _utils.getAttributes)(mapElement);
          var styleData = attributes.styleData,
              markers = attributes.markers,
              map = attributes.map,
              mapMarkers = attributes.mapMarkers;
          var refId = mapElement.dataset.refId;
          map.setOptions({
            styles: (0, _utils2.getCompiledStyles)(attributes, new_value)
          });
          mapMarkers.forEach(function (mapMarker) {
            mapMarker.remove();
            mapMarker.setMap(null);
          });
          REFERENCES[refId].mapMarkers = createMapMarkers(markers, map, attributes, new_value);
        });
      });
    });
  }
});

function createMapMarkers(markers, map, attributes, accentColor) {
  var showMarkerLabels = attributes.showMarkerLabels,
      styleSlug = attributes.styleSlug;
  return markers.map(function (marker) {
    var latlng = (0, _utils2.getMarkerLatLng)(marker);
    var html = (0, _utils2.getMarkerMarkup)(marker, {
      showMarkerLabels: showMarkerLabels,
      styleSlug: styleSlug
    }, accentColor);
    var htmlMarker = (0, _utils2.createHtmlMapMarker)(latlng, html);
    htmlMarker.setMap(map);
    return htmlMarker;
  });
}

function addColorToStyles(styleData, color) {
  return JSON.parse(JSON.stringify(styleData).replace(/%ACCENT_COLOR%/g, color));
}


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/utils/create-html-map-marker.js":
/*!****************************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/utils/create-html-map-marker.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./packages/block-library/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./packages/block-library/node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./packages/block-library/node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./packages/block-library/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./packages/block-library/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var createHTMLMapMarker = function createHTMLMapMarker(latlng, html) {
  var HTMLMapMarker = /*#__PURE__*/function (_google$maps$OverlayV) {
    (0, _inherits2.default)(HTMLMapMarker, _google$maps$OverlayV);

    var _super = _createSuper(HTMLMapMarker);

    function HTMLMapMarker() {
      var _this;

      (0, _classCallCheck2.default)(this, HTMLMapMarker);
      _this = _super.call(this);
      _this.latlng = latlng;
      _this.html = html;
      return _this;
    }

    (0, _createClass2.default)(HTMLMapMarker, [{
      key: "createDiv",
      value: function createDiv() {
        var _this2 = this;

        this.div = document.createElement('div');
        this.div.style.position = 'absolute';

        if (this.html) {
          this.div.innerHTML = this.html;
        }

        google.maps.event.addDomListener(this.div, 'click', function (event) {
          google.maps.event.trigger(_this2, 'click');
        });
      }
    }, {
      key: "appendDivToOverlay",
      value: function appendDivToOverlay() {
        var panes = this.getPanes();
        panes.overlayLayer.appendChild(this.div);
      }
    }, {
      key: "positionDiv",
      value: function positionDiv() {
        var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

        if (point) {
          this.div.style.left = "".concat(point.x, "px");
          this.div.style.top = "".concat(point.y, "px");
        }
      }
    }, {
      key: "draw",
      value: function draw() {
        if (!this.div) {
          this.createDiv();
          this.appendDivToOverlay();
        }

        this.positionDiv();
      }
    }, {
      key: "remove",
      value: function remove() {
        if (this.div) {
          this.div.parentNode.removeChild(this.div);
          this.div = null;
        }
      }
    }, {
      key: "getPosition",
      value: function getPosition() {
        return this.latlng;
      }
    }, {
      key: "getDraggable",
      value: function getDraggable() {
        return false;
      }
    }]);
    return HTMLMapMarker;
  }(google.maps.OverlayView);

  return new HTMLMapMarker();
};

var _default = createHTMLMapMarker;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/utils/default-map-center.js":
/*!************************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/utils/default-map-center.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var DEFAULT_MAP_CENTER = {
  lat: 47.1665264,
  lng: 27.58285479999995
};
var _default = DEFAULT_MAP_CENTER;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/utils/index.js":
/*!***********************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/utils/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DEFAULT_MAP_CENTER", {
  enumerable: true,
  get: function get() {
    return _defaultMapCenter.default;
  }
});
exports.compileStyles = exports.addVisibilityToStyles = exports.DEFAULT_PIN_COLOR = void 0;
Object.defineProperty(exports, "createHtmlMapMarker", {
  enumerable: true,
  get: function get() {
    return _createHtmlMapMarker.default;
  }
});
exports.getMarkersBounds = exports.getMarkerMarkup = exports.getMarkerLatLng = exports.getMapStyles = exports.getMapAccentColor = exports.getCompiledStyles = exports.getCenterFromMarkers = exports.fitMapBoundsToMarkers = void 0;
Object.defineProperty(exports, "pin", {
  enumerable: true,
  get: function get() {
    return _pin.default;
  }
});
Object.defineProperty(exports, "styles", {
  enumerable: true,
  get: function get() {
    return _styles.default;
  }
});

var _data = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");

var _defaultMapCenter = _interopRequireDefault(__webpack_require__(/*! ./default-map-center */ "./packages/block-library/build/blocks/google-map/utils/default-map-center.js"));

var _styles = _interopRequireDefault(__webpack_require__(/*! ./styles */ "./packages/block-library/build/blocks/google-map/utils/styles/index.js"));

var _pin = _interopRequireDefault(__webpack_require__(/*! ./pin */ "./packages/block-library/build/blocks/google-map/utils/pin.js"));

var _createHtmlMapMarker = _interopRequireDefault(__webpack_require__(/*! ./create-html-map-marker */ "./packages/block-library/build/blocks/google-map/utils/create-html-map-marker.js"));

var addVisibilityToStyles = function addVisibilityToStyles(styles, showLabels, showIcons) {
  if (!showLabels) {
    styles.unshift({
      "elementType": "labels.text",
      "stylers": [{
        "visibility": "off"
      }]
    });
  }

  if (!showIcons) {
    styles.unshift({
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    });
  }

  return styles;
};

exports.addVisibilityToStyles = addVisibilityToStyles;

var compileStyles = function compileStyles(styleData) {
  var accentColor = getMapAccentColor();
  var styleDataString = JSON.stringify(styleData).replace(/%ACCENT_COLOR%/g, accentColor);
  return JSON.parse(styleDataString);
};

exports.compileStyles = compileStyles;

var getMapStyles = function getMapStyles() {
  var attributes = this.props.attributes;
  var styleData = attributes.styleData,
      styleSlug = attributes.styleSlug;
  var shouldHaveCustomStyles = styleSlug !== 'original' && styleData.length !== 0;

  var selectedStyles = _styles.default.find(function (style) {
    return style.slug === styleSlug;
  });

  var styleDataBySlug = selectedStyles ? selectedStyles.styles : {};
  var mapStyles = shouldHaveCustomStyles && styleDataBySlug || styleData;
  return compileStyles.call(this, mapStyles);
};

exports.getMapStyles = getMapStyles;

var getMapAccentColor = function getMapAccentColor() {
  var _novablocksSettings$m;

  var novablocksSettings = (0, _data.select)('novablocks').getSettings();
  return (novablocksSettings === null || novablocksSettings === void 0 ? void 0 : (_novablocksSettings$m = novablocksSettings.map) === null || _novablocksSettings$m === void 0 ? void 0 : _novablocksSettings$m.accentColor) || '#222222';
};

exports.getMapAccentColor = getMapAccentColor;

var getCenterFromMarkers = function getCenterFromMarkers(markers) {
  if (typeof google === "undefined" || typeof google.maps === "undefined") {
    return _defaultMapCenter.default;
  }

  var bounds = new google.maps.LatLngBounds(); // when there is only one marker bounds aren't accurate at great zoom levels

  if (markers.length === 1) {
    var center = markers[0];
    return new google.maps.LatLng(center.geometry.location);
  }

  markers.forEach(function (marker) {
    if (!marker.geometry) {
      return;
    }

    if (marker.geometry.viewport) {
      bounds.union(marker.geometry.viewport);
    } else {
      bounds.extend(marker.geometry.location);
    }
  });
  return bounds.getCenter();
};

exports.getCenterFromMarkers = getCenterFromMarkers;

var getMarkersBounds = function getMarkersBounds(makers) {
  var bounds = new google.maps.LatLngBounds();
  makers.forEach(function (marker) {
    var latlng = getMarkerLatLng(marker);
    bounds.extend(latlng);
  });
  return bounds;
};

exports.getMarkersBounds = getMarkersBounds;
var DEFAULT_PIN_COLOR = '#222222';
exports.DEFAULT_PIN_COLOR = DEFAULT_PIN_COLOR;

var getMarkerLatLng = function getMarkerLatLng(marker) {
  var location = JSON.parse(JSON.stringify(marker.geometry.location));
  return new google.maps.LatLng(location.lat, location.lng);
};

exports.getMarkerLatLng = getMarkerLatLng;

var getMarkerMarkup = function getMarkerMarkup(marker, attributes) {
  var accentColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_PIN_COLOR;
  var styleSlug = attributes.styleSlug,
      showMarkerLabels = attributes.showMarkerLabels;
  var pinColor = styleSlug === 'customized' ? accentColor : DEFAULT_PIN_COLOR;

  var pinMarkup = _pin.default.replace('%ACCENT_COLOR%', pinColor);

  var hasLabel = showMarkerLabels && marker.name;
  var labelMarkup = hasLabel ? "<div class=\"novablocks-gamp__marker-label\">".concat(marker.name, "</div>") : '';
  return "\n        <div class=\"novablocks-gmap__marker\">\n          ".concat(labelMarkup, "\n          <div class=\"novablocks-gamp__marker-icon\">").concat(pinMarkup, "</div>\n        </div>");
};

exports.getMarkerMarkup = getMarkerMarkup;

var getCompiledStyles = function getCompiledStyles(atts, accentColor) {
  var _window, _window$sm, _window$sm$darkMode;

  var DarkMode = (_window = window) === null || _window === void 0 ? void 0 : (_window$sm = _window.sm) === null || _window$sm === void 0 ? void 0 : (_window$sm$darkMode = _window$sm.darkMode) === null || _window$sm$darkMode === void 0 ? void 0 : _window$sm$darkMode.default;
  var attributes = Object.assign({}, atts);

  if (DarkMode && DarkMode.isCompiledDark()) {
    Object.assign(attributes, {
      styleSlug: 'dark'
    });
  }

  var showLabels = attributes.showLabels,
      showIcons = attributes.showIcons,
      styleData = attributes.styleData,
      styleSlug = attributes.styleSlug;
  var shouldHaveCustomStyles = styleSlug !== 'original' && styleData.length !== 0;

  var selectedStyles = _styles.default.find(function (style) {
    return style.slug === styleSlug;
  });

  var styleDataBySlug = selectedStyles ? selectedStyles.styles : {};
  var data = shouldHaveCustomStyles && styleDataBySlug || styleData;
  var replacedData = JSON.parse(JSON.stringify(data).replace(/%ACCENT_COLOR%/g, accentColor));
  return addVisibilityToStyles(replacedData, showLabels, showIcons);
};

exports.getCompiledStyles = getCompiledStyles;

var fitMapBoundsToMarkers = function fitMapBoundsToMarkers(map, mapMarkers, padding) {
  if (mapMarkers.length < 1) {
    return;
  }

  if (mapMarkers.length === 1) {
    map.setCenter(mapMarkers[0].latlng);
    return;
  }

  var bounds = new google.maps.LatLngBounds();
  mapMarkers.forEach(function (marker) {
    bounds.extend(marker.latlng);
  });
  map.fitBounds(bounds, padding);
};

exports.fitMapBoundsToMarkers = fitMapBoundsToMarkers;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/utils/pin.js":
/*!*********************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/utils/pin.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "<svg width=\"62\" height=\"75\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 62 75\">\n\t<defs>\n\t\t<path id=\"b\" d=\"M31 69s27-18 27-40C58 14.088 46 2 31 2S4 14.088 4 29c0 22 27 40 27 40zm7.725-31.206c-4.26 4.275-11.264 4.275-15.53 0-4.26-4.277-4.26-11.305 0-15.587 4.26-4.276 11.265-4.276 15.53 0 4.367 4.282 4.367 11.304 0 15.587z\"></path>\n\t\t<filter id=\"a\" width=\"200%\" height=\"200%\" x=\"-50%\" y=\"-50%\" filterUnits=\"objectBoundingBox\">\n\t\t\t<feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"></feOffset>\n\t\t\t<feGaussianBlur in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\" stdDeviation=\"2\"></feGaussianBlur>\n\t\t\t<feColorMatrix in=\"shadowBlurOuter1\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\"></feColorMatrix>\n\t\t</filter>\n\t</defs>\n\t<g fill=\"none\" fillRule=\"evenodd\">\n\t\t<use fill=\"#000\" filter=\"url(#a)\" xlink:href=\"#b\" style=\"display:none\"></use>\n\t\t<use fill=\"%ACCENT_COLOR%\" xlink:href=\"#b\"></use>\n\t</g>\n</svg>";
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/utils/styles/customized.js":
/*!***********************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/utils/styles/customized.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  "elementType": "geometry",
  "stylers": [{
    "color": "#f5f5f5"
  }]
}, {
  "elementType": "labels.icon",
  "stylers": [{
    "saturation": -100
  }, {
    "lightness": 60
  }]
}, {
  "elementType": "labels.text.stroke",
  "stylers": [{
    "color": "#f5f5f5"
  }]
}, {
  "featureType": "poi",
  "elementType": "geometry",
  "stylers": [{
    "color": "#eeeeee"
  }]
}, {
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "%ACCENT_COLOR%"
  }, {
    "lightness": 90
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [{
    "color": "#dadada"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#616161"
  }]
}, {
  "featureType": "road.local",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "%ACCENT_COLOR%"
  }, {
    "saturation": -25
  }, {
    "lightness": 70
  }]
}, {
  "featureType": "road.local",
  "elementType": "labels.text.fill",
  "stylers": [{
    "lightness": 30
  }]
}, {
  "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [{
    "color": "#e5e5e5"
  }]
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [{
    "color": "#c9c9c9"
  }]
}, {
  "featureType": "water",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "%ACCENT_COLOR%"
  }, {
    "lightness": 60
  }]
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [{
    "saturation": -100
  }]
}];
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/utils/styles/dark.js":
/*!*****************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/utils/styles/dark.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  "featureType": "all",
  "elementType": "labels.text.fill",
  "stylers": [{
    "saturation": 36
  }, {
    "color": "#000000"
  }, {
    "lightness": 40
  }]
}, {
  "featureType": "all",
  "elementType": "labels.text.stroke",
  "stylers": [{
    "visibility": "on"
  }, {
    "color": "#000000"
  }, {
    "lightness": 16
  }]
}, {
  "featureType": "all",
  "elementType": "labels.icon",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "administrative",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#000000"
  }, {
    "lightness": 20
  }]
}, {
  "featureType": "administrative",
  "elementType": "geometry.stroke",
  "stylers": [{
    "color": "#000000"
  }, {
    "lightness": 17
  }, {
    "weight": 1.2
  }]
}, {
  "featureType": "administrative",
  "elementType": "labels",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "administrative.country",
  "elementType": "all",
  "stylers": [{
    "visibility": "simplified"
  }]
}, {
  "featureType": "administrative.country",
  "elementType": "geometry",
  "stylers": [{
    "visibility": "simplified"
  }]
}, {
  "featureType": "administrative.country",
  "elementType": "labels.text",
  "stylers": [{
    "visibility": "simplified"
  }]
}, {
  "featureType": "administrative.province",
  "elementType": "all",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "administrative.locality",
  "elementType": "all",
  "stylers": [{
    "visibility": "simplified"
  }, {
    "saturation": "-100"
  }, {
    "lightness": "30"
  }]
}, {
  "featureType": "administrative.neighborhood",
  "elementType": "all",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "administrative.land_parcel",
  "elementType": "all",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "landscape",
  "elementType": "all",
  "stylers": [{
    "visibility": "simplified"
  }, {
    "gamma": "0.00"
  }, {
    "lightness": "74"
  }]
}, {
  "featureType": "landscape",
  "elementType": "geometry",
  "stylers": [{
    "color": "#000000"
  }, {
    "lightness": 20
  }]
}, {
  "featureType": "landscape.man_made",
  "elementType": "all",
  "stylers": [{
    "lightness": "3"
  }]
}, {
  "featureType": "poi",
  "elementType": "all",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "poi",
  "elementType": "geometry",
  "stylers": [{
    "color": "#000000"
  }, {
    "lightness": 21
  }]
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [{
    "visibility": "simplified"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#000000"
  }, {
    "lightness": 17
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.stroke",
  "stylers": [{
    "color": "#000000"
  }, {
    "lightness": 29
  }, {
    "weight": 0.2
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "geometry",
  "stylers": [{
    "color": "#000000"
  }, {
    "lightness": 18
  }]
}, {
  "featureType": "road.local",
  "elementType": "geometry",
  "stylers": [{
    "color": "#000000"
  }, {
    "lightness": 16
  }]
}, {
  "featureType": "transit",
  "elementType": "geometry",
  "stylers": [{
    "color": "#000000"
  }, {
    "lightness": 19
  }]
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [{
    "color": "#000000"
  }, {
    "lightness": 17
  }]
}];
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/utils/styles/index.js":
/*!******************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/utils/styles/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _customized = _interopRequireDefault(__webpack_require__(/*! ./customized */ "./packages/block-library/build/blocks/google-map/utils/styles/customized.js"));

var _dark = _interopRequireDefault(__webpack_require__(/*! ./dark */ "./packages/block-library/build/blocks/google-map/utils/styles/dark.js"));

var styles = [{
  slug: 'customized',
  label: 'Customized',
  styles: _customized.default
}, {
  slug: 'original',
  label: 'Original',
  styles: []
}, {
  slug: 'dark',
  label: 'Dark',
  styles: _dark.default
}];
var _default = styles;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!*********************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!**************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/createClass.js":
/*!***********************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/createClass.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!**************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/inherits.js":
/*!********************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/inherits.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./packages/block-library/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*********************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./packages/block-library/node_modules/@babel/runtime/helpers/typeof.js")["default"];

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./packages/block-library/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!**************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/typeof.js":
/*!******************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/typeof.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "@novablocks/utils":
/*!***************************************!*\
  !*** external ["novablocks","utils"] ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["novablocks"]["utils"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["domReady"]; }());

/***/ })

/******/ });
//# sourceMappingURL=frontend.js.map