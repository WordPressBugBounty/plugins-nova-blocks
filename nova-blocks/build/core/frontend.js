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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/core/build/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/core/build/frontend.js":
/*!*****************************************!*\
  !*** ./packages/core/build/frontend.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./frontend/scroll-indicator */ "./packages/core/build/frontend/scroll-indicator/index.js");

__webpack_require__(/*! ./frontend/position-indicators */ "./packages/core/build/frontend/position-indicators/index.js");

__webpack_require__(/*! ./frontend/duotone */ "./packages/core/build/frontend/duotone/index.js");

__webpack_require__(/*! ./frontend/break-align */ "./packages/core/build/frontend/break-align/index.js");


/***/ }),

/***/ "./packages/core/build/frontend/break-align/handle-aligned-blocks/index.js":
/*!*********************************************************************************!*\
  !*** ./packages/core/build/frontend/break-align/handle-aligned-blocks/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetAlignedBlocks = exports.maybeAddBreakClasses = exports.handleAlignedBlocks = void 0;

var _domReady = _interopRequireDefault(__webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready"));

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _utils2 = __webpack_require__(/*! ./utils */ "./packages/core/build/frontend/break-align/handle-aligned-blocks/utils.js");

var maybeAddBreakClasses = function maybeAddBreakClasses() {
  var contentBlocks = (0, _utils.getContentBlocksArray)();
  contentBlocks.forEach(_utils.maybeAddBreakClassesToElement);
}; // We want to listen to Content Width setting
// change inside Customizer Preview,
// so we can break wide and full elements
// if there is not enough available space.


exports.maybeAddBreakClasses = maybeAddBreakClasses;

var handleCustomizerChanges = function handleCustomizerChanges() {
  var _window, _window$wp;

  var options = ['sm_site_container_width', 'sm_content_inset', 'sm_spacing_level'];

  if (!!((_window = window) !== null && _window !== void 0 && (_window$wp = _window.wp) !== null && _window$wp !== void 0 && _window$wp.customize)) {
    options.forEach(function (option) {
      wp.customize(option, function (setting) {
        setting.bind((0, _utils.debounce)(handleAlignedBlocks, 200));
      });
    });
  }
};

var resetAlignedBlocks = function resetAlignedBlocks() {
  (0, _utils.cleanupBreakClasses)();
  (0, _utils2.makeSidebarsNotReady)();
  maybeAddBreakClasses();
  (0, _utils2.makeSidebarsReady)();
};

exports.resetAlignedBlocks = resetAlignedBlocks;

var handleAlignedBlocks = function handleAlignedBlocks() {
  var onResize = (0, _utils.debounce)(resetAlignedBlocks, 200);
  (0, _domReady.default)(function () {
    resetAlignedBlocks();
    handleCustomizerChanges();
  });
  window.addEventListener('resize', onResize);
};

exports.handleAlignedBlocks = handleAlignedBlocks;


/***/ }),

/***/ "./packages/core/build/frontend/break-align/handle-aligned-blocks/utils.js":
/*!*********************************************************************************!*\
  !*** ./packages/core/build/frontend/break-align/handle-aligned-blocks/utils.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSidebarsReady = exports.makeSidebarsNotReady = void 0;

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var makeSidebarsNotReady = function makeSidebarsNotReady() {
  var sidebars = Array.from(document.querySelectorAll('.nb-sidecar--sidebar-ready'));
  sidebars.forEach(function (sidebar) {
    sidebar.classList.remove('nb-sidecar--sidebar-ready');
  });
};

exports.makeSidebarsNotReady = makeSidebarsNotReady;

var makeSidebarsReady = function makeSidebarsReady() {
  var sidebars = Array.from(document.querySelectorAll('.nb-sidecar--sticky-sidebar'));
  sidebars.forEach(function (sidebar) {
    sidebar.classList.add('nb-sidecar--sidebar-ready');
  });
};

exports.makeSidebarsReady = makeSidebarsReady;


/***/ }),

/***/ "./packages/core/build/frontend/break-align/handle-overlapping-on-scroll/index.js":
/*!****************************************************************************************!*\
  !*** ./packages/core/build/frontend/break-align/handle-overlapping-on-scroll/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleOverlappingClassname = exports.handleOverlappingOnScroll = exports.getOverlappingSets = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./packages/core/node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./packages/core/node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _domReady = _interopRequireDefault(__webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready"));

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var HIDDEN_BLOCK_CLASS = 'novablocks-hidden-block'; // This function will handle sticky block
// behaviour on scroll.

var toggleOverlappingClassname = function toggleOverlappingClassname(overlappingSets) {
  var stickyElements = overlappingSets.map(function (overlappingSet) {
    var _overlappingSet = (0, _slicedToArray2.default)(overlappingSet, 2),
        stickyElement = _overlappingSet[0],
        blocks = _overlappingSet[1];

    var overlap = blocks.some(function (block) {
      return (0, _utils.doOverlap)(stickyElement, block);
    });
    return {
      stickyElement: stickyElement,
      overlap: overlap
    };
  });
  stickyElements.forEach(function (_ref) {
    var stickyElement = _ref.stickyElement,
        overlap = _ref.overlap;

    if (overlap) {
      stickyElement.classList.add(HIDDEN_BLOCK_CLASS);
    } else {
      stickyElement.classList.remove(HIDDEN_BLOCK_CLASS);
    }
  });
};

exports.toggleOverlappingClassname = toggleOverlappingClassname;

var getOverlappingSets = function getOverlappingSets() {
  var sidebars = Array.from(document.querySelectorAll('.nb-sidecar--sticky-sidebar > .nb-sidecar-area--sidebar'));
  return sidebars.reduce(function (acc, sidebar) {
    var sidecar = sidebar.parentElement;
    var stickyElement = sidebar.lastElementChild;
    var blockSelector = '.alignfull, .alignwide, .alignleft, .alignright';
    var blocks = Array.from(sidecar.querySelectorAll(blockSelector)).filter(function (block) {
      return !(0, _utils.matches)(block, '.nb-sidecar');
    });
    var targetBlocks = [];
    blocks.forEach(function (block, index) {
      if (!!block.closest('.nb-sidecar-area--sidebar')) {
        return;
      }

      if (block === stickyElement) {
        return;
      }

      if (block.classList.contains('nb-supernova')) {
        targetBlocks.push.apply(targetBlocks, (0, _toConsumableArray2.default)(Array.from(block.children)));
      } else {
        targetBlocks.push(block);
      }
    });
    return [].concat((0, _toConsumableArray2.default)(acc), [[stickyElement, targetBlocks]]);
  }, []);
}; // We are comparing sticky block top and bottom
// with all content blocks, and if overlaps on scroll,
// we are adding a class, which we will use to add opacity.


exports.getOverlappingSets = getOverlappingSets;

var handleOverlappingOnScroll = function handleOverlappingOnScroll() {
  (0, _domReady.default)(function () {
    var overlappingSets = getOverlappingSets();
    (0, _utils.onScrollRAF)(function () {
      toggleOverlappingClassname(overlappingSets);
    });
  });
};

exports.handleOverlappingOnScroll = handleOverlappingOnScroll;


/***/ }),

/***/ "./packages/core/build/frontend/break-align/index.js":
/*!***********************************************************!*\
  !*** ./packages/core/build/frontend/break-align/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _moveImageClassesToBlock = __webpack_require__(/*! ./move-image-classes-to-block */ "./packages/core/build/frontend/break-align/move-image-classes-to-block.js");

var _handleAlignedBlocks = __webpack_require__(/*! ./handle-aligned-blocks */ "./packages/core/build/frontend/break-align/handle-aligned-blocks/index.js");

var _handleOverlappingOnScroll = __webpack_require__(/*! ./handle-overlapping-on-scroll */ "./packages/core/build/frontend/break-align/handle-overlapping-on-scroll/index.js");

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

if (!_utils.IS_EDITOR) {
  (0, _handleAlignedBlocks.handleAlignedBlocks)();
  (0, _handleOverlappingOnScroll.handleOverlappingOnScroll)();
}


/***/ }),

/***/ "./packages/core/build/frontend/break-align/move-image-classes-to-block.js":
/*!*********************************************************************************!*\
  !*** ./packages/core/build/frontend/break-align/move-image-classes-to-block.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./packages/core/node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _domReady = _interopRequireDefault(__webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready"));

// Image Block Current Markup
// <div><figure><img></img></figure</div>
// For Image Block, the alignment class
// is on figure element, inside the div.
// We need that class to be on div,
// so we are going to alter the markup.
var moveImageClassesToBlock = function moveImageClassesToBlock() {
  // Select all Block Images inside Content.
  var blockImagesSelector = ".nb-sidecar-area--content > .wp-block-image:not([class*='align'])";
  var blockImages = Array.from(document.querySelectorAll(blockImagesSelector));
  blockImages.forEach(function (block) {
    var _block$classList, _image$classList;

    var image = block.querySelector('figure');

    if (!image) {
      return;
    }

    var classList = image.classList; // Add classes to block.

    (_block$classList = block.classList).add.apply(_block$classList, (0, _toConsumableArray2.default)(classList)); // Remove classes from image.


    (_image$classList = image.classList).remove.apply(_image$classList, (0, _toConsumableArray2.default)(classList));
  });
};

(0, _domReady.default)(function () {
  moveImageClassesToBlock();
});


/***/ }),

/***/ "./packages/core/build/frontend/duotone/index.js":
/*!*******************************************************!*\
  !*** ./packages/core/build/frontend/duotone/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ "jquery"));

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var getHexFromConfig = function getHexFromConfig(config) {
  var paletteId = config.paletteId,
      variationIndex = config.variationIndex;
  var palette = (0, _utils.getPaletteConfig)(paletteId);

  if (palette !== null && palette !== void 0 && palette.variations) {
    return palette.variations[variationIndex - 1].bg;
  }

  if (palette !== null && palette !== void 0 && palette.colors && palette.colors.length > variationIndex) {
    return palette.colors[variationIndex - 1];
  }

  return false;
};

(function () {
  var duotoneIncrement = 0;
  (0, _jquery.default)('[data-overlay-filter-type]').filter(function (i, obj) {
    var data = (0, _jquery.default)(obj).data();
    var config = data.overlayFilterDuotoneConfig;
    return data.overlayFilterType === 'duotone' && (config === null || config === void 0 ? void 0 : config.from) && (config === null || config === void 0 ? void 0 : config.to);
  }).each(function (i, obj) {
    var $obj = (0, _jquery.default)(obj);
    var data = $obj.data();
    var _data$overlayFilterDu = data.overlayFilterDuotoneConfig,
        from = _data$overlayFilterDu.from,
        to = _data$overlayFilterDu.to;
    var fromHex = getHexFromConfig(from);
    var toHex = getHexFromConfig(to);
    console.log(from, to);
    var id = "novablocks-duotone-".concat(duotoneIncrement);
    duotoneIncrement = duotoneIncrement + 1;
    $obj.addClass(id);
    var $style = (0, _jquery.default)('<style>').html(".".concat(id, " .nb-supernova-item__media-wrapper :is(img, video) { filter: url( #").concat(id, " ); }"));
    var svgMarkup = (0, _utils.getDuotoneFilterSvg)([fromHex, toHex], id);
    var $svg = (0, _jquery.default)(svgMarkup);
    $style.insertAfter($obj);
    $svg.insertAfter($obj);
  });
})();


/***/ }),

/***/ "./packages/core/build/frontend/position-indicators/index.js":
/*!*******************************************************************!*\
  !*** ./packages/core/build/frontend/position-indicators/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ "jquery"));

var $blocks = (0, _jquery.default)('[data-position-indicators]').filter(function (i, block) {
  return !!block.dataset.positionIndicators;
});

if ($blocks.length > 1 && typeof _jquery.default.fn.bully !== 'undefined') {
  $blocks.bully();
}


/***/ }),

/***/ "./packages/core/build/frontend/scroll-indicator/index.js":
/*!****************************************************************!*\
  !*** ./packages/core/build/frontend/scroll-indicator/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ "jquery"));

var $scrollButtons = (0, _jquery.default)('.nb-scroll-indicator').filter(function (i, obj) {
  return (0, _jquery.default)(obj).closest('[data-scroll-indicator-block]').length;
});
var SCROLL_BUTTON_HIDDEN_CLASS = 'nb-scroll-indicator--hidden';

(function () {
  if (!$scrollButtons.length) {
    return;
  }

  var windowScrollY;
  $scrollButtons.each(function (i, obj) {
    var $scrollButton = (0, _jquery.default)(obj);
    var $hero = $scrollButton.closest('[data-scroll-indicator-block]');
    var isMiddle = $scrollButton.hasClass('.nb-scroll-indicator--middle');
    var heroBox = $hero.get(0).getBoundingClientRect();
    obj.dataset.isMiddle = isMiddle;
    obj.dataset.heroBox = JSON.stringify(heroBox);
    $scrollButton.on('click', function () {
      var heroBoxTop = heroBox.y || heroBox.top;
      window.scrollTo({
        top: heroBoxTop + heroBox.height,
        behavior: 'smooth'
      });
    });
  });
  updateScroll();
  (0, _jquery.default)(window).on('scroll', updateScroll);

  function updateScroll() {
    windowScrollY = window.scrollY;
    hideButtonOnScroll(windowScrollY);
  }

  function hideButtonOnScroll(scrollY) {
    $scrollButtons.each(function (i, obj) {
      var $scrollButton = (0, _jquery.default)(obj);
      var heroBox = JSON.parse(obj.dataset.heroBox);
      var heroBoxTop = heroBox.top;
      var hideScrollButton = scrollY > heroBoxTop + 200;
      var scrollButtonHidden = $scrollButton.data('is-hidden');

      if (!obj.dataset.isMiddle) {
        return;
      }

      if (hideScrollButton !== scrollButtonHidden) {
        $scrollButton.toggleClass(SCROLL_BUTTON_HIDDEN_CLASS, hideScrollButton);
        $scrollButton.data('is-hidden', hideScrollButton);
      }
    });
  }
})();


/***/ }),

/***/ "./packages/core/node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*******************************************************************************!*\
  !*** ./packages/core/node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*******************************************************************************/
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

/***/ "./packages/core/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!*****************************************************************************!*\
  !*** ./packages/core/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/core/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!********************************************************************************!*\
  !*** ./packages/core/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./packages/core/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/core/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!************************************************************************************!*\
  !*** ./packages/core/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/core/node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!******************************************************************************!*\
  !*** ./packages/core/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/core/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!***********************************************************************************!*\
  !*** ./packages/core/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \***********************************************************************************/
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

/***/ "./packages/core/node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!******************************************************************************!*\
  !*** ./packages/core/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/core/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!********************************************************************************!*\
  !*** ./packages/core/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/core/node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!****************************************************************************!*\
  !*** ./packages/core/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./packages/core/node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./packages/core/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./packages/core/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./packages/core/node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/core/node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!********************************************************************************!*\
  !*** ./packages/core/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./packages/core/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./packages/core/node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./packages/core/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./packages/core/node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/core/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!*****************************************************************************************!*\
  !*** ./packages/core/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./packages/core/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

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

/***/ "@novablocks/utils":
/*!***************************************!*\
  !*** external ["novablocks","utils"] ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["novablocks"]["utils"]; }());

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["domReady"]; }());

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
//# sourceMappingURL=frontend.js.map