this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["mediaComposition"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/media-composition/build-module/index.js");
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

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
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
  return Constructor;
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

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
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

/***/ "./packages/media-composition/build-module/attributes.json":
/*!*****************************************************************!*\
  !*** ./packages/media-composition/build-module/attributes.json ***!
  \*****************************************************************/
/*! exports provided: images, stylePreset, sizeContrast, positionShift, elementsDistance, placementVariation, imageRotation, imageResizing, containerHeight, objectPosition, defaultsGenerated, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"images\":{\"type\":\"array\",\"default\":[],\"items\":{\"type\":\"object\"}},\"stylePreset\":{\"type\":\"string\",\"default\":\"the-cloud-atlas\"},\"sizeContrast\":{\"type\":\"number\",\"default\":0},\"positionShift\":{\"type\":\"number\",\"default\":0},\"elementsDistance\":{\"type\":\"number\",\"default\":20},\"placementVariation\":{\"type\":\"number\",\"default\":25},\"imageRotation\":{\"type\":\"number\",\"default\":0},\"imageResizing\":{\"type\":\"string\",\"default\":\"cropped\"},\"containerHeight\":{\"type\":\"number\",\"default\":50},\"objectPosition\":{\"type\":\"number\",\"default\":50},\"defaultsGenerated\":{\"type\":\"boolean\",\"default\":false}}");

/***/ }),

/***/ "./packages/media-composition/build-module/components/advanced-gallery-item-media.js":
/*!*******************************************************************************************!*\
  !*** ./packages/media-composition/build-module/components/advanced-gallery-item-media.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_shape_modeling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/shape-modeling */ "@novablocks/shape-modeling");
/* harmony import */ var _novablocks_shape_modeling__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_shape_modeling__WEBPACK_IMPORTED_MODULE_1__);




var AdvancedGalleryItemMedia = function AdvancedGalleryItemMedia(props) {
  var _image$sizes, _image$sizes$novabloc;

  var gridItem = props.gridItem;
  var image = gridItem === null || gridItem === void 0 ? void 0 : gridItem.image;
  var imageURL = (image === null || image === void 0 ? void 0 : (_image$sizes = image.sizes) === null || _image$sizes === void 0 ? void 0 : (_image$sizes$novabloc = _image$sizes.novablocks_medium) === null || _image$sizes$novabloc === void 0 ? void 0 : _image$sizes$novabloc.url) || (image === null || image === void 0 ? void 0 : image.url);
  var styles = gridItem.getImageStyle();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, image.type !== 'video' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    className: "novablocks-media-composition__image",
    src: imageURL,
    alt: image === null || image === void 0 ? void 0 : image.alt,
    style: styles
  }), image.type === 'video' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("video", {
    muted: true,
    autoPlay: true,
    loop: true,
    playsInline: true,
    className: "novablocks-media-composition__image",
    style: styles,
    src: image.url
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_novablocks_shape_modeling__WEBPACK_IMPORTED_MODULE_1__["withShapeModelingDecoration"])(AdvancedGalleryItemMedia));


/***/ }),

/***/ "./packages/media-composition/build-module/components/advanced-gallery-item.js":
/*!*************************************************************************************!*\
  !*** ./packages/media-composition/build-module/components/advanced-gallery-item.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./packages/media-composition/build-module/components/index.js");





var AdvancedGalleryItem = function AdvancedGalleryItem(props) {
  var gridItem = props.gridItem,
      attributes = props.attributes;
  var image = gridItem === null || gridItem === void 0 ? void 0 : gridItem.image;
  var imageCaption = image === null || image === void 0 ? void 0 : image.caption;
  var imageDescription = image === null || image === void 0 ? void 0 : image.description;

  if (!image) {
    return;
  }

  var _attributes$showDescr = attributes.showDescription,
      showDescription = _attributes$showDescr === void 0 ? false : _attributes$showDescr;
  var hasCaption = typeof imageCaption === 'string' && !!imageCaption;
  var hasDescription = typeof imageDescription === 'string' && !!imageDescription;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "novablocks-media-composition__grid-item",
    style: gridItem.getStyle()
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "novablocks-media-composition__grid-item-media"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["AdvancedGalleryItemMedia"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    seedOffset: props === null || props === void 0 ? void 0 : props.index
  }))), showDescription && (hasCaption || hasDescription) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "novablocks-media-composition__grid-item-info"
  }, hasCaption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "novablocks-media-composition__grid-item-caption",
    dangerouslySetInnerHTML: {
      __html: imageCaption
    }
  }), Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(hasDescription) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "novablocks-media-composition__grid-item-description",
    dangerouslySetInnerHTML: {
      __html: imageDescription
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AdvancedGalleryItem);


/***/ }),

/***/ "./packages/media-composition/build-module/components/index.js":
/*!*********************************************************************!*\
  !*** ./packages/media-composition/build-module/components/index.js ***!
  \*********************************************************************/
/*! exports provided: AdvancedGalleryItemMedia, AdvancedGalleryItem, MediaCompositionPlaceholder, MediaCompositionPreview, MediaComposition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _advanced_gallery_item_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advanced-gallery-item-media */ "./packages/media-composition/build-module/components/advanced-gallery-item-media.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdvancedGalleryItemMedia", function() { return _advanced_gallery_item_media__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _advanced_gallery_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advanced-gallery-item */ "./packages/media-composition/build-module/components/advanced-gallery-item.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdvancedGalleryItem", function() { return _advanced_gallery_item__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _media_composition_placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media-composition-placeholder */ "./packages/media-composition/build-module/components/media-composition-placeholder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaCompositionPlaceholder", function() { return _media_composition_placeholder__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _media_composition_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media-composition-preview */ "./packages/media-composition/build-module/components/media-composition-preview.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaCompositionPreview", function() { return _media_composition_preview__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _media_composition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media-composition */ "./packages/media-composition/build-module/components/media-composition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaComposition", function() { return _media_composition__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./packages/media-composition/build-module/components/media-composition-placeholder.js":
/*!*********************************************************************************************!*\
  !*** ./packages/media-composition/build-module/components/media-composition-placeholder.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



var MediaCompositionPlaceholder = function MediaCompositionPlaceholder(props) {
  var attributes = props.attributes,
      onSelectImages = props.onSelectImages;
  var gallery = attributes === null || attributes === void 0 ? void 0 : attributes.images;

  if (!!gallery && !!gallery.length) {
    return false;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaPlaceholder"], {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["BlockIcon"], {
      icon: "format-gallery"
    }),
    allowedTypes: ['image', 'video'],
    multiple: true,
    onSelect: onSelectImages
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MediaCompositionPlaceholder);


/***/ }),

/***/ "./packages/media-composition/build-module/components/media-composition-preview.js":
/*!*****************************************************************************************!*\
  !*** ./packages/media-composition/build-module/components/media-composition-preview.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index */ "./packages/media-composition/build-module/components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./packages/media-composition/build-module/utils/index.js");










var MediaCompositionPreview = function MediaCompositionPreview(props) {
  var attributes = props.attributes,
      onSelectImages = props.onSelectImages;
  var gallery = (attributes === null || attributes === void 0 ? void 0 : attributes.images) || [];
  var galleryValue = gallery.map(function (image) {
    return image.id;
  });

  if (!gallery || !gallery.length) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_6__["MediaCompositionPlaceholder"], props);
  }

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var ref = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setHeight(!!ref.current ? ref.current.clientHeight : 0);
  });
  var gridItemsCollection = new _utils__WEBPACK_IMPORTED_MODULE_7__["GridItemCollection"](gallery, attributes);
  var gridStyle = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getMediaCompositionCSSProps"])(attributes);

  if (!!_novablocks_utils__WEBPACK_IMPORTED_MODULE_5__["isSafari"]) {
    Object.assign(gridStyle, {
      height: height
    });
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["MediaUpload"], {
    gallery: true,
    allowedTypes: ['image', 'video'],
    multiple: true,
    onSelect: onSelectImages,
    value: galleryValue,
    render: function render(_ref) {
      var open = _ref.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        className: 'novablocks-media-composition',
        ref: ref
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        className: "novablocks-media-composition__media-edit novablocks-change-media-overlay",
        onClick: open
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Change Media', 'nova-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        className: "novablocks-media-composition__grid",
        style: gridStyle
      }, gridItemsCollection.gridItems.map(function (item, index) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_6__["AdvancedGalleryItem"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          gridItem: item,
          key: 'gallery_item_' + index,
          index: index
        }, props));
      })));
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MediaCompositionPreview);


/***/ }),

/***/ "./packages/media-composition/build-module/components/media-composition.js":
/*!*********************************************************************************!*\
  !*** ./packages/media-composition/build-module/components/media-composition.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./packages/media-composition/build-module/components/index.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controls */ "./packages/media-composition/build-module/controls/index.js");





var MediaComposition = function MediaComposition(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_1__["MediaCompositionPreview"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_2__["BlockControls"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_2__["MediaCompositionSection"], props));
};

/* harmony default export */ __webpack_exports__["default"] = (MediaComposition);


/***/ }),

/***/ "./packages/media-composition/build-module/controls/block-controls.js":
/*!****************************************************************************!*\
  !*** ./packages/media-composition/build-module/controls/block-controls.js ***!
  \****************************************************************************/
/*! exports provided: AdvancedGalleryChangeMediaToolbar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedGalleryChangeMediaToolbar", function() { return AdvancedGalleryChangeMediaToolbar; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__);





var ALLOWED_MEDIA_TYPES = ['image', 'video'];
var AdvancedGalleryChangeMediaToolbar = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__["withVisibility"])('media-composition-block-controls')(function (props) {
  var onSelectImages = props.onSelectImages,
      attributes = props.attributes,
      context = props.context; // If the parent block is in a Query Loop block, we don't want to control the media manually.

  var queryId = (context === null || context === void 0 ? void 0 : context.queryId) || false;
  var isDescendentOfQueryLoop = Number.isFinite(queryId);

  if (isDescendentOfQueryLoop) {
    return null;
  }

  var gallery = (attributes === null || attributes === void 0 ? void 0 : attributes.images) || [];
  var galleryValue = gallery.map(function (image) {
    return image.id;
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToolbarGroup"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Media', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    position: "bottom right",
    contentClassName: "block-editor-media-replace-flow__options",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
          onToggle = _ref.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToolbarButton"], {
        onClick: onToggle,
        "aria-expanded": isOpen
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Change Media', 'nova-blocks'));
    },
    renderContent: function renderContent(_ref2) {
      var onClose = _ref2.onClose;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["NavigableMenu"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
        gallery: true,
        allowedTypes: ALLOWED_MEDIA_TYPES,
        multiple: true,
        value: galleryValue,
        onSelect: onSelectImages,
        render: function render(_ref3) {
          var open = _ref3.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
            onClick: open
          }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Edit Gallery', 'nova-blocks'));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
        allowedTypes: ALLOWED_MEDIA_TYPES,
        multiple: true,
        value: galleryValue,
        onSelect: onSelectImages,
        render: function render(_ref4) {
          var open = _ref4.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
            onClick: open
          }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add Video', 'nova-blocks'));
        }
      }));
    }
  }));
});

var AdvancedGalleryBlockControls = function AdvancedGalleryBlockControls(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AdvancedGalleryChangeMediaToolbar, props));
};

/* harmony default export */ __webpack_exports__["default"] = (AdvancedGalleryBlockControls);


/***/ }),

/***/ "./packages/media-composition/build-module/controls/index.js":
/*!*******************************************************************!*\
  !*** ./packages/media-composition/build-module/controls/index.js ***!
  \*******************************************************************/
/*! exports provided: BlockControls, MediaCompositionSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-controls */ "./packages/media-composition/build-module/controls/block-controls.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockControls", function() { return _block_controls__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _media_composition_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-composition-section */ "./packages/media-composition/build-module/controls/media-composition-section.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaCompositionSection", function() { return _media_composition_section__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./packages/media-composition/build-module/controls/media-composition-section.js":
/*!***************************************************************************************!*\
  !*** ./packages/media-composition/build-module/controls/media-composition-section.js ***!
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./packages/media-composition/build-module/utils/index.js");








var MediaCompositionControls = function MediaCompositionControls(props) {
  var clientId = props.clientId,
      setAttributes = props.setAttributes,
      attributes = props.attributes;
  var novablocksSettings = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__["useSettings"])();
  var sizeContrast = attributes.sizeContrast,
      positionShift = attributes.positionShift,
      elementsDistance = attributes.elementsDistance,
      placementVariation = attributes.placementVariation,
      imageResizing = attributes.imageResizing,
      objectPosition = attributes.objectPosition,
      imageRotation = attributes.imageRotation;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__["ControlsSection"], {
    id: 'media-composition',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Media Composition', 'nova-blocks'),
    group: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Card Anatomy', 'nova-blocks'),
    order: 15,
    key: clientId + '_media-composition-controls-section'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Presets', 'nova-blocks'),
    key: 'media_composition_presets'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__["Notice"], {
    key: 'advanced-gallery-quick-start',
    id: 'novablocks-media-composition-quick-start',
    content: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quick start:', 'nova-blocks')), " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Set up your gallery layout using the presets list below and use the Customize tab to fine-tune the details.', 'nova-blocks')),
    dismissLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('✔ Ok, I got it!', 'nova-blocks')
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__["PresetControl"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: 'advanced-gallery-style-preset',
    options: novablocksSettings.advancedGalleryPresetOptions,
    randomize: _utils__WEBPACK_IMPORTED_MODULE_5__["getRandomAttributes"]
  }, props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Customize', 'nova-blocks'),
    key: 'media_composition_customize'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    key: 'advanced-gallery-crop-style',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Images Crop Style', 'nova-blocks'),
    value: imageResizing === 'cropped' ? 2 : 1,
    onChange: function onChange(cropStyle) {
      setAttributes({
        imageResizing: cropStyle === 2 ? 'cropped' : 'original'
      });
    },
    min: 1,
    max: 2,
    step: 1
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Settings', 'nova-blocks'),
    key: 'media_composition_settings'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Gallery', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    key: 'advanced-gallery-size-contrast',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Size Contrast', 'nova-blocks'),
    value: sizeContrast,
    onChange: function onChange(sizeContrast) {
      return setAttributes({
        sizeContrast: sizeContrast
      });
    },
    min: 0,
    max: 100,
    step: 20
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    key: 'advanced-gallery-position-shift',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Position Shift', 'nova-blocks'),
    value: positionShift,
    onChange: function onChange(positionShift) {
      return setAttributes({
        positionShift: positionShift
      });
    },
    min: 0,
    max: 100,
    step: 5
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    key: 'advanced-gallery-elements-distance',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Elements Distance', 'nova-blocks'),
    value: elementsDistance,
    onChange: function onChange(elementsDistance) {
      return setAttributes({
        elementsDistance: elementsDistance
      });
    },
    min: 0,
    max: 100,
    step: 20
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    key: 'advanced-gallery-placement-variation',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Placement Variation', 'nova-blocks'),
    value: placementVariation,
    onChange: function onChange(placementVariation) {
      return setAttributes({
        placementVariation: placementVariation
      });
    },
    min: 25,
    max: 100,
    step: 25
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    key: 'advanced-gallery-image-rotation',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image Rotation', 'nova-blocks'),
    value: imageRotation,
    onChange: function onChange(imageRotation) {
      return setAttributes({
        imageRotation: imageRotation
      });
    },
    min: 0,
    max: 100,
    step: 10
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Display', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ImageResizingControls, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    key: 'advanced-gallery-image-position',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image Position', 'nova-blocks'),
    value: objectPosition,
    onChange: function onChange(objectPosition) {
      return setAttributes({
        objectPosition: objectPosition
      });
    },
    min: 0,
    max: 100,
    step: 10
  }))));
};

var ImageResizingControls = function ImageResizingControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      name = props.name;
  var containerHeight = attributes.containerHeight,
      imageResizing = attributes.imageResizing;
  var disabledForBlocks = ['novablocks/supernova', 'novablocks/supernova-item'];

  if (disabledForBlocks.includes(name)) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    key: 'advanced-gallery-media-aspect-ratio',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Media Aspect Ratio', 'nova-blocks'),
    value: containerHeight,
    onChange: function onChange(containerHeight) {
      return setAttributes({
        containerHeight: containerHeight
      });
    },
    min: 0,
    max: 100,
    step: 5
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RadioControl"], {
    key: 'advanced-gallery-image-resizing',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image Resizing', 'nova-blocks'),
    selected: imageResizing,
    onChange: function onChange(imageResizing) {
      return setAttributes({
        imageResizing: imageResizing
      });
    },
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Stretch to fill the container', 'nova-blocks'),
      value: 'cropped'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Shrink to fit (no crop)', 'nova-blocks'),
      value: 'original'
    }]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__["withVisibility"])('media-composition-section')(MediaCompositionControls));


/***/ }),

/***/ "./packages/media-composition/build-module/filters/with-media-composition-attributes.js":
/*!**********************************************************************************************!*\
  !*** ./packages/media-composition/build-module/filters/with-media-composition-attributes.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attributes */ "./packages/media-composition/build-module/attributes.json");
var _attributes__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../attributes */ "./packages/media-composition/build-module/attributes.json", 1);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



function withMediaCompositionAttributes(settings) {
  var _settings$supports, _settings$supports$no;

  var mediaCompositionSupport = settings === null || settings === void 0 ? void 0 : (_settings$supports = settings.supports) === null || _settings$supports === void 0 ? void 0 : (_settings$supports$no = _settings$supports.novaBlocks) === null || _settings$supports$no === void 0 ? void 0 : _settings$supports$no.mediaComposition;

  if (mediaCompositionSupport !== true && (mediaCompositionSupport === null || mediaCompositionSupport === void 0 ? void 0 : mediaCompositionSupport.attributes) !== true) {
    return settings;
  }

  return _objectSpread(_objectSpread({}, settings), {}, {
    attributes: _objectSpread(_objectSpread({}, settings.attributes), _attributes__WEBPACK_IMPORTED_MODULE_1__)
  });
}

/* harmony default export */ __webpack_exports__["default"] = (withMediaCompositionAttributes);


/***/ }),

/***/ "./packages/media-composition/build-module/filters/with-media-composition-block-controls.js":
/*!**************************************************************************************************!*\
  !*** ./packages/media-composition/build-module/filters/with-media-composition-block-controls.js ***!
  \**************************************************************************************************/
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
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controls */ "./packages/media-composition/build-module/controls/index.js");





var withMediaCompositionControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var _supports$novaBlocks, _supports$novaBlocks2, _supports$novaBlocks3;

    var supports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__["useSupports"])(props.name);

    if ((supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks = supports.novaBlocks) === null || _supports$novaBlocks === void 0 ? void 0 : _supports$novaBlocks.mediaComposition) !== true && (supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks2 = supports.novaBlocks) === null || _supports$novaBlocks2 === void 0 ? void 0 : (_supports$novaBlocks3 = _supports$novaBlocks2.mediaComposition) === null || _supports$novaBlocks3 === void 0 ? void 0 : _supports$novaBlocks3.blockControls) !== true) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_3__["BlockControls"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props));
  };
}, 'withMediaCompositionControls');
/* harmony default export */ __webpack_exports__["default"] = (withMediaCompositionControls);


/***/ }),

/***/ "./packages/media-composition/build-module/filters/with-media-composition-controls.js":
/*!********************************************************************************************!*\
  !*** ./packages/media-composition/build-module/filters/with-media-composition-controls.js ***!
  \********************************************************************************************/
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
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controls */ "./packages/media-composition/build-module/controls/index.js");





var withMediaCompositionControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var _supports$novaBlocks, _supports$novaBlocks2, _supports$novaBlocks3;

    var supports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__["useSupports"])(props.name);

    if ((supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks = supports.novaBlocks) === null || _supports$novaBlocks === void 0 ? void 0 : _supports$novaBlocks.mediaComposition) !== true && (supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks2 = supports.novaBlocks) === null || _supports$novaBlocks2 === void 0 ? void 0 : (_supports$novaBlocks3 = _supports$novaBlocks2.mediaComposition) === null || _supports$novaBlocks3 === void 0 ? void 0 : _supports$novaBlocks3.controls) !== true) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_3__["MediaCompositionSection"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props));
  };
}, 'withMediaCompositionControls');
/* harmony default export */ __webpack_exports__["default"] = (withMediaCompositionControls);


/***/ }),

/***/ "./packages/media-composition/build-module/filters/with-media-composition-edit-custom-props.js":
/*!*****************************************************************************************************!*\
  !*** ./packages/media-composition/build-module/filters/with-media-composition-edit-custom-props.js ***!
  \*****************************************************************************************************/
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./packages/media-composition/build-module/utils/index.js");





var withMediaCompositionEditCustomProps = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var _supports$novaBlocks;

    var supports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["useSupports"])(props.name);
    var attributes = props.attributes;
    var style = props.style ? props.style : {};

    if (!!(supports !== null && supports !== void 0 && (_supports$novaBlocks = supports.novaBlocks) !== null && _supports$novaBlocks !== void 0 && _supports$novaBlocks.mediaComposition)) {
      Object.assign(style, Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getMediaCompositionCSSProps"])(attributes));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      style: style
    }));
  };
}, "withMediaCompositionEditCustomProps");
/* harmony default export */ __webpack_exports__["default"] = (withMediaCompositionEditCustomProps);


/***/ }),

/***/ "./packages/media-composition/build-module/index.js":
/*!**********************************************************!*\
  !*** ./packages/media-composition/build-module/index.js ***!
  \**********************************************************/
/*! exports provided: BlockControls, MediaCompositionSection, AdvancedGalleryItemMedia, AdvancedGalleryItem, MediaCompositionPlaceholder, MediaCompositionPreview, MediaComposition, GridItemCollection, GridItem, getRandomAttributes, getMediaCompositionCSSProps, safariHeightFix, attributes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./packages/media-composition/build-module/attributes.json");
var _attributes__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./attributes */ "./packages/media-composition/build-module/attributes.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return _attributes__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ "./packages/media-composition/build-module/controls/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockControls", function() { return _controls__WEBPACK_IMPORTED_MODULE_2__["BlockControls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaCompositionSection", function() { return _controls__WEBPACK_IMPORTED_MODULE_2__["MediaCompositionSection"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./packages/media-composition/build-module/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdvancedGalleryItemMedia", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["AdvancedGalleryItemMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdvancedGalleryItem", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["AdvancedGalleryItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaCompositionPlaceholder", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["MediaCompositionPlaceholder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaCompositionPreview", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["MediaCompositionPreview"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaComposition", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["MediaComposition"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./packages/media-composition/build-module/utils/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridItemCollection", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["GridItemCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridItem", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["GridItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRandomAttributes", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["getRandomAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMediaCompositionCSSProps", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["getMediaCompositionCSSProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safariHeightFix", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["safariHeightFix"]; });

/* harmony import */ var _filters_with_media_composition_attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters/with-media-composition-attributes */ "./packages/media-composition/build-module/filters/with-media-composition-attributes.js");
/* harmony import */ var _filters_with_media_composition_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters/with-media-composition-controls */ "./packages/media-composition/build-module/filters/with-media-composition-controls.js");
/* harmony import */ var _filters_with_media_composition_block_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filters/with-media-composition-block-controls */ "./packages/media-composition/build-module/filters/with-media-composition-block-controls.js");
/* harmony import */ var _filters_with_media_composition_edit_custom_props__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filters/with-media-composition-edit-custom-props */ "./packages/media-composition/build-module/filters/with-media-composition-edit-custom-props.js");








Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('blocks.registerBlockType', 'novablocks/with-media-composition-attributes', _filters_with_media_composition_attributes__WEBPACK_IMPORTED_MODULE_5__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('editor.BlockEdit', 'novablocks/with-media-composition-controls', _filters_with_media_composition_controls__WEBPACK_IMPORTED_MODULE_6__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('editor.BlockEdit', 'novablocks/with-media-composition-block-controls', _filters_with_media_composition_block_controls__WEBPACK_IMPORTED_MODULE_7__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('editor.BlockEdit', 'novablocks/with-media-composition-edit-custom-props', _filters_with_media_composition_edit_custom_props__WEBPACK_IMPORTED_MODULE_8__["default"]);



/* harmony default export */ __webpack_exports__["default"] = (_components__WEBPACK_IMPORTED_MODULE_3__["MediaComposition"]);


/***/ }),

/***/ "./packages/media-composition/build-module/utils/grid-item.js":
/*!********************************************************************!*\
  !*** ./packages/media-composition/build-module/utils/grid-item.js ***!
  \********************************************************************/
/*! exports provided: GridItemCollection, GridItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridItemCollection", function() { return GridItemCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridItem", function() { return GridItem; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var GRID_ITEM_SIZE = 20;
var GridItemCollection = /*#__PURE__*/function () {
  function GridItemCollection(images, attributes) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GridItemCollection);

    var placementVariation = attributes.placementVariation / 25 - 1;
    this.gridItems = images.map(function (image, index) {
      var groupStart = Math.floor(index / 4) * 4;
      var groupEnd = Math.min(groupStart + 4, images.length);
      var isGroupOfThree = groupEnd - groupStart === 3;
      return new GridItem(image, index, attributes, isGroupOfThree);
    });
    this.removeExtra();

    if (placementVariation === 1 || placementVariation === 2) {
      this.flipX();
    }

    if (placementVariation === 2 || placementVariation === 3) {
      this.flipY();
    }
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(GridItemCollection, [{
    key: "removeExtra",
    value: function removeExtra() {
      var extraLeft = this.getExtraLeft();
      var extraTop = this.getExtraTop();
      var extraBetween = this.getExtraBetween();
      this.gridItems = this.gridItems.map(function (gridItem, index) {
        var groupIndex = Math.floor(index / 4);
        gridItem.x = gridItem.x - extraLeft;
        gridItem.y = gridItem.y - extraTop - groupIndex * extraBetween;
        return gridItem;
      });
    }
  }, {
    key: "flipX",
    value: function flipX() {
      var maxX = Math.max.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.gridItems.map(function (gridItem) {
        return gridItem.x + gridItem.width;
      })));
      this.gridItems = this.gridItems.map(function (gridItem, index) {
        gridItem.x = maxX - gridItem.x - gridItem.width + 1;
        return gridItem;
      });
    }
  }, {
    key: "flipY",
    value: function flipY() {
      var maxY = Math.max.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.gridItems.map(function (gridItem) {
        return gridItem.y + gridItem.height;
      })));
      this.gridItems = this.gridItems.map(function (gridItem, index) {
        gridItem.y = maxY - gridItem.y - gridItem.height + 1;
        return gridItem;
      });
    }
  }, {
    key: "getExtraLeft",
    value: function getExtraLeft() {
      return Math.min.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.gridItems.map(function (gridItem) {
        return gridItem.x;
      }))) - 1;
    }
  }, {
    key: "getExtraTop",
    value: function getExtraTop() {
      return Math.min.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.gridItems.map(function (gridItem) {
        return gridItem.y;
      }))) - 1;
    }
  }, {
    key: "getExtraBetween",
    value: function getExtraBetween() {
      var firstGroup = this.gridItems.slice(0, 4);
      var maxBottom = Math.max.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(firstGroup.map(function (gridItem) {
        return gridItem.y + gridItem.height;
      })));
      return GRID_ITEM_SIZE * 2 - maxBottom + 1;
    }
  }]);

  return GridItemCollection;
}();
var GridItem = /*#__PURE__*/function () {
  function GridItem(image, index, attributes, isGroupOfThree) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GridItem);

    this.sizeContrast = attributes.sizeContrast / 20;
    this.positionShift = attributes.positionShift / 5;
    this.objectPosition = attributes.objectPosition;
    this.imageResizing = attributes.imageResizing;
    this.imageRotation = attributes.imageRotation;
    this.image = image;
    this.index = index;
    this.idx = this.getIndex(index);
    this.col = this.idx % 2;
    this.row = Math.floor(index / 2);

    if (!!isGroupOfThree) {
      if (index === 0) {
        this.positionShift = Math.min(this.positionShift, 10);
      }

      if (index === 2) {
        this.positionShift = Math.max(this.positionShift, 10);
      }
    }

    var _this$getOffsets = this.getOffsets(),
        offsetX = _this$getOffsets.offsetX,
        offsetY = _this$getOffsets.offsetY;

    var size = GRID_ITEM_SIZE - this.sizeContrast * (index % 4);
    this.x = GRID_ITEM_SIZE * this.col + 1 + offsetX;
    this.y = GRID_ITEM_SIZE * this.row + 1 + offsetY;
    this.width = size;
    this.height = size;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(GridItem, [{
    key: "getOffsets",
    value: function getOffsets() {
      var row = this.row,
          col = this.col,
          index = this.index,
          sizeContrast = this.sizeContrast,
          positionShift = this.positionShift; // offset for positioning

      var offsetX = (1 - col % 2) * (index % 4) * sizeContrast;
      var offsetY = (1 - row % 2) * (index % 4) * sizeContrast; // offset from offset
      // move 1st to right

      offsetX += (1 - col % 2) * (1 - row % 2) * positionShift; // move 3rd to left

      offsetX -= col % 2 * (row % 2) * positionShift; // move 2nd down

      offsetY -= (1 - col % 2) * (row % 2) * positionShift; // move 4th up

      offsetY += col % 2 * (1 - row % 2) * positionShift;
      return {
        offsetX: offsetX,
        offsetY: offsetY
      };
    } // reoder to display items clockwise

  }, {
    key: "getIndex",
    value: function getIndex(index) {
      if (index % 4 === 3) return index - 1;
      if (index % 4 === 2) return index + 1;
      return index;
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var index = this.index,
          x = this.x,
          y = this.y,
          width = this.width,
          height = this.height,
          imageRotation = this.imageRotation;
      var rotation = "rotate(".concat((index % 2 - 0.5) * imageRotation / 10, "deg)");
      return {
        gridColumnStart: x + '',
        gridColumnEnd: "span ".concat(width),
        gridRowStart: y + '',
        gridRowEnd: "span ".concat(height),
        transform: rotation
      };
    }
  }, {
    key: "getImageStyle",
    value: function getImageStyle() {
      var row = this.row,
          col = this.col,
          objectPosition = this.objectPosition,
          imageResizing = this.imageResizing;
      var positionY = row % 2 === 0 ? 100 - objectPosition : objectPosition;
      var positionX = col % 2 === 0 ? 100 - objectPosition : objectPosition;
      return {
        objectFit: imageResizing === 'cropped' ? 'cover' : 'scale-down',
        objectPosition: "".concat(positionX, "% ").concat(positionY, "%")
      };
    }
  }]);

  return GridItem;
}();


/***/ }),

/***/ "./packages/media-composition/build-module/utils/index.js":
/*!****************************************************************!*\
  !*** ./packages/media-composition/build-module/utils/index.js ***!
  \****************************************************************/
/*! exports provided: GridItemCollection, GridItem, getRandomAttributes, getMediaCompositionCSSProps, safariHeightFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomAttributes", function() { return getRandomAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMediaCompositionCSSProps", function() { return getMediaCompositionCSSProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safariHeightFix", function() { return safariHeightFix; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grid_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid-item */ "./packages/media-composition/build-module/utils/grid-item.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridItemCollection", function() { return _grid_item__WEBPACK_IMPORTED_MODULE_2__["GridItemCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridItem", function() { return _grid_item__WEBPACK_IMPORTED_MODULE_2__["GridItem"]; });




var getRandomAttributes = function getRandomAttributes() {
  return {
    sizeContrast: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBetween"])(0, 5) * 20,
    positionShift: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBetween"])(0, 20) * 5,
    elementsDistance: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBetween"])(0, 5) * 20,
    placementVariation: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBetween"])(1, 4) * 25,
    stylePreset: 'just-my-style'
  };
};
var getMediaCompositionCSSProps = function getMediaCompositionCSSProps(attributes) {
  var elementsDistance = attributes.elementsDistance;
  return {
    '--nb-media-composition-gap': "".concat(elementsDistance, "px")
  };
};
var safariHeightFix = function safariHeightFix(grid) {
  if (!_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["isSafari"]) {
    return;
  }

  var parent = grid.parentNode;
  var $grid = jquery__WEBPACK_IMPORTED_MODULE_0___default()(grid);
  var $parent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent);

  var resetHeight = function resetHeight() {
    var newHeight = $parent.outerHeight();
    $grid.css('height', newHeight);
  };

  var debouncedResetHeight = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["debounce"])(resetHeight, 30);
  resetHeight();

  if (typeof window.ResizeObserver !== "undefined") {
    var observer = new window.ResizeObserver(function (entries) {
      debouncedResetHeight();
    });
    observer.observe(parent);
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
      debouncedResetHeight();
    });
  }
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

/***/ "@novablocks/shape-modeling":
/*!***********************************************!*\
  !*** external ["novablocks","shapeModeling"] ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["novablocks"]["shapeModeling"]; }());

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

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["jQuery"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map