this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["utils"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/utils/build-module/index.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./packages/utils/build-module/array.js":
/*!**********************************************!*\
  !*** ./packages/utils/build-module/array.js ***!
  \**********************************************/
/*! exports provided: range, arrayRotate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayRotate", function() { return arrayRotate; });
var range = function range(min, max) {
  var array = [];

  for (var i = 0; i <= max - min; i++) {
    array.push(i + min);
  }

  return array;
};
var arrayRotate = function arrayRotate(arr, count, reverse) {
  count = count % arr.length;

  for (var i = 1; i <= count; i++) {
    if (reverse) {
      arr.unshift(arr.pop());
    } else {
      arr.push(arr.shift());
    }
  }

  return arr;
};


/***/ }),

/***/ "./packages/utils/build-module/break-align.js":
/*!****************************************************!*\
  !*** ./packages/utils/build-module/break-align.js ***!
  \****************************************************/
/*! exports provided: BREAK_LEFT_CLASS, BREAK_RIGHT_CLASS, cleanupBreakClasses, getAlignedSiblings, getElementBreakClasses, maybeAddBreakClassesToElement, getAdjacentSidebarBlocks, wouldOverlap, doOverlap, getContentBlocksArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAK_LEFT_CLASS", function() { return BREAK_LEFT_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAK_RIGHT_CLASS", function() { return BREAK_RIGHT_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanupBreakClasses", function() { return cleanupBreakClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignedSiblings", function() { return getAlignedSiblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementBreakClasses", function() { return getElementBreakClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeAddBreakClassesToElement", function() { return maybeAddBreakClassesToElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdjacentSidebarBlocks", function() { return getAdjacentSidebarBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wouldOverlap", function() { return wouldOverlap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doOverlap", function() { return doOverlap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContentBlocksArray", function() { return getContentBlocksArray; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./packages/utils/build-module/index.js");

var BREAK_LEFT_CLASS = 'break-align-left';
var BREAK_RIGHT_CLASS = 'break-align-right';
var cleanupBreakClasses = function cleanupBreakClasses() {
  var breakSelector = ".".concat(BREAK_LEFT_CLASS, ", .").concat(BREAK_RIGHT_CLASS);
  var breakNodeList = document.querySelectorAll(breakSelector);
  var breakElementsArray = Array.from(breakNodeList);
  breakElementsArray.forEach(function (element) {
    return element.classList.remove(BREAK_LEFT_CLASS, BREAK_RIGHT_CLASS);
  });
};
var getAlignedSiblings = function getAlignedSiblings(block, side) {
  var siblings = Array.from(block.parentElement.children).filter(function (sibling) {
    return sibling !== block;
  });
  return siblings.filter(function (sibling) {
    return sibling.classList.contains("align".concat(side));
  });
};
var getElementBreakClasses = function getElementBreakClasses(block) {
  var sidebarBlocks = getAdjacentSidebarBlocks(block);
  var leftAlignedBlocks = getAlignedSiblings(block, 'left');
  var rightAlignedBlocks = getAlignedSiblings(block, 'right');
  var leftSidebarBlocks = sidebarBlocks.filter(function (obj) {
    return obj.side === 'left';
  }).map(function (obj) {
    return obj.element;
  });
  var rightSidebarBlocks = sidebarBlocks.filter(function (obj) {
    return obj.side === 'right';
  }).map(function (obj) {
    return obj.element;
  });
  var leftAlignedElements = leftAlignedBlocks.concat(leftSidebarBlocks);
  var rightAlignedElements = rightAlignedBlocks.concat(rightSidebarBlocks);
  var breakClasses = [];
  Object(_index__WEBPACK_IMPORTED_MODULE_0__["addClass"])(block, "".concat(BREAK_LEFT_CLASS, " ").concat(BREAK_RIGHT_CLASS));

  if (!leftAlignedElements.some(function (alignedElement) {
    return doOverlap(alignedElement, block);
  })) {
    breakClasses.push(BREAK_LEFT_CLASS);
  }

  if (!rightAlignedElements.some(function (alignedElement) {
    return doOverlap(alignedElement, block);
  })) {
    breakClasses.push(BREAK_RIGHT_CLASS);
  }

  Object(_index__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(block, "".concat(BREAK_LEFT_CLASS, " ").concat(BREAK_RIGHT_CLASS));
  return breakClasses;
};
var maybeAddBreakClassesToElement = function maybeAddBreakClassesToElement(block) {
  var breakClasses = getElementBreakClasses(block);
  breakClasses.forEach(function (breakClass) {
    block.classList.add(breakClass);
  });
};
var getAdjacentSidebarBlocks = function getAdjacentSidebarBlocks(block) {
  var sidebarBlocks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var sidecar = block.closest('.nb-sidecar');

  if (!sidecar) {
    return sidebarBlocks;
  }

  var sidebar = Array.from(sidecar.children).filter(function (child) {
    return child.classList.contains('nb-sidecar-area--sidebar');
  });

  if (!sidebar.length) {
    return sidebarBlocks;
  }

  var newSidebarBlocks = Array.from(sidebar[0].children).map(function (element) {
    return {
      element: element,
      side: sidecar.classList.contains('nb-sidecar--sidebar-left') ? 'left' : 'right'
    };
  });
  return getAdjacentSidebarBlocks(sidecar.parentNode, sidebarBlocks.concat(newSidebarBlocks));
};
var wouldOverlap = function wouldOverlap(el1, el2) {
  var el1Box = el1.getBoundingClientRect();
  var el2Box = el2.getBoundingClientRect();
  var el1Style = getComputedStyle(el1);
  var el2Style = getComputedStyle(el2);
  var el1MarginBottom = Math.max(parseInt(el1Style.marginBottom), parseInt(el2Style.marginTop));
  var el2MarginBottom = Math.max(parseInt(el2Style.marginBottom), parseInt(el1Style.marginTop));
  return !(el2Box.bottom + el2MarginBottom <= el1Box.top || el2Box.top >= el1Box.bottom + el1MarginBottom);
}; // Helper function to check if two boxes
// are overlapping. This is different compared to wouldOverlap()
// because in this case height is not important.

var doOverlap = function doOverlap(el1, el2) {
  var el1Box = el1.getBoundingClientRect();
  var el2Box = el2.getBoundingClientRect();
  var el1Style = getComputedStyle(el1);
  var el2Style = getComputedStyle(el2);
  var el1MarginBottom = Math.max(parseInt(el1Style.marginBottom), parseInt(el2Style.marginTop));
  var el2MarginBottom = Math.max(parseInt(el2Style.marginBottom), parseInt(el1Style.marginTop));
  var el1MarginRight = Math.max(parseInt(el1Style.marginRight), parseInt(el2Style.marginLeft));
  var el2MarginRight = Math.max(parseInt(el2Style.marginRight), parseInt(el1Style.marginLeft));
  return !(el2Box.bottom + el2MarginBottom <= el1Box.top || el2Box.top >= el1Box.bottom + el1MarginBottom || el2Box.right + el2MarginRight <= el1Box.left || el2Box.left >= el1Box.right + el1MarginRight);
};
var getContentBlocksArray = function getContentBlocksArray() {
  var gridSelectors = [".is-root-container", ".wp-block-query", ".wp-block-post-content", ".wp-site-blocks", ".wp-block-template-part", ".nb-content-layout-grid", ".nb-sidecar", ".nb-sidecar-area--content", ".nb-supernova"];
  var mergedGridSelector = gridSelectors.join(', ');
  var grids = Array.from(document.querySelectorAll(mergedGridSelector));
  var alignedElements = grids.reduce(function (acc, curr) {
    var currentAlignedElements = Array.from(curr.children).filter(function (element) {
      return Object(_index__WEBPACK_IMPORTED_MODULE_0__["matches"])(element, ".alignfull, .alignwide, .alignleft, .alignright");
    });
    return acc.concat(currentAlignedElements);
  }, []);
  return alignedElements;
};


/***/ }),

/***/ "./packages/utils/build-module/collection-layout/apply-layout-engine.js":
/*!******************************************************************************!*\
  !*** ./packages/utils/build-module/collection-layout/apply-layout-engine.js ***!
  \******************************************************************************/
/*! exports provided: applyLayoutEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyLayoutEngine", function() { return applyLayoutEngine; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/utils/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./packages/utils/build-module/collection-layout/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

 // This is the main workhorse containing the logic of our layout "engine".
// Given a state, it will return a list of posts with details to handle their layout.

var applyLayoutEngine = function applyLayoutEngine(state) {
  var debug = false; // Before we can get to generating the "grid areas" for each post (meaning start col and row plus end col and ro),
  // we need to do a couple of preliminary calculations.
  // To hold the data, we will work with matrices, uni or bidimensional, representing the actual columns and rows.
  // This way we gain an easier understanding of what is going on at each step of the logic.
  // In each matrix we will ignore index 0 since it is easier to start from 1,
  // the same way CSS grid columns and rows behave.
  // The order of these operations is important!

  debug ? console.log("\nGenerating a new layout...\n\n") : false; // The "null" character:

  var emptyChar = "X"; // These are the matrices we are going to calculate:
  // The nth matrix: a bidimensional matrix the same size as the grid, holding in each cell what nth post should that cell belong to.
  // From this matrix we can extrapolate many details since the same nth value will be used to fill all the cells belonging to a post.
  // So we know the position and dimensions.

  var nthMatrix = initBidimensionalMatrix([], state.gridcolumns, state.gridrows, emptyChar); // The image weight matrix

  var imageWeightMatrix = initBidimensionalMatrix([], state.gridcolumns, state.gridrows, emptyChar); // The meta-details matrix

  var metaDetailsMatrix = initBidimensionalMatrix([], state.gridcolumns, state.gridrows, emptyChar); // Helper matrices.
  // The columns width matrix

  var widthMatrix = initUnidimensionalMatrix([], state.gridcolumns, emptyChar); // The vertical fragment size matrix

  var verticalFragmentSizeMatrix = initUnidimensionalMatrix([], state.gridcolumns, emptyChar);
  var i, j; // Let's start PRELIMINARY CALCULATIONS!

  /*
  1. Calculate the columns width matrix.
     We will take into account the feature position, feature size and fragmentation value.
     The fragmentation value is interpreted in it's bit format, where 1 means a "cut".
     The fragmentation value represents the fragmentation of the remaining gridcolumns after the feature size was deducted.
   */

  var widthIdx = 1; // First, mark the feature.

  for (i = state.featureposition; i < state.featureposition + state.featuresize; i++) {
    widthMatrix[i] = widthIdx;
  } // Next, go from left to right in the columns-width matrix, and fill each column with the same unique number,
  // Taking into account the fragmentation.
  // And remember the positions we are int the virtual matrix without the feature.


  var frgIdx = 0;
  widthIdx++;

  for (i = 1; i <= state.gridcolumns; i++) {
    if (widthMatrix[i] === emptyChar) {
      frgIdx++; // If the previous position has a different number than the current one, it is clear we should increment and write.

      if (widthMatrix[i - 1] !== widthIdx) {
        widthIdx++;
      } else {
        // If the previous position has the same value as the current one, we need to determine
        // if the fragmentation bit pattern imposes a "cut".
        var cutMarker = 1 << state.gridcolumns - state.featuresize - frgIdx; // If there is a 1 at this position, make a cut aka increase the number.

        if ((cutMarker & state.fragmentation) === cutMarker) {
          widthIdx++;
        }
      }

      widthMatrix[i] = widthIdx;
    }
  }

  debug ? console.log("The width matrix: ".padEnd(45, ' ') + widthMatrix) : false;
  /*
  2. Calculate the image weight matrix.
     We will spread the image weight range left-to-right. Each column will consume the range according to its width.
     Even it is a bidimensional matrix, for now we will only generate one row and copy it.
   */

  for (i = 1; i <= state.gridcolumns; i++) {
    // Determine the other end of the current column.
    var end = i;

    while (widthMatrix[end + 1] === widthMatrix[i]) {
      end++;
    } // Now calculate.


    if (i === 1) {
      imageWeightMatrix[1][i] = state.imageweightleft;
    } else if (end === state.gridcolumns) {
      imageWeightMatrix[1][i] = state.imageweightright;
    } else {
      imageWeightMatrix[1][i] = Math.round(state.imageweightleft - (state.imageweightleft - state.imageweightright) * (i + end - 1) / (2 * state.gridcolumns));
    } // Fill the entire column with the same meta-details value.


    for (j = i; j <= end; j++) {
      imageWeightMatrix[1][j] = imageWeightMatrix[1][i];
    }

    i = end;
  } // Copy the first row to all the rest.


  for (i = 2; i <= state.gridrows; i++) {
    imageWeightMatrix[i] = imageWeightMatrix[1].slice(); // .slice() creates a copy of the array, not reference.
  }

  debug ? console.log("The image weight matrix: ".padEnd(45, ' ') + imageWeightMatrix[1]) : false;
  /*
  3. Calculate the meta-details matrix.
     We will spread the meta-details range left-to-right. Each column will consume the range according to its width.
     Even it is a bidimensional matrix, for now we will only generate one row and copy it.
   */

  for (i = 1; i <= state.gridcolumns; i++) {
    // Determine the other end of the current column.
    var _end = i;

    while (widthMatrix[_end + 1] === widthMatrix[i]) {
      _end++;
    } // Now calculate.


    if (i === 1) {
      metaDetailsMatrix[1][i] = state.metadetailsleft;
    } else if (_end === state.gridcolumns) {
      metaDetailsMatrix[1][i] = state.metadetailsright;
    } else {
      metaDetailsMatrix[1][i] = state.metadetailsleft - (state.metadetailsleft - state.metadetailsright) * (i + _end - 1) / (2 * state.gridcolumns); // If we are instructed to balance MD with IW, we will multiply the MD value with the "distance" of the IW value from the "center" of the IW range.

      if (state.balancemdandiw && 0 !== state.imageweightleft - state.imageweightright) {
        metaDetailsMatrix[1][i] = metaDetailsMatrix[1][i] * (Math.abs(state.imageweightleft - state.imageweightright) / 2 / imageWeightMatrix[1][i]);
      }

      metaDetailsMatrix[1][i] = Math.round(metaDetailsMatrix[1][i]);
    } // Fill the entire column with the same meta-details value.


    for (j = i; j <= _end; j++) {
      metaDetailsMatrix[1][j] = metaDetailsMatrix[1][i];
    }

    i = _end;
  } // Copy the first row to all the rest.


  for (i = 2; i <= state.gridrows; i++) {
    metaDetailsMatrix[i] = metaDetailsMatrix[1].slice(); // .slice() creates a copy of the array, not reference.
  }

  debug ? console.log("The meta-details matrix: ".padEnd(45, ' ') + metaDetailsMatrix[1]) : false;
  /*
  4. Handle the boost feature emphasis.
     We will assign the maximum meta-details and image weight value to the feature, and assign its current value to the column holding the maximum values.
  */

  if (state.boostfeature && state.featuresize > 0) {
    // Find column with maximum meta-details value, if the feature isn't already at the max.
    var maxMetaDetailsPos = 1,
        maxImageWeightPos = 1;

    for (i = 1; i <= state.gridcolumns; i++) {
      if (metaDetailsMatrix[1][i] > metaDetailsMatrix[1][maxMetaDetailsPos]) {
        maxMetaDetailsPos = i;
      }

      if (imageWeightMatrix[1][i] > imageWeightMatrix[1][maxImageWeightPos]) {
        maxImageWeightPos = i;
      }
    }

    if (maxMetaDetailsPos !== state.featureposition) {
      // We have something to switch.
      var featureValue = metaDetailsMatrix[1][state.featureposition];
      var maxValue = metaDetailsMatrix[1][maxMetaDetailsPos]; // Go and fill each column with the switched values.

      i = maxMetaDetailsPos;

      while (widthMatrix[i] === widthMatrix[maxMetaDetailsPos]) {
        metaDetailsMatrix[1][i] = featureValue;
        i++;
      }

      i = state.featureposition;

      while (widthMatrix[i] === widthMatrix[state.featureposition]) {
        metaDetailsMatrix[1][i] = maxValue;
        i++;
      } // Copy the first row to all the rest.


      for (i = 2; i <= state.gridrows; i++) {
        metaDetailsMatrix[i] = metaDetailsMatrix[1].slice(); // .slice() creates a copy of the array, not reference.
      }

      debug ? console.log("The boosted feature meta-details matrix: ".padEnd(45, ' ') + metaDetailsMatrix[1]) : false;
    }

    if (maxImageWeightPos !== state.featureposition) {
      // We have something to switch.
      var _featureValue = imageWeightMatrix[1][state.featureposition];
      var _maxValue = imageWeightMatrix[1][maxImageWeightPos]; // Go and fill each column with the switched values.

      i = maxImageWeightPos;

      while (widthMatrix[i] === widthMatrix[maxImageWeightPos]) {
        imageWeightMatrix[1][i] = _featureValue;
        i++;
      }

      i = state.featureposition;

      while (widthMatrix[i] === widthMatrix[state.featureposition]) {
        imageWeightMatrix[1][i] = _maxValue;
        i++;
      } // Copy the first row to all the rest.


      for (i = 2; i <= state.gridrows; i++) {
        imageWeightMatrix[i] = imageWeightMatrix[1].slice(); // .slice() creates a copy of the array, not reference.
      }

      debug ? console.log("The boosted feature image weight matrix: ".padEnd(45, ' ') + imageWeightMatrix[1]) : false;
    }
  }
  /*
  5. Determine the vertical fragment size matrix.
     The fragment size will range in the number of grid rows and 1.
  */
  // First determine the max meta-details and image weight value.


  var maxMetaDetailsValue = metaDetailsMatrix[1][1],
      maxImageWeightValue = imageWeightMatrix[1][1];

  for (i = 1; i <= state.gridcolumns; i++) {
    if (metaDetailsMatrix[1][i] > maxMetaDetailsValue) {
      maxMetaDetailsValue = metaDetailsMatrix[1][i];
    }

    if (imageWeightMatrix[1][i] > maxImageWeightValue) {
      maxImageWeightValue = imageWeightMatrix[1][i];
    }
  } // For the purpose of these calculations, maxMetaDetailsValue and maxImageWeightValue can't be zero.


  if (maxImageWeightValue < 1) {
    maxImageWeightValue = 1;
  }

  if (maxMetaDetailsValue < 1) {
    maxMetaDetailsValue = 1;
  }

  for (i = 1; i <= state.gridcolumns; i++) {
    // Determine the other end of the current column.
    var _end2 = i;

    while (widthMatrix[_end2 + 1] === widthMatrix[i]) {
      _end2++;
    } // Now calculate.


    verticalFragmentSizeMatrix[i] = Math.round((metaDetailsMatrix[1][i] / maxMetaDetailsValue + imageWeightMatrix[1][i] / maxImageWeightValue) / 2 * state.gridrows); // The vertical fragment size can't be more than 3 times the column width (a really tall post).

    if (verticalFragmentSizeMatrix[i] > (_end2 - i + 1) * 3) {
      verticalFragmentSizeMatrix[i] = (_end2 - i + 1) * 3;
    } // Also the vertical fragment size can't be less than 1.


    if (verticalFragmentSizeMatrix[i] < 1) {
      verticalFragmentSizeMatrix[i] = 1;
    } // If the sub feature option is active, and we have a single column for the feature, reduce the vertical fragmentation with 25%.


    if (state.subfeature && i === state.featureposition && state.featuresize > 0 && verticalFragmentSizeMatrix[i] === state.gridrows) {
      verticalFragmentSizeMatrix[i] = Math.floor(verticalFragmentSizeMatrix[i] * 0.75);
    } // Safety measures.


    if (verticalFragmentSizeMatrix[i] < 1) {
      verticalFragmentSizeMatrix[i] = 1;
    } else if (verticalFragmentSizeMatrix[i] > state.gridrows) {
      verticalFragmentSizeMatrix[i] = state.gridrows;
    } // Fill the entire column with the same fragment size.


    for (j = i; j <= _end2; j++) {
      verticalFragmentSizeMatrix[j] = verticalFragmentSizeMatrix[i];
    }

    i = _end2;
  }

  debug ? console.log("The vertical fragment size matrix: ".padEnd(45, ' ') + verticalFragmentSizeMatrix) : false;
  /*
  6. Determine the nth bidimensional matrix.
     Each grid cell will be filled with the nth post that cell belongs to. From this matrix we can determine the post grid coordinates,
     its aspect ratio, area, etc.
  */
  // We start with the first post in the list.

  var currentNth = 1; // Start with the feature column.

  if (state.featuresize > 0) {
    i = 1;

    while (i <= verticalFragmentSizeMatrix[state.featureposition]) {
      j = state.featureposition;

      do {
        nthMatrix[i][j] = currentNth;
        j++;
      } while (widthMatrix[state.featureposition] === widthMatrix[j]);

      i++;
    }

    currentNth++;

    if (i <= state.gridrows) {
      // We have room under the feature for a secondary feature post.
      // We will reduce the meta-details and image weight by 33% that of the main feature post.
      while (i <= state.gridrows) {
        j = state.featureposition;

        do {
          nthMatrix[i][j] = currentNth; // Adjust the meta-details and image weight.

          metaDetailsMatrix[i][j] = Math.round(metaDetailsMatrix[i][j] * 0.66);
          imageWeightMatrix[i][j] = Math.round(imageWeightMatrix[i][j] * 0.66);
          j++;
        } while (widthMatrix[state.featureposition] === widthMatrix[j]);

        i++;
      }

      currentNth++;
    }
  } // Now start from the left top corner and go through each column, left to right.


  var currentColumnStartCol = 1;
  var currentPostStartRow;

  while (currentColumnStartCol <= state.gridcolumns) {
    if (nthMatrix[1][currentColumnStartCol] !== emptyChar) {
      currentColumnStartCol++;
      continue;
    } // Fill the current column with posts.


    currentPostStartRow = 1;

    while (currentPostStartRow <= state.gridrows) {
      i = currentPostStartRow;

      while (i <= currentPostStartRow + verticalFragmentSizeMatrix[currentColumnStartCol] - 1 && i <= state.gridrows) {
        j = currentColumnStartCol;

        do {
          nthMatrix[i][j] = currentNth;
          j++;
        } while (widthMatrix[currentColumnStartCol] === widthMatrix[j]);

        i++;
      }

      currentNth++;
      currentPostStartRow = i;
    }
  }

  if (debug) {
    console.log("\nThe nth matrix: ".padEnd(42, ' ') + '0 - ' + nthMatrix[0].join(' '));

    for (i = 1; i < nthMatrix.length; i++) {
      console.log(' '.padEnd(41, ' ') + i + ' - ' + nthMatrix[i].join(' '));
    }
  }
  /*
  7. Handle the hierarchy crossing.
     We will not cross into the feature post. We will only cross left to right, only "over" a post with a lower nth count.
     We will only cross if the left post matches in height a post or more on the right.
     The rate of consumption is related to the nth, area, IW and MD of the post being expanded and the post(s) being replaced.
     Also, crossing at the top of the layout is more expensive than crossing at a lower row.
  */
  // We start with the first post in the list.


  var maxNth = currentNth;
  var hierachyCrossingStrenth = state.hierarchycrossing;
  currentNth = 1;

  while (hierachyCrossingStrenth > 0 && currentNth <= maxNth) {
    var currentPostDetails = getNthPostDetails(currentNth, nthMatrix, metaDetailsMatrix, imageWeightMatrix);

    if (false === currentPostDetails) {
      currentNth++;
      continue;
    } // If the current post is all the way to the right edge, stop.


    if (currentPostDetails.endGridColumn === state.gridcolumns) {
      break;
    } // Now identify its right-side neighbors.


    var topNeighborPostDetails = getNthPostDetails(nthMatrix[currentPostDetails.startGridRow][currentPostDetails.endGridColumn + 1], nthMatrix, metaDetailsMatrix, imageWeightMatrix);
    var bottomNeighborPostDetails = getNthPostDetails(nthMatrix[currentPostDetails.endGridRow][currentPostDetails.endGridColumn + 1], nthMatrix, metaDetailsMatrix, imageWeightMatrix); // If the neighbors don't match the height in rows of the current post, skip this post from crossing.

    if (topNeighborPostDetails.startGridRow !== currentPostDetails.startGridRow || bottomNeighborPostDetails.endGridRow !== currentPostDetails.endGridRow) {
      currentNth++;
      continue;
    } // Calculate the score of the to-be replaced post(s).
    // Each post's score correlated to its nth value. The lower the nth value the bigger the score boost.


    var replacedPostScore = maxNth / topNeighborPostDetails.nth * (topNeighborPostDetails.area + topNeighborPostDetails.imageWeight + topNeighborPostDetails.metaDetails);

    if (bottomNeighborPostDetails.nth !== topNeighborPostDetails.nth) {
      var counter = 1;

      for (i = topNeighborPostDetails.nth + 1; i <= bottomNeighborPostDetails.nth; i++) {
        var postDetails = getNthPostDetails(i, nthMatrix, metaDetailsMatrix, imageWeightMatrix);

        if (false === postDetails) {
          continue;
        }

        counter++; // It is increasingly "harder" to replace multiple posts.

        replacedPostScore += maxNth / postDetails.nth * (postDetails.area + postDetails.imageWeight + postDetails.metaDetails * counter) * counter;
      }
    } // If the to-be replaced post(s) score is larger than the remaining hierarchy crossing strength, nothing to do.


    if (hierachyCrossingStrenth < replacedPostScore) {
      currentNth++;
      continue;
    }

    var currentPostScore = maxNth / currentPostDetails.nth * (currentPostDetails.area + currentPostDetails.imageWeight + currentPostDetails.metaDetails) * Math.pow(2 * hierachyCrossingStrenth / 50, 3); // If the current post score is bigger than the to-be replaced post(s) score, it's a go.

    if (currentPostScore > replacedPostScore) {
      // Expand the current post over the replaced ones.
      for (i = topNeighborPostDetails.startGridRow; i <= bottomNeighborPostDetails.endGridRow; i++) {
        for (j = topNeighborPostDetails.startGridColumn; j <= topNeighborPostDetails.endGridColumn; j++) {
          nthMatrix[i][j] = currentNth; // Also replace the image weight and meta-details.

          imageWeightMatrix[i][j] = currentPostDetails.imageWeight;
          metaDetailsMatrix[i][j] = currentPostDetails.metaDetails;
        }
      } // Decrease the crossing strength.


      hierachyCrossingStrenth -= replacedPostScore; // We now have a gap in the post list. We need to renumber the posts after the replaced ones and adjust the maxnth.
      // The image weight and meta-details remain unchanged.
      // Work with the new maxNth.

      maxNth = renumberNthMatrix(nthMatrix);
    }

    currentNth++;
  } // Transpose all matrices if flipcolssrows attribute is set to true


  var finalNthMatrix = !state.flipcolsrows ? nthMatrix : Object(_index__WEBPACK_IMPORTED_MODULE_1__["transposeMatrix"])(nthMatrix);
  var finalMetaMatrix = !state.flipcolsrows ? metaDetailsMatrix : Object(_index__WEBPACK_IMPORTED_MODULE_1__["transposeMatrix"])(metaDetailsMatrix);
  var finalImageMatrix = !state.flipcolsrows ? imageWeightMatrix : Object(_index__WEBPACK_IMPORTED_MODULE_1__["transposeMatrix"])(imageWeightMatrix);
  /*
  8. Finally, generate the posts list.
  */

  var areaColumns = getGroupedPostAreas(state, finalNthMatrix, finalMetaMatrix, finalImageMatrix);
  moveLargestColumnToStart(areaColumns);
  return areaColumns;
};

var moveLargestColumnToStart = function moveLargestColumnToStart(areaColumns) {
  var firstRowColumns = areaColumns.filter(function (column) {
    return column.row === 1;
  }).sort(function (col1, col2) {
    return col2.width - col1.width;
  });
  var largestColumnIndex = areaColumns.findIndex(function (column) {
    return column === firstRowColumns[0];
  });
  areaColumns.splice(0, 0, areaColumns.splice(largestColumnIndex, 1)[0]);
  return areaColumns;
};

var logMatrix = function logMatrix(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    console.log(' '.padEnd(41, ' ') + i + ' - ' + matrix[i].join(' '));
  }
};

function getGroupedPostAreas(state, nthMatrix, metaDetailsMatrix, imageWeightMatrix) {
  var areasArray = getAreasArray(nthMatrix, metaDetailsMatrix, imageWeightMatrix);
  mergeSimilarAreas(nthMatrix, metaDetailsMatrix, imageWeightMatrix, areasArray, state);
  areasArray = normalizeAreas(nthMatrix, areasArray);
  areasArray = areasArray.map(function (area) {
    return _objectSpread({
      initialPostsCount: area.postsCount
    }, area);
  });
  var columns = areasArray.map(function (area) {
    return {
      row: area.row,
      col: area.col,
      width: area.width,
      height: area.height,
      areas: [area]
    };
  }); // Loop through columns

  columns.forEach(function (currentColumn) {
    // Loop through "current" column's areas
    currentColumn.areas.forEach(function (currentArea, i) {
      // Loop again through columns except the current column
      columns.filter(function (column) {
        return column !== currentColumn;
      }).forEach(function (compareColumn) {
        // Loop through the "compare" column's areas
        compareColumn.areas.forEach(function (compareArea, j) {
          // Check if the areas have the same column and the same width
          if (!compareArea.merged && currentArea.col === compareArea.col && currentArea.width === compareArea.width && ( // And if the two areas are continuous
          currentArea.row + currentArea.height === compareArea.row || currentArea.row === compareArea.row + compareArea.height)) {
            // If so, move the compared area to the current column's areas array and update the column height
            compareArea.merged = true;
            currentColumn.areas.push(compareArea);
            currentColumn.height += compareArea.height;
            compareColumn.areas.splice(j, 1);
          }
        });
      });
    });
  });
  return columns.filter(function (randomColumn) {
    return randomColumn.areas.length > 0;
  });
}

function getNthValues(nthMatrix) {
  var values = [];
  var value;

  for (var i = 1; i < nthMatrix.length - 1; i++) {
    for (var j = 1; j < nthMatrix[i].length - 1; j++) {
      value = nthMatrix[i][j];

      if (values.indexOf(value) === -1) {
        values.push(value);
      }
    }
  }

  return values;
}

function normalizeAreas(nthMatrix, areasArray) {
  var values = getNthValues(nthMatrix);
  values.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0; i < values.length; i++) {
    if (i + 1 !== values[i]) {
      replaceNth(values[i], i + 1, nthMatrix);
    }
  }

  return values.map(function (nth, index) {
    var area = areasArray.find(function (area) {
      return area.nth === nth;
    });
    area.nth = index + 1;
    return area;
  });
}

function replaceNth(nth1, nth2, nthMatrix) {
  for (var i = 1; i < nthMatrix.length - 1; i++) {
    for (var j = 1; j < nthMatrix[i].length - 1; j++) {
      if (nthMatrix[i][j] === nth1) {
        nthMatrix[i][j] = nth2;
      }
    }
  }
}

var mergeSimilarAreas = function mergeSimilarAreas(nthMatrix, metaDetailsMatrix, imageWeightMatrix, areasArray, state) {
  var currentPostDetails;

  for (var currentNth = 1; currentNth <= getMaxNth(nthMatrix); currentNth++) {
    currentPostDetails = getNthPostDetails(currentNth, nthMatrix, metaDetailsMatrix, imageWeightMatrix);

    if (currentPostDetails) {
      mergeAreaNeighbours(currentPostDetails.startGridRow, currentPostDetails.startGridColumn, nthMatrix, metaDetailsMatrix, imageWeightMatrix, areasArray, state);
    }
  }
};

var mergeAreaNeighbours = function mergeAreaNeighbours(row, col, nthMatrix, metaDetailsMatrix, imageWeightMatrix, areasArray, state) {
  var nth = nthMatrix[row][col];
  var width = getAreaWidth(nth, nthMatrix);
  var height = getAreaHeight(nth, nthMatrix);
  var initialWidth = width;
  var initialHeight = height;
  var currentAreaIndex = -1;

  if (Array.isArray(areasArray)) {
    currentAreaIndex = areasArray.findIndex(function (area) {
      return area.nth === nthMatrix[row][col];
    });
  } // Featured area should not be merged


  if (nth === 1) {
    return;
  }

  var nextRow,
      nextCol,
      nextWidth,
      nextHeight,
      nextNth,
      nextNthStart,
      searching = true,
      mergeable = false;

  while (searching) {
    nextNth = nthMatrix[row + height][col];
    nextNthStart = getFirstOccurrence(nextNth, nthMatrix);
    nextRow = nextNthStart.row;
    nextCol = nextNthStart.col;
    nextWidth = getAreaWidth(nextNth, nthMatrix);
    nextHeight = getAreaHeight(nextNth, nthMatrix);

    if (width === nextWidth && col === nextCol && Math.abs(initialHeight - nextHeight) <= 1 && Math.abs(metaDetailsMatrix[row][col] - metaDetailsMatrix[nextRow][col]) <= 1 && Math.abs(imageWeightMatrix[row][col] - imageWeightMatrix[nextRow][col]) <= 1) {
      height = height + nextHeight;
      mergeable = true;

      if (currentAreaIndex > -1) {
        areasArray[currentAreaIndex].postsCount += 1;
        areasArray[currentAreaIndex].height = height;
      }
    } else {
      searching = false;
    }
  }

  searching = !mergeable;

  while (searching && !state.flipcolsrows) {
    nextNth = nthMatrix[row][col + width];
    nextNthStart = getFirstOccurrence(nextNth, nthMatrix);
    nextRow = nextNthStart.row;
    nextCol = nextNthStart.col;
    nextWidth = getAreaWidth(nextNth, nthMatrix);
    nextHeight = getAreaHeight(nextNth, nthMatrix);

    if (height === nextHeight && row === nextRow && Math.abs(initialWidth - nextWidth) <= 1 && Math.abs(metaDetailsMatrix[row][col] - metaDetailsMatrix[row][nextCol]) <= 1 && Math.abs(imageWeightMatrix[row][col] - imageWeightMatrix[row][nextCol]) <= 1) {
      width = width + nextWidth;
      mergeable = true;

      if (currentAreaIndex > -1) {
        areasArray[currentAreaIndex].postsCount += 1;
        areasArray[currentAreaIndex].width = width;
      }
    } else {
      searching = false;
    }
  }

  fillArea(nthMatrix, row, col, width, height);
};

var fillArea = function fillArea(nthMatrix, row, col, width, height) {
  for (var i = row; i < row + height; i++) {
    for (var j = col; j < col + width; j++) {
      nthMatrix[i][j] = nthMatrix[row][col];
    }
  }
};

var getFirstOccurrence = function getFirstOccurrence(nth, nthMatrix) {
  for (var i = 0; i < nthMatrix.length; i++) {
    for (var j = 0; j < nthMatrix[i].length; j++) {
      if (nthMatrix[i][j] === nth) {
        return {
          row: i,
          col: j
        };
      }
    }
  }

  return {};
};

var getAreaWidth = function getAreaWidth(nth, nthMatrix) {
  var _getFirstOccurrence = getFirstOccurrence(nth, nthMatrix),
      row = _getFirstOccurrence.row,
      col = _getFirstOccurrence.col;

  var width = 1;

  while (nth === nthMatrix[row][col + width]) {
    width = width + 1;
  }

  return width;
};

var getAreaHeight = function getAreaHeight(nth, nthMatrix) {
  var _getFirstOccurrence2 = getFirstOccurrence(nth, nthMatrix),
      row = _getFirstOccurrence2.row,
      col = _getFirstOccurrence2.col;

  var height = 1;

  while ("undefined" !== typeof nthMatrix[row + height] && nth === nthMatrix[row + height][col]) {
    height = height + 1;
  }

  return height;
};

var renumberNthMatrix = function renumberNthMatrix(nthMatrix) {
  var newNth = 1;
  var postDetails;

  for (var nth = 1; nth <= getMaxNth(nthMatrix); nth++) {
    // If we can't find a nth post, it means it was removed and we need to adjust.
    postDetails = getNthPostDetails(nth, nthMatrix);

    if (false === postDetails) {
      continue;
    }

    if (postDetails.nth > newNth) {
      // Change the current post's nth.
      for (var i = postDetails.startGridRow; i <= postDetails.endGridRow; i++) {
        for (var j = postDetails.startGridColumn; j <= postDetails.endGridColumn; j++) {
          nthMatrix[i][j] = newNth;
        }
      }
    }

    newNth++;
  } // Return the maxNth.


  return newNth - 1;
};

var getMaxNth = function getMaxNth(nthMatrix) {
  var maxNth = 0;

  for (var i = 1; i < nthMatrix.length; i++) {
    for (var j = 1; j < nthMatrix[i].length; j++) {
      if (nthMatrix[i][j] > maxNth) {
        maxNth = nthMatrix[i][j];
      }
    }
  }

  return maxNth;
};

var getAreasArray = function getAreasArray(nthMatrix, metaDetailsMatrix, imageWeightMatrix) {
  var currentPostDetails;
  var areasArray = [];

  for (var currentNth = 1; currentNth <= getMaxNth(nthMatrix); currentNth++) {
    currentPostDetails = getNthPostDetails(currentNth, nthMatrix, metaDetailsMatrix, imageWeightMatrix);

    if (currentPostDetails) {
      areasArray.push({
        nth: currentPostDetails.nth,
        col: currentPostDetails.startGridColumn,
        row: currentPostDetails.startGridRow,
        width: currentPostDetails.endGridColumn - currentPostDetails.startGridColumn + 1,
        height: currentPostDetails.endGridRow - currentPostDetails.startGridRow + 1,
        metaDetails: currentPostDetails.metaDetails,
        imageWeight: currentPostDetails.imageWeight,
        postsCount: 1
      });
    }
  }

  return areasArray;
};

var getNthPostDetails = function getNthPostDetails(nth, nthMatrix) {
  var metaDetailsMatrix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var imageWeightMatrix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var postDetails = false; // Go through the nthMatrix and search for the currentNth value.

  for (var i = 1; i < nthMatrix.length; i++) {
    for (var j = 1; j < nthMatrix[i].length; j++) {
      if (nthMatrix[i][j] === nth) {
        // Found the left top corner.
        postDetails = {
          'nth': nth,
          'startGridColumn': j,
          'startGridRow': i,
          'endGridColumn': j,
          'endGridRow': i,
          'metaDetails': metaDetailsMatrix ? metaDetailsMatrix[i][j] : false,
          'imageWeight': imageWeightMatrix ? imageWeightMatrix[i][j] : false,
          'area': 1
        }; // Find the right bottom corner.

        while (j < nthMatrix[i].length && nthMatrix[i][j] === nthMatrix[i][j + 1]) {
          j++;
        }

        postDetails.endGridColumn = j;

        while (i < nthMatrix.length && nthMatrix[i][j] === nthMatrix[i + 1][j]) {
          i++;
        }

        postDetails.endGridRow = i; // Calculate the area.

        postDetails.area = (postDetails.endGridRow - postDetails.startGridRow + 1) * (postDetails.endGridColumn - postDetails.startGridColumn + 1);
        return postDetails;
      }
    }
  }

  return postDetails;
};

var initUnidimensionalMatrix = function initUnidimensionalMatrix(matrix, length) {
  var character = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "X";
  // The 0 index will be filled with a different character for easier logic.
  matrix.push("/"); // Go to equal the length, since the 0 index will be ignored.
  // Fill with "null" entries with the provided character.

  for (var i = 1; i <= length; i++) {
    matrix.push(character);
  } // Put an extra entry for easier logic.


  matrix.push("/");
  return matrix;
};

var initBidimensionalMatrix = function initBidimensionalMatrix(matrix, width, height, nullChar) {
  // Put in a guard row, at index 0.
  matrix.push(initUnidimensionalMatrix([], width, "/")); // Go to equal the width, since the 0 index will be ignored.

  for (var i = 0; i < height; i++) {
    matrix.push(initUnidimensionalMatrix([], width, nullChar));
  } // Put in an extra guard row.


  matrix.push(initUnidimensionalMatrix([], width, "/"));
  return matrix;
};


/***/ }),

/***/ "./packages/utils/build-module/collection-layout/index.js":
/*!****************************************************************!*\
  !*** ./packages/utils/build-module/collection-layout/index.js ***!
  \****************************************************************/
/*! exports provided: applyLayoutEngine, getGridStyle, getPostsCount, redistributeCardsInAreas, getOptimalHeaderPosition, isLandscape, getParametricLayoutAreaClassName, getAreaBaseClassname, getAreaClassnameByAspectRatio, getAreaClassnameByWidthRatio, getAreaClassnameByHeightRatio, getGridColumnsAndRows, transposeMatrix, getAreaClassname, removeSmallestColumn, normalizeColumns, moveColumnsToLeft, growColumnsToRight, moveColumnsToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGridStyle", function() { return getGridStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsCount", function() { return getPostsCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redistributeCardsInAreas", function() { return redistributeCardsInAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptimalHeaderPosition", function() { return getOptimalHeaderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLandscape", function() { return isLandscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParametricLayoutAreaClassName", function() { return getParametricLayoutAreaClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaBaseClassname", function() { return getAreaBaseClassname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaClassnameByAspectRatio", function() { return getAreaClassnameByAspectRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaClassnameByWidthRatio", function() { return getAreaClassnameByWidthRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaClassnameByHeightRatio", function() { return getAreaClassnameByHeightRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGridColumnsAndRows", function() { return getGridColumnsAndRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transposeMatrix", function() { return transposeMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaClassname", function() { return getAreaClassname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSmallestColumn", function() { return removeSmallestColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeColumns", function() { return normalizeColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveColumnsToLeft", function() { return moveColumnsToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "growColumnsToRight", function() { return growColumnsToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveColumnsToTop", function() { return moveColumnsToTop; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apply_layout_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-layout-engine */ "./packages/utils/build-module/collection-layout/apply-layout-engine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyLayoutEngine", function() { return _apply_layout_engine__WEBPACK_IMPORTED_MODULE_1__["applyLayoutEngine"]; });



var getGridStyle = function getGridStyle(attributes) {
  var _getGridColumnsAndRow = getGridColumnsAndRows(attributes),
      gridcolumns = _getGridColumnsAndRow.gridcolumns,
      gridrows = _getGridColumnsAndRow.gridrows;

  return {
    display: 'grid',
    gridTemplateColumns: "repeat( ".concat(gridcolumns, ", 1fr )"),
    gridTemplateRows: "repeat( ".concat(gridrows, ", auto )")
  };
}; // Sums optimal posts count value from each area

var getPostsCount = function getPostsCount(areaColumns) {
  return areaColumns.reduce(function (total, areaColumn) {
    return total + areaColumn.areas.reduce(function (columnTotal, area) {
      return columnTotal + area.postsCount;
    }, 0);
  }, 0);
};
var redistributeCardsInAreas = function redistributeCardsInAreas(areaColumns, cardsCount, attributes) {
  var totalSpots = getPostsCount(areaColumns);
  var totalPosts = cardsCount;
  var remainingPosts = totalPosts;
  var totalRatio = 0;

  for (var i = 0; i < areaColumns.length; i++) {
    var areaColumn = areaColumns[i];
    var areaColumnSpotRatio = 0;

    for (var j = 0; j < areaColumn.areas.length; j++) {
      var area = areaColumn.areas[j]; // we shouldn't fill the area with the featured card

      area.spotRatio = getCardRatio(area, attributes);
      areaColumnSpotRatio += area.spotRatio;
      totalRatio += area.spotRatio;
    }

    areaColumn.spotRatio = areaColumnSpotRatio;
  }

  var extraPosts = totalPosts - totalSpots;

  if (totalSpots === totalPosts) {
    return;
  }

  for (var _i = 0; _i < areaColumns.length; _i++) {
    var _areaColumn = areaColumns[_i];
    var areas = _areaColumn.areas;

    for (var _j = 0; _j < areas.length; _j++) {
      var _area = areas[_j];
      var areaExtraPosts = Math.round(extraPosts * _area.spotRatio / totalRatio);
      _area.postsCount = Math.max(0, _area.postsCount + areaExtraPosts);
      totalRatio -= _area.spotRatio;
      extraPosts -= areaExtraPosts;
      if (remainingPosts <= 0) return;
    }
  }
};
var getOptimalHeaderPosition = function getOptimalHeaderPosition(areaColumns) {
  var index = 1;
  var positions = [0];

  for (var columnIndex = 0; columnIndex < areaColumns.length; columnIndex++) {
    var areaColumn = areaColumns[columnIndex];
    var areas = areaColumn.areas,
        row = areaColumn.row;

    for (var areaIndex = 0; areaIndex < areas.length; areaIndex++) {
      var area = areas[areaIndex];

      if (row === 1 && areaIndex === 0) {
        positions.push(index);
      }

      index += area.postsCount;
    }
  }

  return positions;
};

var getCardRatio = function getCardRatio(area, attributes) {
  var _getGridColumnsAndRow2 = getGridColumnsAndRows(attributes),
      gridcolumns = _getGridColumnsAndRow2.gridcolumns;

  var width = area.width,
      height = area.height,
      postsCount = area.postsCount;
  var ratio = postsCount / height; // when the card is landscape and very small
  // we hide the content so the ratio should be bigger

  if (isLandscape(area, attributes)) {
    ratio *= 2;
  }

  ratio *= gridcolumns / width;
  return ratio;
};

var isLandscape = function isLandscape(area, attributes) {
  var _getGridColumnsAndRow3 = getGridColumnsAndRows(attributes),
      gridcolumns = _getGridColumnsAndRow3.gridcolumns,
      gridrows = _getGridColumnsAndRow3.gridrows;

  var nth = area.nth,
      width = area.width,
      height = area.height,
      initialPostsCount = area.initialPostsCount;
  var isLandscape = width * initialPostsCount / height > 1.33;

  if (width / gridcolumns >= 0.5) {
    return isLandscape || attributes.subfeature && nth === 2;
  }

  return isLandscape;
};
var getParametricLayoutAreaClassName = function getParametricLayoutAreaClassName(area, attributes) {
  var _getGridColumnsAndRow4 = getGridColumnsAndRows(attributes),
      gridcolumns = _getGridColumnsAndRow4.gridcolumns,
      gridrows = _getGridColumnsAndRow4.gridrows;

  var width = area.width,
      height = area.height;
  return classnames__WEBPACK_IMPORTED_MODULE_0___default()([getAreaBaseClassname(area), getAreaClassnameByWidthRatio(width / gridcolumns), getAreaClassnameByHeightRatio(height / gridrows), getAreaClassnameByAspectRatio(area, attributes)]);
};
var getAreaBaseClassname = function getAreaBaseClassname(area) {
  var nth = area.nth;
  return classnames__WEBPACK_IMPORTED_MODULE_0___default()(['nb-grid__area', "nb-grid__area--nth-".concat(nth)]);
};
var getAreaClassnameByAspectRatio = function getAreaClassnameByAspectRatio(area, attributes) {
  return classnames__WEBPACK_IMPORTED_MODULE_0___default()([{
    'nb-grid__area--portrait': !isLandscape(area, attributes),
    'nb-grid__area--landscape': isLandscape(area, attributes)
  }]);
};
var getAreaClassnameByWidthRatio = function getAreaClassnameByWidthRatio(widthRatio) {
  return classnames__WEBPACK_IMPORTED_MODULE_0___default()([{
    'nb-grid__area--width-xs': widthRatio < 0.3,
    'nb-grid__area--width-s': 0.3 <= widthRatio && widthRatio < 0.5,
    'nb-grid__area--width-m': 0.5 <= widthRatio && widthRatio < 0.66,
    'nb-grid__area--width-l': 0.66 <= widthRatio && widthRatio < 0.80,
    'nb-grid__area--width-xl': 0.80 <= widthRatio && widthRatio < 0.95,
    'nb-grid__area--width-full': 0.95 <= widthRatio
  }]);
};
var getAreaClassnameByHeightRatio = function getAreaClassnameByHeightRatio(heightRatio) {
  return classnames__WEBPACK_IMPORTED_MODULE_0___default()([{
    'nb-grid__area--height-xs': heightRatio < 0.34,
    'nb-grid__area--height-s': 0.34 <= heightRatio && heightRatio < 0.5,
    'nb-grid__area--height-m': 0.5 <= heightRatio && heightRatio < 0.66,
    'nb-grid__area--height-l': 0.66 <= heightRatio && heightRatio < 0.80,
    'nb-grid__area--height-xl': 0.80 <= heightRatio
  }]);
};
var getGridColumnsAndRows = function getGridColumnsAndRows(attributes) {
  return {
    gridcolumns: !attributes.flipcolsrows ? attributes.gridcolumns : attributes.gridrows,
    gridrows: !attributes.flipcolsrows ? attributes.gridrows : attributes.gridcolumns
  };
};
var transposeMatrix = function transposeMatrix(source) {
  return Object.keys(source[0]).map(function (column) {
    return source.map(function (row) {
      return row[column];
    });
  });
};
var getAreaClassname = function getAreaClassname(area, attributes) {
  var widthRatioMultiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var width = area.width,
      height = area.height;

  var _getGridColumnsAndRow5 = getGridColumnsAndRows(attributes),
      gridcolumns = _getGridColumnsAndRow5.gridcolumns,
      gridrows = _getGridColumnsAndRow5.gridrows;

  return classnames__WEBPACK_IMPORTED_MODULE_0___default()([getAreaBaseClassname(area), getAreaClassnameByWidthRatio(widthRatioMultiplier * width / gridcolumns), getAreaClassnameByHeightRatio(height / gridrows), getAreaClassnameByAspectRatio(area, attributes)]);
};
var removeSmallestColumn = function removeSmallestColumn(areaColumns) {
  var data = areaColumns.map(function (area, index) {
    return {
      area: area,
      index: index
    };
  });
  data.sort(function (obj1, obj2) {
    return obj1.area.width - obj2.area.width;
  });
  var indexToRemove = data[0].index;

  if (data[0].area.nth === 1) {
    indexToRemove = data[data.length].index;
  }

  areaColumns.splice(indexToRemove, 1);
};
var normalizeColumns = function normalizeColumns(areaColumns, attributes) {
  moveColumnsToLeft(areaColumns);
  growColumnsToRight(areaColumns, attributes);
  moveColumnsToTop(areaColumns);
  areaColumns.forEach(function (areaColumn) {
    areaColumn.areas.forEach(function (area) {
      area.col = areaColumn.col;
      area.width = areaColumn.width;
    });
  });
};
var moveColumnsToLeft = function moveColumnsToLeft(areaColumns) {
  areaColumns.forEach(function (areaColumn) {
    var spaceLeft = 0;
    var movingLeft = true;

    while (movingLeft) {
      var overlapLeft = areaColumns.filter(function (compareColumn) {
        return compareColumn !== areaColumn;
      }).some(function (compareColumn) {
        return !(areaColumn.col + areaColumn.width - 1 < compareColumn.col || areaColumn.row + areaColumn.height - 1 < compareColumn.row || areaColumn.row > compareColumn.row + compareColumn.height - 1 || areaColumn.col - (spaceLeft + 1) > compareColumn.col + compareColumn.width - 1);
      });

      if (overlapLeft || areaColumn.col - spaceLeft <= 1) {
        movingLeft = false;
      } else {
        spaceLeft++;
      }
    }

    areaColumn.col = areaColumn.col - spaceLeft;
  });
};
var growColumnsToRight = function growColumnsToRight(areaColumns, attributes) {
  var gridcolumns = attributes.gridcolumns;
  areaColumns.forEach(function (areaColumn) {
    var spaceRight = 0;
    var growingRight = true;

    while (growingRight) {
      var overlapRight = areaColumns.filter(function (compareColumn) {
        return compareColumn !== areaColumn;
      }).some(function (compareColumn) {
        return !(areaColumn.col + areaColumn.width + spaceRight < compareColumn.col || areaColumn.row + areaColumn.height - 1 < compareColumn.row || areaColumn.row > compareColumn.row + compareColumn.height - 1 || areaColumn.col > compareColumn.col + compareColumn.width - 1);
      });

      if (overlapRight || areaColumn.col + areaColumn.width + spaceRight - 1 >= gridcolumns) {
        growingRight = false;
      } else {
        spaceRight++;
      }
    }

    areaColumn.width = areaColumn.width + spaceRight;
  });
};
var moveColumnsToTop = function moveColumnsToTop(areaColumns) {
  areaColumns.forEach(function (areaColumn) {
    var spaceTop = 0;
    var movingTop = true;

    while (movingTop) {
      var overlapTop = areaColumns.filter(function (compareColumn) {
        return compareColumn !== areaColumn;
      }).some(function (compareColumn) {
        return !(areaColumn.col + areaColumn.width - 1 < compareColumn.col || areaColumn.row + areaColumn.height - 1 < compareColumn.row || areaColumn.row - (spaceTop + 1) > compareColumn.row + compareColumn.height - 1 || areaColumn.col > compareColumn.col + compareColumn.width - 1);
      });

      if (overlapTop || areaColumn.row - spaceTop <= 1) {
        movingTop = false;
      } else {
        spaceTop++;
      }
    }

    areaColumn.row = areaColumn.row - spaceTop;
  });
};


/***/ }),

/***/ "./packages/utils/build-module/color-signal.js":
/*!*****************************************************!*\
  !*** ./packages/utils/build-module/color-signal.js ***!
  \*****************************************************/
/*! exports provided: getColorSignalClassnames, getContentColorsSignalClassnames, getPaletteConfig, getSignals, getDefaultSignals, syncColorSignalClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColorSignalClassnames", function() { return getColorSignalClassnames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContentColorsSignalClassnames", function() { return getContentColorsSignalClassnames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaletteConfig", function() { return getPaletteConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSignals", function() { return getSignals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultSignals", function() { return getDefaultSignals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncColorSignalClasses", function() { return syncColorSignalClasses; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./packages/utils/build-module/index.js");

/**
 *
 * @param attributes block's attributes
 * @param supports blockType's supports; it can be set to true to assume colorSignal support is fully enabled
 * @returns {string} utility classnames joined in a single string based on block attributes and support
 */

var getColorSignalClassnames = function getColorSignalClassnames(attributes, supports) {
  var _supports$novaBlocks;

  var palette = attributes.palette,
      paletteVariation = attributes.paletteVariation,
      useSourceColorAsReference = attributes.useSourceColorAsReference,
      colorSignal = attributes.colorSignal;
  var colorSignalSupport = supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks = supports.novaBlocks) === null || _supports$novaBlocks === void 0 ? void 0 : _supports$novaBlocks.colorSignal;
  var newClassnames = [];

  if (supports === true || colorSignalSupport === true || colorSignalSupport !== null && colorSignalSupport !== void 0 && colorSignalSupport.paletteClassname) {
    newClassnames.push("sm-palette-".concat(palette));

    if (useSourceColorAsReference) {
      newClassnames.push('sm-palette--shifted');
    }
  }

  if (supports === true || colorSignalSupport === true || colorSignalSupport !== null && colorSignalSupport !== void 0 && colorSignalSupport.paletteVariationClassname) {
    newClassnames.push("sm-variation-".concat(paletteVariation));
  }

  if (supports === true || colorSignalSupport === true || colorSignalSupport !== null && colorSignalSupport !== void 0 && colorSignalSupport.colorSignalClassname) {
    newClassnames.push("sm-color-signal-".concat(colorSignal));
  }

  return newClassnames.join(" ");
};
var getContentColorsSignalClassnames = function getContentColorsSignalClassnames(attributes, supports) {
  var newAttributes = Object.assign({}, attributes, {
    colorSignal: attributes.contentColorSignal,
    paletteVariation: attributes.contentPaletteVariation,
    useSourceColorAsReference: false
  });
  return getColorSignalClassnames(newAttributes, supports);
};
var getPaletteConfig = function getPaletteConfig(paletteId) {
  var _window$styleManager;

  var config = ((_window$styleManager = window.styleManager) === null || _window$styleManager === void 0 ? void 0 : _window$styleManager.colorsConfig) || [];
  return config.find(function (palette) {
    return "".concat(palette.id) === "".concat(paletteId);
  });
};
var getSignals = function getSignals(paletteId) {
  var palette = getPaletteConfig(paletteId);
  var colors = palette === null || palette === void 0 ? void 0 : palette.colors.slice();

  if (!palette || !(palette !== null && palette !== void 0 && palette.variations)) {
    return getDefaultSignals();
  }

  var variations = palette.variations.slice();
  var signalsCount = Math.min(colors.length, 4);
  var colorGroups = [];
  var chunk = colors.length / signalsCount;

  for (var i = 0; i < signalsCount; i++) {
    var start = chunk * i;
    var end = chunk * (i + 1);
    colorGroups.push(colors.slice(start, end));
  }

  var signals = [];
  var backgrounds = variations.map(function (v) {
    return v.bg.toLowerCase();
  });
  colorGroups.forEach(function (group) {
    var firstColor = group[0];
    var lastColor = group[group.length - 1];
    var start = backgrounds.indexOf(firstColor.toLowerCase());
    var end = backgrounds.lastIndexOf(lastColor.toLowerCase());
    var middle = Math.floor(start * 0.5 + end * 0.5);
    signals.push(middle + 1);
  });
  return signals;
};
var getDefaultSignals = function getDefaultSignals() {
  return [1, 3, 8, 11];
};
var syncColorSignalClasses = function syncColorSignalClasses(from, to) {
  if (to && from) {
    to.classList.forEach(function (className) {
      if (className.indexOf('sm-') > -1) {
        to.classList.remove(className);
      }
    });
    from.classList.forEach(function (className) {
      if (className.indexOf('sm-') > -1) {
        to.classList.add(className);
      }
    });
  }
};


/***/ }),

/***/ "./packages/utils/build-module/debounce.js":
/*!*************************************************!*\
  !*** ./packages/utils/build-module/debounce.js ***!
  \*************************************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
var debounce = function debounce(func, wait) {
  var timeout = null;
  return function () {
    var context = this;
    var args = arguments;

    var later = function later() {
      func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};


/***/ }),

/***/ "./packages/utils/build-module/duotone/index.js":
/*!******************************************************!*\
  !*** ./packages/utils/build-module/duotone/index.js ***!
  \******************************************************/
/*! exports provided: getValuesFromColors, getDuotoneFilterSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValuesFromColors", function() { return getValuesFromColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDuotoneFilterSvg", function() { return getDuotoneFilterSvg; });
/* harmony import */ var colord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! colord */ "./packages/utils/node_modules/colord/index.mjs");

var getValuesFromColors = function getValuesFromColors() {
  var colors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var values = {
    r: [],
    g: [],
    b: [],
    a: []
  };
  colors.forEach(function (color) {
    var rgbColor = Object(colord__WEBPACK_IMPORTED_MODULE_0__["colord"])(color).toRgb();
    values.r.push(rgbColor.r / 255);
    values.g.push(rgbColor.g / 255);
    values.b.push(rgbColor.b / 255);
    values.a.push(rgbColor.a);
  });
  return values;
};
var getDuotoneFilterSvg = function getDuotoneFilterSvg(colors, id) {
  var values = getValuesFromColors(colors);
  return "<svg\n      xmlnsXlink=\"http://www.w3.org/1999/xlink\"\n      viewBox=\"0 0 0 0\"\n      width=\"0\"\n      height=\"0\"\n      focusable=\"false\"\n      role=\"none\"\n    >\n      <defs>\n        <filter id=\"".concat(id, "\" color-interpolation-filters=\"sRGB\">\n          <feColorMatrix type=\"matrix\" values=\"\n              .33 .33 .33 0 0\n              .33 .33 .33 0 0\n              .33 .33 .33 0 0\n              .33 .33 .33 1 0\" \n          />\n          <feComponentTransfer>\n            <feFuncR type=\"table\" tableValues=\"").concat(values.r.join(' '), "\" />\n            <feFuncG type=\"table\" tableValues=\"").concat(values.g.join(' '), "\" />\n            <feFuncB type=\"table\" tableValues=\"").concat(values.b.join(' '), "\" />\n            <feFuncA type=\"table\" tableValues=\"").concat(values.a.join(' '), "\" />\n          </feComponentTransfer>\n          <feComposite\n            in2=\"SourceGraphic\"\n            operator=\"in\"\n          />\n        </filter>\n      </defs>\n    </svg>");
};


/***/ }),

/***/ "./packages/utils/build-module/focal-point.js":
/*!****************************************************!*\
  !*** ./packages/utils/build-module/focal-point.js ***!
  \****************************************************/
/*! exports provided: defaultSnapValues, maybeSnapFocalPoint, getSnapClassname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSnapValues", function() { return defaultSnapValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeSnapFocalPoint", function() { return maybeSnapFocalPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSnapClassname", function() { return getSnapClassname; });
var defaultSnapValues = {
  x: [0, 0.5, 1],
  y: [0, 0.5, 1]
};
var maybeSnapFocalPoint = function maybeSnapFocalPoint(focalPoint) {
  var snapValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSnapValues;
  var x = parseFloat(focalPoint.x);
  var y = parseFloat(focalPoint.y);
  var thereshold = 0.05;
  snapValues.x.forEach(function (snapValue) {
    if (snapValue - thereshold < x && x < snapValue + thereshold) {
      x = snapValue;
    }
  });
  snapValues.y.forEach(function (snapValue) {
    if (snapValue - thereshold < y && y < snapValue + thereshold) {
      y = snapValue;
    }
  });
  return {
    x: x,
    y: y
  };
};
var getSnapClassname = function getSnapClassname(focalPoint) {
  var classNames = [];

  if (defaultSnapValues.x.includes(parseFloat(focalPoint.x))) {
    classNames.push('is-snapped-x');
  }

  if (defaultSnapValues.y.includes(parseFloat(focalPoint.y))) {
    classNames.push('is-snapped-y');
  }

  return classNames.join(' ');
};


/***/ }),

/***/ "./packages/utils/build-module/has-touch-screen.js":
/*!*********************************************************!*\
  !*** ./packages/utils/build-module/has-touch-screen.js ***!
  \*********************************************************/
/*! exports provided: hasTouchScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasTouchScreen", function() { return hasTouchScreen; });
var hasTouchScreen = function hasTouchScreen() {
  var hasTouchScreen = false;

  if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
  } else if ("msMaxTouchPoints" in navigator) {
    hasTouchScreen = navigator.msMaxTouchPoints > 0;
  } else {
    var mQ = window.matchMedia && matchMedia("(pointer:coarse)");

    if (mQ && mQ.media === "(pointer:coarse)") {
      hasTouchScreen = !!mQ.matches;
    } else if ('orientation' in window) {
      hasTouchScreen = true;
    } else {
      var UA = navigator.userAgent;
      hasTouchScreen = /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
    }
  }

  return hasTouchScreen;
};


/***/ }),

/***/ "./packages/utils/build-module/index.js":
/*!**********************************************!*\
  !*** ./packages/utils/build-module/index.js ***!
  \**********************************************/
/*! exports provided: range, arrayRotate, BREAK_LEFT_CLASS, BREAK_RIGHT_CLASS, cleanupBreakClasses, getAlignedSiblings, getElementBreakClasses, maybeAddBreakClassesToElement, getAdjacentSidebarBlocks, wouldOverlap, doOverlap, getContentBlocksArray, applyLayoutEngine, getGridStyle, getPostsCount, redistributeCardsInAreas, getOptimalHeaderPosition, isLandscape, getParametricLayoutAreaClassName, getAreaBaseClassname, getAreaClassnameByAspectRatio, getAreaClassnameByWidthRatio, getAreaClassnameByHeightRatio, getGridColumnsAndRows, transposeMatrix, getAreaClassname, removeSmallestColumn, normalizeColumns, moveColumnsToLeft, growColumnsToRight, moveColumnsToTop, getColorSignalClassnames, getContentColorsSignalClassnames, getPaletteConfig, getSignals, getDefaultSignals, syncColorSignalClasses, debounce, getValuesFromColors, getDuotoneFilterSvg, defaultSnapValues, maybeSnapFocalPoint, getSnapClassname, hasTouchScreen, isMobileDevice, normalizeMedia, below, above, mqService, getOverlayFilterCSSProps, getRandomBetween, getRandomArrayFromArray, getRandomFromArray, getRandomBooleanValue, scrollFromTo, getSpacingCSSProps, isSafari, findParents, shuffleArray, getControlsClasses, areAttributesDirty, getControlsDirtyClasses, getCardMediaPaddingTop, titleCase, isAnyPartOfElementInViewport, capitalizeFirstLetter, getAlignmentClassnames, getLevelAttributes, getAspectRatioAttributes, getPaddingTopFromContainerHeight, getAlignFromMatrix, ready, addClass, removeClass, hasClass, empty, toggleClass, getFirstChild, setAndResetElementStyles, clamp, isFunctionalPalette, IS_EDITOR, IS_CUSTOMIZER, getPreviewAttributes, needsPreview, onScrollRAF, matches, resizeDropcap, getAttributes, applyCSS, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSafari", function() { return isSafari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findParents", function() { return findParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleArray", function() { return shuffleArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getControlsClasses", function() { return getControlsClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areAttributesDirty", function() { return areAttributesDirty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getControlsDirtyClasses", function() { return getControlsDirtyClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCardMediaPaddingTop", function() { return getCardMediaPaddingTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titleCase", function() { return titleCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnyPartOfElementInViewport", function() { return isAnyPartOfElementInViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignmentClassnames", function() { return getAlignmentClassnames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLevelAttributes", function() { return getLevelAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAspectRatioAttributes", function() { return getAspectRatioAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaddingTopFromContainerHeight", function() { return getPaddingTopFromContainerHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignFromMatrix", function() { return getAlignFromMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ready", function() { return ready; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstChild", function() { return getFirstChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAndResetElementStyles", function() { return setAndResetElementStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunctionalPalette", function() { return isFunctionalPalette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_EDITOR", function() { return IS_EDITOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_CUSTOMIZER", function() { return IS_CUSTOMIZER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviewAttributes", function() { return getPreviewAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "needsPreview", function() { return needsPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onScrollRAF", function() { return onScrollRAF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeDropcap", function() { return resizeDropcap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttributes", function() { return getAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyCSS", function() { return applyCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./packages/utils/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./packages/utils/build-module/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["range"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayRotate", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayRotate"]; });

/* harmony import */ var _break_align__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./break-align */ "./packages/utils/build-module/break-align.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BREAK_LEFT_CLASS", function() { return _break_align__WEBPACK_IMPORTED_MODULE_2__["BREAK_LEFT_CLASS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BREAK_RIGHT_CLASS", function() { return _break_align__WEBPACK_IMPORTED_MODULE_2__["BREAK_RIGHT_CLASS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanupBreakClasses", function() { return _break_align__WEBPACK_IMPORTED_MODULE_2__["cleanupBreakClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAlignedSiblings", function() { return _break_align__WEBPACK_IMPORTED_MODULE_2__["getAlignedSiblings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementBreakClasses", function() { return _break_align__WEBPACK_IMPORTED_MODULE_2__["getElementBreakClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maybeAddBreakClassesToElement", function() { return _break_align__WEBPACK_IMPORTED_MODULE_2__["maybeAddBreakClassesToElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAdjacentSidebarBlocks", function() { return _break_align__WEBPACK_IMPORTED_MODULE_2__["getAdjacentSidebarBlocks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wouldOverlap", function() { return _break_align__WEBPACK_IMPORTED_MODULE_2__["wouldOverlap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doOverlap", function() { return _break_align__WEBPACK_IMPORTED_MODULE_2__["doOverlap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContentBlocksArray", function() { return _break_align__WEBPACK_IMPORTED_MODULE_2__["getContentBlocksArray"]; });

/* harmony import */ var _collection_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collection-layout */ "./packages/utils/build-module/collection-layout/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyLayoutEngine", function() { return _collection_layout__WEBPACK_IMPORTED_MODULE_3__["applyLayoutEngine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGridStyle", function() { return _collection_layout__WEBPACK_IMPORTED_MODULE_3__["getGridStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPostsCount", function() { return _collection_layout__WEBPACK_IMPORTED_MODULE_3__["getPostsCount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redistributeCardsInAreas", function() { return _collection_layout__WEBPACK_IMPORTED_MODULE_3__["redistributeCardsInAreas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOptimalHeaderPosition", function() { return _collection_layout__WEBPACK_IMPORTED_MODULE_3__["getOptimalHeaderPosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLandscape", function() { return _collection_layout__WEBPACK_IMPORTED_MODULE_3__["isLandscape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParametricLayoutAreaClassName", function() { return _collection_layout__WEBPACK_IMPORTED_MODULE_3__["getParametricLayoutAreaClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAreaBaseClassname", function() { return _collection_layout__WEBPACK_IMPORTED_MODULE_3__["getAreaBaseClassname"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAreaClassnameByAspectRatio", function() { return _collection_layout__WEBPACK_IMPORTED_MODULE_3__["getAreaClassnameByAspectRatio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAreaClassnameByWidthRatio", function() { return _collection_layout__WEBPACK_IMPORTED_MODULE_3__["getAreaClassnameByWidthRatio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAreaClassnameByHeightRatio", function() { return _collection_layout__WEBPACK_IMPORTED_MODULE_3__["getAreaClassnameByHeightRatio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGridColumnsAndRows", function() { return _collection_layout__WEBPACK_IMPORTED_MODULE_3__["getGridColumnsAndRows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transposeMatrix", function() { return _collection_layout__WEBPACK_IMPORTED_MODULE_3__["transposeMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAreaClassname", function() { return _collection_layout__WEBPACK_IMPORTED_MODULE_3__["getAreaClassname"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeSmallestColumn", function() { return _collection_layout__WEBPACK_IMPORTED_MODULE_3__["removeSmallestColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeColumns", function() { return _collection_layout__WEBPACK_IMPORTED_MODULE_3__["normalizeColumns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moveColumnsToLeft", function() { return _collection_layout__WEBPACK_IMPORTED_MODULE_3__["moveColumnsToLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "growColumnsToRight", function() { return _collection_layout__WEBPACK_IMPORTED_MODULE_3__["growColumnsToRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moveColumnsToTop", function() { return _collection_layout__WEBPACK_IMPORTED_MODULE_3__["moveColumnsToTop"]; });

/* harmony import */ var _color_signal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-signal */ "./packages/utils/build-module/color-signal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColorSignalClassnames", function() { return _color_signal__WEBPACK_IMPORTED_MODULE_4__["getColorSignalClassnames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContentColorsSignalClassnames", function() { return _color_signal__WEBPACK_IMPORTED_MODULE_4__["getContentColorsSignalClassnames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPaletteConfig", function() { return _color_signal__WEBPACK_IMPORTED_MODULE_4__["getPaletteConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSignals", function() { return _color_signal__WEBPACK_IMPORTED_MODULE_4__["getSignals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultSignals", function() { return _color_signal__WEBPACK_IMPORTED_MODULE_4__["getDefaultSignals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "syncColorSignalClasses", function() { return _color_signal__WEBPACK_IMPORTED_MODULE_4__["syncColorSignalClasses"]; });

/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./debounce */ "./packages/utils/build-module/debounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _debounce__WEBPACK_IMPORTED_MODULE_5__["debounce"]; });

/* harmony import */ var _duotone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./duotone */ "./packages/utils/build-module/duotone/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getValuesFromColors", function() { return _duotone__WEBPACK_IMPORTED_MODULE_6__["getValuesFromColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDuotoneFilterSvg", function() { return _duotone__WEBPACK_IMPORTED_MODULE_6__["getDuotoneFilterSvg"]; });

/* harmony import */ var _focal_point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./focal-point */ "./packages/utils/build-module/focal-point.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSnapValues", function() { return _focal_point__WEBPACK_IMPORTED_MODULE_7__["defaultSnapValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maybeSnapFocalPoint", function() { return _focal_point__WEBPACK_IMPORTED_MODULE_7__["maybeSnapFocalPoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSnapClassname", function() { return _focal_point__WEBPACK_IMPORTED_MODULE_7__["getSnapClassname"]; });

/* harmony import */ var _has_touch_screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./has-touch-screen */ "./packages/utils/build-module/has-touch-screen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasTouchScreen", function() { return _has_touch_screen__WEBPACK_IMPORTED_MODULE_8__["hasTouchScreen"]; });

/* harmony import */ var _is_mobile_device__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./is-mobile-device */ "./packages/utils/build-module/is-mobile-device.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMobileDevice", function() { return _is_mobile_device__WEBPACK_IMPORTED_MODULE_9__["isMobileDevice"]; });

/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./media */ "./packages/utils/build-module/media.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeMedia", function() { return _media__WEBPACK_IMPORTED_MODULE_10__["normalizeMedia"]; });

/* harmony import */ var _media_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./media-query */ "./packages/utils/build-module/media-query.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "below", function() { return _media_query__WEBPACK_IMPORTED_MODULE_11__["below"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "above", function() { return _media_query__WEBPACK_IMPORTED_MODULE_11__["above"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mqService", function() { return _media_query__WEBPACK_IMPORTED_MODULE_11__["mqService"]; });

/* harmony import */ var _overlay_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./overlay-filter */ "./packages/utils/build-module/overlay-filter/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOverlayFilterCSSProps", function() { return _overlay_filter__WEBPACK_IMPORTED_MODULE_12__["getOverlayFilterCSSProps"]; });

/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./random */ "./packages/utils/build-module/random/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRandomBetween", function() { return _random__WEBPACK_IMPORTED_MODULE_13__["getRandomBetween"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRandomArrayFromArray", function() { return _random__WEBPACK_IMPORTED_MODULE_13__["getRandomArrayFromArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRandomFromArray", function() { return _random__WEBPACK_IMPORTED_MODULE_13__["getRandomFromArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRandomBooleanValue", function() { return _random__WEBPACK_IMPORTED_MODULE_13__["getRandomBooleanValue"]; });

/* harmony import */ var _scroll_from_to__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scroll-from-to */ "./packages/utils/build-module/scroll-from-to.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scrollFromTo", function() { return _scroll_from_to__WEBPACK_IMPORTED_MODULE_14__["scrollFromTo"]; });

/* harmony import */ var _space_and_sizing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./space-and-sizing */ "./packages/utils/build-module/space-and-sizing/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSpacingCSSProps", function() { return _space_and_sizing__WEBPACK_IMPORTED_MODULE_15__["getSpacingCSSProps"]; });

















var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var findParents = function findParents(target, query) {
  var parents = [];

  function traverse(item) {
    var parent = item.parentNode;

    if (parent instanceof HTMLElement) {
      if (parent.matches(query)) {
        parents.push(parent);
      }

      traverse(parent);
    }
  }

  traverse(target);
  return parents;
}; // https://stackoverflow.com/a/2450976

var shuffleArray = function shuffleArray(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex; // While there remain elements to shuffle...

  while (0 !== currentIndex) {
    // eslint-disable-next-line no-restricted-syntax
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
var getControlsClasses = function getControlsClasses(attributes, compileAttributes) {
  var isDirty = areAttributesDirty(attributes, compileAttributes);
  return getControlsDirtyClasses(isDirty);
};
var areAttributesDirty = function areAttributesDirty(attributes, compileAttributes) {
  var dirty = false;
  var compiledAttributes = compileAttributes(attributes);

  if (Object.keys(compiledAttributes).some(function (key) {
    return compiledAttributes[key] !== attributes[key];
  })) {
    dirty = true;
  }

  return dirty;
};
var getControlsDirtyClasses = function getControlsDirtyClasses(isDirty) {
  var classes = ['novablocks-controls-wrap'];

  if (!!isDirty) {
    classes.push('novablocks-controls-wrap--dirty');
  }

  return classes.join(' ');
};
var getCardMediaPaddingTop = function getCardMediaPaddingTop(thumbnailAspectRatio) {
  var compiledHeight = thumbnailAspectRatio / 50 - 1;

  if (compiledHeight < 0) {
    compiledHeight *= 2;
  }

  var numerator = 1;
  var denominator = 1;
  compiledHeight = Math.min(Math.max(-3, compiledHeight), 1);

  if (compiledHeight > 0) {
    numerator = 1 + compiledHeight;
  }

  if (compiledHeight < 0) {
    denominator = 1 + Math.abs(compiledHeight);
  }

  return "".concat(numerator * 100 / denominator, "%");
};
var titleCase = function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');

  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  } // Directly return the joined string


  return splitStr.join(' ');
};
var isAnyPartOfElementInViewport = function isAnyPartOfElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  var windowWidth = window.innerWidth || document.documentElement.clientWidth; // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap

  var vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  var horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
  return vertInView && horInView;
}; // Uppercase the first letter of a string in JavaScript
// https://flaviocopes.com/how-to-uppercase-first-letter-javascript/

var capitalizeFirstLetter = function capitalizeFirstLetter(string) {
  if (typeof string !== 'string') {
    return '';
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};
var getAlignmentClassnames = function getAlignmentClassnames(attributes) {
  var contentPosition = attributes.contentPosition;

  if (typeof contentPosition !== "string") {
    return '';
  }

  var alignment = contentPosition.split(" ");
  var verticalAlignment = alignment[0];
  var horizontalAlignment = alignment[1];
  return "novablocks-u-valign-".concat(verticalAlignment, " novablocks-u-halign-").concat(horizontalAlignment);
};
var getLevelAttributes = function getLevelAttributes(attributes) {
  var level = attributes.level;
  return {
    level: level,
    collectionTitleLevel: level,
    cardTitleLevel: level + 1
  };
};
var getAspectRatioAttributes = function getAspectRatioAttributes(attributes) {
  var thumbnailAspectRatio = attributes.thumbnailAspectRatio,
      thumbnailAspectRatioString = attributes.thumbnailAspectRatioString;

  if (thumbnailAspectRatioString === 'auto') {
    return {};
  }

  if (thumbnailAspectRatio < 50) {
    thumbnailAspectRatioString = 'landscape';
  }

  return {
    thumbnailAspectRatio: thumbnailAspectRatio,
    thumbnailAspectRatioString: thumbnailAspectRatioString
  };
};
var getPaddingTopFromContainerHeight = function getPaddingTopFromContainerHeight(containerHeight) {
  var height = containerHeight / 50 - 1;
  var numerator = 1;
  var denominator = 1;
  height = Math.min(Math.max(-1, height), 1);

  if (height > 0) {
    numerator = 1 + height;
  }

  if (height < 0) {
    denominator = 1 + Math.abs(height);
  }

  return numerator * 100 / denominator;
};
var getAlignFromMatrix = function getAlignFromMatrix(alignMatrixValue) {
  if (typeof alignMatrixValue !== 'string') {
    return ['center', 'center'];
  }

  var align = alignMatrixValue.split(/\b\s+/);
  return [align[0], align[1] || 'center'];
};
var ready = function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};
var addClass = function addClass(element, classes) {
  var classesArray = classes.split(/\s+/).filter(function (x) {
    return x.trim().length;
  });

  if (classesArray.length) {
    var _element$classList;

    (_element$classList = element.classList).add.apply(_element$classList, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(classesArray));
  }
};
var removeClass = function removeClass(element, classes) {
  var classesArray = classes.split(/\s+/).filter(function (x) {
    return x.trim().length;
  });

  if (classesArray.length) {
    var _element$classList2;

    (_element$classList2 = element.classList).remove.apply(_element$classList2, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(classesArray));
  }
};
var hasClass = function hasClass(element, className) {
  return element.classList.contains(className);
};
var empty = function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};
var toggleClass = function toggleClass(element, className, condition) {
  if (typeof condition !== "undefined") {
    if (!!condition) {
      addClass(element, className);
    } else {
      removeClass(element, className);
    }

    return;
  }

  if (hasClass(element, className)) {
    removeClass(element, className);
  } else {
    addClass(element, className);
  }
};
var getFirstChild = function getFirstChild(element) {
  var firstChild = element.firstChild;

  while (firstChild != null && firstChild.nodeType === 3) {
    // skip TextNodes
    firstChild = firstChild.nextSibling;
  }

  return firstChild;
};
function setAndResetElementStyles(element) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var setProps = function setProps() {
    Object.keys(props).forEach(function (key) {
      element.style[key] = props[key];
    });
  };

  var resetProps = function resetProps() {
    Object.keys(props).forEach(function (key) {
      element.style[key] = '';
    });
  };

  setProps();

  if (window.requestIdleCallback) {
    window.requestIdleCallback(resetProps);
  } else {
    setTimeout(resetProps, 0);
  }
}
var clamp = function clamp(number, min, max) {
  return Math.min(Math.max(min, number), max);
};
var isFunctionalPalette = function isFunctionalPalette(palette) {
  var id = palette.id + '';
  return id.charAt(0) === '_';
};
var IS_EDITOR = document.body.classList.contains('block-editor-page');
var IS_CUSTOMIZER = document.body.classList.contains('wp-customizer');
var getPreviewAttributes = function getPreviewAttributes(attributes) {
  if (!needsPreview(attributes)) {
    return Object.assign({}, attributes, {
      preview: false
    });
  }

  if (attributes !== null && attributes !== void 0 && attributes.preview) {
    return attributes;
  }

  return Object.assign({}, attributes, {
    layoutStyle: 'classic',
    columns: 1,
    cardLayout: 'horizontal',
    cardMediaOpacity: 100
  });
};
var needsPreview = function needsPreview(attributes) {
  return ["parametric", "carousel", "masonry"].includes(attributes.layoutStyle) && "auto" !== attributes.contentType;
};
var onScrollRAF = function onScrollRAF(callback) {
  var scrollY = window.pageYOffset;
  var lastScrollY = -1;
  var frameRendered = false;
  window.addEventListener('scroll', function () {
    scrollY = window.pageYOffset;
    frameRendered = false;
  });
  window.addEventListener('resize', function () {
    frameRendered = false;
  });

  var tick = function tick() {
    if (!frameRendered) {
      callback(scrollY, lastScrollY);
      lastScrollY = scrollY;
      frameRendered = true;
    }

    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};
var matches = function matches(el, selector) {
  return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
};
var resizeDropcap = function resizeDropcap(dropcap) {
  var wrapper = dropcap.parentElement;
  var dropcapWidth = dropcap.offsetWidth;
  var wrapperWidth = wrapper.offsetWidth * 0.9;
  var widthRatio = wrapperWidth / dropcapWidth;
  var dropcapHeight = dropcap.offsetHeight;
  var wrapperHeight = wrapper.offsetHeight * 0.9;
  var heightRatio = wrapperHeight / dropcapHeight;
  var ratio = Math.min(widthRatio, heightRatio);
  var fontSize = window.getComputedStyle(dropcap, null).getPropertyValue('font-size');
  var fontSizeValue = parseFloat(fontSize);
  var newFontSizeValue = fontSizeValue * ratio;
  dropcap.style.fontSize = "".concat(newFontSizeValue, "px");
};
var getAttributes = function getAttributes(element) {
  var attributes = {};
  Object.keys(element.dataset).forEach(function (key) {
    try {
      attributes[key] = JSON.parse(element.dataset[key]);
    } catch (e) {
      attributes[key] = element.dataset[key];
    }
  });
  return attributes;
};
var applyCSS = function applyCSS(element, css) {
  for (var property in css) {
    if (property.indexOf('--') === 0) {
      element.style.setProperty(property, css[property]);
    } else {
      element.style[property] = css[property];
    }
  }
};
var remove = function remove(element) {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};


/***/ }),

/***/ "./packages/utils/build-module/is-mobile-device.js":
/*!*********************************************************!*\
  !*** ./packages/utils/build-module/is-mobile-device.js ***!
  \*********************************************************/
/*! exports provided: isMobileDevice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobileDevice", function() { return isMobileDevice; });
// using window.mobileAndTabletCheck from https://stackoverflow.com/a/11381730
var isMobileDevice = function isMobileDevice() {
  var check = false;

  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
      check = true;
    }
  })(navigator.userAgent || navigator.vendor || window.opera);

  return check;
};


/***/ }),

/***/ "./packages/utils/build-module/media-query.js":
/*!****************************************************!*\
  !*** ./packages/utils/build-module/media-query.js ***!
  \****************************************************/
/*! exports provided: below, above, mqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "below", function() { return below; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "above", function() { return above; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mqService", function() { return mqService; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./packages/utils/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");


var mqServiceClass = function mqServiceClass() {
  var _this = this;

  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, mqServiceClass);

  this.breakpoints = {
    mobile: '480px',
    tablet: '768px',
    lap: '1024px',
    desktop: '1440px'
  };
  this.above = {};
  this.below = {};
  Object.keys(this.breakpoints).forEach(function (key) {
    var breakpoint = _this.breakpoints[key];
    var query = window.matchMedia("(min-width: ".concat(breakpoint, ")"));

    var check = function check(event) {
      _this.above[key] = event.matches;
      _this.below[key] = !event.matches;
    };

    check(query);
    query.addEventListener('change', check);
  });
};

var mqService = new mqServiceClass();
var below = function below(breakpoint) {
  return mqService.below[breakpoint];
};
var above = function above(breakpoint) {
  return mqService.above[breakpoint];
};



/***/ }),

/***/ "./packages/utils/build-module/media.js":
/*!**********************************************!*\
  !*** ./packages/utils/build-module/media.js ***!
  \**********************************************/
/*! exports provided: normalizeMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeMedia", function() { return normalizeMedia; });
var normalizeMedia = function normalizeMedia(mediaObject) {
  var _mediaObject$sizes, _mediaObject$sizes$no, _mediaObject$sizes2, _mediaObject$sizes2$n, _mediaObject$sizes3, _mediaObject$sizes3$n;

  // We will refrain from using the full image size to avoid overloading the editor window.
  // The `novablocks_large` image size is sufficient, if present.
  return {
    type: mediaObject === null || mediaObject === void 0 ? void 0 : mediaObject.type,
    width: (mediaObject === null || mediaObject === void 0 ? void 0 : (_mediaObject$sizes = mediaObject.sizes) === null || _mediaObject$sizes === void 0 ? void 0 : (_mediaObject$sizes$no = _mediaObject$sizes.novablocks_large) === null || _mediaObject$sizes$no === void 0 ? void 0 : _mediaObject$sizes$no.width) || (mediaObject === null || mediaObject === void 0 ? void 0 : mediaObject.width),
    height: (mediaObject === null || mediaObject === void 0 ? void 0 : (_mediaObject$sizes2 = mediaObject.sizes) === null || _mediaObject$sizes2 === void 0 ? void 0 : (_mediaObject$sizes2$n = _mediaObject$sizes2.novablocks_large) === null || _mediaObject$sizes2$n === void 0 ? void 0 : _mediaObject$sizes2$n.height) || mediaObject.height,
    url: (mediaObject === null || mediaObject === void 0 ? void 0 : (_mediaObject$sizes3 = mediaObject.sizes) === null || _mediaObject$sizes3 === void 0 ? void 0 : (_mediaObject$sizes3$n = _mediaObject$sizes3.novablocks_large) === null || _mediaObject$sizes3$n === void 0 ? void 0 : _mediaObject$sizes3$n.url) || (mediaObject === null || mediaObject === void 0 ? void 0 : mediaObject.url),
    alt: (mediaObject === null || mediaObject === void 0 ? void 0 : mediaObject.alt) || ''
  };
};


/***/ }),

/***/ "./packages/utils/build-module/overlay-filter/index.js":
/*!*************************************************************!*\
  !*** ./packages/utils/build-module/overlay-filter/index.js ***!
  \*************************************************************/
/*! exports provided: getOverlayFilterCSSProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOverlayFilterCSSProps", function() { return getOverlayFilterCSSProps; });
var getOverlayFilterCSSProps = function getOverlayFilterCSSProps(attributes) {
  var overlayFilterStrength = attributes.overlayFilterStrength;
  return {
    '--nb-overlay-filter-strength': overlayFilterStrength / 100
  };
};


/***/ }),

/***/ "./packages/utils/build-module/random/index.js":
/*!*****************************************************!*\
  !*** ./packages/utils/build-module/random/index.js ***!
  \*****************************************************/
/*! exports provided: getRandomBetween, getRandomArrayFromArray, getRandomFromArray, getRandomBooleanValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBetween", function() { return getRandomBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArrayFromArray", function() { return getRandomArrayFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomFromArray", function() { return getRandomFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBooleanValue", function() { return getRandomBooleanValue; });
var getRandomBetween = function getRandomBetween(min, max) {
  var random = Math.max(0, Math.random() - Number.MIN_VALUE);
  return Math.floor(random * (max - min + 1) + min);
};
var getRandomArrayFromArray = function getRandomArrayFromArray(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);

  if (!len) {
    return [];
  }

  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }

  return result;
};
var getRandomFromArray = function getRandomFromArray(arr) {
  var array = getRandomArrayFromArray(arr, 1);
  return array[0];
};
var getRandomBooleanValue = function getRandomBooleanValue() {
  return getRandomArrayFromArray([true, false], 1)[0];
};


/***/ }),

/***/ "./packages/utils/build-module/scroll-from-to.js":
/*!*******************************************************!*\
  !*** ./packages/utils/build-module/scroll-from-to.js ***!
  \*******************************************************/
/*! exports provided: scrollFromTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollFromTo", function() { return scrollFromTo; });
/* harmony import */ var _novablocks_easings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @novablocks/easings */ "@novablocks/easings");
/* harmony import */ var _novablocks_easings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_novablocks_easings__WEBPACK_IMPORTED_MODULE_0__);

var scrollFromTo = function scrollFromTo(element, scrollStart, scrollEnd) {
  var speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2000;
  var easing = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _novablocks_easings__WEBPACK_IMPORTED_MODULE_0__["linear"];
  var onStart = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function () {};
  var onEnd = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : function () {};
  var currentTime = 0; // min time .1, max time .8 seconds

  var time = Math.max(.1, Math.min(Math.abs(scrollStart - scrollEnd) / speed, .8)); // add animation loop

  function tick() {
    currentTime += 1 / 60;
    var p = currentTime / time;
    var t = easing(p);

    if (p < 1) {
      element.scrollTo(0, scrollStart + (scrollEnd - scrollStart) * t);
      window.requestAnimationFrame(tick);
    } else {
      element.scrollTo(0, scrollEnd);

      if (typeof onEnd === "function") {
        onEnd();
      }
    }
  }

  if (typeof onStart === "function") {
    onStart();
  }

  tick();
};


/***/ }),

/***/ "./packages/utils/build-module/space-and-sizing/index.js":
/*!***************************************************************!*\
  !*** ./packages/utils/build-module/space-and-sizing/index.js ***!
  \***************************************************************/
/*! exports provided: getSpacingCSSProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpacingCSSProps", function() { return getSpacingCSSProps; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./packages/utils/build-module/index.js");

var getSpacingCSSProps = function getSpacingCSSProps(attributes) {
  var blockTopSpacing = attributes.blockTopSpacing,
      blockBottomSpacing = attributes.blockBottomSpacing,
      emphasisTopSpacing = attributes.emphasisTopSpacing,
      emphasisBottomSpacing = attributes.emphasisBottomSpacing,
      verticalAlignment = attributes.verticalAlignment,
      contentAreaWidth = attributes.contentAreaWidth,
      contentPadding = attributes.contentPadding,
      mediaContainerHeight = attributes.mediaContainerHeight,
      imagePadding = attributes.imagePadding,
      imageResizing = attributes.imageResizing,
      layoutGutter = attributes.layoutGutter,
      minHeightFallback = attributes.minHeightFallback,
      thumbnailAspectRatio = attributes.thumbnailAspectRatio,
      spacingModifier = attributes.spacingModifier,
      spacingMultiplierOverride = attributes.spacingMultiplierOverride;
  var emphasisTopSpacingValue = verticalAlignment === 'top' ? Math.abs(emphasisTopSpacing) : emphasisTopSpacing;
  var emphasisBottomSpacingValue = verticalAlignment === 'bottom' ? Math.abs(emphasisBottomSpacing) : emphasisBottomSpacing;
  return {
    '--nb-emphasis-top-spacing': emphasisTopSpacingValue + '',
    '--nb-emphasis-bottom-spacing': emphasisBottomSpacingValue + '',
    '--nb-block-top-spacing': blockTopSpacing + '',
    '--nb-block-bottom-spacing': blockBottomSpacing + '',
    '--nb-block-zindex': Math.max(0, -1 * (blockTopSpacing + blockBottomSpacing)),
    '--nb-card-content-area-width': "".concat(contentAreaWidth, "%"),
    '--nb-card-media-container-height': mediaContainerHeight,
    '--nb-card-content-padding-multiplier': contentPadding / 100,
    '--nb-card-media-padding-top': Object(_index__WEBPACK_IMPORTED_MODULE_0__["getCardMediaPaddingTop"])(thumbnailAspectRatio),
    '--nb-card-media-object-fit': imageResizing === 'cropped' ? 'cover' : 'scale-down',
    '--nb-card-media-padding-multiplier': imagePadding / 100,
    '--nb-card-layout-gap-modifier': layoutGutter / 100,
    '--nb-min-height-fallback': minHeightFallback,
    '--nb-minimum-container-height': minHeightFallback + 'vh',
    '--nb-spacing-modifier': spacingModifier + '',
    '--nb-spacing-multiplier-override': spacingMultiplierOverride + ''
  };
};


/***/ }),

/***/ "./packages/utils/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!************************************************************************************!*\
  !*** ./packages/utils/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \************************************************************************************/
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

/***/ "./packages/utils/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!*************************************************************************************!*\
  !*** ./packages/utils/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./packages/utils/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./packages/utils/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!**********************************************************************************!*\
  !*** ./packages/utils/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \**********************************************************************************/
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

/***/ "./packages/utils/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!**********************************************************************************!*\
  !*** ./packages/utils/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \**********************************************************************************/
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

/***/ "./packages/utils/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!***********************************************************************************!*\
  !*** ./packages/utils/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./packages/utils/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!*************************************************************************************!*\
  !*** ./packages/utils/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./packages/utils/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!*************************************************************************************!*\
  !*** ./packages/utils/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./packages/utils/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./packages/utils/node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./packages/utils/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./packages/utils/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./packages/utils/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!**********************************************************************************************!*\
  !*** ./packages/utils/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./packages/utils/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./packages/utils/node_modules/colord/index.mjs":
/*!******************************************************!*\
  !*** ./packages/utils/node_modules/colord/index.mjs ***!
  \******************************************************/
/*! exports provided: Colord, colord, extend, getFormat, random */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colord", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colord", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormat", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return E; });
var r={grad:.9,turn:360,rad:360/(2*Math.PI)},t=function(r){return"string"==typeof r?r.length>0:"number"==typeof r},n=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=Math.pow(10,t)),Math.round(n*r)/n+0},e=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=1),r>n?n:r>t?r:t},u=function(r){return(r=isFinite(r)?r%360:0)>0?r:r+360},a=function(r){return{r:e(r.r,0,255),g:e(r.g,0,255),b:e(r.b,0,255),a:e(r.a)}},o=function(r){return{r:n(r.r),g:n(r.g),b:n(r.b),a:n(r.a,3)}},i=/^#([0-9a-f]{3,8})$/i,s=function(r){var t=r.toString(16);return t.length<2?"0"+t:t},h=function(r){var t=r.r,n=r.g,e=r.b,u=r.a,a=Math.max(t,n,e),o=a-Math.min(t,n,e),i=o?a===t?(n-e)/o:a===n?2+(e-t)/o:4+(t-n)/o:0;return{h:60*(i<0?i+6:i),s:a?o/a*100:0,v:a/255*100,a:u}},b=function(r){var t=r.h,n=r.s,e=r.v,u=r.a;t=t/360*6,n/=100,e/=100;var a=Math.floor(t),o=e*(1-n),i=e*(1-(t-a)*n),s=e*(1-(1-t+a)*n),h=a%6;return{r:255*[e,i,o,o,s,e][h],g:255*[s,e,e,i,o,o][h],b:255*[o,o,s,e,e,i][h],a:u}},g=function(r){return{h:u(r.h),s:e(r.s,0,100),l:e(r.l,0,100),a:e(r.a)}},d=function(r){return{h:n(r.h),s:n(r.s),l:n(r.l),a:n(r.a,3)}},f=function(r){return b((n=(t=r).s,{h:t.h,s:(n*=((e=t.l)<50?e:100-e)/100)>0?2*n/(e+n)*100:0,v:e+n,a:t.a}));var t,n,e},c=function(r){return{h:(t=h(r)).h,s:(u=(200-(n=t.s))*(e=t.v)/100)>0&&u<200?n*e/100/(u<=100?u:200-u)*100:0,l:u/2,a:t.a};var t,n,e,u},l=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,p=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,v=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,m=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,y={string:[[function(r){var t=i.exec(r);return t?(r=t[1]).length<=4?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:4===r.length?n(parseInt(r[3]+r[3],16)/255,2):1}:6===r.length||8===r.length?{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:8===r.length?n(parseInt(r.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(r){var t=v.exec(r)||m.exec(r);return t?t[2]!==t[4]||t[4]!==t[6]?null:a({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:void 0===t[7]?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(t){var n=l.exec(t)||p.exec(t);if(!n)return null;var e,u,a=g({h:(e=n[1],u=n[2],void 0===u&&(u="deg"),Number(e)*(r[u]||1)),s:Number(n[3]),l:Number(n[4]),a:void 0===n[5]?1:Number(n[5])/(n[6]?100:1)});return f(a)},"hsl"]],object:[[function(r){var n=r.r,e=r.g,u=r.b,o=r.a,i=void 0===o?1:o;return t(n)&&t(e)&&t(u)?a({r:Number(n),g:Number(e),b:Number(u),a:Number(i)}):null},"rgb"],[function(r){var n=r.h,e=r.s,u=r.l,a=r.a,o=void 0===a?1:a;if(!t(n)||!t(e)||!t(u))return null;var i=g({h:Number(n),s:Number(e),l:Number(u),a:Number(o)});return f(i)},"hsl"],[function(r){var n=r.h,a=r.s,o=r.v,i=r.a,s=void 0===i?1:i;if(!t(n)||!t(a)||!t(o))return null;var h=function(r){return{h:u(r.h),s:e(r.s,0,100),v:e(r.v,0,100),a:e(r.a)}}({h:Number(n),s:Number(a),v:Number(o),a:Number(s)});return b(h)},"hsv"]]},N=function(r,t){for(var n=0;n<t.length;n++){var e=t[n][0](r);if(e)return[e,t[n][1]]}return[null,void 0]},x=function(r){return"string"==typeof r?N(r.trim(),y.string):"object"==typeof r&&null!==r?N(r,y.object):[null,void 0]},I=function(r){return x(r)[1]},M=function(r,t){var n=c(r);return{h:n.h,s:e(n.s+100*t,0,100),l:n.l,a:n.a}},H=function(r){return(299*r.r+587*r.g+114*r.b)/1e3/255},$=function(r,t){var n=c(r);return{h:n.h,s:n.s,l:e(n.l+100*t,0,100),a:n.a}},j=function(){function r(r){this.parsed=x(r)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return r.prototype.isValid=function(){return null!==this.parsed},r.prototype.brightness=function(){return n(H(this.rgba),2)},r.prototype.isDark=function(){return H(this.rgba)<.5},r.prototype.isLight=function(){return H(this.rgba)>=.5},r.prototype.toHex=function(){return r=o(this.rgba),t=r.r,e=r.g,u=r.b,i=(a=r.a)<1?s(n(255*a)):"","#"+s(t)+s(e)+s(u)+i;var r,t,e,u,a,i},r.prototype.toRgb=function(){return o(this.rgba)},r.prototype.toRgbString=function(){return r=o(this.rgba),t=r.r,n=r.g,e=r.b,(u=r.a)<1?"rgba("+t+", "+n+", "+e+", "+u+")":"rgb("+t+", "+n+", "+e+")";var r,t,n,e,u},r.prototype.toHsl=function(){return d(c(this.rgba))},r.prototype.toHslString=function(){return r=d(c(this.rgba)),t=r.h,n=r.s,e=r.l,(u=r.a)<1?"hsla("+t+", "+n+"%, "+e+"%, "+u+")":"hsl("+t+", "+n+"%, "+e+"%)";var r,t,n,e,u},r.prototype.toHsv=function(){return r=h(this.rgba),{h:n(r.h),s:n(r.s),v:n(r.v),a:n(r.a,3)};var r},r.prototype.invert=function(){return w({r:255-(r=this.rgba).r,g:255-r.g,b:255-r.b,a:r.a});var r},r.prototype.saturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,r))},r.prototype.desaturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,-r))},r.prototype.grayscale=function(){return w(M(this.rgba,-1))},r.prototype.lighten=function(r){return void 0===r&&(r=.1),w($(this.rgba,r))},r.prototype.darken=function(r){return void 0===r&&(r=.1),w($(this.rgba,-r))},r.prototype.rotate=function(r){return void 0===r&&(r=15),this.hue(this.hue()+r)},r.prototype.alpha=function(r){return"number"==typeof r?w({r:(t=this.rgba).r,g:t.g,b:t.b,a:r}):n(this.rgba.a,3);var t},r.prototype.hue=function(r){var t=c(this.rgba);return"number"==typeof r?w({h:r,s:t.s,l:t.l,a:t.a}):n(t.h)},r.prototype.isEqual=function(r){return this.toHex()===w(r).toHex()},r}(),w=function(r){return r instanceof j?r:new j(r)},S=[],k=function(r){r.forEach(function(r){S.indexOf(r)<0&&(r(j,y),S.push(r))})},E=function(){return new j({r:255*Math.random(),g:255*Math.random(),b:255*Math.random()})};


/***/ }),

/***/ "@novablocks/easings":
/*!*****************************************!*\
  !*** external ["novablocks","easings"] ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["novablocks"]["easings"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map