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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/shape-modeling/build/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/shape-modeling/build/frontend.js":
/*!***************************************************!*\
  !*** ./packages/shape-modeling/build/frontend.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./frontend/index */ "./packages/shape-modeling/build/frontend/index.js");


/***/ }),

/***/ "./packages/shape-modeling/build/frontend/index.js":
/*!*********************************************************!*\
  !*** ./packages/shape-modeling/build/frontend/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/shape-modeling/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _domReady = _interopRequireDefault(__webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready"));

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _utils2 = __webpack_require__(/*! ../utils */ "./packages/shape-modeling/build/utils/index.js");

var _utils3 = __webpack_require__(/*! ./utils */ "./packages/shape-modeling/build/frontend/utils.js");

(0, _domReady.default)(function () {
  if (_utils.IS_EDITOR || _utils.IS_CUSTOMIZER) {
    return;
  }

  var targets = document.querySelectorAll('[data-shape-modeling-target]');
  targets.forEach(function (target) {
    var seedOffsetData = target.dataset.shapeModelingShapeOffset;
    var seedOffset = seedOffsetData ? parseInt(seedOffsetData, 10) : 0;
    var block = target.closest('[data-blob-sides]');
    var attributes = (0, _utils.getAttributes)(block);
    var blobsEnableMask = attributes.blobsEnableMask,
        blobsEnableDecoration = attributes.blobsEnableDecoration;
    var newAttributes = Object.assign({}, attributes, {
      blobPatternSeed: attributes.blobPatternSeed + seedOffset,
      blobMaskPatternSeed: attributes.blobMaskPatternSeed + seedOffset
    });
    var blobAtts = (0, _utils2.getBlobAttsFromAttributes)(newAttributes, 'blob');
    (0, _utils3.wrapTarget)(target, attributes);
    var blobMix = target.closest('.blob-mix');
    var blobMixMedia = target.closest('.blob-mix__media');
    var blobMixMask = target.closest('.blob-mix__mask');
    var blobMixMediaStyles = (0, _utils2.getBlobMediaStyles)(attributes);
    Object.assign(blobMixMedia.style, blobMixMediaStyles);

    if (!!blobsEnableDecoration) {
      var svg = (0, _utils3.getShapeDecorationSVG)(blobAtts);
      blobMixMedia.insertAdjacentElement('beforebegin', svg);
    }

    if (blobsEnableMask) {
      var blobMaskAtts = (0, _utils2.getBlobAttsFromAttributes)(newAttributes, 'blobMask');
      var svgMaskPath = (0, _utils2.generatePath)(blobMaskAtts);
      var blobMixMaskStyles = (0, _utils2.getBlobMaskStyles)(svgMaskPath, (0, _utils2.getBlobViewBox)(attributes));
      Object.assign(blobMixMask.style, blobMixMaskStyles);
    }

    var blobMixStyles = (0, _utils2.getBlobStyles)(attributes);
    Object.keys(blobMixStyles).forEach(function (key) {
      blobMix.style.setProperty(key, blobMixStyles[key]);
    });
  });
});


/***/ }),

/***/ "./packages/shape-modeling/build/frontend/utils.js":
/*!*********************************************************!*\
  !*** ./packages/shape-modeling/build/frontend/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapTarget = exports.getShapeDecorationSVG = exports.getBlobMaskClassname = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./packages/shape-modeling/build/utils/index.js");

var _utils2 = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var getShapeDecorationSVG = function getShapeDecorationSVG(blobAtts) {
  var svgPath = (0, _utils.generatePath)(blobAtts);
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  (0, _utils2.addClass)(svg, 'blob-mix__decoration');
  svg.setAttribute('viewBox', '0 0 20 20');
  path.setAttribute('d', svgPath);
  svg.appendChild(path);
  return svg;
};

exports.getShapeDecorationSVG = getShapeDecorationSVG;

var getBlobMaskClassname = function getBlobMaskClassname(attributes) {
  var contentAttributes = Object.assign({}, attributes, {
    colorSignal: attributes.contentColorSignal,
    paletteVariation: attributes.contentPaletteVariation,
    useSourceColorAsReference: false
  });
  return "blob-mix__mask ".concat((0, _utils2.getColorSignalClassnames)(contentAttributes, true));
};

exports.getBlobMaskClassname = getBlobMaskClassname;

var wrapTarget = function wrapTarget(target, attributes) {
  var wrapper1 = document.createElement('div');
  var wrapper2 = document.createElement('div');
  var wrapper3 = document.createElement('div');
  var blobMaskClassname = getBlobMaskClassname(attributes);
  (0, _utils2.addClass)(wrapper1, 'blob-mix');
  (0, _utils2.addClass)(wrapper2, 'novablocks-media-composition__grid-item-mask blob-mix__media');
  (0, _utils2.addClass)(wrapper3, blobMaskClassname);
  target.insertAdjacentElement('afterend', wrapper1);
  wrapper1.appendChild(wrapper2);
  wrapper2.appendChild(wrapper3);
  wrapper3.appendChild(target);
};

exports.wrapTarget = wrapTarget;


/***/ }),

/***/ "./packages/shape-modeling/build/utils/get-bounds-of-curve.js":
/*!********************************************************************!*\
  !*** ./packages/shape-modeling/build/utils/get-bounds-of-curve.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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

var _default = getBoundsOfCurve;
exports.default = _default;


/***/ }),

/***/ "./packages/shape-modeling/build/utils/get-random-attributes.js":
/*!**********************************************************************!*\
  !*** ./packages/shape-modeling/build/utils/get-random-attributes.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/shape-modeling/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./packages/shape-modeling/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getRandomAttributes = function getRandomAttributes() {
  return _objectSpread(_objectSpread(_objectSpread({
    blobsEnableMask: (0, _utils.getRandomFromArray)([true, true, true]),
    blobsEnableDecoration: (0, _utils.getRandomFromArray)([true, true, false])
  }, getRandomShapeAttributes('blob')), getRandomShapeAttributes('blobMask')), {}, {
    blobsHorizontalDisplacement: (0, _utils.getRandomBetween)(3, 7) * 10,
    blobsVerticalDisplacement: (0, _utils.getRandomBetween)(3, 7) * 10,
    blobsSizeBalance: (0, _utils.getRandomBetween)(4, 6) * 10
  });
};

var getRandomShapeAttributes = function getRandomShapeAttributes(prefix) {
  var _ref;

  var sides = (0, _utils.getRandomBetween)(4, 7);
  var patternSeed = (0, _utils.getRandomBetween)(0, 10) * 10;
  var complexity = (0, _utils.getRandomFromArray)([0, 50, 100, 100, 100]);
  var smoothness = (0, _utils.getRandomFromArray)([0, 50, 100, 100, 100]);
  var rotation = (0, _utils.getRandomBetween)(0, 10) * 10;
  return _ref = {}, (0, _defineProperty2.default)(_ref, "".concat(prefix, "Sides"), sides), (0, _defineProperty2.default)(_ref, "".concat(prefix, "PatternSeed"), patternSeed), (0, _defineProperty2.default)(_ref, "".concat(prefix, "Complexity"), complexity), (0, _defineProperty2.default)(_ref, "".concat(prefix, "Smoothness"), smoothness), (0, _defineProperty2.default)(_ref, "".concat(prefix, "Rotation"), rotation), _ref;
};

var _default = getRandomAttributes;
exports.default = _default;


/***/ }),

/***/ "./packages/shape-modeling/build/utils/index.js":
/*!******************************************************!*\
  !*** ./packages/shape-modeling/build/utils/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/shape-modeling/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBoundsFromCurves = exports.getBlobViewBox = exports.getBlobTransform = exports.getBlobStyles = exports.getBlobScalingProps = exports.getBlobMediaStyles = exports.getBlobMaskStyles = exports.getBlobAttsFromAttributes = exports.generatePath = exports.BLOB_RADIUS = void 0;
Object.defineProperty(exports, "getBoundsOfCurve", {
  enumerable: true,
  get: function get() {
    return _getBoundsOfCurve2.default;
  }
});
exports.getPointsArray = exports.getPathFromCurvePoints = exports.getDefaultBounds = exports.getCurvePointsFromPoints = exports.getCurvePoints = void 0;
Object.defineProperty(exports, "getRandomAttributes", {
  enumerable: true,
  get: function get() {
    return _getRandomAttributes.default;
  }
});
exports.scalePoints = exports.scaleCurvePoints = exports.initializeBounds = exports.getRatioArray = void 0;

var _fastMersenneTwister = __webpack_require__(/*! fast-mersenne-twister */ "./packages/shape-modeling/node_modules/fast-mersenne-twister/mersenne.js");

var _getBoundsOfCurve2 = _interopRequireDefault(__webpack_require__(/*! ./get-bounds-of-curve */ "./packages/shape-modeling/build/utils/get-bounds-of-curve.js"));

var _getRandomAttributes = _interopRequireDefault(__webpack_require__(/*! ./get-random-attributes */ "./packages/shape-modeling/build/utils/get-random-attributes.js"));

var BLOB_MAX_SIDES = 12;
var BLOB_RADIUS = 10;
exports.BLOB_RADIUS = BLOB_RADIUS;

var getRatioArray = function getRatioArray(sides, patternSeed) {
  var pseudoRandomGenerator = (0, _fastMersenneTwister.MersenneTwister)(patternSeed);
  return Array.from(Array(sides).keys()).map(function () {
    var options = {
      min: 1,
      max: 10
    };
    return Math.floor(pseudoRandomGenerator.random() * (options.max - options.min + 1) + options.min) / 10;
  });
};

exports.getRatioArray = getRatioArray;

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

exports.getPointsArray = getPointsArray;

var generatePath = function generatePath(attributes) {
  var sides = attributes.sides || 0;
  var curvePoints = getCurvePoints(attributes);
  var missingPoints = BLOB_MAX_SIDES - sides;
  return getPathFromCurvePoints(curvePoints, missingPoints);
};

exports.generatePath = generatePath;

var getCurvePoints = function getCurvePoints(attributes) {
  var curvePoints = getCurvePointsFromPoints(attributes);
  var bounds = getBoundsFromCurves(curvePoints);
  scaleCurvePoints(curvePoints, bounds);
  return curvePoints;
};

exports.getCurvePoints = getCurvePoints;

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

exports.getPathFromCurvePoints = getPathFromCurvePoints;

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

exports.getCurvePointsFromPoints = getCurvePointsFromPoints;

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

exports.getDefaultBounds = getDefaultBounds;

var initializeBounds = function initializeBounds() {
  return {
    xMax: 0,
    yMax: 0,
    xMin: BLOB_RADIUS,
    yMin: BLOB_RADIUS
  };
};

exports.initializeBounds = initializeBounds;

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

    var _getBoundsOfCurve = (0, _getBoundsOfCurve2.default)(m1x, m1y, x1, y1, x2, y2, m2x, m2y),
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

exports.getBoundsFromCurves = getBoundsFromCurves;

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

exports.scaleCurvePoints = scaleCurvePoints;

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

exports.scalePoints = scalePoints;

var getBlobAttsFromAttributes = function getBlobAttsFromAttributes(attributes, prefix) {
  return {
    sides: attributes["".concat(prefix, "Sides")],
    patternSeed: attributes["".concat(prefix, "PatternSeed")],
    complexity: attributes["".concat(prefix, "Complexity")],
    smoothness: attributes["".concat(prefix, "Smoothness")],
    rotation: attributes["".concat(prefix, "Rotation")]
  };
};

exports.getBlobAttsFromAttributes = getBlobAttsFromAttributes;

var getBlobTransform = function getBlobTransform(scale, horizontalDisplacement, verticalDisplacement) {
  return "translate( ".concat((1 - scale) * horizontalDisplacement, "%, ").concat((1 - scale) * verticalDisplacement, "% ) scale( ").concat(scale, " )");
};

exports.getBlobTransform = getBlobTransform;

var getBlobStyles = function getBlobStyles(attributes) {
  var _getBlobScalingProps = getBlobScalingProps(attributes),
      decorationScale = _getBlobScalingProps.decorationScale,
      xOffset = _getBlobScalingProps.xOffset,
      yOffset = _getBlobScalingProps.yOffset;

  return {
    '--blob-mix-decoration-transform': getBlobTransform(decorationScale, 100 - xOffset, 100 - yOffset)
  };
};

exports.getBlobStyles = getBlobStyles;

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

exports.getBlobMediaStyles = getBlobMediaStyles;

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

exports.getBlobScalingProps = getBlobScalingProps;

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

exports.getBlobMaskStyles = getBlobMaskStyles;

var getBlobViewBox = function getBlobViewBox(attributes) {
  return '0 0 20 20';
};

exports.getBlobViewBox = getBlobViewBox;


/***/ }),

/***/ "./packages/shape-modeling/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************************************!*\
  !*** ./packages/shape-modeling/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/shape-modeling/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************************************!*\
  !*** ./packages/shape-modeling/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

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