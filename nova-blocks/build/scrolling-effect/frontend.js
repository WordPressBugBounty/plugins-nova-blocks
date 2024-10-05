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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/scrolling-effect/build/frontend.js");
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

/***/ "./packages/scrolling-effect/build/frontend.js":
/*!*****************************************************!*\
  !*** ./packages/scrolling-effect/build/frontend.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./frontend/index */ "./packages/scrolling-effect/build/frontend/index.js");


/***/ }),

/***/ "./packages/scrolling-effect/build/frontend/index.js":
/*!***********************************************************!*\
  !*** ./packages/scrolling-effect/build/frontend/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _domReady = _interopRequireDefault(__webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready"));

var _utils = __webpack_require__(/*! ./utils */ "./packages/scrolling-effect/build/frontend/utils.js");

var _utils2 = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var initialize = function initialize() {
  if (_utils2.IS_EDITOR || _utils2.IS_CUSTOMIZER) {
    return;
  }

  var containers = [];

  var updateAllContainersState = function updateAllContainersState() {
    containers.forEach(_utils.updateContainerState);
  };

  var debouncedUpdateAllContainersState = (0, _utils2.debounce)(updateAllContainersState, 100);
  (0, _domReady.default)(function () {
    containers = (0, _utils.getContainers)();
    (0, _utils.initializeContainers)(containers);
    updateAllContainersState();
  });
  window.addEventListener('scroll', updateAllContainersState);
  window.addEventListener('resize', debouncedUpdateAllContainersState);
  window.addEventListener('nb:slick-update', updateAllContainersState);
  window.addEventListener('load', updateAllContainersState);

  var parallaxUpdateLoop = function parallaxUpdateLoop() {
    (0, _utils.updateContainersStyle)(containers);
    requestAnimationFrame(parallaxUpdateLoop);
  };

  requestAnimationFrame(parallaxUpdateLoop);
};

initialize();


/***/ }),

/***/ "./packages/scrolling-effect/build/frontend/utils.js":
/*!***********************************************************!*\
  !*** ./packages/scrolling-effect/build/frontend/utils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateContainersStyle = exports.updateContainerState = exports.initializeContainers = exports.getScrollContainerHeight = exports.getContainers = exports.getConfig = exports.REFERENCES = void 0;

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _utils2 = __webpack_require__(/*! ../utils */ "./packages/scrolling-effect/build/utils.js");

var REFERENCES = {};
exports.REFERENCES = REFERENCES;

var getScrollContainerHeight = function getScrollContainerHeight() {
  var useOrientation = (0, _utils.hasTouchScreen)() && 'orientation' in window;
  return useOrientation && window.screen && window.screen.availHeight || window.innerHeight;
};

exports.getScrollContainerHeight = getScrollContainerHeight;

var getConfig = function getConfig(container) {
  var containerRect = container.getBoundingClientRect();
  return {
    scrollContainerBox: {
      top: 0,
      left: 0,
      height: getScrollContainerHeight()
    },
    containerBox: {
      width: container.offsetWidth,
      height: container.offsetHeight,
      top: containerRect.top,
      right: containerRect.right,
      bottom: containerRect.bottom,
      left: containerRect.left,
      x: containerRect.x,
      y: containerRect.y
    }
  };
};

exports.getConfig = getConfig;

var updateContainerState = function updateContainerState(container) {
  var refId = container.dataset.refId;
  var _REFERENCES$refId = REFERENCES[refId],
      attributes = _REFERENCES$refId.attributes,
      target = _REFERENCES$refId.target,
      config = _REFERENCES$refId.config;
  var newConfig = Object.assign({}, config, getConfig(container));
  var newState = (0, _utils2.getState)(newConfig, attributes);
  Object.assign(REFERENCES[refId], {
    state: newState,
    config: newConfig
  });
};

exports.updateContainerState = updateContainerState;

var initializeContainers = function initializeContainers(containers) {
  containers.forEach(function (container, index) {
    var block = container.closest('[data-scrolling-effect]');
    var attributes = (0, _utils.getAttributes)(block);
    var refId = "container-".concat(index);

    if (!attributes) {
      return;
    }

    var config = getConfig(container);
    container.dataset.refId = refId;
    REFERENCES[refId] = {
      state: (0, _utils2.getState)(config, attributes),
      config: config,
      target: container.querySelector('.novablocks-doppler__target'),
      style: {},
      attributes: attributes
    };
  });
};

exports.initializeContainers = initializeContainers;

var getContainers = function getContainers() {
  return Array.from(document.querySelectorAll('.novablocks-doppler__wrapper')).filter(function (container) {
    var block = container.closest('[data-scrolling-effect]');
    var attributes = (0, _utils.getAttributes)(block);
    return (attributes === null || attributes === void 0 ? void 0 : attributes.scrollingEffect) && attributes.scrollingEffect !== 'static';
  });
};

exports.getContainers = getContainers;

var updateContainersStyle = function updateContainersStyle(containers) {
  containers.forEach(function (container) {
    var refId = container.dataset.refId;
    var _REFERENCES$refId2 = REFERENCES[refId],
        attributes = _REFERENCES$refId2.attributes,
        target = _REFERENCES$refId2.target,
        state = _REFERENCES$refId2.state,
        config = _REFERENCES$refId2.config;
    var cfg = Object.assign({}, state, config);
    var props = (0, _utils2.getProps)(cfg, attributes, true);
    REFERENCES[refId].style = (0, _utils2.getStylesFromProps)(props);
  });
  containers.forEach(function (container) {
    var refId = container.dataset.refId;
    var _REFERENCES$refId3 = REFERENCES[refId],
        target = _REFERENCES$refId3.target,
        style = _REFERENCES$refId3.style;
    Object.assign(target.style, style);
  });
};

exports.updateContainersStyle = updateContainersStyle;


/***/ }),

/***/ "./packages/scrolling-effect/build/utils.js":
/*!**************************************************!*\
  !*** ./packages/scrolling-effect/build/utils.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStylesFromProps = exports.getStyles = exports.getState = exports.getProps = exports.getIntermediateFocalPoint = exports.getFocalPointImage = void 0;

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

exports.getIntermediateFocalPoint = getIntermediateFocalPoint;

var getStyles = function getStyles(config, attributes) {
  var scrollingEffect = attributes.scrollingEffect;

  if ('static' === scrollingEffect) {
    return {};
  }

  var props = getProps(config, attributes);
  return getStylesFromProps(props);
};

exports.getStyles = getStyles;

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

exports.getStylesFromProps = getStylesFromProps;

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

exports.getProps = getProps;

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

exports.getState = getState;

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

exports.getFocalPointImage = getFocalPointImage;


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

/***/ })

/******/ });
//# sourceMappingURL=frontend.js.map