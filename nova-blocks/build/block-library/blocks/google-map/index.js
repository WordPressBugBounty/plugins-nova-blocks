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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/google-map/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/svg-baker-runtime/browser-symbol.js":
/*!**********************************************************!*\
  !*** ./node_modules/svg-baker-runtime/browser-symbol.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

return BrowserSpriteSymbol;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js":
/*!************************************************************************!*\
  !*** ./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

//      
// An event handler can take an optional event argument
// and should not return a value
                                          
// An array of all currently registered event handlers for a type
                                            
// A map of event types and their corresponding event handlers.
                        
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberof mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).map(function (handler) { handler(evt); });
			(all['*'] || []).map(function (handler) { handler(type, evt); });
		}
	};
}

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var svg$1 = namespaces_1.svg;
var xlink$1 = namespaces_1.xlink;

var defaultConfig = {
  attrs: ( obj = {
    style: ['position: absolute', 'width: 0', 'height: 0'].join('; '),
    'aria-hidden': 'true'
  }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj )
};
var obj;

var Sprite = function Sprite(config) {
  this.config = deepmerge(defaultConfig, config || {});
  this.symbols = [];
};

/**
 * Add new symbol. If symbol with the same id exists it will be replaced.
 * @param {SpriteSymbol} symbol
 * @return {boolean} `true` - symbol was added, `false` - replaced
 */
Sprite.prototype.add = function add (symbol) {
  var ref = this;
    var symbols = ref.symbols;
  var existing = this.find(symbol.id);

  if (existing) {
    symbols[symbols.indexOf(existing)] = symbol;
    return false;
  }

  symbols.push(symbol);
  return true;
};

/**
 * Remove symbol & destroy it
 * @param {string} id
 * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
 */
Sprite.prototype.remove = function remove (id) {
  var ref = this;
    var symbols = ref.symbols;
  var symbol = this.find(id);

  if (symbol) {
    symbols.splice(symbols.indexOf(symbol), 1);
    symbol.destroy();
    return true;
  }

  return false;
};

/**
 * @param {string} id
 * @return {SpriteSymbol|null}
 */
Sprite.prototype.find = function find (id) {
  return this.symbols.filter(function (s) { return s.id === id; })[0] || null;
};

/**
 * @param {string} id
 * @return {boolean}
 */
Sprite.prototype.has = function has (id) {
  return this.find(id) !== null;
};

/**
 * @return {string}
 */
Sprite.prototype.stringify = function stringify () {
  var ref = this.config;
    var attrs = ref.attrs;
  var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');
  return wrapInSvgString(stringifiedSymbols, attrs);
};

/**
 * @return {string}
 */
Sprite.prototype.toString = function toString () {
  return this.stringify();
};

Sprite.prototype.destroy = function destroy () {
  this.symbols.forEach(function (s) { return s.destroy(); });
};

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

var defaultConfig$1 = {
  /**
   * Should following options be automatically configured:
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @type {boolean}
   */
  autoConfigure: true,

  /**
   * Default mounting selector
   * @type {string}
   */
  mountTo: 'body',

  /**
   * Fix disappearing SVG elements when <base href> exists.
   * Executes when sprite mounted.
   * @see http://stackoverflow.com/a/18265336/796152
   * @see https://github.com/everdimension/angular-svg-base-fix
   * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
   * @type {boolean}
   */
  syncUrlsWithBaseTag: false,

  /**
   * Should sprite listen custom location change event
   * @type {boolean}
   */
  listenLocationChangeEvent: true,

  /**
   * Custom window event name which should be emitted to update sprite urls
   * @type {string}
   */
  locationChangeEvent: 'locationChange',

  /**
   * Emit location change event in Angular automatically
   * @type {boolean}
   */
  locationChangeAngularEmitter: false,

  /**
   * Selector to find symbols usages when updating sprite urls
   * @type {string}
   */
  usagesToUpdate: 'use[*|href]',

  /**
   * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
   * Executes when sprite is rendered, but not mounted.
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
   * @type {boolean}
   */
  moveGradientsOutsideSymbol: false
};

/**
 * @param {*} arrayLike
 * @return {Array}
 */
var arrayFrom = function (arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
};

var browser = {
  isChrome: function () { return /chrome/i.test(navigator.userAgent); },
  isFirefox: function () { return /firefox/i.test(navigator.userAgent); },

  // https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
  isIE: function () { return /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent); },
  isEdge: function () { return /edge/i.test(navigator.userAgent); }
};

/**
 * @param {string} name
 * @param {*} data
 */
var dispatchEvent = function (name, data) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(name, false, false, data);
  window.dispatchEvent(event);
};

/**
 * IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
 * This trick will trigger IE to read and use any existing SVG <style> tags.
 * @see https://github.com/iconic/SVGInjector/issues/23
 * @see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
 *
 * @param {Element} node DOM Element to search <style> tags in
 * @return {Array<HTMLStyleElement>}
 */
var evalStylesIEWorkaround = function (node) {
  var updatedNodes = [];

  arrayFrom(node.querySelectorAll('style'))
    .forEach(function (style) {
      style.textContent += '';
      updatedNodes.push(style);
    });

  return updatedNodes;
};

/**
 * @param {string} [url] If not provided - current URL will be used
 * @return {string}
 */
var getUrlWithoutFragment = function (url) {
  return (url || window.location.href).split('#')[0];
};

/* global angular */
/**
 * @param {string} eventName
 */
var locationChangeAngularEmitter = function (eventName) {
  angular.module('ng').run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl) {
      dispatchEvent(eventName, { oldUrl: oldUrl, newUrl: newUrl });
    });
  }]);
};

var defaultSelector = 'linearGradient, radialGradient, pattern, mask, clipPath';

/**
 * @param {Element} svg
 * @param {string} [selector]
 * @return {Element}
 */
var moveGradientsOutsideSymbol = function (svg, selector) {
  if ( selector === void 0 ) selector = defaultSelector;

  arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
    arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
      symbol.parentNode.insertBefore(node, symbol);
    });
  });
  return svg;
};

/**
 * @param {NodeList} nodes
 * @param {Function} [matcher]
 * @return {Attr[]}
 */
function selectAttributes(nodes, matcher) {
  var attrs = arrayFrom(nodes).reduce(function (acc, node) {
    if (!node.attributes) {
      return acc;
    }

    var arrayfied = arrayFrom(node.attributes);
    var matched = matcher ? arrayfied.filter(matcher) : arrayfied;
    return acc.concat(matched);
  }, []);

  return attrs;
}

/**
 * @param {NodeList|Node} nodes
 * @param {boolean} [clone=true]
 * @return {string}
 */

var xLinkNS = namespaces_1.xlink.uri;
var xLinkAttrName = 'xlink:href';

// eslint-disable-next-line no-useless-escape
var specialUrlCharsPattern = /[{}|\\\^\[\]`"<>]/g;

function encoder(url) {
  return url.replace(specialUrlCharsPattern, function (match) {
    return ("%" + (match[0].charCodeAt(0).toString(16).toUpperCase()));
  });
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

/**
 * @param {NodeList} nodes
 * @param {string} startsWith
 * @param {string} replaceWith
 * @return {NodeList}
 */
function updateReferences(nodes, startsWith, replaceWith) {
  arrayFrom(nodes).forEach(function (node) {
    var href = node.getAttribute(xLinkAttrName);
    if (href && href.indexOf(startsWith) === 0) {
      var newUrl = href.replace(startsWith, replaceWith);
      node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);
    }
  });

  return nodes;
}

/**
 * List of SVG attributes to update url() target in them
 */
var attList = [
  'clipPath',
  'colorProfile',
  'src',
  'cursor',
  'fill',
  'filter',
  'marker',
  'markerStart',
  'markerMid',
  'markerEnd',
  'mask',
  'stroke',
  'style'
];

var attSelector = attList.map(function (attr) { return ("[" + attr + "]"); }).join(',');

/**
 * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
 * @param {Element} svg
 * @param {NodeList} references
 * @param {string|RegExp} startsWith
 * @param {string} replaceWith
 * @return {void}
 *
 * @example
 * const sprite = document.querySelector('svg.sprite');
 * const usages = document.querySelectorAll('use');
 * updateUrls(sprite, usages, '#', 'prefix#');
 */
var updateUrls = function (svg, references, startsWith, replaceWith) {
  var startsWithEncoded = encoder(startsWith);
  var replaceWithEncoded = encoder(replaceWith);

  var nodes = svg.querySelectorAll(attSelector);
  var attrs = selectAttributes(nodes, function (ref) {
    var localName = ref.localName;
    var value = ref.value;

    return attList.indexOf(localName) !== -1 && value.indexOf(("url(" + startsWithEncoded)) !== -1;
  });

  attrs.forEach(function (attr) { return attr.value = attr.value.replace(new RegExp(escapeRegExp(startsWithEncoded), 'g'), replaceWithEncoded); });
  updateReferences(references, startsWithEncoded, replaceWithEncoded);
};

/**
 * Internal emitter events
 * @enum
 * @private
 */
var Events = {
  MOUNT: 'mount',
  SYMBOL_MOUNT: 'symbol_mount'
};

var BrowserSprite = (function (Sprite$$1) {
  function BrowserSprite(cfg) {
    var this$1 = this;
    if ( cfg === void 0 ) cfg = {};

    Sprite$$1.call(this, deepmerge(defaultConfig$1, cfg));

    var emitter = mitt();
    this._emitter = emitter;
    this.node = null;

    var ref = this;
    var config = ref.config;

    if (config.autoConfigure) {
      this._autoConfigure(cfg);
    }

    if (config.syncUrlsWithBaseTag) {
      var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
      emitter.on(Events.MOUNT, function () { return this$1.updateUrls('#', baseUrl); });
    }

    var handleLocationChange = this._handleLocationChange.bind(this);
    this._handleLocationChange = handleLocationChange;

    // Provide way to update sprite urls externally via dispatching custom window event
    if (config.listenLocationChangeEvent) {
      window.addEventListener(config.locationChangeEvent, handleLocationChange);
    }

    // Emit location change event in Angular automatically
    if (config.locationChangeAngularEmitter) {
      locationChangeAngularEmitter(config.locationChangeEvent);
    }

    // After sprite mounted
    emitter.on(Events.MOUNT, function (spriteNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(spriteNode);
      }
    });

    // After symbol mounted into sprite
    emitter.on(Events.SYMBOL_MOUNT, function (symbolNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(symbolNode.parentNode);
      }

      if (browser.isIE() || browser.isEdge()) {
        evalStylesIEWorkaround(symbolNode);
      }
    });
  }

  if ( Sprite$$1 ) BrowserSprite.__proto__ = Sprite$$1;
  BrowserSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
  BrowserSprite.prototype.constructor = BrowserSprite;

  var prototypeAccessors = { isMounted: {} };

  /**
   * @return {boolean}
   */
  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * Automatically configure following options
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @param {Object} cfg
   * @private
   */
  BrowserSprite.prototype._autoConfigure = function _autoConfigure (cfg) {
    var ref = this;
    var config = ref.config;

    if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
      config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';
    }

    if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
        config.locationChangeAngularEmitter = typeof window.angular !== 'undefined';
    }

    if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
      config.moveGradientsOutsideSymbol = browser.isFirefox();
    }
  };

  /**
   * @param {Event} event
   * @param {Object} event.detail
   * @param {string} event.detail.oldUrl
   * @param {string} event.detail.newUrl
   * @private
   */
  BrowserSprite.prototype._handleLocationChange = function _handleLocationChange (event) {
    var ref = event.detail;
    var oldUrl = ref.oldUrl;
    var newUrl = ref.newUrl;
    this.updateUrls(oldUrl, newUrl);
  };

  /**
   * Add new symbol. If symbol with the same id exists it will be replaced.
   * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
   * @fires Events#SYMBOL_MOUNT
   * @param {BrowserSpriteSymbol} symbol
   * @return {boolean} `true` - symbol was added, `false` - replaced
   */
  BrowserSprite.prototype.add = function add (symbol) {
    var sprite = this;
    var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);

    if (this.isMounted && isNewSymbol) {
      symbol.mount(sprite.node);
      this._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    }

    return isNewSymbol;
  };

  /**
   * Attach to existing DOM node
   * @param {string|Element} target
   * @return {Element|null} attached DOM Element. null if node to attach not found.
   */
  BrowserSprite.prototype.attach = function attach (target) {
    var this$1 = this;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    /** @type Element */
    var node = typeof target === 'string' ? document.querySelector(target) : target;
    sprite.node = node;

    // Already added symbols needs to be mounted
    this.symbols.forEach(function (symbol) {
      symbol.mount(sprite.node);
      this$1._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    });

    // Create symbols from existing DOM nodes, add and mount them
    arrayFrom(node.querySelectorAll('symbol'))
      .forEach(function (symbolNode) {
        var symbol = BrowserSpriteSymbol.createFromExistingNode(symbolNode);
        symbol.node = symbolNode; // hack to prevent symbol mounting to sprite when adding
        sprite.add(symbol);
      });

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  BrowserSprite.prototype.destroy = function destroy () {
    var ref = this;
    var config = ref.config;
    var symbols = ref.symbols;
    var _emitter = ref._emitter;

    symbols.forEach(function (s) { return s.destroy(); });

    _emitter.off('*');
    window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);

    if (this.isMounted) {
      this.unmount();
    }
  };

  /**
   * @fires Events#MOUNT
   * @param {string|Element} [target]
   * @param {boolean} [prepend=false]
   * @return {Element|null} rendered sprite node. null if mount node not found.
   */
  BrowserSprite.prototype.mount = function mount (target, prepend) {
    if ( target === void 0 ) target = this.config.mountTo;
    if ( prepend === void 0 ) prepend = false;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    var mountNode = typeof target === 'string' ? document.querySelector(target) : target;
    var node = sprite.render();
    this.node = node;

    if (prepend && mountNode.childNodes[0]) {
      mountNode.insertBefore(node, mountNode.childNodes[0]);
    } else {
      mountNode.appendChild(node);
    }

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSprite.prototype.render = function render () {
    return parse(this.stringify());
  };

  /**
   * Detach sprite from the DOM
   */
  BrowserSprite.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  /**
   * Update URLs in sprite and usage elements
   * @param {string} oldUrl
   * @param {string} newUrl
   * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted
   */
  BrowserSprite.prototype.updateUrls = function updateUrls$1 (oldUrl, newUrl) {
    if (!this.isMounted) {
      return false;
    }

    var usages = document.querySelectorAll(this.config.usagesToUpdate);

    updateUrls(
      this.node,
      usages,
      ((getUrlWithoutFragment(oldUrl)) + "#"),
      ((getUrlWithoutFragment(newUrl)) + "#")
    );

    return true;
  };

  Object.defineProperties( BrowserSprite.prototype, prototypeAccessors );

  return BrowserSprite;
}(Sprite));

var ready$1 = createCommonjsModule(function (module) {
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  { module.exports = definition(); }

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);


  if (!loaded)
  { doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener);
    loaded = 1;
    while (listener = fns.shift()) { listener(); }
  }); }

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  }

});
});

var spriteNodeId = '__SVG_SPRITE_NODE__';
var spriteGlobalVarName = '__SVG_SPRITE__';
var isSpriteExists = !!window[spriteGlobalVarName];

// eslint-disable-next-line import/no-mutable-exports
var sprite;

if (isSpriteExists) {
  sprite = window[spriteGlobalVarName];
} else {
  sprite = new BrowserSprite({
    attrs: {
      id: spriteNodeId,
      'aria-hidden': 'true'
    }
  });
  window[spriteGlobalVarName] = sprite;
}

var loadSprite = function () {
  /**
   * Check for page already contains sprite node
   * If found - attach to and reuse it's content
   * If not - render and mount the new sprite
   */
  var existing = document.getElementById(spriteNodeId);

  if (existing) {
    sprite.attach(existing);
  } else {
    sprite.mount(document.body, true);
  }
};

if (document.body) {
  loadSprite();
} else {
  ready$1(loadSprite);
}

var sprite$1 = sprite;

return sprite$1;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/attributes.json":
/*!************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/attributes.json ***!
  \************************************************************************/
/*! exports provided: align, markers, showMarkerLabels, showControls, showIcons, showLabels, styleData, styleSlug, zoom, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"align\":{\"type\":\"string\",\"default\":\"center\"},\"markers\":{\"type\":\"array\",\"default\":[],\"items\":{\"type\":\"object\"}},\"showMarkerLabels\":{\"type\":\"boolean\",\"default\":false},\"showControls\":{\"type\":\"boolean\",\"default\":false},\"showIcons\":{\"type\":\"boolean\",\"default\":true},\"showLabels\":{\"type\":\"boolean\",\"default\":true},\"styleData\":{\"type\":\"array\",\"default\":[],\"items\":{\"type\":\"object\"}},\"styleSlug\":{\"type\":\"string\",\"default\":\"original\"},\"zoom\":{\"type\":\"number\",\"default\":17}}");

/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/components/api-key-panel-body/index.js":
/*!***********************************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/components/api-key-panel-body/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./packages/block-library/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./packages/block-library/node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./packages/block-library/node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./packages/block-library/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./packages/block-library/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _components = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ApiKeyPanelBody = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ApiKeyPanelBody, _Component);

  var _super = _createSuper(ApiKeyPanelBody);

  function ApiKeyPanelBody() {
    (0, _classCallCheck2.default)(this, ApiKeyPanelBody);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ApiKeyPanelBody, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          apiKey = _this$props.apiKey,
          apiKeyInstructions = _this$props.apiKeyInstructions,
          savedApiKey = _this$props.savedApiKey,
          onChangeApiKey = _this$props.onChangeApiKey,
          onSaveApiKey = _this$props.onSaveApiKey;

      if (savedApiKey === '') {
        return null;
      }

      return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_components.TextControl, {
        placeholder: (0, _i18n.__)('Paste API key here', 'nova-blocks'),
        value: apiKey,
        label: (0, _i18n.__)('Google Maps API Key', 'nova-blocks'),
        onChange: onChangeApiKey,
        help: apiKeyInstructions
      }), (0, _element.createElement)(_components.Button, {
        isSecondary: true,
        onClick: function onClick() {
          onSaveApiKey(apiKey);
        }
      }, (0, _i18n.__)('Save', 'nova-blocks')));
    }
  }]);
  return ApiKeyPanelBody;
}(_element.Component);

var _default = ApiKeyPanelBody;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/components/block-controls/index.js":
/*!*******************************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/components/block-controls/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _blockEditor = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

var MapBlockControls = function MapBlockControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  return (0, _element.createElement)(_blockEditor.BlockControls, null, (0, _element.createElement)(_blockEditor.BlockAlignmentToolbar, {
    value: attributes.align,
    onChange: function onChange(align) {
      return setAttributes({
        align: align
      });
    },
    controls: ['wide', 'full']
  }));
};

var _default = MapBlockControls;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/components/index.js":
/*!****************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/components/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ApiKeyPanelBody", {
  enumerable: true,
  get: function get() {
    return _apiKeyPanelBody.default;
  }
});
Object.defineProperty(exports, "BlockControls", {
  enumerable: true,
  get: function get() {
    return _blockControls.default;
  }
});
Object.defineProperty(exports, "InspectorControls", {
  enumerable: true,
  get: function get() {
    return _inspectorControls.default;
  }
});
Object.defineProperty(exports, "Map", {
  enumerable: true,
  get: function get() {
    return _map.default;
  }
});
Object.defineProperty(exports, "MapPlaceholder", {
  enumerable: true,
  get: function get() {
    return _mapPlaceholder.default;
  }
});
Object.defineProperty(exports, "MapStyleSelect", {
  enumerable: true,
  get: function get() {
    return _mapStyleSelect.default;
  }
});
Object.defineProperty(exports, "MarkersList", {
  enumerable: true,
  get: function get() {
    return _markersList.default;
  }
});
Object.defineProperty(exports, "withControlsVisibility", {
  enumerable: true,
  get: function get() {
    return _withControlsVisibility.default;
  }
});

var _apiKeyPanelBody = _interopRequireDefault(__webpack_require__(/*! ./api-key-panel-body */ "./packages/block-library/build/blocks/google-map/components/api-key-panel-body/index.js"));

var _blockControls = _interopRequireDefault(__webpack_require__(/*! ./block-controls */ "./packages/block-library/build/blocks/google-map/components/block-controls/index.js"));

var _inspectorControls = _interopRequireDefault(__webpack_require__(/*! ./inspector-controls */ "./packages/block-library/build/blocks/google-map/components/inspector-controls/index.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! ./map */ "./packages/block-library/build/blocks/google-map/components/map/index.js"));

var _mapPlaceholder = _interopRequireDefault(__webpack_require__(/*! ./map-placeholder */ "./packages/block-library/build/blocks/google-map/components/map-placeholder/index.js"));

var _mapStyleSelect = _interopRequireDefault(__webpack_require__(/*! ./map-style-select */ "./packages/block-library/build/blocks/google-map/components/map-style-select/index.js"));

var _markersList = _interopRequireDefault(__webpack_require__(/*! ./markers-list */ "./packages/block-library/build/blocks/google-map/components/markers-list/index.js"));

var _withControlsVisibility = _interopRequireDefault(__webpack_require__(/*! ./with-controls-visibility */ "./packages/block-library/build/blocks/google-map/components/with-controls-visibility/index.js"));


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/components/inspector-controls/index.js":
/*!***********************************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/components/inspector-controls/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./packages/block-library/node_modules/@babel/runtime/helpers/extends.js"));

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _components = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

var _blockEditor = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");

var _utils = __webpack_require__(/*! ../../utils */ "./packages/block-library/build/blocks/google-map/utils/index.js");

var _index = __webpack_require__(/*! ../index */ "./packages/block-library/build/blocks/google-map/components/index.js");

var _this = void 0;

var InspectorControls = function InspectorControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      savedApiKey = props.savedApiKey;
  var styleSlug = attributes.styleSlug,
      zoom = attributes.zoom,
      showLabels = attributes.showLabels,
      showMarkerLabels = attributes.showMarkerLabels,
      showControls = attributes.showControls,
      showIcons = attributes.showIcons;

  if (!savedApiKey) {
    return null;
  }

  return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_blockEditor.ControlsSection, {
    id: 'map-design',
    label: (0, _i18n.__)('Map Design', 'nova-blocks')
  }, (0, _element.createElement)(_blockEditor.ControlsTab, {
    label: (0, _i18n.__)('Customize', 'nova-blocks')
  }, (0, _element.createElement)(_index.MapStyleSelect, (0, _extends2.default)({}, props, {
    key: 'google-map-style-controls',
    apiKey: savedApiKey,
    selected: styleSlug,
    options: _utils.styles,
    onChange: function onChange(newStyleSlug) {
      var mapStyles = _utils.styles.find(function (style) {
        return style.slug === newStyleSlug;
      }).styles;

      var newPinColor = newStyleSlug === 'customized' ? _utils.getMapAccentColor.call(_this) : '#222222';
      setAttributes({
        styleSlug: newStyleSlug,
        styleData: mapStyles,
        pinColor: newPinColor
      });
    }
  }))), (0, _element.createElement)(_blockEditor.ControlsTab, {
    label: (0, _i18n.__)('Settings', 'nova-blocks')
  }, (0, _element.createElement)(_components.ToggleControl, {
    key: 'google-map-show-venues-control',
    label: (0, _i18n.__)('Show Nearby Venues', 'nova-blocks'),
    checked: showIcons,
    onChange: function onChange() {
      return setAttributes({
        showIcons: !showIcons
      });
    }
  }), (0, _element.createElement)(_components.ToggleControl, {
    key: 'google-map-show-labels-control',
    label: (0, _i18n.__)('Show Labels', 'nova-blocks'),
    checked: showLabels,
    onChange: function onChange() {
      return setAttributes({
        showLabels: !showLabels
      });
    }
  }), (0, _element.createElement)(_components.ToggleControl, {
    key: 'google-map-show-controls',
    label: (0, _i18n.__)('Show Controls', 'nova-blocks'),
    checked: showControls,
    onChange: function onChange() {
      return setAttributes({
        showControls: !showControls
      });
    }
  }), (0, _element.createElement)(_components.ToggleControl, {
    key: 'google-map-show-marker-labels-control',
    label: (0, _i18n.__)('Show Marker Labels', 'nova-blocks'),
    checked: showMarkerLabels,
    onChange: function onChange() {
      return setAttributes({
        showMarkerLabels: !showMarkerLabels
      });
    }
  }), (0, _element.createElement)(_components.RangeControl, {
    key: 'google-map-zoom-controls',
    value: zoom,
    onChange: function onChange(newZoom) {
      return setAttributes({
        zoom: newZoom
      });
    },
    min: 1,
    max: 20,
    label: (0, _i18n.__)('Zoom Level', 'nova-blocks')
  }))), (0, _element.createElement)(_blockEditor.ControlsSection, {
    id: 'setup',
    label: (0, _i18n.__)('Setup', 'nova-blocks')
  }, (0, _element.createElement)(_blockEditor.ControlsTab, {
    label: (0, _i18n.__)('Settings', 'nova-blocks')
  }, (0, _element.createElement)(_blockEditor.ControlsGroup, {
    title: (0, _i18n.__)('Map Markers', 'nova-blocks')
  }, (0, _element.createElement)(_index.MarkersList, props)), (0, _element.createElement)(_blockEditor.ControlsGroup, null, (0, _element.createElement)(_index.ApiKeyPanelBody, (0, _extends2.default)({
    key: 'google-map-api-key-controls'
  }, props))))));
};

var _default = InspectorControls;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/components/map-placeholder/index.js":
/*!********************************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/components/map-placeholder/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./packages/block-library/node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./packages/block-library/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./packages/block-library/node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./packages/block-library/node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./packages/block-library/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./packages/block-library/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _components = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

var _keycodes = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");

var icons = _interopRequireWildcard(__webpack_require__(/*! @novablocks/icons */ "@novablocks/icons"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MapPlaceholder = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(MapPlaceholder, _Component);

  var _super = _createSuper(MapPlaceholder);

  function MapPlaceholder() {
    var _this;

    (0, _classCallCheck2.default)(this, MapPlaceholder);
    _this = _super.apply(this, arguments);
    _this.state = {
      apiKey: _this.props.apiKey
    };
    return _this;
  }

  (0, _createClass2.default)(MapPlaceholder, [{
    key: "handleKeyDown",
    value: function handleKeyDown(keyCode) {
      if (keyCode === _keycodes.ENTER) {
        this.props.saveApiKey(this.state.apiKey);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var apiKeyInstructions = this.props.apiKeyInstructions;
      var icon = (0, _element.createElement)("div", {
        className: "editor-block-icon block-editor-block-icon"
      }, icons.map);
      return (0, _element.createElement)(_components.Placeholder, {
        icon: icon,
        label: (0, _i18n.__)('Location Map of The World', 'nova-blocks')
      }, apiKeyInstructions && (0, _element.createElement)("div", {
        className: "components-placeholder__instructions"
      }, apiKeyInstructions), (0, _element.createElement)(_components.TextControl, {
        className: "components-placeholder__input",
        placeholder: (0, _i18n.__)('Paste API key here', 'nova-blocks'),
        value: this.state.apiKey,
        onChange: function onChange(apiKey) {
          _this2.setState({
            apiKey: apiKey
          });
        },
        onKeyDown: function onKeyDown(_ref) {
          var keyCode = _ref.keyCode;

          _this2.handleKeyDown(keyCode);
        }
      }), (0, _element.createElement)(_components.Button, {
        islarge: "true",
        disabled: !this.state.apiKey,
        type: "button",
        onClick: function onClick() {
          _this2.props.saveApiKey(_this2.state.apiKey);
        }
      }, (0, _i18n.__)('Save', 'nova-blocks')));
    }
  }]);
  return MapPlaceholder;
}(_element.Component);

var _default = MapPlaceholder;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/components/map-style-select/index.js":
/*!*********************************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/components/map-style-select/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./packages/block-library/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./packages/block-library/node_modules/classnames/index.js"));

var _blockEditor = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");

var _utils = __webpack_require__(/*! ../../utils */ "./packages/block-library/build/blocks/google-map/utils/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var MapStyleSelect = function MapStyleSelect(props) {
  var attributes = props.attributes,
      apiKey = props.apiKey,
      options = props.options,
      selected = props.selected;
  var markers = attributes.markers,
      zoom = attributes.zoom;
  var onChange = typeof props.onChange === "function" ? props.onChange : function () {};
  var center = (0, _element.useMemo)(function () {
    if (Array.isArray(markers) && markers.length) {
      return (0, _utils.getCenterFromMarkers)(markers);
    }

    return new google.maps.LatLng(_utils.DEFAULT_MAP_CENTER);
  }, [markers]);
  var getStaticStyle = (0, _element.useCallback)(function (option) {
    var result = [];
    var styles = (0, _utils.compileStyles)(option.styles);
    styles.forEach(function (v, i, a) {
      var style = '';

      if (v.stylers) {
        if (v.stylers.length > 0) {
          style += (v.hasOwnProperty('featureType') ? 'feature:' + v.featureType : 'feature:all') + '|';
          style += (v.hasOwnProperty('elementType') ? 'element:' + v.elementType : 'element:all') + '|';
          v.stylers.forEach(function (val, i, a) {
            var prop = Object.keys(val)[0];
            var propertyval = val[prop].toString().replace('#', '0x');
            style += prop + ':' + propertyval + '|';
          });
        }
      }

      result.push('style=' + encodeURIComponent(style));
    });
    return result.join('&');
  });
  var getImageSrc = (0, _element.useCallback)(function (option) {
    var latitude = center.lat();
    var longitude = center.lng();
    var style = getStaticStyle(option);
    var size = '200x200';
    var mapType = 'roadmap';
    var url = 'https://maps.googleapis.com/maps/api/staticmap';
    return "".concat(url, "?center=").concat(latitude, ",").concat(longitude, "&zoom=").concat(zoom, "&size=").concat(size, "&maptype=").concat(mapType, "&").concat(style, "&key=").concat(apiKey);
  }, [center]);
  var controlOptions = (0, _element.useMemo)(function () {
    return options.map(function (option) {
      return _objectSpread(_objectSpread({}, option), {}, {
        src: getImageSrc(option)
      });
    });
  }, [options]);
  return (0, _element.createElement)(_blockEditor.ImageSelectControl, {
    selected: selected,
    onChange: onChange,
    options: controlOptions
  });
};

var _default = MapStyleSelect;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/components/map/index.js":
/*!********************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/components/map/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./packages/block-library/node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./packages/block-library/node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _components = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

var _blockEditor = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");

var _index = __webpack_require__(/*! ../index */ "./packages/block-library/build/blocks/google-map/components/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./packages/block-library/build/blocks/google-map/utils/index.js");

var Map = function Map(props) {
  var _props$doppler;

  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      clientId = props.clientId;
  var markers = attributes.markers,
      styleData = attributes.styleData,
      styleSlug = attributes.styleSlug,
      showControls = attributes.showControls,
      showMarkerLabels = attributes.showMarkerLabels,
      showLabels = attributes.showLabels,
      showIcons = attributes.showIcons,
      zoom = attributes.zoom;
  var settings = (0, _blockEditor.useSettings)();
  var accentColor = (0, _element.useMemo)(function () {
    var _settings$map$accentC, _settings$map;

    return (_settings$map$accentC = settings === null || settings === void 0 ? void 0 : (_settings$map = settings.map) === null || _settings$map === void 0 ? void 0 : _settings$map.accentColor) !== null && _settings$map$accentC !== void 0 ? _settings$map$accentC : _utils.DEFAULT_PIN_COLOR;
  }, [settings]);
  var pinColor = (0, _element.useMemo)(function () {
    return styleSlug === 'customized' ? accentColor : _utils.DEFAULT_PIN_COLOR;
  }, [styleSlug]);
  var pinMarkup = (0, _element.useMemo)(function () {
    return _utils.pin.replace('%ACCENT_COLOR%', pinColor);
  }, [pinColor]);

  var _useState = (0, _element.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      mapLoaded = _useState2[0],
      setMapLoaded = _useState2[1];

  var mapMarkers = (0, _element.useRef)([]);
  var searchInputRef = (0, _element.useRef)(null);
  var mapContainerRef = (0, _element.useRef)(null);
  var map = (0, _element.useRef)(null);
  var searchBox = (0, _element.useRef)(null); // initialize map

  (0, _element.useEffect)(function () {
    var newMap = new google.maps.Map(mapContainerRef.current, {
      mapTypeId: 'roadmap',
      center: _utils.DEFAULT_MAP_CENTER,
      zoom: zoom,
      styles: mapStyles,
      clickableIcons: false,
      disableDefaultUI: !showControls,
      disableDoubleClickZoom: true,
      draggable: false,
      gestureHandling: 'none',
      keyboardShortcuts: false,
      scrollwheel: false
    });
    google.maps.event.trigger(map, 'resize');
    map.current = newMap;
    setMapLoaded(true);
  }, []); // initialize searchBox

  (0, _element.useEffect)(function () {
    // Create the search box and link it to the UI element.
    searchBox.current = new google.maps.places.SearchBox(searchInputRef.current); // Bias the SearchBox results towards current map's viewport.

    map.current.addListener('bounds_changed', function () {
      searchBox.current.setBounds(map.current.getBounds());
    });
  }, [onPlacesChanged]);
  var onPlacesChanged = (0, _element.useCallback)(function () {
    var places = searchBox.current.getPlaces();
    var keepProps = ['name', 'geometry'];
    var newMarkers = places.map(function (place) {
      return Object.keys(place).filter(function (key) {
        return keepProps.includes(key);
      }).reduce(function (obj, key) {
        obj[key] = place[key];
        return obj;
      }, {});
    });
    setAttributes({
      markers: [].concat((0, _toConsumableArray2.default)(markers), (0, _toConsumableArray2.default)(newMarkers))
    });
  }, [markers]);
  var fitBounds = (0, _element.useCallback)(function () {
    (0, _utils.fitMapBoundsToMarkers)(map.current, mapMarkers.current, {
      top: 75
    });
    setAttributes({
      zoom: map.current.getZoom()
    });
  }, [markers]);
  (0, _element.useEffect)(function () {
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    var listener = searchBox.current.addListener('places_changed', onPlacesChanged);
    return function () {
      google.maps.event.removeListener(listener);
    };
  }, [onPlacesChanged]);
  (0, _element.useEffect)(function () {
    mapMarkers.current.forEach(function (marker) {
      marker.remove();
      marker.setMap(null);
    });
    mapMarkers.current = [];
    markers.forEach(function (marker) {
      if (!marker.geometry) {
        return;
      }

      var latlng = (0, _utils.getMarkerLatLng)(marker);
      var html = (0, _utils.getMarkerMarkup)(marker, {
        showMarkerLabels: showMarkerLabels,
        styleSlug: styleSlug
      }, accentColor);
      var htmlMarker = (0, _utils.createHtmlMapMarker)(latlng, html);
      htmlMarker.setMap(map.current);
      mapMarkers.current.push(htmlMarker);
    });

    if (map.current) {
      fitBounds();
    }
  }, [showMarkerLabels, markers, accentColor, mapLoaded]);
  var mapStyles = (0, _element.useMemo)(function () {
    return (0, _utils.getCompiledStyles)(attributes, pinColor);
  }, [attributes, pinColor]);
  (0, _element.useEffect)(function () {
    map.current.setOptions({
      zoom: zoom,
      disableDefaultUI: !showControls,
      styles: mapStyles
    });
  }, [showControls, zoom, mapStyles]);
  var placeholderStyles = (0, _element.useMemo)(function () {
    return isSelected ? {} : {
      display: 'none'
    };
  }, [isSelected]);
  return (0, _element.createElement)("div", {
    className: "novablocks-map"
  }, (0, _element.createElement)("div", {
    className: "novablocks-map__search-box"
  }, (0, _element.createElement)(_components.Placeholder, {
    style: placeholderStyles
  }, (0, _element.createElement)("input", {
    type: "text",
    ref: searchInputRef,
    placeholder: (0, _i18n.__)('Enter an address to drop a pin on this map', 'nova-blocks')
  }))), (0, _element.createElement)("div", {
    className: "novablocks-map__map-container"
  }, (0, _element.createElement)("div", {
    className: "novablocks-map__map",
    ref: mapContainerRef,
    style: props === null || props === void 0 ? void 0 : (_props$doppler = props.doppler) === null || _props$doppler === void 0 ? void 0 : _props$doppler.style
  })));
};

var _default = Map;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/components/markers-list/index.js":
/*!*****************************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/components/markers-list/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _components = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

var MarkersList = function MarkersList(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      clientId = props.clientId;
  var markers = attributes.markers;
  var renameMaker = (0, _element.useCallback)(function (index, newName) {
    var newMarkers = markers.slice();
    newMarkers[index].name = newName;
    setAttributes({
      markers: newMarkers
    });
  }, [markers]);
  var deleteMarker = (0, _element.useCallback)(function (index) {
    var newMarkers = markers.slice();
    newMarkers.splice(index, 1);
    setAttributes({
      markers: newMarkers
    });
  }, [markers]);
  return (0, _element.createElement)("div", {
    className: 'novablocks-markers-list'
  }, markers.map(function (marker, index) {
    return (0, _element.createElement)("div", {
      className: 'novablocks-markers-list-item',
      key: "".concat(clientId, "-marker-").concat(index)
    }, (0, _element.createElement)(_components.TextControl, {
      value: marker.name,
      onChange: function onChange(newName) {
        renameMaker(index, newName);
      }
    }), (0, _element.createElement)(_components.Button, {
      isDestructive: true,
      onClick: function onClick() {
        deleteMarker(index);
      }
    }, "Delete"));
  }));
};

var _default = MarkersList;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/components/with-controls-visibility/index.js":
/*!*****************************************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/components/with-controls-visibility/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var withControlsVisibility = function withControlsVisibility(Component) {
  return function (props) {
    var setControlsVisibility = props.setControlsVisibility;
    (0, _element.useEffect)(function () {
      setControlsVisibility({
        'start-frame-panel': false
      });
    }, []);
    return (0, _element.createElement)(Component, props);
  };
};

var _default = withControlsVisibility;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/edit.js":
/*!****************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/edit.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./packages/block-library/node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./packages/block-library/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./packages/block-library/node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./packages/block-library/node_modules/classnames/index.js"));

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _api = __webpack_require__(/*! @wordpress/api */ "@wordpress/api");

var _blockEditor = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

var _components = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

var _blockEditor2 = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");

var _components2 = __webpack_require__(/*! ./components */ "./packages/block-library/build/blocks/google-map/components/index.js");

var API_KEY_SETTING_ID = 'novablocks_google_maps_api_key'; // This is a GLOBAL function that, when present, gets called by the Google Maps script on authentication errors.

window.gm_authFailure = function () {
  window.googlemaps_authfailure = true;
  window.dispatchEvent(new Event('novablock.googlemaps_authfailure'));
};

var Edit = function Edit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var align = attributes.align,
      styleData = attributes.styleData;

  var _useState = (0, _element.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      fetchedScript = _useState2[0],
      setFetchedScript = _useState2[1];

  var _useState3 = (0, _element.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      fetchedApiKey = _useState4[0],
      setFetchedApiKey = _useState4[1];

  var _useState5 = (0, _element.useState)(''),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      savedApiKey = _useState6[0],
      setSavedApiKey = _useState6[1];

  var _useState7 = (0, _element.useState)(''),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      apiKey = _useState8[0],
      setApiKey = _useState8[1];

  var blockProps = (0, _blockEditor.useBlockProps)({
    className: (0, _classnames.default)(props.className, "align".concat(align)),
    style: props.style
  });
  var initialGmAuthFailure = (0, _element.useMemo)(function () {
    var _window$googlemaps_au, _window;

    return (_window$googlemaps_au = (_window = window) === null || _window === void 0 ? void 0 : _window.googlemaps_authfailure) !== null && _window$googlemaps_au !== void 0 ? _window$googlemaps_au : false;
  }, []);

  var _useState9 = (0, _element.useState)(initialGmAuthFailure),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      gmAuthFailure = _useState10[0],
      setGmAuthFailure = _useState10[1];

  var onGoogleMapsAuthFailure = (0, _element.useCallback)(function (event) {
    setGmAuthFailure(true);
  }, []);
  var settings = (0, _element.useRef)(null);
  (0, _blockEditor2.useDidUpdateEffect)(function () {
    var keyParam = savedApiKey !== '' ? "key=".concat(savedApiKey, "&") : '';
    var scriptSrc = "//maps.googleapis.com/maps/api/js?".concat(keyParam, "libraries=places");
    var scripts = document.querySelectorAll('script[src*="maps.googleapis.com"]');

    if (scripts.length) {
      setFetchedScript(true);
      return Promise.resolve();
    }

    var promise = new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.onload = resolve;
      script.onerror = reject;
      script.async = true;
      script.src = scriptSrc;
      document.body.appendChild(script);
    });
    return promise.then(function () {
      setFetchedScript(true);
    });
  }, [savedApiKey]);
  (0, _element.useEffect)(function () {
    window.addEventListener('novablock.googlemaps_authfailure', onGoogleMapsAuthFailure);

    _api.loadPromise.done(function () {
      settings.current = new _api.models.Settings();
      settings.current.on("change:".concat(API_KEY_SETTING_ID), function (model) {
        var apiKey = model.get(API_KEY_SETTING_ID);
        setFetchedApiKey(true);
        setSavedApiKey(apiKey);
        setApiKey(apiKey);
      });
      settings.current.fetch();
    });

    return function () {
      window.removeEventListener('novablock.googlemaps_authfailure', onGoogleMapsAuthFailure);
    };
  }, []);
  var passedProps = (0, _element.useMemo)(function () {
    var passedProps = Object.assign(props);

    if (typeof styleData === "string") {
      passedProps.attributes.styleData = JSON.parse(styleData);
    }

    return passedProps;
  }, [props]);

  var onSaveApiKey = function onSaveApiKey(apiKey) {
    var key = new _api.models.Settings((0, _defineProperty2.default)({}, API_KEY_SETTING_ID, apiKey));
    key.save().then(function () {
      setGmAuthFailure(false);
      settings.current.fetch();
    });
  };

  var instructions = (0, _element.useMemo)(function () {
    var url = '//developers.google.com/maps/documentation/javascript/get-api-key';

    if (gmAuthFailure) {
      return (0, _element.createInterpolateElement)((0, _i18n.__)('It seems that your Google Maps API key is INVALID. Please REFRESH the page, double check that you pasted it correctly, and that it is a valid API key. More information about how to <a>register a Google Maps API Key</a>.', 'nova-blocks'), {
        a: (0, _element.createElement)("a", {
          target: "_blank",
          href: url
        })
      });
    }

    return (0, _element.createInterpolateElement)((0, _i18n.__)('To display the map, you need to <a>register a Google Maps API Key</a> and paste it here.', 'nova-blocks'), {
      a: (0, _element.createElement)("a", {
        target: "_blank",
        href: url
      })
    });
  }, [gmAuthFailure]);
  var showInspectorControls = (0, _element.useMemo)(function () {
    return fetchedApiKey && fetchedScript && !!savedApiKey && !gmAuthFailure;
  }, [fetchedApiKey, fetchedScript, savedApiKey, gmAuthFailure]);
  var showSpinner = (0, _element.useMemo)(function () {
    return !fetchedApiKey;
  }, [fetchedApiKey]);
  var showPlaceholder = (0, _element.useMemo)(function () {
    return !showSpinner && (!fetchedScript || !savedApiKey || gmAuthFailure);
  }, [showSpinner, fetchedScript, savedApiKey, gmAuthFailure]);
  var showMap = (0, _element.useMemo)(function () {
    return !showSpinner && !showPlaceholder;
  }, [showSpinner, showPlaceholder]);
  return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_components2.BlockControls, props), showInspectorControls && (0, _element.createElement)(_components2.InspectorControls, (0, _extends2.default)({}, passedProps, {
    apiKey: apiKey,
    savedApiKey: savedApiKey,
    onChangeApiKey: setApiKey,
    onSaveApiKey: onSaveApiKey,
    apiKeyInstructions: instructions
  })), (0, _element.createElement)("div", blockProps, showSpinner && (0, _element.createElement)(_components.Spinner, null), showPlaceholder && (0, _element.createElement)(_components2.MapPlaceholder, {
    saveApiKey: onSaveApiKey,
    apiKey: savedApiKey,
    apiKeyInstructions: instructions
  }), showMap && (0, _element.createElement)(_components2.Map, props)));
};

var _default = (0, _components2.withControlsVisibility)(Edit);

exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/icon.svg":
/*!*****************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/icon.svg ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "block-library-google-map/icon",
  "use": "block-library-google-map/icon-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" id=\"block-library-google-map/icon\"><path fill=\"#6565F2\" fill-rule=\"evenodd\" d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM5.45 10.55a6.55 6.55 0 1 1 13.1 0c0 2.236-2.504 5.893-4.416 8.359a2.677 2.677 0 0 1-4.268 0c-1.912-2.466-4.415-6.123-4.415-8.36zm3.4-.186a3.15 3.15 0 1 0 6.301 0 3.15 3.15 0 0 0-6.301 0z\" clip-rule=\"evenodd\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/index.js":
/*!*****************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./packages/block-library/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _blocks = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");

var _hooks = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");

var _blockEditor = __webpack_require__(/*! @novablocks/block-editor */ "@novablocks/block-editor");

var _icon = _interopRequireDefault(__webpack_require__(/*! ./icon.svg */ "./packages/block-library/build/blocks/google-map/icon.svg"));

var _edit = _interopRequireDefault(__webpack_require__(/*! ./edit */ "./packages/block-library/build/blocks/google-map/edit.js"));

var _attributes = _interopRequireDefault(__webpack_require__(/*! ./attributes */ "./packages/block-library/build/blocks/google-map/attributes.json"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var attributesOverwrite = {
  scrollingEffect: {
    type: "string",
    "default": "parallax"
  }
};
var BLOCK_NAME = 'novablocks/google-map';

var overwriteAttributes = function overwriteAttributes(settings) {
  if (settings.name !== BLOCK_NAME) {
    return settings;
  }

  return _objectSpread(_objectSpread({}, settings), {}, {
    attributes: _objectSpread(_objectSpread({}, settings.attributes), attributesOverwrite)
  });
};

(0, _hooks.addFilter)('blocks.registerBlockType', 'novablocks/google-map/attributes-overwrite', overwriteAttributes, Number.MAX_SAFE_INTEGER);
(0, _blocks.registerBlockType)(BLOCK_NAME, {
  icon: (0, _blockEditor.getSvg)(_icon.default),
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var align = attributes.align;

    if ('center' === align || 'full' === align) {
      return {
        'data-align': align
      };
    }
  },
  attributes: _attributes.default,
  edit: _edit.default,
  save: function save() {
    return false;
  }
});


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/utils/create-html-map-marker.js":
/*!****************************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/utils/create-html-map-marker.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./packages/block-library/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./packages/block-library/node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./packages/block-library/node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./packages/block-library/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./packages/block-library/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var createHTMLMapMarker = function createHTMLMapMarker(latlng, html) {
  var HTMLMapMarker = /*#__PURE__*/function (_google$maps$OverlayV) {
    (0, _inherits2.default)(HTMLMapMarker, _google$maps$OverlayV);

    var _super = _createSuper(HTMLMapMarker);

    function HTMLMapMarker() {
      var _this;

      (0, _classCallCheck2.default)(this, HTMLMapMarker);
      _this = _super.call(this);
      _this.latlng = latlng;
      _this.html = html;
      return _this;
    }

    (0, _createClass2.default)(HTMLMapMarker, [{
      key: "createDiv",
      value: function createDiv() {
        var _this2 = this;

        this.div = document.createElement('div');
        this.div.style.position = 'absolute';

        if (this.html) {
          this.div.innerHTML = this.html;
        }

        google.maps.event.addDomListener(this.div, 'click', function (event) {
          google.maps.event.trigger(_this2, 'click');
        });
      }
    }, {
      key: "appendDivToOverlay",
      value: function appendDivToOverlay() {
        var panes = this.getPanes();
        panes.overlayLayer.appendChild(this.div);
      }
    }, {
      key: "positionDiv",
      value: function positionDiv() {
        var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

        if (point) {
          this.div.style.left = "".concat(point.x, "px");
          this.div.style.top = "".concat(point.y, "px");
        }
      }
    }, {
      key: "draw",
      value: function draw() {
        if (!this.div) {
          this.createDiv();
          this.appendDivToOverlay();
        }

        this.positionDiv();
      }
    }, {
      key: "remove",
      value: function remove() {
        if (this.div) {
          this.div.parentNode.removeChild(this.div);
          this.div = null;
        }
      }
    }, {
      key: "getPosition",
      value: function getPosition() {
        return this.latlng;
      }
    }, {
      key: "getDraggable",
      value: function getDraggable() {
        return false;
      }
    }]);
    return HTMLMapMarker;
  }(google.maps.OverlayView);

  return new HTMLMapMarker();
};

var _default = createHTMLMapMarker;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/utils/default-map-center.js":
/*!************************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/utils/default-map-center.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var DEFAULT_MAP_CENTER = {
  lat: 47.1665264,
  lng: 27.58285479999995
};
var _default = DEFAULT_MAP_CENTER;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/utils/index.js":
/*!***********************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/utils/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DEFAULT_MAP_CENTER", {
  enumerable: true,
  get: function get() {
    return _defaultMapCenter.default;
  }
});
exports.compileStyles = exports.addVisibilityToStyles = exports.DEFAULT_PIN_COLOR = void 0;
Object.defineProperty(exports, "createHtmlMapMarker", {
  enumerable: true,
  get: function get() {
    return _createHtmlMapMarker.default;
  }
});
exports.getMarkersBounds = exports.getMarkerMarkup = exports.getMarkerLatLng = exports.getMapStyles = exports.getMapAccentColor = exports.getCompiledStyles = exports.getCenterFromMarkers = exports.fitMapBoundsToMarkers = void 0;
Object.defineProperty(exports, "pin", {
  enumerable: true,
  get: function get() {
    return _pin.default;
  }
});
Object.defineProperty(exports, "styles", {
  enumerable: true,
  get: function get() {
    return _styles.default;
  }
});

var _data = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");

var _defaultMapCenter = _interopRequireDefault(__webpack_require__(/*! ./default-map-center */ "./packages/block-library/build/blocks/google-map/utils/default-map-center.js"));

var _styles = _interopRequireDefault(__webpack_require__(/*! ./styles */ "./packages/block-library/build/blocks/google-map/utils/styles/index.js"));

var _pin = _interopRequireDefault(__webpack_require__(/*! ./pin */ "./packages/block-library/build/blocks/google-map/utils/pin.js"));

var _createHtmlMapMarker = _interopRequireDefault(__webpack_require__(/*! ./create-html-map-marker */ "./packages/block-library/build/blocks/google-map/utils/create-html-map-marker.js"));

var addVisibilityToStyles = function addVisibilityToStyles(styles, showLabels, showIcons) {
  if (!showLabels) {
    styles.unshift({
      "elementType": "labels.text",
      "stylers": [{
        "visibility": "off"
      }]
    });
  }

  if (!showIcons) {
    styles.unshift({
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    });
  }

  return styles;
};

exports.addVisibilityToStyles = addVisibilityToStyles;

var compileStyles = function compileStyles(styleData) {
  var accentColor = getMapAccentColor();
  var styleDataString = JSON.stringify(styleData).replace(/%ACCENT_COLOR%/g, accentColor);
  return JSON.parse(styleDataString);
};

exports.compileStyles = compileStyles;

var getMapStyles = function getMapStyles() {
  var attributes = this.props.attributes;
  var styleData = attributes.styleData,
      styleSlug = attributes.styleSlug;
  var shouldHaveCustomStyles = styleSlug !== 'original' && styleData.length !== 0;

  var selectedStyles = _styles.default.find(function (style) {
    return style.slug === styleSlug;
  });

  var styleDataBySlug = selectedStyles ? selectedStyles.styles : {};
  var mapStyles = shouldHaveCustomStyles && styleDataBySlug || styleData;
  return compileStyles.call(this, mapStyles);
};

exports.getMapStyles = getMapStyles;

var getMapAccentColor = function getMapAccentColor() {
  var _novablocksSettings$m;

  var novablocksSettings = (0, _data.select)('novablocks').getSettings();
  return (novablocksSettings === null || novablocksSettings === void 0 ? void 0 : (_novablocksSettings$m = novablocksSettings.map) === null || _novablocksSettings$m === void 0 ? void 0 : _novablocksSettings$m.accentColor) || '#222222';
};

exports.getMapAccentColor = getMapAccentColor;

var getCenterFromMarkers = function getCenterFromMarkers(markers) {
  if (typeof google === "undefined" || typeof google.maps === "undefined") {
    return _defaultMapCenter.default;
  }

  var bounds = new google.maps.LatLngBounds(); // when there is only one marker bounds aren't accurate at great zoom levels

  if (markers.length === 1) {
    var center = markers[0];
    return new google.maps.LatLng(center.geometry.location);
  }

  markers.forEach(function (marker) {
    if (!marker.geometry) {
      return;
    }

    if (marker.geometry.viewport) {
      bounds.union(marker.geometry.viewport);
    } else {
      bounds.extend(marker.geometry.location);
    }
  });
  return bounds.getCenter();
};

exports.getCenterFromMarkers = getCenterFromMarkers;

var getMarkersBounds = function getMarkersBounds(makers) {
  var bounds = new google.maps.LatLngBounds();
  makers.forEach(function (marker) {
    var latlng = getMarkerLatLng(marker);
    bounds.extend(latlng);
  });
  return bounds;
};

exports.getMarkersBounds = getMarkersBounds;
var DEFAULT_PIN_COLOR = '#222222';
exports.DEFAULT_PIN_COLOR = DEFAULT_PIN_COLOR;

var getMarkerLatLng = function getMarkerLatLng(marker) {
  var location = JSON.parse(JSON.stringify(marker.geometry.location));
  return new google.maps.LatLng(location.lat, location.lng);
};

exports.getMarkerLatLng = getMarkerLatLng;

var getMarkerMarkup = function getMarkerMarkup(marker, attributes) {
  var accentColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_PIN_COLOR;
  var styleSlug = attributes.styleSlug,
      showMarkerLabels = attributes.showMarkerLabels;
  var pinColor = styleSlug === 'customized' ? accentColor : DEFAULT_PIN_COLOR;

  var pinMarkup = _pin.default.replace('%ACCENT_COLOR%', pinColor);

  var hasLabel = showMarkerLabels && marker.name;
  var labelMarkup = hasLabel ? "<div class=\"novablocks-gamp__marker-label\">".concat(marker.name, "</div>") : '';
  return "\n        <div class=\"novablocks-gmap__marker\">\n          ".concat(labelMarkup, "\n          <div class=\"novablocks-gamp__marker-icon\">").concat(pinMarkup, "</div>\n        </div>");
};

exports.getMarkerMarkup = getMarkerMarkup;

var getCompiledStyles = function getCompiledStyles(atts, accentColor) {
  var _window, _window$sm, _window$sm$darkMode;

  var DarkMode = (_window = window) === null || _window === void 0 ? void 0 : (_window$sm = _window.sm) === null || _window$sm === void 0 ? void 0 : (_window$sm$darkMode = _window$sm.darkMode) === null || _window$sm$darkMode === void 0 ? void 0 : _window$sm$darkMode.default;
  var attributes = Object.assign({}, atts);

  if (DarkMode && DarkMode.isCompiledDark()) {
    Object.assign(attributes, {
      styleSlug: 'dark'
    });
  }

  var showLabels = attributes.showLabels,
      showIcons = attributes.showIcons,
      styleData = attributes.styleData,
      styleSlug = attributes.styleSlug;
  var shouldHaveCustomStyles = styleSlug !== 'original' && styleData.length !== 0;

  var selectedStyles = _styles.default.find(function (style) {
    return style.slug === styleSlug;
  });

  var styleDataBySlug = selectedStyles ? selectedStyles.styles : {};
  var data = shouldHaveCustomStyles && styleDataBySlug || styleData;
  var replacedData = JSON.parse(JSON.stringify(data).replace(/%ACCENT_COLOR%/g, accentColor));
  return addVisibilityToStyles(replacedData, showLabels, showIcons);
};

exports.getCompiledStyles = getCompiledStyles;

var fitMapBoundsToMarkers = function fitMapBoundsToMarkers(map, mapMarkers, padding) {
  if (mapMarkers.length < 1) {
    return;
  }

  if (mapMarkers.length === 1) {
    map.setCenter(mapMarkers[0].latlng);
    return;
  }

  var bounds = new google.maps.LatLngBounds();
  mapMarkers.forEach(function (marker) {
    bounds.extend(marker.latlng);
  });
  map.fitBounds(bounds, padding);
};

exports.fitMapBoundsToMarkers = fitMapBoundsToMarkers;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/utils/pin.js":
/*!*********************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/utils/pin.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "<svg width=\"62\" height=\"75\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 62 75\">\n\t<defs>\n\t\t<path id=\"b\" d=\"M31 69s27-18 27-40C58 14.088 46 2 31 2S4 14.088 4 29c0 22 27 40 27 40zm7.725-31.206c-4.26 4.275-11.264 4.275-15.53 0-4.26-4.277-4.26-11.305 0-15.587 4.26-4.276 11.265-4.276 15.53 0 4.367 4.282 4.367 11.304 0 15.587z\"></path>\n\t\t<filter id=\"a\" width=\"200%\" height=\"200%\" x=\"-50%\" y=\"-50%\" filterUnits=\"objectBoundingBox\">\n\t\t\t<feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"></feOffset>\n\t\t\t<feGaussianBlur in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\" stdDeviation=\"2\"></feGaussianBlur>\n\t\t\t<feColorMatrix in=\"shadowBlurOuter1\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\"></feColorMatrix>\n\t\t</filter>\n\t</defs>\n\t<g fill=\"none\" fillRule=\"evenodd\">\n\t\t<use fill=\"#000\" filter=\"url(#a)\" xlink:href=\"#b\" style=\"display:none\"></use>\n\t\t<use fill=\"%ACCENT_COLOR%\" xlink:href=\"#b\"></use>\n\t</g>\n</svg>";
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/utils/styles/customized.js":
/*!***********************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/utils/styles/customized.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  "elementType": "geometry",
  "stylers": [{
    "color": "#f5f5f5"
  }]
}, {
  "elementType": "labels.icon",
  "stylers": [{
    "saturation": -100
  }, {
    "lightness": 60
  }]
}, {
  "elementType": "labels.text.stroke",
  "stylers": [{
    "color": "#f5f5f5"
  }]
}, {
  "featureType": "poi",
  "elementType": "geometry",
  "stylers": [{
    "color": "#eeeeee"
  }]
}, {
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "%ACCENT_COLOR%"
  }, {
    "lightness": 90
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [{
    "color": "#dadada"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#616161"
  }]
}, {
  "featureType": "road.local",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "%ACCENT_COLOR%"
  }, {
    "saturation": -25
  }, {
    "lightness": 70
  }]
}, {
  "featureType": "road.local",
  "elementType": "labels.text.fill",
  "stylers": [{
    "lightness": 30
  }]
}, {
  "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [{
    "color": "#e5e5e5"
  }]
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [{
    "color": "#c9c9c9"
  }]
}, {
  "featureType": "water",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "%ACCENT_COLOR%"
  }, {
    "lightness": 60
  }]
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [{
    "saturation": -100
  }]
}];
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/utils/styles/dark.js":
/*!*****************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/utils/styles/dark.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  "featureType": "all",
  "elementType": "labels.text.fill",
  "stylers": [{
    "saturation": 36
  }, {
    "color": "#000000"
  }, {
    "lightness": 40
  }]
}, {
  "featureType": "all",
  "elementType": "labels.text.stroke",
  "stylers": [{
    "visibility": "on"
  }, {
    "color": "#000000"
  }, {
    "lightness": 16
  }]
}, {
  "featureType": "all",
  "elementType": "labels.icon",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "administrative",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#000000"
  }, {
    "lightness": 20
  }]
}, {
  "featureType": "administrative",
  "elementType": "geometry.stroke",
  "stylers": [{
    "color": "#000000"
  }, {
    "lightness": 17
  }, {
    "weight": 1.2
  }]
}, {
  "featureType": "administrative",
  "elementType": "labels",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "administrative.country",
  "elementType": "all",
  "stylers": [{
    "visibility": "simplified"
  }]
}, {
  "featureType": "administrative.country",
  "elementType": "geometry",
  "stylers": [{
    "visibility": "simplified"
  }]
}, {
  "featureType": "administrative.country",
  "elementType": "labels.text",
  "stylers": [{
    "visibility": "simplified"
  }]
}, {
  "featureType": "administrative.province",
  "elementType": "all",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "administrative.locality",
  "elementType": "all",
  "stylers": [{
    "visibility": "simplified"
  }, {
    "saturation": "-100"
  }, {
    "lightness": "30"
  }]
}, {
  "featureType": "administrative.neighborhood",
  "elementType": "all",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "administrative.land_parcel",
  "elementType": "all",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "landscape",
  "elementType": "all",
  "stylers": [{
    "visibility": "simplified"
  }, {
    "gamma": "0.00"
  }, {
    "lightness": "74"
  }]
}, {
  "featureType": "landscape",
  "elementType": "geometry",
  "stylers": [{
    "color": "#000000"
  }, {
    "lightness": 20
  }]
}, {
  "featureType": "landscape.man_made",
  "elementType": "all",
  "stylers": [{
    "lightness": "3"
  }]
}, {
  "featureType": "poi",
  "elementType": "all",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "poi",
  "elementType": "geometry",
  "stylers": [{
    "color": "#000000"
  }, {
    "lightness": 21
  }]
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [{
    "visibility": "simplified"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#000000"
  }, {
    "lightness": 17
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.stroke",
  "stylers": [{
    "color": "#000000"
  }, {
    "lightness": 29
  }, {
    "weight": 0.2
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "geometry",
  "stylers": [{
    "color": "#000000"
  }, {
    "lightness": 18
  }]
}, {
  "featureType": "road.local",
  "elementType": "geometry",
  "stylers": [{
    "color": "#000000"
  }, {
    "lightness": 16
  }]
}, {
  "featureType": "transit",
  "elementType": "geometry",
  "stylers": [{
    "color": "#000000"
  }, {
    "lightness": 19
  }]
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [{
    "color": "#000000"
  }, {
    "lightness": 17
  }]
}];
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/utils/styles/index.js":
/*!******************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/utils/styles/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _customized = _interopRequireDefault(__webpack_require__(/*! ./customized */ "./packages/block-library/build/blocks/google-map/utils/styles/customized.js"));

var _dark = _interopRequireDefault(__webpack_require__(/*! ./dark */ "./packages/block-library/build/blocks/google-map/utils/styles/dark.js"));

var styles = [{
  slug: 'customized',
  label: 'Customized',
  styles: _customized.default
}, {
  slug: 'original',
  label: 'Original',
  styles: []
}, {
  slug: 'dark',
  label: 'Dark',
  styles: _dark.default
}];
var _default = styles;
exports.default = _default;


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

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!*****************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./packages/block-library/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!*********************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!**************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/createClass.js":
/*!***********************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/createClass.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!**************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \**************************************************************************************/
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

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/extends.js":
/*!*******************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/extends.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}

module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!**************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/inherits.js":
/*!********************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/inherits.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./packages/block-library/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!***************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!*****************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./packages/block-library/node_modules/@babel/runtime/helpers/typeof.js")["default"];

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./packages/block-library/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!**************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!*****************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./packages/block-library/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./packages/block-library/node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./packages/block-library/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./packages/block-library/node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/typeof.js":
/*!******************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/typeof.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ "./packages/block-library/node_modules/classnames/index.js":
/*!*****************************************************************!*\
  !*** ./packages/block-library/node_modules/classnames/index.js ***!
  \*****************************************************************/
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

/***/ "@wordpress/api":
/*!*****************************!*\
  !*** external ["wp","api"] ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["api"]; }());

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

/***/ }),

/***/ "@wordpress/keycodes":
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["keycodes"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map