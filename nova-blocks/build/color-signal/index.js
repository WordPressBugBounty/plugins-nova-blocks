this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["colorSignal"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/color-signal/build-module/index.js");
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

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
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

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
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

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./packages/color-signal/build-module/components/block-color-grade-control/index.js":
/*!******************************************************************************************!*\
  !*** ./packages/color-signal/build-module/components/block-color-grade-control/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./packages/color-signal/build-module/components/index.js");
/* harmony import */ var _editor_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../editor/utils */ "./packages/color-signal/build-module/editor/utils.js");







var BlockColorGradeControl = function BlockColorGradeControl(props) {
  var attributes = props.attributes,
      updateBlock = props.updateBlock,
      clientId = props.clientId;
  var paletteVariation = attributes.paletteVariation,
      colorSignal = attributes.colorSignal;
  var parentVariation = Object(_editor_utils__WEBPACK_IMPORTED_MODULE_4__["getParentVariation"])(clientId);
  var onPaletteVariationChange = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (nextVariation) {
    updateBlock({
      paletteVariation: nextVariation,
      useSourceColorAsReference: false
    }, true, false);
  }, [updateBlock]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ColorGradesControl"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Block Color Signal', 'nova-blocks'),
    value: paletteVariation,
    signal: colorSignal,
    useReference: true,
    onChange: onPaletteVariationChange,
    parentVariation: parentVariation
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BlockColorGradeControl);


/***/ }),

/***/ "./packages/color-signal/build-module/components/block-color-signal-control/index.js":
/*!*******************************************************************************************!*\
  !*** ./packages/color-signal/build-module/components/block-color-signal-control/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../editor/utils */ "./packages/color-signal/build-module/editor/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./packages/color-signal/build-module/utils/index.js");








var BlockColorSignal = function BlockColorSignal(props) {
  var attributes = props.attributes,
      updateBlock = props.updateBlock,
      clientId = props.clientId;
  var colorSignal = attributes.colorSignal,
      palette = attributes.palette;
  var onSignalChange = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (nextSignal) {
    var referenceVariation = Object(_editor_utils__WEBPACK_IMPORTED_MODULE_4__["getParentVariation"])(clientId);
    var absoluteVariation = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getAbsoluteColorVariation"])(attributes);
    var nextVariation = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["computeColorSignal"])(referenceVariation, nextSignal, palette, absoluteVariation);
    var finalVariation = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["removeSiteVariationOffset"])(nextVariation);
    updateBlock({
      paletteVariation: finalVariation,
      useSourceColorAsReference: false
    }, true, true);
  }, [palette, updateBlock]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["SignalControl"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    max: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getMaxSignal"])(palette),
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Block Color Signal', 'nova-blocks'),
    signal: colorSignal,
    onChange: onSignalChange
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BlockColorSignal);


/***/ }),

/***/ "./packages/color-signal/build-module/components/color-grades-control/index.js":
/*!*************************************************************************************!*\
  !*** ./packages/color-signal/build-module/components/color-grades-control/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/icons */ "@novablocks/icons");
/* harmony import */ var _novablocks_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./packages/color-signal/build-module/utils/index.js");







var ColorGradesControl = function ColorGradesControl(props) {
  var _supports$novaBlocks$, _supports$novaBlocks, _supports$novaBlocks$2, _supports$novaBlocks$3, _supports$novaBlocks2, _supports$novaBlocks3, _classnames, _props$settings;

  var attributes = props.attributes,
      label = props.label,
      signal = props.signal,
      value = props.value,
      parentVariation = props.parentVariation,
      useReference = props.useReference;

  var onChange = props.onChange || function () {};

  var palette = attributes.palette,
      useSourceColorAsReference = attributes.useSourceColorAsReference;
  var supports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__["useSupports"])(props.name);
  var maxSignal = Math.min((_supports$novaBlocks$ = supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks = supports.novaBlocks) === null || _supports$novaBlocks === void 0 ? void 0 : (_supports$novaBlocks$2 = _supports$novaBlocks.colorSignal) === null || _supports$novaBlocks$2 === void 0 ? void 0 : _supports$novaBlocks$2.maxColorSignal) !== null && _supports$novaBlocks$ !== void 0 ? _supports$novaBlocks$ : 3);
  var minSignal = Math.max((_supports$novaBlocks$3 = supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks2 = supports.novaBlocks) === null || _supports$novaBlocks2 === void 0 ? void 0 : (_supports$novaBlocks3 = _supports$novaBlocks2.colorSignal) === null || _supports$novaBlocks3 === void 0 ? void 0 : _supports$novaBlocks3.minColorSignal) !== null && _supports$novaBlocks$3 !== void 0 ? _supports$novaBlocks$3 : 0);
  var sourceIndex = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getSourceIndexFromPaletteId"])(palette);
  var iconClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()("nb-signal-icon", (_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, "nb-signal-icon--none", signal === 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, "nb-signal-icon--low", signal === 1), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, "nb-signal-icon--medium", signal === 2), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, "nb-signal-icon--high", signal === 3), _classnames));
  var variations = Array.from(Array(12)).map(function (undefined, index) {
    return index + 1;
  });
  var sourceOffset = useReference && useSourceColorAsReference ? sourceIndex : 0;
  var selectedVariation = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["normalizeVariationValue"])(value + sourceOffset);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'components-base-control components-nb-color-grades-control'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "components-base-control__field"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "components-base-control__label"
  }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "components-base-control__label-icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: iconClassName
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "nb-signal-icon__bar"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "nb-signal-icon__bar"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "nb-signal-icon__bar"
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "nb-palette"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "nb-palette__grades"
  }, variations.map(function (currentVariation, index) {
    var content = '';
    var isSelected = selectedVariation === currentVariation;
    var isSource = sourceIndex + 1 === currentVariation;
    var nextSignal = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getSignalRelativeToVariation"])(currentVariation, parentVariation, palette);
    var isDisabled = minSignal > nextSignal || maxSignal < nextSignal;
    var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()("nb-palette__grade", "sm-palette-".concat(palette), "sm-variation-".concat(currentVariation), {
      'nb-palette__grade--selected': isSelected,
      'nb-palette__grade--source': !isDisabled && isSource,
      'nb-palette__grade--disabled': isDisabled
    });

    if (isSelected) {
      content = Object(_novablocks_icons__WEBPACK_IMPORTED_MODULE_3__["getIcon"])('tick');
    }

    if (isSource) {
      content = Object(_novablocks_icons__WEBPACK_IMPORTED_MODULE_3__["getIcon"])('star');
    }

    if (isDisabled) {
      content = Object(_novablocks_icons__WEBPACK_IMPORTED_MODULE_3__["getIcon"])('cancel');
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      "data-signal": nextSignal,
      className: className,
      onClick: function onClick() {
        onChange(currentVariation);
      },
      key: 'palette_grade_' + index
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nb-palette__grade-surface"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nb-palette__grade-icon",
      dangerouslySetInnerHTML: {
        __html: content
      }
    }));
  })), (props === null || props === void 0 ? void 0 : (_props$settings = props.settings) === null || _props$settings === void 0 ? void 0 : _props$settings.debug) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "nb-palette__signal-previews",
    style: {
      display: "flex"
    }
  }, variations.map(function (currentVariation, index) {
    var current = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["addSiteVariationOffset"])(currentVariation);
    var signal = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getSignalRelativeToVariation"])(current, parentVariation, palette);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nb-palette__signal-preview-wrap",
      key: 'palette_signal_preview_' + index
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nb-palette__signal-preview-wrap__above"
    }, current), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nb-palette__signal-preview nb-palette__signal-preview--".concat(signal)
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "nb-palette__signal-preview-wrap__below"
    }, parentVariation));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorGradesControl);


/***/ }),

/***/ "./packages/color-signal/build-module/components/color-reference-toggle/index.js":
/*!***************************************************************************************!*\
  !*** ./packages/color-signal/build-module/components/color-reference-toggle/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__);





var ColorReferenceToggleControl = function ColorReferenceToggleControl(props) {
  var novablocksSettings = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["useSettings"])();

  if (!(novablocksSettings !== null && novablocksSettings !== void 0 && novablocksSettings.debug)) {
    return null;
  }

  var useSourceColorAsReference = props.attributes.useSourceColorAsReference;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    key: 'color_reference_toggle_group'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
    key: 'color-set-use-source-as-reference-control',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Use Source Color as Reference', 'nova-blocks'),
    checked: useSourceColorAsReference,
    disabled: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorReferenceToggleControl);


/***/ }),

/***/ "./packages/color-signal/build-module/components/color-signal-slot-fill/index.js":
/*!***************************************************************************************!*\
  !*** ./packages/color-signal/build-module/components/color-signal-slot-fill/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_5__);


var _excluded = ["bubblesVirtually"];




var SLOT_NAME = 'ColorSignalCustomizeControls';

var _createSlotFill = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["createSlotFill"])(SLOT_NAME),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;

var ColorSignalCustomizeSlot = function ColorSignalCustomizeSlot(_ref) {
  var _ref$bubblesVirtually = _ref.bubblesVirtually,
      bubblesVirtually = _ref$bubblesVirtually === void 0 ? true : _ref$bubblesVirtually,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  var slot = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalUseSlot"])(SLOT_NAME);
  var hasFills = Boolean(slot.fills && slot.fills.length);

  if (!hasFills) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_5__["ControlsGroup"], {
    key: 'block_color_customize_group'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Slot, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    bubblesVirtually: bubblesVirtually
  })));
};

var ColorSignalCustomizeFill = function ColorSignalCustomizeFill(_ref2) {
  var children = _ref2.children;

  var _useBlockEditContext = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["useBlockEditContext"])(),
      isSelected = _useBlockEditContext.isSelected;

  if (!isSelected) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Fill, null, children);
};

var ColorSignalCustomizeControls = ColorSignalCustomizeFill;
ColorSignalCustomizeControls.Slot = ColorSignalCustomizeSlot;
/* harmony default export */ __webpack_exports__["default"] = (ColorSignalCustomizeControls);


/***/ }),

/***/ "./packages/color-signal/build-module/components/content-color-grade-control/index.js":
/*!********************************************************************************************!*\
  !*** ./packages/color-signal/build-module/components/content-color-grade-control/index.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./packages/color-signal/build-module/components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./packages/color-signal/build-module/utils/index.js");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_5__);








var ContentColorGradeControl = function ContentColorGradeControl(props) {
  var _supports$novaBlocks;

  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      name = props.name;
  var palette = attributes.palette,
      paletteVariation = attributes.paletteVariation,
      contentPaletteVariation = attributes.contentPaletteVariation,
      contentColorSignal = attributes.contentColorSignal;
  var supports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_5__["useSupports"])(name);
  var colorSignalSupport = supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks = supports.novaBlocks) === null || _supports$novaBlocks === void 0 ? void 0 : _supports$novaBlocks.colorSignal;
  var onColorGradeChange = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (nextContentPaletteVariation) {
    var absoluteVariation = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getAbsoluteColorVariation"])(attributes);
    var nextContentColorSignal = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getSignalRelativeToVariation"])(nextContentPaletteVariation, absoluteVariation, palette);
    setAttributes({
      contentColorSignal: nextContentColorSignal,
      contentPaletteVariation: nextContentPaletteVariation
    });
  }, [attributes]);

  if (colorSignalSupport !== true && (colorSignalSupport === null || colorSignalSupport === void 0 ? void 0 : colorSignalSupport.contentColorSignal) !== true) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ColorGradesControl"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Content Area Color Signal', 'nova-blocks'),
    value: contentPaletteVariation,
    signal: contentColorSignal,
    useReference: false,
    onChange: onColorGradeChange,
    parentVariation: paletteVariation
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentColorGradeControl);


/***/ }),

/***/ "./packages/color-signal/build-module/components/content-color-signal-control/index.js":
/*!*********************************************************************************************!*\
  !*** ./packages/color-signal/build-module/components/content-color-signal-control/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./packages/color-signal/build-module/utils/index.js");






var ContentColorSignalControl = function ContentColorSignalControl(props) {
  var _supports$novaBlocks;

  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      name = props.name;
  var contentColorSignal = attributes.contentColorSignal,
      palette = attributes.palette;
  var supports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["useSupports"])(name);
  var colorSignalSupport = supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks = supports.novaBlocks) === null || _supports$novaBlocks === void 0 ? void 0 : _supports$novaBlocks.colorSignal;

  if (colorSignalSupport !== true && (colorSignalSupport === null || colorSignalSupport === void 0 ? void 0 : colorSignalSupport.contentColorSignal) !== true) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    key: 'content_color_signal_group'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["SignalControl"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Content Area Color Signal', 'nova-blocks'),
    max: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getMaxSignal"])(palette),
    signal: contentColorSignal,
    onChange: function onChange(contentColorSignal) {
      var contentPaletteVariation = attributes.contentPaletteVariation;
      var absoluteVariation = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getAbsoluteColorVariation"])(attributes);
      var nextContentPaletteVariation = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["computeColorSignal"])(absoluteVariation, contentColorSignal, palette, contentPaletteVariation);
      var finalContentPaletteVariation = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["removeSiteVariationOffset"])(nextContentPaletteVariation);
      setAttributes({
        contentColorSignal: contentColorSignal,
        contentPaletteVariation: finalContentPaletteVariation
      });
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentColorSignalControl);


/***/ }),

/***/ "./packages/color-signal/build-module/components/emphasis-area-control/index.js":
/*!**************************************************************************************!*\
  !*** ./packages/color-signal/build-module/components/emphasis-area-control/index.js ***!
  \**************************************************************************************/
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
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__);





var EmphasisAreaControl = function EmphasisAreaControl(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var emphasisArea = attributes.emphasisArea;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    key: 'emphasis_area_group'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    value: emphasisArea,
    onChange: function onChange(emphasisArea) {
      return setAttributes({
        emphasisArea: emphasisArea
      });
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Emphasis Area', 'nova-blocks'),
    min: 0,
    max: 100,
    step: 5
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["withVisibility"])('emphasis-area', false)(EmphasisAreaControl));


/***/ }),

/***/ "./packages/color-signal/build-module/components/functional-colors-toggle/index.js":
/*!*****************************************************************************************!*\
  !*** ./packages/color-signal/build-module/components/functional-colors-toggle/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__);





var FunctionalColorsToggleControl = function FunctionalColorsToggleControl(props) {
  var showFunctionalColors = props.showFunctionalColors,
      setShowFunctionalColors = props.setShowFunctionalColors;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Use Functional Colors', 'nova-blocks'),
    checked: showFunctionalColors,
    onChange: function onChange(value) {
      setShowFunctionalColors(value);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FunctionalColorsToggleControl);


/***/ }),

/***/ "./packages/color-signal/build-module/components/index.js":
/*!****************************************************************!*\
  !*** ./packages/color-signal/build-module/components/index.js ***!
  \****************************************************************/
/*! exports provided: ColorReferenceToggleControl, MiscellaneousControls, PalettePicker, ColorGradesControl, BlockColorSignalControl, BlockColorGradeControl, ContentColorSignalControl, ContentColorGradeControl, ColorSignalCustomizeControls, withColorSignalProps, EmphasisAreaControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_reference_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-reference-toggle */ "./packages/color-signal/build-module/components/color-reference-toggle/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorReferenceToggleControl", function() { return _color_reference_toggle__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _miscellaneous_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./miscellaneous-controls */ "./packages/color-signal/build-module/components/miscellaneous-controls/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousControls", function() { return _miscellaneous_controls__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _palette_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./palette-picker */ "./packages/color-signal/build-module/components/palette-picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PalettePicker", function() { return _palette_picker__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _color_grades_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-grades-control */ "./packages/color-signal/build-module/components/color-grades-control/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorGradesControl", function() { return _color_grades_control__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _block_color_signal_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block-color-signal-control */ "./packages/color-signal/build-module/components/block-color-signal-control/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockColorSignalControl", function() { return _block_color_signal_control__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _block_color_grade_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block-color-grade-control */ "./packages/color-signal/build-module/components/block-color-grade-control/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockColorGradeControl", function() { return _block_color_grade_control__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _content_color_signal_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content-color-signal-control */ "./packages/color-signal/build-module/components/content-color-signal-control/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentColorSignalControl", function() { return _content_color_signal_control__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _content_color_grade_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content-color-grade-control */ "./packages/color-signal/build-module/components/content-color-grade-control/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentColorGradeControl", function() { return _content_color_grade_control__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _color_signal_slot_fill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./color-signal-slot-fill */ "./packages/color-signal/build-module/components/color-signal-slot-fill/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorSignalCustomizeControls", function() { return _color_signal_slot_fill__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _with_color_signal_props__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./with-color-signal-props */ "./packages/color-signal/build-module/components/with-color-signal-props/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withColorSignalProps", function() { return _with_color_signal_props__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _emphasis_area_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./emphasis-area-control */ "./packages/color-signal/build-module/components/emphasis-area-control/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmphasisAreaControl", function() { return _emphasis_area_control__WEBPACK_IMPORTED_MODULE_10__["default"]; });














/***/ }),

/***/ "./packages/color-signal/build-module/components/miscellaneous-controls/index.js":
/*!***************************************************************************************!*\
  !*** ./packages/color-signal/build-module/components/miscellaneous-controls/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functional_colors_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functional-colors-toggle */ "./packages/color-signal/build-module/components/functional-colors-toggle/index.js");
/* harmony import */ var _color_reference_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../color-reference-toggle */ "./packages/color-signal/build-module/components/color-reference-toggle/index.js");








var MiscellaneousControls = function MiscellaneousControls(props) {
  var _supports$novaBlocks, _supports$novaBlocks$;

  var supports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["useSupports"])(props.name);
  var disableFunctionalColors = !(supports !== null && supports !== void 0 && (_supports$novaBlocks = supports.novaBlocks) !== null && _supports$novaBlocks !== void 0 && (_supports$novaBlocks$ = _supports$novaBlocks.colorSignal) !== null && _supports$novaBlocks$ !== void 0 && _supports$novaBlocks$.functionalColors);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, !disableFunctionalColors && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Miscellaneous', 'nova-blocks'),
    className: 'novablocks-controls-group--colors-miscellanous-controls',
    key: 'miscellaneous_group'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_functional_colors_toggle__WEBPACK_IMPORTED_MODULE_4__["default"], props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_color_reference_toggle__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    key: 'color_reference_toggle'
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MiscellaneousControls);


/***/ }),

/***/ "./packages/color-signal/build-module/components/palette-picker/index.js":
/*!*******************************************************************************!*\
  !*** ./packages/color-signal/build-module/components/palette-picker/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../editor/utils */ "./packages/color-signal/build-module/editor/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./packages/color-signal/build-module/utils/index.js");







var PalettePicker = function PalettePicker(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      clientId = props.clientId,
      showFunctionalColors = props.showFunctionalColors,
      stickySourceColor = props.stickySourceColor;
  var novablocksSettings = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__["useSettings"])();
  var palettes = novablocksSettings.palettes;
  var palette = attributes.palette,
      paletteVariation = attributes.paletteVariation,
      useSourceColorAsReference = attributes.useSourceColorAsReference;
  var functionalColors = palettes.filter(function (palette) {
    return Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["isFunctionalPalette"])(palette);
  });
  var brandColors = palettes.filter(function (palette) {
    return !Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["isFunctionalPalette"])(palette);
  });
  var visiblePalettes = showFunctionalColors ? functionalColors : brandColors;

  var onPaletteChange = function onPaletteChange(nextPalette) {
    if (nextPalette === palette && stickySourceColor) {
      var referenceVariation = Object(_editor_utils__WEBPACK_IMPORTED_MODULE_4__["getParentVariation"])(clientId);
      var sourceIndex = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getSourceIndexFromPaletteId"])(palette);
      var _useSourceColorAsReference = attributes.useSourceColorAsReference;
      var nextSourceColorAsReference = !_useSourceColorAsReference;
      var absoluteVariation = sourceIndex + 1;
      var nextVariation = nextSourceColorAsReference ? 1 : absoluteVariation;
      var nextSignal = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getSignalRelativeToVariation"])(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["addSiteVariationOffset"])(absoluteVariation), referenceVariation, palette);
      setAttributes({
        useSourceColorAsReference: nextSourceColorAsReference,
        paletteVariation: nextVariation,
        colorSignal: nextSignal
      });
    } else {
      setAttributes({
        palette: nextPalette
      });
    }
  };

  var options = visiblePalettes.map(function (palette) {
    return {
      value: "".concat(palette.id),
      data: palette,
      colors: palette.source.slice(0, 1)
    };
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__["ControlsGroup"], {
    key: 'block_color_signal_palette_picker'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'Color Palette',
    options: options,
    onChange: function onChange(value) {
      var palette = visiblePalettes.find(function (palette) {
        return "".concat(palette.id) === value;
      });
      onPaletteChange("".concat(palette.id));
    },
    favorite: paletteVariation === 1 && useSourceColorAsReference,
    selected: palette
  }, props)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__["withVisibility"])('palette-picker')(PalettePicker));


/***/ }),

/***/ "./packages/color-signal/build-module/components/with-color-signal-props/index.js":
/*!****************************************************************************************!*\
  !*** ./packages/color-signal/build-module/components/with-color-signal-props/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../editor/utils */ "./packages/color-signal/build-module/editor/utils.js");








var withColorSignalProps = function withColorSignalProps(OriginalComponent) {
  return function (props) {
    var _supports$novaBlocks, _supports$novaBlocks$;

    var attributes = props.attributes,
        setAttributes = props.setAttributes,
        clientId = props.clientId;

    var _useMemoryState = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["useMemoryState"])('showFunctionalColors', false),
        _useMemoryState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMemoryState, 2),
        showFunctionalColors = _useMemoryState2[0],
        setShowFunctionalColors = _useMemoryState2[1];

    var supports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["useSupports"])(props.name);
    var stickySourceColor = (supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks = supports.novaBlocks) === null || _supports$novaBlocks === void 0 ? void 0 : (_supports$novaBlocks$ = _supports$novaBlocks.colorSignal) === null || _supports$novaBlocks$ === void 0 ? void 0 : _supports$novaBlocks$.stickySourceColor) !== false;
    var updateBlock = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (newAttributes) {
      var useSourceOnSameVariation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var useSourceOnSameSignal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var updatedAttributes = Object(_editor_utils__WEBPACK_IMPORTED_MODULE_4__["getUpdatedAttributes"])(attributes, clientId, newAttributes, stickySourceColor, useSourceOnSameVariation, useSourceOnSameSignal);
      setAttributes(updatedAttributes);
    }, [attributes, clientId]);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(OriginalComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      updateBlock: updateBlock,
      stickySourceColor: stickySourceColor,
      showFunctionalColors: showFunctionalColors,
      setShowFunctionalColors: setShowFunctionalColors
    }));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withColorSignalProps);


/***/ }),

/***/ "./packages/color-signal/build-module/editor/utils.js":
/*!************************************************************!*\
  !*** ./packages/color-signal/build-module/editor/utils.js ***!
  \************************************************************/
/*! exports provided: getParentVariation, getUpdatedAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentVariation", function() { return getParentVariation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdatedAttributes", function() { return getUpdatedAttributes; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./packages/color-signal/build-module/utils/index.js");



/**
 * For a given block's clientId, return the container's paletteVariation to use as a reference for the block's color signal
 * The parent variation can be the closest parent with colorSignal support, or the actual webpage in which case
 * We return the Palette Basis Offset setting
 * @param clientId
 * @returns {number|*}
 */

var getParentVariation = function getParentVariation(clientId) {
  var _select = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["select"])('core/block-editor'),
      getBlockParents = _select.getBlockParents,
      getBlock = _select.getBlock;

  var parents = getBlockParents(clientId).slice(); // Loop through parents array until we find a block with Color Signal component enabled

  while (parents.length) {
    var _supports$novaBlocks;

    var parentClientId = parents.pop();
    var parentBlock = getBlock(parentClientId);
    var parentAttributes = parentBlock.attributes;
    var supports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__["getSupports"])(parentBlock.name); // if this parent supports colorSignal return it's absolute paletteVariation

    if (supports !== null && supports !== void 0 && (_supports$novaBlocks = supports.novaBlocks) !== null && _supports$novaBlocks !== void 0 && _supports$novaBlocks.colorSignal) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getAbsoluteColorVariation"])(parentAttributes);
    }
  } // return the Palette Basis Offset value


  return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getSiteColorVariation"])();
};
var getUpdatedAttributes = function getUpdatedAttributes(attributes, clientId) {
  var newAttributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var stickySourceColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var useSourceOnSameVariation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var useSourceOnSameSignal = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  // prepare attribute values to be used in computing next attributes
  var nextAttributes = Object.assign({}, attributes, newAttributes);
  var palette = nextAttributes.palette,
      useSourceColorAsReference = nextAttributes.useSourceColorAsReference; // find out the the reference (parent) color variation to compute signal on

  var referenceVariation = getParentVariation(clientId); // find out the next absolute value of the paletteVariation attribute

  var absoluteVariation = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getAbsoluteColorVariation"])(nextAttributes);
  var nextSignal = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getSignalRelativeToVariation"])(absoluteVariation, referenceVariation, palette);
  var computedVariation = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["computeColorSignal"])(referenceVariation, nextSignal, palette, absoluteVariation);
  var nextVariation = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["removeSiteVariationOffset"])(computedVariation); // determine what will be the value for the useSourceColorAsReference attribute

  var sourceIndex = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getSourceIndexFromPaletteId"])(palette);
  var sourceVariation = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["addSiteVariationOffset"])(sourceIndex + 1);
  var sourceSignal = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getSignalRelativeToVariation"])(sourceVariation, referenceVariation, palette);
  var nextSourceAsReference = stickySourceColor && (useSourceColorAsReference || useSourceOnSameSignal && nextSignal === sourceSignal || useSourceOnSameVariation && absoluteVariation === sourceVariation);
  var finalVariation = nextSourceAsReference ? sourceVariation : nextVariation;
  var contentColorSignal = nextAttributes.contentColorSignal,
      contentPaletteVariation = nextAttributes.contentPaletteVariation;
  var nextContentVariation = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["computeColorSignal"])(finalVariation, contentColorSignal, palette, contentPaletteVariation);
  return {
    palette: palette,
    paletteVariation: nextSourceAsReference ? 1 : finalVariation,
    useSourceColorAsReference: nextSourceAsReference,
    colorSignal: nextSignal,
    contentPaletteVariation: contentColorSignal === 0 ? finalVariation : nextContentVariation
  };
};


/***/ }),

/***/ "./packages/color-signal/build-module/filters/controls.js":
/*!****************************************************************!*\
  !*** ./packages/color-signal/build-module/filters/controls.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./packages/color-signal/build-module/components/index.js");





var Controls = Object(_components__WEBPACK_IMPORTED_MODULE_4__["withColorSignalProps"])(function (props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["ControlsSection"], {
    id: 'color-signal',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Color Signal', 'nova-blocks'),
    order: 10,
    key: 'color_signal_controls_section'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Customize', 'nova-blocks'),
    key: 'color_signal_customize_tab'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["Notice"], {
    key: 'color-signal-quick-start',
    id: 'novablocks-color-signal-quick-start',
    content: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quickstart:', 'nova-blocks')), " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Use this tool to signal particular blocks on your page. A block with a higher color signal stands apart from the rest of your content.', 'nova-blocks')),
    dismissLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('✔ Ok, I get it!', 'nova-blocks')
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    key: 'block_color_signal_group'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["BlockColorSignalControl"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    key: 'block_color_signal'
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ContentColorSignalControl"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    key: 'content_color_signal'
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["EmphasisAreaControl"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    key: 'emphasis_area'
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ColorSignalCustomizeControls"].Slot, {
    key: 'color_signal_customize'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["PalettePicker"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ColorReferenceToggleControl"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    key: 'color_reference_toggle'
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Settings', 'nova-blocks'),
    key: 'color_signal_settings_tab'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["PalettePicker"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    key: 'color_grade_group'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["BlockColorGradeControl"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    key: 'block_color_grade'
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ContentColorGradeControl"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    key: 'content_color_grade'
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["MiscellaneousControls"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    key: 'miscellaneous'
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (Controls);


/***/ }),

/***/ "./packages/color-signal/build-module/filters/with-color-signal-attributes.js":
/*!************************************************************************************!*\
  !*** ./packages/color-signal/build-module/filters/with-color-signal-attributes.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var attributes = {
  palette: {
    type: "string",
    "default": "1"
  },
  paletteVariation: {
    type: "number",
    "default": 1
  },
  useSourceColorAsReference: {
    type: "boolean",
    "default": false
  },
  colorSignal: {
    type: "number",
    "default": 0
  },
  contentColorSignal: {
    type: "number",
    "default": 0
  },
  contentPaletteVariation: {
    type: "number",
    "default": 1
  },
  emphasisArea: {
    type: "number",
    "default": 100
  }
};

var withColorSignalAttributes = function withColorSignalAttributes(settings) {
  var _settings$supports, _settings$supports$no;

  var colorSignalSupport = settings === null || settings === void 0 ? void 0 : (_settings$supports = settings.supports) === null || _settings$supports === void 0 ? void 0 : (_settings$supports$no = _settings$supports.novaBlocks) === null || _settings$supports$no === void 0 ? void 0 : _settings$supports$no.colorSignal;

  if (colorSignalSupport !== true && (colorSignalSupport === null || colorSignalSupport === void 0 ? void 0 : colorSignalSupport.attributes) !== true) {
    return settings;
  }

  return _objectSpread(_objectSpread({}, settings), {}, {
    attributes: _objectSpread(_objectSpread({}, settings.attributes), attributes)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (withColorSignalAttributes);


/***/ }),

/***/ "./packages/color-signal/build-module/filters/with-color-signal-controls.js":
/*!**********************************************************************************!*\
  !*** ./packages/color-signal/build-module/filters/with-color-signal-controls.js ***!
  \**********************************************************************************/
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
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls */ "./packages/color-signal/build-module/filters/controls.js");





var withColorSignalControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var _supports$novaBlocks;

    var supports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__["useSupports"])(props.name);
    var colorSignalSupport = supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks = supports.novaBlocks) === null || _supports$novaBlocks === void 0 ? void 0 : _supports$novaBlocks.colorSignal;

    if (colorSignalSupport !== true && (colorSignalSupport === null || colorSignalSupport === void 0 ? void 0 : colorSignalSupport.controls) !== true) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_3__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props));
  };
}, 'withColorSignalControls');
/* harmony default export */ __webpack_exports__["default"] = (withColorSignalControls);


/***/ }),

/***/ "./packages/color-signal/build-module/filters/with-color-signal-deprecated.js":
/*!************************************************************************************!*\
  !*** ./packages/color-signal/build-module/filters/with-color-signal-deprecated.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var withColorSignalsDeprecated = function withColorSignalsDeprecated(settings, name) {
  var _settings$supports, _settings$supports$no, _settings$supports$no2;

  if (!(settings !== null && settings !== void 0 && (_settings$supports = settings.supports) !== null && _settings$supports !== void 0 && (_settings$supports$no = _settings$supports.novaBlocks) !== null && _settings$supports$no !== void 0 && (_settings$supports$no2 = _settings$supports$no.colorSignal) !== null && _settings$supports$no2 !== void 0 && _settings$supports$no2.addOverlayColorDeprecatedMethod)) {
    return settings;
  }

  return Object.assign({}, settings, {
    attributes: _.omit(settings.attributes, ['contentColor', 'overlayFilterStyle']),
    deprecated: [{
      attributes: settings.attributes,
      isEligible: function isEligible(attributes) {
        return "undefined" === typeof attributes.paletteVariation;
      },
      migrate: function migrate(attributes) {
        var contentColor = attributes.contentColor,
            overlayFilterStyle = attributes.overlayFilterStyle;
        var hadDarkText = !!contentColor && contentColor.search('000') > -1;
        var hadLightBackground = !!overlayFilterStyle && overlayFilterStyle === 'light';
        var paletteVariation = hadDarkText || hadLightBackground ? '0' : '12';
        var colorSignal = hadDarkText || hadLightBackground ? 0 : 3;
        return _objectSpread(_objectSpread({}, attributes), {}, {
          defaultsGenerated: true,
          paletteVariation: paletteVariation,
          colorSignal: colorSignal
        });
      },
      save: settings.save
    }].concat(settings.deprecated)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (withColorSignalsDeprecated);


/***/ }),

/***/ "./packages/color-signal/build-module/filters/with-color-signal-edit-classnames.js":
/*!*****************************************************************************************!*\
  !*** ./packages/color-signal/build-module/filters/with-color-signal-edit-classnames.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./packages/color-signal/build-module/utils/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var withColorSignalEditClassnames = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["createHigherOrderComponent"])(function (BlockListBlock) {
  return function (props) {
    var supports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__["useSupports"])(props.name);
    var attributes = props.attributes;
    var newClassnames = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getColorSignalClassnames"])(attributes, supports);

    var newProps = _objectSpread(_objectSpread({}, props), {}, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.className, newClassnames)
    });

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockListBlock, newProps);
  };
}, "withColorSignalEditClassnames");
/* harmony default export */ __webpack_exports__["default"] = (withColorSignalEditClassnames);


/***/ }),

/***/ "./packages/color-signal/build-module/filters/with-color-signal-edit-custom-props.js":
/*!*******************************************************************************************!*\
  !*** ./packages/color-signal/build-module/filters/with-color-signal-edit-custom-props.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__);




var withColorSignalEditCustomProps = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var _supports$novaBlocks;

    var supports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["useSupports"])(props.name);
    var attributes = props.attributes;
    var emphasisArea = attributes.emphasisArea;
    var style = props.style ? props.style : {};

    if (!!(supports !== null && supports !== void 0 && (_supports$novaBlocks = supports.novaBlocks) !== null && _supports$novaBlocks !== void 0 && _supports$novaBlocks.colorSignal)) {
      var colorSignal = {
        '--nb-emphasis-area': emphasisArea
      };
      Object.assign(style, colorSignal);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      style: style
    }));
  };
}, "withColorSignalEditCustomProps");
/* harmony default export */ __webpack_exports__["default"] = (withColorSignalEditCustomProps);


/***/ }),

/***/ "./packages/color-signal/build-module/filters/with-color-signal-save-classnames.js":
/*!*****************************************************************************************!*\
  !*** ./packages/color-signal/build-module/filters/with-color-signal-save-classnames.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./packages/color-signal/build-module/utils/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var withColorSignalSaveClassnames = function withColorSignalSaveClassnames(extraProps, blockType, attributes) {
  var supports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__["getSupports"])(blockType.name);
  var newClassnames = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getColorSignalClassnames"])(attributes, supports);
  return _objectSpread(_objectSpread({}, extraProps), {}, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(extraProps.className, newClassnames)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (withColorSignalSaveClassnames);


/***/ }),

/***/ "./packages/color-signal/build-module/filters/with-color-signal-save-custom-props.js":
/*!*******************************************************************************************!*\
  !*** ./packages/color-signal/build-module/filters/with-color-signal-save-custom-props.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var withColorSignalSaveCustomProps = function withColorSignalSaveCustomProps(element, blockType, attributes) {
  var _supports$novaBlocks, _element$props;

  var supports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__["getSupports"])(blockType.name);

  if (!element || !(supports !== null && supports !== void 0 && (_supports$novaBlocks = supports.novaBlocks) !== null && _supports$novaBlocks !== void 0 && _supports$novaBlocks.spaceAndSizing)) {
    return element;
  }

  var emphasisArea = attributes.emphasisArea;
  return Object.assign({}, element, {
    props: _objectSpread(_objectSpread({}, element.props), {}, {
      style: _objectSpread(_objectSpread({}, (_element$props = element.props) === null || _element$props === void 0 ? void 0 : _element$props.style), {}, {
        '--nb-emphasis-area': emphasisArea
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (withColorSignalSaveCustomProps);


/***/ }),

/***/ "./packages/color-signal/build-module/filters/with-color-signal-save-data-attributes.js":
/*!**********************************************************************************************!*\
  !*** ./packages/color-signal/build-module/filters/with-color-signal-save-data-attributes.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var withColorSignalSaveDataAttributes = function withColorSignalSaveDataAttributes(element, blockType, attributes) {
  var _supports$novaBlocks;

  var supports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__["getSupports"])(blockType.name);

  if (!element || !(supports !== null && supports !== void 0 && (_supports$novaBlocks = supports.novaBlocks) !== null && _supports$novaBlocks !== void 0 && _supports$novaBlocks.colorSignal)) {
    return element;
  }

  var newProps = {
    'data-palette': attributes === null || attributes === void 0 ? void 0 : attributes.palette,
    'data-palette-variation': attributes === null || attributes === void 0 ? void 0 : attributes.paletteVariation,
    'data-color-signal': attributes === null || attributes === void 0 ? void 0 : attributes.colorSignal
  };

  if (attributes.useSourceColorAsReference) {
    Object.assign(newProps, {
      'data-use-source-color-as-reference': attributes === null || attributes === void 0 ? void 0 : attributes.useSourceColorAsReference
    });
  }

  return Object.assign({}, element, {
    props: _objectSpread(_objectSpread({}, element === null || element === void 0 ? void 0 : element.props), newProps)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (withColorSignalSaveDataAttributes);


/***/ }),

/***/ "./packages/color-signal/build-module/index.js":
/*!*****************************************************!*\
  !*** ./packages/color-signal/build-module/index.js ***!
  \*****************************************************/
/*! exports provided: getColorSignalClassnames, getCurrentPaletteConfig, mapPalettesToColorPalette, getSiteColorVariation, getPaletteConfig, getAbsoluteColorVariation, getVariationFromSignal, getSignalRelativeToVariation, getSignalOptionsFromVariation, computeColorSignal, getSourceIndexFromPaletteId, addSiteVariationOffset, removeSiteVariationOffset, normalizeVariationValue, getMaxSignal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _update_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-blocks */ "./packages/color-signal/build-module/update-blocks.js");
/* harmony import */ var _editor_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor/utils */ "./packages/color-signal/build-module/editor/utils.js");
/* harmony import */ var _filters_with_color_signal_attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters/with-color-signal-attributes */ "./packages/color-signal/build-module/filters/with-color-signal-attributes.js");
/* harmony import */ var _filters_with_color_signal_deprecated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters/with-color-signal-deprecated */ "./packages/color-signal/build-module/filters/with-color-signal-deprecated.js");
/* harmony import */ var _filters_with_color_signal_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filters/with-color-signal-controls */ "./packages/color-signal/build-module/filters/with-color-signal-controls.js");
/* harmony import */ var _filters_with_color_signal_edit_classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filters/with-color-signal-edit-classnames */ "./packages/color-signal/build-module/filters/with-color-signal-edit-classnames.js");
/* harmony import */ var _filters_with_color_signal_save_classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filters/with-color-signal-save-classnames */ "./packages/color-signal/build-module/filters/with-color-signal-save-classnames.js");
/* harmony import */ var _filters_with_color_signal_save_data_attributes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filters/with-color-signal-save-data-attributes */ "./packages/color-signal/build-module/filters/with-color-signal-save-data-attributes.js");
/* harmony import */ var _filters_with_color_signal_edit_custom_props__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filters/with-color-signal-edit-custom-props */ "./packages/color-signal/build-module/filters/with-color-signal-edit-custom-props.js");
/* harmony import */ var _filters_with_color_signal_save_custom_props__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filters/with-color-signal-save-custom-props */ "./packages/color-signal/build-module/filters/with-color-signal-save-custom-props.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils */ "./packages/color-signal/build-module/utils/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColorSignalClassnames", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["getColorSignalClassnames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentPaletteConfig", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["getCurrentPaletteConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapPalettesToColorPalette", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["mapPalettesToColorPalette"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSiteColorVariation", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["getSiteColorVariation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPaletteConfig", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["getPaletteConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAbsoluteColorVariation", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["getAbsoluteColorVariation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVariationFromSignal", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["getVariationFromSignal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSignalRelativeToVariation", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["getSignalRelativeToVariation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSignalOptionsFromVariation", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["getSignalOptionsFromVariation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeColorSignal", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["computeColorSignal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSourceIndexFromPaletteId", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["getSourceIndexFromPaletteId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addSiteVariationOffset", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["addSiteVariationOffset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeSiteVariationOffset", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["removeSiteVariationOffset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeVariationValue", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["normalizeVariationValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMaxSignal", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["getMaxSignal"]; });















Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["addFilter"])('blocks.registerBlockType', 'novablocks/with-color-signal-attributes', _filters_with_color_signal_attributes__WEBPACK_IMPORTED_MODULE_5__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["addFilter"])('blocks.registerBlockType', 'novablocks/with-color-signal-deprecated', _filters_with_color_signal_deprecated__WEBPACK_IMPORTED_MODULE_6__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["addFilter"])('editor.BlockEdit', 'novablocks/with-color-signal-controls', _filters_with_color_signal_controls__WEBPACK_IMPORTED_MODULE_7__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["addFilter"])('editor.BlockEdit', 'novablocks/with-color-signal-edit-custom-props', _filters_with_color_signal_edit_custom_props__WEBPACK_IMPORTED_MODULE_11__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["addFilter"])('editor.BlockListBlock', 'novablocks/with-color-signal-edit-classnames', _filters_with_color_signal_edit_classnames__WEBPACK_IMPORTED_MODULE_8__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["addFilter"])('blocks.getSaveContent.extraProps', 'novablocks/with-color-signal-save-classnames', _filters_with_color_signal_save_classnames__WEBPACK_IMPORTED_MODULE_9__["default"], 1);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["addFilter"])('blocks.getSaveElement', 'novablocks/add-color-signal-data-to-save-element', _filters_with_color_signal_save_data_attributes__WEBPACK_IMPORTED_MODULE_10__["default"], 1);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["addFilter"])('blocks.getSaveElement', 'novablocks/with-color-signal-save-custom-props', _filters_with_color_signal_save_custom_props__WEBPACK_IMPORTED_MODULE_12__["default"]);

var withUpdatedAttributes = function withUpdatedAttributes(BlockEdit) {
  return function (props) {
    var _supports$novaBlocks, _supports$novaBlocks$;

    var attributes = props.attributes,
        setAttributes = props.setAttributes,
        clientId = props.clientId;
    var supports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__["useSupports"])(props.name);
    var stickySourceColor = (supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks = supports.novaBlocks) === null || _supports$novaBlocks === void 0 ? void 0 : (_supports$novaBlocks$ = _supports$novaBlocks.colorSignal) === null || _supports$novaBlocks$ === void 0 ? void 0 : _supports$novaBlocks$.stickySourceColor) !== false;
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      var _supports$novaBlocks2;

      if (supports !== null && supports !== void 0 && (_supports$novaBlocks2 = supports.novaBlocks) !== null && _supports$novaBlocks2 !== void 0 && _supports$novaBlocks2.colorSignal) {
        var updatedAttributes = Object(_editor_utils__WEBPACK_IMPORTED_MODULE_4__["getUpdatedAttributes"])(attributes, clientId, {}, stickySourceColor);
        setAttributes(updatedAttributes);
      }
    }, []);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
  };
};

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["addFilter"])('editor.BlockEdit', 'novablocks/with-updated-attributes', withUpdatedAttributes);



/***/ }),

/***/ "./packages/color-signal/build-module/update-blocks.js":
/*!*************************************************************!*\
  !*** ./packages/color-signal/build-module/update-blocks.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor/utils */ "./packages/color-signal/build-module/editor/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./packages/color-signal/build-module/utils/index.js");





(function () {
  var editor = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["select"])('core/block-editor');

  if (!editor) {
    return;
  }

  var getBlockList = function getBlockList() {
    return editor.getBlocks();
  };

  var blockList = getBlockList();
  /**
   * Subscribe to any changes to the block list in order to update each block's final palette variation value
   * based on their and their parent's colorSignal attribute value
   */

  Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["subscribe"])(function () {
    var newBlockList = getBlockList();
    var blockListChanged = newBlockList !== blockList;
    blockList = newBlockList; // @todo create some sort of caching for blocks inside template parts
    //    if ( blockListChanged ) {
    // You can trigger here any behavior when the block list in the post changes.

    blockList.forEach(function (block) {
      updateBlock(block);
    }); //    }
  });
})();
/**
 * Update block's paletteVariation attribute value based on their and their parent's colorSignal attribute value
 * @param block props of the block that we intend to change the variation for
 */


var updateBlock = function updateBlock(block) {
  var _supports$novaBlocks;

  var supports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__["getSupports"])(block.name);

  if (supports !== null && supports !== void 0 && (_supports$novaBlocks = supports.novaBlocks) !== null && _supports$novaBlocks !== void 0 && _supports$novaBlocks.colorSignal) {
    var _window$styleManager;

    var _dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["dispatch"])('core/block-editor'),
        updateBlockAttributes = _dispatch.updateBlockAttributes;

    var attributes = block.attributes,
        clientId = block.clientId;
    var colorSignal = attributes.colorSignal,
        paletteVariation = attributes.paletteVariation,
        useSourceColorAsReference = attributes.useSourceColorAsReference;
    var config = ((_window$styleManager = window.styleManager) === null || _window$styleManager === void 0 ? void 0 : _window$styleManager.colorsConfig) || []; // make sure we're using an actual palette

    var palette = function () {
      var palette = config.find(function (palette) {
        return "".concat(palette.id) === "".concat(attributes.palette);
      });

      if (!palette) {
        return 1;
      }

      return palette.id;
    }();

    var _select = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["select"])('core/block-editor'),
        getBlockParents = _select.getBlockParents,
        getBlock = _select.getBlock;

    var parents = getBlockParents(clientId).slice();

    if (typeof colorSignal === "undefined" || typeof paletteVariation === "undefined") {
      return false;
    } // @todo maybe find closest parent with colorSignal support


    if (parents.length) {
      var _parentSupports$novaB;

      var parentClientId = parents.pop();
      var parentBlock = getBlock(parentClientId);
      var parentSupports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__["getSupports"])(parentBlock.name); // @todo contentColorSignal should be part of the colorSignal config

      var parentColorSignalSupport = parentSupports === null || parentSupports === void 0 ? void 0 : (_parentSupports$novaB = parentSupports.novaBlocks) === null || _parentSupports$novaB === void 0 ? void 0 : _parentSupports$novaB.colorSignal;

      if (parentColorSignalSupport === true || parentColorSignalSupport !== null && parentColorSignalSupport !== void 0 && parentColorSignalSupport.contentColorSignal) {
        var _parentBlock$attribut = parentBlock.attributes,
            contentColorSignal = _parentBlock$attribut.contentColorSignal,
            contentPaletteVariation = _parentBlock$attribut.contentPaletteVariation; // @todo check if computed signal of contentPaletteVariation is the same as contentColorSignal

        if (paletteVariation !== contentPaletteVariation) {
          updateBlockAttributes(clientId, {
            colorSignal: contentColorSignal,
            paletteVariation: contentPaletteVariation,
            useSourceColorAsReference: false
          });
        }

        updateInnerBlocks(block);
        return false;
      }
    }

    var parentVariation = Object(_editor_utils__WEBPACK_IMPORTED_MODULE_2__["getParentVariation"])(clientId);
    var absoluteVariation = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getAbsoluteColorVariation"])(attributes);
    var nextVariation = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["computeColorSignal"])(parentVariation, colorSignal, palette, absoluteVariation);
    var nextColorSignal = useSourceColorAsReference ? Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getSignalRelativeToVariation"])(absoluteVariation, parentVariation, palette) : colorSignal;
    var finalVariation = useSourceColorAsReference ? 1 : Object(_utils__WEBPACK_IMPORTED_MODULE_3__["removeSiteVariationOffset"])(nextVariation); // dispatch new attributes only if the new paletteVariation value differs from the current one

    if (paletteVariation !== finalVariation || colorSignal !== nextColorSignal) {
      updateBlockAttributes(clientId, {
        colorSignal: nextColorSignal,
        paletteVariation: finalVariation
      });
    }
  }

  updateInnerBlocks(block);
};

var updateBlocks = function updateBlocks(blocks) {
  if (Array.isArray(blocks)) {
    blocks.forEach(function (block) {
      updateBlock(block);
    });
  }
};

var updateInnerBlocks = function updateInnerBlocks(block) {
  var _select2 = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["select"])('core/block-editor'),
      getBlocks = _select2.getBlocks; // recursively update all innerBlocks


  updateBlocks(block.innerBlocks);

  if ('core/template-part' === block.name) {
    updateBlocks(getBlocks(block.clientId));
  }
};


/***/ }),

/***/ "./packages/color-signal/build-module/utils/index.js":
/*!***********************************************************!*\
  !*** ./packages/color-signal/build-module/utils/index.js ***!
  \***********************************************************/
/*! exports provided: getColorSignalClassnames, getCurrentPaletteConfig, mapPalettesToColorPalette, getSiteColorVariation, getPaletteConfig, getAbsoluteColorVariation, getVariationFromSignal, getSignalRelativeToVariation, getSignalOptionsFromVariation, computeColorSignal, getSourceIndexFromPaletteId, addSiteVariationOffset, removeSiteVariationOffset, normalizeVariationValue, getMaxSignal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPaletteConfig", function() { return getCurrentPaletteConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapPalettesToColorPalette", function() { return mapPalettesToColorPalette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSiteColorVariation", function() { return getSiteColorVariation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaletteConfig", function() { return getPaletteConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAbsoluteColorVariation", function() { return getAbsoluteColorVariation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVariationFromSignal", function() { return getVariationFromSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSignalRelativeToVariation", function() { return getSignalRelativeToVariation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSignalOptionsFromVariation", function() { return getSignalOptionsFromVariation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeColorSignal", function() { return computeColorSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSourceIndexFromPaletteId", function() { return getSourceIndexFromPaletteId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSiteVariationOffset", function() { return addSiteVariationOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSiteVariationOffset", function() { return removeSiteVariationOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeVariationValue", function() { return normalizeVariationValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxSignal", function() { return getMaxSignal; });
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColorSignalClassnames", function() { return _novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getColorSignalClassnames"]; });


 // Helper function to get current Palette Config,
// and generate a default, if a palette does not exist.

var getCurrentPaletteConfig = function getCurrentPaletteConfig(props) {
  var attributes = props.attributes,
      settings = props.settings;
  var palette = attributes.palette;
  var palettes = settings.palettes;

  if (!Array.isArray(palettes) || !palettes.length) {
    return {
      sourceIndex: 6
    };
  }

  return palettes.find(function (paletteIterator) {
    return paletteIterator.id === palette;
  }) || palettes[0];
};
var mapPalettesToColorPalette = function mapPalettesToColorPalette(palette) {
  var colors = palette.colors,
      sourceIndex = palette.sourceIndex;
  return {
    name: palette.label,
    color: colors[sourceIndex].value
  };
};
var getSiteColorVariation = function () {
  var _window$parent, _window$parent$wp, _window$wp, _window, _window$styleManager;

  var api = ((_window$parent = window.parent) === null || _window$parent === void 0 ? void 0 : (_window$parent$wp = _window$parent.wp) === null || _window$parent$wp === void 0 ? void 0 : _window$parent$wp.customize) || ((_window$wp = window.wp) === null || _window$wp === void 0 ? void 0 : _window$wp.customize);
  var initialSiteVariation = ((_window = window) === null || _window === void 0 ? void 0 : (_window$styleManager = _window.styleManager) === null || _window$styleManager === void 0 ? void 0 : _window$styleManager.siteColorVariation) || 1;

  if (api) {
    api('sm_site_color_variation', function (setting) {
      setting.bind(function (newValue) {
        initialSiteVariation = parseInt(newValue, 10);
      });
    });
  }

  return function () {
    return initialSiteVariation;
  };
}();
var getPaletteConfig = function getPaletteConfig(palette) {
  var _window$styleManager2;

  var palettes = ((_window$styleManager2 = window.styleManager) === null || _window$styleManager2 === void 0 ? void 0 : _window$styleManager2.colorsConfig) || [];

  if (!Array.isArray(palettes) || !palettes.length) {
    return {
      sourceIndex: 6
    };
  }

  return palettes.find(function (paletteIterator) {
    return "".concat(paletteIterator.id) === "".concat(palette);
  }) || palettes[0];
};
/**
 * For a given set of attributes, return the absolute variation value
 * which can differ from the actual paletteVariation attribute value
 * when the useSourceColorAsReference attribute is set to true or Palette Basis Offset is different than 1
 * @param attributes
 * @returns {*}
 */

var getAbsoluteColorVariation = function getAbsoluteColorVariation(attributes) {
  var palette = attributes.palette,
      useSourceColorAsReference = attributes.useSourceColorAsReference;
  var paletteVariation = parseInt(attributes.paletteVariation, 10);
  var sourceIndex = getSourceIndexFromPaletteId(palette);
  var absoluteVariation = useSourceColorAsReference ? sourceIndex + 1 : paletteVariation;
  return addSiteVariationOffset(absoluteVariation);
};
var getVariationFromSignal = function getVariationFromSignal(signal, paletteId) {
  var signals = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getSignals"])(paletteId);
  var variation = signals[Math.min(signal, signals.length - 1)];
  return removeSiteVariationOffset(variation);
};
/**
 * Calculate what's the colorSignal generated by a variation for a given reference variation
 * @param compared the paletteVariation to be used
 * @param reference the block's parent variation or any given reference variation for that matter
 * @returns {*}
 */

var getSignalRelativeToVariation = function getSignalRelativeToVariation(compared, reference, paletteId) {
  var variationOptions = getSignalOptionsFromVariation(reference, paletteId);
  var signal = variationOptions.reduce(function (prev, curr, index, arr) {
    return Math.abs(curr - compared) < Math.abs(arr[prev] - compared) ? index : prev;
  }, 0);
  var palette = getPaletteConfig(paletteId);

  if (!palette.colors) {
    return signal;
  }

  var colors = palette.colors;

  if (Array.isArray(palette === null || palette === void 0 ? void 0 : palette.variations)) {
    colors = palette.variations.map(function (variation) {
      return variation.bg;
    });
  } // try to use signal 0 only when compared and reference are equal


  return colors[compared - 1] === colors[reference - 1] ? 0 : Math.max(1, signal);
};
/**
 * For a given reference value, returns an array containing the paletteVariation values generated
 * by every colorSignal value from 0 to 3
 * @param variation
 * @returns {*[]}
 */

var getSignalOptionsFromVariation = function getSignalOptionsFromVariation(variation, paletteId) {
  var variationOptions = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getSignals"])(paletteId);
  variationOptions.sort(function (variation1, variation2) {
    return Math.abs(variation - variation1) < Math.abs(variation - variation2) ? -1 : 1;
  });
  variationOptions[0] = variation;
  return variationOptions;
};
/**
 * For a given pair of a reference paletteVariation and a colorSignal value return a new paletteVariation value
 * If the signal between the reference and the current variation is the same as the passed colorSignal value
 * We return the current paletteVariation instead of calculating it again, since it's probably a value
 * intentionally chosen by the user.
 * @param reference the reference variation to compute the colorSignal on
 * @param colorSignal the desired colorSignal value
 * @param paletteVariation the block's current paletteVariation attribute's value
 * @returns {*}
 */

var computeColorSignal = function computeColorSignal(reference, colorSignal, paletteId) {
  var paletteVariation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var signalOptions = getSignalOptionsFromVariation(reference, paletteId);

  if (Number.isInteger(paletteVariation)) {
    var currentSignal = getSignalRelativeToVariation(paletteVariation, reference, paletteId);

    if (currentSignal === colorSignal) {
      return paletteVariation;
    }
  }

  var finalColorSignal = Math.min(signalOptions.length - 1, colorSignal);
  return signalOptions[finalColorSignal];
};
/**
 * Returns a palette's source color position after it has been shifted with the Palette Basis Offset option
 * @param palette
 * @returns {number}
 */

var getSourceIndexFromPaletteId = function getSourceIndexFromPaletteId(palette) {
  var paletteConfig = getPaletteConfig(palette);
  var siteVariation = getSiteColorVariation();
  var sourceIndex = paletteConfig.sourceIndex;
  return (sourceIndex - siteVariation + 1 + 12) % 12;
};
/**
 * Add the value of the Palette Basis Offset control to a variation to simplify calculations
 * @param variation
 * @returns {*}
 */

var addSiteVariationOffset = function addSiteVariationOffset(variation) {
  var siteVariation = getSiteColorVariation();
  return normalizeVariationValue(variation + siteVariation - 1);
};
/**
 * Remove the value of the Palette Basis Offset control, that was previously added to simplify calculations
 * @param variation
 * @returns {*}
 */

var removeSiteVariationOffset = function removeSiteVariationOffset(variation) {
  var siteVariation = getSiteColorVariation();
  return normalizeVariationValue(variation - siteVariation + 1);
};
var normalizeVariationValue = function normalizeVariationValue(value) {
  return (value + 11) % 12 + 1;
};
var getMaxSignal = function getMaxSignal(paletteId) {
  var signals = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getSignals"])(paletteId);
  return signals.length - 1;
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

/***/ "@novablocks/icons":
/*!***************************************!*\
  !*** external ["novablocks","icons"] ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["novablocks"]["icons"]; }());

/***/ }),

/***/ "@novablocks/utils":
/*!***************************************!*\
  !*** external ["novablocks","utils"] ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["novablocks"]["utils"]; }());

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

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

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

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