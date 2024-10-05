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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/header/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/block-library/build/blocks/header/frontend.js":
/*!****************************************************************!*\
  !*** ./packages/block-library/build/blocks/header/frontend.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! @novablocks/core/frontend */ "@novablocks/core/frontend");

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _index = _interopRequireDefault(__webpack_require__(/*! ./frontend/components/index */ "./packages/block-library/build/blocks/header/frontend/components/index.js"));

(0, _utils.ready)(function () {
  var headerElements = Array.from(document.querySelectorAll('.nb-header'));
  var headers = headerElements.map(function (element) {
    return new _index.default(element);
  });
});


/***/ }),

/***/ "./packages/block-library/build/blocks/header/frontend/components/header-base.js":
/*!***************************************************************************************!*\
  !*** ./packages/block-library/build/blocks/header/frontend/components/header-base.js ***!
  \***************************************************************************************/
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

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var HeaderBase = /*#__PURE__*/function () {
  function HeaderBase() {
    (0, _classCallCheck2.default)(this, HeaderBase);
    this.staticDistance = 0;
    this.stickyDistance = 0;
    this.isSticky = false;
    this.adminBar = document.querySelector('#wpadminbar');
  }

  (0, _createClass2.default)(HeaderBase, [{
    key: "initialize",
    value: function initialize() {
      (0, _utils.addClass)(this.element, 'nb-header--ready');
      (0, _utils.onScrollRAF)(this.maybeUpdateStickyStyles.bind(this));
      var debouncedOnResize = (0, _utils.debounce)(this.onResize.bind(this), 100);
      window.addEventListener('resize', debouncedOnResize);
    }
  }, {
    key: "onResize",
    value: function onResize() {
      var _this$adminBar$offset, _this$adminBar;

      this.element.style.removeProperty('position');
      this.element.style.removeProperty('top');
      this.box = this.element.getBoundingClientRect();
      this.adminBarHeight = (_this$adminBar$offset = (_this$adminBar = this.adminBar) === null || _this$adminBar === void 0 ? void 0 : _this$adminBar.offsetHeight) !== null && _this$adminBar$offset !== void 0 ? _this$adminBar$offset : 0;
      this.adminBarFixed = false;

      if (this.adminBar) {
        var adminBarStyle = window.getComputedStyle(this.adminBar);
        this.adminBarFixed = adminBarStyle.getPropertyValue('position') === 'fixed';
      }

      this.staticDistance = window.pageYOffset + this.box.top;
      this.stickyDistance = this.adminBarFixed ? this.adminBarHeight : 0;
      document.documentElement.style.setProperty('--theme-sticky-distance', "".concat(this.stickyDistance, "px"));
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      var _this$box;

      return this === null || this === void 0 ? void 0 : (_this$box = this.box) === null || _this$box === void 0 ? void 0 : _this$box.height;
    }
  }, {
    key: "maybeUpdateStickyStyles",
    value: function maybeUpdateStickyStyles(scrollY) {
      var _this$updateStickySty;

      var shouldBeSticky = scrollY > this.staticDistance - this.stickyDistance;

      if (this.shouldBeSticky === shouldBeSticky) {
        return;
      }

      this.shouldBeSticky = shouldBeSticky;
      (_this$updateStickySty = this.updateStickyStyles) === null || _this$updateStickySty === void 0 ? void 0 : _this$updateStickySty.call(this);
    }
  }, {
    key: "updateStickyStyles",
    value: function updateStickyStyles(scrollY) {
      this.applyStickyStyles(this.element, scrollY);
    }
  }, {
    key: "applyStickyStyles",
    value: function applyStickyStyles(element, scrollY) {
      var target = element !== null && element !== void 0 ? element : this.element;
      (0, _utils.toggleClass)(element, 'nb-header--sticky', this.shouldBeSticky);

      if (this.shouldBeSticky) {
        target.style.position = 'fixed';
        target.style.top = "".concat(this.stickyDistance, "px");
      } else {
        target.style.position = 'absolute';
        target.style.top = "".concat(this.staticDistance, "px");
      }
    }
  }]);
  return HeaderBase;
}();

var _default = HeaderBase;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/header/frontend/components/header-colors.js":
/*!*****************************************************************************************!*\
  !*** ./packages/block-library/build/blocks/header/frontend/components/header-colors.js ***!
  \*****************************************************************************************/
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

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _utils2 = __webpack_require__(/*! ../../utils */ "./packages/block-library/build/blocks/header/utils.js");

var HeaderColors = /*#__PURE__*/function () {
  function HeaderColors(element, initialColorsSource, transparentColorsSource) {
    (0, _classCallCheck2.default)(this, HeaderColors);
    this.element = element;
    this.initialColorsSource = initialColorsSource ? initialColorsSource : element;
    this.transparentColorsSource = transparentColorsSource ? transparentColorsSource : this.getFirstUsefulBlock();
    this.initializeColors();
  }

  (0, _createClass2.default)(HeaderColors, [{
    key: "getFirstBlock",
    value: function getFirstBlock() {
      var content = document.querySelector('.site-main .hentry');

      if (!content) {
        return null;
      }

      var firstBlock = (0, _utils.getFirstChild)(content);

      if ((0, _utils.hasClass)(firstBlock, 'nb-sidecar')) {
        var wrapper = firstBlock.querySelector('.nb-sidecar-area--content');

        if (!wrapper) {
          return firstBlock;
        }

        return (0, _utils.getFirstChild)(wrapper);
      }

      return null;
    }
  }, {
    key: "getFirstUsefulBlock",
    value: function getFirstUsefulBlock() {
      var firstBlock = this.getFirstBlock();

      if (!firstBlock) {
        return null;
      }

      var attributes = firstBlock.dataset;

      if (!(0, _utils.hasClass)(firstBlock, 'alignfull')) {
        return null;
      }

      if ((0, _utils.hasClass)(firstBlock, 'nb-supernova') && parseInt(attributes.imagePadding, 10) === 0 && attributes.cardLayout === 'stacked' && !firstBlock.querySelector('.nb-collection__header')) {
        return firstBlock.querySelector('.nb-supernova-item');
      }

      return firstBlock;
    }
  }, {
    key: "initializeColors",
    value: function initializeColors() {
      this.initialColorClasses = (0, _utils2.getColorSetClasses)(this.initialColorsSource).join(' ');
      this.transparentColorClasses = this.initialColorClasses;

      if (this.transparentColorsSource) {
        this.transparentColorClasses = (0, _utils2.getColorSetClasses)(this.transparentColorsSource).filter(function (classname) {
          return classname !== 'sm-color-signal-0';
        }).join(' ');
      }
    }
  }, {
    key: "toggleColors",
    value: function toggleColors(isTransparent) {
      (0, _utils2.toggleClasses)(this.element, isTransparent ? this.transparentColorClasses : this.initialColorClasses);
    }
  }]);
  return HeaderColors;
}();

var _default = HeaderColors;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/header/frontend/components/header-mobile.js":
/*!*****************************************************************************************!*\
  !*** ./packages/block-library/build/blocks/header/frontend/components/header-mobile.js ***!
  \*****************************************************************************************/
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

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _utils2 = __webpack_require__(/*! ../../utils */ "./packages/block-library/build/blocks/header/utils.js");

var _headerBase = _interopRequireDefault(__webpack_require__(/*! ./header-base */ "./packages/block-library/build/blocks/header/frontend/components/header-base.js"));

var _headerColors = _interopRequireDefault(__webpack_require__(/*! ./header-colors */ "./packages/block-library/build/blocks/header/frontend/components/header-colors.js"));

var _menuToggle = _interopRequireDefault(__webpack_require__(/*! ./menu-toggle */ "./packages/block-library/build/blocks/header/frontend/components/menu-toggle.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var HeaderMobile = /*#__PURE__*/function (_HeaderBase) {
  (0, _inherits2.default)(HeaderMobile, _HeaderBase);

  var _super = _createSuper(HeaderMobile);

  function HeaderMobile(parent) {
    var _this;

    (0, _classCallCheck2.default)(this, HeaderMobile);
    _this = _super.call(this);
    _this.parent = parent;
    _this.parentContainer = parent.element.querySelector('.nb-header__inner-container');

    _this.initialize();

    _this.onResize();

    return _this;
  }

  (0, _createClass2.default)(HeaderMobile, [{
    key: "initialize",
    value: function initialize() {
      this.initializeMenuToggle();
      this.createMobileHeader();
      var logoRow = this.parent.rows.find(function (row) {
        return row.element.querySelector('.site-logo');
      });
      this.headerClasses = (0, _utils2.getColorSetClasses)(this.parent.element).join(' ');
      this.colors = new _headerColors.default(this.element, logoRow === null || logoRow === void 0 ? void 0 : logoRow.element, this.parent.colorsElement);
      this.menuToggleColors = new _headerColors.default(this.menuToggle.element, logoRow === null || logoRow === void 0 ? void 0 : logoRow.element, this.parent.colorsElement);

      _headerBase.default.prototype.initialize.call(this);
    }
  }, {
    key: "initializeMenuToggle",
    value: function initializeMenuToggle() {
      var menuToggleCheckbox = document.getElementById('nova-menu-toggle');
      this.navigationIsOpen = menuToggleCheckbox.checked;
      this.menuToggle = new _menuToggle.default(menuToggleCheckbox, {
        onChange: this.onToggleChange.bind(this)
      });
    }
  }, {
    key: "createMobileHeader",
    value: function createMobileHeader() {
      this.element = document.createElement('div');
      this.element.setAttribute('class', 'nb-header--mobile nb-header-background nb-header-shadow');
      this.element.setAttribute('style', this.parent.element.getAttribute('style'));
      (0, _utils.addClass)(this.element, 'nb-header--transparent');
      this.copyElementFromParent('.c-branding');
      this.copyElementFromParent('.menu-item--cart');
      this.menuToggle.element.insertAdjacentElement('afterend', this.element);
      this.createButtonMenu();
    }
  }, {
    key: "createButtonMenu",
    value: function createButtonMenu() {
      var _this2 = this;

      var buttonCount = 0;
      this.buttonMenu = document.createElement('ul');
      (0, _utils.addClass)(this.buttonMenu, 'menu menu--buttons');
      var buttonSelectors = ['.menu-item--search', '.menu-item--dark-mode'];
      buttonSelectors.forEach(function (selector) {
        var button = _this2.parent.element.querySelector(selector);

        if (button) {
          var buttonClone = button.cloneNode(true);

          _this2.buttonMenu.appendChild(buttonClone);

          buttonCount = buttonCount + 1;
        }
      });

      if (buttonCount) {
        var navigationBlock = document.createElement('div');
        (0, _utils.addClass)(navigationBlock, 'wp-block-nb-navigation');
        var wrapper = document.createElement('div');
        (0, _utils.addClass)(wrapper, 'nb-header__buttons-menu');
        navigationBlock.appendChild(this.buttonMenu);
        wrapper.appendChild(navigationBlock);
        this.parent.element.appendChild(wrapper);
      }
    }
  }, {
    key: "updateStickyStyles",
    value: function updateStickyStyles() {
      if ((0, _utils.below)('lap')) {
        this.applyStickyStyles(this.element);
        this.applyStickyStyles(this.parent.element);
        this.applyStickyStyles(this.menuToggle.element);
        this.colors.toggleColors(!this.shouldBeSticky);
        this.updateToggleClasses();
      }
    }
  }, {
    key: "onResize",
    value: function onResize() {
      _headerBase.default.prototype.onResize.call(this);

      this.update();
      var scrollY = window.pageYOffset;
      this.updateStickyStyles(scrollY);
    }
  }, {
    key: "update",
    value: function update() {
      this.element.style.top = "".concat(this.stickyDistance, "px");
      this.menuToggle.element.style.height = "".concat(this.box.height, "px");
      this.parentContainer.style.paddingTop = "".concat(this.box.height, "px");
      this.buttonMenu.style.height = "".concat(this.box.height, "px");
    }
  }, {
    key: "onToggleChange",
    value: function onToggleChange(event, menuToggle) {
      var checked = event.target.checked;
      document.body.style.overflow = checked ? 'hidden' : '';
      this.navigationIsOpen = !!checked;
      this.updateToggleClasses();
    }
  }, {
    key: "updateToggleClasses",
    value: function updateToggleClasses() {
      if (this.navigationIsOpen) {
        (0, _utils.removeClass)(this.menuToggle.element, "".concat(this.menuToggleColors.transparentColorClasses, " ").concat(this.menuToggleColors.initialColorClasses));
        (0, _utils.addClass)(this.menuToggle.element, this.headerClasses);
      } else {
        (0, _utils.removeClass)(this.menuToggle.element, this.headerClasses);
        this.menuToggleColors.toggleColors(!this.shouldBeSticky);
      }
    }
  }, {
    key: "copyElementFromParent",
    value: function copyElementFromParent(selector) {
      var element = this.parent.element.querySelector(selector);
      var elementClone = element === null || element === void 0 ? void 0 : element.cloneNode(true);

      if (elementClone) {
        this.element.appendChild(elementClone);
      }
    }
  }]);
  return HeaderMobile;
}(_headerBase.default);

var _default = HeaderMobile;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/header/frontend/components/header-sticky.js":
/*!*****************************************************************************************!*\
  !*** ./packages/block-library/build/blocks/header/frontend/components/header-sticky.js ***!
  \*****************************************************************************************/
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

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./packages/block-library/node_modules/@babel/runtime/helpers/get.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./packages/block-library/node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./packages/block-library/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./packages/block-library/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _headerBase = _interopRequireDefault(__webpack_require__(/*! ./header-base */ "./packages/block-library/build/blocks/header/frontend/components/header-base.js"));

var _initializeReadingBar = __webpack_require__(/*! ./initialize-reading-bar */ "./packages/block-library/build/blocks/header/frontend/components/initialize-reading-bar.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var HeaderSticky = /*#__PURE__*/function (_HeaderBase) {
  (0, _inherits2.default)(HeaderSticky, _HeaderBase);

  var _super = _createSuper(HeaderSticky);

  function HeaderSticky(element) {
    var _this;

    (0, _classCallCheck2.default)(this, HeaderSticky);
    _this = _super.call(this);

    _this.initialize(element);

    return _this;
  }

  (0, _createClass2.default)(HeaderSticky, [{
    key: "initialize",
    value: function initialize(element) {
      var stickyHeader = element.cloneNode();
      stickyHeader.innerHTML = '<div class="nb-header__inner-container"></div>';
      var innerContainer = stickyHeader.firstChild;
      (0, _utils.removeClass)(stickyHeader, 'nb-header--main');
      (0, _utils.addClass)(stickyHeader, 'nb-header--secondary');
      var headerRows = Array.from(element.querySelectorAll('.nb-header-row'));
      var stickyRow = headerRows.find(function (row) {
        return row.dataset.isSticky;
      });
      var primaryRow = headerRows.find(function (row) {
        return row.dataset.isPrimary;
      });

      if (!stickyRow) {
        return false;
      }

      this.stickyRow = stickyRow;

      if (stickyRow) {
        innerContainer.appendChild(stickyRow.cloneNode(true));
      }

      if (primaryRow && primaryRow !== stickyRow) {
        innerContainer.appendChild(primaryRow.cloneNode(true));
      }

      element.insertAdjacentElement('beforebegin', stickyHeader);
      this.element = stickyHeader;
      this.onResize();
      (0, _get2.default)((0, _getPrototypeOf2.default)(HeaderSticky.prototype), "initialize", this).call(this);
      (0, _initializeReadingBar.initializeReadingBar)(this.element);
    }
  }, {
    key: "onResize",
    value: function onResize() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(HeaderSticky.prototype), "onResize", this).call(this);
      this.staticDistance += this.stickyRow.offsetTop;
      document.documentElement.style.setProperty('--theme-sticky-header-height', "".concat(this.getHeight(), "px"));
      this.element.style.position = 'fixed';
      this.element.style.top = "".concat(this.stickyDistance, "px");
    }
  }, {
    key: "updateStickyStyles",
    value: function updateStickyStyles() {
      (0, _utils.toggleClass)(this.element, 'is-visible', this.shouldBeSticky);
    }
  }]);
  return HeaderSticky;
}(_headerBase.default);

var _default = HeaderSticky;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/header/frontend/components/index.js":
/*!*********************************************************************************!*\
  !*** ./packages/block-library/build/blocks/header/frontend/components/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./packages/block-library/node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./packages/block-library/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./packages/block-library/node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./packages/block-library/node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./packages/block-library/node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./packages/block-library/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./packages/block-library/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _headerBase = _interopRequireDefault(__webpack_require__(/*! ./header-base */ "./packages/block-library/build/blocks/header/frontend/components/header-base.js"));

var _headerMobile = _interopRequireDefault(__webpack_require__(/*! ./header-mobile */ "./packages/block-library/build/blocks/header/frontend/components/header-mobile.js"));

var _headerColors = _interopRequireDefault(__webpack_require__(/*! ./header-colors */ "./packages/block-library/build/blocks/header/frontend/components/header-colors.js"));

var _headerSticky = _interopRequireDefault(__webpack_require__(/*! ./header-sticky */ "./packages/block-library/build/blocks/header/frontend/components/header-sticky.js"));

var _initializeReadingBar = __webpack_require__(/*! ./initialize-reading-bar */ "./packages/block-library/build/blocks/header/frontend/components/initialize-reading-bar.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Header = /*#__PURE__*/function (_HeaderBase) {
  (0, _inherits2.default)(Header, _HeaderBase);

  var _super = _createSuper(Header);

  function Header(element) {
    var _this;

    (0, _classCallCheck2.default)(this, Header);
    _this = _super.call(this);

    if (!element) {
      return (0, _possibleConstructorReturn2.default)(_this);
    }

    _this.element = element;
    _this.adjacentElement = _this.getAdjacentElement(element);
    _this.adjacentElementTargetChild = _this.findProperElement(_this.adjacentElement);
    _this.colorsElement = _this.findColorsElement(_this.adjacentElementTargetChild);
    _this.paddingTopTargets = _this.findPaddingTopTargets(_this.adjacentElementTargetChild);

    _this.gatherPromoBars();

    (0, _utils.addClass)(_this.adjacentElementTargetChild, 'nb-header-neighbour');
    _this.rows = _this.getHeaderRows();
    _this.isSimple = ['logo-left', 'logo-center'].includes(element.dataset.layout);
    _this.isSticky = _this.isSimple && !!_this.rows.find(function (row) {
      return row.element.dataset.isSticky;
    });
    _this.mobileHeader = new _headerMobile.default((0, _assertThisInitialized2.default)(_this));

    if (!_this.isSimple) {
      _this.stickyHeader = new _headerSticky.default(_this.element);
    }

    if (_this.isSticky) {
      (0, _initializeReadingBar.initializeReadingBar)(_this.element);
    }

    _this.onResize();

    _this.initialize();

    _this.toggleRowsColors(true);

    (0, _utils.addClass)(_this.element, 'nb-header--transparent');
    return _this;
  }

  (0, _createClass2.default)(Header, [{
    key: "gatherPromoBars",
    value: function gatherPromoBars() {
      var _this2 = this;

      var promoBars = document.querySelectorAll('.novablocks-announcement-bar, .nb-header');
      this.promoBars = [];
      var headerFound = false;
      promoBars.forEach(function (promoBar) {
        if (promoBar === _this2.element) {
          headerFound = true;
        }

        if (!headerFound) {
          _this2.promoBars.push(promoBar);
        }
      });
    }
  }, {
    key: "updatePromoBarsHeight",
    value: function updatePromoBarsHeight() {
      var promoBarsHeight = 0;
      this.promoBars.forEach(function (promoBar) {
        promoBarsHeight += promoBar.offsetHeight;
      });
      document.body.style.setProperty('--nb-promo-bar-height', "".concat(promoBarsHeight, "px"));
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      if ((0, _utils.below)('lap')) {
        return this.mobileHeader.getHeight();
      }

      return _headerBase.default.prototype.getHeight.call(this);
    }
  }, {
    key: "applyPaddingTopToTargets",
    value: function applyPaddingTopToTargets() {
      var _this3 = this;

      var paddingTopCarry = 0;
      var elementsStack = [];

      for (var element = this.adjacentElementTargetChild; element !== this.adjacentElement; element = element.parentNode) {
        elementsStack.push(element);
      }

      elementsStack.push(this.adjacentElement); // cleanup previously added styles

      elementsStack.forEach(function (element) {
        element.style.paddingTop = '';
        element.style.marginTop = '';
      });
      elementsStack.forEach(function (element) {
        var elementStyle = window.getComputedStyle(element);
        var paddingTop = parseInt(elementStyle.getPropertyValue('padding-top'), 10);
        var marginTop = parseInt(elementStyle.getPropertyValue('margin-top'), 10);
        paddingTopCarry = paddingTopCarry + paddingTop + marginTop;
        element.style.paddingTop = 0;
        element.style.marginTop = 0;
      });
      this.adjacentElementTargetChild.style.setProperty('--nb-header-height', "".concat(this.getHeight(), "px"));
      this.paddingTopTargets.forEach(function (target) {
        var value = "".concat(paddingTopCarry + _this3.getHeight(), "px");
        target.style.setProperty('--nb-header-neighbour-padding-top', value);
        target.style.paddingTop = value;
      });
    }
  }, {
    key: "onResize",
    value: function onResize() {
      var scrollY = window.pageYOffset;

      if ((0, _utils.above)('lap')) {
        _headerBase.default.prototype.onResize.call(this);

        this.element.style.position = 'absolute';
        this.element.style.top = "".concat(this.staticDistance, "px");
      }

      if (this.isSticky) {
        document.documentElement.style.setProperty('--theme-sticky-header-height', "".concat(this.getHeight(), "px"));
      }

      this.applyPaddingTopToTargets();
      this.updatePromoBarsHeight();
      this.updateStickyStyles(scrollY);
    }
  }, {
    key: "getHeaderRows",
    value: function getHeaderRows() {
      var _this4 = this;

      var rows = this.element.querySelectorAll('.nb-header-row');

      if (rows) {
        return Array.from(rows).map(function (element) {
          return new _headerColors.default(element, element, _this4.colorsElement);
        });
      }

      return [];
    }
  }, {
    key: "getAdjacentElement",
    value: function getAdjacentElement(element) {
      var next = element.nextElementSibling;
      var elementsToSkip = ['.c-menu-toggle', '.c-menu-toggle__checkbox', 'script', 'style'];
      var elementsToSkipSelector = elementsToSkip.join(', ');

      if (!next) {
        return this.getAdjacentElement(element.parentElement);
      }

      if ((0, _utils.matches)(next, elementsToSkipSelector)) {
        return this.getAdjacentElement(next);
      }

      return next;
    }
  }, {
    key: "findProperElement",
    value: function findProperElement(element, previous) {
      var attributes = element.dataset;
      var variation = attributes.paletteVariation ? parseInt(attributes.paletteVariation, 10) : 1;
      var isShifted = !!attributes.useSourceColorAsReference;
      var hasColorSignal = variation !== 1 || isShifted;

      if ((0, _utils.matches)(element, 'main, .wp-block-group.alignfull, .wp-block-query, .wp-block-post-content')) {
        if (!hasColorSignal) {
          return this.findProperElement(element.firstElementChild, element);
        }
      }

      if ((0, _utils.matches)(element, '.nb-sidecar')) {
        if (element.children.length === 1 && (0, _utils.matches)(element.firstElementChild, '.nb-sidecar-area--content')) {
          var child = element.firstElementChild.firstElementChild;

          if (child) {
            return this.findProperElement(child, element);
          }
        }
      }

      if (!(0, _utils.matches)(element, '.alignfull') && hasColorSignal && !!previous) {
        return previous;
      }

      if ((0, _utils.matches)(element, '[class*="sm-palette-"]')) {
        return element;
      }

      return element.closest('[class*="sm-palette-"]');
    }
  }, {
    key: "findColorsElement",
    value: function findColorsElement(element) {
      if ((0, _utils.hasClass)(element, 'nb-sidecar')) {
        var children = Array.from(element.children);
        var content = children.filter(function (child) {
          return (0, _utils.hasClass)(child, 'nb-sidecar-area--content');
        });

        if (content.length) {
          var firstChild = content[0].firstElementChild;

          if (firstChild && (0, _utils.hasClass)(firstChild, 'nb-sidecar')) {
            return this.findColorsElement(firstChild);
          }
        }
      }

      if ((0, _utils.hasClass)(element, 'nb-supernova')) {
        var paddingTop = window.getComputedStyle(element).getPropertyValue('padding-top');
        var paddingTopValue = parseInt(paddingTop, 10);

        if (paddingTopValue === 0) {
          return element.querySelector('.nb-supernova-item');
        }
      }

      return element;
    }
  }, {
    key: "findPaddingTopTargets",
    value: function findPaddingTopTargets(element) {
      if ((0, _utils.hasClass)(element, 'nb-sidecar')) {
        var getChildrenTargets = function getChildrenTargets(sidecar) {
          var children = Array.from(sidecar.children);
          var content = children.filter(function (child) {
            return (0, _utils.hasClass)(child, 'nb-sidecar-area--content');
          });
          var contentTargets = [];
          var sidebarTargets = children.filter(function (child) {
            return (0, _utils.hasClass)(child, 'nb-sidecar-area--sidebar');
          });
          var firstChild = content.length && content[0].firstElementChild;

          if (firstChild && (0, _utils.hasClass)(firstChild, 'nb-sidecar')) {
            contentTargets.push.apply(contentTargets, (0, _toConsumableArray2.default)(getChildrenTargets(firstChild)));
          } else {
            contentTargets.push.apply(contentTargets, (0, _toConsumableArray2.default)(content));
          }

          return [].concat(contentTargets, (0, _toConsumableArray2.default)(sidebarTargets));
        };

        return getChildrenTargets(element);
      }

      if ((0, _utils.hasClass)(element, 'nb-supernova')) {
        var attributes = element.dataset;
        var header = element.querySelector('.nb-collection__header');
        var hasImagePadding = parseInt(attributes.imagePadding, 10) !== 0;
        var isStacked = attributes.cardLayout === 'stacked';
        var isCarousel = attributes.layoutStyle === 'carousel';

        if (!header && !hasImagePadding && isStacked) {
          var containers = Array.from(element.querySelectorAll('.nb-supernova-item__inner-container'));

          if (isCarousel) {
            return containers;
          }

          return containers.slice(0, 1);
        }
      }

      return [element];
    }
  }, {
    key: "toggleRowsColors",
    value: function toggleRowsColors(isTransparent) {
      this.rows.forEach(function (row) {
        row.toggleColors(isTransparent);
      });
    }
  }, {
    key: "applyStickyStyles",
    value: function applyStickyStyles(element, scrollY) {
      if (this.isSticky && (0, _utils.above)('lap')) {
        _headerBase.default.prototype.applyStickyStyles.call(this, element, scrollY);

        this.toggleRowsColors(!this.shouldBeSticky);
      }
    }
  }, {
    key: "getIntroTimeline",
    value: function getIntroTimeline() {
      var that = this;
      var timeline = gsap.timeline({
        paused: true
      });
      var height = this.element.offsetHeight;
      var transitionEasing = 'power4.inOut';
      var transitionDuration = 0.5;
      timeline.to(this.element, {
        duration: transitionDuration,
        opacity: 1,
        ease: transitionEasing
      }, 0);
      timeline.to({
        height: 0
      }, {
        duration: transitionDuration,
        height: height,
        onUpdate: function onUpdate() {
          var targets = this.targets();

          if (Array.isArray(targets) && targets.length) {
            that.box = Object.assign({}, that.box, {
              height: targets[0].height
            });
            that.onResize();
          }
        },
        onUpdateParams: ['{self}'],
        ease: transitionEasing
      }, 0);
      return timeline;
    }
  }]);
  return Header;
}(_headerBase.default);

var _default = Header;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/header/frontend/components/initialize-reading-bar.js":
/*!**************************************************************************************************!*\
  !*** ./packages/block-library/build/blocks/header/frontend/components/initialize-reading-bar.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeReadingBar = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./packages/block-library/node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var initializeReadingBar = function initializeReadingBar(header) {
  var firstRow = header.querySelector('.nb-header-row');
  var readingBar = document.querySelector('.js-reading-bar');
  var progressBar = document.querySelector('.js-reading-progress');

  if (!readingBar) {
    return;
  }

  bindMenuLabelClick(header);

  if (firstRow && readingBar) {
    readingBar.style.display = 'block';
    firstRow.appendChild(readingBar);
  }

  if (progressBar) {
    progressBar.style.display = 'block';
    header.appendChild(progressBar);
  }

  var _getScrollTriggerBoun = getScrollTriggerBounds(),
      _getScrollTriggerBoun2 = (0, _slicedToArray2.default)(_getScrollTriggerBoun, 2),
      min = _getScrollTriggerBoun2[0],
      max = _getScrollTriggerBoun2[1];

  var showingReading = false;
  var showingNext = false;
  (0, _utils.onScrollRAF)(function (newScrollY, oldScrollY) {
    var progress = (0, _utils.clamp)((newScrollY - min) / (max - min), 0, 1);
    var scrollingDown = newScrollY > oldScrollY;
    var showSomething = scrollingDown && newScrollY > min;
    var showReading = showSomething && progress < 0.75;
    var showNext = showSomething && !showReading;

    if (showingReading !== showReading) {
      (0, _utils.toggleClass)(header, 'nb-header--reading', showReading && (0, _utils.above)('lap'));
      showingReading = showReading;
    }

    if (showingNext !== showNext) {
      (0, _utils.toggleClass)(header, 'nb-header--next', showNext && (0, _utils.above)('lap'));
      showingNext = showNext;
    }

    if (progressBar) {
      progressBar.style.setProperty('--progress', progress);
    }
  });
};

exports.initializeReadingBar = initializeReadingBar;

var bindMenuLabelClick = function bindMenuLabelClick(header) {
  var menuButton = document.querySelector('.js-sticky-menu-trigger');

  if (menuButton) {
    menuButton.addEventListener('click', function () {
      (0, _utils.removeClass)(header, 'nb-header--reading nb-header--next');
    });
  }
};

var getScrollTriggerBounds = function getScrollTriggerBounds() {
  var title = document.querySelector('.wp-block-post-title, .entry-title');
  var content = document.querySelector('.wp-block-post-content, .entry-content, #primary, main');
  var titleBottom = title ? title.offsetTop + title.offsetHeight : content.offsetTop;
  var contentBottom = content ? content.offsetTop + content.offsetHeight : document.body.scrollHeight;
  var ignored = document.querySelector('.article-header, .post-navigation, .novablocks-conversations');
  var ignoredHeight = Array.from(ignored !== null && ignored !== void 0 ? ignored : []).reduce(function (total, element) {
    return total + element.offsetHeight;
  }, 0);
  var min = titleBottom;
  var max = Math.max(min, contentBottom - ignoredHeight - window.innerHeight);
  return [min, max];
};


/***/ }),

/***/ "./packages/block-library/build/blocks/header/frontend/components/menu-toggle.js":
/*!***************************************************************************************!*\
  !*** ./packages/block-library/build/blocks/header/frontend/components/menu-toggle.js ***!
  \***************************************************************************************/
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

var MenuToggle = /*#__PURE__*/function () {
  function MenuToggle(input, options) {
    (0, _classCallCheck2.default)(this, MenuToggle);
    var id = input.getAttribute('id');
    var toggleLabels = document.querySelectorAll("[for=\"".concat(id, "\"]"));
    var defaults = {
      onChange: this.onChange
    };
    this.options = Object.assign({}, defaults, options);
    this.input = input;
    this.element = toggleLabels.length ? toggleLabels[0] : null;
    this.bindEvents();
  }

  (0, _createClass2.default)(MenuToggle, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.input.addEventListener('change', function (event) {
        _this.options.onChange.call(_this, event, _this);
      });
    }
  }, {
    key: "onChange",
    value: function onChange(isChecked, menuToggle) {}
  }, {
    key: "getHeight",
    value: function getHeight() {
      var _this$element;

      return (this === null || this === void 0 ? void 0 : (_this$element = this.element) === null || _this$element === void 0 ? void 0 : _this$element.offsetHeight) || 0;
    }
  }]);
  return MenuToggle;
}();

var _default = MenuToggle;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/header/utils.js":
/*!*************************************************************!*\
  !*** ./packages/block-library/build/blocks/header/utils.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleClasses = exports.getColorSetClasses = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./packages/block-library/node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var getColorSetClasses = function getColorSetClasses(element) {
  var classAttr = element === null || element === void 0 ? void 0 : element.getAttribute('class');

  if (!classAttr) {
    return [];
  }

  var classes = classAttr.split(/\s+/);
  return classes.filter(function (classname) {
    return classname.includes('sm-color-signal-') || classname.includes('sm-palette-') || classname.includes('sm-variation-') || classname.includes('sm-dark') || classname.includes('sm-light');
  });
};

exports.getColorSetClasses = getColorSetClasses;

var toggleClasses = function toggleClasses(element) {
  var _element$classList;

  var classesToAdd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var prefixes = ['sm-palette-', 'sm-variation-', 'sm-color-signal-', 'sm-dark', 'sm-light'];
  var classesToRemove = Array.from(element.classList).filter(function (classname) {
    return prefixes.some(function (prefix) {
      return classname.indexOf(prefix) > -1;
    });
  });

  (_element$classList = element.classList).remove.apply(_element$classList, (0, _toConsumableArray2.default)(classesToRemove));

  (0, _utils.addClass)(element, classesToAdd);
};

exports.toggleClasses = toggleClasses;


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

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/get.js":
/*!***************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/get.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase.js */ "./packages/block-library/node_modules/@babel/runtime/helpers/superPropBase.js");

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }

  return _get.apply(this, arguments);
}

module.exports = _get, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/superPropBase.js":
/*!*************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ "./packages/block-library/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ "@novablocks/core/frontend":
/*!***********************************************!*\
  !*** external ["novablocks","core/frontend"] ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["novablocks"]["core/frontend"]; }());

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