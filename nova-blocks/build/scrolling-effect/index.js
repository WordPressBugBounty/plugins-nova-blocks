this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["scrollingEffect"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/scrolling-effect/build-module/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./packages/scrolling-effect/build-module/context.js":
/*!***********************************************************!*\
  !*** ./packages/scrolling-effect/build-module/context.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var DopplerContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (DopplerContext);


/***/ }),

/***/ "./packages/scrolling-effect/build-module/controls/doppler-presets-panel.js":
/*!**********************************************************************************!*\
  !*** ./packages/scrolling-effect/build-module/controls/doppler-presets-panel.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _preview_scrolling_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview-scrolling-button */ "./packages/scrolling-effect/build-module/controls/preview-scrolling-button.js");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__);





var DopplerPresetsPanel = function DopplerPresetsPanel(props) {
  var _props$attributes = props.attributes,
      motionPreset = _props$attributes.motionPreset,
      scrollingEffect = _props$attributes.scrollingEffect,
      setAttributes = props.setAttributes;

  if (scrollingEffect !== 'doppler') {
    return null;
  }

  var novablocksSettings = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["useSettings"])();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: "Doppler Scrolling Settings"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RadioControl"], {
    label: 'Motion Presets',
    selected: motionPreset,
    onChange: function onChange(motionPreset) {
      var newAttributes = {
        motionPreset: motionPreset
      };
      var newOption = novablocksSettings.motionPresetOptions.find(function (option) {
        return motionPreset === option.value;
      });

      if (newOption && newOption.preset) {
        newAttributes = Object.assign(newOption.preset, newAttributes);
      }

      setAttributes(newAttributes);
    },
    options: novablocksSettings.motionPresetOptions
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DopplerPresetsPanel);


/***/ }),

/***/ "./packages/scrolling-effect/build-module/controls/end-frame-panel.js":
/*!****************************************************************************!*\
  !*** ./packages/scrolling-effect/build-module/controls/end-frame-panel.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./packages/scrolling-effect/build-module/utils.js");







var EndFramePanel = function EndFramePanel(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      focalPointImage = props.focalPointImage;
  var media = attributes.media,
      focalPoint = attributes.focalPoint,
      finalFocalPoint = attributes.finalFocalPoint,
      finalBackgroundScale = attributes.finalBackgroundScale,
      followThroughEnd = attributes.followThroughEnd,
      scrollingEffect = attributes.scrollingEffect;
  var parallaxFocalPointImage = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (focalPointImage) {
      return focalPointImage;
    }

    return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getFocalPointImage"])(media);
  }, [focalPointImage, media]);

  if (scrollingEffect !== 'doppler') {
    return null;
  }

  var classNames = ['novablocks-focal-point-picker', "novablocks-focal-point-picker--".concat(scrollingEffect), 'novablocks-focal-point-picker--end', Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getSnapClassname"])(focalPoint)];
  var className = classNames.join(' ');
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('End Frame', 'nova-blocks'),
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["FocalPointPicker"], {
    label: 'Focal Point',
    url: parallaxFocalPointImage.url,
    dimensions: {
      width: parallaxFocalPointImage.width,
      height: parallaxFocalPointImage.height
    },
    value: finalFocalPoint,
    onChange: function onChange(finalFocalPoint) {
      setAttributes({
        motionPreset: 'custom',
        focalPoint: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["maybeSnapFocalPoint"])({
          x: finalFocalPoint.x,
          y: focalPoint.y
        }),
        finalFocalPoint: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["maybeSnapFocalPoint"])(finalFocalPoint)
      });
    },
    disabled: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: 'Zoom',
    value: finalBackgroundScale,
    onChange: function onChange(finalBackgroundScale) {
      setAttributes({
        motionPreset: 'custom',
        finalBackgroundScale: finalBackgroundScale
      });
    },
    min: 1,
    max: 2,
    step: 0.01
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Smooth end transition', 'nova-blocks'),
    checked: followThroughEnd,
    onChange: function onChange() {
      return setAttributes({
        motionPreset: 'custom',
        followThroughEnd: !followThroughEnd
      });
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EndFramePanel);


/***/ }),

/***/ "./packages/scrolling-effect/build-module/controls/index.js":
/*!******************************************************************!*\
  !*** ./packages/scrolling-effect/build-module/controls/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scrolling_effect_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrolling-effect-panel */ "./packages/scrolling-effect/build-module/controls/scrolling-effect-panel.js");
/* harmony import */ var _doppler_presets_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doppler-presets-panel */ "./packages/scrolling-effect/build-module/controls/doppler-presets-panel.js");
/* harmony import */ var _start_frame_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./start-frame-panel */ "./packages/scrolling-effect/build-module/controls/start-frame-panel.js");
/* harmony import */ var _end_frame_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./end-frame-panel */ "./packages/scrolling-effect/build-module/controls/end-frame-panel.js");
/* harmony import */ var _preview_scrolling_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preview-scrolling-button */ "./packages/scrolling-effect/build-module/controls/preview-scrolling-button.js");








var Controls = function Controls(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_scrolling_effect_panel__WEBPACK_IMPORTED_MODULE_2__["default"], props, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_preview_scrolling_button__WEBPACK_IMPORTED_MODULE_6__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_doppler_presets_panel__WEBPACK_IMPORTED_MODULE_3__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_start_frame_panel__WEBPACK_IMPORTED_MODULE_4__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_end_frame_panel__WEBPACK_IMPORTED_MODULE_5__["default"], props));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__["withVisibility"])('scrolling-effect-section')(Controls));


/***/ }),

/***/ "./packages/scrolling-effect/build-module/controls/preview-scrolling-button.js":
/*!*************************************************************************************!*\
  !*** ./packages/scrolling-effect/build-module/controls/preview-scrolling-button.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_easings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/easings */ "@novablocks/easings");
/* harmony import */ var _novablocks_easings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_easings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_5__);








var PreviewScrollingButton = function PreviewScrollingButton(props) {
  var clientId = props.clientId;
  var scrollContainer = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__["useScrollContainer"])();
  var onClick = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var element = document.querySelector("#block-".concat(clientId));

    if (element && scrollContainer) {
      var elementBox = element.getBoundingClientRect();
      var scrollContainerBox = scrollContainer.getBoundingClientRect();
      var start = scrollContainer.scrollTop + elementBox.top - scrollContainerBox.top - scrollContainer.offsetHeight;
      var end = start + scrollContainer.offsetHeight + element.offsetHeight;
      Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_5__["scrollFromTo"])(scrollContainer, start, end, 2000, _novablocks_easings__WEBPACK_IMPORTED_MODULE_3__["easeInOutCubic"]);
    }
  }, [scrollContainer]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'nb-scrolling-preview-control'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    islarge: "true",
    isPrimary: true,
    disabled: false,
    onClick: onClick
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Preview Scrolling', 'nova-blocks')));
};

/* harmony default export */ __webpack_exports__["default"] = (PreviewScrollingButton);


/***/ }),

/***/ "./packages/scrolling-effect/build-module/controls/scrolling-effect-panel.js":
/*!***********************************************************************************!*\
  !*** ./packages/scrolling-effect/build-module/controls/scrolling-effect-panel.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__);






var ScrollingEffectPanel = function ScrollingEffectPanel(props) {
  var _supports$novaBlocks, _supports$novaBlocks2, _supports$novaBlocks3;

  var setAttributes = props.setAttributes,
      _props$attributes = props.attributes,
      scrollingEffect = _props$attributes.scrollingEffect,
      motionPreset = _props$attributes.motionPreset,
      name = props.name;
  var novablocksSettings = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__["useSettings"])();
  var supports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__["useSupports"])(name);
  var motionPresetOptions = novablocksSettings.motionPresetOptions;

  var scrollingEffectOptions = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(novablocksSettings.scrollingEffectOptions);

  if ((supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks = supports.novaBlocks) === null || _supports$novaBlocks === void 0 ? void 0 : _supports$novaBlocks.scrollingEffect) === true || (supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks2 = supports.novaBlocks) === null || _supports$novaBlocks2 === void 0 ? void 0 : (_supports$novaBlocks3 = _supports$novaBlocks2.scrollingEffect) === null || _supports$novaBlocks3 === void 0 ? void 0 : _supports$novaBlocks3.doppler) === true) {
    scrollingEffectOptions.push({
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Doppler by Pixelgrade ®', 'nova-blocks'),
      value: 'doppler'
    });
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__["ControlsSection"], {
    id: 'scrolling-effect',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Scrolling Effect', 'nova-blocks'),
    group: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Modules', 'nova-blocks'),
    order: 20
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Customize', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RadioControl"], {
    key: 'novablocks-scrolling-effect',
    selected: scrollingEffect,
    className: 'novablocks-scrolling-effect',
    onChange: function onChange(scrollingEffect) {
      var newAttributes = {
        scrollingEffect: scrollingEffect
      };

      if (scrollingEffect === 'doppler' && motionPreset !== 'custom') {
        var newOption = motionPresetOptions.find(function (option) {
          return motionPreset === option.value;
        });
        newAttributes = Object.assign(newOption.preset, newAttributes);
        newAttributes.minHeightFallback = 75;
      }

      setAttributes(newAttributes);
    },
    options: scrollingEffectOptions
  }), props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (ScrollingEffectPanel);


/***/ }),

/***/ "./packages/scrolling-effect/build-module/controls/start-frame-panel.js":
/*!******************************************************************************!*\
  !*** ./packages/scrolling-effect/build-module/controls/start-frame-panel.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./packages/scrolling-effect/build-module/utils.js");








var StartFramePanel = function StartFramePanel(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      focalPointImage = props.focalPointImage;
  var media = attributes.media,
      focalPoint = attributes.focalPoint,
      finalFocalPoint = attributes.finalFocalPoint,
      initialBackgroundScale = attributes.initialBackgroundScale,
      followThroughStart = attributes.followThroughStart,
      scrollingEffect = attributes.scrollingEffect;
  var parallaxFocalPointImage = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (focalPointImage) {
      return focalPointImage;
    }

    return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getFocalPointImage"])(media);
  }, [focalPointImage, media]);
  var isDoppler = scrollingEffect === 'doppler';

  var staticPanelTitle = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Static Scrolling Settings', 'nova-blocks');

  var parallaxPanelTitle = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Parallax Scrolling Settings', 'nova-blocks');

  var dopplerPanelTitle = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Start Frame', 'nova-blocks');

  var panelTitle = staticPanelTitle;

  if ('parallax' === scrollingEffect) {
    panelTitle = parallaxPanelTitle;
  }

  if (isDoppler) {
    panelTitle = dopplerPanelTitle;
  }

  var classNames = ['novablocks-focal-point-picker', "novablocks-focal-point-picker--".concat(scrollingEffect), "novablocks-focal-point-picker--start", Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getSnapClassname"])(focalPoint)];
  var className = classNames.join(' ');
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: panelTitle,
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["FocalPointPicker"], {
    label: 'Focal Point',
    url: parallaxFocalPointImage.url,
    dimensions: {
      width: parallaxFocalPointImage.width,
      height: parallaxFocalPointImage.height
    },
    value: focalPoint,
    onChange: function onChange(focalPoint) {
      setAttributes({
        motionPreset: 'custom',
        focalPoint: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["maybeSnapFocalPoint"])(focalPoint),
        finalFocalPoint: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["maybeSnapFocalPoint"])({
          x: focalPoint.x,
          y: finalFocalPoint.y
        })
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: 'Zoom',
    value: initialBackgroundScale,
    onChange: function onChange(initialBackgroundScale) {
      setAttributes({
        motionPreset: 'custom',
        initialBackgroundScale: initialBackgroundScale
      });
    },
    min: 1,
    max: 2,
    step: 0.01
  }), scrollingEffect === 'doppler' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Smooth start transition', 'nova-blocks'),
    checked: followThroughStart,
    onChange: function onChange() {
      setAttributes({
        followThroughStart: !followThroughStart
      });
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__["withVisibility"])('start-frame-panel')(StartFramePanel));


/***/ }),

/***/ "./packages/scrolling-effect/build-module/filters/with-scrolling-effect-attributes.js":
/*!********************************************************************************************!*\
  !*** ./packages/scrolling-effect/build-module/filters/with-scrolling-effect-attributes.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var attributes = {
  scrollingEffect: {
    type: "string",
    "default": "static"
  },
  focalPoint: {
    type: "object",
    "default": {
      x: 0.5,
      y: 0.5
    }
  },
  finalFocalPoint: {
    type: "object",
    "default": {
      x: 0.5,
      y: 0.5
    }
  },
  initialBackgroundScale: {
    type: "number",
    "default": 1
  },
  finalBackgroundScale: {
    type: "number",
    "default": 1
  },
  motionPreset: {
    type: "string",
    "default": "standard-dynamic"
  },
  followThroughStart: {
    type: "boolean",
    "default": true
  },
  followThroughEnd: {
    type: "boolean",
    "default": true
  }
};

var withDopplerAttributes = function withDopplerAttributes(settings) {
  var _settings$supports, _settings$supports$no;

  var dopplerSupport = settings === null || settings === void 0 ? void 0 : (_settings$supports = settings.supports) === null || _settings$supports === void 0 ? void 0 : (_settings$supports$no = _settings$supports.novaBlocks) === null || _settings$supports$no === void 0 ? void 0 : _settings$supports$no.scrollingEffect;

  if (dopplerSupport !== true && !(dopplerSupport !== null && dopplerSupport !== void 0 && dopplerSupport.attributes)) {
    return settings;
  }

  return _objectSpread(_objectSpread({}, settings), {}, {
    attributes: _objectSpread(_objectSpread({}, settings.attributes), attributes)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (withDopplerAttributes);


/***/ }),

/***/ "./packages/scrolling-effect/build-module/filters/with-scrolling-effect-controls.js":
/*!******************************************************************************************!*\
  !*** ./packages/scrolling-effect/build-module/filters/with-scrolling-effect-controls.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controls */ "./packages/scrolling-effect/build-module/controls/index.js");





var withDopplerControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var _supports$novaBlocks;

    var supports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__["useSupports"])(props.name);
    var dopplerSupport = supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks = supports.novaBlocks) === null || _supports$novaBlocks === void 0 ? void 0 : _supports$novaBlocks.scrollingEffect;

    if (dopplerSupport !== true && !(dopplerSupport !== null && dopplerSupport !== void 0 && dopplerSupport.controls)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_3__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props));
  };
}, 'withDopplerControls');
/* harmony default export */ __webpack_exports__["default"] = (withDopplerControls);


/***/ }),

/***/ "./packages/scrolling-effect/build-module/filters/with-scrolling-effect-provider.js":
/*!******************************************************************************************!*\
  !*** ./packages/scrolling-effect/build-module/filters/with-scrolling-effect-provider.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ "./packages/scrolling-effect/build-module/context.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./packages/scrolling-effect/build-module/utils.js");







var withDopplerProvider = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["createHigherOrderComponent"])(function (WrappedComponent) {
  return function (props) {
    var containerRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

    var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
        _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        contextValue = _useState2[0],
        setContextValue = _useState2[1];

    var attributes = props.attributes;
    var scrollContainer = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["useScrollContainer"])();
    var scrollContainerBox = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["useScrollContainerBox"])(scrollContainer);

    var _useResizeObserver = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["useResizeObserver"])(),
        _useResizeObserver2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useResizeObserver, 2),
        setContainerNode = _useResizeObserver2[0],
        containerResizeEntry = _useResizeObserver2[1];

    var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
        _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        containerBox = _useState4[0],
        setContainerBox = _useState4[1];

    var onScroll = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
      if (containerRef.current) {
        setContainerBox(containerRef.current.getBoundingClientRect());
      }
    }, [containerRef]);
    Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["useOnScroll"])(scrollContainer, onScroll);
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      if (containerRef.current) {
        setContainerNode(containerRef.current);
      }
    }, [containerRef]);
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      setContainerBox(containerResizeEntry.contentRect);
    }, [containerResizeEntry]);
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      if (containerBox && scrollContainerBox) {
        var config = {
          scrollContainerBox: scrollContainerBox,
          containerBox: containerBox
        };
        var dopplerState = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getState"])(config, attributes);
        var newConfig = Object.assign({}, config, dopplerState);
        var style = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getStyles"])(newConfig, attributes);
        var newContextValue = {
          style: style,
          state: dopplerState,
          container: containerRef.current,
          scrollContainer: scrollContainer
        };
        setContextValue(newContextValue);
      }
    }, [containerBox, scrollContainerBox, attributes, containerRef, scrollContainer]);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "novablocks-doppler__mask novablocks-doppler__wrapper",
      ref: containerRef
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_context__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
      value: contextValue
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(WrappedComponent, props)));
  };
}, 'withDopplerProvider');
/* harmony default export */ __webpack_exports__["default"] = (withDopplerProvider);


/***/ }),

/***/ "./packages/scrolling-effect/build-module/filters/with-scrolling-effect-wrapper.js":
/*!*****************************************************************************************!*\
  !*** ./packages/scrolling-effect/build-module/filters/with-scrolling-effect-wrapper.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _with_scrolling_effect_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./with-scrolling-effect-provider */ "./packages/scrolling-effect/build-module/filters/with-scrolling-effect-provider.js");




var withScrollingEffectWrapper = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var _supports$novaBlocks, _supports$novaBlocks2;

    var supports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__["useSupports"])(props.name);
    var WrappedComponent = Object(_with_scrolling_effect_provider__WEBPACK_IMPORTED_MODULE_3__["default"])(OriginalComponent);

    if (!(supports !== null && supports !== void 0 && (_supports$novaBlocks = supports.novaBlocks) !== null && _supports$novaBlocks !== void 0 && _supports$novaBlocks.scrollingEffect) || !!(supports !== null && supports !== void 0 && (_supports$novaBlocks2 = supports.novaBlocks) !== null && _supports$novaBlocks2 !== void 0 && _supports$novaBlocks2.scrollingEffect.customWrapper)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WrappedComponent, props);
  };
}, 'withScrollingEffectWrapper');
/* harmony default export */ __webpack_exports__["default"] = (withScrollingEffectWrapper);


/***/ }),

/***/ "./packages/scrolling-effect/build-module/hooks/use-scrolling-effect/index.js":
/*!************************************************************************************!*\
  !*** ./packages/scrolling-effect/build-module/hooks/use-scrolling-effect/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context */ "./packages/scrolling-effect/build-module/context.js");



var useScrollingEffect = function useScrollingEffect() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (useScrollingEffect);


/***/ }),

/***/ "./packages/scrolling-effect/build-module/index.js":
/*!*********************************************************!*\
  !*** ./packages/scrolling-effect/build-module/index.js ***!
  \*********************************************************/
/*! exports provided: withScrollingEffect, useScrollingEffect, getIntermediateFocalPoint, getStyles, getStylesFromProps, getProps, getState, getFocalPointImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filters_with_scrolling_effect_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters/with-scrolling-effect-attributes */ "./packages/scrolling-effect/build-module/filters/with-scrolling-effect-attributes.js");
/* harmony import */ var _filters_with_scrolling_effect_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters/with-scrolling-effect-controls */ "./packages/scrolling-effect/build-module/filters/with-scrolling-effect-controls.js");
/* harmony import */ var _filters_with_scrolling_effect_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters/with-scrolling-effect-wrapper */ "./packages/scrolling-effect/build-module/filters/with-scrolling-effect-wrapper.js");
/* harmony import */ var _filters_with_scrolling_effect_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filters/with-scrolling-effect-provider */ "./packages/scrolling-effect/build-module/filters/with-scrolling-effect-provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withScrollingEffect", function() { return _filters_with_scrolling_effect_provider__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _hooks_use_scrolling_effect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/use-scrolling-effect */ "./packages/scrolling-effect/build-module/hooks/use-scrolling-effect/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScrollingEffect", function() { return _hooks_use_scrolling_effect__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./packages/scrolling-effect/build-module/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIntermediateFocalPoint", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getIntermediateFocalPoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStylesFromProps", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getStylesFromProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProps", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocalPointImage", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getFocalPointImage"]; });





Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('blocks.registerBlockType', 'novablocks/with-scrolling-effect-attributes', _filters_with_scrolling_effect_attributes__WEBPACK_IMPORTED_MODULE_1__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('editor.BlockEdit', 'novablocks/with-scrolling-effect-controls', _filters_with_scrolling_effect_controls__WEBPACK_IMPORTED_MODULE_2__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('editor.BlockEdit', 'novablocks/with-scrolling-effect-wrapper', _filters_with_scrolling_effect_wrapper__WEBPACK_IMPORTED_MODULE_3__["default"], 1);





/***/ }),

/***/ "./packages/scrolling-effect/build-module/utils.js":
/*!*********************************************************!*\
  !*** ./packages/scrolling-effect/build-module/utils.js ***!
  \*********************************************************/
/*! exports provided: getIntermediateFocalPoint, getStyles, getStylesFromProps, getProps, getState, getFocalPointImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntermediateFocalPoint", function() { return getIntermediateFocalPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStylesFromProps", function() { return getStylesFromProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProps", function() { return getProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocalPointImage", function() { return getFocalPointImage; });
var userPrefersReducedMotion = function () {
  var query = window.matchMedia('(prefers-reduced-motion: reduce)');
  var matches = false;

  var check = function check(eventOrQuery) {
    matches = !!eventOrQuery.matches;
  };

  query.addEventListener('change', check);
  return function () {
    return matches;
  };
}();

var getIntermediateFocalPoint = function getIntermediateFocalPoint(focalPoint1, focalPoint2, progress) {
  if (!focalPoint1 && !focalPoint2) {
    return {
      x: 0.5,
      y: 0.5
    };
  }

  if (!focalPoint1) {
    return focalPoint2;
  }

  if (!focalPoint2) {
    return focalPoint1;
  }

  return {
    x: parseFloat(focalPoint1.x) + (parseFloat(focalPoint2.x) - parseFloat(focalPoint1.x)) * progress,
    y: parseFloat(focalPoint1.y) + (parseFloat(focalPoint2.y) - parseFloat(focalPoint1.y)) * progress
  };
};
var getStyles = function getStyles(config, attributes) {
  var scrollingEffect = attributes.scrollingEffect;

  if ('static' === scrollingEffect) {
    return {};
  }

  var props = getProps(config, attributes);
  return getStylesFromProps(props);
};
var getStylesFromProps = function getStylesFromProps(props) {
  var fixed = props.fixed,
      parallaxAmount = props.parallaxAmount,
      width = props.width,
      height = props.height,
      moveX = props.moveX,
      moveY = props.moveY,
      offsetX = props.offsetX,
      offsetY = props.offsetY,
      scale = props.scale,
      focalPoint = props.focalPoint;
  return {
    position: fixed ? 'fixed' : 'absolute',
    top: 0,
    left: 0,
    width: width ? "".concat(width, "px") : '',
    height: height ? "".concat(height, "px") : '',
    minHeight: 0,
    maxWidth: 'none',
    transform: "translate(".concat(moveX, ",").concat(moveY * parallaxAmount, "px) translateX(").concat(offsetX, ") translateY(").concat(offsetY, "px) scale(").concat(scale, ")"),
    objectPosition: focalPoint.x * 100 + '% ' + focalPoint.y * 100 + '%',
    transformOrigin: focalPoint.x * 100 + '% 50%'
  };
};

function getIntermediateValue(initialValue, finalValue, progress) {
  return initialValue + (finalValue - initialValue) * progress;
}

function getScales(attributes, progress) {
  var scrollingEffect = attributes.scrollingEffect,
      initialBackgroundScale = attributes.initialBackgroundScale,
      finalBackgroundScale = attributes.finalBackgroundScale;
  initialBackgroundScale = initialBackgroundScale || 1;

  if (scrollingEffect === 'parallax') {
    finalBackgroundScale = initialBackgroundScale;
  }

  var maxScale = Math.max(initialBackgroundScale, finalBackgroundScale);
  initialBackgroundScale = initialBackgroundScale / maxScale;
  finalBackgroundScale = finalBackgroundScale / maxScale;

  if (userPrefersReducedMotion()) {
    return {
      maxScale: 1,
      newScale: 1
    };
  }

  return {
    maxScale: maxScale,
    newScale: getIntermediateValue(initialBackgroundScale, finalBackgroundScale, progress)
  };
}

function getFocalPoint(attributes, progress) {
  var scrollingEffect = attributes.scrollingEffect,
      focalPoint = attributes.focalPoint,
      finalFocalPoint = attributes.finalFocalPoint;

  if (!focalPoint) {
    focalPoint = {
      x: 0.5,
      y: 0.5
    };
  }

  if (scrollingEffect !== 'doppler') {
    return focalPoint;
  }

  return getIntermediateFocalPoint(focalPoint, finalFocalPoint, progress);
}

function getNewImageHeight(config, parallaxAmount) {
  var scrollContainerBox = config.scrollContainerBox,
      containerBox = config.containerBox;
  return containerBox.height + (scrollContainerBox.height - containerBox.height) * parallaxAmount;
}

var getProps = function getProps(config, attributes, fixed) {
  var distance = config.distance,
      progress = config.progress,
      containerBox = config.containerBox,
      scrollContainerBox = config.scrollContainerBox,
      smoothStart = config.smoothStart,
      smoothEnd = config.smoothEnd;
  var scrollingEffect = attributes.scrollingEffect;
  var newFocalPoint = getFocalPoint(attributes, progress);
  var parallaxAmount = userPrefersReducedMotion() ? 0 : scrollingEffect === 'parallax' ? 0.75 : 1;

  var _getScales = getScales(attributes, progress),
      maxScale = _getScales.maxScale,
      newScale = _getScales.newScale;

  var newImageHeight = getNewImageHeight(config, parallaxAmount); // keep in sync with scroll

  var moveY = scrollContainerBox.top - containerBox.top;

  if (!smoothStart) {
    if (!!fixed && containerBox.top < 0) {
      moveY = scrollContainerBox.top;
    }

    if (!fixed && 0 > scrollContainerBox.top - containerBox.top) {
      moveY = 0;
    }
  }

  if (!smoothEnd) {
    if (scrollContainerBox.top - containerBox.top > containerBox.height - scrollContainerBox.height) {
      if (!!fixed) {
        moveY = scrollContainerBox.top - containerBox.top - containerBox.height + scrollContainerBox.height;
      } else {
        moveY = containerBox.height - scrollContainerBox.height;
      }
    }
  } // align top


  var offsetY = newImageHeight * maxScale * (newScale - 1) * 0.5; // position according to focalPoint

  offsetY += newImageHeight * (1 - maxScale * newScale) * newFocalPoint.y;
  return {
    fixed: fixed,
    distance: distance,
    parallaxAmount: fixed ? 1 - parallaxAmount : parallaxAmount,
    progress: progress,
    width: containerBox.width * maxScale,
    height: newImageHeight * maxScale,
    moveX: "".concat(fixed ? containerBox.left - scrollContainerBox.left : 0, "px"),
    moveY: fixed ? -1 * moveY : moveY,
    offsetX: (1 / maxScale - 1) * newFocalPoint.x * 100 + '%',
    offsetY: offsetY,
    scale: newScale,
    focalPoint: newFocalPoint
  };
};
var getState = function getState(config, attributes) {
  var containerBox = config.containerBox,
      scrollContainerBox = config.scrollContainerBox;
  var scrollingEffect = attributes.scrollingEffect,
      followThroughStart = attributes.followThroughStart,
      followThroughEnd = attributes.followThroughEnd;
  var smoothStart = followThroughStart || scrollingEffect === 'parallax';
  var smoothEnd = followThroughEnd || scrollingEffect === 'parallax';
  var current = scrollContainerBox.top - containerBox.top;
  var distance = containerBox.height - scrollContainerBox.height;

  if (smoothStart) {
    current += scrollContainerBox.height;
    distance += scrollContainerBox.height;
  }

  if (smoothEnd) {
    distance += scrollContainerBox.height;
  }

  var progress = distance <= 0 ? 0.5 : current / distance;

  if (!smoothStart) {
    progress = Math.max(0, progress);
  }

  if (!smoothEnd) {
    progress = Math.min(1, progress);
  }

  if (userPrefersReducedMotion()) {
    progress = 0.5;
  }

  return {
    progress: progress,
    distance: distance,
    smoothStart: smoothStart,
    smoothEnd: smoothEnd,
    containerBox: containerBox,
    scrollContainerBox: scrollContainerBox
  };
};
var getFocalPointImage = function getFocalPointImage(media) {
  var mediaType = media === null || media === void 0 ? void 0 : media.type;
  var parallaxFocalPointImage = false;

  if (mediaType === 'image') {
    var _media$sizes, _media$sizes$novabloc, _media$sizes2, _media$sizes2$novablo;

    parallaxFocalPointImage = {
      url: (media === null || media === void 0 ? void 0 : (_media$sizes = media.sizes) === null || _media$sizes === void 0 ? void 0 : (_media$sizes$novabloc = _media$sizes.novablocks_large) === null || _media$sizes$novabloc === void 0 ? void 0 : _media$sizes$novabloc.url) || (media === null || media === void 0 ? void 0 : (_media$sizes2 = media.sizes) === null || _media$sizes2 === void 0 ? void 0 : (_media$sizes2$novablo = _media$sizes2.novablocks_huge) === null || _media$sizes2$novablo === void 0 ? void 0 : _media$sizes2$novablo.url) || (media === null || media === void 0 ? void 0 : media.url),
      width: 218,
      height: 170
    };
  }

  if (mediaType === 'video') {
    parallaxFocalPointImage = {
      url: '//cloud.pixelgrade.com/wp-content/uploads/2020/01/Screenshot-2020-01-09-at-15.59.37.png',
      width: 218,
      height: 170
    };
  }

  return parallaxFocalPointImage;
};


/***/ }),

/***/ "@novablocks/block-editor":
/*!*********************************************!*\
  !*** external ["novablocks","blockEditor"] ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["novablocks"]["blockEditor"]; }());

/***/ }),

/***/ "@novablocks/easings":
/*!*****************************************!*\
  !*** external ["novablocks","easings"] ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["novablocks"]["easings"]; }());

/***/ }),

/***/ "@novablocks/utils":
/*!***************************************!*\
  !*** external ["novablocks","utils"] ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["novablocks"]["utils"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map