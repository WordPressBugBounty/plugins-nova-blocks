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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/collection/build/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./packages/collection/build/frontend.js":
/*!***********************************************!*\
  !*** ./packages/collection/build/frontend.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./frontend/carousel */ "./packages/collection/build/frontend/carousel/index.js");

__webpack_require__(/*! ./frontend/grid */ "./packages/collection/build/frontend/grid/index.js");


/***/ }),

/***/ "./packages/collection/build/frontend/carousel/index.js":
/*!**************************************************************!*\
  !*** ./packages/collection/build/frontend/carousel/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ "jquery"));

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _utils2 = __webpack_require__(/*! ./utils */ "./packages/collection/build/frontend/carousel/utils.js");

// on document ready
(0, _jquery.default)(function () {
  initializeCarousels();
});

var initializeCarousels = function initializeCarousels() {
  if (_utils.IS_EDITOR || _utils.IS_CUSTOMIZER) {
    return;
  }

  var $carousels = (0, _jquery.default)('.nb-collection__layout--carousel');
  $carousels.each(function (index, slider) {
    var $carousel = (0, _jquery.default)(slider);
    var $block = $carousel.closest('[data-layout-style="carousel"]');
    var attributes = $block.data();
    var PALETTE_CLASS = "sm-palette-".concat(attributes.palette);
    var PALETTE_VARIATION_CLASS = "sm-variation-".concat(attributes.contentPaletteVariation);
    var CONTENT_SIGNAL_CLASS = "sm-color-signal-".concat(attributes.contentColorSignal);
    var PREV_ARROW = "<button class=\"slick-prev ".concat(PALETTE_CLASS, " ").concat(PALETTE_VARIATION_CLASS, " ").concat(CONTENT_SIGNAL_CLASS, "\" aria-label=\"Previous\" type=\"button\">Previous</button>");
    var NEXT_ARROW = "<button class=\"slick-next ".concat(PALETTE_CLASS, " ").concat(PALETTE_VARIATION_CLASS, " ").concat(CONTENT_SIGNAL_CLASS, "\" aria-label=\"Next\" type=\"button\">Next</button>");
    var variableWidth = attributes.carouselLayout === 'variable' || attributes.carouselLayout === 'content';
    var showDots = attributes.showPagination === 1;
    var showArrows = attributes.showArrows === 1;
    var scrollingEffect = $block.data('scrollingEffect');
    var use3D = scrollingEffect === 'static';
    var SLICK_OPTIONS = {
      dotsClass: "slick-dots ".concat(PALETTE_CLASS, " ").concat(PALETTE_VARIATION_CLASS, " ").concat(CONTENT_SIGNAL_CLASS),
      prevArrow: PREV_ARROW,
      nextArrow: NEXT_ARROW,
      customPaging: function customPaging(slider, i) {
        var index = i + 1;
        var sIndex = index <= 9 ? "<span>0</span>".concat(index) : index;
        return (0, _jquery.default)('<button type="button" />').html(sIndex);
      },
      mobileFirst: true,
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: 'calc(var(--nb-sidecar-sides) - var(--nb-grid-spacing) / 4)',
      variableWidth: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          dots: showDots,
          arrows: showArrows,
          slidesToShow: variableWidth ? 1 : attributes.columns,
          centerMode: false,
          variableWidth: variableWidth
        }
      }]
    };

    if (attributes.cardLayout === 'stacked' && attributes.columns === 1 && attributes.carouselLayout !== 'variable') {
      Object.assign(SLICK_OPTIONS, {
        // for simpler reveal transitions between slides
        fade: true,
        speed: 1000
      });
      $carousel.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        (0, _utils2.onBeforeSlideChange)(event, slick, currentSlide, nextSlide, use3D);
      });
    }

    if ($carousel.children().length > 1) {
      $carousel.slick(SLICK_OPTIONS);
    }
  });
};


/***/ }),

/***/ "./packages/collection/build/frontend/carousel/transition.js":
/*!*******************************************************************!*\
  !*** ./packages/collection/build/frontend/carousel/transition.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var TRANSITION_DURATION = 1000;
var TRANSITION_EASING = 'easeInOutCirc';
var FOREGROUND_SELECTOR = '.nb-supernova-item__content';
var BACKGROUND_SELECTOR = '.nb-supernova-item__media-wrapper';

var moveLeft = function moveLeft(element, value, use3D) {
  if (use3D) {
    element.style.transform = "translate3d(".concat(value, "px,0,0)");
    return;
  }

  element.style.left = "".concat(value, "px");
};

var transition = function transition($current, $next) {
  var sign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var use3D = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var slideWidth = $current.outerWidth();
  var move = 300;
  var next = $next.children().get(0);
  var nextFg = $next.find(FOREGROUND_SELECTOR).get(0);
  var nextBg = $next.find(BACKGROUND_SELECTOR).get(0);
  var currentBg = $current.find(BACKGROUND_SELECTOR).get(0);
  $current.velocity({
    tween: [0, 1]
  }, {
    duration: TRANSITION_DURATION,
    easing: TRANSITION_EASING,
    begin: function begin() {
      // make sure the sliders we're animating between have the correct zIndex
      $current.addClass('slick-slide--current');
      $next.addClass('slick-slide--next');
      next.style.position = 'relative';

      if (nextFg) {
        nextFg.style.position = 'relative';
      }
    },
    progress: function progress(elements, complete, remaining, start, tweenValue) {
      if (next) {
        moveLeft(next, slideWidth * tweenValue * sign, use3D);
      }

      if (nextFg) {
        moveLeft(nextFg, -slideWidth * tweenValue * sign, use3D);
      }

      if (nextBg) {
        moveLeft(nextBg, (move - slideWidth) * tweenValue * sign, use3D);
      }

      if (currentBg) {
        moveLeft(currentBg, -move * (1 - tweenValue) * sign, use3D);
      }

      var resize = new CustomEvent('nb:slick-update');
      window.dispatchEvent(resize);
    },
    complete: function complete() {
      $current.removeClass('slick-slide--current');
      $next.removeClass('slick-slide--next');
    }
  });
};

var _default = transition;
exports.default = _default;


/***/ }),

/***/ "./packages/collection/build/frontend/carousel/utils.js":
/*!**************************************************************!*\
  !*** ./packages/collection/build/frontend/carousel/utils.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onBeforeSlideChange = exports.hasFixedBackground = exports.getDirection = void 0;

var _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ "jquery"));

var _transition = _interopRequireDefault(__webpack_require__(/*! ./transition */ "./packages/collection/build/frontend/carousel/transition.js"));

var hasFixedBackground = function hasFixedBackground($slide) {
  var fixed = false;

  if ($slide.find('.novablocks-doppler__target').css('position') === 'fixed') {
    return true;
  }

  return fixed;
};

exports.hasFixedBackground = hasFixedBackground;

var onBeforeSlideChange = function onBeforeSlideChange(event, slick, currentSlide, nextSlide) {
  var use3D = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var $currentSlide = (0, _jquery.default)(slick.$slides[currentSlide]);
  var $nextSlide = (0, _jquery.default)(slick.$slides[nextSlide]);
  var direction = getDirection(slick, currentSlide, nextSlide);
  (0, _transition.default)($currentSlide, $nextSlide, direction, use3D);
};

exports.onBeforeSlideChange = onBeforeSlideChange;

var getDirection = function getDirection(slick, currentSlide, nextSlide) {
  if (slick.slideCount > 2) {
    if (currentSlide === 0 && nextSlide === slick.slideCount - 1) {
      return -1;
    }

    if (nextSlide < currentSlide && (nextSlide !== 0 || currentSlide !== slick.slideCount - 1)) {
      return -1;
    }
  }

  return 1;
};

exports.getDirection = getDirection;


/***/ }),

/***/ "./packages/collection/build/frontend/grid/handle-classic-grid.js":
/*!************************************************************************!*\
  !*** ./packages/collection/build/frontend/grid/handle-classic-grid.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleClassicGrid = void 0;

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var handleClassicGrid = function handleClassicGrid(grid, block, attributes) {
  var columns = attributes.columns,
      isLandscape = attributes.isLandscape;
  var orientation = isLandscape ? 'landscape' : 'portrait';
  var areaClassname = (0, _utils.getAreaClassnameByWidthRatio)(1 / columns);
  (0, _utils.addClass)(grid, "nb-grid__area--".concat(orientation, " ").concat(areaClassname));
  (0, _utils.addClass)(block, 'novablocks-block--ready');
};

exports.handleClassicGrid = handleClassicGrid;


/***/ }),

/***/ "./packages/collection/build/frontend/grid/handle-masonry-grid.js":
/*!************************************************************************!*\
  !*** ./packages/collection/build/frontend/grid/handle-masonry-grid.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMasonryGrid = void 0;

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var handleMasonryGrid = function handleMasonryGrid(grid, attributes) {
  var columns = attributes.columns;
  var groups = Array.from(grid.children).reduce(function (acc, curr, index) {
    if (!acc[index % columns]) {
      acc[index % columns] = [];
    }

    acc[index % columns].push(curr);
    return acc;
  }, []);
  groups.forEach(function (group) {
    var column = document.createElement('div');
    (0, _utils.addClass)(column, 'nb-collection__layout-column');
    group.forEach(function (groupItem) {
      column.appendChild(groupItem);
    });
    grid.appendChild(column);
  });
};

exports.handleMasonryGrid = handleMasonryGrid;


/***/ }),

/***/ "./packages/collection/build/frontend/grid/handle-parametric-grid.js":
/*!***************************************************************************!*\
  !*** ./packages/collection/build/frontend/grid/handle-parametric-grid.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleParametricGrid = void 0;

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var defaultBlockWidth = 1152; // magic

var handleParametricGrid = function handleParametricGrid(grid, block, attributes) {
  var posts = Array.from(grid.children);
  var header = block.querySelector('.nb-collection__header');
  var body = block.querySelector('.nb-collection__body');
  var onResize = (0, _utils.debounce)(recreateLayout, 100);
  (0, _utils.remove)(header);
  createLayout();
  (0, _utils.addClass)(block, 'novablocks-block--ready');
  window.addEventListener('resize', onResize);

  function createLayout() {
    posts.forEach(_utils.remove);
    (0, _utils.empty)(grid);
    var clone = block.querySelector('.js-collection-element-clone');
    (0, _utils.remove)(clone);
    var addedCards = 0;
    var areaColumns = (0, _utils.applyLayoutEngine)(attributes);
    var columnsCount = areaColumns.length;
    var firstSet = Math.floor((columnsCount - 1) / 2);
    var secondSet = columnsCount - 1 - firstSet;

    if ((0, _utils.below)('lap')) {
      for (var i = 0; i < firstSet; i++) {
        (0, _utils.removeSmallestColumn)(areaColumns);
      }

      if ((0, _utils.below)('tablet')) {
        for (var _i = 0; _i < secondSet; _i++) {
          (0, _utils.removeSmallestColumn)(areaColumns);
        }
      }
    }

    (0, _utils.normalizeColumns)(areaColumns, attributes);
    (0, _utils.redistributeCardsInAreas)(areaColumns, posts.length, attributes);
    var gridcolumns = attributes.flipcolsrows ? attributes.gridrows : attributes.gridcolumns;
    var gridrows = attributes.flipcolsrows ? attributes.gridcolumns : attributes.gridrows;
    var maxcolumns = areaColumns.reduce(function (acc, column) {
      return Math.max(acc, column.col + column.width - 1);
    }, 0);
    var maxrows = areaColumns.reduce(function (acc, column) {
      return Math.max(acc, column.row + column.height - 1);
    }, 0);
    gridcolumns = Math.min(gridcolumns, maxcolumns);
    gridrows = Math.min(gridrows, maxrows);
    var compiledAttributes = Object.assign({}, attributes, {
      gridcolumns: attributes.flipcolsrows ? gridrows : gridcolumns,
      gridrows: attributes.flipcolsrows ? gridcolumns : gridrows
    });
    (0, _utils.applyCSS)(grid, (0, _utils.getGridStyle)(compiledAttributes));

    if (header && ((0, _utils.below)('lap') || attributes.headerPosition === 0)) {
      var newHeader = header.cloneNode(true);
      (0, _utils.addClass)(newHeader, 'js-collection-element-clone');
      body.insertAdjacentElement('beforeStart', newHeader);
    }

    for (var _i2 = 0; _i2 < areaColumns.length; _i2++) {
      var areaColumn = areaColumns[_i2];
      var areas = areaColumn.areas,
          row = areaColumn.row,
          col = areaColumn.col,
          width = areaColumn.width,
          height = areaColumn.height;
      var $column = document.createElement('div');
      (0, _utils.addClass)($column, 'nb-grid__column');
      $column.style['grid-area'] = "".concat(row, " / ").concat(col, " / span ").concat(height, " / span ").concat(width); //      $column.attr( 'data-area', `${ row } / ${ col } / span ${ height } / span ${ width }` );

      var _loop = function _loop(j) {
        var area = areas[j];
        var blockWidthRatio = Math.min(1, grid.offsetWidth / defaultBlockWidth);
        var areaClassName = (0, _utils.getAreaClassname)(area, attributes, blockWidthRatio);
        addedCards += area.postsCount;
        var $area = document.createElement('div');
        (0, _utils.addClass)($area, areaClassName);
        Array.from(Array(area.postsCount).keys()).map(function (i) {
          var gridItem = document.createElement('div');
          var card = posts[addedCards - area.postsCount + i];
          var landscape = (0, _utils.isLandscape)(area, attributes);
          (0, _utils.addClass)(gridItem, 'nb-grid__item');
          (0, _utils.toggleClass)(card, 'nb-card--landscape', !!landscape);
          (0, _utils.toggleClass)(card, 'nb-card--portrait', !landscape);
          gridItem.appendChild(card);

          if (header && !(0, _utils.below)('lap') && attributes.headerPosition === addedCards - area.postsCount + i + 1) {
            var wrapper = document.createElement('div');

            var _newHeader = header.cloneElement(true);

            (0, _utils.addClass)(wrapper, 'nb-grid__item js-collection-element-clone');
            wrapper.appendChild(_newHeader);
            $area.appendChild(wrapper);
          }

          $area.appendChild(gridItem);
        });
        $column.appendChild($area);
      };

      for (var j = 0; j < areas.length; j++) {
        _loop(j);
      }

      grid.appendChild($column);
    }
  }

  function recreateLayout() {
    grid.innerHTML = posts.reduce(function (html, post) {
      return html + post.outerHTML;
    }, '');
    (0, _utils.applyCSS)(grid, {
      display: '',
      gridTemplateColumns: '',
      gridTemplateRowss: ''
    });
    posts.forEach(function (post) {
      (0, _utils.removeClass)(post, 'nb-card--landscape nb-card--portrait');
    });
    createLayout();
  }
};

exports.handleParametricGrid = handleParametricGrid;


/***/ }),

/***/ "./packages/collection/build/frontend/grid/index.js":
/*!**********************************************************!*\
  !*** ./packages/collection/build/frontend/grid/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _domReady = _interopRequireDefault(__webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready"));

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _handleClassicGrid = __webpack_require__(/*! ./handle-classic-grid */ "./packages/collection/build/frontend/grid/handle-classic-grid.js");

var _handleMasonryGrid = __webpack_require__(/*! ./handle-masonry-grid */ "./packages/collection/build/frontend/grid/handle-masonry-grid.js");

var _handleParametricGrid = __webpack_require__(/*! ./handle-parametric-grid */ "./packages/collection/build/frontend/grid/handle-parametric-grid.js");

(0, _domReady.default)(function () {
  if (_utils.IS_EDITOR || _utils.IS_CUSTOMIZER) {
    return;
  }

  var grids = document.querySelectorAll('.nb-collection__layout');
  grids.forEach(function (grid) {
    var block = grid.closest('[data-layout-style]');
    var attributes = (0, _utils.getAttributes)(block);

    if (['classic', 'carousel'].includes(attributes.layoutStyle)) {
      (0, _handleClassicGrid.handleClassicGrid)(grid, block, attributes);
    }

    if ('parametric' === attributes.layoutStyle) {
      (0, _handleParametricGrid.handleParametricGrid)(grid, block, attributes);
    }

    if ('masonry' === attributes.layoutStyle) {
      (0, _handleMasonryGrid.handleMasonryGrid)(grid, attributes);
    }
  });
  var resize = new CustomEvent('nb:layout');
  window.dispatchEvent(resize);
});


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