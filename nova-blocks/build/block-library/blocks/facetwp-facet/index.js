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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/facetwp-facet/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/block-library/build/blocks/facetwp-facet/attributes.json":
/*!***************************************************************************!*\
  !*** ./packages/block-library/build/blocks/facetwp-facet/attributes.json ***!
  \***************************************************************************/
/*! exports provided: facet, hideCounts, hideLabels, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"facet\":{\"type\":\"string\",\"default\":\"\"},\"hideCounts\":{\"type\":\"boolean\",\"default\":false},\"hideLabels\":{\"type\":\"boolean\",\"default\":false}}");

/***/ }),

/***/ "./packages/block-library/build/blocks/facetwp-facet/edit.js":
/*!*******************************************************************!*\
  !*** ./packages/block-library/build/blocks/facetwp-facet/edit.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./packages/block-library/node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _blockEditor = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

var _serverSideRender = _interopRequireDefault(__webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render"));

var _components = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _blockEditor2 = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");

var meta = {
  $schema: "https://schemas.wp.org/trunk/block.json",
  apiVersion: 2,
  name: "novablocks/facetwp-facet",
  parent: ["novablocks/facetwp-filter"],
  title: "Facet",
  category: "nova-blocks",
  keywords: ["facetwp", "filter"],
  textdomain: "nova-blocks",
  attributes: {},
  supports: {}
};

var useActiveFacet = function useActiveFacet(attributes) {
  var facet = attributes.facet;
  var settings = (0, _blockEditor2.useSettings)();
  return (0, _element.useMemo)(function () {
    var facets = settings === null || settings === void 0 ? void 0 : settings.facetwp_facets;
    return facets.find(function (currentFacet) {
      return currentFacet.name === facet;
    });
  }, [facet]);
};

var Edit = function Edit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var facet = attributes.facet;
  var settings = (0, _blockEditor2.useSettings)();
  var facets = settings === null || settings === void 0 ? void 0 : settings.facetwp_facets;
  var options = [];

  var _useState = (0, _element.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      showDropdown = _useState2[0],
      setShowdropdown = _useState2[1];

  var emptyFacet = {
    label: (0, _i18n.__)('Select', 'nova-blocks'),
    name: ""
  };
  var activeFacet = facets.find(function (option) {
    return option.name === facet;
  }) || emptyFacet;
  var blockProps = (0, _blockEditor.useBlockProps)({
    className: "nb-facetwp-filter__item"
  });
  (0, _element.useEffect)(function () {
    if (facet === "") {
      setShowdropdown(true);
    }
  }, [facet]);
  return (0, _element.createElement)("div", blockProps, (0, _element.createElement)("div", {
    className: "nb-facetwp-filter__item-text"
  }, (0, _element.createElement)("span", {
    className: "nb-facetwp-filter__item-label"
  }, activeFacet.label), (0, _element.createElement)("span", {
    className: "nb-facetwp-filter__item-type"
  }, activeFacet.type)), showDropdown && (0, _element.createElement)("div", {
    className: 'nb-facetwp-filter__dropdown'
  }, facets.map(function (current) {
    return (0, _element.createElement)("div", {
      className: 'nb-facetwp-filter__dropdown-item',
      onClick: function onClick() {
        setShowdropdown(false);
        setAttributes({
          facet: current.name
        });
      }
    }, current.label);
  })), (0, _element.createElement)(FacetInspectorControls, props), (0, _element.createElement)(EditToolbarButton, props));
};

var FacetInspectorControls = function FacetInspectorControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var hideLabels = attributes.hideLabels,
      hideCounts = attributes.hideCounts;
  return (0, _element.createElement)(_blockEditor2.ControlsSection, {
    id: 'setup',
    label: (0, _i18n.__)('Setup', 'nova-blocks')
  }, (0, _element.createElement)(_blockEditor2.ControlsTab, {
    label: (0, _i18n.__)('Settings', 'nova-blocks')
  }, (0, _element.createElement)(_components.ToggleControl, {
    label: (0, _i18n.__)('Hide Label', 'nova-blocks'),
    checked: hideLabels,
    onChange: function onChange() {
      return setAttributes({
        hideLabels: !hideLabels
      });
    }
  }), (0, _element.createElement)(_components.ToggleControl, {
    label: (0, _i18n.__)('Hide Counts', 'nova-blocks'),
    checked: hideCounts,
    onChange: function onChange() {
      return setAttributes({
        hideCounts: !hideCounts
      });
    }
  })));
};

var EditToolbarButton = function EditToolbarButton(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var activeFacet = useActiveFacet(attributes);

  if (!activeFacet) {
    return null;
  }

  return (0, _element.createElement)(_blockEditor.BlockControls, null, (0, _element.createElement)(_components.Toolbar, {
    group: 'block'
  }, (0, _element.createElement)(_components.IconButton, {
    className: "components-icon-button components-toolbar__control",
    label: (0, _i18n.__)('Change Facet', 'nova-blocks'),
    onClick: function onClick() {
      setAttributes({
        facet: ""
      });
    },
    icon: "edit"
  })));
};

var _default = Edit;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/facetwp-facet/index.js":
/*!********************************************************************!*\
  !*** ./packages/block-library/build/blocks/facetwp-facet/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _blocks = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");

var _serverSideRender = _interopRequireDefault(__webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render"));

var _edit = _interopRequireDefault(__webpack_require__(/*! ./edit */ "./packages/block-library/build/blocks/facetwp-facet/edit.js"));

var _attributes = _interopRequireDefault(__webpack_require__(/*! ./attributes */ "./packages/block-library/build/blocks/facetwp-facet/attributes.json"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
var meta = {
  $schema: "https://schemas.wp.org/trunk/block.json",
  apiVersion: 2,
  name: "novablocks/facetwp-facet",
  parent: ["novablocks/facetwp-filter"],
  title: "Facet",
  category: "nova-blocks",
  keywords: ["facetwp", "filter"],
  textdomain: "nova-blocks",
  attributes: {},
  supports: {}
};
(0, _blocks.registerBlockType)(meta.name, {
  attributes: _attributes.default,
  edit: _edit.default,
  save: function save() {
    return null;
  }
});


/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!****************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!**************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!********************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

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

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!***************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!*************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./packages/block-library/node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./packages/block-library/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./packages/block-library/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./packages/block-library/node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!**************************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./packages/block-library/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "@novablocks/block-editor":
/*!*********************************************!*\
  !*** external ["novablocks","blockEditor"] ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["novablocks"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["serverSideRender"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map