this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["shapeModeling"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/shape-modeling/build-module/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/shape-modeling/build-module/components/index.js":
/*!******************************************************************!*\
  !*** ./packages/shape-modeling/build-module/components/index.js ***!
  \******************************************************************/
/*! exports provided: ShapeDebug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shape_debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape-debug */ "./packages/shape-modeling/build-module/components/shape-debug.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapeDebug", function() { return _shape_debug__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./packages/shape-modeling/build-module/components/shape-debug.js":
/*!************************************************************************!*\
  !*** ./packages/shape-modeling/build-module/components/shape-debug.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./packages/shape-modeling/build-module/utils/index.js");




var ShapeDebug = function ShapeDebug(attributes) {
  var points = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getPointsArray"])(attributes);
  var curvePoints = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getCurvePointsFromPoints"])(attributes);
  var bounds = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getBoundsFromCurves"])(curvePoints);
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["scalePoints"])(points, bounds);
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["scaleCurvePoints"])(curvePoints, bounds);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, points.map(function (point, index) {
    var nextPoint = points[(index + 1) % points.length];
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: 'point_' + index
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("line", {
      x1: point.x,
      y1: point.y,
      x2: nextPoint.x,
      y2: nextPoint.y,
      strokeWidth: "0.05",
      stroke: "black",
      strokeDasharray: "0.2",
      style: {
        strokeOpacity: .5
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("line", {
      x1: point.x,
      y1: point.y,
      x2: _utils__WEBPACK_IMPORTED_MODULE_1__["BLOB_RADIUS"],
      y2: _utils__WEBPACK_IMPORTED_MODULE_1__["BLOB_RADIUS"],
      strokeWidth: "0.05",
      stroke: "black",
      strokeDasharray: "0.2",
      style: {
        strokeOpacity: .5
      }
    }));
  }), curvePoints.map(function (_ref, index) {
    var x1 = _ref.x1,
        y1 = _ref.y1,
        x2 = _ref.x2,
        y2 = _ref.y2,
        m1x = _ref.m1x,
        m1y = _ref.m1y,
        m2x = _ref.m2x,
        m2y = _ref.m2y;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: 'curve_point1_' + index
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("line", {
      x1: m1x,
      y1: m1y,
      x2: x1,
      y2: y1,
      strokeWidth: "0.05",
      stroke: "black"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("line", {
      x1: m2x,
      y1: m2y,
      x2: x2,
      y2: y2,
      strokeWidth: "0.05",
      stroke: "black"
    }));
  }), curvePoints.map(function (_ref2, index) {
    var x1 = _ref2.x1,
        y1 = _ref2.y1,
        x2 = _ref2.x2,
        y2 = _ref2.y2,
        m1x = _ref2.m1x,
        m1y = _ref2.m1y,
        m2x = _ref2.m2x,
        m2y = _ref2.m2y;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: 'curve_point2_' + index
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      cx: x1,
      cy: y1,
      r: "0.2",
      stroke: "black",
      strokeWidth: "0.05",
      fill: "white"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      cx: x2,
      cy: y2,
      r: "0.2",
      stroke: "black",
      strokeWidth: "0.05",
      fill: "white"
    }));
  }), curvePoints.map(function (_ref3, index) {
    var x1 = _ref3.x1,
        y1 = _ref3.y1,
        x2 = _ref3.x2,
        y2 = _ref3.y2,
        m1x = _ref3.m1x,
        m1y = _ref3.m1y,
        m2x = _ref3.m2x,
        m2y = _ref3.m2y;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: 'curve_point3_' + index
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
      x: m1x - 0.2,
      y: m1y - 0.2,
      width: "0.4",
      height: "0.4",
      stroke: "black",
      strokeWidth: "0.05",
      fill: "yellow"
    }));
  }), curvePoints.map(function (_ref4, index) {
    var x1 = _ref4.x1,
        y1 = _ref4.y1,
        x2 = _ref4.x2,
        y2 = _ref4.y2,
        m1x = _ref4.m1x,
        m1y = _ref4.m1y,
        m2x = _ref4.m2x,
        m2y = _ref4.m2y;

    var _getBoundsOfCurve = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getBoundsOfCurve"])(m1x, m1y, x1, y1, x2, y2, m2x, m2y),
        top = _getBoundsOfCurve.top,
        right = _getBoundsOfCurve.right,
        bottom = _getBoundsOfCurve.bottom,
        left = _getBoundsOfCurve.left;

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: 'curve_point4_' + index
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("line", {
      x1: left,
      y1: top,
      x2: left,
      y2: bottom,
      strokeWidth: "0.05",
      stroke: "black",
      strokeDasharray: "0.2"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("line", {
      x1: right,
      y1: top,
      x2: right,
      y2: bottom,
      strokeWidth: "0.05",
      stroke: "black",
      strokeDasharray: "0.2"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("line", {
      x1: left,
      y1: top,
      x2: right,
      y2: top,
      strokeWidth: "0.05",
      stroke: "black",
      strokeDasharray: "0.2"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("line", {
      x1: left,
      y1: bottom,
      x2: right,
      y2: bottom,
      strokeWidth: "0.05",
      stroke: "black",
      strokeDasharray: "0.2"
    }));
  }), points.map(function (_ref5) {
    var x = _ref5.x,
        y = _ref5.y;
    return false;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      cx: x,
      cy: y,
      r: "0.2",
      stroke: "black",
      strokeWidth: "0.05",
      fill: "white"
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ShapeDebug);


/***/ }),

/***/ "./packages/shape-modeling/build-module/controls/index.js":
/*!****************************************************************!*\
  !*** ./packages/shape-modeling/build-module/controls/index.js ***!
  \****************************************************************/
/*! exports provided: ShapeModelingCustomizeTab, ShapeDebugControls, ShapePropsControls, ShapeScalingControls, ShapeSwapButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shape_modeling_customize_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape-modeling-customize-tab */ "./packages/shape-modeling/build-module/controls/shape-modeling-customize-tab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapeModelingCustomizeTab", function() { return _shape_modeling_customize_tab__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _shape_debug_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shape-debug-controls */ "./packages/shape-modeling/build-module/controls/shape-debug-controls.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapeDebugControls", function() { return _shape_debug_controls__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _shape_props_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shape-props-controls */ "./packages/shape-modeling/build-module/controls/shape-props-controls.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapePropsControls", function() { return _shape_props_controls__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _shape_scaling_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shape-scaling-controls */ "./packages/shape-modeling/build-module/controls/shape-scaling-controls.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapeScalingControls", function() { return _shape_scaling_controls__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _shape_swap_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shape-swap-button */ "./packages/shape-modeling/build-module/controls/shape-swap-button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapeSwapButton", function() { return _shape_swap_button__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./packages/shape-modeling/build-module/controls/shape-debug-controls.js":
/*!*******************************************************************************!*\
  !*** ./packages/shape-modeling/build-module/controls/shape-debug-controls.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





var DebugControls = function DebugControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      settings = props.settings;
  var enableShapeDebug = attributes.enableShapeDebug;

  if (!(settings !== null && settings !== void 0 && settings.debug)) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Debug', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enable Shape Debug', 'nova-blocks'),
    checked: enableShapeDebug,
    onChange: function onChange() {
      return setAttributes({
        enableShapeDebug: !enableShapeDebug
      });
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DebugControls);


/***/ }),

/***/ "./packages/shape-modeling/build-module/controls/shape-modeling-customize-tab.js":
/*!***************************************************************************************!*\
  !*** ./packages/shape-modeling/build-module/controls/shape-modeling-customize-tab.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/shape-modeling/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shape_swap_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shape-swap-button */ "./packages/shape-modeling/build-module/controls/shape-swap-button.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var shapeMixStyleOptions = [{
  label: 'None',
  value: 'none'
}, {
  label: 'Media Shape',
  value: 'shape-mask'
}, {
  label: 'Decorative Shape',
  value: 'mixing-1'
}, {
  label: 'Shape Mixing',
  value: 'mixing-2',
  attributes: {
    blobsEnableMask: true,
    blobsEnableDecoration: true,
    blobsHorizontalDisplacement: 30,
    blobsVerticalDisplacement: 50,
    blobsSizeBalance: 50
  }
}, {
  label: 'Shape Mixing ALT',
  value: 'mixing-3',
  attributes: {
    blobsEnableMask: true,
    blobsEnableDecoration: true,
    blobsHorizontalDisplacement: 70,
    blobsVerticalDisplacement: 50,
    blobsSizeBalance: 50
  }
}];

var getShapeStyleAttributes = function getShapeStyleAttributes(attributes) {
  var blobsMixStyle = attributes.blobsMixStyle;
  var newAttributes = attributes;

  if ('none' === blobsMixStyle) {
    newAttributes = {
      blobsEnableMask: false,
      blobsEnableDecoration: false
    };
  }

  if ('shape-mask' === blobsMixStyle) {
    newAttributes = {
      blobsEnableMask: true,
      blobsEnableDecoration: false
    };
  }

  if ('mixing-1' === blobsMixStyle) {
    newAttributes = {
      blobsEnableMask: true,
      blobsEnableDecoration: true,
      blobsHorizontalDisplacement: 70,
      blobsVerticalDisplacement: 30,
      blobsSizeBalance: 50
    };
  }

  if ('mixing-2' === blobsMixStyle) {
    newAttributes = {
      blobsEnableMask: true,
      blobsEnableDecoration: true,
      blobsHorizontalDisplacement: 30,
      blobsVerticalDisplacement: 50,
      blobsSizeBalance: 50
    };
  }

  if ('mixing-3' === blobsMixStyle) {
    newAttributes = {
      blobsEnableMask: true,
      blobsEnableDecoration: true,
      blobsHorizontalDisplacement: 70,
      blobsVerticalDisplacement: 50,
      blobsSizeBalance: 50
    };
  }

  return _objectSpread(_objectSpread({}, attributes), newAttributes);
};

var ShapeModelingCustomizeTab = function ShapeModelingCustomizeTab(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var blobsMixStyle = attributes.blobsMixStyle;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_4__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Customize', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_5__["getControlsClasses"])(attributes, getShapeStyleAttributes)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RadioControl"], {
    key: 'blobs-mixing-style',
    label: ('Shape Usage Style', 'nova-blocks'),
    selected: blobsMixStyle,
    onChange: function onChange(blobsMixStyle) {
      setAttributes(getShapeStyleAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        blobsMixStyle: blobsMixStyle
      })));
    },
    options: shapeMixStyleOptions
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_shape_swap_button__WEBPACK_IMPORTED_MODULE_6__["default"], props));
};

/* harmony default export */ __webpack_exports__["default"] = (ShapeModelingCustomizeTab);


/***/ }),

/***/ "./packages/shape-modeling/build-module/controls/shape-props-controls.js":
/*!*******************************************************************************!*\
  !*** ./packages/shape-modeling/build-module/controls/shape-props-controls.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/shape-modeling/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_5__);








var ShapeControls = function ShapeControls(props) {
  var groupTitle = props.groupTitle;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_5__["ControlsGroup"], {
    title: groupTitle
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ShapePropsToggle, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ShapePropsControls, props));
};

var ShapePropsToggle = function ShapePropsToggle(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      enableAttribute = props.enableAttribute,
      toggleLabel = props.toggleLabel;
  var enabled = attributes[enableAttribute];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: toggleLabel,
    checked: enabled,
    onChange: function onChange() {
      return setAttributes(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, enableAttribute, !enabled));
    }
  });
};

var ShapePropsControls = function ShapePropsControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      enableAttribute = props.enableAttribute,
      prefix = props.prefix;
  var isPatternSeedDisabled = attributes["".concat(prefix, "Complexity")] === 0;
  var isSidesDisabled = attributes["".concat(prefix, "Complexity")] === 0 && attributes["".concat(prefix, "Smoothness")] === 100;
  var isRotationDisabled = attributes["".concat(prefix, "Complexity")] === 0 && attributes["".concat(prefix, "Smoothness")] === 100;
  var enabled = attributes[enableAttribute];

  if (!enabled) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getControlsDirtyClasses"])(isSidesDisabled)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    value: attributes["".concat(prefix, "Sides")],
    onChange: function onChange(sides) {
      var newAttributes = {};
      newAttributes["".concat(prefix, "Sides")] = sides;
      setAttributes(newAttributes);
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Sides', 'nova-blocks'),
    min: 3,
    max: 8,
    step: 1
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getControlsDirtyClasses"])(isPatternSeedDisabled)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    value: attributes["".concat(prefix, "PatternSeed")],
    onChange: function onChange(preset) {
      var newAttributes = {};
      newAttributes["".concat(prefix, "PatternSeed")] = preset;
      setAttributes(newAttributes);
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Pattern Seed', 'nova-blocks'),
    min: 0,
    max: 100,
    step: 10
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    value: attributes["".concat(prefix, "Complexity")],
    onChange: function onChange(complexity) {
      var newAttributes = {};
      newAttributes["".concat(prefix, "Complexity")] = complexity;
      setAttributes(newAttributes);
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Variation', 'nova-blocks'),
    min: 0,
    max: 100,
    step: 10
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    value: attributes["".concat(prefix, "Smoothness")],
    onChange: function onChange(smoothness) {
      var newAttributes = {};
      newAttributes["".concat(prefix, "Smoothness")] = smoothness;
      setAttributes(newAttributes);
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Smoothness', 'nova-blocks'),
    min: 0,
    max: 100,
    step: 10
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getControlsDirtyClasses"])(isRotationDisabled)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    value: attributes["".concat(prefix, "Rotation")],
    onChange: function onChange(rotation) {
      var newAttributes = {};
      newAttributes["".concat(prefix, "Rotation")] = rotation;
      setAttributes(newAttributes);
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Rotation', 'nova-blocks'),
    min: 0,
    max: 100,
    step: 10
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ShapeControls);


/***/ }),

/***/ "./packages/shape-modeling/build-module/controls/shape-scaling-controls.js":
/*!*********************************************************************************!*\
  !*** ./packages/shape-modeling/build-module/controls/shape-scaling-controls.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





var ShapeScalingControls = function ShapeScalingControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var blobsEnableDecoration = attributes.blobsEnableDecoration,
      blobsHorizontalDisplacement = attributes.blobsHorizontalDisplacement,
      blobsVerticalDisplacement = attributes.blobsVerticalDisplacement,
      blobsSizeBalance = attributes.blobsSizeBalance;

  if (!blobsEnableDecoration) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_1__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Scaling', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    value: blobsHorizontalDisplacement,
    onChange: function onChange(blobsHorizontalDisplacement) {
      setAttributes({
        blobsHorizontalDisplacement: blobsHorizontalDisplacement
      });
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Horizontal Displacement', 'nova-blocks'),
    min: 0,
    max: 100,
    step: 5
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    value: blobsVerticalDisplacement,
    onChange: function onChange(blobsVerticalDisplacement) {
      setAttributes({
        blobsVerticalDisplacement: blobsVerticalDisplacement
      });
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Vertical Displacement', 'nova-blocks'),
    min: 0,
    max: 100,
    step: 5
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    value: blobsSizeBalance,
    onChange: function onChange(blobsSizeBalance) {
      setAttributes({
        blobsSizeBalance: blobsSizeBalance
      });
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Size Balance', 'nova-blocks'),
    min: 20,
    max: 80,
    step: 5
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ShapeScalingControls);


/***/ }),

/***/ "./packages/shape-modeling/build-module/controls/shape-swap-button.js":
/*!****************************************************************************!*\
  !*** ./packages/shape-modeling/build-module/controls/shape-swap-button.js ***!
  \****************************************************************************/
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




var ShapeSwapButton = function ShapeSwapButton(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var newAttributes = {};
  var atts = ['Sides', 'PatternSeed', 'Complexity', 'Smoothness'];
  atts.forEach(function (att) {
    newAttributes["blob".concat(att)] = attributes["blobMask".concat(att)];
    newAttributes["blobMask".concat(att)] = attributes["blob".concat(att)];
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isPrimary: true,
    icon: 'controls-repeat',
    onClick: function onClick() {
      setAttributes(newAttributes);
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Swap shapes', 'nova-blocks'));
};

/* harmony default export */ __webpack_exports__["default"] = (ShapeSwapButton);


/***/ }),

/***/ "./packages/shape-modeling/build-module/filters/controls.js":
/*!******************************************************************!*\
  !*** ./packages/shape-modeling/build-module/filters/controls.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./packages/shape-modeling/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");
/* harmony import */ var _novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controls */ "./packages/shape-modeling/build-module/controls/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./packages/shape-modeling/build-module/utils/index.js");







var Controls = function Controls(props) {
  var novablocksSettings = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["useSettings"])();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["ControlsSection"], {
    id: 'shape-modeling',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Shape Modeling', 'nova-blocks'),
    group: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Modules', 'nova-blocks'),
    order: 30
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Presets', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Use this tool to generate shapes and combine them with your images to create designs that are a unique and memorable part of your brand identity.', 'nova-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["PresetControl"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: 'blob-style-preset',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Choose a shape preset:', 'nova-blocks'),
    options: novablocksSettings.blobPresetOptions,
    randomize: _utils__WEBPACK_IMPORTED_MODULE_5__["getRandomAttributes"]
  }, props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Settings', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_4__["ShapeDebugControls"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_4__["ShapePropsControls"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefix: 'blobMask',
    enableAttribute: 'blobsEnableMask',
    groupTitle: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Media Shape', 'nova-blocks'),
    toggleLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enable Media Shape', 'nova-blocks')
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_4__["ShapePropsControls"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefix: 'blob',
    enableAttribute: 'blobsEnableDecoration',
    groupTitle: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Decorative Shape', 'nova-blocks'),
    toggleLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enable Blob Decoration', 'nova-blocks')
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_4__["ShapeScalingControls"], props)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_3__["withVisibility"])('shape-modeling-section')(Controls));


/***/ }),

/***/ "./packages/shape-modeling/build-module/filters/with-shape-modeling-attributes.js":
/*!****************************************************************************************!*\
  !*** ./packages/shape-modeling/build-module/filters/with-shape-modeling-attributes.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/shape-modeling/node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var attributes = {
  blobsEnableMask: {
    type: "boolean",
    "default": false
  },
  blobSides: {
    type: "number",
    "default": 3
  },
  blobPatternSeed: {
    type: "number",
    "default": 3
  },
  blobComplexity: {
    type: "number",
    "default": 0
  },
  blobSmoothness: {
    type: "number",
    "default": 33
  },
  blobRotation: {
    type: "number",
    "default": 0
  },
  blobsEnableDecoration: {
    type: "boolean",
    "default": false
  },
  blobMaskSides: {
    type: "number",
    "default": 3
  },
  blobMaskPatternSeed: {
    type: "number",
    "default": 3
  },
  blobMaskComplexity: {
    type: "number",
    "default": 0
  },
  blobMaskSmoothness: {
    type: "number",
    "default": 33
  },
  blobMaskRotation: {
    type: "number",
    "default": 0
  },
  blobsSizeBalance: {
    type: "number",
    "default": 50
  },
  blobsHorizontalDisplacement: {
    type: "number",
    "default": 50
  },
  blobsVerticalDisplacement: {
    type: "number",
    "default": 50
  }
};

function withShapeModelingAttributes(settings) {
  var _settings$supports, _settings$supports$no;

  var support = settings === null || settings === void 0 ? void 0 : (_settings$supports = settings.supports) === null || _settings$supports === void 0 ? void 0 : (_settings$supports$no = _settings$supports.novaBlocks) === null || _settings$supports$no === void 0 ? void 0 : _settings$supports$no.shapeModeling;

  if (support !== true && (support === null || support === void 0 ? void 0 : support.attributes) !== true) {
    return settings;
  }

  return _objectSpread(_objectSpread({}, settings), {}, {
    attributes: _objectSpread(_objectSpread({}, settings.attributes), attributes)
  });
}

/* harmony default export */ __webpack_exports__["default"] = (withShapeModelingAttributes);


/***/ }),

/***/ "./packages/shape-modeling/build-module/filters/with-shape-modeling-controls.js":
/*!**************************************************************************************!*\
  !*** ./packages/shape-modeling/build-module/filters/with-shape-modeling-controls.js ***!
  \**************************************************************************************/
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
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls */ "./packages/shape-modeling/build-module/filters/controls.js");





var withShapeModelingControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var _supports$novaBlocks, _supports$novaBlocks2, _supports$novaBlocks3;

    var supports = Object(_novablocks_block_editor__WEBPACK_IMPORTED_MODULE_2__["useSupports"])(props.name);

    if ((supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks = supports.novaBlocks) === null || _supports$novaBlocks === void 0 ? void 0 : _supports$novaBlocks.shapeModeling) !== true && (supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks2 = supports.novaBlocks) === null || _supports$novaBlocks2 === void 0 ? void 0 : (_supports$novaBlocks3 = _supports$novaBlocks2.shapeModeling) === null || _supports$novaBlocks3 === void 0 ? void 0 : _supports$novaBlocks3.controls) !== true) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_3__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props));
  };
}, 'withShapeModelingControls');
/* harmony default export */ __webpack_exports__["default"] = (withShapeModelingControls);


/***/ }),

/***/ "./packages/shape-modeling/build-module/filters/with-shape-modeling-decoration.js":
/*!****************************************************************************************!*\
  !*** ./packages/shape-modeling/build-module/filters/with-shape-modeling-decoration.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./packages/shape-modeling/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./packages/shape-modeling/build-module/utils/index.js");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components */ "./packages/shape-modeling/build-module/components/index.js");






var withShapeModelingDecoration = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var attributes = props.attributes;
    var blobsEnableMask = attributes.blobsEnableMask,
        blobsEnableDecoration = attributes.blobsEnableDecoration,
        enableShapeDebug = attributes.enableShapeDebug;
    var seedOffset = Number.isInteger(props.seedOffset) ? props.seedOffset : 0;
    var newAttributes = Object.assign({}, attributes, {
      blobPatternSeed: attributes.blobPatternSeed + seedOffset,
      blobMaskPatternSeed: attributes.blobMaskPatternSeed + seedOffset
    });
    var svgViewBox = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getBlobViewBox"])(newAttributes);
    var blobsStyles = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getBlobStyles"])(newAttributes);
    var blobAtts = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getBlobAttsFromAttributes"])(newAttributes, 'blob');
    var blobMaskAtts = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getBlobAttsFromAttributes"])(newAttributes, 'blobMask');
    var svgMaskPath = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["generatePath"])(blobMaskAtts);
    var svgPath = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["generatePath"])(blobAtts);
    var colorSignalClassnames = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getColorSignalClassnames"])(attributes, true);
    var blobMaskClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('blob-mix__mask', colorSignalClassnames);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'blob-mix',
      style: blobsStyles
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "novablocks-media-composition__grid-item-mask blob-mix__media",
      style: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getBlobMediaStyles"])(attributes)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: blobMaskClasses,
      style: blobsEnableMask ? Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getBlobMaskStyles"])(svgMaskPath, svgViewBox) : {}
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      className: "blob-mix__mask-debug",
      viewBox: svgViewBox,
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      version: "1.1"
    }, blobsEnableMask && enableShapeDebug && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["ShapeDebug"], blobMaskAtts))), blobsEnableDecoration && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      className: "blob-mix__decoration",
      viewBox: svgViewBox,
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      version: "1.1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: svgPath
    }), enableShapeDebug && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["ShapeDebug"], blobAtts)));
  };
}, 'withShapeModelingDecoration');
/* harmony default export */ __webpack_exports__["default"] = (withShapeModelingDecoration);


/***/ }),

/***/ "./packages/shape-modeling/build-module/index.js":
/*!*******************************************************!*\
  !*** ./packages/shape-modeling/build-module/index.js ***!
  \*******************************************************/
/*! exports provided: attributes, withShapeModelingDecoration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return attributes; });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filters_with_shape_modeling_decoration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters/with-shape-modeling-decoration */ "./packages/shape-modeling/build-module/filters/with-shape-modeling-decoration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withShapeModelingDecoration", function() { return _filters_with_shape_modeling_decoration__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _filters_with_shape_modeling_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters/with-shape-modeling-controls */ "./packages/shape-modeling/build-module/filters/with-shape-modeling-controls.js");
/* harmony import */ var _filters_with_shape_modeling_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters/with-shape-modeling-attributes */ "./packages/shape-modeling/build-module/filters/with-shape-modeling-attributes.js");

var attributes = {
  blobsEnableMask: {
    type: "boolean",
    "default": false
  },
  blobSides: {
    type: "number",
    "default": 3
  },
  blobPatternSeed: {
    type: "number",
    "default": 3
  },
  blobComplexity: {
    type: "number",
    "default": 0
  },
  blobSmoothness: {
    type: "number",
    "default": 33
  },
  blobRotation: {
    type: "number",
    "default": 0
  },
  blobsEnableDecoration: {
    type: "boolean",
    "default": false
  },
  blobMaskSides: {
    type: "number",
    "default": 3
  },
  blobMaskPatternSeed: {
    type: "number",
    "default": 3
  },
  blobMaskComplexity: {
    type: "number",
    "default": 0
  },
  blobMaskSmoothness: {
    type: "number",
    "default": 33
  },
  blobMaskRotation: {
    type: "number",
    "default": 0
  },
  blobsSizeBalance: {
    type: "number",
    "default": 50
  },
  blobsHorizontalDisplacement: {
    type: "number",
    "default": 50
  },
  blobsVerticalDisplacement: {
    type: "number",
    "default": 50
  }
};
 //import withShapeModeling from './filters/with-shape-modeling';


 //addFilter( 'editor.BlockEdit', 'novablocks/with-shape-modeling', withShapeModeling );

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('editor.BlockEdit', 'novablocks/with-shape-modeling-controls', _filters_with_shape_modeling_controls__WEBPACK_IMPORTED_MODULE_2__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('blocks.registerBlockType', 'novablocks/with-shape-modeling-attributes', _filters_with_shape_modeling_attributes__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./packages/shape-modeling/build-module/utils/get-bounds-of-curve.js":
/*!***************************************************************************!*\
  !*** ./packages/shape-modeling/build-module/utils/get-bounds-of-curve.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// https://stackoverflow.com/questions/2587751/an-algorithm-to-find-bounding-box-of-closed-bezier-curves/14429749#14429749
var sqrt = Math.sqrt,
    min = Math.min,
    max = Math.max,
    abs = Math.abs;

var getBoundsOfCurve = function getBoundsOfCurve(x0, y0, x1, y1, x2, y2, x3, y3) {
  var tvalues = [];
  var bounds = [[], []];
  var points = [];
  var a, b, c, t, t1, t2, b2ac, sqrtb2ac;

  for (var i = 0; i < 2; ++i) {
    if (i === 0) {
      b = 6 * x0 - 12 * x1 + 6 * x2;
      a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
      c = 3 * x1 - 3 * x0;
    } else {
      b = 6 * y0 - 12 * y1 + 6 * y2;
      a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
      c = 3 * y1 - 3 * y0;
    }

    if (abs(a) < 1e-12) {
      if (abs(b) < 1e-12) {
        continue;
      }

      t = -c / b;

      if (0 < t && t < 1) {
        tvalues.push(t);
      }

      continue;
    }

    b2ac = b * b - 4 * c * a;
    sqrtb2ac = sqrt(b2ac);

    if (b2ac < 0) {
      continue;
    }

    t1 = (-b + sqrtb2ac) / (2 * a);

    if (0 < t1 && t1 < 1) {
      tvalues.push(t1);
    }

    t2 = (-b - sqrtb2ac) / (2 * a);

    if (0 < t2 && t2 < 1) {
      tvalues.push(t2);
    }
  }

  var x,
      y,
      j = tvalues.length,
      jlen = j,
      mt;

  while (j--) {
    t = tvalues[j];
    mt = 1 - t;
    x = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
    bounds[0][j] = x;
    y = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
    bounds[1][j] = y;
    points[j] = {
      X: x,
      Y: y
    };
  }

  tvalues[jlen] = 0;
  tvalues[jlen + 1] = 1;
  points[jlen] = {
    X: x0,
    Y: y0
  };
  points[jlen + 1] = {
    X: x3,
    Y: y3
  };
  bounds[0][jlen] = x0;
  bounds[1][jlen] = y0;
  bounds[0][jlen + 1] = x3;
  bounds[1][jlen + 1] = y3;
  tvalues.length = bounds[0].length = bounds[1].length = points.length = jlen + 2;
  return {
    left: min.apply(null, bounds[0]),
    top: min.apply(null, bounds[1]),
    right: max.apply(null, bounds[0]),
    bottom: max.apply(null, bounds[1]),
    points: points,
    // local extremes
    tvalues: tvalues // t values of local extremes

  };
};

/* harmony default export */ __webpack_exports__["default"] = (getBoundsOfCurve);


/***/ }),

/***/ "./packages/shape-modeling/build-module/utils/get-random-attributes.js":
/*!*****************************************************************************!*\
  !*** ./packages/shape-modeling/build-module/utils/get-random-attributes.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/shape-modeling/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var getRandomAttributes = function getRandomAttributes() {
  return _objectSpread(_objectSpread(_objectSpread({
    blobsEnableMask: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomFromArray"])([true, true, true]),
    blobsEnableDecoration: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomFromArray"])([true, true, false])
  }, getRandomShapeAttributes('blob')), getRandomShapeAttributes('blobMask')), {}, {
    blobsHorizontalDisplacement: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBetween"])(3, 7) * 10,
    blobsVerticalDisplacement: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBetween"])(3, 7) * 10,
    blobsSizeBalance: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBetween"])(4, 6) * 10
  });
};

var getRandomShapeAttributes = function getRandomShapeAttributes(prefix) {
  var _ref;

  var sides = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBetween"])(4, 7);
  var patternSeed = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBetween"])(0, 10) * 10;
  var complexity = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomFromArray"])([0, 50, 100, 100, 100]);
  var smoothness = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomFromArray"])([0, 50, 100, 100, 100]);
  var rotation = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBetween"])(0, 10) * 10;
  return _ref = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "".concat(prefix, "Sides"), sides), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "".concat(prefix, "PatternSeed"), patternSeed), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "".concat(prefix, "Complexity"), complexity), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "".concat(prefix, "Smoothness"), smoothness), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "".concat(prefix, "Rotation"), rotation), _ref;
};

/* harmony default export */ __webpack_exports__["default"] = (getRandomAttributes);


/***/ }),

/***/ "./packages/shape-modeling/build-module/utils/index.js":
/*!*************************************************************!*\
  !*** ./packages/shape-modeling/build-module/utils/index.js ***!
  \*************************************************************/
/*! exports provided: getBoundsOfCurve, getRandomAttributes, BLOB_RADIUS, getRatioArray, getPointsArray, generatePath, getCurvePoints, getPathFromCurvePoints, getCurvePointsFromPoints, getDefaultBounds, initializeBounds, getBoundsFromCurves, scaleCurvePoints, scalePoints, getBlobAttsFromAttributes, getBlobTransform, getBlobStyles, getBlobMediaStyles, getBlobScalingProps, getBlobMaskStyles, getBlobViewBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOB_RADIUS", function() { return BLOB_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRatioArray", function() { return getRatioArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPointsArray", function() { return getPointsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return generatePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurvePoints", function() { return getCurvePoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPathFromCurvePoints", function() { return getPathFromCurvePoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurvePointsFromPoints", function() { return getCurvePointsFromPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultBounds", function() { return getDefaultBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeBounds", function() { return initializeBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoundsFromCurves", function() { return getBoundsFromCurves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleCurvePoints", function() { return scaleCurvePoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scalePoints", function() { return scalePoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlobAttsFromAttributes", function() { return getBlobAttsFromAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlobTransform", function() { return getBlobTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlobStyles", function() { return getBlobStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlobMediaStyles", function() { return getBlobMediaStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlobScalingProps", function() { return getBlobScalingProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlobMaskStyles", function() { return getBlobMaskStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlobViewBox", function() { return getBlobViewBox; });
/* harmony import */ var fast_mersenne_twister__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-mersenne-twister */ "./packages/shape-modeling/node_modules/fast-mersenne-twister/mersenne.js");
/* harmony import */ var _get_bounds_of_curve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-bounds-of-curve */ "./packages/shape-modeling/build-module/utils/get-bounds-of-curve.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBoundsOfCurve", function() { return _get_bounds_of_curve__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _get_random_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-random-attributes */ "./packages/shape-modeling/build-module/utils/get-random-attributes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRandomAttributes", function() { return _get_random_attributes__WEBPACK_IMPORTED_MODULE_2__["default"]; });





var BLOB_MAX_SIDES = 12;
var BLOB_RADIUS = 10;
var getRatioArray = function getRatioArray(sides, patternSeed) {
  var pseudoRandomGenerator = Object(fast_mersenne_twister__WEBPACK_IMPORTED_MODULE_0__["MersenneTwister"])(patternSeed);
  return Array.from(Array(sides).keys()).map(function () {
    var options = {
      min: 1,
      max: 10
    };
    return Math.floor(pseudoRandomGenerator.random() * (options.max - options.min + 1) + options.min) / 10;
  });
};
var getPointsArray = function getPointsArray(attributes) {
  var sides = attributes.sides,
      rotation = attributes.rotation,
      complexity = attributes.complexity,
      patternSeed = attributes.patternSeed;
  var ratioArray = getRatioArray(sides, patternSeed);
  var complexityLimiter = 0.7;
  var points = []; // generate the points that will define the shape

  for (var i = 0; i < sides; i++) {
    // generate a regular polygon
    // we add pi/2 to the angle to have the tip of polygons with odd number of edges pointing upwards
    var angle = 2 * Math.PI * i / sides + Math.PI / 2 + Math.PI * rotation * (90 / 100) / 180;
    var ratio = ratioArray[i];
    var distance = ratio + (1 - ratio) * (100 - complexity * complexityLimiter) / 100;
    points.push({
      x: BLOB_RADIUS * (Math.cos(angle) * distance + 1),
      y: BLOB_RADIUS * (Math.sin(angle) * distance + 1)
    });
  }

  return points;
};
var generatePath = function generatePath(attributes) {
  var sides = attributes.sides || 0;
  var curvePoints = getCurvePoints(attributes);
  var missingPoints = BLOB_MAX_SIDES - sides;
  return getPathFromCurvePoints(curvePoints, missingPoints);
};
var getCurvePoints = function getCurvePoints(attributes) {
  var curvePoints = getCurvePointsFromPoints(attributes);
  var bounds = getBoundsFromCurves(curvePoints);
  scaleCurvePoints(curvePoints, bounds);
  return curvePoints;
};
var getPathFromCurvePoints = function getPathFromCurvePoints(curvePoints) {
  var missingPoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var path;
  var curves = '';
  var firstPoint = '';

  if (!curvePoints.length) {
    return '';
  }

  for (var i = 0; i < curvePoints.length; i++) {
    var c = curvePoints[i];
    curves += ' C ' + c.x1 + ' ' + c.y1 + ' ' + c.x2 + ' ' + c.y2 + ' ' + c.m2x + ' ' + c.m2y;
    var dummyPointsCount = Math.round(missingPoints / (curvePoints.length - i));

    for (var j = 0; j < dummyPointsCount; j++) {
      curves += ' C ' + c.m2x + ' ' + c.m2y + ' ' + c.m2x + ' ' + c.m2y + ' ' + c.m2x + ' ' + c.m2y;
    }

    if (i === 0) {
      firstPoint = c.m1x + ' ' + c.m1y;
    }

    missingPoints -= dummyPointsCount;
  } // move to first point


  path = 'M ' + firstPoint; // add the curves to draw the actual path

  path += curves; // close the path

  path += ' Z';
  return path;
};
var getCurvePointsFromPoints = function getCurvePointsFromPoints(attributes) {
  var sides = attributes.sides,
      smoothness = attributes.smoothness;
  var points = getPointsArray(attributes);
  var curvePoints = [];

  for (var i = 0; i < points.length; i++) {
    var nextIdx = (i + 1) % points.length;
    var prevIdx = (i + points.length - 1) % points.length;
    var nextPt = points[nextIdx];
    var thisPt = points[i];
    var prevPt = points[prevIdx];
    var M1 = {
      x: (prevPt.x + thisPt.x) / 2,
      y: (prevPt.y + thisPt.y) / 2
    };
    var M2 = {
      x: (thisPt.x + nextPt.x) / 2,
      y: (thisPt.y + nextPt.y) / 2
    }; // radius of the hexagon created by the middle points

    var radius = BLOB_RADIUS * Math.cos(Math.PI / sides); // distance to original point;

    var dm = BLOB_RADIUS * Math.sin(Math.PI / sides);
    var perfectRatio = Math.tan(Math.PI / (2 * sides)) * (4 / 3);
    var ratio = radius * perfectRatio / dm * smoothness / 100;
    var x1 = M1.x * (1 - ratio) + thisPt.x * ratio;
    var y1 = M1.y * (1 - ratio) + thisPt.y * ratio;
    var x2 = M2.x * (1 - ratio) + thisPt.x * ratio;
    var y2 = M2.y * (1 - ratio) + thisPt.y * ratio;
    curvePoints.push({
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      m1x: M1.x,
      m1y: M1.y,
      m2x: M2.x,
      m2y: M2.y
    });
  }

  return curvePoints;
};
var getDefaultBounds = function getDefaultBounds() {
  return {
    xMax: BLOB_RADIUS,
    yMax: BLOB_RADIUS,
    xMin: 0,
    yMin: 0,
    xRatio: 1,
    yRatio: 1
  };
};
var initializeBounds = function initializeBounds() {
  return {
    xMax: 0,
    yMax: 0,
    xMin: BLOB_RADIUS,
    yMin: BLOB_RADIUS
  };
};
var getBoundsFromCurves = function getBoundsFromCurves(points) {
  return points.reduce(function (acc, _ref) {
    var x1 = _ref.x1,
        y1 = _ref.y1,
        x2 = _ref.x2,
        y2 = _ref.y2,
        m1x = _ref.m1x,
        m1y = _ref.m1y,
        m2x = _ref.m2x,
        m2y = _ref.m2y;

    var _getBoundsOfCurve = Object(_get_bounds_of_curve__WEBPACK_IMPORTED_MODULE_1__["default"])(m1x, m1y, x1, y1, x2, y2, m2x, m2y),
        top = _getBoundsOfCurve.top,
        right = _getBoundsOfCurve.right,
        bottom = _getBoundsOfCurve.bottom,
        left = _getBoundsOfCurve.left;

    var xMin = Math.min(left, acc.xMin);
    var xMax = Math.max(right, acc.xMax);
    var yMin = Math.min(top, acc.yMin);
    var yMax = Math.max(bottom, acc.yMax);
    var xRatio = 2 * BLOB_RADIUS / (xMax - xMin);
    var yRatio = 2 * BLOB_RADIUS / (yMax - yMin);
    return {
      xMin: xMin,
      xMax: xMax,
      yMin: yMin,
      yMax: yMax,
      xRatio: xRatio,
      yRatio: yRatio
    };
  }, {
    yMin: BLOB_RADIUS,
    xMax: BLOB_RADIUS,
    yMax: BLOB_RADIUS,
    xMin: BLOB_RADIUS
  });
};
var scaleCurvePoints = function scaleCurvePoints(points, bounds) {
  var xMin = bounds.xMin,
      xMax = bounds.xMax,
      yMin = bounds.yMin,
      yMax = bounds.yMax,
      xRatio = bounds.xRatio,
      yRatio = bounds.yRatio;

  for (var i = 0; i < points.length; i++) {
    var _points$i = points[i],
        x1 = _points$i.x1,
        x2 = _points$i.x2,
        y1 = _points$i.y1,
        y2 = _points$i.y2,
        m1x = _points$i.m1x,
        m2x = _points$i.m2x,
        m1y = _points$i.m1y,
        m2y = _points$i.m2y;
    points[i] = {
      x1: (x1 - xMin) * xRatio,
      x2: (x2 - xMin) * xRatio,
      m2x: (m2x - xMin) * xRatio,
      m1x: (m1x - xMin) * xRatio,
      y1: (y1 - yMin) * yRatio,
      y2: (y2 - yMin) * yRatio,
      m1y: (m1y - yMin) * yRatio,
      m2y: (m2y - yMin) * yRatio
    };
  }
};
var scalePoints = function scalePoints(points, bounds) {
  var xMin = bounds.xMin,
      xMax = bounds.xMax,
      yMin = bounds.yMin,
      yMax = bounds.yMax,
      xRatio = bounds.xRatio,
      yRatio = bounds.yRatio;

  for (var i = 0; i < points.length; i++) {
    var _points$i2 = points[i],
        x = _points$i2.x,
        y = _points$i2.y;
    points[i] = {
      x: (x - xMin) * xRatio,
      y: (y - yMin) * yRatio
    };
  }
};
var getBlobAttsFromAttributes = function getBlobAttsFromAttributes(attributes, prefix) {
  return {
    sides: attributes["".concat(prefix, "Sides")],
    patternSeed: attributes["".concat(prefix, "PatternSeed")],
    complexity: attributes["".concat(prefix, "Complexity")],
    smoothness: attributes["".concat(prefix, "Smoothness")],
    rotation: attributes["".concat(prefix, "Rotation")]
  };
};
var getBlobTransform = function getBlobTransform(scale, horizontalDisplacement, verticalDisplacement) {
  return "translate( ".concat((1 - scale) * horizontalDisplacement, "%, ").concat((1 - scale) * verticalDisplacement, "% ) scale( ").concat(scale, " )");
};
var getBlobStyles = function getBlobStyles(attributes) {
  var _getBlobScalingProps = getBlobScalingProps(attributes),
      decorationScale = _getBlobScalingProps.decorationScale,
      xOffset = _getBlobScalingProps.xOffset,
      yOffset = _getBlobScalingProps.yOffset;

  return {
    '--blob-mix-decoration-transform': getBlobTransform(decorationScale, 100 - xOffset, 100 - yOffset)
  };
};
var getBlobMediaStyles = function getBlobMediaStyles(attributes) {
  var _getBlobScalingProps2 = getBlobScalingProps(attributes),
      mediaScale = _getBlobScalingProps2.mediaScale,
      xOffset = _getBlobScalingProps2.xOffset,
      yOffset = _getBlobScalingProps2.yOffset;

  return {
    width: "".concat(mediaScale * 100, "%"),
    height: "".concat(mediaScale * 100, "%"),
    top: "".concat((1 - mediaScale) * yOffset, "%"),
    left: "".concat((1 - mediaScale) * xOffset, "%")
  };
};
var getBlobScalingProps = function getBlobScalingProps(attributes) {
  var blobsEnableDecoration = attributes.blobsEnableDecoration,
      blobsSizeBalance = attributes.blobsSizeBalance,
      blobsHorizontalDisplacement = attributes.blobsHorizontalDisplacement,
      blobsVerticalDisplacement = attributes.blobsVerticalDisplacement;
  var xOffset = blobsEnableDecoration ? blobsHorizontalDisplacement : 50;
  var yOffset = blobsEnableDecoration ? blobsVerticalDisplacement : 50;
  var scaleRatio = blobsEnableDecoration ? blobsSizeBalance : 50;
  var xScale = 1 - Math.abs(50 - xOffset) / 100;
  var yScale = 1 - Math.abs(50 - yOffset) / 100;
  var scale = Math.min(xScale, yScale);
  var scaleDiff = 0.4 * (50 - scaleRatio) / 50;
  var mediaScale = scale - scaleDiff;
  var decorationScale = scale + scaleDiff;
  var maxScale = Math.max(mediaScale, decorationScale, 1);
  mediaScale /= maxScale;
  decorationScale /= maxScale;
  return {
    mediaScale: mediaScale,
    decorationScale: decorationScale,
    xOffset: xOffset,
    yOffset: yOffset
  };
};
var getBlobMaskStyles = function getBlobMaskStyles(path) {
  var viewBox = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0 0 20 20';
  var svgString = "<svg viewBox='".concat(viewBox, "' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'><path d='").concat(path, "'></path></svg>");
  var svgDataURI = "url(\"data:image/svg+xml;utf8,".concat(svgString, "\")");
  return {
    maskImage: svgDataURI,
    maskSize: '100% 100%',
    WebkitMaskImage: svgDataURI,
    WebkitMaskSize: '100% 100%'
  };
};
var getBlobViewBox = function getBlobViewBox(attributes) {
  return '0 0 20 20';
};


/***/ }),

/***/ "./packages/shape-modeling/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************************************!*\
  !*** ./packages/shape-modeling/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************************************/
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

/***/ "./packages/shape-modeling/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************************************!*\
  !*** ./packages/shape-modeling/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************************************/
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

/***/ "./packages/shape-modeling/node_modules/classnames/index.js":
/*!******************************************************************!*\
  !*** ./packages/shape-modeling/node_modules/classnames/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
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

/***/ "./packages/shape-modeling/node_modules/fast-mersenne-twister/mersenne.js":
/*!********************************************************************************!*\
  !*** ./packages/shape-modeling/node_modules/fast-mersenne-twister/mersenne.js ***!
  \********************************************************************************/
/*! exports provided: MersenneTwister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MersenneTwister", function() { return MersenneTwister; });
const N = 624;
const N_MINUS_1 = 623;
const M = 397;
const M_MINUS_1 = 396;
const DIFF = N - M;
const MATRIX_A = 0x9908b0df;
const UPPER_MASK = 0x80000000;
const LOWER_MASK = 0x7fffffff;

function twist( state ){
	var bits;

	// first 624-397=227 words
	for( let i = 0; i < DIFF; i++ ){
		bits = ( state[i] & UPPER_MASK ) | ( state[i + 1] & LOWER_MASK );

		state[i] = state[i + M] ^ ( bits >>> 1 ) ^ ( ( bits & 1 ) * MATRIX_A );
	}
	// remaining words (except the very last one)
	for( let i = DIFF ; i < N_MINUS_1; i++ ){
		bits = ( state[i] & UPPER_MASK ) | ( state[i + 1] & LOWER_MASK );

		state[i] = state[i - DIFF] ^ ( bits >>> 1 ) ^ ( ( bits & 1 ) * MATRIX_A );
	}

	// last word is computed pretty much the same way, but i + 1 must wrap around to 0
	bits = ( state[N_MINUS_1] & UPPER_MASK ) | ( state[0] & LOWER_MASK );

	state[N_MINUS_1] = state[M_MINUS_1] ^ ( bits >>> 1 ) ^ ( ( bits & 1 ) * MATRIX_A );

	return state;
}

/* eslint-disable complexity */
function initializeWithArray( seedArray ){
	var state = initializeWithNumber( 19650218 );
	var len = seedArray.length;

	var i = 1;
	var j = 0;
	var k = ( N > len ? N : len );

	for( ; k; k-- ){
		let s = state[i - 1] ^ ( state[i - 1] >>> 30 );

		state[i] = (
			state[i] ^ (
				(
					(
						(
							( s & 0xffff0000 ) >>> 16
						) * 1664525
					) << 16
				) +
				(
					( s & 0x0000ffff ) * 1664525
				)
			)
		) + seedArray[j] + j;
		i++; j++;
		if( i >= N ){
			state[0] = state[N_MINUS_1]; i = 1;
		}
		if( j >= len ){
			j = 0;
		}
	}
	for( k = N_MINUS_1; k; k-- ){
		let s = state[i - 1] ^ ( state[i - 1] >>> 30 );

		state[i] = (
			state[i] ^ (
				(
					(
						(
							( s & 0xffff0000 ) >>> 16
						) * 1566083941
					) << 16
				) +
				( s & 0x0000ffff ) * 1566083941
			)
		) - i;
		i++;
		if( i >= N ){
			state[0] = state[N_MINUS_1]; i = 1;
		}
	}

	state[0] = UPPER_MASK; /* MSB is 1; assuring non-zero initial array */

	return state;
}

function initializeWithNumber( seed ){
	var state = new Array( N );

	// fill initial state
	state[0] = seed;
	for( let i = 1; i < N; i++ ){
		let s = state[i - 1] ^ ( state[i - 1] >>> 30 );
		// avoid multiplication overflow: split 32 bits into 2x 16 bits and process them individually

		state[i]  = (
			(
				(
					(
						( s & 0xffff0000 ) >>> 16
					) * 1812433253
				) << 16
			) + ( s & 0x0000ffff ) * 1812433253
		) + i;
	}

	return state;
}

// The original algorithm used 5489 as the default seed
function initialize( seed = Date.now() ){
	var state;

	if( Array.isArray( seed ) ){
		state = initializeWithArray( seed );
	}
	else{
		state = initializeWithNumber( seed );
	}

	return twist( state );
}

function MersenneTwister( seed ){
	var state = initialize( seed );
	var next = 0;
	var randomInt32 = () => {
		let x;

		if( next >= N ){
			state = twist( state );
			next = 0;
		}

		x = state[ next++ ];

		// Tempering
		x ^=  x >>> 11;
		x ^= ( x  <<  7 ) & 0x9d2c5680;
		x ^= ( x  << 15 ) & 0xefc60000;
		x ^=  x >>> 18;

		// Convert to unsigned
		return x >>> 0;
	};
	var api = {
		// [0,0xffffffff]
		"genrand_int32": () => randomInt32(),
		// [0,0x7fffffff]
		"genrand_int31": () => randomInt32() >>> 1,
		// [0,1]
		"genrand_real1": () => randomInt32() * ( 1.0 / 4294967295.0 ),
		// [0,1)
		"genrand_real2": () => randomInt32() * ( 1.0 / 4294967296.0 ),
		// (0,1)
		"genrand_real3": () => ( randomInt32() + 0.5 ) * ( 1.0 / 4294967296.0 ),
		// [0,1), 53-bit resolution
		"genrand_res53": () => {
			let a = randomInt32() >>> 5;
			let b = randomInt32() >>> 6;

			return ( a * 67108864.0 + b ) * ( 1.0 / 9007199254740992.0 );
		},

		"randomNumber": () => randomInt32(),
		"random31Bit": () => api.genrand_int31(),
		"randomInclusive": () => api.genrand_real1(),
		"random": () => api.genrand_real2(), // returns values just like Math.random
		"randomExclusive": () => api.genrand_real3(),
		"random53Bit": () => api.genrand_res53()
	};

	return api;
}


/***/ }),

/***/ "@novablocks/block-editor":
/*!*********************************************!*\
  !*** external ["novablocks","blockEditor"] ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["novablocks"]["blockEditor"]; }());

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