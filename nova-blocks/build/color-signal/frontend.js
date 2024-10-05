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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/color-signal/build/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/colord/index.mjs":
/*!***************************************!*\
  !*** ./node_modules/colord/index.mjs ***!
  \***************************************/
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

/***/ "./node_modules/colord/plugins/a11y.mjs":
/*!**********************************************!*\
  !*** ./node_modules/colord/plugins/a11y.mjs ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var o=function(o){var t=o/255;return t<.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)},t=function(t){return.2126*o(t.r)+.7152*o(t.g)+.0722*o(t.b)};/* harmony default export */ __webpack_exports__["default"] = (function(o){o.prototype.luminance=function(){return o=t(this.rgba),void 0===(r=2)&&(r=0),void 0===n&&(n=Math.pow(10,r)),Math.round(n*o)/n+0;var o,r,n},o.prototype.contrast=function(r){void 0===r&&(r="#FFF");var n,a,i,e,v,u,d,c=r instanceof o?r:new o(r);return e=this.rgba,v=c.toRgb(),u=t(e),d=t(v),n=u>d?(u+.05)/(d+.05):(d+.05)/(u+.05),void 0===(a=2)&&(a=0),void 0===i&&(i=Math.pow(10,a)),Math.floor(i*n)/i+0},o.prototype.isReadable=function(o,t){return void 0===o&&(o="#FFF"),void 0===t&&(t={}),this.contrast(o)>=(e=void 0===(i=(r=t).size)?"normal":i,"AAA"===(a=void 0===(n=r.level)?"AA":n)&&"normal"===e?7:"AA"===a&&"large"===e?3:4.5);var r,n,a,i,e}});


/***/ }),

/***/ "./packages/color-signal/build/frontend.js":
/*!*************************************************!*\
  !*** ./packages/color-signal/build/frontend.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _utils2 = __webpack_require__(/*! ./utils */ "./packages/color-signal/build/utils/index.js");

var _updateBlockSignal = __webpack_require__(/*! ./frontend/update-block-signal */ "./packages/color-signal/build/frontend/update-block-signal.js");

var _updateScrollIndicator = __webpack_require__(/*! ./frontend/update-scroll-indicator */ "./packages/color-signal/build/frontend/update-scroll-indicator.js");

var updateColors = function updateColors(siteVariation) {
  (0, _updateBlockSignal.updateAllBlocksSignal)(siteVariation);
  (0, _updateScrollIndicator.updateScrollIndicator)();
}; // Get the Palette Basis Offset value to use it as the top most reference variation


var siteVariation = (0, _utils2.getSiteColorVariation)();
window.addEventListener('nb:updateColors', function () {
  updateColors(siteVariation);
});
(0, _utils.ready)(function () {
  var _parent, _parent$wp;

  if (_utils.IS_EDITOR) {
    return;
  }

  updateColors(siteVariation); // If we are inside the Customize Preview iframe, update the palette variation for all blocks
  // every time the Palette Basis Offset value is changed

  if ((_parent = parent) !== null && _parent !== void 0 && (_parent$wp = _parent.wp) !== null && _parent$wp !== void 0 && _parent$wp.customize) {
    parent.wp.customize('sm_site_color_variation', function (setting) {
      setting.bind(function (newValue, oldValue) {
        var newSiteVariation = parseInt(newValue, 10);
        updateColors(newSiteVariation);
      });
    });
  }
});


/***/ }),

/***/ "./packages/color-signal/build/frontend/update-block-signal.js":
/*!*********************************************************************!*\
  !*** ./packages/color-signal/build/frontend/update-block-signal.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBlockSignal = exports.updateAllBlocksSignal = void 0;

var _colord = __webpack_require__(/*! colord */ "./node_modules/colord/index.mjs");

var _a11y = _interopRequireDefault(__webpack_require__(/*! colord/plugins/a11y */ "./node_modules/colord/plugins/a11y.mjs"));

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _utils2 = __webpack_require__(/*! ../utils */ "./packages/color-signal/build/utils/index.js");

var COLOR_SIGNAL_SELECTOR = '[data-color-signal]';
/**
 * @param block current element
 * @param parentVariation reference color variation
 */

var updateBlockSignal = function updateBlockSignal(block, parentVariation) {
  var attributes = block.dataset;
  var palette = attributes.palette,
      useSourceColorAsReference = attributes.useSourceColorAsReference;
  var colorSignal = parseInt(attributes === null || attributes === void 0 ? void 0 : attributes.colorSignal, 10);
  var innerBlocks = Array.from(block.children);

  if (!(attributes !== null && attributes !== void 0 && attributes.colorSignal)) {
    innerBlocks.forEach(function (innerBlock) {
      updateBlockSignal(innerBlock, parentVariation);
    });
    return;
  }

  var absoluteVariation = (0, _utils2.getAbsoluteColorVariation)(attributes);
  var nextVariation = (0, _utils2.computeColorSignal)(parentVariation, colorSignal, palette, absoluteVariation);
  var finalVariation = useSourceColorAsReference ? 1 : (0, _utils2.removeSiteVariationOffset)(nextVariation);
  var sourceIndex = (0, _utils2.getSourceIndexFromPaletteId)(palette);
  var finalAbsoluteVariation = useSourceColorAsReference ? (0, _utils2.addSiteVariationOffset)(sourceIndex + 1) : (0, _utils2.addSiteVariationOffset)(finalVariation);
  var classes = Array.from(block.classList);
  var paletteClassname = classes.find(function (classname) {
    return classname.indexOf('sm-palette-') > -1;
  });
  var paletteVariationClassname = classes.find(function (classname) {
    return classname.indexOf('sm-variation-') > -1;
  });
  (0, _utils.removeClass)(block, "".concat(paletteClassname, " ").concat(paletteVariationClassname, " sm-palette--shifted"));
  var newClassnames = (0, _utils2.getColorSignalClassnames)({
    palette: palette,
    paletteVariation: finalVariation,
    useSourceColorAsReference: useSourceColorAsReference,
    colorSignal: colorSignal
  }, true);
  var isLight = isLightVariation(palette, finalAbsoluteVariation);
  (0, _utils.addClass)(block, newClassnames);
  (0, _utils.toggleClass)(block, 'sm-light', isLight);
  (0, _utils.toggleClass)(block, 'sm-dark', !isLight);
  innerBlocks.forEach(function (innerBlock) {
    updateBlockSignal(innerBlock, finalAbsoluteVariation);
  });
};

exports.updateBlockSignal = updateBlockSignal;

var isLightVariation = function isLightVariation(palette, variation) {
  var _window$styleManager;

  (0, _colord.extend)([_a11y.default]);

  if (!Array.isArray((_window$styleManager = window.styleManager) === null || _window$styleManager === void 0 ? void 0 : _window$styleManager.colorsConfig)) {
    return;
  }

  var currentPaletteConfig = window.styleManager.colorsConfig.find(function (thisPalette) {
    return "".concat(thisPalette.id) === "".concat(palette);
  });

  if (!currentPaletteConfig) {
    return true;
  }

  var variationIndex = parseInt(variation, 10) - 1;
  var fg1 = currentPaletteConfig.variations ? currentPaletteConfig.variations[variationIndex].fg1 : currentPaletteConfig.colors[variationIndex].value;
  return (0, _colord.colord)('#FFFFFF').contrast(fg1) > Math.sqrt(21);
};
/**
 *  * If the Palette Basis Offset value has been changed after the content has been created
 * the changes are that the colorSignal attribute and the output paletteVariation aren't synced anymore.
 * That's why on page load, we compute from top to bottom the colorSignal for each block and regenerate
 * the color signal utility classes
 * @param siteVariation the top most reference variation
 */


var updateAllBlocksSignal = function updateAllBlocksSignal(siteVariation) {
  // finding all top level blocks with color signal data
  var blocks = Array.from(document.querySelectorAll(COLOR_SIGNAL_SELECTOR)).filter(function (node) {
    var hasParentsWithSignal = node.parentNode && node.parentNode.closest(COLOR_SIGNAL_SELECTOR);
    return !hasParentsWithSignal;
  }); // recursively update each blocks and its descendants

  blocks.forEach(function (block) {
    updateBlockSignal(block, siteVariation);
  });
};

exports.updateAllBlocksSignal = updateAllBlocksSignal;


/***/ }),

/***/ "./packages/color-signal/build/frontend/update-scroll-indicator.js":
/*!*************************************************************************!*\
  !*** ./packages/color-signal/build/frontend/update-scroll-indicator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateScrollIndicator = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _utils2 = __webpack_require__(/*! ../utils */ "./packages/color-signal/build/utils/index.js");

var updateScrollIndicator = function updateScrollIndicator() {
  var blocks = document.querySelectorAll('[data-scroll-indicator-block]');
  var blocksArray = (0, _toConsumableArray2.default)(blocks).filter(function (block) {
    return !!block.dataset.scrollIndicatorBlock;
  });
  blocksArray.forEach(function (block) {
    var indicators = Array.from(block.querySelectorAll('.nb-scroll-indicator:not(.nb-scroll-indicator--middle)'));
    var nextElement = block.nextElementSibling;

    if (!nextElement || !nextElement.dataset.colorSignal) {
      indicators.forEach(applySiteColorSignal);
      return;
    }

    var nextElementStyles = window.getComputedStyle(nextElement);
    var marginTop = nextElementStyles.getPropertyValue('margin-top');
    indicators.forEach(function (indicator) {
      var _nextElement$dataset;

      if (parseInt(marginTop, 10) !== 0) {
        applySiteColorSignal(indicator);
        return;
      }

      if (!!indicator && !!(nextElement !== null && nextElement !== void 0 && (_nextElement$dataset = nextElement.dataset) !== null && _nextElement$dataset !== void 0 && _nextElement$dataset.colorSignal)) {
        var attributes = nextElement.dataset;
        var classNamesToAdd = (0, _utils.getColorSignalClassnames)(attributes, true).split(" ").filter(function (className) {
          return className.indexOf('sm-color-signal-') < 0;
        }).join(" ");
        var classNamesToRemove = (0, _toConsumableArray2.default)(indicator.classList).filter(function (className) {
          return className.indexOf('sm-palette-') > -1 || className.indexOf('sm-variation-') > -1 || className.indexOf('sm-color-signal-') > -1;
        }).join(" ");
        (0, _utils.removeClass)(indicator, classNamesToRemove);
        (0, _utils.addClass)(indicator, classNamesToAdd);
      }
    });
  });
};

exports.updateScrollIndicator = updateScrollIndicator;

var applySiteColorSignal = function applySiteColorSignal(indicator) {
  if (indicator) {
    (0, _utils.addClass)(indicator, "sm-variation-".concat((0, _utils2.getSiteColorVariation)()));
  }
};


/***/ }),

/***/ "./packages/color-signal/build/utils/index.js":
/*!****************************************************!*\
  !*** ./packages/color-signal/build/utils/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAbsoluteColorVariation = exports.computeColorSignal = exports.addSiteVariationOffset = void 0;
Object.defineProperty(exports, "getColorSignalClassnames", {
  enumerable: true,
  get: function get() {
    return _utils.getColorSignalClassnames;
  }
});
exports.removeSiteVariationOffset = exports.normalizeVariationValue = exports.mapPalettesToColorPalette = exports.getVariationFromSignal = exports.getSourceIndexFromPaletteId = exports.getSiteColorVariation = exports.getSignalRelativeToVariation = exports.getSignalOptionsFromVariation = exports.getPaletteConfig = exports.getMaxSignal = exports.getCurrentPaletteConfig = void 0;

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

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

exports.getCurrentPaletteConfig = getCurrentPaletteConfig;

var mapPalettesToColorPalette = function mapPalettesToColorPalette(palette) {
  var colors = palette.colors,
      sourceIndex = palette.sourceIndex;
  return {
    name: palette.label,
    color: colors[sourceIndex].value
  };
};

exports.mapPalettesToColorPalette = mapPalettesToColorPalette;

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

exports.getSiteColorVariation = getSiteColorVariation;

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


exports.getPaletteConfig = getPaletteConfig;

var getAbsoluteColorVariation = function getAbsoluteColorVariation(attributes) {
  var palette = attributes.palette,
      useSourceColorAsReference = attributes.useSourceColorAsReference;
  var paletteVariation = parseInt(attributes.paletteVariation, 10);
  var sourceIndex = getSourceIndexFromPaletteId(palette);
  var absoluteVariation = useSourceColorAsReference ? sourceIndex + 1 : paletteVariation;
  return addSiteVariationOffset(absoluteVariation);
};

exports.getAbsoluteColorVariation = getAbsoluteColorVariation;

var getVariationFromSignal = function getVariationFromSignal(signal, paletteId) {
  var signals = (0, _utils.getSignals)(paletteId);
  var variation = signals[Math.min(signal, signals.length - 1)];
  return removeSiteVariationOffset(variation);
};
/**
 * Calculate what's the colorSignal generated by a variation for a given reference variation
 * @param compared the paletteVariation to be used
 * @param reference the block's parent variation or any given reference variation for that matter
 * @returns {*}
 */


exports.getVariationFromSignal = getVariationFromSignal;

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


exports.getSignalRelativeToVariation = getSignalRelativeToVariation;

var getSignalOptionsFromVariation = function getSignalOptionsFromVariation(variation, paletteId) {
  var variationOptions = (0, _utils.getSignals)(paletteId);
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


exports.getSignalOptionsFromVariation = getSignalOptionsFromVariation;

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


exports.computeColorSignal = computeColorSignal;

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


exports.getSourceIndexFromPaletteId = getSourceIndexFromPaletteId;

var addSiteVariationOffset = function addSiteVariationOffset(variation) {
  var siteVariation = getSiteColorVariation();
  return normalizeVariationValue(variation + siteVariation - 1);
};
/**
 * Remove the value of the Palette Basis Offset control, that was previously added to simplify calculations
 * @param variation
 * @returns {*}
 */


exports.addSiteVariationOffset = addSiteVariationOffset;

var removeSiteVariationOffset = function removeSiteVariationOffset(variation) {
  var siteVariation = getSiteColorVariation();
  return normalizeVariationValue(variation - siteVariation + 1);
};

exports.removeSiteVariationOffset = removeSiteVariationOffset;

var normalizeVariationValue = function normalizeVariationValue(value) {
  return (value + 11) % 12 + 1;
};

exports.normalizeVariationValue = normalizeVariationValue;

var getMaxSignal = function getMaxSignal(paletteId) {
  var signals = (0, _utils.getSignals)(paletteId);
  return signals.length - 1;
};

exports.getMaxSignal = getMaxSignal;


/***/ }),

/***/ "@novablocks/utils":
/*!***************************************!*\
  !*** external ["novablocks","utils"] ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["novablocks"]["utils"]; }());

/***/ })

/******/ });
//# sourceMappingURL=frontend.js.map