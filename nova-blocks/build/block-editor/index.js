this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["blockEditor"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-editor/build-module/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/block-editor/build-module/components/autocomplete-tokenfield/index.js":
/*!****************************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/autocomplete-tokenfield/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * An multi-selecting, api-driven autocomplete input suitable for use in block attributes.
 */

var AutocompleteTokenField = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(AutocompleteTokenField, _Component);

  var _super = _createSuper(AutocompleteTokenField);

  function AutocompleteTokenField(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AutocompleteTokenField);

    _this = _super.call(this, props);
    _this.state = {
      suggestions: [],
      validValues: {},
      loading: _this.isFetchingInfoOnLoad()
    };
    _this.debouncedUpdateSuggestions = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["debounce"])(_this.updateSuggestions, 500);
    return _this;
  }
  /**
   * If the component has tokens passed in props, it should fetch info after it mounts.
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AutocompleteTokenField, [{
    key: "isFetchingInfoOnLoad",
    value: function isFetchingInfoOnLoad() {
      var _this$props = this.props,
          tokens = _this$props.tokens,
          fetchSavedInfo = _this$props.fetchSavedInfo;
      return Boolean(tokens.length && fetchSavedInfo);
    }
  }, {
    key: "componentDidMount",
    value:
    /**
     * When the component loads, fetch information about the tokens so we can populate
     * the tokens with the correct labels.
     */
    function componentDidMount() {
      var _this2 = this;

      if (this.isFetchingInfoOnLoad()) {
        var _this$props2 = this.props,
            tokens = _this$props2.tokens,
            fetchSavedInfo = _this$props2.fetchSavedInfo;
        fetchSavedInfo(tokens).then(function (results) {
          var validValues = _this2.state.validValues;
          results.forEach(function (suggestion) {
            validValues[suggestion.value] = suggestion.label;
          });

          _this2.setState({
            validValues: validValues,
            loading: false
          });
        });
      }
    }
    /**
     * Clean up any unfinished autocomplete api call requests.
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      delete this.suggestionsRequest;
      this.debouncedUpdateSuggestions.cancel();
    }
    /**
     * Get a list of labels for input values.
     *
     * @param {Array} values Array of values (ids, etc.).
     * @return {Array} array of valid labels corresponding to the values.
     */

  }, {
    key: "getLabelsForValues",
    value: function getLabelsForValues(values) {
      var validValues = this.state.validValues;
      return values.reduce(function (accumulator, value) {
        return validValues[value] ? [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(accumulator), [validValues[value]]) : accumulator;
      }, []);
    }
    /**
     * Get a list of values for input labels.
     *
     * @param {Array} labels Array of labels from the tokens.
     * @return {Array} Array of valid values corresponding to the labels.
     */

  }, {
    key: "getValuesForLabels",
    value: function getValuesForLabels(labels) {
      var validValues = this.state.validValues;
      return labels.map(function (label) {
        return Object.keys(validValues).find(function (key) {
          return validValues[key] === label;
        });
      });
    }
    /**
     * Refresh the autocomplete dropdown.
     *
     * @param {string} input Input to fetch suggestions for
     */

  }, {
    key: "updateSuggestions",
    value: function updateSuggestions(input) {
      var _this3 = this;

      var fetchSuggestions = this.props.fetchSuggestions;

      if (!fetchSuggestions) {
        return;
      }

      this.setState({
        loading: true
      }, function () {
        var request = fetchSuggestions(input);
        request.then(function (suggestions) {
          // A fetch Promise doesn't have an abort option. It's mimicked by
          // comparing the request reference in on the instance, which is
          // reset or deleted on subsequent requests or unmounting.
          if (_this3.suggestionsRequest !== request) {
            return;
          }

          var validValues = _this3.state.validValues;
          var currentSuggestions = [];
          suggestions.forEach(function (suggestion) {
            currentSuggestions.push(suggestion.label);
            validValues[suggestion.value] = suggestion.label;
          });

          _this3.setState({
            suggestions: currentSuggestions,
            validValues: validValues,
            loading: false
          });
        }).catch(function () {
          if (_this3.suggestionsRequest === request) {
            _this3.setState({
              loading: false
            });
          }
        });
        _this3.suggestionsRequest = request;
      });
    }
    /**
     * When a token is selected, we need to convert the string label into a recognized value suitable for saving as an attribute.
     *
     * @param {Array} tokenStrings An array of token label strings.
     */

  }, {
    key: "handleOnChange",
    value: function handleOnChange(tokenStrings) {
      var onChange = this.props.onChange;
      onChange(this.getValuesForLabels(tokenStrings));
    }
    /**
     * To populate the tokens, we need to convert the values into a human-readable label.
     *
     * @return {Array} An array of token label strings.
     */

  }, {
    key: "getTokens",
    value: function getTokens() {
      var tokens = this.props.tokens;
      return this.getLabelsForValues(tokens);
    }
    /**
     * Render.
     */

  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props3 = this.props,
          help = _this$props3.help,
          _this$props3$label = _this$props3.label,
          label = _this$props3$label === void 0 ? '' : _this$props3$label;
      var _this$state = this.state,
          suggestions = _this$state.suggestions,
          loading = _this$state.loading;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "autocomplete-tokenfield"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["FormTokenField"], {
        value: this.getTokens(),
        suggestions: suggestions,
        onChange: function onChange(tokens) {
          return _this4.handleOnChange(tokens);
        },
        onInputChange: function onInputChange(input) {
          return _this4.debouncedUpdateSuggestions(input);
        },
        label: label
      }), loading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Spinner"], null), help && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", {
        className: "autocomplete-tokenfield__help"
      }, help));
    }
  }]);

  return AutocompleteTokenField;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AutocompleteTokenField);


/***/ }),

/***/ "./packages/block-editor/build-module/components/block-vertical-alignment-toolbar/index.js":
/*!*************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/block-vertical-alignment-toolbar/index.js ***!
  \*************************************************************************************************/
/*! exports provided: BlockVerticalAlignmentToolbar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockVerticalAlignmentToolbar", function() { return BlockVerticalAlignmentToolbar; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _get_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../get-svg */ "./packages/block-editor/build-module/components/get-svg/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/viewport */ "@wordpress/viewport");
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */








var _createContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createContext"])({
  name: '',
  isSelected: false,
  focusedElement: null,
  setFocusedElement: function setFocusedElement() {},
  clientId: null
}),
    Consumer = _createContext.Consumer;

var BLOCK_ALIGNMENTS_CONTROLS = {
  top: {
    icon: Object(_get_svg__WEBPACK_IMPORTED_MODULE_3__["getIconSvg"])('alignTop'),
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Align Top', 'nova-blocks')
  },
  center: {
    icon: Object(_get_svg__WEBPACK_IMPORTED_MODULE_3__["getIconSvg"])('alignCenter'),
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Align Center', 'nova-blocks')
  },
  bottom: {
    icon: Object(_get_svg__WEBPACK_IMPORTED_MODULE_3__["getIconSvg"])('alignBottom'),
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Align Bottom', 'nova-blocks')
  }
};
var DEFAULT_CONTROLS = ['top', 'center', 'bottom'];
var DEFAULT_CONTROL = 'top';
function BlockVerticalAlignmentToolbar(_ref) {
  var isCollapsed = _ref.isCollapsed,
      value = _ref.value,
      onChange = _ref.onChange,
      _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? DEFAULT_CONTROLS : _ref$controls;

  function applyOrUnset(align) {
    return function () {
      return onChange(value === align ? undefined : align);
    };
  }

  var activeAlignment = BLOCK_ALIGNMENTS_CONTROLS[value];
  var defaultAlignmentControl = BLOCK_ALIGNMENTS_CONTROLS[DEFAULT_CONTROL];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ToolbarGroup"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Vertical Alignment', 'nova-blocks'),
    iscollapsed: isCollapsed,
    icon: activeAlignment ? activeAlignment.icon : defaultAlignmentControl.icon,
    controls: controls.map(function (control) {
      return _objectSpread(_objectSpread({}, BLOCK_ALIGNMENTS_CONTROLS[control]), {}, {
        isActive: value === control,
        onClick: applyOrUnset(control)
      });
    })
  });
} // @todo remove function declaration and use core method when exposed through the api

var withBlockEditContext = function withBlockEditContext(mapContextToProps) {
  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Consumer, null, function (context) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(OriginalComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, mapContextToProps(context, props)));
      });
    };
  }, 'withBlockEditContext');
};
/**
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/block-vertical-alignment-toolbar/README.md
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__["compose"])(withBlockEditContext(function (_ref2) {
  var clientId = _ref2.clientId;
  return {
    clientId: clientId
  };
}), Object(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_6__["withViewportMatch"])({
  isLargeViewport: 'medium'
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["withSelect"])(function (select, _ref3) {
  var clientId = _ref3.clientId,
      isLargeViewport = _ref3.isLargeViewport,
      isCollapsed = _ref3.isCollapsed;

  var _select = select('core/block-editor'),
      getBlockRootClientId = _select.getBlockRootClientId,
      getSettings = _select.getSettings;

  return {
    isCollapsed: isCollapsed || !isLargeViewport || !getSettings().hasFixedToolbar && getBlockRootClientId(clientId)
  };
}))(BlockVerticalAlignmentToolbar));


/***/ }),

/***/ "./packages/block-editor/build-module/components/card-fields-preview/index.js":
/*!************************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/card-fields-preview/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/dom */ "@wordpress/dom");
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../index */ "./packages/block-editor/build-module/index.js");






var CardFieldsPreview = function CardFieldsPreview(props) {
  var _props$attributes = props.attributes,
      metaAboveTitle = _props$attributes.metaAboveTitle,
      title = _props$attributes.title,
      subtitle = _props$attributes.subtitle,
      metaBelowTitle = _props$attributes.metaBelowTitle,
      description = _props$attributes.description,
      showMeta = _props$attributes.showMeta,
      showTitle = _props$attributes.showTitle,
      showSubtitle = _props$attributes.showSubtitle,
      showDescription = _props$attributes.showDescription,
      buttonText = _props$attributes.buttonText,
      showButtons = _props$attributes.showButtons;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["CardMeta"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    show: showMeta
  }), metaAboveTitle), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    show: showTitle
  }), title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["CardSubtitle"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    show: showSubtitle
  }), subtitle), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["CardMeta"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    show: showMeta
  }), metaBelowTitle), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["CardDescription"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    show: showDescription
  }), Object(_wordpress_dom__WEBPACK_IMPORTED_MODULE_2__["__unstableStripHTML"])(description)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["CardFooter"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    show: showButtons && !!buttonText
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["CardButton"], props, buttonText)));
};

/* harmony default export */ __webpack_exports__["default"] = (CardFieldsPreview);


/***/ }),

/***/ "./packages/block-editor/build-module/components/card/contents.js":
/*!************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/card/contents.js ***!
  \************************************************************************/
/*! exports provided: CardButton, CardTitle, CardSubtitle, CardMeta, CardDescription, CardFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardButton", function() { return CardButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTitle", function() { return CardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSubtitle", function() { return CardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardMeta", function() { return CardMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDescription", function() { return CardDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFooter", function() { return CardFooter; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_2__);




var CardButton = function CardButton(_ref) {
  var attributes = _ref.attributes,
      children = _ref.children;
  var buttonsStyle = attributes.buttonsStyle;
  var style = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var contentAlign = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_2__["getAlignFromMatrix"])(attributes === null || attributes === void 0 ? void 0 : attributes.contentPosition);
    var style = {
      justifyContent: 'center'
    };

    if (contentAlign[1] === 'left') {
      style.justifyContent = 'flex-start';
    }

    if (contentAlign[1] === 'right') {
      style.justifyContent = 'flex-end';
    }

    return style;
  }, [attributes]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-block-buttons",
    style: style
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-block-button is-style-".concat(buttonsStyle, " sm-color-signal-1 sm-palette-1 sm-palette--shifted sm-variation-1 sm-light"),
    "data-palette": "1",
    "data-palette-variation": "1",
    "data-color-signal": "1",
    "data-use-source-color-as-reference": "true"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    className: "wp-block-button__link"
  }, children)));
};

var withVisibilityAndPlaceholder = function withVisibilityAndPlaceholder(WrappedComponent) {
  return function (props) {
    var show = props.show,
        placeholder = props.placeholder;

    if (!show && !placeholder) {
      return null;
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WrappedComponent, props);
  };
};

var CardTitle = withVisibilityAndPlaceholder(function (props) {
  var attributes = props.attributes,
      placeholder = props.placeholder,
      children = props.children;
  var TitleTagName = "h".concat(attributes === null || attributes === void 0 ? void 0 : attributes.cardTitleLevel);
  var titleClassName = "has-".concat(attributes === null || attributes === void 0 ? void 0 : attributes.cardTitleFontSize, "-font-size");
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TitleTagName, {
    className: "nb-card__title ".concat(titleClassName)
  }, !placeholder ? children : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_1__["TextPlaceholder"], null));
});
var CardSubtitle = withVisibilityAndPlaceholder(function (props) {
  var attributes = props.attributes,
      placeholder = props.placeholder,
      children = props.children;
  var cardTitleLevel = attributes.cardTitleLevel;
  var SubTitleTagName = "h".concat(cardTitleLevel + 1);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SubTitleTagName, {
    className: "nb-card__subtitle"
  }, !placeholder ? children : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_1__["TextPlaceholder"], null));
});
var CardMeta = withVisibilityAndPlaceholder(function (props) {
  var placeholder = props.placeholder,
      children = props.children;

  if (!placeholder && !children) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "nb-card__meta is-style-meta"
  }, !placeholder ? children : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_1__["TextPlaceholder"], {
    rows: 1
  }));
});
var CardDescription = withVisibilityAndPlaceholder(function (props) {
  var placeholder = props.placeholder,
      children = props.children;
  var wrapperClassName = 'nb-card__description';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: wrapperClassName
  }, !placeholder ? children : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_1__["TextPlaceholder"], {
    rows: 3
  }));
});
var CardFooter = withVisibilityAndPlaceholder(function (props) {
  var placeholder = props.placeholder,
      children = props.children;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "nb-card__buttons"
  }, !placeholder ? children : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_1__["TextPlaceholder"], {
    rows: 1
  }));
});


/***/ }),

/***/ "./packages/block-editor/build-module/components/card/index.js":
/*!*********************************************************************!*\
  !*** ./packages/block-editor/build-module/components/card/index.js ***!
  \*********************************************************************/
/*! exports provided: CardButton, CardTitle, CardSubtitle, CardMeta, CardDescription, CardFooter, Card, CardContentWrapper, CardMediaWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContentWrapper", function() { return CardContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardMediaWrapper", function() { return CardMediaWrapper; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./packages/block-editor/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contents */ "./packages/block-editor/build-module/components/card/contents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardButton", function() { return _contents__WEBPACK_IMPORTED_MODULE_4__["CardButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardTitle", function() { return _contents__WEBPACK_IMPORTED_MODULE_4__["CardTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardSubtitle", function() { return _contents__WEBPACK_IMPORTED_MODULE_4__["CardSubtitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardMeta", function() { return _contents__WEBPACK_IMPORTED_MODULE_4__["CardMeta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardDescription", function() { return _contents__WEBPACK_IMPORTED_MODULE_4__["CardDescription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardFooter", function() { return _contents__WEBPACK_IMPORTED_MODULE_4__["CardFooter"]; });








var Card = function Card(props) {
  var media = props.media,
      attributes = props.attributes;
  var cardLayout = attributes.cardLayout,
      thumbnailAspectRatioString = attributes.thumbnailAspectRatioString,
      layoutStyle = attributes.layoutStyle,
      columns = attributes.columns,
      scrollingEffect = attributes.scrollingEffect;
  var defaultClassNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()("nb-supernova-item", "nb-supernova-item--layout-".concat(cardLayout), "nb-supernova-item--scrolling-effect-".concat(scrollingEffect), "nb-supernova-item--aspect-ratio-".concat(thumbnailAspectRatioString), Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["getColorSignalClassnames"])(attributes, true));
  var isLandscape = ['horizontal', 'horizontal-reverse'].includes(cardLayout);
  var extraClassNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()(defaultClassNames, "nb-grid__area--".concat(isLandscape ? 'landscape' : 'portrait'), Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["getAreaClassnameByWidthRatio"])(1 / columns));
  var classNames = layoutStyle !== 'parametric' ? extraClassNames : defaultClassNames;
  var children = _wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(props.children);
  var mediaChildren = children.filter(function (child) {
    return child.type === CardMediaWrapper;
  });
  var passedChildren = children.filter(function (child) {
    return child.type !== CardMediaWrapper && child.type !== CardContentWrapper;
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classNames,
    style: props.style
  }, !mediaChildren.length && media && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(CardMediaWrapper, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    media: media
  }, props)), !!mediaChildren.length && mediaChildren, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(CardContentWrapper, props, passedChildren));
};
var CardContentWrapper = function CardContentWrapper(props) {
  var attributes = props.attributes;
  var align = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["getAlignFromMatrix"])(attributes === null || attributes === void 0 ? void 0 : attributes.contentPosition);
  var contentClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()("nb-supernova-item__content", "nb-supernova-item__content--valign-".concat(align[0]), "nb-supernova-item__content--halign-".concat(align[1]));
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: contentClassName
  }, props.children);
};
var CardMediaWrapper = function CardMediaWrapper(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "nb-supernova-item__media-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "nb-supernova-item__media-aspect-ratio"
  }, props.children));
};


/***/ }),

/***/ "./packages/block-editor/build-module/components/color-picker/index.js":
/*!*****************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/color-picker/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./packages/block-editor/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _novablocks_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/icons */ "@novablocks/icons");
/* harmony import */ var _novablocks_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_icons__WEBPACK_IMPORTED_MODULE_3__);






var ColorPicker = function ColorPicker(props) {
  var onChange = props.onChange,
      options = props.options,
      selected = props.selected,
      favorite = props.favorite;
  var icon = favorite ? 'star' : 'tick';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "components-base-control color-palette-picker"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "color-palette-picker__palettes"
  }, options.map(function (option, index) {
    var value = option.value,
        data = option.data,
        colors = option.colors;
    var gradientId = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
    var isSelected = "".concat(selected) === "".concat(value);
    var colorClassnames = classnames__WEBPACK_IMPORTED_MODULE_1___default()("color-palette-picker__color", {
      "color-palette-picker__color--favorite": isSelected && favorite
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      key: 'color_palette_picker_palette_' + index,
      className: colorClassnames,
      style: {
        color: colors[0]
      },
      onClick: function onClick() {
        onChange(value);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      className: "color-palette-picker__color-svg",
      width: "48",
      height: "48",
      viewBox: "0 0 48 48"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: gradientId,
      x1: "0%",
      y1: "0%",
      x2: "100%",
      y2: "0%"
    }, colors.map(function (color, index, colors) {
      var style = {
        stopColor: color,
        stopOpacity: 1
      };
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        key: 'color_palette_picker_palette_color_' + index
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
        offset: "".concat(index * 100 / colors.length, "%"),
        style: style
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
        offset: "".concat((index + 1) * 100 / colors.length, "%"),
        style: style
      }));
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      className: "color-palette-picker__color-dash",
      stroke: "none",
      fill: "none",
      r: "20",
      cx: "24",
      cy: "24"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      className: "color-palette-picker__color-fill",
      fill: "url(#".concat(gradientId, ")"),
      r: "17",
      cx: "24",
      cy: "24"
    })), isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "color-palette-picker__tick",
      dangerouslySetInnerHTML: {
        __html: Object(_novablocks_icons__WEBPACK_IMPORTED_MODULE_3__["getIcon"])(icon)
      }
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorPicker);


/***/ }),

/***/ "./packages/block-editor/build-module/components/controls-group/index.js":
/*!*******************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/controls-group/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);



var ControlsGroup = function ControlsGroup(props) {
  var className = 'novablocks-controls-group';
  var children = _wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(props.children);

  if (props.className) {
    className = "".concat(className, " ").concat(props.className);
  }

  if (!children.length) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, !!props.title && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "novablocks-controls-group__title"
  }, props.title), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (ControlsGroup);


/***/ }),

/***/ "./packages/block-editor/build-module/components/controls-sections/controls-sections-slot-fill.js":
/*!********************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/controls-sections/controls-sections-slot-fill.js ***!
  \********************************************************************************************************/
/*! exports provided: ControlsSectionsSlot, ControlsSectionsFill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsSectionsSlot", function() { return ControlsSectionsSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsSectionsFill", function() { return ControlsSectionsFill; });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var ControlsSectionsSlotFill = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["createSlotFill"])('ControlsSections');
var ControlsSectionsSlot = ControlsSectionsSlotFill.Slot;
var ControlsSectionsFill = ControlsSectionsSlotFill.Fill;



/***/ }),

/***/ "./packages/block-editor/build-module/components/controls-sections/cube.js":
/*!*********************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/controls-sections/cube.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var Cube = function Cube(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "novablocks-sections__cube"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "novablocks-sections__cube-face novablocks-sections__cube-face--top"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "novablocks-sections__cube-face novablocks-sections__cube-face--left"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "novablocks-sections__cube-face novablocks-sections__cube-face--right"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Cube);


/***/ }),

/***/ "./packages/block-editor/build-module/components/controls-sections/drawer-content-slot-fill.js":
/*!*****************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/controls-sections/drawer-content-slot-fill.js ***!
  \*****************************************************************************************************/
/*! exports provided: DrawerContentSlot, DrawerContentFill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContentSlot", function() { return DrawerContentSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContentFill", function() { return DrawerContentFill; });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var DrawerContentSlotFill = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["createSlotFill"])('DrawerContent');
var DrawerContentSlot = DrawerContentSlotFill.Slot;
var DrawerContentFill = DrawerContentSlotFill.Fill;



/***/ }),

/***/ "./packages/block-editor/build-module/components/controls-sections/index.js":
/*!**********************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/controls-sections/index.js ***!
  \**********************************************************************************/
/*! exports provided: ControlsTab, ControlsSections, ControlsSection, ControlsDrawerContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsTab", function() { return ControlsTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsSections", function() { return ControlsSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsSection", function() { return ControlsSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsDrawerContent", function() { return ControlsDrawerContent; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./packages/block-editor/build-module/components/controls-sections/utils.js");
/* harmony import */ var _controls_sections_slot_fill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls-sections-slot-fill */ "./packages/block-editor/build-module/components/controls-sections/controls-sections-slot-fill.js");
/* harmony import */ var _drawer_content_slot_fill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drawer-content-slot-fill */ "./packages/block-editor/build-module/components/controls-sections/drawer-content-slot-fill.js");
/* harmony import */ var _cube__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cube */ "./packages/block-editor/build-module/components/controls-sections/cube.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs */ "./packages/block-editor/build-module/components/controls-sections/tabs.js");
/* harmony import */ var _filters_with_controls_visibility_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../filters/with-controls-visibility/context */ "./packages/block-editor/build-module/filters/with-controls-visibility/context.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */









var ControlsSectionsComponent = function ControlsSectionsComponent(props) {
  var sections = props.sections;
  var advancedButton = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return document.querySelector('.block-editor-block-inspector__advanced');
  }, []);
  var advancedWrapper = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return !!advancedButton && advancedButton.parentNode;
  });
  var visibilityContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_filters_with_controls_visibility_context__WEBPACK_IMPORTED_MODULE_10__["default"]);

  if (!!advancedWrapper) {
    advancedWrapper.style.setProperty('transition', 'opacity .3s ease-out');
  }

  var onOpen = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!!(advancedWrapper !== null && advancedWrapper !== void 0 && advancedWrapper.style)) {
      advancedWrapper.style.setProperty('opacity', 1);
      requestAnimationFrame(function () {
        advancedWrapper.style.setProperty('opacity', 0);
      });
    }
  }, [advancedWrapper]);
  var onClose = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!!(advancedWrapper !== null && advancedWrapper !== void 0 && advancedWrapper.style)) {
      advancedWrapper.addEventListener('transitionend', function () {
        advancedWrapper.style.removeProperty('height');
      }, {
        once: true
      });
      advancedWrapper.style.setProperty('opacity', 1);
    }
  }, [advancedWrapper]);
  var groups = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"])(sections, function (section) {
    return !!section.props.group ? section.props.group : '';
  });
  var getCompiledTabs = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (section) {
    var children = section.props.children;
    var tabs = _wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children).filter(function (child) {
      var _child$props;

      var id = child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.id;
      var show = true;

      if (id && typeof visibilityContext[id] !== "undefined") {
        show = visibilityContext[id];
      }

      return child.type === ControlsTab && show;
    });
    var orderedTabs = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["orderBy"])(tabs, function (tab) {
      return tab.props.priority || 0;
    }, ['desc']);
    var groupedTabs = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"])(orderedTabs, function (tab) {
      return tab.props.label;
    });
    return Object.keys(groupedTabs).map(function (key) {
      var group = groupedTabs[key];
      return {
        props: {
          label: key,
          children: group.reduce(function (accumulator, tab) {
            return accumulator.concat(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(tab.props.children));
          }, [])
        }
      };
    });
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "novablocks-sections"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_1__["Drawers"], {
    onOpen: onOpen,
    onClose: onClose
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_1__["DrawerListBefore"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "novablocks-sections__header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "novablocks-sections__title"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Design Customization', 'nova-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_cube__WEBPACK_IMPORTED_MODULE_8__["default"], null))), Object.keys(groups).sort().map(function (key) {
    var sections = groups[key];
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_1__["DrawerList"], {
      title: key,
      key: 'drawer_' + key
    }, sections.map(function (section, index) {
      var _section$props = section.props,
          id = _section$props.id,
          label = _section$props.label,
          order = _section$props.order;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
        key: 'drawer_' + key + '_section_' + id,
        id: id,
        title: label,
        order: order
      });
    }));
  }), Object.keys(groups).sort().map(function (key) {
    var sections = groups[key];
    return sections.map(function (section, index) {
      var tabs = getCompiledTabs(section);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_1__["DrawerPanel"], {
        key: 'drawer_panel_' + key + '_' + index,
        id: section.props.id
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_tabs__WEBPACK_IMPORTED_MODULE_9__["ActiveSectionTabs"], {
        title: section.props.label,
        tabs: tabs
      }));
    });
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_1__["DrawerListAfter"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_drawer_content_slot_fill__WEBPACK_IMPORTED_MODULE_7__["DrawerContentSlot"], null))));
};

var ControlsSections = function ControlsSections(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls_sections_slot_fill__WEBPACK_IMPORTED_MODULE_6__["ControlsSectionsSlot"], null, function (fills) {
    var sections = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getSectionsFromFills"])(fills);

    if (!sections.length) {
      return null;
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ControlsSectionsComponent, {
      sections: sections
    });
  });
};

var ControlsTab = function ControlsTab(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    label: props.label
  }, props.children);
};

var ControlsSection = function ControlsSection(props) {
  var _useBlockEditContext = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockEditContext"])(),
      isSelected = _useBlockEditContext.isSelected;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls_sections_slot_fill__WEBPACK_IMPORTED_MODULE_6__["ControlsSectionsFill"], null, isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", props));
};

var ControlsDrawerContent = function ControlsDrawerContent(props) {
  var _useBlockEditContext2 = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockEditContext"])(),
      isSelected = _useBlockEditContext2.isSelected;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_drawer_content_slot_fill__WEBPACK_IMPORTED_MODULE_7__["DrawerContentFill"], null, isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", props));
};




/***/ }),

/***/ "./packages/block-editor/build-module/components/controls-sections/tabs.js":
/*!*********************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/controls-sections/tabs.js ***!
  \*********************************************************************************/
/*! exports provided: ActiveSectionTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveSectionTabs", function() { return ActiveSectionTabs; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./packages/block-editor/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../index */ "./packages/block-editor/build-module/index.js");
/* harmony import */ var _cube__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cube */ "./packages/block-editor/build-module/components/controls-sections/cube.js");




/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




var ACCENT_COLORS = ['rgb(142,101,192)', 'rgb(0,202,182)', 'rgb(222,22,81)'];

var getTabAccentColor = function getTabAccentColor(label) {
  if (Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Presets', 'nova-blocks') === label) {
    return ACCENT_COLORS[0];
  }

  if (Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Customize', 'nova-blocks') === label) {
    return ACCENT_COLORS[1];
  }

  return ACCENT_COLORS[2];
};

var getTabClassName = function getTabClassName(label, activeTabLabel) {
  return classnames__WEBPACK_IMPORTED_MODULE_3___default()('novablocks-sections__tab', {
    'novablocks-sections__tab--active': activeTabLabel === label
  });
};

var ActiveSectionTabs = function ActiveSectionTabs(props) {
  var title = props.title,
      tabs = props.tabs,
      goBack = props.goBack,
      updateHeight = props.updateHeight,
      isActive = props.isActive;

  if (!tabs.length) {
    return null;
  }

  var _useMemoryState = Object(_index__WEBPACK_IMPORTED_MODULE_6__["useMemoryState"])('activeTab', tabs[0].props.label),
      _useMemoryState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMemoryState, 2),
      activeTabLabel = _useMemoryState2[0],
      setActiveTabLabel = _useMemoryState2[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var existingTab = tabs.some(function (tab) {
      return activeTabLabel === tab.props.label;
    });

    if (isActive && !existingTab) {
      setActiveTabLabel(tabs[0].props.label);
    }
  }, [isActive, activeTabLabel, tabs]);
  var activeTabIndex = tabs.findIndex(function (tab) {
    return tab.props.label === activeTabLabel;
  });
  var activeTab = tabs[activeTabIndex];
  var accentColor = getTabAccentColor(activeTabLabel);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(updateHeight, [activeTabLabel]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "novablocks-section__controls",
    style: {
      '--nb-section-controls-accent': accentColor
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "novablocks-sections__controls-header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "novablocks-sections__controls-back",
    onClick: goBack,
    key: 'tabs-back-button'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "novablocks-sections__controls-title",
    key: 'tabs-title'
  }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_cube__WEBPACK_IMPORTED_MODULE_7__["default"], null)), tabs.length > 1 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 'novablocks-sections__tabs'
  }, tabs.map(function (tab, index) {
    var label = tab.props.label;
    var className = getTabClassName(label, activeTabLabel);

    var onClick = function onClick() {
      setActiveTabLabel(label);
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: className,
      onClick: onClick,
      key: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__["cleanForSlug"])(label) + '_section_tab_' + index
    }, label);
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(TabContent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    activeTab: activeTab
  }, props)));
};

var TabContent = function TabContent(props) {
  var activeTab = props.activeTab,
      updateHeight = props.updateHeight;

  var _useResizeObserver = Object(_index__WEBPACK_IMPORTED_MODULE_6__["useResizeObserver"])(),
      _useResizeObserver2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useResizeObserver, 2),
      ref = _useResizeObserver2[0],
      entry = _useResizeObserver2[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(updateHeight, [entry]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 'novablocks-sections__tab-content',
    ref: ref
  }, !!activeTab && activeTab.props.children);
};




/***/ }),

/***/ "./packages/block-editor/build-module/components/controls-sections/utils.js":
/*!**********************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/controls-sections/utils.js ***!
  \**********************************************************************************/
/*! exports provided: mergeChildrenProps, getSectionsFromFills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildrenProps", function() { return mergeChildrenProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSectionsFromFills", function() { return getSectionsFromFills; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var mergeChildrenProps = function mergeChildrenProps(children1, children2) {
  if (typeof children1 === "undefined") {
    return children2;
  }

  if (typeof children2 === "undefined") {
    return children1;
  }

  var children1Array = Array.isArray(children1) ? children1 : [children1];
  var children2Array = Array.isArray(children2) ? children2 : [children2];
  return children1Array.concat(children2Array);
};
var getSectionsFromFills = function getSectionsFromFills(fills) {
  var sections = []; // Merge sections with the same label

  fills.forEach(function (fill) {
    var index = sections.findIndex(function (section) {
      return section.props.id === fill[0].props.id;
    });

    if (index === -1) {
      sections.push({
        props: fill[0].props
      });
    } else {
      sections.splice(index, 1, {
        props: _objectSpread(_objectSpread({}, sections[index].props), {}, {
          children: mergeChildrenProps(sections[index].props.children, fill[0].props.children)
        })
      });
    }
  });
  return sections;
};


/***/ }),

/***/ "./packages/block-editor/build-module/components/custom-menu-item/index.js":
/*!*********************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/custom-menu-item/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);

var _excluded = ["help", "children"];



var CustomMenuItem = function CustomMenuItem(props) {
  var help = props.help,
      children = props.children,
      passedProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], passedProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "novablocks-navigable-menu__item-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    className: "novablocks-navigable-menu__item-label"
  }, children), help && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    className: "novablocks-navigable-menu__item-help"
  }, help)));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomMenuItem);


/***/ }),

/***/ "./packages/block-editor/build-module/components/drawer/index.js":
/*!***********************************************************************!*\
  !*** ./packages/block-editor/build-module/components/drawer/index.js ***!
  \***********************************************************************/
/*! exports provided: Drawer, Drawers, DrawerList, DrawerListBefore, DrawerListAfter, DrawerPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return Drawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drawers", function() { return Drawers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerList", function() { return DrawerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerListBefore", function() { return DrawerListBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerListAfter", function() { return DrawerListAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerPanel", function() { return DrawerPanel; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./packages/block-editor/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../index */ "./packages/block-editor/build-module/index.js");








var Drawers = function Drawers(ownProps) {
  var children = ownProps.children;
  var childrenArray = _wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(children);
  var drawerLists = childrenArray.filter(function (child) {
    return child.type === DrawerList;
  });
  var drawerPanels = childrenArray.filter(function (child) {
    return child.type === DrawerPanel;
  });
  var beforeChildren = children.filter(function (child) {
    return child.type === DrawerListBefore;
  });

  var _useMemoryState = Object(_index__WEBPACK_IMPORTED_MODULE_5__["useMemoryState"])('drawerOpen'),
      _useMemoryState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMemoryState, 2),
      open = _useMemoryState2[0],
      setOpen = _useMemoryState2[1];

  var _useMemoryState3 = Object(_index__WEBPACK_IMPORTED_MODULE_5__["useMemoryState"])('drawerActiveId'),
      _useMemoryState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMemoryState3, 2),
      lastActiveDrawerId = _useMemoryState4[0],
      setLastActiveDrawerId = _useMemoryState4[1];

  var _useMemoryState5 = Object(_index__WEBPACK_IMPORTED_MODULE_5__["useMemoryState"])('drawerHeight', 0),
      _useMemoryState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMemoryState5, 2),
      wrapperHeight = _useMemoryState6[0],
      setWrapperHeight = _useMemoryState6[1];

  var existingDrawer = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return drawerLists.some(function (drawerList) {
      var drawers = getDrawersFromList(drawerList);
      return drawers.some(function (drawer) {
        var _drawer$props;

        return (drawer === null || drawer === void 0 ? void 0 : (_drawer$props = drawer.props) === null || _drawer$props === void 0 ? void 0 : _drawer$props.id) === lastActiveDrawerId;
      });
    });
  }, [drawerLists]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(function () {
    if (!existingDrawer) {
      setOpen(false);
    }
  }, [existingDrawer]);
  var ref = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(function () {
    return new WeakMap();
  }),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 1),
      refMap = _useState2[0];

  var noop = function noop() {};

  var onOpen = typeof ownProps.onOpen === 'function' ? ownProps.onOpen : noop;
  var onClose = typeof ownProps.onClose === 'function' ? ownProps.onClose : noop;

  var getDrawerListHeight = function getDrawerListHeight() {
    return !!ref.current ? ref.current.clientHeight : 0;
  };

  var getActiveDrawerTitleHeight = function getActiveDrawerTitleHeight() {
    var drawerPanel = drawerPanels.find(function (drawerPanel) {
      return drawerPanel.props.id === lastActiveDrawerId;
    });
    var activeRef = refMap.get(drawerPanel);
    return !!activeRef ? activeRef.clientHeight : 0;
  };

  var updateHeight = function updateHeight() {
    var drawerListHeight = getDrawerListHeight();
    var drawerPanelHeight = getActiveDrawerTitleHeight(); // If the drawer is open, the height of the wrapper should be the height of the drawer panel.

    setWrapperHeight((!!open ? drawerPanelHeight : drawerListHeight) || 'auto');
  }; // This hook updates the height of the collapsible to match the height of the content


  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(updateHeight, [open]); // Translate the drawer to the left when the menu button is clicked.

  var transform = open ? 'translate3d(-100%,0,0)' : 'translate3d(0%,0,0)'; // keep track of number of drawers in previous drawerLists

  var totalDrawers = 0;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "novablocks-drawers",
    style: {
      height: wrapperHeight
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "novablocks-drawers__wrap",
    style: {
      transform: transform
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "novablocks-drawers__front",
    ref: ref
  }, beforeChildren, drawerLists.map(function (drawerList, drawerListIndex) {
    var _drawerList$props;

    var drawers = getDrawersFromList(drawerList);
    var title = drawerList === null || drawerList === void 0 ? void 0 : (_drawerList$props = drawerList.props) === null || _drawerList$props === void 0 ? void 0 : _drawerList$props.title;
    totalDrawers = totalDrawers + drawers.length;
    var orderedDrawers = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["orderBy"])(drawers, function (drawer) {
      return drawer.props.order || 100;
    }, ['asc']);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "novablocks-drawers__list",
      key: "drawer_list_".concat(drawerListIndex)
    }, title && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "novablocks-drawers__list-title"
    }, title), orderedDrawers.map(function (orderedDrawer, drawerIndex) {
      var props = orderedDrawer.props;
      var id = props.id;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Drawer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        key: "drawer_".concat(drawerListIndex, "-").concat(drawerIndex),
        onClick: function onClick() {
          setLastActiveDrawerId(id);
          setOpen(true);
          onOpen();
        }
      }));
    }));
  })), drawerPanels.map(function (drawerPanel, index) {
    var className = classnames__WEBPACK_IMPORTED_MODULE_3___default()('novablocks-drawers__panel', {
      'novablocks-drawers__panel--hidden': lastActiveDrawerId !== drawerPanel.props.id
    });

    if (lastActiveDrawerId !== drawerPanel.props.id) {
      return null;
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      key: "drawer_panel_".concat(drawerPanel.props.id),
      className: className,
      ref: function ref(_ref) {
        return _ref && refMap.set(drawerPanel, _ref);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(DrawerWithProps, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, drawerPanel.props, {
      isActive: lastActiveDrawerId === drawerPanel.props.id,
      goBack: function goBack() {
        setOpen(false);
        onClose();
      },
      updateHeight: updateHeight
    })));
  })));
};

var DrawerWithProps = function DrawerWithProps(props) {
  var goBack = props.goBack,
      isActive = props.isActive,
      updateHeight = props.updateHeight;
  return addPropsToChildren(props.children, {
    goBack: goBack,
    isActive: isActive,
    updateHeight: updateHeight
  });
};

var addPropsToChildren = function addPropsToChildren(children, props) {
  if (typeof children === "undefined") {
    return children;
  }

  if (Array.isArray(children)) {
    return children.map(function (child) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(child, props);
    });
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(children, props);
};

var getDrawersFromList = function getDrawersFromList(drawerList) {
  var _drawerList$props2;

  var children = drawerList === null || drawerList === void 0 ? void 0 : (_drawerList$props2 = drawerList.props) === null || _drawerList$props2 === void 0 ? void 0 : _drawerList$props2.children;

  if (!Array.isArray(children)) {
    return [];
  }

  return children.filter(function (child) {
    return child.type === Drawer;
  });
};

var DrawerList = function DrawerList(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 'novablocks-drawers__list'
  }, props.children);
};

var DrawerPanel = function DrawerPanel(props) {
  return props.children;
};

var DrawerListBefore = function DrawerListBefore(props) {
  return props.children;
};

var DrawerListAfter = function DrawerListAfter(props) {
  return props.children;
};

var Drawer = function Drawer(props) {
  var title = props.title,
      onClick = props.onClick;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 'novablocks-drawer',
    onClick: onClick
  }, title);
};




/***/ }),

/***/ "./packages/block-editor/build-module/components/duotone-picker/index.js":
/*!*******************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/duotone-picker/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./packages/block-editor/build-module/components/index.js");




var CustomDuotoneSelect = function CustomDuotoneSelect(props) {
  var options = props.options;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'Duotones',
    options: options,
    onChange: function onChange(value) {},
    selected: 1
  }, props));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomDuotoneSelect);


/***/ }),

/***/ "./packages/block-editor/build-module/components/font-size-picker/index.js":
/*!*********************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/font-size-picker/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




var FONT_SIZE_OPTIONS = [{
  value: 'smallest',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Smallest', 'nova-blocks')
}, {
  value: 'smaller',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Smaller', 'nova-blocks')
}, {
  value: 'normal',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Normal', 'nova-blocks')
}, {
  value: 'larger',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Larger', 'nova-blocks')
}, {
  value: 'largest',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Largest', 'nova-blocks')
}];
var DEFAULT_FONT_SIZE = 'normal';

var FontSizePicker = function FontSizePicker(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Font Size', 'nova-blocks'),
    options: FONT_SIZE_OPTIONS
  }, props));
};

FontSizePicker.DEFAULT_FONT_SIZE = DEFAULT_FONT_SIZE;
FontSizePicker.FONT_SIZE_OPTIONS = FONT_SIZE_OPTIONS;
/* harmony default export */ __webpack_exports__["default"] = (FontSizePicker);


/***/ }),

/***/ "./packages/block-editor/build-module/components/gallery-options/index.js":
/*!********************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/gallery-options/index.js ***!
  \********************************************************************************/
/*! exports provided: GalleryPlaceholder, GalleryPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPlaceholder", function() { return GalleryPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPreview", function() { return GalleryPreview; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */



var ALLOWED_MEDIA_TYPES = ['image'];

var GalleryPlaceholder = function GalleryPlaceholder(props) {
  var galleryImages = props.attributes.galleryImages,
      onSelectImages = props.onSelectImages;
  var hasImages = !!galleryImages.length;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["MediaPlaceholder"], {
    accept: "image/*",
    addToGallery: hasImages,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    labels: {
      title: '',
      instructions: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Drag images, upload new ones or select files from your library.', 'nova-blocks')
    },
    multiple: true,
    onSelect: onSelectImages,
    value: hasImages ? galleryImages : undefined
  });
};

var GalleryPreview = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(GalleryPreview, _Component);

  var _super = _createSuper(GalleryPreview);

  function GalleryPreview() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GalleryPreview);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GalleryPreview, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          galleryImages = _this$props.galleryImages,
          selected = _this$props.selected,
          onSelectImage = _this$props.onSelectImage;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("ul", {
        className: "novablocks-slideshow__gallery-edit"
      }, galleryImages.map(function (img, index) {
        var classes = ['novablocks-slideshow__gallery-item'];

        if (selected === index) {
          classes.push('novablocks-slideshow__gallery-item--active');
        }

        var thumbnail = false;

        if ('video' === img.type) {
          var _img$thumb;

          thumbnail = img === null || img === void 0 ? void 0 : (_img$thumb = img.thumb) === null || _img$thumb === void 0 ? void 0 : _img$thumb.src;
          classes.push('novablocks-slideshow__gallery-item--video');
        } else {
          var _img$sizes, _img$sizes$novablocks, _img$sizes2, _img$sizes2$thumbnail, _img$sizes3, _img$sizes3$novablock, _img$sizes4, _img$sizes4$large, _img$sizes5, _img$sizes5$novablock, _img$sizes6, _img$sizes6$full;

          thumbnail = (img === null || img === void 0 ? void 0 : (_img$sizes = img.sizes) === null || _img$sizes === void 0 ? void 0 : (_img$sizes$novablocks = _img$sizes.novablocks_tiny) === null || _img$sizes$novablocks === void 0 ? void 0 : _img$sizes$novablocks.url) || (img === null || img === void 0 ? void 0 : (_img$sizes2 = img.sizes) === null || _img$sizes2 === void 0 ? void 0 : (_img$sizes2$thumbnail = _img$sizes2.thumbnail) === null || _img$sizes2$thumbnail === void 0 ? void 0 : _img$sizes2$thumbnail.url) || (img === null || img === void 0 ? void 0 : (_img$sizes3 = img.sizes) === null || _img$sizes3 === void 0 ? void 0 : (_img$sizes3$novablock = _img$sizes3.novablocks_large) === null || _img$sizes3$novablock === void 0 ? void 0 : _img$sizes3$novablock.url) || (img === null || img === void 0 ? void 0 : (_img$sizes4 = img.sizes) === null || _img$sizes4 === void 0 ? void 0 : (_img$sizes4$large = _img$sizes4.large) === null || _img$sizes4$large === void 0 ? void 0 : _img$sizes4$large.url) || (img === null || img === void 0 ? void 0 : (_img$sizes5 = img.sizes) === null || _img$sizes5 === void 0 ? void 0 : (_img$sizes5$novablock = _img$sizes5.novablocks_huge) === null || _img$sizes5$novablock === void 0 ? void 0 : _img$sizes5$novablock.url) || (img === null || img === void 0 ? void 0 : (_img$sizes6 = img.sizes) === null || _img$sizes6 === void 0 ? void 0 : (_img$sizes6$full = _img$sizes6.full) === null || _img$sizes6$full === void 0 ? void 0 : _img$sizes6$full.url) || (img === null || img === void 0 ? void 0 : img.url);
        }

        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", {
          key: 'gallery_image_' + index,
          onClick: function onClick() {
            onSelectImage(index);
          }
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          className: classes.join(' ')
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
          src: thumbnail,
          alt: ""
        })));
      }));
    }
  }]);

  return GalleryPreview;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);




/***/ }),

/***/ "./packages/block-editor/build-module/components/get-placeholder-images/index.js":
/*!***************************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/get-placeholder-images/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unsplash-js */ "./packages/block-editor/node_modules/unsplash-js/dist/unsplash-js.esm.js");



var APP_NAME = 'Nova Blocks';
var COLLECTION_ID = '10606015';
var URL_PARAMS = encodeURI("utm_source=".concat(APP_NAME, "&utm_medium=referral"));

var PlaceholderImagesCollection = /*#__PURE__*/function () {
  function PlaceholderImagesCollection() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PlaceholderImagesCollection);

    this.fetchedImages = false;
    this.images = [];
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PlaceholderImagesCollection, [{
    key: "fetch",
    value: function fetch() {
      var _window,
          _window$pixcare,
          _window$pixcare$theme,
          _this = this;

      var normalize = this.normalize.bind(this);
      var apiKey = (_window = window) === null || _window === void 0 ? void 0 : (_window$pixcare = _window.pixcare) === null || _window$pixcare === void 0 ? void 0 : (_window$pixcare$theme = _window$pixcare.themeConfig) === null || _window$pixcare$theme === void 0 ? void 0 : _window$pixcare$theme.unsplashApiKey;

      if (!apiKey) {
        this.fetchedImages = true;
        return [];
      }

      this.api = Object(unsplash_js__WEBPACK_IMPORTED_MODULE_2__["createApi"])({
        accessKey: apiKey
      });
      return this.api.collections.getPhotos({
        collectionId: COLLECTION_ID
      }).then(function (result) {
        if (result.errors) {
          console.log('error occurred: ', result.errors[0]);
        } else {
          var _result$response = result.response,
              photos = _result$response.results,
              total = _result$response.total;
          _this.images = photos.map(normalize);
          return _this.images;
        }
      }).finally(function () {
        _this.fetchedImages = true;
      });
    }
  }, {
    key: "get",
    value: function get() {
      if (this.fetchedImages) {
        return this.images;
      }

      return this.fetch();
    }
  }, {
    key: "normalize",
    value: function normalize(photo) {
      var _this2 = this;

      return {
        id: photo.id,
        url: photo.urls.regular,
        type: 'image',
        width: photo.width,
        height: photo.height,
        sizes: {
          full: {
            url: photo.urls.full,
            width: photo.width,
            height: photo.height
          },
          large: {
            url: photo.urls.regular
          },
          medium: {
            url: photo.urls.small
          },
          thumbnail: {
            url: photo.urls.thumb
          },
          novablocks_huge: {
            url: photo.urls.regular
          },
          novablocks_large: {
            url: photo.urls.regular
          },
          novablocks_medium: {
            url: photo.urls.small
          },
          novablocks_tiny: {
            url: photo.urls.thumb
          }
        },
        title: photo.description,
        caption: "<p class=\"credits\">Photo by <a target=\"_blank\" href=\"".concat(photo.user.links.html, "?").concat(URL_PARAMS, "\">").concat(photo.user.name, "</a> on <a target=\"_blank\" href=\"https://unsplash.com?").concat(URL_PARAMS, "\">Unsplash</a></p>"),
        download: function download() {
          _this2.api.photos.trackDownload({
            downloadLocation: photo.links.download_location
          });
        }
      };
    }
  }]);

  return PlaceholderImagesCollection;
}();

var instance = new PlaceholderImagesCollection();
/* harmony default export */ __webpack_exports__["default"] = (instance.get.bind(instance));


/***/ }),

/***/ "./packages/block-editor/build-module/components/get-svg/index.js":
/*!************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/get-svg/index.js ***!
  \************************************************************************/
/*! exports provided: getSvg, getIconSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSvg", function() { return getSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIconSvg", function() { return getIconSvg; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/icons */ "@novablocks/icons");
/* harmony import */ var _novablocks_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_icons__WEBPACK_IMPORTED_MODULE_1__);



var getSvg = function getSvg(svg) {
  if (svg !== null && svg !== void 0 && svg.viewBox && svg !== null && svg !== void 0 && svg.id) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      className: 'novablocks-icon',
      viewBox: svg.viewBox
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("use", {
      className: 'novablocks-icon-symbol',
      xlinkHref: "#".concat(svg.id)
    }));
  }

  return '';
};

var getIconSvg = function getIconSvg(iconName) {
  var svg = _novablocks_icons__WEBPACK_IMPORTED_MODULE_1__["library"][iconName];
  return getSvg(svg);
};




/***/ }),

/***/ "./packages/block-editor/build-module/components/heading-level-icon/index.js":
/*!***********************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/heading-level-icon/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

function Index(_ref) {
  var level = _ref.level,
      _ref$isPressed = _ref.isPressed,
      isPressed = _ref$isPressed === void 0 ? false : _ref$isPressed;
  var levelToPath = {
    1: 'M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z',
    2: 'M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z',
    3: 'M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z',
    4: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z',
    5: 'M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z',
    6: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z'
  };

  if (!levelToPath.hasOwnProperty(level)) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    isPressed: isPressed
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
    d: levelToPath[level]
  }));
}


/***/ }),

/***/ "./packages/block-editor/build-module/components/heading-toolbar/index.js":
/*!********************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/heading-toolbar/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../index */ "./packages/block-editor/build-module/components/index.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



var HeadingToolbar = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HeadingToolbar, _Component);

  var _super = _createSuper(HeadingToolbar);

  function HeadingToolbar() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HeadingToolbar);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HeadingToolbar, [{
    key: "createLevelControl",
    value: function createLevelControl(targetLevel, selectedLevel, onChange) {
      var isActive = targetLevel === selectedLevel;
      return {
        icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_9__["HeadingLevelIcon"], {
          level: targetLevel,
          isPressed: isActive
        }),
        // translators: %s: heading level e.g: "1", "2", "3"
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Heading %d'), targetLevel),
        isActive: isActive,
        onClick: function onClick() {
          return onChange(targetLevel);
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          minLevel = _this$props.minLevel,
          maxLevel = _this$props.maxLevel,
          selectedLevel = _this$props.selectedLevel,
          onChange = _this$props.onChange;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ToolbarGroup"], {
        icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_9__["HeadingLevelIcon"], {
          level: selectedLevel
        }),
        controls: Object(lodash__WEBPACK_IMPORTED_MODULE_6__["range"])(minLevel, maxLevel).map(function (index) {
          return _this.createLevelControl(index, selectedLevel, onChange);
        })
      });
    }
  }]);

  return HeadingToolbar;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HeadingToolbar);


/***/ }),

/***/ "./packages/block-editor/build-module/components/image-select-control/index.js":
/*!*************************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/image-select-control/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./packages/block-editor/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);





var ImageSelectControl = function ImageSelectControl(props) {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(selected),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var options = props.options,
      selected = props.selected;
  var onChange = typeof props.onChange === "function" ? props.onChange : function () {};
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "components-base-control components-image-select-control"
  }, options.map(function (option) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      key: option.slug,
      role: "button",
      "aria-label": option.label,
      onClick: function onClick() {
        setActive(option.slug);
        onChange(option.slug);
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('components-image-select-control__option', {
        'components-image-select-control__option--selected': option.slug === selected
      })
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "components-image-select-control__image"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: option.src,
      alt: option.label
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "components-image-select-control__label"
    }, option.label));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageSelectControl);


/***/ }),

/***/ "./packages/block-editor/build-module/components/index.js":
/*!****************************************************************!*\
  !*** ./packages/block-editor/build-module/components/index.js ***!
  \****************************************************************/
/*! exports provided: AutocompleteTokenField, BlockVerticalAlignmentToolbar, CustomMenuItem, CardFieldsPreview, ControlsGroup, ColorPicker, DuotonePicker, FontSizePicker, HeadingLevelIcon, HeadingToolbar, ImageSelectControl, InnerBlocksPreview, Notice, ParametricGrid, PresetControl, SignalControl, TextPlaceholder, ToggleGroup, VariationPicker, withVisibility, insertTemplate, getPlaceholderImages, CardButton, CardTitle, CardSubtitle, CardMeta, CardDescription, CardFooter, Card, CardContentWrapper, CardMediaWrapper, normalizeImage, normalizeImages, PostCardMedia, PostCardLetter, PostCard, getSvg, getIconSvg, ControlsDrawerContent, ControlsSection, ControlsSections, ControlsTab, Drawer, Drawers, DrawerList, DrawerPanel, DrawerListBefore, DrawerListAfter, GalleryPreview, GalleryPlaceholder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _autocomplete_tokenfield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocomplete-tokenfield */ "./packages/block-editor/build-module/components/autocomplete-tokenfield/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutocompleteTokenField", function() { return _autocomplete_tokenfield__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _block_vertical_alignment_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-vertical-alignment-toolbar */ "./packages/block-editor/build-module/components/block-vertical-alignment-toolbar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockVerticalAlignmentToolbar", function() { return _block_vertical_alignment_toolbar__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _custom_menu_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-menu-item */ "./packages/block-editor/build-module/components/custom-menu-item/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomMenuItem", function() { return _custom_menu_item__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _card_fields_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-fields-preview */ "./packages/block-editor/build-module/components/card-fields-preview/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardFieldsPreview", function() { return _card_fields_preview__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _controls_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls-group */ "./packages/block-editor/build-module/components/controls-group/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlsGroup", function() { return _controls_group__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _color_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-picker */ "./packages/block-editor/build-module/components/color-picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return _color_picker__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _duotone_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./duotone-picker */ "./packages/block-editor/build-module/components/duotone-picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DuotonePicker", function() { return _duotone_picker__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _font_size_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./font-size-picker */ "./packages/block-editor/build-module/components/font-size-picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizePicker", function() { return _font_size_picker__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _heading_level_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./heading-level-icon */ "./packages/block-editor/build-module/components/heading-level-icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeadingLevelIcon", function() { return _heading_level_icon__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _heading_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./heading-toolbar */ "./packages/block-editor/build-module/components/heading-toolbar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeadingToolbar", function() { return _heading_toolbar__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _image_select_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./image-select-control */ "./packages/block-editor/build-module/components/image-select-control/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageSelectControl", function() { return _image_select_control__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _inner_blocks_preview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inner-blocks-preview */ "./packages/block-editor/build-module/components/inner-blocks-preview/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InnerBlocksPreview", function() { return _inner_blocks_preview__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _notice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notice */ "./packages/block-editor/build-module/components/notice/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notice", function() { return _notice__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _parametric_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parametric-grid */ "./packages/block-editor/build-module/components/parametric-grid/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParametricGrid", function() { return _parametric_grid__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _preset_control__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./preset-control */ "./packages/block-editor/build-module/components/preset-control/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PresetControl", function() { return _preset_control__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _signal_control__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signal-control */ "./packages/block-editor/build-module/components/signal-control/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignalControl", function() { return _signal_control__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _text_placeholder__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./text-placeholder */ "./packages/block-editor/build-module/components/text-placeholder/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextPlaceholder", function() { return _text_placeholder__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _toggle_group__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./toggle-group */ "./packages/block-editor/build-module/components/toggle-group/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleGroup", function() { return _toggle_group__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _variation_picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./variation-picker */ "./packages/block-editor/build-module/components/variation-picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VariationPicker", function() { return _variation_picker__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _with_visibility__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./with-visibility */ "./packages/block-editor/build-module/components/with-visibility/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withVisibility", function() { return _with_visibility__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _insert_template__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./insert-template */ "./packages/block-editor/build-module/components/insert-template/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertTemplate", function() { return _insert_template__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _get_placeholder_images__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./get-placeholder-images */ "./packages/block-editor/build-module/components/get-placeholder-images/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPlaceholderImages", function() { return _get_placeholder_images__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./card */ "./packages/block-editor/build-module/components/card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardButton", function() { return _card__WEBPACK_IMPORTED_MODULE_22__["CardButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardTitle", function() { return _card__WEBPACK_IMPORTED_MODULE_22__["CardTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardSubtitle", function() { return _card__WEBPACK_IMPORTED_MODULE_22__["CardSubtitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardMeta", function() { return _card__WEBPACK_IMPORTED_MODULE_22__["CardMeta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardDescription", function() { return _card__WEBPACK_IMPORTED_MODULE_22__["CardDescription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardFooter", function() { return _card__WEBPACK_IMPORTED_MODULE_22__["CardFooter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _card__WEBPACK_IMPORTED_MODULE_22__["Card"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardContentWrapper", function() { return _card__WEBPACK_IMPORTED_MODULE_22__["CardContentWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardMediaWrapper", function() { return _card__WEBPACK_IMPORTED_MODULE_22__["CardMediaWrapper"]; });

/* harmony import */ var _normalize_images__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./normalize-images */ "./packages/block-editor/build-module/components/normalize-images/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeImage", function() { return _normalize_images__WEBPACK_IMPORTED_MODULE_23__["normalizeImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeImages", function() { return _normalize_images__WEBPACK_IMPORTED_MODULE_23__["normalizeImages"]; });

/* harmony import */ var _post_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./post-card */ "./packages/block-editor/build-module/components/post-card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostCardMedia", function() { return _post_card__WEBPACK_IMPORTED_MODULE_24__["PostCardMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostCardLetter", function() { return _post_card__WEBPACK_IMPORTED_MODULE_24__["PostCardLetter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostCard", function() { return _post_card__WEBPACK_IMPORTED_MODULE_24__["PostCard"]; });

/* harmony import */ var _get_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./get-svg */ "./packages/block-editor/build-module/components/get-svg/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSvg", function() { return _get_svg__WEBPACK_IMPORTED_MODULE_25__["getSvg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIconSvg", function() { return _get_svg__WEBPACK_IMPORTED_MODULE_25__["getIconSvg"]; });

/* harmony import */ var _controls_sections__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./controls-sections */ "./packages/block-editor/build-module/components/controls-sections/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlsDrawerContent", function() { return _controls_sections__WEBPACK_IMPORTED_MODULE_26__["ControlsDrawerContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlsSection", function() { return _controls_sections__WEBPACK_IMPORTED_MODULE_26__["ControlsSection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlsSections", function() { return _controls_sections__WEBPACK_IMPORTED_MODULE_26__["ControlsSections"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlsTab", function() { return _controls_sections__WEBPACK_IMPORTED_MODULE_26__["ControlsTab"]; });

/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./drawer */ "./packages/block-editor/build-module/components/drawer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return _drawer__WEBPACK_IMPORTED_MODULE_27__["Drawer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Drawers", function() { return _drawer__WEBPACK_IMPORTED_MODULE_27__["Drawers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerList", function() { return _drawer__WEBPACK_IMPORTED_MODULE_27__["DrawerList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerPanel", function() { return _drawer__WEBPACK_IMPORTED_MODULE_27__["DrawerPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerListBefore", function() { return _drawer__WEBPACK_IMPORTED_MODULE_27__["DrawerListBefore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerListAfter", function() { return _drawer__WEBPACK_IMPORTED_MODULE_27__["DrawerListAfter"]; });

/* harmony import */ var _gallery_options__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./gallery-options */ "./packages/block-editor/build-module/components/gallery-options/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GalleryPreview", function() { return _gallery_options__WEBPACK_IMPORTED_MODULE_28__["GalleryPreview"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GalleryPlaceholder", function() { return _gallery_options__WEBPACK_IMPORTED_MODULE_28__["GalleryPlaceholder"]; });
































/***/ }),

/***/ "./packages/block-editor/build-module/components/inner-blocks-preview/index.js":
/*!*************************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/inner-blocks-preview/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index */ "./packages/block-editor/build-module/index.js");



var InnerBlocksPreview = function InnerBlocksPreview(props) {
  var clientId = props.clientId;
  var innerBlocks = Object(_index__WEBPACK_IMPORTED_MODULE_1__["useInnerBlocks"])(clientId);
  return innerBlocks.map(function (innerBlock) {
    var element = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["getSaveElement"])(innerBlock.name, innerBlock.attributes, innerBlock.innerBlocks);

    if (innerBlock.name === 'core/buttons') {
      var _innerBlock$attribute;

      Object.assign(element.props.style, {
        justifyContent: (_innerBlock$attribute = innerBlock.attributes.layout) === null || _innerBlock$attribute === void 0 ? void 0 : _innerBlock$attribute.justifyContent
      });
    }

    return element;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (InnerBlocksPreview);


/***/ }),

/***/ "./packages/block-editor/build-module/components/insert-template/index.js":
/*!********************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/insert-template/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);



var insertTemplate = function insertTemplate(blockType, template) {
  var _select = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["select"])('core/block-editor'),
      getBlocksByClientId = _select.getBlocksByClientId,
      getClientIdsWithDescendants = _select.getClientIdsWithDescendants;

  var _dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["dispatch"])('core/block-editor'),
      replaceInnerBlocks = _dispatch.replaceInnerBlocks,
      updateBlockAttributes = _dispatch.updateBlockAttributes;

  var blocks = getClientIdsWithDescendants();
  var loadedSavedBlocks = false;
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["subscribe"])(function () {
    var newBlocks = getClientIdsWithDescendants();
    var addedBlocks = newBlocks.filter(function (newBlock) {
      return !blocks.includes(newBlock);
    });

    if (newBlocks === blocks || !addedBlocks.length) {
      return;
    } // if this is the first set of added blocks


    if (!loadedSavedBlocks) {
      loadedSavedBlocks = true;
      return;
    }

    blocks = newBlocks;
    getBlocksByClientId(addedBlocks).map(function (block) {
      var _block$innerBlocks;

      if (block.name === blockType && !block.attributes.templateInserted && !((_block$innerBlocks = block.innerBlocks) !== null && _block$innerBlocks !== void 0 && _block$innerBlocks.length)) {
        replaceInnerBlocks(block.clientId, Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["createBlocksFromInnerBlocksTemplate"])(template));
        updateBlockAttributes(block.clientId, {
          templateInserted: true
        });
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (insertTemplate);


/***/ }),

/***/ "./packages/block-editor/build-module/components/normalize-images/index.js":
/*!*********************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/normalize-images/index.js ***!
  \*********************************************************************************/
/*! exports provided: normalizeImage, normalizeImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeImage", function() { return normalizeImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeImages", function() { return normalizeImages; });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);


var normalizeImages = function normalizeImages(images) {
  var promises = images.map(normalizeImage);
  return Promise.all(promises);
};

var normalizeImage = function normalizeImage(image) {
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: "/wp/v2/media/".concat(image.id)
  }).then(function (data) {
    var _data$description;

    return Object.assign({}, image, {
      description: data === null || data === void 0 ? void 0 : (_data$description = data.description) === null || _data$description === void 0 ? void 0 : _data$description.raw
    });
  });
};




/***/ }),

/***/ "./packages/block-editor/build-module/components/notice/index.js":
/*!***********************************************************************!*\
  !*** ./packages/block-editor/build-module/components/notice/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./packages/block-editor/node_modules/js-cookie/dist/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);






var Notice = function Notice(props) {
  var id = props.id,
      content = props.content,
      dismissLabel = props.dismissLabel;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(id)),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      hidden = _useState2[0],
      setHidden = _useState2[1];

  var onClick = function onClick() {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set(id, true, {
      expires: 365
    });
    setHidden(true);
  };

  if (hidden) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'novablocks-notice'
  }, content, dismissLabel !== undefined && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    isPrimary: true,
    onClick: onClick
  }, dismissLabel));
};

/* harmony default export */ __webpack_exports__["default"] = (Notice);


/***/ }),

/***/ "./packages/block-editor/build-module/components/parametric-grid/index.js":
/*!********************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/parametric-grid/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__);



var ParametricGrid = function ParametricGrid(props) {
  var attributes = props.attributes,
      getContent = props.getContent,
      cardsCount = props.cardsCount,
      className = props.className;
  var areaColumns = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["applyLayoutEngine"])(attributes);
  var addedCards = 0;
  Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["redistributeCardsInAreas"])(areaColumns, cardsCount, attributes);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className,
    style: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getGridStyle"])(attributes),
    key: 'parametric_grid'
  }, !!areaColumns && areaColumns.map(function (areaColumn, columnIndex) {
    var areas = areaColumn.areas,
        row = areaColumn.row,
        col = areaColumn.col,
        width = areaColumn.width,
        height = areaColumn.height;
    var areaColumnStyle = {
      gridColumnStart: col,
      gridColumnEnd: col + width,
      gridRowStart: row,
      gridRowEnd: row + height
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nb-grid__column",
      style: areaColumnStyle,
      key: 'parametric_grid_column_' + columnIndex
    }, areas.map(function (area, areaIndex) {
      addedCards += area.postsCount;
      return !!area.postsCount && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getParametricLayoutAreaClassName"])(area, attributes),
        key: 'parametric_grid_column_' + columnIndex + '_area_' + areaIndex
      }, Array.from(Array(area.postsCount).keys()).map(function (i) {
        var landscape = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["isLandscape"])(area, attributes);
        return getContent(addedCards - area.postsCount + i, props, landscape);
      }));
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ParametricGrid);


/***/ }),

/***/ "./packages/block-editor/build-module/components/post-card/index.js":
/*!**************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/post-card/index.js ***!
  \**************************************************************************/
/*! exports provided: PostCardMedia, PostCardLetter, PostCard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCardMedia", function() { return PostCardMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCardLetter", function() { return PostCardLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCard", function() { return PostCard; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/dom */ "@wordpress/dom");
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./packages/block-editor/build-module/components/post-card/utils.js");









var withMedia = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select, ownProps) {
  var _select = select('core'),
      getMedia = _select.getMedia;

  var post = ownProps.post,
      attributes = ownProps.attributes;
  var showMedia = attributes.showMedia;
  var featured_media = post.featured_media;

  if (!featured_media || !showMedia) {
    return null;
  }

  var mediaObject = getMedia(featured_media);

  if (!mediaObject) {
    return null;
  }

  return {
    media: Object(_utils__WEBPACK_IMPORTED_MODULE_7__["sanitizeMediaResponse"])(mediaObject)
  };
});
var PostCardMedia = function PostCardMedia(props) {
  var media = props.media;

  if (!media) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
    className: "nb-supernova-item__media",
    src: media.url,
    width: media.width,
    height: media.height,
    alt: media === null || media === void 0 ? void 0 : media.alt
  });
};
var PostCardLetter = function PostCardLetter(props) {
  var _post$title;

  var post = props.post;
  var postTitle = (post === null || post === void 0 ? void 0 : (_post$title = post.title) === null || _post$title === void 0 ? void 0 : _post$title.raw) || '';
  var ref = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  if (!postTitle) {
    return null;
  }

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (ref.current) {
      Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_6__["resizeDropcap"])(ref.current);
    }
  }, [ref]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "nb-supernova-item__dropcap-wrapper sm-variation-11"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "nb-supernova-item__dropcap",
    ref: ref
  }, postTitle.substring(0, 1)));
};
var PostCard = withMedia(function (props) {
  var _post$title2, _post$excerpt;

  var attributes = props.attributes,
      post = props.post;
  var showMeta = attributes.showMeta,
      showTitle = attributes.showTitle,
      showDescription = attributes.showDescription,
      showButtons = attributes.showButtons,
      showMedia = attributes.showMedia;

  var _getMeta = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getMeta"])(props),
      metaAboveTitle = _getMeta.metaAboveTitle,
      metaBelowTitle = _getMeta.metaBelowTitle;

  var Media = props.Media || PostCardMedia;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_5__["Card"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    key: 'card_post_' + post.id
  }), showMedia && props.media && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_5__["CardMediaWrapper"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    key: 'card_post_mediawrapper_' + post.id
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PostCardLetter, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Media, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    key: 'card_post_media_' + post.id
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'nb-supernova-item__inner-container',
    key: 'card_post_innercontainer_' + post.id
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_5__["CardMeta"], {
    show: showMeta,
    key: 'card_post_metaabovetitle_' + post.id
  }, metaAboveTitle), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], {
    show: showTitle,
    attributes: attributes,
    key: 'card_post_title_' + post.id
  }, (post === null || post === void 0 ? void 0 : (_post$title2 = post.title) === null || _post$title2 === void 0 ? void 0 : _post$title2.raw) || ''), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_5__["CardMeta"], {
    show: showMeta,
    key: 'card_post_metabelowtitle_' + post.id
  }, metaBelowTitle), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_5__["CardDescription"], {
    show: showDescription,
    key: 'card_post_description_' + post.id
  }, Object(_wordpress_dom__WEBPACK_IMPORTED_MODULE_4__["__unstableStripHTML"])((post === null || post === void 0 ? void 0 : (_post$excerpt = post.excerpt) === null || _post$excerpt === void 0 ? void 0 : _post$excerpt.rendered) || '')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_5__["CardFooter"], {
    show: showButtons,
    key: 'card_post_footer_' + post.id
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_5__["CardButton"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    key: 'card_post_footer_button_' + post.id
  }), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Read More', 'nova-blocks')))));
});
/* harmony default export */ __webpack_exports__["default"] = (PostCard);


/***/ }),

/***/ "./packages/block-editor/build-module/components/post-card/meta/author.js":
/*!********************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/post-card/meta/author.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);




var Author = function Author(props) {
  var userId = props.userId;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      author = _useState2[0],
      setAuthor = _useState2[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!userId) {
      return;
    }

    var currentUserId = userId;
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: "/wp/v2/users/".concat(userId)
    }).then(function (res) {
      // Stale requests will have the `currentUserId` of an older closure.
      if (currentUserId === userId) {
        setAuthor(res);
      }
    });
  }, [userId]);

  if (!userId || author === undefined) {
    return '';
  }

  return (author === null || author === void 0 ? void 0 : author.name) || '';
};

/* harmony default export */ __webpack_exports__["default"] = (Author);


/***/ }),

/***/ "./packages/block-editor/build-module/components/post-card/meta/category.js":
/*!**********************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/post-card/meta/category.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);




var Category = function Category(props) {
  var termId = props.termId,
      postType = props.postType;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      category = _useState2[0],
      setCategory = _useState2[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!termId) {
      return;
    }

    var currentTermId = termId;
    var path = "/wp/v2/categories/".concat(termId);

    switch (postType) {
      case 'product':
        path = "/wp/v2/product_cat/".concat(termId);
        break;

      case 'portfolio':
        // This is the CPT possibly registered by Pixelgrade Care.
        path = "/wp/v2/portfolio_type/".concat(termId);
        break;

      case 'gallery':
        // This is the CPT possibly registered by Pixelgrade Care.
        path = "/wp/v2/gallery_type/".concat(termId);
        break;

      case 'testimonial':
        // This is the CPT possibly registered by Pixelgrade Care.
        // Testimonials don't have categories.
        break;

      default:
        break;
    }

    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: path
    }).then(function (res) {
      // Stale requests will have the `currentTermId` of an older closure.
      if (currentTermId === termId) {
        setCategory(res);
      }
    });
  }, [termId]);

  if (!termId || category === undefined) {
    return '';
  }

  return (category === null || category === void 0 ? void 0 : category.name) || '';
};

/* harmony default export */ __webpack_exports__["default"] = (Category);


/***/ }),

/***/ "./packages/block-editor/build-module/components/post-card/meta/comments.js":
/*!**********************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/post-card/meta/comments.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);






var Comments = function Comments(props) {
  var postId = props.postId;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      commentsCount = _useState2[0],
      setCommentsCount = _useState2[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!postId) {
      return;
    }

    var currentPostId = postId;
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_3__["addQueryArgs"])('/wp/v2/comments', {
        post: postId
      }),
      parse: false
    }).then(function (res) {
      // Stale requests will have the `currentPostId` of an older closure.
      if (currentPostId === postId) {
        setCommentsCount(res.headers.get('X-WP-Total'));
      }
    });
  }, [postId]);

  if (!postId || commentsCount === undefined) {
    return '';
  }

  return !commentsCount ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('No Comments', 'nova-blocks') : "".concat(commentsCount, " Comment").concat(commentsCount > 1 ? 's' : '');
};

/* harmony default export */ __webpack_exports__["default"] = (Comments);


/***/ }),

/***/ "./packages/block-editor/build-module/components/post-card/meta/reading-time.js":
/*!**************************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/post-card/meta/reading-time.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);


var ReadingTime = function ReadingTime(props) {
  var _props$post;

  var wordsPerMinute = 250,
      imgWeight = 12,
      imagesTime = 0,
      videoTime = 0,
      content = (_props$post = props.post) === null || _props$post === void 0 ? void 0 : _props$post.content.rendered,
      strippedContent = content.replace(/(<([^>]+)>)/ig, ''),
      wordCount = strippedContent.split(' ').filter(function (n) {
    return n != '';
  }).length,
      words_time = Math.floor(wordCount / (wordsPerMinute / 60));
  var matchImage = content.match(/<img\s[^>]+>/g);
  var matchVideo = content.match(/<iframe\s[^>]+>/g);

  if (matchImage !== null) {
    var numImages = matchImage.length;

    for (var i = 0; i < numImages; i++) {
      imagesTime += imgWeight;

      if (imgWeight > 3) {
        imgWeight--;
      }
    }
  }

  if (matchVideo !== null) {
    videoTime = matchVideo.length * 60;
  }

  var minutes = Math.ceil((words_time + imagesTime + videoTime) / 60);

  if (minutes < 1) {
    minutes = 1;
  }

  return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('%s min read', 'nova-blocks'), minutes);
};

/* harmony default export */ __webpack_exports__["default"] = (ReadingTime);


/***/ }),

/***/ "./packages/block-editor/build-module/components/post-card/meta/tags.js":
/*!******************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/post-card/meta/tags.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_3__);





var Tags = function Tags(props) {
  var termIds = props.termIds,
      postType = props.postType;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      tags = _useState2[0],
      setTags = _useState2[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!termIds) {
      return;
    }

    var currentTermIds = termIds.join(',');
    var url = '/wp/v2/tags';

    switch (postType) {
      case 'product':
        url = '/wp/v2/product_tag';
        break;

      case 'portfolio':
        // This is the CPT possibly registered by Pixelgrade Care.
        url = '/wp/v2/portfolio_tag';
        break;

      case 'gallery':
        // This is the CPT possibly registered by Pixelgrade Care.
        url = '/wp/v2/gallery_tag';
        break;

      case 'testimonial':
        // This is the CPT possibly registered by Pixelgrade Care.
        // Testimonials don't have categories.
        break;

      default:
        break;
    }

    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_3__["addQueryArgs"])(url, {
        page: 1,
        per_page: 10,
        include: termIds
      })
    }).then(function (res) {
      // Stale requests will have the `currentTermIds` of an older closure.
      if (currentTermIds === termIds.join(',')) {
        setTags(res);
      }
    });
  }, [termIds]);

  if (!termIds || tags === undefined || !tags.length) {
    return '';
  }

  return tags.map(function (tag) {
    return tag.name;
  }).join(', ') || '';
};

/* harmony default export */ __webpack_exports__["default"] = (Tags);


/***/ }),

/***/ "./packages/block-editor/build-module/components/post-card/utils.js":
/*!**************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/post-card/utils.js ***!
  \**************************************************************************/
/*! exports provided: getMeta, getMetadata, sanitizeMediaResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeta", function() { return getMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetadata", function() { return getMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeMediaResponse", function() { return sanitizeMediaResponse; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _meta_author__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meta/author */ "./packages/block-editor/build-module/components/post-card/meta/author.js");
/* harmony import */ var _meta_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meta/category */ "./packages/block-editor/build-module/components/post-card/meta/category.js");
/* harmony import */ var _meta_comments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meta/comments */ "./packages/block-editor/build-module/components/post-card/meta/comments.js");
/* harmony import */ var _meta_tags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meta/tags */ "./packages/block-editor/build-module/components/post-card/meta/tags.js");
/* harmony import */ var _meta_reading_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meta/reading-time */ "./packages/block-editor/build-module/components/post-card/meta/reading-time.js");








var getMeta = function getMeta(props) {
  var _props$attributes = props.attributes,
      metadataPosition = _props$attributes.metadataPosition,
      primaryMetadata = _props$attributes.primaryMetadata,
      secondaryMetadata = _props$attributes.secondaryMetadata,
      post = props.post;
  var primaryMeta = getMetadata(post, primaryMetadata);
  var secondaryMeta = getMetadata(post, secondaryMetadata);
  var combinedMeta;
  var metaAboveTitle;
  var metaBelowTitle;

  if (primaryMeta && secondaryMeta) {
    combinedMeta = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: 'nb-card__meta--primary',
      key: 'card_meta_primary_post_' + post.id
    }, primaryMeta), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: 'nb-card__meta-separator',
      key: 'card_meta_separator_post_' + post.id
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: 'nb-card__meta--secondary',
      key: 'card_meta_secondary_post_' + post.id
    }, secondaryMeta));
  } else {
    combinedMeta = primaryMeta || secondaryMeta;
  }

  switch (metadataPosition) {
    case 'above-title':
      metaAboveTitle = combinedMeta;
      break;

    case 'below-title':
      metaBelowTitle = combinedMeta;
      break;

    case 'split':
      metaAboveTitle = primaryMeta;
      metaBelowTitle = secondaryMeta;
      break;

    default:
      break;
  }

  return {
    metaAboveTitle: metaAboveTitle,
    metaBelowTitle: metaBelowTitle
  };
};
var getMetadata = function getMetadata(post, meta) {
  var _post$product_cat, _post$portfolio_type, _post$gallery_type, _post$categories, _post$product_tag, _post$portfolio_tag, _post$gallery_tag, _post$tags;

  switch (meta) {
    case 'author':
      return (post === null || post === void 0 ? void 0 : post.author) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_meta_author__WEBPACK_IMPORTED_MODULE_2__["default"], {
        userId: post.author
      });

    case 'category':
      // Map the meta according to the post type.
      var categoryId = 0;

      switch (post.type) {
        case 'product':
          if (!!(post !== null && post !== void 0 && (_post$product_cat = post.product_cat) !== null && _post$product_cat !== void 0 && _post$product_cat.length)) {
            categoryId = post.product_cat[0];
          }

          break;

        case 'portfolio':
          // This is the CPT possibly registered by Pixelgrade Care.
          if (!!(post !== null && post !== void 0 && (_post$portfolio_type = post.portfolio_type) !== null && _post$portfolio_type !== void 0 && _post$portfolio_type.length)) {
            categoryId = post.portfolio_type[0];
          }

          break;

        case 'gallery':
          // This is the CPT possibly registered by Pixelgrade Care.
          if (!!(post !== null && post !== void 0 && (_post$gallery_type = post.gallery_type) !== null && _post$gallery_type !== void 0 && _post$gallery_type.length)) {
            categoryId = post.gallery_type[0];
          }

          break;

        case 'testimonial':
          // This is the CPT possibly registered by Pixelgrade Care.
          // Testimonials don't have categories.
          break;

        default:
          if (!!(post !== null && post !== void 0 && (_post$categories = post.categories) !== null && _post$categories !== void 0 && _post$categories.length)) {
            categoryId = post.categories[0];
          }

          break;
      }

      return !!categoryId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_meta_category__WEBPACK_IMPORTED_MODULE_3__["default"], {
        termId: categoryId,
        postType: post.type
      });

    case 'comments':
      return !!(post !== null && post !== void 0 && post.id) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_meta_comments__WEBPACK_IMPORTED_MODULE_4__["default"], {
        postId: post.id
      });

    case 'date':
      var dateFormat = Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_1__["__experimentalGetSettings"])().formats.date;

      return !!(post !== null && post !== void 0 && post.date_gmt) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("time", {
        dateTime: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_1__["format"])('c', post.date_gmt)
      }, Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_1__["dateI18n"])(dateFormat, post.date_gmt));

    case 'tags':
      // Map the meta according to the post type.
      var tagIds = [];

      switch (post.type) {
        case 'product':
          if (!!(post !== null && post !== void 0 && (_post$product_tag = post.product_tag) !== null && _post$product_tag !== void 0 && _post$product_tag.length)) {
            tagIds = post.product_tag;
          }

          break;

        case 'portfolio':
          // This is the CPT possibly registered by Pixelgrade Care.
          if (!!(post !== null && post !== void 0 && (_post$portfolio_tag = post.portfolio_tag) !== null && _post$portfolio_tag !== void 0 && _post$portfolio_tag.length)) {
            tagIds = post.portfolio_tag;
          }

          break;

        case 'gallery':
          // This is the CPT possibly registered by Pixelgrade Care.
          if (!!(post !== null && post !== void 0 && (_post$gallery_tag = post.gallery_tag) !== null && _post$gallery_tag !== void 0 && _post$gallery_tag.length)) {
            tagIds = post.gallery_tag;
          }

          break;

        case 'testimonial':
          // This is the CPT possibly registered by Pixelgrade Care.
          // Testimonials don't have categories.
          break;

        default:
          if (!!(post !== null && post !== void 0 && (_post$tags = post.tags) !== null && _post$tags !== void 0 && _post$tags.length)) {
            tagIds = post.tags;
          }

          break;
      }

      return !!tagIds && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_meta_tags__WEBPACK_IMPORTED_MODULE_5__["default"], {
        termIds: tagIds,
        postType: post.type
      });

    case 'reading-time':
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_meta_reading_time__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: post
      });

    default:
      return null;
  }
};
var sanitizeMediaResponse = function sanitizeMediaResponse(mediaObject) {
  var _mediaObject$media_de, _mediaObject$media_de2, _mediaObject$media_de3, _mediaObject$media_de4, _mediaObject$media_de5, _mediaObject$media_de6, _mediaObject$media_de7, _mediaObject$media_de8, _mediaObject$media_de9, _mediaObject$media_de10, _mediaObject$media_de11, _mediaObject$media_de12;

  // We will refrain from using the full image size to avoid overloading the editor window.
  // The `novablocks_large` image size is sufficient, if present.
  return {
    type: mediaObject === null || mediaObject === void 0 ? void 0 : mediaObject.media_type,
    width: (mediaObject === null || mediaObject === void 0 ? void 0 : (_mediaObject$media_de = mediaObject.media_details) === null || _mediaObject$media_de === void 0 ? void 0 : (_mediaObject$media_de2 = _mediaObject$media_de.sizes) === null || _mediaObject$media_de2 === void 0 ? void 0 : (_mediaObject$media_de3 = _mediaObject$media_de2.novablocks_large) === null || _mediaObject$media_de3 === void 0 ? void 0 : _mediaObject$media_de3.width) || (mediaObject === null || mediaObject === void 0 ? void 0 : (_mediaObject$media_de4 = mediaObject.media_details) === null || _mediaObject$media_de4 === void 0 ? void 0 : _mediaObject$media_de4.width),
    height: (mediaObject === null || mediaObject === void 0 ? void 0 : (_mediaObject$media_de5 = mediaObject.media_details) === null || _mediaObject$media_de5 === void 0 ? void 0 : (_mediaObject$media_de6 = _mediaObject$media_de5.sizes) === null || _mediaObject$media_de6 === void 0 ? void 0 : (_mediaObject$media_de7 = _mediaObject$media_de6.novablocks_large) === null || _mediaObject$media_de7 === void 0 ? void 0 : _mediaObject$media_de7.height) || (mediaObject === null || mediaObject === void 0 ? void 0 : (_mediaObject$media_de8 = mediaObject.media_details) === null || _mediaObject$media_de8 === void 0 ? void 0 : _mediaObject$media_de8.height),
    url: (mediaObject === null || mediaObject === void 0 ? void 0 : (_mediaObject$media_de9 = mediaObject.media_details) === null || _mediaObject$media_de9 === void 0 ? void 0 : (_mediaObject$media_de10 = _mediaObject$media_de9.sizes) === null || _mediaObject$media_de10 === void 0 ? void 0 : (_mediaObject$media_de11 = _mediaObject$media_de10.novablocks_large) === null || _mediaObject$media_de11 === void 0 ? void 0 : _mediaObject$media_de11.source_url) || (mediaObject === null || mediaObject === void 0 ? void 0 : mediaObject.source_url),
    alt: (mediaObject === null || mediaObject === void 0 ? void 0 : (_mediaObject$media_de12 = mediaObject.media_details) === null || _mediaObject$media_de12 === void 0 ? void 0 : _mediaObject$media_de12.alt) || (mediaObject === null || mediaObject === void 0 ? void 0 : mediaObject.alt) || ''
  };
};


/***/ }),

/***/ "./packages/block-editor/build-module/components/preset-control/index.js":
/*!*******************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/preset-control/index.js ***!
  \*******************************************************************************/
/*! exports provided: getNewAttributesFromPreset, getSelectedPreset, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewAttributesFromPreset", function() { return getNewAttributesFromPreset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedPreset", function() { return getSelectedPreset; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);





var PresetControl = function PresetControl(props) {
  var label = props.label,
      options = props.options,
      randomize = props.randomize,
      attributes = props.attributes,
      setAttributes = props.setAttributes;
  var randomizeAttributes = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (typeof randomize === "function") {
      return randomize();
    }

    return {};
  }, [randomize]);
  var presetOptions = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var presetOptions = Array.isArray(options) ? options.slice() : [];

    if (typeof randomize !== "undefined") {
      presetOptions.push({
        label: 'Just My Style™',
        value: 'just-my-style',
        preset: {}
      });
    }

    return presetOptions;
  }, [options, randomize]);
  var selectedPreset = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return getSelectedPreset(presetOptions, attributes);
  }, [presetOptions, attributes]);
  var onPresetChange = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (preset) {
    if ('just-my-style' === preset) {
      setAttributes(Object.assign({}, randomizeAttributes()));
      return;
    }

    var newAttributes = getNewAttributesFromPreset(preset, presetOptions);
    setAttributes(newAttributes);
  }, [presetOptions]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
    label: label,
    options: presetOptions.map(function (option) {
      return {
        label: option.label,
        value: option.value
      };
    }),
    selected: selectedPreset,
    onChange: onPresetChange
  }), selectedPreset === 'just-my-style' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    key: 'advanced-gallery-surprise-control'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    isPrimary: true,
    onClick: function onClick() {
      setAttributes(randomizeAttributes());
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('💡 Surprise me!', 'nova-blocks'))));
};

var getNewAttributesFromPreset = function getNewAttributesFromPreset(preset, presets) {
  var newAttributes = {};
  var newOption = presets.find(function (option) {
    return preset === option.value;
  });

  if (newOption && newOption.preset) {
    newAttributes = Object.assign(newOption.preset, newAttributes);
  }

  return newAttributes;
};
var getSelectedPreset = function getSelectedPreset(presetOptions, attributes) {
  var activePresets = presetOptions.filter(function (presetOption) {
    var preset = presetOption.preset;
    return Object.keys(preset).every(function (key) {
      return preset[key] === attributes[key];
    });
  });

  if (activePresets.length) {
    return activePresets[0].value;
  }

  return null;
};
/* harmony default export */ __webpack_exports__["default"] = (PresetControl);


/***/ }),

/***/ "./packages/block-editor/build-module/components/signal-control/index.js":
/*!*******************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/signal-control/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./packages/block-editor/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks */ "./packages/block-editor/build-module/hooks/index.js");





var defaultLabels = ['None', 'Low', 'Medium', 'High'];

var SignalControl = function SignalControl(props) {
  var _supports$novaBlocks$, _supports$novaBlocks, _supports$novaBlocks$2, _props$max, _supports$novaBlocks$3, _supports$novaBlocks2, _supports$novaBlocks3, _props$min, _classnames;

  var label = props.label,
      signal = props.signal;

  var onChange = props.onChange || function () {};

  var labels = props.labels || defaultLabels;
  var supports = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useSupports"])(props.name);
  var maxSignal = Math.min((_supports$novaBlocks$ = supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks = supports.novaBlocks) === null || _supports$novaBlocks === void 0 ? void 0 : (_supports$novaBlocks$2 = _supports$novaBlocks.colorSignal) === null || _supports$novaBlocks$2 === void 0 ? void 0 : _supports$novaBlocks$2.maxColorSignal) !== null && _supports$novaBlocks$ !== void 0 ? _supports$novaBlocks$ : 3, (_props$max = props === null || props === void 0 ? void 0 : props.max) !== null && _props$max !== void 0 ? _props$max : 3);
  var minSignal = Math.max((_supports$novaBlocks$3 = supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks2 = supports.novaBlocks) === null || _supports$novaBlocks2 === void 0 ? void 0 : (_supports$novaBlocks3 = _supports$novaBlocks2.colorSignal) === null || _supports$novaBlocks3 === void 0 ? void 0 : _supports$novaBlocks3.minColorSignal) !== null && _supports$novaBlocks$3 !== void 0 ? _supports$novaBlocks$3 : 0, (_props$min = props === null || props === void 0 ? void 0 : props.min) !== null && _props$min !== void 0 ? _props$min : 0);
  var valueLabel = labels[signal];
  var iconClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()("nb-signal-icon", (_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, "nb-signal-icon--none", signal === 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, "nb-signal-icon--low", signal === 1), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, "nb-signal-icon--medium", signal === 2), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, "nb-signal-icon--high", signal === 3), _classnames));
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'components-base-control components-nb-signal-control'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "components-base-control__field"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "components-base-control__label"
  }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "components-nb-signal-control__root"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "nb-signal"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: iconClassName
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "nb-signal-icon__bar"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "nb-signal-icon__bar"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "nb-signal-icon__bar"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "nb-signal__text"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "nb-signal-icon-label"
  }, "Level"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "nb-signal__value-label"
  }, valueLabel)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "nb-signal__controls"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    isSecondary: true,
    disabled: signal <= minSignal,
    onClick: function onClick() {
      onChange(signal - 1);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: 'minus'
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    isSecondary: true,
    disabled: signal >= maxSignal,
    onClick: function onClick() {
      onChange(signal + 1);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: 'plus'
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SignalControl);


/***/ }),

/***/ "./packages/block-editor/build-module/components/text-placeholder/index.js":
/*!*********************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/text-placeholder/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__);



var TextPlaceholder = function TextPlaceholder(props) {
  var rows = props.rows || 2;
  var arr = Array.from(Array(rows).keys());
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'novablocks-text-placeholder'
  }, arr.map(function (obj, index) {
    var units = index === arr.length - 1 ? Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBetween"])(6, 12) : Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBetween"])(17, 20);
    var width = "".concat(units * 5, "%");
    var style = {
      width: width
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      key: 'text_placeholder_' + index,
      className: 'novablocks-text-placeholder__row',
      style: style
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TextPlaceholder);


/***/ }),

/***/ "./packages/block-editor/build-module/components/toggle-group/index.js":
/*!*****************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/toggle-group/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ "./packages/block-editor/node_modules/react-spring/dist/react-spring.esm.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);









var ToggleGroup = function ToggleGroup(props) {
  var toggles = props.toggles;
  var onChange = typeof props.onChange === 'function' ? props.onChange : function () {};

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(function () {
    return new WeakMap();
  }),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 1),
      refMap = _useState2[0];

  var enabledToggles = toggles.filter(function (toggle) {
    return !!toggle.value;
  });
  var disabledToggles = toggles.filter(function (toggle) {
    return !toggle.value;
  });
  var config = {
    initial: {
      left: 0
    },
    from: {
      opacity: 0,
      height: 0,
      left: 40
    },
    enter: function enter(item) {
      return /*#__PURE__*/function () {
        var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee(next) {
          var ref;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  ref = refMap.get(item);
                  _context.next = 3;
                  return next({
                    opacity: 1,
                    left: 0,
                    height: ref.offsetHeight
                  });

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    },
    leave: function leave(item) {
      return /*#__PURE__*/function () {
        var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee2(next, cancel) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return next({
                    opacity: 0,
                    height: 0,
                    left: 40
                  });

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x2, _x3) {
          return _ref2.apply(this, arguments);
        };
      }();
    },
    keys: function keys(item) {
      return item.attribute;
    }
  };
  var enabledTransitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useTransition"])(enabledToggles, config);
  var disabledTransitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useTransition"])(disabledToggles, config);
  var getOnChangeCallback = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (item) {
    return function (value) {
      if (typeof item.onChange === 'function') {
        item.onChange(value);
      }

      onChange(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item.attribute, value));
    };
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: 'components-toggle-group__panel',
    key: 'toggle-group-controls'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: 'components-toggle-group'
  }, !!enabledToggles.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: 'components-toggle-group__toggle-list  components-toggle-group__toggle-list--enabled'
  }, enabledTransitions(function (props, item, _ref3) {
    var key = _ref3.key;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
      key: key,
      style: props,
      className: 'components-toggle-group__toggle-list-animated'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      ref: function ref(_ref4) {
        return _ref4 && refMap.set(item, _ref4);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: "components-toggle-group__toggle-list-item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToggleControl"], {
      label: item.label,
      checked: !!item.value,
      onChange: getOnChangeCallback(item)
    }))));
  })), !!disabledToggles.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("label", {
    className: 'components-toggle-group__toggle-list-label'
  }, "Elements you aren't using"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: 'components-toggle-group__toggle-list  components-toggle-group__toggle-list--disabled'
  }, disabledTransitions(function (props, item, _ref5) {
    var key = _ref5.key;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
      key: key,
      style: props,
      className: 'components-toggle-group__toggle-list-animated'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      ref: function ref(_ref6) {
        return _ref6 && refMap.set(item, _ref6);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: "components-toggle-group__toggle-list-item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToggleControl"], {
      label: item.label,
      checked: !!item.value,
      onChange: getOnChangeCallback(item)
    }))));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ToggleGroup);


/***/ }),

/***/ "./packages/block-editor/build-module/components/variation-picker/index.js":
/*!*********************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/variation-picker/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);







var VariationPicker = function VariationPicker(props) {
  var _blockType$icon;

  var setAttributes = props.setAttributes,
      clientId = props.clientId,
      name = props.name;

  var _useSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])(function (select) {
    var _select = select('core/blocks'),
        getBlockType = _select.getBlockType,
        getBlockVariations = _select.getBlockVariations,
        getDefaultBlockVariation = _select.getDefaultBlockVariation;

    return {
      blockType: getBlockType(name),
      variations: getBlockVariations(name),
      defaultVariation: getDefaultBlockVariation(name)
    };
  }, [name]),
      blockType = _useSelect.blockType,
      variations = _useSelect.variations,
      defaultVariation = _useSelect.defaultVariation;

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])('core/block-editor'),
      replaceInnerBlocks = _useDispatch.replaceInnerBlocks;

  var onSelectVariation = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var nextVariation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultVariation;
    setAttributes(nextVariation.attributes);

    if (nextVariation.innerBlocks) {
      replaceInnerBlocks(clientId, Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["createBlocksFromInnerBlocksTemplate"])(nextVariation.innerBlocks));
    }
  }, [defaultVariation]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["__experimentalBlockVariationPicker"], {
    icon: blockType === null || blockType === void 0 ? void 0 : (_blockType$icon = blockType.icon) === null || _blockType$icon === void 0 ? void 0 : _blockType$icon.src,
    label: blockType === null || blockType === void 0 ? void 0 : blockType.title,
    instructions: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select a variation to start with.', 'nova-blocks'),
    variations: variations,
    onSelect: onSelectVariation,
    allowSkip: true
  });
};

/* harmony default export */ __webpack_exports__["default"] = (VariationPicker);


/***/ }),

/***/ "./packages/block-editor/build-module/components/with-visibility/index.js":
/*!********************************************************************************!*\
  !*** ./packages/block-editor/build-module/components/with-visibility/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filters_with_controls_visibility_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../filters/with-controls-visibility/context */ "./packages/block-editor/build-module/filters/with-controls-visibility/context.js");




var withVisibility = function withVisibility(id) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return function (OriginalComponent) {
    return function (props) {
      var visibilityContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_filters_with_controls_visibility_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
      var config = visibilityContext[id];
      var fallbackValue = typeof config === "undefined" ? defaultValue : false;

      if (fallbackValue || config === true) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
      }

      return null;
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withVisibility);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/index.js":
/*!*************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/index.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _with_card_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./with-card-details */ "./packages/block-editor/build-module/filters/with-card-details/index.js");
/* harmony import */ var _with_card_elements_visibility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with-card-elements-visibility */ "./packages/block-editor/build-module/filters/with-card-elements-visibility/index.js");
/* harmony import */ var _with_content_position_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-content-position-matrix */ "./packages/block-editor/build-module/filters/with-content-position-matrix/index.js");
/* harmony import */ var _with_controls_sections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./with-controls-sections */ "./packages/block-editor/build-module/filters/with-controls-sections/index.js");
/* harmony import */ var _with_controls_visibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./with-controls-visibility */ "./packages/block-editor/build-module/filters/with-controls-visibility/index.js");
/* harmony import */ var _with_deprecated_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./with-deprecated-group */ "./packages/block-editor/build-module/filters/with-deprecated-group/index.js");
/* harmony import */ var _with_font_size_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./with-font-size-picker */ "./packages/block-editor/build-module/filters/with-font-size-picker/index.js");
/* harmony import */ var _with_on_select_images__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./with-on-select-images */ "./packages/block-editor/build-module/filters/with-on-select-images/index.js");
/* harmony import */ var _with_random_defaults__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./with-random-defaults */ "./packages/block-editor/build-module/filters/with-random-defaults/index.js");
/* harmony import */ var _with_custom_align__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./with-custom-align */ "./packages/block-editor/build-module/filters/with-custom-align/index.js");
/* harmony import */ var _with_card_elements_stacking__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./with-card-elements-stacking */ "./packages/block-editor/build-module/filters/with-card-elements-stacking/index.js");
/* harmony import */ var _with_collection_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./with-collection-layout */ "./packages/block-editor/build-module/filters/with-collection-layout/index.js");
/* harmony import */ var _with_preview_attributes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./with-preview-attributes */ "./packages/block-editor/build-module/filters/with-preview-attributes/index.js");
/* harmony import */ var _with_overlay_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./with-overlay-filter */ "./packages/block-editor/build-module/filters/with-overlay-filter/index.js");
/* harmony import */ var _with_space_and_sizing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./with-space-and-sizing */ "./packages/block-editor/build-module/filters/with-space-and-sizing/index.js");
// before any other hooks that may add controls to prevent losing focus
 // @todo use supports API






 // @todo maybe rely on supports API











/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-details/components/buttons-style.js":
/*!**************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-details/components/buttons-style.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");






var ButtonsStyleControl = function ButtonsStyleControl(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var buttonsStyle = attributes.buttonsStyle,
      contentType = attributes.contentType;
  var options = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["useSelect"])(function (select) {
    var styles = select('core/blocks').getBlockStyles('core/button');
    return styles.map(function (style) {
      return {
        value: style.name,
        label: style.label
      };
    });
  });

  if (!['auto', 'fields'].includes(contentType)) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Buttons Style', 'nova-blocks'),
    value: buttonsStyle,
    onChange: function onChange(buttonsStyle) {
      setAttributes({
        buttonsStyle: buttonsStyle
      });
    },
    options: options
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components__WEBPACK_IMPORTED_MODULE_4__["withVisibility"])('buttons-style')(ButtonsStyleControl));


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-details/components/card-title-level.js":
/*!*****************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-details/components/card-title-level.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");







var CardTitleLevel = function CardTitleLevel(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var cardTitleLevel = attributes.cardTitleLevel,
      cardTitleFontSize = attributes.cardTitleFontSize;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "components-base-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'components-base-control__field'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: 'components-base-control__label'
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Card Title Heading', 'nova-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["HeadingToolbar"], {
    minLevel: 1,
    maxLevel: 5,
    selectedLevel: cardTitleLevel,
    onChange: function onChange(cardTitleLevel) {
      setAttributes({
        cardTitleLevel: cardTitleLevel
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Card Title Font Size', 'nova-blocks'),
    value: cardTitleFontSize,
    onChange: function onChange(cardTitleFontSize) {
      setAttributes({
        cardTitleFontSize: cardTitleFontSize
      });
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components__WEBPACK_IMPORTED_MODULE_4__["withVisibility"])('card-title-level')(CardTitleLevel));


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-details/components/collection-title-level.js":
/*!***********************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-details/components/collection-title-level.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");






var CollectionTitleLevel = function CollectionTitleLevel(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var collectionTitleLevel = attributes.collectionTitleLevel,
      collectionTitleFontSize = attributes.collectionTitleFontSize;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "components-base-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'components-base-control__field'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: 'components-base-control__label'
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Collection Title Heading', 'nova-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["HeadingToolbar"], {
    minLevel: 1,
    maxLevel: 5,
    selectedLevel: collectionTitleLevel,
    onChange: function onChange(collectionTitleLevel) {
      setAttributes({
        collectionTitleLevel: collectionTitleLevel
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["FontSizePicker"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Collection Title Font Size', 'nova-blocks'),
    value: collectionTitleFontSize,
    onChange: function onChange(collectionTitleFontSize) {
      setAttributes({
        collectionTitleFontSize: collectionTitleFontSize
      });
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components__WEBPACK_IMPORTED_MODULE_3__["withVisibility"])('collection-title-level')(CollectionTitleLevel));


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-details/components/index.js":
/*!******************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-details/components/index.js ***!
  \******************************************************************************************/
/*! exports provided: ButtonsStyle, CardTitleLevel, CollectionTitleLevel, MetadataSource, MetadataPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttons_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons-style */ "./packages/block-editor/build-module/filters/with-card-details/components/buttons-style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonsStyle", function() { return _buttons_style__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _card_title_level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-title-level */ "./packages/block-editor/build-module/filters/with-card-details/components/card-title-level.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardTitleLevel", function() { return _card_title_level__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _collection_title_level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection-title-level */ "./packages/block-editor/build-module/filters/with-card-details/components/collection-title-level.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollectionTitleLevel", function() { return _collection_title_level__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _metadata_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata-source */ "./packages/block-editor/build-module/filters/with-card-details/components/metadata-source.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetadataSource", function() { return _metadata_source__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _metadata_position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadata-position */ "./packages/block-editor/build-module/filters/with-card-details/components/metadata-position.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetadataPosition", function() { return _metadata_position__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-details/components/metadata-position.js":
/*!******************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-details/components/metadata-position.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");





var MetadataPosition = function MetadataPosition(props) {
  var metadataPosition = props.attributes.metadataPosition,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Metadata Position', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
    key: 'collection-image-resizing',
    selected: metadataPosition,
    onChange: function onChange(metadataPosition) {
      setAttributes({
        metadataPosition: metadataPosition
      });
    },
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Above Title', 'nova-blocks'),
      value: 'above-title'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Below Title', 'nova-blocks'),
      value: 'below-title'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Split (Above Title / Below Content)', 'nova-blocks'),
      value: 'split'
    }]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components__WEBPACK_IMPORTED_MODULE_3__["withVisibility"])('metadata-position')(MetadataPosition));


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-details/components/metadata-source.js":
/*!****************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-details/components/metadata-source.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");





var MetadataSource = function MetadataSource(props) {
  var _props$attributes = props.attributes,
      primaryMetadata = _props$attributes.primaryMetadata,
      secondaryMetadata = _props$attributes.secondaryMetadata,
      showMeta = _props$attributes.showMeta,
      setAttributes = props.setAttributes;

  if (!showMeta) {
    return null;
  }

  var metaSourceOptions = [{
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None', 'nova-blocks'),
    value: 'none'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Author', 'nova-blocks'),
    value: 'author'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Category', 'nova-blocks'),
    value: 'category'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Comments', 'nova-blocks'),
    value: 'comments'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Date', 'nova-blocks'),
    value: 'date'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Tags', 'nova-blocks'),
    value: 'tags'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Reading time', 'nova-blocks'),
    value: 'reading-time'
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Additional Information', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    key: 'primary-metadata-source',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Primary Metadata', 'nova-blocks'),
    value: primaryMetadata,
    onChange: function onChange(primaryMetadata) {
      setAttributes({
        primaryMetadata: primaryMetadata
      });
    },
    options: metaSourceOptions
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    key: 'secondary-metadata-source',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Secondary Metadata', 'nova-blocks'),
    value: secondaryMetadata,
    onChange: function onChange(secondaryMetadata) {
      setAttributes({
        secondaryMetadata: secondaryMetadata
      });
    },
    options: metaSourceOptions
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components__WEBPACK_IMPORTED_MODULE_3__["withVisibility"])('metadata-source')(MetadataSource));


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-details/index.js":
/*!*******************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-details/index.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector-controls */ "./packages/block-editor/build-module/filters/with-card-details/inspector-controls.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var attributes = {
  level: {
    type: "number",
    "default": 2
  },
  cardTitleLevel: {
    type: "number",
    "default": 3
  },
  cardTitleFontSize: {
    type: "string",
    "default": "normal"
  },
  collectionTitleLevel: {
    type: "number",
    "default": 2
  },
  collectionTitleFontSize: {
    type: "string",
    "default": "normal"
  },
  metadataPosition: {
    type: "string",
    "default": "above-title"
  },
  primaryMetadata: {
    type: "string",
    "default": "category"
  },
  secondaryMetadata: {
    type: "string",
    "default": "date"
  },
  buttonsStyle: {
    type: "string",
    "default": "text"
  }
};
var ALLOWED_BLOCKS = ['novablocks/cards-collection', 'novablocks/posts-collection', 'novablocks/supernova'];
var withCardDetailsControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    if (!ALLOWED_BLOCKS.includes(props.name)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_inspector_controls__WEBPACK_IMPORTED_MODULE_4__["default"], props));
  };
}, 'withCardDetailsControls');
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__["addFilter"])('editor.BlockEdit', 'novablocks/with-card-details-controls', withCardDetailsControls);
var blocksWithCardDetailsAttributes = ['novablocks/posts-collection', 'novablocks/cards-collection', 'novablocks/card', 'novablocks/supernova', 'novablocks/supernova-item'];

function withCardDetailsAttributes(block) {
  if (!blocksWithCardDetailsAttributes.includes(block.name)) {
    return block;
  }

  return _objectSpread(_objectSpread({}, block), {}, {
    attributes: _objectSpread(_objectSpread({}, block.attributes), attributes)
  });
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__["addFilter"])('blocks.registerBlockType', 'novablocks/with-card-details-attributes', withCardDetailsAttributes);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-details/inspector-controls.js":
/*!********************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-details/inspector-controls.js ***!
  \********************************************************************************************/
/*! exports provided: CardDetailsContent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDetailsContent", function() { return CardDetailsContent; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./packages/block-editor/build-module/filters/with-card-details/components/index.js");







var InspectorControls = function InspectorControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var level = attributes.level,
      postsToShow = attributes.postsToShow,
      columns = attributes.columns; // Hide the "Collection" section when there is 
  // a single item in a single column 
  // Examples: Media Card, Hero Card

  if (postsToShow === 1 && columns === 1) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ControlsSection"], {
    id: 'card-layout',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Content Details', 'nova-blocks'),
    group: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Card Anatomy', 'nova-blocks'),
    order: 20
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Settings', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CardDetailsContent, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["MetadataSource"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["MetadataPosition"], props)));
};

var CardDetailsContent = Object(_components__WEBPACK_IMPORTED_MODULE_4__["withVisibility"])('card-details-content')(function (props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Content', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["CollectionTitleLevel"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["CardTitleLevel"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["ButtonsStyle"], props));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_components__WEBPACK_IMPORTED_MODULE_4__["withVisibility"])('card-details')(InspectorControls));


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-elements-stacking/controls/card-elements-stacking.js":
/*!*******************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-elements-stacking/controls/card-elements-stacking.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _card_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-layout */ "./packages/block-editor/build-module/filters/with-card-elements-stacking/controls/card-layout.js");
/* harmony import */ var _card_layout_legacy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-layout-legacy */ "./packages/block-editor/build-module/filters/with-card-elements-stacking/controls/card-layout-legacy.js");






var CardElementsStacking = function CardElementsStacking(props) {
  var name = props.name;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Card Elements Stacking Style', 'nova-blocks')
  }, name === 'novablocks/supernova' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_card_layout__WEBPACK_IMPORTED_MODULE_3__["default"], props) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_card_layout_legacy__WEBPACK_IMPORTED_MODULE_4__["default"], props));
};

/* harmony default export */ __webpack_exports__["default"] = (CardElementsStacking);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-elements-stacking/controls/card-layout-legacy.js":
/*!***************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-elements-stacking/controls/card-layout-legacy.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



var CardLayoutLegacy = function CardLayoutLegacy(props) {
  var isLandscape = props.attributes.isLandscape,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RadioControl"], {
    selected: isLandscape ? 'landscape' : 'portrait',
    className: 'nb-card-layout',
    onChange: function onChange(value) {
      setAttributes({
        isLandscape: value === 'landscape'
      });
    },
    options: [{
      label: 'Vertical',
      value: 'portrait'
    }, {
      label: 'Horizontal',
      value: 'landscape'
    }]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CardLayoutLegacy);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-elements-stacking/controls/card-layout.js":
/*!********************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-elements-stacking/controls/card-layout.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




var CardLayout = function CardLayout(props) {
  var cardLayout = props.attributes.cardLayout,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
    selected: cardLayout,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('↓ Vertical ', 'nova-blocks'),
      value: 'vertical'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('↑ Vertical Reverse', 'nova-blocks'),
      value: 'vertical-reverse'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('→ Horizontal', 'nova-blocks'),
      value: 'horizontal'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('← Horizontal Reverse', 'nova-blocks'),
      value: 'horizontal-reverse'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('↺ Stacked', 'nova-blocks'),
      value: 'stacked'
    }],
    onChange: function onChange(cardLayout) {
      setAttributes({
        cardLayout: cardLayout
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CardLayout);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-elements-stacking/controls/index.js":
/*!**************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-elements-stacking/controls/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _card_elements_stacking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-elements-stacking */ "./packages/block-editor/build-module/filters/with-card-elements-stacking/controls/card-elements-stacking.js");





var Controls = function Controls(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["ControlsSection"], {
    id: 'card-elements-stacking',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Elements Stacking', 'nova-blocks'),
    order: 55
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Settings', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_card_elements_stacking__WEBPACK_IMPORTED_MODULE_3__["default"], props)));
};

/* harmony default export */ __webpack_exports__["default"] = (Controls);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-elements-stacking/index.js":
/*!*****************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-elements-stacking/index.js ***!
  \*****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _with_card_elements_stacking_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with-card-elements-stacking-controls */ "./packages/block-editor/build-module/filters/with-card-elements-stacking/with-card-elements-stacking-controls.js");
/* harmony import */ var _with_card_elements_stacking_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-card-elements-stacking-attributes */ "./packages/block-editor/build-module/filters/with-card-elements-stacking/with-card-elements-stacking-attributes.js");



Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('blocks.registerBlockType', 'novablocks/with-card-elements-stacking-attributes', _with_card_elements_stacking_attributes__WEBPACK_IMPORTED_MODULE_2__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('editor.BlockEdit', 'novablocks/with-card-elements-stacking-controls', _with_card_elements_stacking_controls__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-elements-stacking/with-card-elements-stacking-attributes.js":
/*!**************************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-elements-stacking/with-card-elements-stacking-attributes.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var attributes = {
  cardLayout: {
    type: "string",
    "default": "vertical"
  }
};

var withCardElementsStackingAttributes = function withCardElementsStackingAttributes(block) {
  var _block$supports, _block$supports$novaB;

  var cardElementsStackingSupports = block === null || block === void 0 ? void 0 : (_block$supports = block.supports) === null || _block$supports === void 0 ? void 0 : (_block$supports$novaB = _block$supports.novaBlocks) === null || _block$supports$novaB === void 0 ? void 0 : _block$supports$novaB.cardElementsStacking;

  if (cardElementsStackingSupports !== true && (cardElementsStackingSupports === null || cardElementsStackingSupports === void 0 ? void 0 : cardElementsStackingSupports.attributes) !== true) {
    return block;
  }

  return _objectSpread(_objectSpread({}, block), {}, {
    attributes: _objectSpread(_objectSpread({}, block.attributes), attributes)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (withCardElementsStackingAttributes);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-elements-stacking/with-card-elements-stacking-controls.js":
/*!************************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-elements-stacking/with-card-elements-stacking-controls.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ "./packages/block-editor/build-module/filters/with-card-elements-stacking/controls/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks */ "./packages/block-editor/build-module/hooks/index.js");





var withCardElementsStackingControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var _supports$novaBlocks, _supports$novaBlocks2, _supports$novaBlocks3;

    var supports = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useSupports"])(props.name);

    if ((supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks = supports.novaBlocks) === null || _supports$novaBlocks === void 0 ? void 0 : _supports$novaBlocks.cardElementsStacking) !== true && (supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks2 = supports.novaBlocks) === null || _supports$novaBlocks2 === void 0 ? void 0 : (_supports$novaBlocks3 = _supports$novaBlocks2.cardElementsStacking) === null || _supports$novaBlocks3 === void 0 ? void 0 : _supports$novaBlocks3.controls) !== true) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_2__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props));
  };
}, 'withCardElementsStackingControls');
/* harmony default export */ __webpack_exports__["default"] = (withCardElementsStackingControls);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-elements-visibility/components/card-elements-visibility-toggles/index.js":
/*!***************************************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-elements-visibility/components/card-elements-visibility-toggles/index.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../index */ "./packages/block-editor/build-module/index.js");
/* harmony import */ var _toggles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toggles */ "./packages/block-editor/build-module/filters/with-card-elements-visibility/components/card-elements-visibility-toggles/toggles.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







var CardElementsVisibilityToggles = function CardElementsVisibilityToggles(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var postType = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(function (select) {
    return select('core/editor').getCurrentPostType();
  }, []);

  var _useEntityProp = Object(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__["useEntityProp"])('postType', postType, 'meta'),
      _useEntityProp2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useEntityProp, 2),
      meta = _useEntityProp2[0],
      setMeta = _useEntityProp2[1];

  var blockToggles = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    var align = attributes.align,
        columns = attributes.columns,
        cardLayout = attributes.cardLayout,
        layoutStyle = attributes.layoutStyle,
        contentType = attributes.contentType;
    var toggles = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_toggles__WEBPACK_IMPORTED_MODULE_7__["collectionToggles"]), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_toggles__WEBPACK_IMPORTED_MODULE_7__["mediaToggles"])); // A block is considered carousel when layoutStyle,
    // has been set to carousel, however we may extend that,
    // so the postsToShow is > 1.

    var IS_CAROUSEL = 'carousel' === layoutStyle; // Card is stacked when cardLayout has been set to stacked.

    var CARD_IS_STACKED = 'stacked' === cardLayout; // A block is considered hero when cardLayout is stacked,
    // and the postsToShow is equal with 1.

    var IS_HERO = CARD_IS_STACKED && 1 === columns && 'full' === align;

    if ('custom' !== contentType) {
      toggles.push.apply(toggles, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_toggles__WEBPACK_IMPORTED_MODULE_7__["contentElementsToggle"]));
    } else {
      toggles.push.apply(toggles, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_toggles__WEBPACK_IMPORTED_MODULE_7__["contentToggles"]));
    }

    if (IS_HERO) {
      toggles.push.apply(toggles, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_toggles__WEBPACK_IMPORTED_MODULE_7__["heroToggles"]));
    }

    if (IS_CAROUSEL) {
      toggles.push.apply(toggles, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_toggles__WEBPACK_IMPORTED_MODULE_7__["carouselToggles"]));
    }

    return toggles.filter(function (toggle) {
      return "meta" !== toggle.type || !!postType;
    });
  }, [attributes, postType]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_6__["ToggleGroup"], {
    onChange: setAttributes,
    toggles: blockToggles.map(function (toggle) {
      var value = 'meta' === toggle.type ? meta[toggle.attribute] : attributes[toggle.attribute];
      return _objectSpread(_objectSpread({}, toggle), {}, {
        value: value,
        onChange: function onChange(newValue) {
          if ('meta' === toggle.type && !!postType) {
            setMeta(_objectSpread(_objectSpread({}, meta), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, toggle.attribute, newValue)));
          } else {
            setAttributes(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, toggle.attribute, newValue));
          }
        }
      });
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CardElementsVisibilityToggles);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-elements-visibility/components/card-elements-visibility-toggles/toggles.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-elements-visibility/components/card-elements-visibility-toggles/toggles.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: carouselToggles, collectionToggles, mediaToggles, contentElementsToggle, contentToggles, heroToggles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carouselToggles", function() { return carouselToggles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectionToggles", function() { return collectionToggles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaToggles", function() { return mediaToggles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentElementsToggle", function() { return contentElementsToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentToggles", function() { return contentToggles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heroToggles", function() { return heroToggles; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

var collectionToggles = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Collection Title', 'nova-blocks'),
  attribute: 'showCollectionTitle'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Collection Subtitle', 'nova-blocks'),
  attribute: 'showCollectionSubtitle'
}];
var mediaToggles = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Media', 'nova-blocks'),
  attribute: 'showMedia'
}];
var contentElementsToggle = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Title', 'nova-blocks'),
  attribute: 'showTitle'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Subtitle', 'nova-blocks'),
  attribute: 'showSubtitle'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Description', 'nova-blocks'),
  attribute: 'showDescription'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Buttons', 'nova-blocks'),
  attribute: 'showButtons'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Meta', 'nova-blocks'),
  attribute: 'showMeta'
}];
var contentToggles = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Inner Content', 'nova-blocks'),
  attribute: 'displayInnerContent'
}];
var heroToggles = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Position Indicators', 'nova-blocks'),
  attribute: 'novablocks_hero_position_indicators',
  type: 'meta'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Scroll Indicator', 'nova-blocks'),
  attribute: 'scrollIndicatorBlock'
}];
var carouselToggles = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Pagination', 'nova-blocks'),
  attribute: 'showPagination'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Arrows', 'nova-blocks'),
  attribute: 'showArrows'
}];



/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-elements-visibility/components/index.js":
/*!******************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-elements-visibility/components/index.js ***!
  \******************************************************************************************************/
/*! exports provided: CardElementsVisibilityToggles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_elements_visibility_toggles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-elements-visibility-toggles */ "./packages/block-editor/build-module/filters/with-card-elements-visibility/components/card-elements-visibility-toggles/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardElementsVisibilityToggles", function() { return _card_elements_visibility_toggles__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-elements-visibility/controls.js":
/*!**********************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-elements-visibility/controls.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./packages/block-editor/build-module/filters/with-card-elements-visibility/components/index.js");





var CardElementsDisplaySection = function CardElementsDisplaySection(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["ControlsSection"], {
    id: 'elements-visibility',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Elements Visibility', 'nova-blocks'),
    group: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Card Anatomy', 'nova-blocks'),
    order: 10
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Settings', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Setup what content elements to show for each card.', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["CardElementsVisibilityToggles"], props))));
};

/* harmony default export */ __webpack_exports__["default"] = (CardElementsDisplaySection);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-elements-visibility/index.js":
/*!*******************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-elements-visibility/index.js ***!
  \*******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _with_card_elements_visibility_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with-card-elements-visibility-attributes */ "./packages/block-editor/build-module/filters/with-card-elements-visibility/with-card-elements-visibility-attributes.js");
/* harmony import */ var _with_card_elements_visibility_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-card-elements-visibility-controls */ "./packages/block-editor/build-module/filters/with-card-elements-visibility/with-card-elements-visibility-controls.js");



Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('blocks.registerBlockType', 'novablocks/with-card-elements-visibility-attributes', _with_card_elements_visibility_attributes__WEBPACK_IMPORTED_MODULE_1__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('editor.BlockEdit', 'novablocks/with-card-elements-visibility-controls', _with_card_elements_visibility_controls__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-elements-visibility/with-card-elements-visibility-attributes.js":
/*!******************************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-elements-visibility/with-card-elements-visibility-attributes.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var attributes = {
  showCollectionTitle: {
    type: "boolean",
    "default": true
  },
  showCollectionSubtitle: {
    type: "boolean",
    "default": true
  },
  showMedia: {
    type: "boolean",
    "default": true
  },
  showTitle: {
    type: "boolean",
    "default": true
  },
  showSubtitle: {
    type: "boolean",
    "default": true
  },
  showDescription: {
    type: "boolean",
    "default": true
  },
  showButtons: {
    type: "boolean",
    "default": true
  },
  showMeta: {
    type: "boolean",
    "default": false
  },
  scrollIndicatorBlock: {
    type: "boolean",
    "default": false
  },
  displayInnerContent: {
    type: "boolean",
    "default": true
  },
  showPagination: {
    type: "boolean",
    "default": false
  },
  showArrows: {
    type: "boolean",
    "default": true
  }
};

var withCardElementsVisibilityAttributes = function withCardElementsVisibilityAttributes(block) {
  var _block$supports, _block$supports$novaB;

  var cardElementsVisibilitySupport = block === null || block === void 0 ? void 0 : (_block$supports = block.supports) === null || _block$supports === void 0 ? void 0 : (_block$supports$novaB = _block$supports.novaBlocks) === null || _block$supports$novaB === void 0 ? void 0 : _block$supports$novaB.cardElementsVisibility;

  if (true !== cardElementsVisibilitySupport && true !== (cardElementsVisibilitySupport === null || cardElementsVisibilitySupport === void 0 ? void 0 : cardElementsVisibilitySupport.attributes)) {
    return block;
  }

  return _objectSpread(_objectSpread({}, block), {}, {
    attributes: _objectSpread(_objectSpread({}, block.attributes), attributes)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (withCardElementsVisibilityAttributes);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-card-elements-visibility/with-card-elements-visibility-controls.js":
/*!****************************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-card-elements-visibility/with-card-elements-visibility-controls.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ "./packages/block-editor/build-module/filters/with-card-elements-visibility/controls.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks */ "./packages/block-editor/build-module/hooks/index.js");





var withCardElementsVisibilityControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var _supports$novaBlocks, _supports$novaBlocks2, _supports$novaBlocks3;

    var supports = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useSupports"])(props.name);

    if (true !== (supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks = supports.novaBlocks) === null || _supports$novaBlocks === void 0 ? void 0 : _supports$novaBlocks.cardElementsVisibility) && true !== (supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks2 = supports.novaBlocks) === null || _supports$novaBlocks2 === void 0 ? void 0 : (_supports$novaBlocks3 = _supports$novaBlocks2.cardElementsVisibility) === null || _supports$novaBlocks3 === void 0 ? void 0 : _supports$novaBlocks3.controls)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_2__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props));
  };
}, 'withElementsVisibilityControls');
/* harmony default export */ __webpack_exports__["default"] = (withCardElementsVisibilityControls);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/controls/carousel-layout-controls.js":
/*!****************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/controls/carousel-layout-controls.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _items_count_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./items-count-control */ "./packages/block-editor/build-module/filters/with-collection-layout/controls/items-count-control.js");
/* harmony import */ var _items_per_row_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items-per-row-control */ "./packages/block-editor/build-module/filters/with-collection-layout/controls/items-per-row-control.js");
/* harmony import */ var _items_gap_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./items-gap-control */ "./packages/block-editor/build-module/filters/with-collection-layout/controls/items-gap-control.js");









var CarouselLayoutControls = function CarouselLayoutControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var layoutStyle = attributes.layoutStyle,
      carouselLayout = attributes.carouselLayout,
      postsToShow = attributes.postsToShow;

  if (layoutStyle !== "carousel") {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Number of Cards and Distribution', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_items_count_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    postsToShow: postsToShow,
    setAttributes: setAttributes
  }), carouselLayout === 'fixed' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_items_per_row_control__WEBPACK_IMPORTED_MODULE_5__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_items_gap_control__WEBPACK_IMPORTED_MODULE_6__["default"], props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Layout', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
    key: 'carousel-layout',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Items Layout', 'nova-blocks'),
    selected: carouselLayout,
    onChange: function onChange(carouselLayout) {
      setAttributes({
        carouselLayout: carouselLayout
      });
    },
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fixed Width', 'nova-blocks'),
      value: 'fixed'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Variable Width', 'nova-blocks'),
      value: 'variable'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Content Width', 'nova-blocks'),
      value: 'content'
    }]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CarouselLayoutControls);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/controls/classic-layout-controls.js":
/*!***************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/controls/classic-layout-controls.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _items_count_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items-count-control */ "./packages/block-editor/build-module/filters/with-collection-layout/controls/items-count-control.js");
/* harmony import */ var _items_per_row_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./items-per-row-control */ "./packages/block-editor/build-module/filters/with-collection-layout/controls/items-per-row-control.js");
/* harmony import */ var _items_gap_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items-gap-control */ "./packages/block-editor/build-module/filters/with-collection-layout/controls/items-gap-control.js");







var ClassicLayoutControls = function ClassicLayoutControls(props) {
  if (!['classic', 'masonry'].includes(props.attributes.layoutStyle)) {
    return null;
  }

  var postsToShow = props.attributes.postsToShow,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_2__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Cards Count', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_items_count_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    postsToShow: postsToShow,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_items_per_row_control__WEBPACK_IMPORTED_MODULE_4__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_items_gap_control__WEBPACK_IMPORTED_MODULE_5__["default"], props));
};

/* harmony default export */ __webpack_exports__["default"] = (ClassicLayoutControls);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/controls/collection-layout-style-control.js":
/*!***********************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/controls/collection-layout-style-control.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");




var layoutStyleOptions = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Parametric Grid', 'nova-blocks'),
  value: 'parametric'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Classic Grid', 'nova-blocks'),
  value: 'classic'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Masonry', 'nova-blocks'),
  value: 'masonry'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Carousel', 'nova-blocks'),
  value: 'carousel'
}];
var CollectionLayoutStyleControl = Object(_components__WEBPACK_IMPORTED_MODULE_3__["withVisibility"])('collection-layout-style')(function (props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var layoutStyle = attributes.layoutStyle;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Collection Layout Style', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
    selected: layoutStyle,
    className: 'nb-collection-layout',
    onChange: function onChange(layoutStyle) {
      setAttributes({
        layoutStyle: layoutStyle
      });
    },
    options: layoutStyleOptions
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (CollectionLayoutStyleControl);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/controls/index.js":
/*!*********************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/controls/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presets */ "./packages/block-editor/build-module/filters/with-collection-layout/controls/presets.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./packages/block-editor/build-module/filters/with-collection-layout/utils/index.js");
/* harmony import */ var _parametric_layout_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parametric-layout-controls */ "./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/index.js");
/* harmony import */ var _classic_layout_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classic-layout-controls */ "./packages/block-editor/build-module/filters/with-collection-layout/controls/classic-layout-controls.js");
/* harmony import */ var _carousel_layout_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carousel-layout-controls */ "./packages/block-editor/build-module/filters/with-collection-layout/controls/carousel-layout-controls.js");
/* harmony import */ var _collection_layout_style_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./collection-layout-style-control */ "./packages/block-editor/build-module/filters/with-collection-layout/controls/collection-layout-style-control.js");











var Controls = function Controls(props) {
  var _props$attributes = props.attributes,
      layoutStyle = _props$attributes.layoutStyle,
      postsToShow = _props$attributes.postsToShow,
      columns = _props$attributes.columns; // Hide the "Collection" section when there is 
  // a single item in a single column 
  // Examples: Media Card, Hero Card

  if (postsToShow === 1 && columns === 1) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ControlsSection"], {
    id: 'collection-layout',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Collection Layout', 'nova-blocks'),
    order: 20
  }, 'parametric' === layoutStyle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Presets', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["PresetControl"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Choose a layout preset:', 'nova-blocks'),
    options: _presets__WEBPACK_IMPORTED_MODULE_4__["default"],
    randomize: _utils__WEBPACK_IMPORTED_MODULE_5__["getRandomAttributes"]
  }, props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Settings', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_collection_layout_style_control__WEBPACK_IMPORTED_MODULE_9__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_parametric_layout_controls__WEBPACK_IMPORTED_MODULE_6__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_classic_layout_controls__WEBPACK_IMPORTED_MODULE_7__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_carousel_layout_controls__WEBPACK_IMPORTED_MODULE_8__["default"], props)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components__WEBPACK_IMPORTED_MODULE_3__["withVisibility"])('collection-layout-section')(Controls));


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/controls/items-count-control.js":
/*!***********************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/controls/items-count-control.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




var ItemsCountControl = function ItemsCountControl(props) {
  var postsToShow = props.postsToShow,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    key: 'collection-items-count',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Items Count', 'nova-blocks'),
    value: postsToShow,
    onChange: function onChange(postsToShow) {
      setAttributes({
        postsToShow: postsToShow
      });
    },
    min: 1,
    max: 20,
    step: 1
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ItemsCountControl);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/controls/items-gap-control.js":
/*!*********************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/controls/items-gap-control.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




var ItemsGapControl = function ItemsGapControl(props) {
  var gridGap = props.attributes.gridGap,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    value: gridGap,
    onChange: function onChange(gridGap) {
      setAttributes({
        gridGap: gridGap
      });
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Items Gap', 'nova-blocks'),
    min: 0,
    max: 100,
    step: 5
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ItemsGapControl);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/controls/items-per-row-control.js":
/*!*************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/controls/items-per-row-control.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




var ItemsPerRowControl = function ItemsPerRowControl(props) {
  var columns = props.attributes.columns,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    value: columns,
    onChange: function onChange(columns) {
      setAttributes({
        columns: columns
      });
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Number of Items per Row', 'nova-blocks'),
    min: 1,
    max: 4
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ItemsPerRowControl);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/block-header-controls.js":
/*!****************************************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/block-header-controls.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components */ "./packages/block-editor/build-module/components/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var BlockHeaderControls = function BlockHeaderControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      headerOptimalPositions = props.headerOptimalPositions;
  var headerColumn = attributes.headerColumn,
      headerPosition = attributes.headerPosition,
      postsToShow = attributes.postsToShow,
      showCollectionTitle = attributes.showCollectionTitle,
      showCollectionSubtitle = attributes.showCollectionSubtitle;

  if (!showCollectionTitle && !showCollectionSubtitle) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Block Header', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Header Placement Area", 'nova-blocks'),
    value: headerPosition,
    onChange: function onChange(headerPosition) {
      setAttributes({
        headerPosition: headerPosition
      });
    },
    min: 0,
    max: postsToShow + 1
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    key: 'header-position-customize-1',
    className: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getControlsClasses"])(attributes, getAttributesByHeaderColumn)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    value: headerColumn,
    onChange: function onChange(headerColumn) {
      var newAttributes = getAttributesByHeaderColumn(_objectSpread(_objectSpread({}, attributes), {}, {
        headerColumn: headerColumn
      }));
      setAttributes(newAttributes);
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Header Item Location', 'nova-blocks'),
    min: 0,
    max: headerOptimalPositions.length - 1
  })));
};

var getAttributesByHeaderColumn = function getAttributesByHeaderColumn(attributes) {
  var headerColumn = attributes.headerColumn;
  var areaColumns = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["applyLayoutEngine"])(attributes);
  var headerOptimalPositions = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getOptimalHeaderPosition"])(areaColumns);
  return _objectSpread(_objectSpread({}, attributes), {}, {
    headerPosition: headerOptimalPositions[headerColumn]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BlockHeaderControls);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/breaking-the-grid-controls.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/breaking-the-grid-controls.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components */ "./packages/block-editor/build-module/components/index.js");







var BreakingTheGridControls = function BreakingTheGridControls(props) {
  var attributes = props.attributes;
  var featuresize = attributes.featuresize,
      featureposition = attributes.featureposition,
      fragmentation = attributes.fragmentation,
      hierarchycrossing = attributes.hierarchycrossing;
  var getMinFeatureSize = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return 1;
  }, []);
  var getMaxFeatureSize = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return attributes.gridcolumns;
  }, [attributes]);
  var getMaxFeaturePosition = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return attributes.gridcolumns - attributes.featuresize + 1;
  }, [attributes]);
  var getMinColumnsFragmentation = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return 0;
  }, []);
  var getMaxColumnsFragmentation = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return Math.max(0, Math.pow(2, attributes.gridcolumns - attributes.featuresize - 1) - 1);
  }, [attributes]);
  var normalizeAttributes = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newAttributes) {
    var atts = Object.assign({}, attributes, newAttributes);
    atts.featuresize = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["clamp"])(atts.featuresize, getMinFeatureSize(), getMaxFeatureSize());
    atts.featureposition = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["clamp"])(atts.featureposition, 1, getMaxFeaturePosition());
    atts.fragmentation = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["clamp"])(atts.fragmentation, getMinColumnsFragmentation(), getMaxColumnsFragmentation());
    return atts;
  }, [attributes]);
  var setAttributes = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newAttributes) {
    props.setAttributes(normalizeAttributes(newAttributes));
  }, [normalizeAttributes]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Breaking the Grid', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Featured Area Size', 'nova-blocks'),
    value: featuresize,
    onChange: function onChange(featuresize) {
      if (typeof featuresize !== "undefined") {
        setAttributes({
          featuresize: featuresize
        });
      }
    },
    min: getMinFeatureSize(attributes),
    max: getMaxFeatureSize(attributes)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Featured Area Position', 'nova-blocks'),
    value: featureposition,
    onChange: function onChange(featureposition) {
      if (typeof featureposition !== "undefined") {
        setAttributes({
          featureposition: featureposition
        });
      }
    },
    min: 1,
    max: getMaxFeaturePosition(attributes)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Grid Areas Fragmentation', 'nova-blocks'),
    value: fragmentation,
    onChange: function onChange(fragmentation) {
      if (typeof fragmentation !== "undefined") {
        setAttributes({
          fragmentation: fragmentation
        });
      }
    },
    min: getMinColumnsFragmentation(attributes),
    max: getMaxColumnsFragmentation(attributes)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Grid Areas Crossing', 'nova-blocks'),
    value: hierarchycrossing,
    onChange: function onChange(hierarchycrossing) {
      if (typeof hierarchycrossing !== "undefined") {
        setAttributes({
          hierarchycrossing: hierarchycrossing
        });
      }
    },
    min: 0,
    max: 200
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BreakingTheGridControls);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/debug-controls.js":
/*!*********************************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/debug-controls.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks */ "./packages/block-editor/build-module/hooks/index.js");





/**
 * Internal dependencies
 */



var DebugControls = function DebugControls(props) {
  var novablocksSettings = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useSettings"])();

  if (!(novablocksSettings !== null && novablocksSettings !== void 0 && novablocksSettings.debug)) {
    return null;
  }

  var _props$attributes = props.attributes,
      toggleScale = _props$attributes.toggleScale,
      toggleMask = _props$attributes.toggleMask,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Debug Parameters', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display Preview Scale', 'nova-blocks'),
    checked: toggleScale,
    onChange: function onChange() {
      return setAttributes({
        toggleScale: !toggleScale
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display Preview Mask', 'nova-blocks'),
    checked: toggleMask,
    onChange: function onChange() {
      return setAttributes({
        toggleMask: !toggleMask
      });
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DebugControls);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/grid-anatomy-controls.js":
/*!****************************************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/grid-anatomy-controls.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _items_gap_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../items-gap-control */ "./packages/block-editor/build-module/filters/with-collection-layout/controls/items-gap-control.js");






var GridAnatomyControls = function GridAnatomyControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var featuresize = attributes.featuresize,
      featureposition = attributes.featureposition,
      gridcolumns = attributes.gridcolumns,
      gridrows = attributes.gridrows;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Grid Anatomy', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Columns", 'nova-blocks'),
    value: gridcolumns,
    onChange: function onChange(gridcolumns) {
      if (typeof gridcolumns !== "undefined") {
        var maxFeaturePosition = gridcolumns + 1 - featuresize;
        var newFeaturePosition = Math.max(1, Math.min(maxFeaturePosition, featureposition));
        var newFeatureSize = Math.max(1, gridcolumns + 1 - newFeaturePosition);
        setAttributes({
          featuresize: newFeatureSize,
          featureposition: newFeaturePosition,
          gridcolumns: gridcolumns
        });
      }
    },
    min: 1,
    max: 12
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Rows", 'nova-blocks'),
    value: gridrows,
    onChange: function onChange(gridrows) {
      if (typeof gridrows !== "undefined") {
        setAttributes({
          gridrows: gridrows
        });
      }
    },
    min: 1,
    max: 12
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_items_gap_control__WEBPACK_IMPORTED_MODULE_4__["default"], props));
};

/* harmony default export */ __webpack_exports__["default"] = (GridAnatomyControls);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/index.js":
/*!************************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/index.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _debug_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debug-controls */ "./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/debug-controls.js");
/* harmony import */ var _block_header_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block-header-controls */ "./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/block-header-controls.js");
/* harmony import */ var _breaking_the_grid_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breaking-the-grid-controls */ "./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/breaking-the-grid-controls.js");
/* harmony import */ var _grid_anatomy_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid-anatomy-controls */ "./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/grid-anatomy-controls.js");
/* harmony import */ var _parametric_items_count_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parametric-items-count-controls */ "./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/parametric-items-count-controls.js");
/* harmony import */ var _items_regularity_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./items-regularity-controls */ "./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/items-regularity-controls.js");
/* harmony import */ var _miscellaneous_parameters_controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./miscellaneous-parameters-controls */ "./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/miscellaneous-parameters-controls.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }











var ParametricLayoutControls = function ParametricLayoutControls(props) {
  var attributes = props.attributes;

  if (attributes.layoutStyle !== "parametric") {
    return null;
  }

  var areaColumns = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_2__["applyLayoutEngine"])(attributes);
  }, [attributes]);
  var headerOptimalPositions = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_2__["getOptimalHeaderPosition"])(areaColumns);
  }, [areaColumns]);

  var newProps = _objectSpread(_objectSpread({}, props), {}, {
    areaColumns: areaColumns,
    headerOptimalPositions: headerOptimalPositions
  });

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_debug_controls__WEBPACK_IMPORTED_MODULE_3__["default"], newProps), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_grid_anatomy_controls__WEBPACK_IMPORTED_MODULE_6__["default"], newProps), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_breaking_the_grid_controls__WEBPACK_IMPORTED_MODULE_5__["default"], newProps), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_parametric_items_count_controls__WEBPACK_IMPORTED_MODULE_7__["default"], newProps), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_items_regularity_controls__WEBPACK_IMPORTED_MODULE_8__["default"], newProps), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_miscellaneous_parameters_controls__WEBPACK_IMPORTED_MODULE_9__["default"], newProps), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_block_header_controls__WEBPACK_IMPORTED_MODULE_4__["default"], newProps));
};

/* harmony default export */ __webpack_exports__["default"] = (ParametricLayoutControls);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/items-regularity-controls.js":
/*!********************************************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/items-regularity-controls.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components */ "./packages/block-editor/build-module/components/index.js");





var ItemsRegularityControls = function ItemsRegularityControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var imageweightleft = attributes.imageweightleft,
      imageweightright = attributes.imageweightright,
      metadetailsleft = attributes.metadetailsleft,
      metadetailsright = attributes.metadetailsright;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Items Regularity', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Start of Image Variance", 'nova-blocks'),
    value: imageweightleft,
    onChange: function onChange(imageweightleft) {
      if (typeof imageweightleft !== "undefined") {
        setAttributes({
          imageweightleft: imageweightleft
        });
      }
    },
    min: 0,
    max: 10
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("End of Image Variance", 'nova-blocks'),
    value: imageweightright,
    onChange: function onChange(imageweightright) {
      if (typeof imageweightright !== "undefined") {
        setAttributes({
          imageweightright: imageweightright
        });
      }
    },
    min: 0,
    max: 10
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Start of Meta Fidelity", 'nova-blocks'),
    value: metadetailsleft,
    onChange: function onChange(metadetailsleft) {
      if (typeof metadetailsleft !== "undefined") {
        setAttributes({
          metadetailsleft: metadetailsleft
        });
      }
    },
    min: 0,
    max: 10
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("End of Meta Fidelity", 'nova-blocks'),
    value: metadetailsright,
    onChange: function onChange(metadetailsright) {
      if (typeof metadetailsright !== "undefined") {
        setAttributes({
          metadetailsright: metadetailsright
        });
      }
    },
    min: 0,
    max: 10
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemsRegularityControls);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/miscellaneous-parameters-controls.js":
/*!****************************************************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/miscellaneous-parameters-controls.js ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components */ "./packages/block-editor/build-module/components/index.js");





var MiscellaneousParametersControls = function MiscellaneousParametersControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var boostfeature = attributes.boostfeature,
      subfeature = attributes.subfeature,
      balancemdandiw = attributes.balancemdandiw,
      flipcolsrows = attributes.flipcolsrows;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Miscellanous Parameters', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Boost Featured Area Emphasis', 'nova-blocks'),
    checked: boostfeature,
    onChange: function onChange() {
      setAttributes({
        boostfeature: !boostfeature
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display Sub-featured Area', 'nova-blocks'),
    checked: subfeature,
    onChange: function onChange() {
      setAttributes({
        subfeature: !subfeature
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Balance Meta and Image', 'nova-blocks'),
    checked: balancemdandiw,
    onChange: function onChange() {
      setAttributes({
        balancemdandiw: !balancemdandiw
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Flip Cols and Rows', 'nova-blocks'),
    checked: flipcolsrows,
    onChange: function onChange() {
      setAttributes({
        flipcolsrows: !flipcolsrows
      });
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MiscellaneousParametersControls);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/parametric-items-count-controls.js":
/*!**************************************************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/controls/parametric-layout-controls/parametric-items-count-controls.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _items_count_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../items-count-control */ "./packages/block-editor/build-module/filters/with-collection-layout/controls/items-count-control.js");








var ParametricItemsCountControls = function ParametricItemsCountControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      areaColumns = props.areaColumns;
  var _attributes$automatic = attributes.automaticPostsNumber,
      automaticPostsNumber = _attributes$automatic === void 0 ? false : _attributes$automatic,
      postsToShow = attributes.postsToShow;
  var autoPostsCount = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var postsCount = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["getPostsCount"])(areaColumns); // Update the attributes when the autoPostCount changes.

    if (automaticPostsNumber && postsToShow !== postsCount) {
      setAttributes({
        "postsToShow": postsCount
      });
    }

    return postsCount;
  }, [areaColumns]); // Used to store previous values of postsToShow.

  var tempPostsToShow = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return attributes.tempPostsToShow || postsToShow;
  }, [attributes]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Items Count', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["getControlsClasses"])(attributes, function (_ref) {
      var automaticPostsNumber = _ref.automaticPostsNumber,
          postsToShow = _ref.postsToShow;
      return {
        postsToShow: automaticPostsNumber ? -1 : postsToShow
      };
    })
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_items_count_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    postsToShow: automaticPostsNumber ? autoPostsCount : postsToShow,
    setAttributes: setAttributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Auto-count Items Number', 'nova-blocks'),
    checked: automaticPostsNumber,
    onChange: function onChange(automaticPostsNumber) {
      setAttributes({
        postsToShow: automaticPostsNumber ? autoPostsCount : tempPostsToShow,
        tempPostsToShow: postsToShow,
        automaticPostsNumber: automaticPostsNumber
      });
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ParametricItemsCountControls);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/controls/presets.js":
/*!***********************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/controls/presets.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var presets = [{
  label: 'L27: Brancusi',
  value: 'tear2down7',
  preset: {
    layoutStyle: 'parametric',
    postsToShow: 6,
    gridcolumns: 6,
    gridrows: 6,
    featuresize: 4,
    featureposition: 1,
    fragmentation: 1,
    imageweightleft: 1,
    imageweightright: 2,
    metadetailsleft: 10,
    metadetailsright: 6,
    boostfeature: false,
    subfeature: true,
    balancemdandiw: false,
    hierarchycrossing: 30,
    flipcolsrows: false,
    headerPosition: 0
  }
}, {
  label: 'L47: Kafka',
  value: 'tear4down7',
  preset: {
    layoutStyle: 'parametric',
    postsToShow: 6,
    gridcolumns: 12,
    gridrows: 8,
    featuresize: 7,
    featureposition: 3,
    fragmentation: 0,
    imageweightleft: 1,
    imageweightright: 0,
    metadetailsleft: 0,
    metadetailsright: 10,
    boostfeature: true,
    subfeature: true,
    balancemdandiw: false,
    hierarchycrossing: 153,
    flipcolsrows: false,
    headerPosition: 0
  }
}, {
  label: 'L13: Aristotle',
  value: 'tear1down3',
  preset: {
    layoutStyle: 'parametric',
    postsToShow: 6,
    gridcolumns: 5,
    gridrows: 4,
    featuresize: 2,
    featureposition: 2,
    fragmentation: 0,
    imageweightleft: 1,
    imageweightright: 0,
    metadetailsleft: 6,
    metadetailsright: 3,
    boostfeature: false,
    subfeature: false,
    balancemdandiw: false,
    hierarchycrossing: 0,
    flipcolsrows: false,
    headerPosition: 0
  }
}, {
  label: 'L19: Nietzsche',
  value: 'tear1down9',
  preset: {
    layoutStyle: 'parametric',
    postsToShow: 11,
    gridcolumns: 6,
    gridrows: 5,
    featuresize: 3,
    featureposition: 2,
    fragmentation: 2,
    imageweightleft: 1,
    imageweightright: 0,
    metadetailsleft: 0,
    metadetailsright: 0,
    boostfeature: false,
    subfeature: true,
    balancemdandiw: false,
    hierarchycrossing: 0,
    flipcolsrows: false,
    headerPosition: 0
  }
}, {
  label: 'L23: Popper',
  value: 'tear1down9bis',
  preset: {
    layoutStyle: 'parametric',
    postsToShow: 11,
    gridcolumns: 7,
    gridrows: 5,
    featuresize: 3,
    featureposition: 3,
    fragmentation: 2,
    imageweightleft: 1,
    imageweightright: 0,
    metadetailsleft: 0,
    metadetailsright: 0,
    boostfeature: false,
    subfeature: true,
    balancemdandiw: false,
    hierarchycrossing: 0,
    flipcolsrows: false,
    containerHeight: 45,
    headerPosition: 0
  }
}, {
  label: 'L10: Tolstoy',
  value: 'tear1down0',
  preset: {
    layoutStyle: 'parametric',
    postsToShow: 10,
    gridcolumns: 10,
    gridrows: 6,
    featuresize: 3,
    featureposition: 6,
    fragmentation: 0,
    imageweightleft: 1,
    imageweightright: 0,
    metadetailsleft: 0,
    metadetailsright: 0,
    boostfeature: false,
    subfeature: false,
    balancemdandiw: false,
    hierarchycrossing: 0,
    flipcolsrows: false,
    headerPosition: 0
  }
}, {
  label: 'L15: Asimov',
  value: 'tear1down5',
  preset: {
    layoutStyle: 'parametric',
    postsToShow: 7,
    gridcolumns: 6,
    gridrows: 6,
    featuresize: 2,
    featureposition: 4,
    fragmentation: 0,
    imageweightleft: 8,
    imageweightright: 2,
    metadetailsleft: 7,
    metadetailsright: 2,
    boostfeature: false,
    subfeature: false,
    balancemdandiw: false,
    hierarchycrossing: 0,
    flipcolsrows: false,
    headerPosition: 0
  }
}, {
  label: 'L45: Orwell',
  value: 'tear4down5',
  preset: {
    layoutStyle: 'parametric',
    postsToShow: 13,
    gridcolumns: 8,
    gridrows: 6,
    featuresize: 4,
    featureposition: 1,
    fragmentation: 2,
    imageweightleft: 8,
    imageweightright: 8,
    metadetailsleft: 7,
    metadetailsright: 2,
    boostfeature: false,
    subfeature: false,
    balancemdandiw: false,
    hierarchycrossing: 120,
    flipcolsrows: false,
    headerPosition: 0
  }
}, {
  label: 'L12: Dostoevsky',
  value: 'tear1down2',
  preset: {
    layoutStyle: 'parametric',
    postsToShow: 7,
    gridcolumns: 6,
    gridrows: 4,
    featuresize: 3,
    featureposition: 1,
    fragmentation: 2,
    imageweightleft: 1,
    imageweightright: 0,
    metadetailsleft: 7,
    metadetailsright: 0,
    boostfeature: false,
    subfeature: false,
    balancemdandiw: false,
    hierarchycrossing: 50,
    flipcolsrows: false,
    headerPosition: 0
  }
}, {
  label: 'L32: Eliade',
  status: 'development',
  value: 'tear3down2',
  preset: {
    layoutStyle: 'parametric',
    postsToShow: 8,
    gridcolumns: 4,
    gridrows: 8,
    featuresize: 2,
    featureposition: 2,
    fragmentation: 0,
    imageweightleft: 1,
    imageweightright: 0,
    metadetailsleft: 0,
    metadetailsright: 3,
    boostfeature: false,
    subfeature: true,
    balancemdandiw: false,
    hierarchycrossing: 0,
    flipcolsrows: false,
    headerPosition: 0
  }
}, {
  label: 'L30: Tolkien',
  value: 'tear3down0',
  preset: {
    layoutStyle: 'parametric',
    postsToShow: 5,
    gridcolumns: 4,
    gridrows: 8,
    featuresize: 2,
    featureposition: 2,
    fragmentation: 0,
    imageweightleft: 1,
    imageweightright: 0,
    metadetailsleft: 0,
    metadetailsright: 3,
    boostfeature: false,
    subfeature: true,
    balancemdandiw: false,
    hierarchycrossing: 0,
    flipcolsrows: false,
    headerPosition: 0
  }
}, {
  label: 'L03: Dumas',
  value: 'tear0down3',
  preset: {
    layoutStyle: 'classic',
    postsToShow: 6,
    columns: 3
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (presets);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/index.js":
/*!************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/index.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _with_collection_layout_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with-collection-layout-attributes */ "./packages/block-editor/build-module/filters/with-collection-layout/with-collection-layout-attributes.js");
/* harmony import */ var _with_collection_layout_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-collection-layout-controls */ "./packages/block-editor/build-module/filters/with-collection-layout/with-collection-layout-controls.js");
/* harmony import */ var _with_collection_layout_with_collection_layout_edit_custom_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../with-collection-layout/with-collection-layout-edit-custom-props */ "./packages/block-editor/build-module/filters/with-collection-layout/with-collection-layout-edit-custom-props.js");




Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('blocks.registerBlockType', 'novablocks/with-collection-layout-attributes', _with_collection_layout_attributes__WEBPACK_IMPORTED_MODULE_1__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('editor.BlockEdit', 'novablocks/with-collection-layout-controls', _with_collection_layout_controls__WEBPACK_IMPORTED_MODULE_2__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('editor.BlockEdit', 'novablocks/with-collection-layout-edit-custom-props', _with_collection_layout_with_collection_layout_edit_custom_props__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/utils/get-random-attributes.js":
/*!**********************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/utils/get-random-attributes.js ***!
  \**********************************************************************************************************/
/*! exports provided: getRandomAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomAttributes", function() { return getRandomAttributes; });
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__);

var getRandomAttributes = function getRandomAttributes() {
  var postsToShow = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomBetween"])(3, 20);
  var gridcolumns = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomBetween"])(2, 6);
  var gridrows = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomBetween"])(2, 12);
  var minFeatureSize = 1;
  var maxFeatureSize = Math.ceil(gridcolumns * 0.75);
  var featuresize = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomBetween"])(minFeatureSize, maxFeatureSize);
  var minFeaturePosition = 1;
  var maxFeaturePosition = gridcolumns - featuresize + 1;
  var featureposition = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomBetween"])(minFeaturePosition, maxFeaturePosition);
  var minColumnsFragmentation = 0;
  var maxColumnsFragmentation = Math.max(0, Math.pow(2, gridcolumns - featuresize - 1) - 1);
  var fragmentation = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomBetween"])(minColumnsFragmentation, maxColumnsFragmentation);
  var imageweightleft = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomBetween"])(0, 10);
  var imageweightright = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomBetween"])(0, 10);
  var metadetailsleft = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomBetween"])(0, 10);
  var metadetailsright = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomBetween"])(0, 10);
  var boostfeature = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomBooleanValue"])();
  var subfeature = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomBooleanValue"])();
  var balancemdandiw = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomBooleanValue"])();
  var hierarchycrossing = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomBetween"])(0, 200);
  var flipcolsrows = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomBooleanValue"])();
  return {
    layoutStyle: 'parametric',
    postsToShow: postsToShow,
    automaticPostsNumber: true,
    gridcolumns: gridcolumns,
    gridrows: gridrows,
    featuresize: featuresize,
    featureposition: featureposition,
    fragmentation: fragmentation,
    imageweightleft: imageweightleft,
    imageweightright: imageweightright,
    metadetailsleft: metadetailsleft,
    metadetailsright: metadetailsright,
    boostfeature: boostfeature,
    subfeature: subfeature,
    balancemdandiw: balancemdandiw,
    hierarchycrossing: hierarchycrossing,
    flipcolsrows: flipcolsrows,
    headerPosition: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomBetween"])(0, 1)
  };
};


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/utils/index.js":
/*!******************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/utils/index.js ***!
  \******************************************************************************************/
/*! exports provided: getRandomAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_random_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-random-attributes */ "./packages/block-editor/build-module/filters/with-collection-layout/utils/get-random-attributes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRandomAttributes", function() { return _get_random_attributes__WEBPACK_IMPORTED_MODULE_0__["getRandomAttributes"]; });




/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/with-collection-layout-attributes.js":
/*!****************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/with-collection-layout-attributes.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var attributes = {
  postsToShow: {
    type: "integer",
    "default": 3
  },
  layoutStyle: {
    type: "string",
    "default": "classic"
  },
  columns: {
    type: "number",
    "default": 3
  },
  gridGap: {
    type: "number",
    "default": 50
  },
  gridcolumns: {
    type: "number",
    "default": 6
  },
  gridrows: {
    type: "number",
    "default": 6
  },
  featuresize: {
    type: "number",
    "default": 4
  },
  featureposition: {
    type: "number",
    "default": 1
  },
  fragmentation: {
    type: "number",
    "default": 1
  },
  hierarchycrossing: {
    type: "number",
    "default": 30
  },
  imageweightleft: {
    type: "number",
    "default": 1
  },
  imageweightright: {
    type: "number",
    "default": 2
  },
  metadetailsleft: {
    type: "number",
    "default": 10
  },
  metadetailsright: {
    type: "number",
    "default": 6
  },
  boostfeature: {
    type: "boolean",
    "default": false
  },
  subfeature: {
    type: "boolean",
    "default": true
  },
  balancemdandiw: {
    type: "boolean",
    "default": false
  },
  flipcolsrows: {
    type: "boolean",
    "default": false
  },
  headerPosition: {
    type: "number",
    "default": 0
  },
  headerColumn: {
    type: "number",
    "default": 0
  },
  carouselLayout: {
    type: "string",
    "default": "fixed"
  }
};

var withCollectionLayoutAttributes = function withCollectionLayoutAttributes(block) {
  var _block$supports, _block$supports$novaB;

  var spacingSupports = block === null || block === void 0 ? void 0 : (_block$supports = block.supports) === null || _block$supports === void 0 ? void 0 : (_block$supports$novaB = _block$supports.novaBlocks) === null || _block$supports$novaB === void 0 ? void 0 : _block$supports$novaB.collectionLayout;

  if (spacingSupports !== true && (spacingSupports === null || spacingSupports === void 0 ? void 0 : spacingSupports.attributes) !== true) {
    return block;
  }

  return _objectSpread(_objectSpread({}, block), {}, {
    attributes: _objectSpread(_objectSpread({}, block.attributes), attributes)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (withCollectionLayoutAttributes);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/with-collection-layout-controls.js":
/*!**************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/with-collection-layout-controls.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ "./packages/block-editor/build-module/filters/with-collection-layout/controls/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks */ "./packages/block-editor/build-module/hooks/index.js");





var withCollectionLayoutControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var _supports$novaBlocks, _supports$novaBlocks2, _supports$novaBlocks3;

    var supports = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useSupports"])(props.name);

    if (true !== (supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks = supports.novaBlocks) === null || _supports$novaBlocks === void 0 ? void 0 : _supports$novaBlocks.collectionLayout) && true !== (supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks2 = supports.novaBlocks) === null || _supports$novaBlocks2 === void 0 ? void 0 : (_supports$novaBlocks3 = _supports$novaBlocks2.collectionLayout) === null || _supports$novaBlocks3 === void 0 ? void 0 : _supports$novaBlocks3.controls)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_2__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props));
  };
}, 'withCollectionLayoutControls');
/* harmony default export */ __webpack_exports__["default"] = (withCollectionLayoutControls);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-collection-layout/with-collection-layout-edit-custom-props.js":
/*!***********************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-collection-layout/with-collection-layout-edit-custom-props.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks */ "./packages/block-editor/build-module/hooks/index.js");




var withCollectionLayoutEditCustomProps = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var _supports$novaBlocks;

    var supports = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useSupports"])(props.name);
    var attributes = props.attributes;
    var columns = attributes.columns,
        gridGap = attributes.gridGap;
    var style = props.style ? props.style : {};

    if (!!(supports !== null && supports !== void 0 && (_supports$novaBlocks = supports.novaBlocks) !== null && _supports$novaBlocks !== void 0 && _supports$novaBlocks.collectionLayout)) {
      var collectionLayoutProps = {
        '--nb-collection-columns-count': columns,
        '--nb-grid-spacing-modifier': gridGap
      };
      Object.assign(style, collectionLayoutProps);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      style: style
    }));
  };
}, "withCollectionLayoutEditCustomProps");
/* harmony default export */ __webpack_exports__["default"] = (withCollectionLayoutEditCustomProps);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-content-position-matrix/controls.js":
/*!*********************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-content-position-matrix/controls.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



var BlockAlignmentMatrixToolbar = wp.blockEditor.__experimentalBlockAlignmentMatrixToolbar;
var BlockAlignmentMatrixControl = wp.blockEditor.__experimentalBlockAlignmentMatrixControl || wp.blockEditor.BlockAlignmentMatrixControl;

var Controls = function Controls(props) {
  var contentPosition = props.attributes.contentPosition,
      setAttributes = props.setAttributes;

  if (!BlockAlignmentMatrixControl) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ControlsFallback, props);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockControls"], {
    group: "block"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockAlignmentMatrixControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Change content position', 'nova-blocks'),
    value: contentPosition,
    onChange: function onChange(nextPosition) {
      return setAttributes({
        contentPosition: nextPosition
      });
    }
  }));
};

var ControlsFallback = function ControlsFallback(props) {
  var contentPosition = props.attributes.contentPosition,
      setAttributes = props.setAttributes;

  if (!BlockAlignmentMatrixToolbar) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockControls"], {
    group: "block"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockAlignmentMatrixToolbar, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Change content position', 'nova-blocks'),
    value: contentPosition,
    onChange: function onChange(nextPosition) {
      return setAttributes({
        contentPosition: nextPosition
      });
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Controls);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-content-position-matrix/index.js":
/*!******************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-content-position-matrix/index.js ***!
  \******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _with_content_position_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with-content-position-attributes */ "./packages/block-editor/build-module/filters/with-content-position-matrix/with-content-position-attributes.js");
/* harmony import */ var _with_content_position_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-content-position-controls */ "./packages/block-editor/build-module/filters/with-content-position-matrix/with-content-position-controls.js");
/* harmony import */ var _with_content_position_inner_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./with-content-position-inner-blocks */ "./packages/block-editor/build-module/filters/with-content-position-matrix/with-content-position-inner-blocks.js");
/* harmony import */ var _with_content_position_deprecated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./with-content-position-deprecated */ "./packages/block-editor/build-module/filters/with-content-position-matrix/with-content-position-deprecated.js");





Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('blocks.registerBlockType', 'novablocks/with-content-position-attributes', _with_content_position_attributes__WEBPACK_IMPORTED_MODULE_1__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('editor.BlockEdit', 'novablocks/with-content-position-controls', _with_content_position_controls__WEBPACK_IMPORTED_MODULE_2__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('editor.BlockEdit', 'novablocks/with-content-position-inner-blocks', _with_content_position_inner_blocks__WEBPACK_IMPORTED_MODULE_3__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('blocks.registerBlockType', 'novablocks/with-content-position-deprecated', _with_content_position_deprecated__WEBPACK_IMPORTED_MODULE_4__["default"]);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-content-position-matrix/with-content-position-attributes.js":
/*!*********************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-content-position-matrix/with-content-position-attributes.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var attributes = {
  contentPosition: {
    type: "string",
    "default": "center center"
  }
};

var withContentPositionAttributes = function withContentPositionAttributes(block) {
  var _block$supports, _block$supports$novaB;

  var contentPositionSupport = block === null || block === void 0 ? void 0 : (_block$supports = block.supports) === null || _block$supports === void 0 ? void 0 : (_block$supports$novaB = _block$supports.novaBlocks) === null || _block$supports$novaB === void 0 ? void 0 : _block$supports$novaB.contentPosition;

  if (contentPositionSupport !== true && (contentPositionSupport === null || contentPositionSupport === void 0 ? void 0 : contentPositionSupport.attributes) !== true) {
    return block;
  }

  return _objectSpread(_objectSpread({}, block), {}, {
    attributes: _objectSpread(_objectSpread({}, block.attributes), attributes)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (withContentPositionAttributes);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-content-position-matrix/with-content-position-controls.js":
/*!*******************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-content-position-matrix/with-content-position-controls.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ "./packages/block-editor/build-module/filters/with-content-position-matrix/controls.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks */ "./packages/block-editor/build-module/hooks/index.js");





var withContentPositionControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var _supports$novaBlocks, _supports$novaBlocks2, _supports$novaBlocks3;

    var supports = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useSupports"])(props.name);

    if ((supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks = supports.novaBlocks) === null || _supports$novaBlocks === void 0 ? void 0 : _supports$novaBlocks.contentPosition) !== true && (supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks2 = supports.novaBlocks) === null || _supports$novaBlocks2 === void 0 ? void 0 : (_supports$novaBlocks3 = _supports$novaBlocks2.contentPosition) === null || _supports$novaBlocks3 === void 0 ? void 0 : _supports$novaBlocks3.controls) !== true) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_2__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props));
  };
}, 'withContentPositionControls');
/* harmony default export */ __webpack_exports__["default"] = (withContentPositionControls);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-content-position-matrix/with-content-position-deprecated.js":
/*!*********************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-content-position-matrix/with-content-position-deprecated.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);


var _excluded = ["horizontalAlignment", "verticalAlignment"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var withContentPositionDeprecated = function withContentPositionDeprecated(settings) {
  var _settings$supports, _settings$supports$no, _settings$supports$no2;

  if (!(settings !== null && settings !== void 0 && (_settings$supports = settings.supports) !== null && _settings$supports !== void 0 && (_settings$supports$no = _settings$supports.novaBlocks) !== null && _settings$supports$no !== void 0 && (_settings$supports$no2 = _settings$supports$no.contentPosition) !== null && _settings$supports$no2 !== void 0 && _settings$supports$no2.deprecated)) {
    return settings;
  }

  return Object.assign({}, settings, {
    deprecated: [{
      attributes: {
        horizontalAlignment: {
          type: "string",
          default: "center"
        },
        verticalAlignment: {
          type: "string",
          default: "center"
        }
      },
      isEligible: function isEligible(attributes) {
        return !Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(attributes.horizontalAlignment) && !Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(attributes.verticalAlignment) && Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(attributes.contentPosition);
      },
      migrate: function migrate(oldAttributes) {
        var horizontalAlignment = oldAttributes.horizontalAlignment,
            verticalAlignment = oldAttributes.verticalAlignment,
            attributes = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(oldAttributes, _excluded);

        return _objectSpread(_objectSpread({}, attributes), {}, {
          contentPosition: "".concat(verticalAlignment, " ").concat(horizontalAlignment)
        });
      },
      save: settings.save
    }].concat(settings.deprecated)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (withContentPositionDeprecated);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-content-position-matrix/with-content-position-inner-blocks.js":
/*!***********************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-content-position-matrix/with-content-position-inner-blocks.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks */ "./packages/block-editor/build-module/hooks/index.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);






var alignBlockChildren = function alignBlockChildren(clientId, horizontalAlignment) {
  var _select = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["select"])('core/block-editor'),
      getBlock = _select.getBlock;

  var _dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["dispatch"])('core/block-editor'),
      updateBlockAttributes = _dispatch.updateBlockAttributes;

  var block = getBlock(clientId);
  block.innerBlocks.forEach(function (innerBlock) {
    var _blockType$supports;

    var block = getBlock(innerBlock.clientId);
    var blockType = wp.data.select('core/blocks').getBlockType(block.name);
    var supportsAlign = blockType === null || blockType === void 0 ? void 0 : (_blockType$supports = blockType.supports) === null || _blockType$supports === void 0 ? void 0 : _blockType$supports.align;

    if (Array.isArray(supportsAlign) && (supportsAlign.indexOf('wide') > -1 || supportsAlign.indexOf('full') > -1)) {
      alignBlockChildren(block.clientId, horizontalAlignment);
      return;
    }

    updateBlockAttributes(block.clientId, {
      align: horizontalAlignment,
      textAlign: horizontalAlignment,
      contentJustification: horizontalAlignment
    });
  });
};

var withContentPositionInnerBlocks = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var _supports$novaBlocks;

    var supports = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useSupports"])(props.name);
    var setAttributes = props.setAttributes,
        clientId = props.clientId;

    if (!(supports !== null && supports !== void 0 && (_supports$novaBlocks = supports.novaBlocks) !== null && _supports$novaBlocks !== void 0 && _supports$novaBlocks.contentPosition)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, props);
    }

    var newSetAttributes = function newSetAttributes(attributes) {
      var contentPosition = attributes.contentPosition;

      if (!!contentPosition) {
        var alignment = contentPosition.split(" ");
        var horizontalAlignment = alignment[1] || 'center';
        alignBlockChildren(clientId, horizontalAlignment);
      }

      setAttributes(attributes);
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      setAttributes: newSetAttributes
    }));
  };
}, 'withContentPositionInnerBlocks');
/* harmony default export */ __webpack_exports__["default"] = (withContentPositionInnerBlocks);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-controls-sections/index.js":
/*!************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-controls-sections/index.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components */ "./packages/block-editor/build-module/components/index.js");






var withControlsSections = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ControlsSections"], props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props));
  };
}, 'withControlsSections');
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__["addFilter"])('editor.BlockEdit', 'novablocks/with-controls-sections', withControlsSections, 1);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-controls-visibility/context.js":
/*!****************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-controls-visibility/context.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var ControlsVisibilityContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createContext"])('ControlsVisibility');
/* harmony default export */ __webpack_exports__["default"] = (ControlsVisibilityContext);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-controls-visibility/index.js":
/*!**************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-controls-visibility/index.js ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./packages/block-editor/build-module/filters/with-controls-visibility/context.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__);







var withControlsVisibility = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
        _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        context = _useState2[0],
        setContext = _useState2[1];

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_context__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
      value: context
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(OriginalComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      setControlsVisibility: function setControlsVisibility(newContext) {
        setContext(Object.assign({}, context, newContext));
      }
    })));
  };
}, 'withControlsVisibility');
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__["addFilter"])('editor.BlockEdit', 'novablocks/with-controls-visibility', withControlsVisibility, Number.MAX_SAFE_INTEGER);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-custom-align/index.js":
/*!*******************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-custom-align/index.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _with_wrapper_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with-wrapper-props */ "./packages/block-editor/build-module/filters/with-custom-align/with-wrapper-props.js");
/* harmony import */ var _with_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-settings */ "./packages/block-editor/build-module/filters/with-custom-align/with-settings.js");
/* harmony import */ var _with_save_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./with-save-props */ "./packages/block-editor/build-module/filters/with-custom-align/with-save-props.js");
 //import withControls from "./with-controls";



 //addFilter( 'editor.BlockEdit', 'novablocks/custom-align/controls', withControls );

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('editor.BlockListBlock', 'novablocks/custom-align/wrapper-props', _with_wrapper_props__WEBPACK_IMPORTED_MODULE_1__["default"], Number.MIN_SAFE_INTEGER);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('blocks.registerBlockType', 'novablocks/custom-align/alter-settings', _with_settings__WEBPACK_IMPORTED_MODULE_2__["default"], Number.MIN_SAFE_INTEGER);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('blocks.getSaveContent.extraProps', 'novablocks/custom-align/save-props', _with_save_props__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-custom-align/with-save-props.js":
/*!*****************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-custom-align/with-save-props.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./packages/block-editor/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index */ "./packages/block-editor/build-module/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var withSaveProps = function withSaveProps(extraProps, blockType, attributes) {
  var align = attributes.align;
  var supports = Object(_index__WEBPACK_IMPORTED_MODULE_2__["getSupports"])(blockType.name);

  if (!supports.align || !align) {
    return extraProps;
  }

  return _objectSpread(_objectSpread({}, extraProps), {}, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(extraProps.className, "align".concat(align))
  });
};

/* harmony default export */ __webpack_exports__["default"] = (withSaveProps);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-custom-align/with-settings.js":
/*!***************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-custom-align/with-settings.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");



var _excluded = ["getEditWrapperProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var withAlignSettingsRemoved = function withAlignSettingsRemoved(settings) {
  var _settings$supports, _supports$novaBlocks;

  var getEditWrapperProps = settings.getEditWrapperProps,
      newSettings = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(settings, _excluded);

  var _ref = (_settings$supports = settings.supports) !== null && _settings$supports !== void 0 ? _settings$supports : {},
      supports = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _ref);

  var novaBlocksSupports = (_supports$novaBlocks = supports.novaBlocks) !== null && _supports$novaBlocks !== void 0 ? _supports$novaBlocks : {};

  var newSupports = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, supports);

  return _objectSpread(_objectSpread({}, newSettings), {}, {
    supports: _objectSpread({}, newSupports)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (withAlignSettingsRemoved);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-custom-align/with-wrapper-props.js":
/*!********************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-custom-align/with-wrapper-props.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./packages/block-editor/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../index */ "./packages/block-editor/build-module/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var withWrapperPropsRemoved = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var _props$attributes$ali, _props$attributes;

    var wrapperProps = Object.assign({}, props.wrapperProps);
    var align = (_props$attributes$ali = (_props$attributes = props.attributes) === null || _props$attributes === void 0 ? void 0 : _props$attributes.align) !== null && _props$attributes$ali !== void 0 ? _props$attributes$ali : 'none';
    var supports = Object(_index__WEBPACK_IMPORTED_MODULE_4__["useSupports"])(props.name);

    if (!supports.align && props.name !== 'core/image') {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, props);
    }

    delete wrapperProps['data-align'];

    var newProps = _objectSpread(_objectSpread({}, props), {}, {
      wrapperProps: wrapperProps,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.className, "align".concat(align))
    });

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, newProps);
  };
}, 'withWrapperPropsRemoved');
/* harmony default export */ __webpack_exports__["default"] = (withWrapperPropsRemoved);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-deprecated-group/index.js":
/*!***********************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-deprecated-group/index.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);

var deprecatedStyles = {
  'is-style-accent': {
    paletteVariation: 6,
    useSourceColorAsReference: true
  },
  'is-style-dark': {
    paletteVariation: 9,
    useSourceColorAsReference: false
  },
  'is-style-darker': {
    paletteVariation: 10,
    useSourceColorAsReference: false
  }
};

function addDeprecatedGroup(settings, name) {
  if (name !== 'core/group') {
    return settings;
  }

  return Object.assign({}, settings, {
    deprecated: [{
      attributes: settings.attributes,
      migrate: function migrate(attributes, innerBlocks) {
        var classAttr = attributes.className;
        var classes = classAttr.split(/\b\s+/);
        var newAttributes = {};
        classes.some(function (className) {
          var isDeprecated = typeof deprecatedStyles[className] !== "undefined";

          if (isDeprecated) {
            newAttributes = deprecatedStyles[className];
            return true;
          }

          return false;
        });
        return [Object.assign({}, attributes, newAttributes), innerBlocks];
      },
      isEligible: function isEligible(attributes, innerBlocks) {
        var classAttr = attributes.className;

        if (typeof classAttr !== "string") {
          return false;
        }

        var classes = classAttr.split(/\b\s+/);
        return classes.some(function (className) {
          return Object.keys(deprecatedStyles).includes(className);
        });
      },
      save: settings.save
    }].concat(settings.deprecated)
  });
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('blocks.registerBlockType', 'novablocks/deprecate-group', addDeprecatedGroup);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-font-size-picker/index.js":
/*!***********************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-font-size-picker/index.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./packages/block-editor/build-module/filters/with-font-size-picker/utils.js");
/* harmony import */ var _with_font_size_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./with-font-size-attributes */ "./packages/block-editor/build-module/filters/with-font-size-picker/with-font-size-attributes.js");
/* harmony import */ var _with_font_size_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./with-font-size-control */ "./packages/block-editor/build-module/filters/with-font-size-picker/with-font-size-control.js");






Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__["addFilter"])('editor.BlockEdit', 'novablocks/with-inspector-controls', _with_font_size_control__WEBPACK_IMPORTED_MODULE_5__["withFontSizeControl"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__["addFilter"])('blocks.registerBlockType', 'novablocks/with-font-size-attribute', _with_font_size_attributes__WEBPACK_IMPORTED_MODULE_4__["withFontSizeAttributes"]);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-font-size-picker/utils.js":
/*!***********************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-font-size-picker/utils.js ***!
  \***********************************************************************************/
/*! exports provided: DEFAULT_FONT_SIZE, BLOCKS_WITH_FONT_SIZE_CONTROL, replaceActiveFontSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_FONT_SIZE", function() { return DEFAULT_FONT_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_WITH_FONT_SIZE_CONTROL", function() { return BLOCKS_WITH_FONT_SIZE_CONTROL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceActiveFontSize", function() { return replaceActiveFontSize; });
var DEFAULT_FONT_SIZE = 'normal';
var BLOCKS_WITH_FONT_SIZE_CONTROL = ['core/quote', 'core/pullquote', 'core/heading', 'core/paragraph', 'novablocks/headline'];
var replaceActiveFontSize = function replaceActiveFontSize(className, fontSize, nextFontSize) {
  if (className) {
    var regex = new RegExp('has-[a-z]+-font-size', 'gi');
    className = className.replace(regex, '').trim();
  }

  var nextClassName = 'has-' + nextFontSize + '-font-size';
  return className ? className + ' ' + nextClassName : nextClassName;
};


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-font-size-picker/with-font-size-attributes.js":
/*!*******************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-font-size-picker/with-font-size-attributes.js ***!
  \*******************************************************************************************************/
/*! exports provided: withFontSizeAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withFontSizeAttributes", function() { return withFontSizeAttributes; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./packages/block-editor/build-module/filters/with-font-size-picker/utils.js");

var withFontSizeAttributes = function withFontSizeAttributes(block) {
  if (!_utils__WEBPACK_IMPORTED_MODULE_0__["BLOCKS_WITH_FONT_SIZE_CONTROL"].includes(block.name)) {
    return block;
  }

  if (typeof block.attributes === 'undefined') {
    block.attributes = {};
  }

  block.attributes = Object.assign(block.attributes, {
    fontSize: {
      type: 'string',
      default: _utils__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_FONT_SIZE"]
    }
  });
  return block;
};


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-font-size-picker/with-font-size-control.js":
/*!****************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-font-size-picker/with-font-size-control.js ***!
  \****************************************************************************************************/
/*! exports provided: withFontSizeControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withFontSizeControl", function() { return withFontSizeControl; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./packages/block-editor/build-module/filters/with-font-size-picker/utils.js");








var DEFAULT_FONT_SIZE = _components__WEBPACK_IMPORTED_MODULE_5__["FontSizePicker"].DEFAULT_FONT_SIZE,
    FONT_SIZE_OPTIONS = _components__WEBPACK_IMPORTED_MODULE_5__["FontSizePicker"].FONT_SIZE_OPTIONS;

var withFontSizePicker = function withFontSizePicker(WrappedComponent) {
  return function (props) {
    var _props$attributes = props.attributes,
        className = _props$attributes.className,
        fontSize = _props$attributes.fontSize,
        level = _props$attributes.level,
        setAttributes = props.setAttributes;
    var selectValue = FONT_SIZE_OPTIONS.find(function (x) {
      return x.value === fontSize;
    }) ? fontSize : DEFAULT_FONT_SIZE;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WrappedComponent, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Text Settings', 'nova-blocks'),
      className: "blocks-custom-font-size"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["FontSizePicker"], {
      value: selectValue,
      onChange: function onChange(nextFontSize) {
        setAttributes({
          fontSize: nextFontSize,
          className: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["replaceActiveFontSize"])(className, fontSize, nextFontSize)
        });
      }
    }))));
  };
};

var withFontSizeControl = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["createHigherOrderComponent"])(function (OriginalComponent) {
  var BetterComponent = withFontSizePicker(OriginalComponent);
  return function (props) {
    if (!_utils__WEBPACK_IMPORTED_MODULE_6__["BLOCKS_WITH_FONT_SIZE_CONTROL"].includes(props.name)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BetterComponent, props);
  };
}, 'withFontSizeControl');


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-on-select-images/index.js":
/*!***********************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-on-select-images/index.js ***!
  \***********************************************************************************/
/*! exports provided: withOnSelectImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withOnSelectImages", function() { return withOnSelectImages; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_normalize_images_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/normalize-images/index */ "./packages/block-editor/build-module/components/normalize-images/index.js");





var withOnSelectImages = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["createHigherOrderComponent"])(function (WrappedComponent) {
  return function (props) {
    var setAttributes = props.setAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onSelectImages: function onSelectImages(images) {
        Object(_components_normalize_images_index__WEBPACK_IMPORTED_MODULE_4__["normalizeImages"])(images).then(function (newImages) {
          setAttributes({
            images: newImages
          });
        });
      }
    }));
  };
}, 'withOnSelectImages');
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__["addFilter"])('editor.BlockEdit', 'novablocks/with-on-select-images', withOnSelectImages, Number.MAX_SAFE_INTEGER);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-overlay-filter/controls.js":
/*!************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-overlay-filter/controls.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks */ "./packages/block-editor/build-module/hooks/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./packages/block-editor/build-module/filters/with-overlay-filter/utils.js");


var _window$styleManager;



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








var PALETTES = ((_window$styleManager = window.styleManager) === null || _window$styleManager === void 0 ? void 0 : _window$styleManager.colorsConfig) || [];
var FILTERED_PALETTES = PALETTES.filter(function (palette) {
  return !Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["isFunctionalPalette"])(palette);
});
var DUOTONE_PALETTES = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["generateDuotonePresetsFromPalettes"])(FILTERED_PALETTES);
var COLOR_PALETTES = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["generateColorPalettes"])(FILTERED_PALETTES);

var OverlayFilterControls = function OverlayFilterControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var overlayFilterStrength = attributes.overlayFilterStrength;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["ControlsSection"], {
    id: 'overlay-filter',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Overlay Filter', 'nova-blocks'),
    group: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Modules', 'nova-blocks'),
    order: 40
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Settings', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["ControlsGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OverlayType, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(CustomDuotonePicker, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["ControlsGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Overlay Filter Strength', 'nova-blocks'),
    value: overlayFilterStrength,
    onChange: function onChange(nextOverlayFilterStrength) {
      return setAttributes({
        overlayFilterStrength: nextOverlayFilterStrength
      });
    },
    min: 0,
    max: 90,
    step: 10
  }))));
};

var OverlayType = function OverlayType(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var style = attributes.style,
      overlayFilterType = attributes.overlayFilterType;
  var supports = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useSupports"])(props.name);
  var supportsDuotone = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var _supports$novaBlocks, _supports$novaBlocks$;

    return !!(supports !== null && supports !== void 0 && (_supports$novaBlocks = supports.novaBlocks) !== null && _supports$novaBlocks !== void 0 && (_supports$novaBlocks$ = _supports$novaBlocks.overlayFilter) !== null && _supports$novaBlocks$ !== void 0 && _supports$novaBlocks$.duotone);
  }, [supports]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!supportsDuotone && overlayFilterType !== 'unitone') {
      setAttributes({
        overlayFilterType: 'unitone'
      });
    }
  }, [overlayFilterType, supportsDuotone]);

  if (!supportsDuotone) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RadioControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Overlay Filter', 'nova-blocks'),
    selected: overlayFilterType,
    onChange: function onChange(nextFilterStyle) {
      setAttributes({
        overlayFilterType: nextFilterStyle
      });
    },
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Unitone', 'nova-blocks'),
      value: 'unitone'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Duotone', 'nova-blocks'),
      value: 'duotone'
    }]
  });
};

var CustomDuotonePicker = function CustomDuotonePicker(props) {
  // only paletteId and variationIndex are relevant
  // because hex value can differ after palettes alterations
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      clientId = props.clientId;
  var overlayFilterType = attributes.overlayFilterType,
      overlayFilterDuotoneConfig = attributes.overlayFilterDuotoneConfig;
  var from = overlayFilterDuotoneConfig === null || overlayFilterDuotoneConfig === void 0 ? void 0 : overlayFilterDuotoneConfig.from;
  var to = overlayFilterDuotoneConfig === null || overlayFilterDuotoneConfig === void 0 ? void 0 : overlayFilterDuotoneConfig.to;

  if (overlayFilterType !== 'duotone') {
    return null;
  }

  var options = DUOTONE_PALETTES.map(function (duotone, index) {
    return {
      data: duotone,
      value: index,
      colors: [duotone.from.hex, duotone.to.hex]
    };
  });
  var colorOptions = COLOR_PALETTES.map(function (color, index) {
    return {
      data: color,
      value: index,
      colors: [color.hex]
    };
  });
  var duotoneValue = from && to && options.findIndex(function (option) {
    return option.data.from.paletteId === from.paletteId && option.data.from.variationIndex === from.variationIndex && option.data.to.paletteId === to.paletteId && option.data.to.variationIndex === to.variationIndex;
  });
  var fromValue = from && colorOptions.findIndex(function (color) {
    return color.data.paletteId === from.paletteId && color.data.variationIndex === from.variationIndex;
  });
  var toValue = to && colorOptions.findIndex(function (color) {
    return color.data.paletteId === to.paletteId && color.data.variationIndex === to.variationIndex;
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Duotone Presets', 'nova-blocks'),
    key: 'duotone-presets'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["DuotonePicker"], {
    selected: duotoneValue,
    options: options,
    onChange: function onChange(value) {
      setAttributes({
        overlayFilterDuotoneConfig: options[value].data
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Highlights', 'nova-blocks'),
    key: 'highlights'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["ColorPicker"], {
    selected: toValue,
    options: colorOptions,
    onChange: function onChange(value) {
      setAttributes({
        overlayFilterDuotoneConfig: _objectSpread(_objectSpread({}, overlayFilterDuotoneConfig), {}, {
          to: colorOptions[value].data
        })
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Shadows', 'nova-blocks'),
    key: 'shadows'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["ColorPicker"], {
    selected: fromValue,
    options: colorOptions,
    onChange: function onChange(value) {
      setAttributes({
        overlayFilterDuotoneConfig: _objectSpread(_objectSpread({}, overlayFilterDuotoneConfig), {}, {
          from: colorOptions[value].data
        })
      });
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (OverlayFilterControls);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-overlay-filter/index.js":
/*!*********************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-overlay-filter/index.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _with_overlay_filter_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with-overlay-filter-attributes */ "./packages/block-editor/build-module/filters/with-overlay-filter/with-overlay-filter-attributes.js");
/* harmony import */ var _with_overlay_filter_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-overlay-filter-controls */ "./packages/block-editor/build-module/filters/with-overlay-filter/with-overlay-filter-controls.js");
/* harmony import */ var _with_overlay_filter_edit_custom_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./with-overlay-filter-edit-custom-props */ "./packages/block-editor/build-module/filters/with-overlay-filter/with-overlay-filter-edit-custom-props.js");
/* harmony import */ var _with_overlay_filter_save_custom_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./with-overlay-filter-save-custom-props */ "./packages/block-editor/build-module/filters/with-overlay-filter/with-overlay-filter-save-custom-props.js");





Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["removeFilter"])('editor.BlockEdit', 'core/editor/duotone/with-editor-controls');
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('blocks.registerBlockType', 'novablocks/with-overlay-filter-attributes', _with_overlay_filter_attributes__WEBPACK_IMPORTED_MODULE_1__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('editor.BlockEdit', 'novablocks/with-overlay-filter-controls', _with_overlay_filter_controls__WEBPACK_IMPORTED_MODULE_2__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('editor.BlockEdit', 'novablocks/with-overlay-filter-edit-custom-props', _with_overlay_filter_edit_custom_props__WEBPACK_IMPORTED_MODULE_3__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('blocks.getSaveElement', 'novablocks/with-overlay-filter-save-custom-props', _with_overlay_filter_save_custom_props__WEBPACK_IMPORTED_MODULE_4__["default"]);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-overlay-filter/utils.js":
/*!*********************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-overlay-filter/utils.js ***!
  \*********************************************************************************/
/*! exports provided: generateDuotonePresetsFromPalettes, generateColorPalettes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDuotonePresetsFromPalettes", function() { return generateDuotonePresetsFromPalettes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateColorPalettes", function() { return generateColorPalettes; });
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Returns a Duotone Presets Array.
 * @param palettes
 * @returns {array}
 */

var getAlteredSignals = function getAlteredSignals(palette) {
  var signals = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getSignals"])(palette.id);
  var sourceVariation = palette.sourceIndex + 1;
  var neareastIndex = signals.reduce(function (index, signal, currentIndex, signals) {
    return Math.abs(signals[index] - sourceVariation) <= Math.abs(signals[currentIndex] - sourceVariation) ? index : currentIndex;
  }, 0);
  signals.splice(neareastIndex, 1, sourceVariation);
  return signals;
};

var generateDuotonePresetsFromPalettes = function generateDuotonePresetsFromPalettes(palettes) {
  var presets = [];

  if (!palettes.length || !Array.isArray(palettes[0].variations)) {
    return presets;
  }

  palettes.forEach(function (palette1) {
    var signals1 = getAlteredSignals(palette1);
    palettes.filter(function (palette2) {
      return palette1.id !== palette2.id;
    }).forEach(function (palette2) {
      var signals2 = getAlteredSignals(palette2);
      signals1.forEach(function (signal1, index1) {
        signals2.forEach(function (signal2, index2) {
          var color1 = palette1.variations[signal1 - 1].bg;
          var color2 = palette2.variations[signal2 - 1].bg;

          if (color1 !== color2 && index1 > index2 && Math.abs(index1 - index2) > 0) {
            presets.push({
              name: "".concat(palette1.label, " - ").concat(signal1 - 1, " and ").concat(palette2.label, " - ").concat(signal2 - 1),
              from: {
                paletteId: palette1.id,
                variationIndex: signal1,
                hex: color1
              },
              to: {
                paletteId: palette2.id,
                variationIndex: signal2,
                hex: color2
              }
            });
          }
        });
      });
    });
  });
  return presets;
};
/**
 * Returns all color from Palettes as array.
 * @param palettes
 * @returns {array}
 */

var generateColorPalettes = function generateColorPalettes(palettes) {
  var colorPalette = [];

  if (!palettes.length || !Array.isArray(palettes[0].variations)) {
    return colorPalette;
  }

  palettes.forEach(function (palette) {
    var signals = getAlteredSignals(palette);
    var label = palette.label;
    signals.forEach(function (signal, index) {
      var color = palette.variations[signal - 1].bg;
      colorPalette.push({
        paletteId: palette.id,
        variationIndex: signal,
        hex: color
      });
    });
  });
  return colorPalette;
};

var clamp = function clamp(number, min, max) {
  return Math.min(Math.max(min, number), max);
};


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-overlay-filter/with-overlay-filter-attributes.js":
/*!**********************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-overlay-filter/with-overlay-filter-attributes.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var attributes = {
  overlayFilterType: {
    type: "string",
    "default": "unitone"
  },
  overlayFilterDuotoneConfig: {
    type: "object",
    "default": {}
  },
  overlayFilterStrength: {
    type: "number",
    "default": 0
  }
};

var withOverlayFilterAttributes = function withOverlayFilterAttributes(settings) {
  var _settings$supports, _settings$supports$no;

  var overlayFilterSupport = settings === null || settings === void 0 ? void 0 : (_settings$supports = settings.supports) === null || _settings$supports === void 0 ? void 0 : (_settings$supports$no = _settings$supports.novaBlocks) === null || _settings$supports$no === void 0 ? void 0 : _settings$supports$no.overlayFilter;

  if (overlayFilterSupport !== true && (overlayFilterSupport === null || overlayFilterSupport === void 0 ? void 0 : overlayFilterSupport.attributes) !== true) {
    return settings;
  }

  return _objectSpread(_objectSpread({}, settings), {}, {
    attributes: _objectSpread(_objectSpread({}, settings.attributes), attributes)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (withOverlayFilterAttributes);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-overlay-filter/with-overlay-filter-controls.js":
/*!********************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-overlay-filter/with-overlay-filter-controls.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./packages/block-editor/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks */ "./packages/block-editor/build-module/hooks/index.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls */ "./packages/block-editor/build-module/filters/with-overlay-filter/controls.js");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_7__);












var DuotoneFilter = function DuotoneFilter(props) {
  var attributes = props.attributes,
      clientId = props.clientId;
  var overlayFilterDuotoneConfig = attributes.overlayFilterDuotoneConfig,
      overlayFilterType = attributes.overlayFilterType;
  var from = overlayFilterDuotoneConfig === null || overlayFilterDuotoneConfig === void 0 ? void 0 : overlayFilterDuotoneConfig.from;
  var to = overlayFilterDuotoneConfig === null || overlayFilterDuotoneConfig === void 0 ? void 0 : overlayFilterDuotoneConfig.to; // const element = useContext( BlockList.__unstableElementContext ); // WordPress 6.5 conflict

  var id = "novablocks-duotone-".concat(clientId);

  if (!from || !to || overlayFilterType !== 'duotone') {
    return null;
  }

  var svgMarkup = "\n        ".concat(Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_7__["getDuotoneFilterSvg"])([from.hex, to.hex], id), "\n        <style> .").concat(id, " .nb-supernova-item__media-wrapper :is(img, video) { filter: url( #").concat(id, " ); }</style>\n    ");
  return element ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    dangerouslySetInnerHTML: {
      __html: svgMarkup
    }
  }), element) : null;
};

var withOverlayFilterControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var _supports$novaBlocks, _supports$novaBlocks2, _supports$novaBlocks3;

    var attributes = props.attributes,
        clientId = props.clientId;
    var supports = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useSupports"])(props.name);
    var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.className, "novablocks-duotone-".concat(clientId));

    if ((supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks = supports.novaBlocks) === null || _supports$novaBlocks === void 0 ? void 0 : _supports$novaBlocks.overlayFilter) !== true && (supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks2 = supports.novaBlocks) === null || _supports$novaBlocks2 === void 0 ? void 0 : (_supports$novaBlocks3 = _supports$novaBlocks2.overlayFilter) === null || _supports$novaBlocks3 === void 0 ? void 0 : _supports$novaBlocks3.controls) !== true) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: className
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_6__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(DuotoneFilter, props));
  };
}, 'withOverlayFilterControls');
/* harmony default export */ __webpack_exports__["default"] = (withOverlayFilterControls);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-overlay-filter/with-overlay-filter-edit-custom-props.js":
/*!*****************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-overlay-filter/with-overlay-filter-edit-custom-props.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks */ "./packages/block-editor/build-module/hooks/index.js");





var withOverlayFilterEditCustomProps = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var _supports$novaBlocks;

    var supports = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useSupports"])(props.name);
    var attributes = props.attributes;
    var style = props.style ? props.style : {};

    if (!!(supports !== null && supports !== void 0 && (_supports$novaBlocks = supports.novaBlocks) !== null && _supports$novaBlocks !== void 0 && _supports$novaBlocks.overlayFilter)) {
      Object.assign(style, Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["getOverlayFilterCSSProps"])(attributes));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      style: style
    }));
  };
}, "withOverlayFilterEditCustomProps");
/* harmony default export */ __webpack_exports__["default"] = (withOverlayFilterEditCustomProps);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-overlay-filter/with-overlay-filter-save-custom-props.js":
/*!*****************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-overlay-filter/with-overlay-filter-save-custom-props.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./packages/block-editor/build-module/utils/index.js");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var withOverlayFilterSaveCustomProps = function withOverlayFilterSaveCustomProps(element, blockType, attributes) {
  var _supports$novaBlocks, _element$props;

  var supports = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getSupports"])(blockType.name);

  if (!element || !(supports !== null && supports !== void 0 && (_supports$novaBlocks = supports.novaBlocks) !== null && _supports$novaBlocks !== void 0 && _supports$novaBlocks.overlayFilter)) {
    return element;
  }

  return Object.assign({}, element, {
    props: _objectSpread(_objectSpread({}, element.props), {}, {
      style: _objectSpread(_objectSpread({}, (_element$props = element.props) === null || _element$props === void 0 ? void 0 : _element$props.style), Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_2__["getOverlayFilterCSSProps"])(attributes))
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (withOverlayFilterSaveCustomProps);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-preview-attributes/index.js":
/*!*************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-preview-attributes/index.js ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../index */ "./packages/block-editor/build-module/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










var withPreviewAttributes = function withPreviewAttributes(BlockEdit) {
  return function (props) {
    var attributes = props.attributes,
        name = props.name;
    var blocksWithPreview = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
      return ['novablocks/supernova', 'novablocks/supernova-item'];
    }, []);
    var blockNeedsPreview = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
      return blocksWithPreview.includes(name) && Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_7__["needsPreview"])(attributes);
    }, [attributes, name]);
    var setAttribtues = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (attributes) {
      if (!blockNeedsPreview) {
        Object.assign(attributes, {
          preview: false
        });
      }

      props.setAttribtues(attributes);
    }, [attributes]);
    var newAttributes = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
      return Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_7__["getPreviewAttributes"])(attributes);
    }, [attributes]);

    var newProps = _objectSpread(_objectSpread({}, props), {}, {
      attributes: newAttributes,
      setAttribtues: setAttribtues
    });

    if (!blockNeedsPreview) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, newProps), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PreviewModeControls, props));
  };
};

var PreviewModeControls = function PreviewModeControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var preview = attributes.preview;
  var blockNeedsPreview = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_7__["needsPreview"])(attributes);
  }, [attributes]);
  var label = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return preview ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter Edit Mode', 'nova-blocks') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Exit Edit Mode', 'nova-blocks');
  }, [preview]);

  if (props.name !== 'novablocks/supernova' || !blockNeedsPreview) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Toolbar"], {
    group: 'block'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    className: "components-icon-button components-toolbar__control",
    icon: Object(_index__WEBPACK_IMPORTED_MODULE_8__["getIconSvg"])('swap'),
    onClick: function onClick() {
      setAttributes({
        preview: !preview
      });
    }
  }, label)));
};

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__["addFilter"])('editor.BlockEdit', 'novablocks/with-preview-attributes', withPreviewAttributes, 20);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-random-defaults/index.js":
/*!**********************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-random-defaults/index.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var withDefaultsGeneratedDeprecated = function withDefaultsGeneratedDeprecated(settings) {
  var _settings$supports, _settings$supports$no;

  if (!(settings !== null && settings !== void 0 && (_settings$supports = settings.supports) !== null && _settings$supports !== void 0 && (_settings$supports$no = _settings$supports.novaBlocks) !== null && _settings$supports$no !== void 0 && _settings$supports$no.customDefaults)) {
    return settings;
  }

  var newDeprecated = [{
    attributes: settings.attributes,
    isEligible: function isEligible(attributes) {
      return "undefined" === typeof attributes.defaultsGenerated;
    },
    migrate: function migrate(attributes) {
      return _objectSpread(_objectSpread({}, attributes), {}, {
        defaultsGenerated: true
      });
    },
    save: settings.save
  }];
  var deprecated = Array.isArray(settings.deprecated) ? settings.deprecated.concat(newDeprecated) : newDeprecated;
  return _objectSpread(_objectSpread({}, settings), {}, {
    deprecated: deprecated
  });
};

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["addFilter"])('blocks.registerBlockType', 'novablocks/hero-defaults-generated-deprecated', withDefaultsGeneratedDeprecated);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/card-spacing-customize.js":
/*!*************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-space-and-sizing/controls/card-spacing-customize.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks */ "./packages/block-editor/build-module/hooks/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./packages/block-editor/build-module/filters/with-space-and-sizing/utils.js");
/* harmony import */ var _vertical_anchoring_customize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vertical-anchoring-customize */ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/vertical-anchoring-customize.js");








var CardSpacingCustomize = Object(_components__WEBPACK_IMPORTED_MODULE_4__["withVisibility"])('block-spacing-customize')(function (props) {
  var _supports$novaBlocks;

  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var emphasisBySpace = attributes.emphasisBySpace,
      enableOverlapping = attributes.enableOverlapping,
      contentPosition = attributes.contentPosition;
  var supports = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useSupports"])(props.name);
  var showVerticalAlignment = supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks = supports.novaBlocks) === null || _supports$novaBlocks === void 0 ? void 0 : _supports$novaBlocks.contentPosition;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Emphasis by Space', 'nova-blocks'),
    key: 'space-and-sizing-customize-1'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["getControlsClasses"])(attributes, function (atts) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getEmphasisAttributes"])(atts.emphasisBySpace, atts.enableOverlapping, atts.contentPosition);
    })
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    key: 'enable-by-space',
    value: emphasisBySpace,
    onChange: function onChange(emphasisBySpace) {
      var newAttributes = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getEmphasisAttributes"])(emphasisBySpace, enableOverlapping, contentPosition);
      setAttributes(newAttributes);
    },
    min: 0,
    max: 3
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    key: 'enable-overlapping',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enable Overlapping', 'nova-blocks'),
    checked: enableOverlapping,
    onChange: function onChange(enableOverlapping) {
      var newAttributes = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getEmphasisAttributes"])(emphasisBySpace, enableOverlapping, contentPosition);
      setAttributes(newAttributes);
    }
  }), showVerticalAlignment && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_vertical_anchoring_customize__WEBPACK_IMPORTED_MODULE_7__["default"], props)));
});
/* harmony default export */ __webpack_exports__["default"] = (CardSpacingCustomize);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/card-spacing-settings.js":
/*!************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-space-and-sizing/controls/card-spacing-settings.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks */ "./packages/block-editor/build-module/hooks/index.js");






var BlockSpacing = Object(_components__WEBPACK_IMPORTED_MODULE_4__["withVisibility"])('block-spacing-settings')(function (props) {
  var _supports$novaBlocks, _supports$novaBlocks$;

  var supports = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useSupports"])(props.name);
  var newProps = Object.assign({}, props, {
    blockSpacingMin: -3,
    blockSpacingMax: 3,
    contentSpacingMin: supports !== null && supports !== void 0 && (_supports$novaBlocks = supports.novaBlocks) !== null && _supports$novaBlocks !== void 0 && (_supports$novaBlocks$ = _supports$novaBlocks.spaceAndSizing) !== null && _supports$novaBlocks$ !== void 0 && _supports$novaBlocks$.advancedSpacing ? -3 : 0,
    contentSpacingMax: 3
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Block Spacing', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockTopSpacing, newProps), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockBottomSpacing, newProps), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ContentTopSpacing, newProps), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ContentBottomSpacing, newProps));
});
var BlockTopSpacing = Object(_components__WEBPACK_IMPORTED_MODULE_4__["withVisibility"])('block-top-spacing')(function (props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      blockSpacingMin = props.blockSpacingMin,
      blockSpacingMax = props.blockSpacingMax,
      clientId = props.clientId;
  var blockTopSpacing = attributes.blockTopSpacing;
  var clientIds = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["useSelect"])('core/block-editor').getClientIdsWithDescendants();
  var isDisabled = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useBlockTopSpacingIsDisabled"])(clientId);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    value: blockTopSpacing,
    onChange: function onChange(blockTopSpacing) {
      return setAttributes({
        blockTopSpacing: blockTopSpacing
      });
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Block Top Spacing', 'nova-blocks'),
    min: blockSpacingMin,
    max: blockSpacingMax //      disabled={ isDisabled }

  });
});
var BlockBottomSpacing = Object(_components__WEBPACK_IMPORTED_MODULE_4__["withVisibility"])('block-bottom-spacing')(function (props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      blockSpacingMin = props.blockSpacingMin,
      blockSpacingMax = props.blockSpacingMax;
  var blockBottomSpacing = attributes.blockBottomSpacing;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    value: blockBottomSpacing,
    onChange: function onChange(blockBottomSpacing) {
      return setAttributes({
        blockBottomSpacing: blockBottomSpacing
      });
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Block Bottom Spacing', 'nova-blocks'),
    min: blockSpacingMin,
    max: blockSpacingMax
  });
});
var ContentTopSpacing = Object(_components__WEBPACK_IMPORTED_MODULE_4__["withVisibility"])('content-top-spacing')(function (props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      contentSpacingMin = props.contentSpacingMin,
      contentSpacingMax = props.contentSpacingMax;
  var emphasisTopSpacing = attributes.emphasisTopSpacing;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    value: emphasisTopSpacing,
    onChange: function onChange(emphasisTopSpacing) {
      return setAttributes({
        emphasisTopSpacing: emphasisTopSpacing
      });
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Content Top Spacing', 'nova-blocks'),
    min: contentSpacingMin,
    max: contentSpacingMax
  });
});
var ContentBottomSpacing = Object(_components__WEBPACK_IMPORTED_MODULE_4__["withVisibility"])('content-bottom-spacing')(function (props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      contentSpacingMin = props.contentSpacingMin,
      contentSpacingMax = props.contentSpacingMax;
  var emphasisBottomSpacing = attributes.emphasisBottomSpacing;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    value: emphasisBottomSpacing,
    onChange: function onChange(emphasisBottomSpacing) {
      return setAttributes({
        emphasisBottomSpacing: emphasisBottomSpacing
      });
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Content Bottom Spacing', 'nova-blocks'),
    min: contentSpacingMin,
    max: contentSpacingMax
  });
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_components__WEBPACK_IMPORTED_MODULE_4__["withVisibility"])('block-spacing')(BlockSpacing));


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/content-padding.js":
/*!******************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-space-and-sizing/controls/content-padding.js ***!
  \******************************************************************************************************/
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");





var ContentPadding = function ContentPadding(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var contentPadding = attributes.contentPadding;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Content Area Padding', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    value: contentPadding,
    onChange: function onChange(contentPadding) {
      setAttributes({
        contentPadding: contentPadding
      });
    },
    min: 0,
    max: 100,
    step: 25
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components__WEBPACK_IMPORTED_MODULE_3__["withVisibility"])('content-padding', false)(ContentPadding));


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/content-to-media-spacing.js":
/*!***************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-space-and-sizing/controls/content-to-media-spacing.js ***!
  \***************************************************************************************************************/
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");





var ContentToMediaSpacing = function ContentToMediaSpacing(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var layoutGutter = attributes.layoutGutter;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Content to Media Spacing', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    value: layoutGutter,
    onChange: function onChange(layoutGutter) {
      return setAttributes({
        layoutGutter: layoutGutter
      });
    },
    min: 0,
    max: 100,
    step: 25
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components__WEBPACK_IMPORTED_MODULE_3__["withVisibility"])('content-to-media-spacing', false)(ContentToMediaSpacing));


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/image-container-height-customize.js":
/*!***********************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-space-and-sizing/controls/image-container-height-customize.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");






var ImageContainerHeightCustomize = function ImageContainerHeightCustomize(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var thumbnailAspectRatio = attributes.thumbnailAspectRatio,
      thumbnailAspectRatioString = attributes.thumbnailAspectRatioString;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Thumbnail Aspect Ratio', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["getControlsClasses"])(attributes, _novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["getAspectRatioAttributes"])
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
    key: 'thumbnail-aspect-ratio',
    selected: thumbnailAspectRatioString,
    onChange: function onChange(thumbnailAspectRatioString) {
      var thumbnailAspectRatio = thumbnailAspectRatio;

      if (thumbnailAspectRatioString === 'landscape') {
        thumbnailAspectRatio = 45;
      }

      if (thumbnailAspectRatioString === 'portrait') {
        thumbnailAspectRatio = 65;
      }

      setAttributes({
        thumbnailAspectRatio: thumbnailAspectRatio,
        thumbnailAspectRatioString: thumbnailAspectRatioString
      });
    },
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Landscape', 'nova-blocks'),
      value: 'landscape'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Portrait', 'nova-blocks'),
      value: 'portrait'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Auto', 'nova-blocks'),
      value: 'auto'
    }]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components__WEBPACK_IMPORTED_MODULE_4__["withVisibility"])('media-aspect-ratio', false)(ImageContainerHeightCustomize));


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/image-container-height-settings.js":
/*!**********************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-space-and-sizing/controls/image-container-height-settings.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");





var ImageContainerHeightSettings = function ImageContainerHeightSettings(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var thumbnailAspectRatio = attributes.thumbnailAspectRatio,
      thumbnailAspectRatioString = attributes.thumbnailAspectRatioString,
      imageResizing = attributes.imageResizing;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enable Image Container Editing', 'nova-blocks'),
    checked: thumbnailAspectRatioString !== 'auto',
    onChange: function onChange(newValue) {
      var currentOrientation = thumbnailAspectRatio < 50 ? 'landscape' : 'portrait';
      var thumbnailAspectRatioString = !newValue ? 'auto' : currentOrientation;
      setAttributes({
        thumbnailAspectRatioString: thumbnailAspectRatioString
      });
    }
  }), thumbnailAspectRatioString !== 'auto' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Media Aspect Ratio', 'nova-blocks'),
    value: thumbnailAspectRatio,
    onChange: function onChange(thumbnailAspectRatio) {
      setAttributes({
        thumbnailAspectRatio: thumbnailAspectRatio,
        thumbnailAspectRatioString: thumbnailAspectRatio < 50 ? 'landscape' : 'portrait'
      });
    },
    min: 0,
    max: 100,
    step: 5
  }), thumbnailAspectRatioString !== 'auto' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image resizing', 'nova-blocks'),
    selected: imageResizing,
    onChange: function onChange(imageResizing) {
      setAttributes({
        imageResizing: imageResizing
      });
    },
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Stretch to fill the container', 'nova-blocks'),
      value: 'cropped'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Shrink to fit (no crop)', 'nova-blocks'),
      value: 'original'
    }]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components__WEBPACK_IMPORTED_MODULE_3__["withVisibility"])('media-aspect-ratio', false)(ImageContainerHeightSettings));


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/index.js":
/*!********************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-space-and-sizing/controls/index.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _space_and_sizing_presets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./space-and-sizing-presets */ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/space-and-sizing-presets.js");
/* harmony import */ var _card_spacing_customize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-spacing-customize */ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/card-spacing-customize.js");
/* harmony import */ var _card_spacing_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card-spacing-settings */ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/card-spacing-settings.js");
/* harmony import */ var _image_container_height_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image-container-height-settings */ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/image-container-height-settings.js");
/* harmony import */ var _minimum_container_height__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./minimum-container-height */ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/minimum-container-height.js");
/* harmony import */ var _visual_balance_customize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./visual-balance-customize */ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/visual-balance-customize.js");
/* harmony import */ var _image_container_height_customize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./image-container-height-customize */ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/image-container-height-customize.js");
/* harmony import */ var _content_padding__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content-padding */ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/content-padding.js");
/* harmony import */ var _visual_balance__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./visual-balance */ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/visual-balance.js");
/* harmony import */ var _media_padding__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./media-padding */ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/media-padding.js");
/* harmony import */ var _content_to_media_spacing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./content-to-media-spacing */ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/content-to-media-spacing.js");

















var SpaceAndSizingControls = function SpaceAndSizingControls(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ControlsSection"], {
    id: 'space-and-sizing',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Space and Sizing', 'nova-blocks'),
    order: 20
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ControlsTab"], {
    id: "space-and-sizing-presets",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Presets', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_space_and_sizing_presets__WEBPACK_IMPORTED_MODULE_5__["default"], props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ControlsTab"], {
    id: "space-and-sizing-customize",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Customize', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_card_spacing_customize__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: 'card-spacing-customize'
  }, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_image_container_height_customize__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: 'image-container-customize'
  }, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_visual_balance_customize__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: 'visual-balance-customize'
  }, props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Settings', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_card_spacing_settings__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: 'card-spacing-settings'
  }, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockSpacingModifier, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: 'spacing-modifier'
  }, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockChildrenSpacingModifier, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: 'spacing-children-modifier'
  }, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_minimum_container_height__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: 'minimum-container-height',
    key: 'minimum-container-height'
  }, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaHeight, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: 'media-container-height'
  }, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_image_container_height_settings__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: 'media-aspect-ratio',
    key: 'media-aspect-ratio-settings'
  }, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_visual_balance__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: 'visual-balance',
    key: 'visual-balance'
  }, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_content_padding__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: 'content-padding',
    key: 'content-padding'
  }, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_media_padding__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: 'media-padding',
    key: 'media-padding'
  }, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_content_to_media_spacing__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: 'content-to-media-spacing',
    key: 'content-to-media-spacing'
  }, props))));
};

var MediaHeight = Object(_components__WEBPACK_IMPORTED_MODULE_4__["withVisibility"])('media-container-height', false)(function (props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var mediaContainerHeight = attributes.mediaContainerHeight;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Media Container Height', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    value: mediaContainerHeight,
    onChange: function onChange(mediaContainerHeight) {
      setAttributes({
        mediaContainerHeight: mediaContainerHeight
      });
    },
    min: 0,
    max: 100,
    step: 5
  }));
});
var BlockSpacingModifier = Object(_components__WEBPACK_IMPORTED_MODULE_4__["withVisibility"])('spacing-modifier')(function (props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var spacingMultiplierOverride = attributes.spacingMultiplierOverride;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Spacing Modifier', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    value: spacingMultiplierOverride,
    onChange: function onChange(spacingMultiplierOverride) {
      return setAttributes({
        spacingMultiplierOverride: spacingMultiplierOverride
      });
    },
    min: 0,
    max: 4,
    step: 0.5
  }));
});
var BlockChildrenSpacingModifier = Object(_components__WEBPACK_IMPORTED_MODULE_4__["withVisibility"])('spacing-children-modifier')(function (props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var spacingModifier = attributes.spacingModifier;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Spacing Modifier for Inside Elements', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    value: spacingModifier,
    onChange: function onChange(spacingModifier) {
      return setAttributes({
        spacingModifier: spacingModifier
      });
    },
    min: 0,
    max: 2,
    step: 0.5
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (SpaceAndSizingControls);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/media-padding.js":
/*!****************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-space-and-sizing/controls/media-padding.js ***!
  \****************************************************************************************************/
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");





var MediaPadding = function MediaPadding(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var imagePadding = attributes.imagePadding;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Media Area Padding', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    value: imagePadding,
    onChange: function onChange(imagePadding) {
      setAttributes({
        imagePadding: imagePadding
      });
    },
    min: 0,
    max: 100,
    step: 25
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components__WEBPACK_IMPORTED_MODULE_3__["withVisibility"])('media-padding', false)(MediaPadding));


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/minimum-container-height.js":
/*!***************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-space-and-sizing/controls/minimum-container-height.js ***!
  \***************************************************************************************************************/
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
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks */ "./packages/block-editor/build-module/hooks/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _components_with_visibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/with-visibility */ "./packages/block-editor/build-module/components/with-visibility/index.js");







var MinimumContainerHeight = function MinimumContainerHeight(props) {
  var novablocksSettings = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useSettings"])();
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var minHeightFallback = attributes.minHeightFallback;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Minimum Container Height', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RadioControl"], {
    selected: minHeightFallback,
    onChange: function onChange(minHeightFallback) {
      setAttributes({
        minHeightFallback: parseFloat(minHeightFallback)
      });
    },
    options: novablocksSettings === null || novablocksSettings === void 0 ? void 0 : novablocksSettings.minimumHeightOptions
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_with_visibility__WEBPACK_IMPORTED_MODULE_5__["default"])('minimum-container-height', false)(MinimumContainerHeight));


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/space-and-sizing-presets.js":
/*!***************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-space-and-sizing/controls/space-and-sizing-presets.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks */ "./packages/block-editor/build-module/hooks/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./packages/block-editor/build-module/filters/with-space-and-sizing/utils.js");








var SpaceAndSizingPresets = function SpaceAndSizingPresets(props) {
  var _novablocksSettings$m, _novablocksSettings$m2, _novablocksSettings$m3, _novablocksSettings$m4;

  var novablocksSettings = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useSettings"])();
  var supports = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useSupports"])(props.name);
  var presetOptions = novablocksSettings === null || novablocksSettings === void 0 ? void 0 : (_novablocksSettings$m = novablocksSettings.modules) === null || _novablocksSettings$m === void 0 ? void 0 : (_novablocksSettings$m2 = _novablocksSettings$m.spaceAndSizing) === null || _novablocksSettings$m2 === void 0 ? void 0 : _novablocksSettings$m2.presetOptions;
  var advancedPresetOptions = novablocksSettings === null || novablocksSettings === void 0 ? void 0 : (_novablocksSettings$m3 = novablocksSettings.modules) === null || _novablocksSettings$m3 === void 0 ? void 0 : (_novablocksSettings$m4 = _novablocksSettings$m3.spaceAndSizing) === null || _novablocksSettings$m4 === void 0 ? void 0 : _novablocksSettings$m4.advancedPresetOptions;
  var presets = [];

  if (Array.isArray(presetOptions)) {
    var _supports$novaBlocks, _supports$novaBlocks$;

    presets.push.apply(presets, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(presetOptions));

    if (Array.isArray(advancedPresetOptions) && supports !== null && supports !== void 0 && (_supports$novaBlocks = supports.novaBlocks) !== null && _supports$novaBlocks !== void 0 && (_supports$novaBlocks$ = _supports$novaBlocks.spaceAndSizing) !== null && _supports$novaBlocks$ !== void 0 && _supports$novaBlocks$.advancedSpacing) {
      presets.push.apply(presets, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(advancedPresetOptions));
    }
  }

  if (!presets.length) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_4__["PresetControl"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: 'media-card-layout-preset',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Choose a layout preset:', 'nova-blocks'),
    options: presets,
    randomize: _utils__WEBPACK_IMPORTED_MODULE_6__["getRandomAttributes"]
  }, props));
};

/* harmony default export */ __webpack_exports__["default"] = (SpaceAndSizingPresets);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/vertical-anchoring-customize.js":
/*!*******************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-space-and-sizing/controls/vertical-anchoring-customize.js ***!
  \*******************************************************************************************************************/
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./packages/block-editor/build-module/filters/with-space-and-sizing/utils.js");






var VerticalAnchoringCustomize = function VerticalAnchoringCustomize(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var emphasisBySpace = attributes.emphasisBySpace,
      enableOverlapping = attributes.enableOverlapping;
  var contentPosition = typeof attributes.contentPosition === "string" ? attributes.contentPosition : 'center center';
  var alignment = contentPosition.split(' ');
  var verticalAlignment = alignment[0] || 'center';
  var horizontalAlignment = alignment[1] || 'center';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Vertical Anchoring', 'nova-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["BlockVerticalAlignmentToolbar"], {
    value: verticalAlignment,
    onChange: function onChange(verticalAlignment) {
      var newAttributes = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getEmphasisAttributes"])(emphasisBySpace, enableOverlapping, "".concat(verticalAlignment, " ").concat(horizontalAlignment));
      setAttributes(newAttributes);
    },
    isCollapsed: false
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (VerticalAnchoringCustomize);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/visual-balance-constants.js":
/*!***************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-space-and-sizing/controls/visual-balance-constants.js ***!
  \***************************************************************************************************************/
/*! exports provided: CONTENT_AREA_MAX_WIDTH, CONTENT_AREA_MIN_WIDTH, CONTENT_AREA_MID_VALUE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_AREA_MAX_WIDTH", function() { return CONTENT_AREA_MAX_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_AREA_MIN_WIDTH", function() { return CONTENT_AREA_MIN_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_AREA_MID_VALUE", function() { return CONTENT_AREA_MID_VALUE; });
var CONTENT_AREA_MAX_WIDTH = 90;
var CONTENT_AREA_MIN_WIDTH = 30;
var CONTENT_AREA_MID_VALUE = (CONTENT_AREA_MIN_WIDTH + CONTENT_AREA_MAX_WIDTH) * 0.5;


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/visual-balance-customize.js":
/*!***************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-space-and-sizing/controls/visual-balance-customize.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _visual_balance_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visual-balance-constants */ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/visual-balance-constants.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







var VisualBalanceCustomize = function VisualBalanceCustomize(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var balanceEmphasis = attributes.balanceEmphasis,
      balanceFocalPoint = attributes.balanceFocalPoint;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_5__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Emphasis by Balance', 'nova-blocks'),
    key: 'media-card-visual-balance-customize-1'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getControlsClasses"])(attributes, getBalanceAttributes)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    value: balanceEmphasis,
    onChange: function onChange(balanceEmphasis) {
      setAttributes(getBalanceAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        balanceEmphasis: balanceEmphasis
      })));
    },
    min: 0,
    max: 100,
    step: 25
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RadioControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Focal Point', 'nova-blocks'),
    selected: balanceFocalPoint,
    onChange: function onChange(balanceFocalPoint) {
      setAttributes(getBalanceAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        balanceFocalPoint: balanceFocalPoint
      })));
    },
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Content Area', 'nova-blocks'),
      value: 'content'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Media / Gallery', 'nova-blocks'),
      value: 'media'
    }]
  })));
};

var getBalanceAttributes = function getBalanceAttributes(_ref) {
  var balanceEmphasis = _ref.balanceEmphasis,
      balanceFocalPoint = _ref.balanceFocalPoint;
  var width = balanceEmphasis * (_visual_balance_constants__WEBPACK_IMPORTED_MODULE_6__["CONTENT_AREA_MAX_WIDTH"] - _visual_balance_constants__WEBPACK_IMPORTED_MODULE_6__["CONTENT_AREA_MID_VALUE"]) / 100 + _visual_balance_constants__WEBPACK_IMPORTED_MODULE_6__["CONTENT_AREA_MID_VALUE"];
  var contentAreaWidth = 'content' === balanceFocalPoint ? width : 100 - width;
  return {
    balanceEmphasis: balanceEmphasis,
    balanceFocalPoint: balanceFocalPoint,
    contentAreaWidth: contentAreaWidth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components__WEBPACK_IMPORTED_MODULE_5__["withVisibility"])('visual-balance', false)(VisualBalanceCustomize));


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/visual-balance.js":
/*!*****************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-space-and-sizing/controls/visual-balance.js ***!
  \*****************************************************************************************************/
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components */ "./packages/block-editor/build-module/components/index.js");
/* harmony import */ var _components_with_visibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/with-visibility */ "./packages/block-editor/build-module/components/with-visibility/index.js");
/* harmony import */ var _visual_balance_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visual-balance-constants */ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/visual-balance-constants.js");







var VisualBalance = function VisualBalance(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var contentAreaWidth = attributes.contentAreaWidth;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Content Width relative to Media Area', 'nova-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    value: contentAreaWidth,
    onChange: function onChange(contentAreaWidth) {
      return setAttributes({
        contentAreaWidth: contentAreaWidth
      });
    },
    min: _visual_balance_constants__WEBPACK_IMPORTED_MODULE_5__["CONTENT_AREA_MIN_WIDTH"],
    max: _visual_balance_constants__WEBPACK_IMPORTED_MODULE_5__["CONTENT_AREA_MAX_WIDTH"],
    step: 5
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_with_visibility__WEBPACK_IMPORTED_MODULE_4__["default"])('visual-balance', false)(VisualBalance));


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-space-and-sizing/index.js":
/*!***********************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-space-and-sizing/index.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _with_space_and_sizing_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with-space-and-sizing-attributes */ "./packages/block-editor/build-module/filters/with-space-and-sizing/with-space-and-sizing-attributes.js");
/* harmony import */ var _with_space_and_sizing_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-space-and-sizing-controls */ "./packages/block-editor/build-module/filters/with-space-and-sizing/with-space-and-sizing-controls.js");
/* harmony import */ var _with_space_and_sizing_save_custom_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./with-space-and-sizing-save-custom-props */ "./packages/block-editor/build-module/filters/with-space-and-sizing/with-space-and-sizing-save-custom-props.js");
/* harmony import */ var _with_space_and_sizing_wrapper_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./with-space-and-sizing-wrapper-props */ "./packages/block-editor/build-module/filters/with-space-and-sizing/with-space-and-sizing-wrapper-props.js");
/* harmony import */ var _with_space_and_sizing_edit_custom_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./with-space-and-sizing-edit-custom-props */ "./packages/block-editor/build-module/filters/with-space-and-sizing/with-space-and-sizing-edit-custom-props.js");






Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('blocks.registerBlockType', 'novablocks/with-space-and-sizing-attributes', _with_space_and_sizing_attributes__WEBPACK_IMPORTED_MODULE_1__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('editor.BlockEdit', 'novablocks/with-space-and-sizing-controls', _with_space_and_sizing_controls__WEBPACK_IMPORTED_MODULE_2__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('editor.BlockEdit', 'novablocks/with-space-and-sizing-edit-custom-props', _with_space_and_sizing_edit_custom_props__WEBPACK_IMPORTED_MODULE_5__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('editor.BlockListBlock', 'novablocks/group/with-block-list-wrapper-props', _with_space_and_sizing_wrapper_props__WEBPACK_IMPORTED_MODULE_4__["default"]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('blocks.getSaveContent.extraProps', 'novablocks/with-space-and-sizing-save-custom-props', _with_space_and_sizing_save_custom_props__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-space-and-sizing/utils.js":
/*!***********************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-space-and-sizing/utils.js ***!
  \***********************************************************************************/
/*! exports provided: getEmphasisAttributes, getRandomAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmphasisAttributes", function() { return getEmphasisAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomAttributes", function() { return getRandomAttributes; });
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__);

var getEmphasisAttributes = function getEmphasisAttributes(emphasis, overlap) {
  var contentPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'center center';
  var actualEmphasis = !overlap ? emphasis : -1 * emphasis;
  var alignment = contentPosition.split(' ');
  var verticalAlignment = alignment[0] || 'center';
  var horizontalAlignment = alignment[1] || 'center';
  return {
    emphasisBySpace: emphasis,
    enableOverlapping: overlap,
    blockTopSpacing: actualEmphasis < 0 && ['center', 'bottom'].includes(verticalAlignment) ? actualEmphasis : 0,
    blockBottomSpacing: actualEmphasis < 0 && ['top', 'center'].includes(verticalAlignment) ? actualEmphasis : 0,
    emphasisTopSpacing: verticalAlignment !== 'top' ? actualEmphasis : 1,
    emphasisBottomSpacing: verticalAlignment !== 'bottom' ? actualEmphasis : 1,
    contentPosition: "".concat(verticalAlignment, " ").concat(horizontalAlignment)
  };
};
var getRandomAttributes = function getRandomAttributes() {
  var getRandomSign = function getRandomSign() {
    return Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomArrayFromArray"])([-1, 0, 1], 1)[0];
  };

  var block = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomBetween"])(0, 3);
  var emphasis = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomBetween"])(0, 3);
  var blockTopSign = getRandomSign();
  var blockBottomSign = getRandomSign();
  var emphasisTopSign = getRandomSign();
  var emphasisBottomSign = getRandomSign();
  var verticalAlignment = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomArrayFromArray"])(['top', 'center', 'bottom'], 1)[0];
  var enableOverlapping = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomArrayFromArray"])([true, false], 1)[0];
  return {
    blockTopSpacing: block * blockTopSign,
    blockBottomSpacing: block * blockBottomSign,
    emphasisTopSpacing: emphasis * emphasisTopSign,
    emphasisBottomSpacing: emphasis * emphasisBottomSign,
    enableOverlapping: enableOverlapping,
    verticalAlignment: verticalAlignment
  };
};


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-space-and-sizing/with-space-and-sizing-attributes.js":
/*!**************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-space-and-sizing/with-space-and-sizing-attributes.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var attributes = {
  mediaContainerHeight: {
    type: "number",
    "default": 50
  },
  thumbnailAspectRatioString: {
    type: "string",
    "default": "landscape"
  },
  thumbnailAspectRatio: {
    type: "number",
    "default": 50
  },
  imageResizing: {
    type: "string",
    "default": "cropped"
  },
  imagePadding: {
    type: "number",
    "default": 0
  },
  contentPadding: {
    type: "number",
    "default": 0
  },
  emphasisBySpace: {
    type: "number",
    "default": 1
  },
  enableOverlapping: {
    type: "boolean",
    "default": false
  },
  blockTopSpacing: {
    type: "number",
    "default": 1
  },
  blockBottomSpacing: {
    type: "number",
    "default": 0
  },
  emphasisTopSpacing: {
    type: "number",
    "default": 0
  },
  emphasisBottomSpacing: {
    type: "number",
    "default": 0
  },
  minHeightFallback: {
    type: "number",
    "default": 0
  },
  balanceEmphasis: {
    type: "number",
    "default": 50
  },
  balanceFocalPoint: {
    type: "string",
    "default": "content"
  },
  contentAreaWidth: {
    type: "number",
    "default": 50
  },
  layoutGutter: {
    type: "number",
    "default": 0
  },
  spacingModifier: {
    type: "number",
    "default": 1
  },
  spacingMultiplierOverride: {
    type: "number",
    "default": 1
  }
};

var withSpaceAndSizingAttributes = function withSpaceAndSizingAttributes(block) {
  var _block$supports, _block$supports$novaB;

  var spacingSupports = block === null || block === void 0 ? void 0 : (_block$supports = block.supports) === null || _block$supports === void 0 ? void 0 : (_block$supports$novaB = _block$supports.novaBlocks) === null || _block$supports$novaB === void 0 ? void 0 : _block$supports$novaB.spaceAndSizing;

  if (spacingSupports !== true && (spacingSupports === null || spacingSupports === void 0 ? void 0 : spacingSupports.attributes) !== true) {
    return block;
  }

  return _objectSpread(_objectSpread({}, block), {}, {
    attributes: _objectSpread(_objectSpread({}, block.attributes), attributes)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (withSpaceAndSizingAttributes);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-space-and-sizing/with-space-and-sizing-controls.js":
/*!************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-space-and-sizing/with-space-and-sizing-controls.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks */ "./packages/block-editor/build-module/hooks/index.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls */ "./packages/block-editor/build-module/filters/with-space-and-sizing/controls/index.js");






var withSpaceAndSizingControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var _supports$novaBlocks, _supports$novaBlocks2, _supports$novaBlocks3;

    var setAttributes = props.setAttributes,
        clientId = props.clientId;
    var supports = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useSupports"])(props.name); //    const isDisabled = useBlockTopSpacingIsDisabled( clientId );
    //
    //    useEffect( () => {
    //
    //      if ( isDisabled ) {
    //        setAttributes( { blockTopSpacing: 0 } );
    //      }
    //
    //    }, [ isDisabled ] );

    if ((supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks = supports.novaBlocks) === null || _supports$novaBlocks === void 0 ? void 0 : _supports$novaBlocks.spaceAndSizing) !== true && (supports === null || supports === void 0 ? void 0 : (_supports$novaBlocks2 = supports.novaBlocks) === null || _supports$novaBlocks2 === void 0 ? void 0 : (_supports$novaBlocks3 = _supports$novaBlocks2.spaceAndSizing) === null || _supports$novaBlocks3 === void 0 ? void 0 : _supports$novaBlocks3.controls) !== true) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_4__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props));
  };
}, 'withSpaceAndSizingControls');
/* harmony default export */ __webpack_exports__["default"] = (withSpaceAndSizingControls);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-space-and-sizing/with-space-and-sizing-edit-custom-props.js":
/*!*********************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-space-and-sizing/with-space-and-sizing-edit-custom-props.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks */ "./packages/block-editor/build-module/hooks/index.js");





var withSpaceAndSizingEditCustomProps = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var _supports$novaBlocks;

    var supports = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useSupports"])(props.name);
    var attributes = props.attributes;
    var style = props.style ? props.style : {};

    if (!!(supports !== null && supports !== void 0 && (_supports$novaBlocks = supports.novaBlocks) !== null && _supports$novaBlocks !== void 0 && _supports$novaBlocks.spaceAndSizing)) {
      Object.assign(style, Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["getSpacingCSSProps"])(attributes));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      style: style
    }));
  };
}, "withSpaceAndSizingEditCustomProps");
/* harmony default export */ __webpack_exports__["default"] = (withSpaceAndSizingEditCustomProps);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-space-and-sizing/with-space-and-sizing-save-custom-props.js":
/*!*********************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-space-and-sizing/with-space-and-sizing-save-custom-props.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./packages/block-editor/build-module/utils/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var withSpaceAndSizingSaveCustomProps = function withSpaceAndSizingSaveCustomProps(extraProps, blockType, attributes) {
  var _supports$novaBlocks;

  var supports = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getSupports"])(blockType.name);

  if (!(supports !== null && supports !== void 0 && (_supports$novaBlocks = supports.novaBlocks) !== null && _supports$novaBlocks !== void 0 && _supports$novaBlocks.spaceAndSizing)) {
    return extraProps;
  }

  return _objectSpread(_objectSpread({}, extraProps), {}, {
    style: _objectSpread(_objectSpread({}, extraProps === null || extraProps === void 0 ? void 0 : extraProps.style), Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getSpacingCSSProps"])(attributes))
  });
};

/* harmony default export */ __webpack_exports__["default"] = (withSpaceAndSizingSaveCustomProps);


/***/ }),

/***/ "./packages/block-editor/build-module/filters/with-space-and-sizing/with-space-and-sizing-wrapper-props.js":
/*!*****************************************************************************************************************!*\
  !*** ./packages/block-editor/build-module/filters/with-space-and-sizing/with-space-and-sizing-wrapper-props.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./packages/block-editor/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks */ "./packages/block-editor/build-module/hooks/index.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var withBlockListWrapperProps = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["createHigherOrderComponent"])(function (BlockListBlock) {
  return function (props) {
    var _supports$novaBlocks, _wrapperProps, _wrapperProps2;

    var attributes = props.attributes;
    var align = attributes.align;
    var supports = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useSupports"])(props.name);
    var wrapperProps = props.wrapperProps;

    if (!(supports !== null && supports !== void 0 && (_supports$novaBlocks = supports.novaBlocks) !== null && _supports$novaBlocks !== void 0 && _supports$novaBlocks.spaceAndSizing)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(BlockListBlock, props);
    }

    wrapperProps = _objectSpread(_objectSpread({}, wrapperProps), {}, {
      style: _objectSpread(_objectSpread({}, (_wrapperProps = wrapperProps) === null || _wrapperProps === void 0 ? void 0 : _wrapperProps.style), Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_5__["getSpacingCSSProps"])(attributes)),
      className: (_wrapperProps2 = wrapperProps) === null || _wrapperProps2 === void 0 ? void 0 : _wrapperProps2.className
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(BlockListBlock, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      wrapperProps: wrapperProps
    }));
  };
}, 'withBlockListWrapperProps');
/* harmony default export */ __webpack_exports__["default"] = (withBlockListWrapperProps);


/***/ }),

/***/ "./packages/block-editor/build-module/hooks/index.js":
/*!***********************************************************!*\
  !*** ./packages/block-editor/build-module/hooks/index.js ***!
  \***********************************************************/
/*! exports provided: useApiFetch, useAnimationFrame, useBlockTopSpacingIsDisabled, useEffectDebugger, useDidUpdateEffect, useInnerBlocks, useInnerBlocksCount, useInnerBlocksLock, useMemoryState, useMeta, useOnScroll, useResizeObserver, useSupports, useSettings, useScrollContainer, useScrollContainerBox, useSelectParent, useTraceUpdate, useVisibility, useCustomDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-api-fetch */ "./packages/block-editor/build-module/hooks/use-api-fetch/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useApiFetch", function() { return _use_api_fetch__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _use_animation_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-animation-frame */ "./packages/block-editor/build-module/hooks/use-animation-frame/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAnimationFrame", function() { return _use_animation_frame__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _use_block_top_spacing_is_disabled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-block-top-spacing-is-disabled */ "./packages/block-editor/build-module/hooks/use-block-top-spacing-is-disabled/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBlockTopSpacingIsDisabled", function() { return _use_block_top_spacing_is_disabled__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _use_effect_debugger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-effect-debugger */ "./packages/block-editor/build-module/hooks/use-effect-debugger/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffectDebugger", function() { return _use_effect_debugger__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _use_did_update_effect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-did-update-effect */ "./packages/block-editor/build-module/hooks/use-did-update-effect/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDidUpdateEffect", function() { return _use_did_update_effect__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _use_inner_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-inner-blocks */ "./packages/block-editor/build-module/hooks/use-inner-blocks/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useInnerBlocks", function() { return _use_inner_blocks__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _use_inner_blocks_count__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-inner-blocks-count */ "./packages/block-editor/build-module/hooks/use-inner-blocks-count/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useInnerBlocksCount", function() { return _use_inner_blocks_count__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _use_inner_blocks_lock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-inner-blocks-lock */ "./packages/block-editor/build-module/hooks/use-inner-blocks-lock/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useInnerBlocksLock", function() { return _use_inner_blocks_lock__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _use_memory_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./use-memory-state */ "./packages/block-editor/build-module/hooks/use-memory-state/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMemoryState", function() { return _use_memory_state__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _use_meta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./use-meta */ "./packages/block-editor/build-module/hooks/use-meta/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMeta", function() { return _use_meta__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _use_on_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./use-on-scroll */ "./packages/block-editor/build-module/hooks/use-on-scroll/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOnScroll", function() { return _use_on_scroll__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _use_resize_observer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./use-resize-observer */ "./packages/block-editor/build-module/hooks/use-resize-observer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useResizeObserver", function() { return _use_resize_observer__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _use_supports__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./use-supports */ "./packages/block-editor/build-module/hooks/use-supports/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSupports", function() { return _use_supports__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _use_settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./use-settings */ "./packages/block-editor/build-module/hooks/use-settings/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSettings", function() { return _use_settings__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _use_scroll_container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./use-scroll-container */ "./packages/block-editor/build-module/hooks/use-scroll-container/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScrollContainer", function() { return _use_scroll_container__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _use_scroll_container_box__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./use-scroll-container-box */ "./packages/block-editor/build-module/hooks/use-scroll-container-box/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScrollContainerBox", function() { return _use_scroll_container_box__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _use_select_parent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./use-select-parent */ "./packages/block-editor/build-module/hooks/use-select-parent/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSelectParent", function() { return _use_select_parent__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _use_trace_update__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./use-trace-update */ "./packages/block-editor/build-module/hooks/use-trace-update/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTraceUpdate", function() { return _use_trace_update__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _use_visibility__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./use-visibility */ "./packages/block-editor/build-module/hooks/use-visibility/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useVisibility", function() { return _use_visibility__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _use_custom_defaults__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./use-custom-defaults */ "./packages/block-editor/build-module/hooks/use-custom-defaults/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCustomDefaults", function() { return _use_custom_defaults__WEBPACK_IMPORTED_MODULE_19__["default"]; });























/***/ }),

/***/ "./packages/block-editor/build-module/hooks/use-animation-frame/index.js":
/*!*******************************************************************************!*\
  !*** ./packages/block-editor/build-module/hooks/use-animation-frame/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var useAnimationFrame = function useAnimationFrame(callback) {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  var requestRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var previousTimeRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var animate = function animate(time) {
    if (previousTimeRef.current) {
      var deltaTime = time - previousTimeRef.current;
      callback(deltaTime);
    }

    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    requestRef.current = requestAnimationFrame(animate);
    return function () {
      return cancelAnimationFrame(requestRef.current);
    };
  }, []); // Make sure the effect runs only once
};

/* harmony default export */ __webpack_exports__["default"] = (useAnimationFrame);


/***/ }),

/***/ "./packages/block-editor/build-module/hooks/use-api-fetch/index.js":
/*!*************************************************************************!*\
  !*** ./packages/block-editor/build-module/hooks/use-api-fetch/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);




var _wp = wp,
    index = _wp.apiFetch;
var cache = {};

var useApiFetch = function useApiFetch(url) {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!url) {
      return;
    }

    var fetchData = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (cache[url]) {
                  _context.next = 4;
                  break;
                }

                _context.next = 3;
                return index({
                  path: url
                });

              case 3:
                cache[url] = _context.sent;

              case 4:
                setData(cache[url]);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, [url]);
  return {
    data: data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useApiFetch);


/***/ }),

/***/ "./packages/block-editor/build-module/hooks/use-block-top-spacing-is-disabled/index.js":
/*!*********************************************************************************************!*\
  !*** ./packages/block-editor/build-module/hooks/use-block-top-spacing-is-disabled/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



var useBlockTopSpacingIsDisabled = function useBlockTopSpacingIsDisabled(clientId) {
  var _useSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])('core/block-editor'),
      getBlockParents = _useSelect.getBlockParents,
      getBlock = _useSelect.getBlock,
      getClientIdsWithDescendants = _useSelect.getClientIdsWithDescendants;

  var parents = getBlockParents(clientId).slice();
  var rootBlocks = getClientIdsWithDescendants();
  var isDisabled = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    if (parents.length) {
      var _getBlock = getBlock(parents[parents.length - 1]),
          innerBlocks = _getBlock.innerBlocks;

      if (innerBlocks.length && innerBlocks[0].clientId === clientId) {
        return true;
      }
    }

    if (clientId === rootBlocks[0]) {
      return true;
    }

    return false;
  }, [clientId, rootBlocks]);
  return isDisabled;
};

/* harmony default export */ __webpack_exports__["default"] = (useBlockTopSpacingIsDisabled);


/***/ }),

/***/ "./packages/block-editor/build-module/hooks/use-custom-defaults/index.js":
/*!*******************************************************************************!*\
  !*** ./packages/block-editor/build-module/hooks/use-custom-defaults/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var useCustomDefaults = function useCustomDefaults(clientId, attributes, getNewDefaults) {
  var defaultsGenerated = attributes.defaultsGenerated;

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])('core/block-editor'),
      updateBlockAttributes = _useDispatch.updateBlockAttributes;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!defaultsGenerated) {
      getNewDefaults(attributes).then(function (defaults) {
        updateBlockAttributes(clientId, _objectSpread(_objectSpread({}, defaults), {}, {
          defaultsGenerated: true
        }));
      });
    }
  }, [clientId, defaultsGenerated]);
};

/* harmony default export */ __webpack_exports__["default"] = (useCustomDefaults);


/***/ }),

/***/ "./packages/block-editor/build-module/hooks/use-did-update-effect/index.js":
/*!*********************************************************************************!*\
  !*** ./packages/block-editor/build-module/hooks/use-did-update-effect/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var useDidUpdateEffect = function useDidUpdateEffect(fn, inputs) {
  var didMountRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (didMountRef.current) {
      fn();
    } else {
      didMountRef.current = true;
    }
  }, inputs);
};

/* harmony default export */ __webpack_exports__["default"] = (useDidUpdateEffect);


/***/ }),

/***/ "./packages/block-editor/build-module/hooks/use-effect-debugger/index.js":
/*!*******************************************************************************!*\
  !*** ./packages/block-editor/build-module/hooks/use-effect-debugger/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var usePrevious = function usePrevious(value, initialValue) {
  var ref = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useRef"])(initialValue);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    ref.current = value;
  });
  return ref.current;
};

var useEffectDebugger = function useEffectDebugger(effectHook, dependencies) {
  var dependencyNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var previousDeps = usePrevious(dependencies, []);
  var changedDeps = dependencies.reduce(function (accum, dependency, index) {
    if (dependency !== previousDeps[index]) {
      var keyName = dependencyNames[index] || index;
      return _objectSpread(_objectSpread({}, accum), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, keyName, {
        before: previousDeps[index],
        after: dependency
      }));
    }

    return accum;
  }, {});

  if (Object.keys(changedDeps).length) {
    console.log('[use-effect-debugger] ', changedDeps);
  }

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(effectHook, dependencies);
};

/* harmony default export */ __webpack_exports__["default"] = (useEffectDebugger);


/***/ }),

/***/ "./packages/block-editor/build-module/hooks/use-inner-blocks-count/index.js":
/*!**********************************************************************************!*\
  !*** ./packages/block-editor/build-module/hooks/use-inner-blocks-count/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks */ "./packages/block-editor/build-module/hooks/index.js");





var useInnerBlocksCount = function useInnerBlocksCount(clientId, postsToShow, innerBlockName, innerBlockAttributes) {
  var itemsCount = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["useSelect"])(function (select) {
    return select('core/block-editor').getBlockCount(clientId);
  }, [clientId]);

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])('core/block-editor'),
      replaceInnerBlocks = _useDispatch.replaceInnerBlocks,
      updateBlockAttributes = _useDispatch.updateBlockAttributes;

  var innerBlocks = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useInnerBlocks"])(clientId);
  var innerBlocksCount = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])(innerBlocks.length);
  var postsToShowValue = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])(postsToShow);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (innerBlocks.length !== postsToShow) {
      if (innerBlocks.length !== innerBlocksCount.current) {
        // inner blocks changed
        innerBlocksCount.current = innerBlocks.length;
        postsToShowValue.current = innerBlocks.length;
        updateBlockAttributes(clientId, {
          postsToShow: innerBlocks.length
        });
      } else {
        // postsToShow changed
        innerBlocksCount.current = postsToShow;
        postsToShowValue.current = postsToShow;
        var newInnerBlocks = innerBlocks.slice(0, postsToShow);

        if (postsToShow > itemsCount) {
          for (var i = 0; i < postsToShow - itemsCount; i++) {
            newInnerBlocks.push(Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(innerBlockName, innerBlockAttributes));
          }
        }

        replaceInnerBlocks(clientId, newInnerBlocks);
      }
    }
  }, [postsToShow, innerBlocks]);
};

/* harmony default export */ __webpack_exports__["default"] = (useInnerBlocksCount);


/***/ }),

/***/ "./packages/block-editor/build-module/hooks/use-inner-blocks-lock/index.js":
/*!*********************************************************************************!*\
  !*** ./packages/block-editor/build-module/hooks/use-inner-blocks-lock/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks */ "./packages/block-editor/build-module/hooks/index.js");




var useInnerBlocksLock = function useInnerBlocksLock(clientId, lockSettings, attributes) {
  var innerBlockName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])('core/block-editor'),
      updateBlockAttributes = _useDispatch.updateBlockAttributes;

  var innerBlocks = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useInnerBlocks"])(clientId);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    innerBlocks.forEach(function (innerBlock) {
      // If we have been given an inner block name to look for, skip all others.
      if (innerBlockName && innerBlock.name !== innerBlockName) {
        return;
      }

      updateBlockAttributes(innerBlock.clientId, {
        lock: lockSettings
      });
    });
  }, [attributes]);
};

/* harmony default export */ __webpack_exports__["default"] = (useInnerBlocksLock);


/***/ }),

/***/ "./packages/block-editor/build-module/hooks/use-inner-blocks/index.js":
/*!****************************************************************************!*\
  !*** ./packages/block-editor/build-module/hooks/use-inner-blocks/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);


var useInnerBlocks = function useInnerBlocks(clientId) {
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(function (select) {
    var _select$getBlock;

    return ((_select$getBlock = select('core/block-editor').getBlock(clientId)) === null || _select$getBlock === void 0 ? void 0 : _select$getBlock.innerBlocks) || [];
  }, [clientId]);
};

/* harmony default export */ __webpack_exports__["default"] = (useInnerBlocks);


/***/ }),

/***/ "./packages/block-editor/build-module/hooks/use-memory-state/index.js":
/*!****************************************************************************!*\
  !*** ./packages/block-editor/build-module/hooks/use-memory-state/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


var memoryState = {};

var useMemoryState = function useMemoryState(key, initialState) {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(function () {
    var hasMemoryValue = Object.prototype.hasOwnProperty.call(memoryState, key);

    if (hasMemoryValue) {
      return memoryState[key];
    } else {
      return typeof initialState === 'function' ? initialState() : initialState;
    }
  }),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  function onChange(nextState) {
    memoryState[key] = nextState;
    setState(nextState);
  }

  return [state, onChange];
};

/* harmony default export */ __webpack_exports__["default"] = (useMemoryState);


/***/ }),

/***/ "./packages/block-editor/build-module/hooks/use-meta/index.js":
/*!********************************************************************!*\
  !*** ./packages/block-editor/build-module/hooks/use-meta/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var useMeta = function useMeta(name) {
  var noop = function noop() {};

  var postType = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["useSelect"])(function (select) {
    var _select;

    return (_select = select('core/editor')) === null || _select === void 0 ? void 0 : _select.getCurrentPostType();
  }, []);

  if (!postType) {
    return [null, noop];
  }

  var _useEntityProp = Object(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__["useEntityProp"])('postType', postType, 'meta'),
      _useEntityProp2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useEntityProp, 2),
      meta = _useEntityProp2[0],
      setMeta = _useEntityProp2[1];

  if (!meta) {
    return [null, noop];
  }

  var metaFieldValue = meta[name];
  var setMetaFieldValue = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (newValue) {
    setMeta(_objectSpread(_objectSpread({}, meta), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, newValue)));
  }, [meta]);
  return [metaFieldValue, setMetaFieldValue];
};

/* harmony default export */ __webpack_exports__["default"] = (useMeta);


/***/ }),

/***/ "./packages/block-editor/build-module/hooks/use-on-scroll/index.js":
/*!*************************************************************************!*\
  !*** ./packages/block-editor/build-module/hooks/use-on-scroll/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var useOnScroll = function useOnScroll(element, onScroll) {
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (element) {
      element.addEventListener('scroll', onScroll);
    }

    return function () {
      if (element) {
        element.removeEventListener('scroll', onScroll);
      }
    };
  }, [element]);
};

/* harmony default export */ __webpack_exports__["default"] = (useOnScroll);


/***/ }),

/***/ "./packages/block-editor/build-module/hooks/use-resize-observer/index.js":
/*!*******************************************************************************!*\
  !*** ./packages/block-editor/build-module/hooks/use-resize-observer/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



var useResizeObserver = function useResizeObserver() {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      entry = _useState2[0],
      setEntry = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      node = _useState4[0],
      setNode = _useState4[1];

  var observer = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var disconnect = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var current = observer.current;
    current && current.disconnect();
  }, []);
  var observe = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    observer.current = new window.ResizeObserver(function (_ref) {
      var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 1),
          entry = _ref2[0];

      return setEntry(entry);
    });
    node && observer.current.observe(node);
  }, [node]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function () {
    observe();
    return function () {
      return disconnect();
    };
  }, [disconnect, observe]);
  return [setNode, entry];
};

/* harmony default export */ __webpack_exports__["default"] = (useResizeObserver);


/***/ }),

/***/ "./packages/block-editor/build-module/hooks/use-scroll-container-box/index.js":
/*!************************************************************************************!*\
  !*** ./packages/block-editor/build-module/hooks/use-scroll-container-box/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./packages/block-editor/build-module/hooks/index.js");




var useScrollContainerBox = function useScrollContainerBox(element) {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      box = _useState2[0],
      setBox = _useState2[1];

  var _useResizeObserver = Object(_index__WEBPACK_IMPORTED_MODULE_2__["useResizeObserver"])(),
      _useResizeObserver2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useResizeObserver, 2),
      setNode = _useResizeObserver2[0],
      entry = _useResizeObserver2[1];

  var updateBox = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setBox(element.getBoundingClientRect());
  }, [element]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (element) {
      setNode(element);
    }
  }, [element]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!!element) {
      setBox(element.getBoundingClientRect());
    }
  }, [entry]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (element) {
      element.addEventListener('scroll', updateBox);
    }

    return function () {
      if (element) {
        element.removeEventListener('scroll', updateBox);
      }
    };
  }, []);
  return box;
};

/* harmony default export */ __webpack_exports__["default"] = (useScrollContainerBox);


/***/ }),

/***/ "./packages/block-editor/build-module/hooks/use-scroll-container/index.js":
/*!********************************************************************************!*\
  !*** ./packages/block-editor/build-module/hooks/use-scroll-container/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./packages/block-editor/build-module/utils/index.js");




var useScrollContainer = function useScrollContainer() {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      scrollContainer = _useState2[0],
      setScrollContainer = _useState2[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setScrollContainer(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getEditorScrollContainer"])());
  }, []);
  return scrollContainer;
};

/* harmony default export */ __webpack_exports__["default"] = (useScrollContainer);


/***/ }),

/***/ "./packages/block-editor/build-module/hooks/use-select-parent/index.js":
/*!*****************************************************************************!*\
  !*** ./packages/block-editor/build-module/hooks/use-select-parent/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



var useSelectParent = function useSelectParent(props, condition) {
  var clientId = props.clientId,
      isSelected = props.isSelected;

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])('core/block-editor'),
      selectBlock = _useDispatch.selectBlock,
      clearSelectedBlock = _useDispatch.clearSelectedBlock;

  var parents = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(function (select) {
    return select('core/block-editor').getBlockParents(clientId).slice();
  }, [clientId]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isSelected && parents.length) {
      if (typeof condition === "undefined" || !!condition) {
        clearSelectedBlock().then(function () {
          selectBlock(parents[parents.length - 1]);
        });
      }
    }
  }, [isSelected, condition]);
};

/* harmony default export */ __webpack_exports__["default"] = (useSelectParent);


/***/ }),

/***/ "./packages/block-editor/build-module/hooks/use-settings/index.js":
/*!************************************************************************!*\
  !*** ./packages/block-editor/build-module/hooks/use-settings/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);


var useSettings = function useSettings() {
  var mapSelect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'novablocks';
  var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(function (select) {
    return select(mapSelect).getSettings();
  }, deps);
};

/* harmony default export */ __webpack_exports__["default"] = (useSettings);


/***/ }),

/***/ "./packages/block-editor/build-module/hooks/use-supports/index.js":
/*!************************************************************************!*\
  !*** ./packages/block-editor/build-module/hooks/use-supports/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);


var useSupports = function useSupports(blockType) {
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(function (select) {
    return select('core/blocks').getBlockType(blockType).supports;
  }, [blockType]);
};

/* harmony default export */ __webpack_exports__["default"] = (useSupports);


/***/ }),

/***/ "./packages/block-editor/build-module/hooks/use-trace-update/index.js":
/*!****************************************************************************!*\
  !*** ./packages/block-editor/build-module/hooks/use-trace-update/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



var useTraceUpdate = function useTraceUpdate(props) {
  var prev = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useRef"])(props);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var changedProps = Object.entries(props).reduce(function (ps, _ref) {
      var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
          k = _ref2[0],
          v = _ref2[1];

      if (prev.current[k] !== v) {
        ps[k] = [prev.current[k], v];
      }

      return ps;
    }, {});

    if (Object.keys(changedProps).length > 0) {
      console.log('Changed props:', changedProps);
    }

    prev.current = props;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (useTraceUpdate);


/***/ }),

/***/ "./packages/block-editor/build-module/hooks/use-visibility/index.js":
/*!**************************************************************************!*\
  !*** ./packages/block-editor/build-module/hooks/use-visibility/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filters_with_controls_visibility_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../filters/with-controls-visibility/context */ "./packages/block-editor/build-module/filters/with-controls-visibility/context.js");



var useVisibility = function useVisibility(id) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var visibilityContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_filters_with_controls_visibility_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var config = visibilityContext[id];
  var fallbackValue = typeof config === "undefined" ? defaultValue : false;

  if (fallbackValue || config === true) {
    return true;
  }

  return false;
};

/* harmony default export */ __webpack_exports__["default"] = (useVisibility);


/***/ }),

/***/ "./packages/block-editor/build-module/index.js":
/*!*****************************************************!*\
  !*** ./packages/block-editor/build-module/index.js ***!
  \*****************************************************/
/*! exports provided: AutocompleteTokenField, BlockVerticalAlignmentToolbar, CustomMenuItem, CardFieldsPreview, ControlsGroup, ColorPicker, DuotonePicker, FontSizePicker, HeadingLevelIcon, HeadingToolbar, ImageSelectControl, InnerBlocksPreview, Notice, ParametricGrid, PresetControl, SignalControl, TextPlaceholder, ToggleGroup, VariationPicker, withVisibility, insertTemplate, getPlaceholderImages, CardButton, CardTitle, CardSubtitle, CardMeta, CardDescription, CardFooter, Card, CardContentWrapper, CardMediaWrapper, normalizeImage, normalizeImages, PostCardMedia, PostCardLetter, PostCard, getSvg, getIconSvg, ControlsDrawerContent, ControlsSection, ControlsSections, ControlsTab, Drawer, Drawers, DrawerList, DrawerPanel, DrawerListBefore, DrawerListAfter, GalleryPreview, GalleryPlaceholder, useApiFetch, useAnimationFrame, useBlockTopSpacingIsDisabled, useEffectDebugger, useDidUpdateEffect, useInnerBlocks, useInnerBlocksCount, useInnerBlocksLock, useMemoryState, useMeta, useOnScroll, useResizeObserver, useSupports, useSettings, useScrollContainer, useScrollContainerBox, useSelectParent, useTraceUpdate, useVisibility, useCustomDefaults, setAttributesToInnerBlocks, getEditorScrollContainer, getSupports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./packages/block-editor/build-module/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutocompleteTokenField", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["AutocompleteTokenField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockVerticalAlignmentToolbar", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["BlockVerticalAlignmentToolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomMenuItem", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["CustomMenuItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardFieldsPreview", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["CardFieldsPreview"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlsGroup", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ControlsGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ColorPicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DuotonePicker", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["DuotonePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizePicker", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["FontSizePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeadingLevelIcon", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["HeadingLevelIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeadingToolbar", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["HeadingToolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageSelectControl", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ImageSelectControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InnerBlocksPreview", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["InnerBlocksPreview"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notice", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["Notice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParametricGrid", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ParametricGrid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PresetControl", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["PresetControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignalControl", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["SignalControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextPlaceholder", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["TextPlaceholder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleGroup", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ToggleGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VariationPicker", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["VariationPicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withVisibility", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["withVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertTemplate", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["insertTemplate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPlaceholderImages", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["getPlaceholderImages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardButton", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["CardButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardTitle", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["CardTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardSubtitle", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["CardSubtitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardMeta", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["CardMeta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardDescription", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["CardDescription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardFooter", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["CardFooter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["Card"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardContentWrapper", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["CardContentWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardMediaWrapper", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["CardMediaWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeImage", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["normalizeImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeImages", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["normalizeImages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostCardMedia", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["PostCardMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostCardLetter", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["PostCardLetter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostCard", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["PostCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSvg", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["getSvg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIconSvg", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["getIconSvg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlsDrawerContent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ControlsDrawerContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlsSection", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ControlsSection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlsSections", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ControlsSections"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlsTab", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ControlsTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["Drawer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Drawers", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["Drawers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerList", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["DrawerList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerPanel", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["DrawerPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerListBefore", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["DrawerListBefore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerListAfter", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["DrawerListAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GalleryPreview", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["GalleryPreview"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GalleryPlaceholder", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["GalleryPlaceholder"]; });

/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters */ "./packages/block-editor/build-module/filters/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks */ "./packages/block-editor/build-module/hooks/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useApiFetch", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["useApiFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAnimationFrame", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["useAnimationFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBlockTopSpacingIsDisabled", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["useBlockTopSpacingIsDisabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffectDebugger", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["useEffectDebugger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDidUpdateEffect", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["useDidUpdateEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useInnerBlocks", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["useInnerBlocks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useInnerBlocksCount", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["useInnerBlocksCount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useInnerBlocksLock", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["useInnerBlocksLock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMemoryState", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["useMemoryState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMeta", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["useMeta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOnScroll", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["useOnScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useResizeObserver", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["useResizeObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSupports", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["useSupports"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSettings", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["useSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScrollContainer", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["useScrollContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScrollContainerBox", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["useScrollContainerBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSelectParent", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["useSelectParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTraceUpdate", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["useTraceUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useVisibility", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["useVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCustomDefaults", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["useCustomDefaults"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./packages/block-editor/build-module/utils/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAttributesToInnerBlocks", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["setAttributesToInnerBlocks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEditorScrollContainer", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["getEditorScrollContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSupports", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["getSupports"]; });







/***/ }),

/***/ "./packages/block-editor/build-module/utils/index.js":
/*!***********************************************************!*\
  !*** ./packages/block-editor/build-module/utils/index.js ***!
  \***********************************************************/
/*! exports provided: setAttributesToInnerBlocks, getEditorScrollContainer, getSupports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttributesToInnerBlocks", function() { return setAttributesToInnerBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditorScrollContainer", function() { return getEditorScrollContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupports", function() { return getSupports; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

var setAttributesToInnerBlocks = function setAttributesToInnerBlocks(clientId, attributes) {
  var _select = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["select"])('core/block-editor'),
      getBlock = _select.getBlock;

  var _dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["dispatch"])('core/block-editor'),
      updateBlockAttributes = _dispatch.updateBlockAttributes;

  var _getBlock = getBlock(clientId),
      innerBlocks = _getBlock.innerBlocks;

  innerBlocks.forEach(function (block) {
    updateBlockAttributes(block.clientId, attributes);
  });
};
var getEditorScrollContainer = function getEditorScrollContainer() {
  return document.querySelector('.edit-post-layout__content') || document.querySelector('.edit-post-editor-regions__content') || document.querySelector('.block-editor-editor-skeleton__content') || document.querySelector('.interface-interface-skeleton__content');
};
var getSupports = function getSupports(blockType) {
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["select"])('core/blocks').getBlockType(blockType).supports;
};


/***/ }),

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*******************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*******************************************************************************************/
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

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*****************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!********************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!************************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*******************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*****************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*****************************************************************************************/
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

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!**************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
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
  return Constructor;
}

/***/ }),

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*****************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*****************************************************************************************/
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

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!**********************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \**********************************************************************************/
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

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*****************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!***********************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/setPrototypeOf */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

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
  if (superClass) Object(_babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!******************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!***********************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

/***/ }),

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!******************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!********************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!**************************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*******************************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!****************************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*****************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!****************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!********************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!*********************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*****************************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./packages/block-editor/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./packages/block-editor/node_modules/@react-spring/animated/dist/react-spring-animated.esm.js":
/*!*****************************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@react-spring/animated/dist/react-spring-animated.esm.js ***!
  \*****************************************************************************************************/
/*! exports provided: Animated, AnimatedArray, AnimatedObject, AnimatedString, AnimatedValue, createHost, getAnimated, getAnimatedType, getPayload, isAnimated, setAnimated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animated", function() { return Animated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedArray", function() { return AnimatedArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedObject", function() { return AnimatedObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedString", function() { return AnimatedString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedValue", function() { return AnimatedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHost", function() { return createHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnimated", function() { return getAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnimatedType", function() { return getAnimatedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPayload", function() { return getPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnimated", function() { return isAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAnimated", function() { return setAnimated; });
/* harmony import */ var _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/shared */ "./packages/block-editor/node_modules/@react-spring/shared/dist/react-spring-shared.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const $node = Symbol.for('Animated:node');
const isAnimated = value => !!value && value[$node] === value;
const getAnimated = owner => owner && owner[$node];
const setAnimated = (owner, node) => Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["defineHidden"])(owner, $node, node);
const getPayload = owner => owner && owner[$node] && owner[$node].getPayload();
class Animated {
  constructor() {
    this.payload = void 0;
    setAnimated(this, this);
  }

  getPayload() {
    return this.payload || [];
  }

}

class AnimatedValue extends Animated {
  constructor(_value) {
    super();
    this.done = true;
    this.elapsedTime = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.v0 = void 0;
    this.durationProgress = 0;
    this._value = _value;

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].num(this._value)) {
      this.lastPosition = this._value;
    }
  }

  static create(value) {
    return new AnimatedValue(value);
  }

  getPayload() {
    return [this];
  }

  getValue() {
    return this._value;
  }

  setValue(value, step) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].num(value)) {
      this.lastPosition = value;

      if (step) {
        value = Math.round(value / step) * step;

        if (this.done) {
          this.lastPosition = value;
        }
      }
    }

    if (this._value === value) {
      return false;
    }

    this._value = value;
    return true;
  }

  reset() {
    const {
      done
    } = this;
    this.done = false;

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].num(this._value)) {
      this.elapsedTime = 0;
      this.durationProgress = 0;
      this.lastPosition = this._value;
      if (done) this.lastVelocity = null;
      this.v0 = null;
    }
  }

}

class AnimatedString extends AnimatedValue {
  constructor(value) {
    super(0);
    this._string = null;
    this._toString = void 0;
    this._toString = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["createInterpolator"])({
      output: [value, value]
    });
  }

  static create(value) {
    return new AnimatedString(value);
  }

  getValue() {
    let value = this._string;
    return value == null ? this._string = this._toString(this._value) : value;
  }

  setValue(value) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].str(value)) {
      if (value == this._string) {
        return false;
      }

      this._string = value;
      this._value = 1;
    } else if (super.setValue(value)) {
      this._string = null;
    } else {
      return false;
    }

    return true;
  }

  reset(goal) {
    if (goal) {
      this._toString = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["createInterpolator"])({
        output: [this.getValue(), goal]
      });
    }

    this._value = 0;
    super.reset();
  }

}

const TreeContext = {
  dependencies: null
};

class AnimatedObject extends Animated {
  constructor(source) {
    super();
    this.source = source;
    this.setValue(source);
  }

  getValue(animated) {
    const values = {};
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["eachProp"])(this.source, (source, key) => {
      if (isAnimated(source)) {
        values[key] = source.getValue(animated);
      } else if (Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["hasFluidValue"])(source)) {
        values[key] = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["getFluidValue"])(source);
      } else if (!animated) {
        values[key] = source;
      }
    });
    return values;
  }

  setValue(source) {
    this.source = source;
    this.payload = this._makePayload(source);
  }

  reset() {
    if (this.payload) {
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(this.payload, node => node.reset());
    }
  }

  _makePayload(source) {
    if (source) {
      const payload = new Set();
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["eachProp"])(source, this._addToPayload, payload);
      return Array.from(payload);
    }
  }

  _addToPayload(source) {
    if (TreeContext.dependencies && Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["hasFluidValue"])(source)) {
      TreeContext.dependencies.add(source);
    }

    const payload = getPayload(source);

    if (payload) {
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(payload, node => this.add(node));
    }
  }

}

class AnimatedArray extends AnimatedObject {
  constructor(source) {
    super(source);
  }

  static create(source) {
    return new AnimatedArray(source);
  }

  getValue() {
    return this.source.map(node => node.getValue());
  }

  setValue(source) {
    const payload = this.getPayload();

    if (source.length == payload.length) {
      return payload.map((node, i) => node.setValue(source[i])).some(Boolean);
    }

    super.setValue(source.map(makeAnimated));
    return true;
  }

}

function makeAnimated(value) {
  const nodeType = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["isAnimatedString"])(value) ? AnimatedString : AnimatedValue;
  return nodeType.create(value);
}

function getAnimatedType(value) {
  const parentNode = getAnimated(value);
  return parentNode ? parentNode.constructor : _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].arr(value) ? AnimatedArray : Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["isAnimatedString"])(value) ? AnimatedString : AnimatedValue;
}

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

const withAnimated = (Component, host) => {
  const hasInstance = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(Component) || Component.prototype && Component.prototype.isReactComponent;
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((givenProps, givenRef) => {
    const instanceRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    const ref = hasInstance && Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(value => {
      instanceRef.current = updateRef(givenRef, value);
    }, [givenRef]);
    const [props, deps] = getAnimatedState(givenProps, host);
    const forceUpdate = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["useForceUpdate"])();

    const callback = () => {
      const instance = instanceRef.current;

      if (hasInstance && !instance) {
        return;
      }

      const didUpdate = instance ? host.applyAnimatedValues(instance, props.getValue(true)) : false;

      if (didUpdate === false) {
        forceUpdate();
      }
    };

    const observer = new PropsObserver(callback, deps);
    const observerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
      const lastObserver = observerRef.current;
      observerRef.current = observer;
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(deps, dep => Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["addFluidObserver"])(dep, observer));

      if (lastObserver) {
        Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(lastObserver.deps, dep => Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["removeFluidObserver"])(dep, lastObserver));
        _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["raf"].cancel(lastObserver.update);
      }
    });
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(callback, []);
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["useOnce"])(() => () => {
      const observer = observerRef.current;
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(observer.deps, dep => Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["removeFluidObserver"])(dep, observer));
    });
    const usedProps = host.getComponentProps(props.getValue());
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, _extends({}, usedProps, {
      ref: ref
    }));
  });
};

class PropsObserver {
  constructor(update, deps) {
    this.update = update;
    this.deps = deps;
  }

  eventObserved(event) {
    if (event.type == 'change') {
      _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["raf"].write(this.update);
    }
  }

}

function getAnimatedState(props, host) {
  const dependencies = new Set();
  TreeContext.dependencies = dependencies;
  if (props.style) props = _extends({}, props, {
    style: host.createAnimatedStyle(props.style)
  });
  props = new AnimatedObject(props);
  TreeContext.dependencies = null;
  return [props, dependencies];
}

function updateRef(ref, value) {
  if (ref) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(ref)) ref(value);else ref.current = value;
  }

  return value;
}

const cacheKey = Symbol.for('AnimatedComponent');
const createHost = (components, {
  applyAnimatedValues: _applyAnimatedValues = () => false,
  createAnimatedStyle: _createAnimatedStyle = style => new AnimatedObject(style),
  getComponentProps: _getComponentProps = props => props
} = {}) => {
  const hostConfig = {
    applyAnimatedValues: _applyAnimatedValues,
    createAnimatedStyle: _createAnimatedStyle,
    getComponentProps: _getComponentProps
  };

  const animated = Component => {
    const displayName = getDisplayName(Component) || 'Anonymous';

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].str(Component)) {
      Component = animated[Component] || (animated[Component] = withAnimated(Component, hostConfig));
    } else {
      Component = Component[cacheKey] || (Component[cacheKey] = withAnimated(Component, hostConfig));
    }

    Component.displayName = `Animated(${displayName})`;
    return Component;
  };

  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["eachProp"])(components, (Component, key) => {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].arr(components)) {
      key = getDisplayName(Component);
    }

    animated[key] = animated(Component);
  });
  return {
    animated
  };
};

const getDisplayName = arg => _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].str(arg) ? arg : arg && _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].str(arg.displayName) ? arg.displayName : _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(arg) && arg.name || null;




/***/ }),

/***/ "./packages/block-editor/node_modules/@react-spring/core/dist/react-spring-core.esm.js":
/*!*********************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@react-spring/core/dist/react-spring-core.esm.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BailSignal", function() { return BailSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameValue", function() { return FrameValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interpolation", function() { return Interpolation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spring", function() { return Spring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpringContext", function() { return SpringContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpringRef", function() { return SpringRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpringValue", function() { return SpringValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trail", function() { return Trail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return Transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easings", function() { return easings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inferTo", function() { return inferTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to", function() { return to; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChain", function() { return useChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return useSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpringRef", function() { return useSpringRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSprings", function() { return useSprings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTrail", function() { return useTrail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransition", function() { return useTransition; });
/* harmony import */ var _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/shared */ "./packages/block-editor/node_modules/@react-spring/shared/dist/react-spring-shared.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["Globals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInterpolator", function() { return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["createInterpolator"]; });

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_spring_animated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/animated */ "./packages/block-editor/node_modules/@react-spring/animated/dist/react-spring-animated.esm.js");
/* harmony import */ var _react_spring_types_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-spring/types/animated */ "./packages/block-editor/node_modules/@react-spring/types/animated.js");
/* harmony import */ var _react_spring_types_animated__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_spring_types_animated__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _react_spring_types_animated__WEBPACK_IMPORTED_MODULE_3__) if(["default","Globals","createInterpolator","BailSignal","Controller","FrameValue","Interpolation","Spring","SpringContext","SpringRef","SpringValue","Trail","Transition","config","easings","inferTo","interpolate","to","update","useChain","useSpring","useSpringRef","useSprings","useTrail","useTransition"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _react_spring_types_animated__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _react_spring_types_interpolation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-spring/types/interpolation */ "./packages/block-editor/node_modules/@react-spring/types/interpolation.js");
/* harmony import */ var _react_spring_types_interpolation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_spring_types_interpolation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _react_spring_types_interpolation__WEBPACK_IMPORTED_MODULE_4__) if(["default","Globals","createInterpolator","BailSignal","Controller","FrameValue","Interpolation","Spring","SpringContext","SpringRef","SpringValue","Trail","Transition","config","easings","inferTo","interpolate","to","update","useChain","useSpring","useSpringRef","useSprings","useTrail","useTransition"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _react_spring_types_interpolation__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));








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

function callProp(value, ...args) {
  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(value) ? value(...args) : value;
}
const matchProp = (value, key) => value === true || !!(key && value && (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(value) ? value(key) : Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["toArray"])(value).includes(key)));
const resolveProp = (prop, key) => _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].obj(prop) ? key && prop[key] : prop;
const getDefaultProp = (props, key) => props.default === true ? props[key] : props.default ? props.default[key] : undefined;

const noopTransform = value => value;

const getDefaultProps = (props, transform = noopTransform) => {
  let keys = DEFAULT_PROPS;

  if (props.default && props.default !== true) {
    props = props.default;
    keys = Object.keys(props);
  }

  const defaults = {};

  for (const key of keys) {
    const value = transform(props[key], key);

    if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(value)) {
      defaults[key] = value;
    }
  }

  return defaults;
};
const DEFAULT_PROPS = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'];
const RESERVED_PROPS = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  keys: 1,
  callId: 1,
  parentId: 1
};

function getForwardProps(props) {
  const forward = {};
  let count = 0;
  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["eachProp"])(props, (value, prop) => {
    if (!RESERVED_PROPS[prop]) {
      forward[prop] = value;
      count++;
    }
  });

  if (count) {
    return forward;
  }
}

function inferTo(props) {
  const to = getForwardProps(props);

  if (to) {
    const out = {
      to
    };
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["eachProp"])(props, (val, key) => key in to || (out[key] = val));
    return out;
  }

  return _extends({}, props);
}
function computeGoal(value) {
  value = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["getFluidValue"])(value);
  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].arr(value) ? value.map(computeGoal) : Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["isAnimatedString"])(value) ? _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["Globals"].createStringInterpolator({
    range: [0, 1],
    output: [value, value]
  })(1) : value;
}
function hasProps(props) {
  for (const _ in props) return true;

  return false;
}
function isAsyncTo(to) {
  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(to) || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].arr(to) && _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].obj(to[0]);
}
function detachRefs(ctrl, ref) {
  var _ctrl$ref;

  (_ctrl$ref = ctrl.ref) == null ? void 0 : _ctrl$ref.delete(ctrl);
  ref == null ? void 0 : ref.delete(ctrl);
}
function replaceRef(ctrl, ref) {
  if (ref && ctrl.ref !== ref) {
    var _ctrl$ref2;

    (_ctrl$ref2 = ctrl.ref) == null ? void 0 : _ctrl$ref2.delete(ctrl);
    ref.add(ctrl);
    ctrl.ref = ref;
  }
}

function useChain(refs, timeSteps, timeFrame = 1000) {
  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
    if (timeSteps) {
      let prevDelay = 0;
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(refs, (ref, i) => {
        const controllers = ref.current;

        if (controllers.length) {
          let delay = timeFrame * timeSteps[i];
          if (isNaN(delay)) delay = prevDelay;else prevDelay = delay;
          Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(controllers, ctrl => {
            Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(ctrl.queue, props => {
              const memoizedDelayProp = props.delay;

              props.delay = key => delay + callProp(memoizedDelayProp || 0, key);
            });
          });
          ref.start();
        }
      });
    } else {
      let p = Promise.resolve();
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(refs, ref => {
        const controllers = ref.current;

        if (controllers.length) {
          const queues = controllers.map(ctrl => {
            const q = ctrl.queue;
            ctrl.queue = [];
            return q;
          });
          p = p.then(() => {
            Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(controllers, (ctrl, i) => Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(queues[i] || [], update => ctrl.queue.push(update)));
            return Promise.all(ref.start());
          });
        }
      });
    }
  });
}

const config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};
const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;
const c4 = 2 * Math.PI / 3;
const c5 = 2 * Math.PI / 4.5;

const bounceOut = x => {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
};

const easings = {
  linear: x => x,
  easeInQuad: x => x * x,
  easeOutQuad: x => 1 - (1 - x) * (1 - x),
  easeInOutQuad: x => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2,
  easeInCubic: x => x * x * x,
  easeOutCubic: x => 1 - Math.pow(1 - x, 3),
  easeInOutCubic: x => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
  easeInQuart: x => x * x * x * x,
  easeOutQuart: x => 1 - Math.pow(1 - x, 4),
  easeInOutQuart: x => x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2,
  easeInQuint: x => x * x * x * x * x,
  easeOutQuint: x => 1 - Math.pow(1 - x, 5),
  easeInOutQuint: x => x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2,
  easeInSine: x => 1 - Math.cos(x * Math.PI / 2),
  easeOutSine: x => Math.sin(x * Math.PI / 2),
  easeInOutSine: x => -(Math.cos(Math.PI * x) - 1) / 2,
  easeInExpo: x => x === 0 ? 0 : Math.pow(2, 10 * x - 10),
  easeOutExpo: x => x === 1 ? 1 : 1 - Math.pow(2, -10 * x),
  easeInOutExpo: x => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2,
  easeInCirc: x => 1 - Math.sqrt(1 - Math.pow(x, 2)),
  easeOutCirc: x => Math.sqrt(1 - Math.pow(x - 1, 2)),
  easeInOutCirc: x => x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2,
  easeInBack: x => c3 * x * x * x - c1 * x * x,
  easeOutBack: x => 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2),
  easeInOutBack: x => x < 0.5 ? Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2,
  easeInElastic: x => x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4),
  easeOutElastic: x => x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1,
  easeInOutElastic: x => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 : Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5) / 2 + 1,
  easeInBounce: x => 1 - bounceOut(1 - x),
  easeOutBounce: bounceOut,
  easeInOutBounce: x => x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2
};

const defaults = _extends({}, config.default, {
  mass: 1,
  damping: 1,
  easing: easings.linear,
  clamp: false
});

class AnimationConfig {
  constructor() {
    this.tension = void 0;
    this.friction = void 0;
    this.frequency = void 0;
    this.damping = void 0;
    this.mass = void 0;
    this.velocity = 0;
    this.restVelocity = void 0;
    this.precision = void 0;
    this.progress = void 0;
    this.duration = void 0;
    this.easing = void 0;
    this.clamp = void 0;
    this.bounce = void 0;
    this.decay = void 0;
    this.round = void 0;
    Object.assign(this, defaults);
  }

}
function mergeConfig(config, newConfig, defaultConfig) {
  if (defaultConfig) {
    defaultConfig = _extends({}, defaultConfig);
    sanitizeConfig(defaultConfig, newConfig);
    newConfig = _extends({}, defaultConfig, newConfig);
  }

  sanitizeConfig(config, newConfig);
  Object.assign(config, newConfig);

  for (const key in defaults) {
    if (config[key] == null) {
      config[key] = defaults[key];
    }
  }

  let {
    mass,
    frequency,
    damping
  } = config;

  if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(frequency)) {
    if (frequency < 0.01) frequency = 0.01;
    if (damping < 0) damping = 0;
    config.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
    config.friction = 4 * Math.PI * damping * mass / frequency;
  }

  return config;
}

function sanitizeConfig(config, props) {
  if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(props.decay)) {
    config.duration = undefined;
  } else {
    const isTensionConfig = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(props.tension) || !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(props.friction);

    if (isTensionConfig || !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(props.frequency) || !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(props.damping) || !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(props.mass)) {
      config.duration = undefined;
      config.decay = undefined;
    }

    if (isTensionConfig) {
      config.frequency = undefined;
    }
  }
}

const emptyArray = [];
class Animation {
  constructor() {
    this.changed = false;
    this.values = emptyArray;
    this.toValues = null;
    this.fromValues = emptyArray;
    this.to = void 0;
    this.from = void 0;
    this.config = new AnimationConfig();
    this.immediate = false;
  }

}

function scheduleProps(callId, {
  key,
  props,
  defaultProps,
  state,
  actions
}) {
  return new Promise((resolve, reject) => {
    var _props$cancel;

    let delay;
    let timeout;
    let cancel = matchProp((_props$cancel = props.cancel) != null ? _props$cancel : defaultProps == null ? void 0 : defaultProps.cancel, key);

    if (cancel) {
      onStart();
    } else {
      if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(props.pause)) {
        state.paused = matchProp(props.pause, key);
      }

      let pause = defaultProps == null ? void 0 : defaultProps.pause;

      if (pause !== true) {
        pause = state.paused || matchProp(pause, key);
      }

      delay = callProp(props.delay || 0, key);

      if (pause) {
        state.resumeQueue.add(onResume);
        actions.pause();
      } else {
        actions.resume();
        onResume();
      }
    }

    function onPause() {
      state.resumeQueue.add(onResume);
      state.timeouts.delete(timeout);
      timeout.cancel();
      delay = timeout.time - _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["raf"].now();
    }

    function onResume() {
      if (delay > 0 && !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["Globals"].skipAnimation) {
        state.delayed = true;
        timeout = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["raf"].setTimeout(onStart, delay);
        state.pauseQueue.add(onPause);
        state.timeouts.add(timeout);
      } else {
        onStart();
      }
    }

    function onStart() {
      if (state.delayed) {
        state.delayed = false;
      }

      state.pauseQueue.delete(onPause);
      state.timeouts.delete(timeout);

      if (callId <= (state.cancelId || 0)) {
        cancel = true;
      }

      try {
        actions.start(_extends({}, props, {
          callId,
          cancel
        }), resolve);
      } catch (err) {
        reject(err);
      }
    }
  });
}

const getCombinedResult = (target, results) => results.length == 1 ? results[0] : results.some(result => result.cancelled) ? getCancelledResult(target.get()) : results.every(result => result.noop) ? getNoopResult(target.get()) : getFinishedResult(target.get(), results.every(result => result.finished));
const getNoopResult = value => ({
  value,
  noop: true,
  finished: true,
  cancelled: false
});
const getFinishedResult = (value, finished, cancelled = false) => ({
  value,
  finished,
  cancelled
});
const getCancelledResult = value => ({
  value,
  cancelled: true,
  finished: false
});

function runAsync(to, props, state, target) {
  const {
    callId,
    parentId,
    onRest
  } = props;
  const {
    asyncTo: prevTo,
    promise: prevPromise
  } = state;

  if (!parentId && to === prevTo && !props.reset) {
    return prevPromise;
  }

  return state.promise = (async () => {
    state.asyncId = callId;
    state.asyncTo = to;
    const defaultProps = getDefaultProps(props, (value, key) => key === 'onRest' ? undefined : value);
    let preventBail;
    let bail;
    const bailPromise = new Promise((resolve, reject) => (preventBail = resolve, bail = reject));

    const bailIfEnded = bailSignal => {
      const bailResult = callId <= (state.cancelId || 0) && getCancelledResult(target) || callId !== state.asyncId && getFinishedResult(target, false);

      if (bailResult) {
        bailSignal.result = bailResult;
        bail(bailSignal);
        throw bailSignal;
      }
    };

    const animate = (arg1, arg2) => {
      const bailSignal = new BailSignal();
      const skipAnimationSignal = new SkipAniamtionSignal();
      return (async () => {
        if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["Globals"].skipAnimation) {
          stopAsync(state);
          skipAnimationSignal.result = getFinishedResult(target, false);
          bail(skipAnimationSignal);
          throw skipAnimationSignal;
        }

        bailIfEnded(bailSignal);
        const props = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].obj(arg1) ? _extends({}, arg1) : _extends({}, arg2, {
          to: arg1
        });
        props.parentId = callId;
        Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["eachProp"])(defaultProps, (value, key) => {
          if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(props[key])) {
            props[key] = value;
          }
        });
        const result = await target.start(props);
        bailIfEnded(bailSignal);

        if (state.paused) {
          await new Promise(resume => {
            state.resumeQueue.add(resume);
          });
        }

        return result;
      })();
    };

    let result;

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["Globals"].skipAnimation) {
      stopAsync(state);
      return getFinishedResult(target, false);
    }

    try {
      let animating;

      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].arr(to)) {
        animating = (async queue => {
          for (const props of queue) {
            await animate(props);
          }
        })(to);
      } else {
          animating = Promise.resolve(to(animate, target.stop.bind(target)));
        }

      await Promise.all([animating.then(preventBail), bailPromise]);
      result = getFinishedResult(target.get(), true, false);
    } catch (err) {
      if (err instanceof BailSignal) {
        result = err.result;
      } else if (err instanceof SkipAniamtionSignal) {
        result = err.result;
      } else {
        throw err;
      }
    } finally {
      if (callId == state.asyncId) {
        state.asyncId = parentId;
        state.asyncTo = parentId ? prevTo : undefined;
        state.promise = parentId ? prevPromise : undefined;
      }
    }

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(onRest)) {
      _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["raf"].batchedUpdates(() => {
        onRest(result, target, target.item);
      });
    }

    return result;
  })();
}
function stopAsync(state, cancelId) {
  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["flush"])(state.timeouts, t => t.cancel());
  state.pauseQueue.clear();
  state.resumeQueue.clear();
  state.asyncId = state.asyncTo = state.promise = undefined;
  if (cancelId) state.cancelId = cancelId;
}
class BailSignal extends Error {
  constructor() {
    super('An async animation has been interrupted. You see this error because you ' + 'forgot to use `await` or `.catch(...)` on its returned promise.');
    this.result = void 0;
  }

}
class SkipAniamtionSignal extends Error {
  constructor() {
    super('SkipAnimationSignal');
    this.result = void 0;
  }

}

const isFrameValue = value => value instanceof FrameValue;
let nextId$1 = 1;
class FrameValue extends _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["FluidValue"] {
  constructor(...args) {
    super(...args);
    this.id = nextId$1++;
    this.key = void 0;
    this._priority = 0;
  }

  get priority() {
    return this._priority;
  }

  set priority(priority) {
    if (this._priority != priority) {
      this._priority = priority;

      this._onPriorityChange(priority);
    }
  }

  get() {
    const node = Object(_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__["getAnimated"])(this);
    return node && node.getValue();
  }

  to(...args) {
    return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["Globals"].to(this, args);
  }

  interpolate(...args) {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["deprecateInterpolate"])();
    return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["Globals"].to(this, args);
  }

  toJSON() {
    return this.get();
  }

  observerAdded(count) {
    if (count == 1) this._attach();
  }

  observerRemoved(count) {
    if (count == 0) this._detach();
  }

  _attach() {}

  _detach() {}

  _onChange(value, idle = false) {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["callFluidObservers"])(this, {
      type: 'change',
      parent: this,
      value,
      idle
    });
  }

  _onPriorityChange(priority) {
    if (!this.idle) {
      _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["frameLoop"].sort(this);
    }

    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["callFluidObservers"])(this, {
      type: 'priority',
      parent: this,
      priority
    });
  }

}

const $P = Symbol.for('SpringPhase');
const HAS_ANIMATED = 1;
const IS_ANIMATING = 2;
const IS_PAUSED = 4;
const hasAnimated = target => (target[$P] & HAS_ANIMATED) > 0;
const isAnimating = target => (target[$P] & IS_ANIMATING) > 0;
const isPaused = target => (target[$P] & IS_PAUSED) > 0;
const setActiveBit = (target, active) => active ? target[$P] |= IS_ANIMATING | HAS_ANIMATED : target[$P] &= ~IS_ANIMATING;
const setPausedBit = (target, paused) => paused ? target[$P] |= IS_PAUSED : target[$P] &= ~IS_PAUSED;

class SpringValue extends FrameValue {
  constructor(arg1, arg2) {
    super();
    this.key = void 0;
    this.animation = new Animation();
    this.queue = void 0;
    this.defaultProps = {};
    this._state = {
      paused: false,
      delayed: false,
      pauseQueue: new Set(),
      resumeQueue: new Set(),
      timeouts: new Set()
    };
    this._pendingCalls = new Set();
    this._lastCallId = 0;
    this._lastToId = 0;
    this._memoizedDuration = 0;

    if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(arg1) || !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(arg2)) {
      const props = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].obj(arg1) ? _extends({}, arg1) : _extends({}, arg2, {
        from: arg1
      });

      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(props.default)) {
        props.default = true;
      }

      this.start(props);
    }
  }

  get idle() {
    return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
  }

  get goal() {
    return Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["getFluidValue"])(this.animation.to);
  }

  get velocity() {
    const node = Object(_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__["getAnimated"])(this);
    return node instanceof _react_spring_animated__WEBPACK_IMPORTED_MODULE_2__["AnimatedValue"] ? node.lastVelocity || 0 : node.getPayload().map(node => node.lastVelocity || 0);
  }

  get hasAnimated() {
    return hasAnimated(this);
  }

  get isAnimating() {
    return isAnimating(this);
  }

  get isPaused() {
    return isPaused(this);
  }

  get isDelayed() {
    return this._state.delayed;
  }

  advance(dt) {
    let idle = true;
    let changed = false;
    const anim = this.animation;
    let {
      config,
      toValues
    } = anim;
    const payload = Object(_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__["getPayload"])(anim.to);

    if (!payload && Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["hasFluidValue"])(anim.to)) {
      toValues = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["toArray"])(Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["getFluidValue"])(anim.to));
    }

    anim.values.forEach((node, i) => {
      if (node.done) return;
      const to = node.constructor == _react_spring_animated__WEBPACK_IMPORTED_MODULE_2__["AnimatedString"] ? 1 : payload ? payload[i].lastPosition : toValues[i];
      let finished = anim.immediate;
      let position = to;

      if (!finished) {
        position = node.lastPosition;

        if (config.tension <= 0) {
          node.done = true;
          return;
        }

        let elapsed = node.elapsedTime += dt;
        const from = anim.fromValues[i];
        const v0 = node.v0 != null ? node.v0 : node.v0 = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].arr(config.velocity) ? config.velocity[i] : config.velocity;
        let velocity;

        if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(config.duration)) {
          let p = 1;

          if (config.duration > 0) {
            if (this._memoizedDuration !== config.duration) {
              this._memoizedDuration = config.duration;

              if (node.durationProgress > 0) {
                node.elapsedTime = config.duration * node.durationProgress;
                elapsed = node.elapsedTime += dt;
              }
            }

            p = (config.progress || 0) + elapsed / this._memoizedDuration;
            p = p > 1 ? 1 : p < 0 ? 0 : p;
            node.durationProgress = p;
          }

          position = from + config.easing(p) * (to - from);
          velocity = (position - node.lastPosition) / dt;
          finished = p == 1;
        } else if (config.decay) {
            const decay = config.decay === true ? 0.998 : config.decay;
            const e = Math.exp(-(1 - decay) * elapsed);
            position = from + v0 / (1 - decay) * (1 - e);
            finished = Math.abs(node.lastPosition - position) < 0.1;
            velocity = v0 * e;
          } else {
              velocity = node.lastVelocity == null ? v0 : node.lastVelocity;
              const precision = config.precision || (from == to ? 0.005 : Math.min(1, Math.abs(to - from) * 0.001));
              const restVelocity = config.restVelocity || precision / 10;
              const bounceFactor = config.clamp ? 0 : config.bounce;
              const canBounce = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(bounceFactor);
              const isGrowing = from == to ? node.v0 > 0 : from < to;
              let isMoving;
              let isBouncing = false;
              const step = 1;
              const numSteps = Math.ceil(dt / step);

              for (let n = 0; n < numSteps; ++n) {
                isMoving = Math.abs(velocity) > restVelocity;

                if (!isMoving) {
                  finished = Math.abs(to - position) <= precision;

                  if (finished) {
                    break;
                  }
                }

                if (canBounce) {
                  isBouncing = position == to || position > to == isGrowing;

                  if (isBouncing) {
                    velocity = -velocity * bounceFactor;
                    position = to;
                  }
                }

                const springForce = -config.tension * 0.000001 * (position - to);
                const dampingForce = -config.friction * 0.001 * velocity;
                const acceleration = (springForce + dampingForce) / config.mass;
                velocity = velocity + acceleration * step;
                position = position + velocity * step;
              }
            }

        node.lastVelocity = velocity;

        if (Number.isNaN(position)) {
          console.warn(`Got NaN while animating:`, this);
          finished = true;
        }
      }

      if (payload && !payload[i].done) {
        finished = false;
      }

      if (finished) {
        node.done = true;
      } else {
        idle = false;
      }

      if (node.setValue(position, config.round)) {
        changed = true;
      }
    });
    const node = Object(_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__["getAnimated"])(this);
    const currVal = node.getValue();

    if (idle) {
      const finalVal = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["getFluidValue"])(anim.to);

      if ((currVal !== finalVal || changed) && !config.decay) {
        node.setValue(finalVal);

        this._onChange(finalVal);
      } else if (changed && config.decay) {
        this._onChange(currVal);
      }

      this._stop();
    } else if (changed) {
      this._onChange(currVal);
    }
  }

  set(value) {
    _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["raf"].batchedUpdates(() => {
      this._stop();

      this._focus(value);

      this._set(value);
    });
    return this;
  }

  pause() {
    this._update({
      pause: true
    });
  }

  resume() {
    this._update({
      pause: false
    });
  }

  finish() {
    if (isAnimating(this)) {
      const {
        to,
        config
      } = this.animation;
      _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["raf"].batchedUpdates(() => {
        this._onStart();

        if (!config.decay) {
          this._set(to, false);
        }

        this._stop();
      });
    }

    return this;
  }

  update(props) {
    const queue = this.queue || (this.queue = []);
    queue.push(props);
    return this;
  }

  start(to, arg2) {
    let queue;

    if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(to)) {
      queue = [_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].obj(to) ? to : _extends({}, arg2, {
        to
      })];
    } else {
      queue = this.queue || [];
      this.queue = [];
    }

    return Promise.all(queue.map(props => {
      const up = this._update(props);

      return up;
    })).then(results => getCombinedResult(this, results));
  }

  stop(cancel) {
    const {
      to
    } = this.animation;

    this._focus(this.get());

    stopAsync(this._state, cancel && this._lastCallId);
    _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["raf"].batchedUpdates(() => this._stop(to, cancel));
    return this;
  }

  reset() {
    this._update({
      reset: true
    });
  }

  eventObserved(event) {
    if (event.type == 'change') {
      this._start();
    } else if (event.type == 'priority') {
      this.priority = event.priority + 1;
    }
  }

  _prepareNode(props) {
    const key = this.key || '';
    let {
      to,
      from
    } = props;
    to = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].obj(to) ? to[key] : to;

    if (to == null || isAsyncTo(to)) {
      to = undefined;
    }

    from = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].obj(from) ? from[key] : from;

    if (from == null) {
      from = undefined;
    }

    const range = {
      to,
      from
    };

    if (!hasAnimated(this)) {
      if (props.reverse) [to, from] = [from, to];
      from = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["getFluidValue"])(from);

      if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(from)) {
        this._set(from);
      } else if (!Object(_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__["getAnimated"])(this)) {
          this._set(to);
        }
    }

    return range;
  }

  _update(_ref, isLoop) {
    let props = _extends({}, _ref);

    const {
      key,
      defaultProps
    } = this;
    if (props.default) Object.assign(defaultProps, getDefaultProps(props, (value, prop) => /^on/.test(prop) ? resolveProp(value, key) : value));
    mergeActiveFn(this, props, 'onProps');
    sendEvent(this, 'onProps', props, this);

    const range = this._prepareNode(props);

    if (Object.isFrozen(this)) {
      throw Error('Cannot animate a `SpringValue` object that is frozen. ' + 'Did you forget to pass your component to `animated(...)` before animating its props?');
    }

    const state = this._state;
    return scheduleProps(++this._lastCallId, {
      key,
      props,
      defaultProps,
      state,
      actions: {
        pause: () => {
          if (!isPaused(this)) {
            setPausedBit(this, true);
            Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["flushCalls"])(state.pauseQueue);
            sendEvent(this, 'onPause', getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        resume: () => {
          if (isPaused(this)) {
            setPausedBit(this, false);

            if (isAnimating(this)) {
              this._resume();
            }

            Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["flushCalls"])(state.resumeQueue);
            sendEvent(this, 'onResume', getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        start: this._merge.bind(this, range)
      }
    }).then(result => {
      if (props.loop && result.finished && !(isLoop && result.noop)) {
        const nextProps = createLoopUpdate(props);

        if (nextProps) {
          return this._update(nextProps, true);
        }
      }

      return result;
    });
  }

  _merge(range, props, resolve) {
    if (props.cancel) {
      this.stop(true);
      return resolve(getCancelledResult(this));
    }

    const hasToProp = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(range.to);
    const hasFromProp = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(range.from);

    if (hasToProp || hasFromProp) {
      if (props.callId > this._lastToId) {
        this._lastToId = props.callId;
      } else {
        return resolve(getCancelledResult(this));
      }
    }

    const {
      key,
      defaultProps,
      animation: anim
    } = this;
    const {
      to: prevTo,
      from: prevFrom
    } = anim;
    let {
      to = prevTo,
      from = prevFrom
    } = range;

    if (hasFromProp && !hasToProp && (!props.default || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(to))) {
      to = from;
    }

    if (props.reverse) [to, from] = [from, to];
    const hasFromChanged = !Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(from, prevFrom);

    if (hasFromChanged) {
      anim.from = from;
    }

    from = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["getFluidValue"])(from);
    const hasToChanged = !Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(to, prevTo);

    if (hasToChanged) {
      this._focus(to);
    }

    const hasAsyncTo = isAsyncTo(props.to);
    const {
      config
    } = anim;
    const {
      decay,
      velocity
    } = config;

    if (hasToProp || hasFromProp) {
      config.velocity = 0;
    }

    if (props.config && !hasAsyncTo) {
      mergeConfig(config, callProp(props.config, key), props.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0);
    }

    let node = Object(_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__["getAnimated"])(this);

    if (!node || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(to)) {
      return resolve(getFinishedResult(this, true));
    }

    const reset = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(props.reset) ? hasFromProp && !props.default : !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(from) && matchProp(props.reset, key);
    const value = reset ? from : this.get();
    const goal = computeGoal(to);
    const isAnimatable = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].num(goal) || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].arr(goal) || Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["isAnimatedString"])(goal);
    const immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props.immediate, key));

    if (hasToChanged) {
      const nodeType = Object(_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__["getAnimatedType"])(to);

      if (nodeType !== node.constructor) {
        if (immediate) {
          node = this._set(goal);
        } else throw Error(`Cannot animate between ${node.constructor.name} and ${nodeType.name}, as the "to" prop suggests`);
      }
    }

    const goalType = node.constructor;
    let started = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["hasFluidValue"])(to);
    let finished = false;

    if (!started) {
      const hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;

      if (hasToChanged || hasValueChanged) {
        finished = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(computeGoal(value), goal);
        started = !finished;
      }

      if (!Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(anim.immediate, immediate) && !immediate || !Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(config.decay, decay) || !Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(config.velocity, velocity)) {
        started = true;
      }
    }

    if (finished && isAnimating(this)) {
      if (anim.changed && !reset) {
        started = true;
      } else if (!started) {
          this._stop(prevTo);
        }
    }

    if (!hasAsyncTo) {
      if (started || Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["hasFluidValue"])(prevTo)) {
        anim.values = node.getPayload();
        anim.toValues = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["hasFluidValue"])(to) ? null : goalType == _react_spring_animated__WEBPACK_IMPORTED_MODULE_2__["AnimatedString"] ? [1] : Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["toArray"])(goal);
      }

      if (anim.immediate != immediate) {
        anim.immediate = immediate;

        if (!immediate && !reset) {
          this._set(prevTo);
        }
      }

      if (started) {
        const {
          onRest
        } = anim;
        Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(ACTIVE_EVENTS, type => mergeActiveFn(this, props, type));
        const result = getFinishedResult(this, checkFinished(this, prevTo));
        Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["flushCalls"])(this._pendingCalls, result);

        this._pendingCalls.add(resolve);

        if (anim.changed) _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["raf"].batchedUpdates(() => {
          anim.changed = !reset;
          onRest == null ? void 0 : onRest(result, this);

          if (reset) {
            callProp(defaultProps.onRest, result);
          } else {
              anim.onStart == null ? void 0 : anim.onStart(result, this);
            }
        });
      }
    }

    if (reset) {
      this._set(value);
    }

    if (hasAsyncTo) {
      resolve(runAsync(props.to, props, this._state, this));
    } else if (started) {
        this._start();
      } else if (isAnimating(this) && !hasToChanged) {
          this._pendingCalls.add(resolve);
        } else {
            resolve(getNoopResult(value));
          }
  }

  _focus(value) {
    const anim = this.animation;

    if (value !== anim.to) {
      if (Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["getFluidObservers"])(this)) {
        this._detach();
      }

      anim.to = value;

      if (Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["getFluidObservers"])(this)) {
        this._attach();
      }
    }
  }

  _attach() {
    let priority = 0;
    const {
      to
    } = this.animation;

    if (Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["hasFluidValue"])(to)) {
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["addFluidObserver"])(to, this);

      if (isFrameValue(to)) {
        priority = to.priority + 1;
      }
    }

    this.priority = priority;
  }

  _detach() {
    const {
      to
    } = this.animation;

    if (Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["hasFluidValue"])(to)) {
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["removeFluidObserver"])(to, this);
    }
  }

  _set(arg, idle = true) {
    const value = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["getFluidValue"])(arg);

    if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(value)) {
      const oldNode = Object(_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__["getAnimated"])(this);

      if (!oldNode || !Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(value, oldNode.getValue())) {
        const nodeType = Object(_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__["getAnimatedType"])(value);

        if (!oldNode || oldNode.constructor != nodeType) {
          Object(_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__["setAnimated"])(this, nodeType.create(value));
        } else {
          oldNode.setValue(value);
        }

        if (oldNode) {
          _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["raf"].batchedUpdates(() => {
            this._onChange(value, idle);
          });
        }
      }
    }

    return Object(_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__["getAnimated"])(this);
  }

  _onStart() {
    const anim = this.animation;

    if (!anim.changed) {
      anim.changed = true;
      sendEvent(this, 'onStart', getFinishedResult(this, checkFinished(this, anim.to)), this);
    }
  }

  _onChange(value, idle) {
    if (!idle) {
      this._onStart();

      callProp(this.animation.onChange, value, this);
    }

    callProp(this.defaultProps.onChange, value, this);

    super._onChange(value, idle);
  }

  _start() {
    const anim = this.animation;
    Object(_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__["getAnimated"])(this).reset(Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["getFluidValue"])(anim.to));

    if (!anim.immediate) {
      anim.fromValues = anim.values.map(node => node.lastPosition);
    }

    if (!isAnimating(this)) {
      setActiveBit(this, true);

      if (!isPaused(this)) {
        this._resume();
      }
    }
  }

  _resume() {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["Globals"].skipAnimation) {
      this.finish();
    } else {
      _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["frameLoop"].start(this);
    }
  }

  _stop(goal, cancel) {
    if (isAnimating(this)) {
      setActiveBit(this, false);
      const anim = this.animation;
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(anim.values, node => {
        node.done = true;
      });

      if (anim.toValues) {
        anim.onChange = anim.onPause = anim.onResume = undefined;
      }

      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["callFluidObservers"])(this, {
        type: 'idle',
        parent: this
      });
      const result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal != null ? goal : anim.to));
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["flushCalls"])(this._pendingCalls, result);

      if (anim.changed) {
        anim.changed = false;
        sendEvent(this, 'onRest', result, this);
      }
    }
  }

}

function checkFinished(target, to) {
  const goal = computeGoal(to);
  const value = computeGoal(target.get());
  return Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(value, goal);
}

function createLoopUpdate(props, loop = props.loop, to = props.to) {
  let loopRet = callProp(loop);

  if (loopRet) {
    const overrides = loopRet !== true && inferTo(loopRet);
    const reverse = (overrides || props).reverse;
    const reset = !overrides || overrides.reset;
    return createUpdate(_extends({}, props, {
      loop,
      default: false,
      pause: undefined,
      to: !reverse || isAsyncTo(to) ? to : undefined,
      from: reset ? props.from : undefined,
      reset
    }, overrides));
  }
}
function createUpdate(props) {
  const {
    to,
    from
  } = props = inferTo(props);
  const keys = new Set();
  if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].obj(to)) findDefined(to, keys);
  if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].obj(from)) findDefined(from, keys);
  props.keys = keys.size ? Array.from(keys) : null;
  return props;
}
function declareUpdate(props) {
  const update = createUpdate(props);

  if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(update.default)) {
    update.default = getDefaultProps(update);
  }

  return update;
}

function findDefined(values, keys) {
  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["eachProp"])(values, (value, key) => value != null && keys.add(key));
}

const ACTIVE_EVENTS = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];

function mergeActiveFn(target, props, type) {
  target.animation[type] = props[type] !== getDefaultProp(props, type) ? resolveProp(props[type], target.key) : undefined;
}

function sendEvent(target, type, ...args) {
  var _target$animation$typ, _target$animation, _target$defaultProps$, _target$defaultProps;

  (_target$animation$typ = (_target$animation = target.animation)[type]) == null ? void 0 : _target$animation$typ.call(_target$animation, ...args);
  (_target$defaultProps$ = (_target$defaultProps = target.defaultProps)[type]) == null ? void 0 : _target$defaultProps$.call(_target$defaultProps, ...args);
}

const BATCHED_EVENTS = ['onStart', 'onChange', 'onRest'];
let nextId = 1;
class Controller {
  constructor(props, flush) {
    this.id = nextId++;
    this.springs = {};
    this.queue = [];
    this.ref = void 0;
    this._flush = void 0;
    this._initialProps = void 0;
    this._lastAsyncId = 0;
    this._active = new Set();
    this._changed = new Set();
    this._started = false;
    this._item = void 0;
    this._state = {
      paused: false,
      pauseQueue: new Set(),
      resumeQueue: new Set(),
      timeouts: new Set()
    };
    this._events = {
      onStart: new Map(),
      onChange: new Map(),
      onRest: new Map()
    };
    this._onFrame = this._onFrame.bind(this);

    if (flush) {
      this._flush = flush;
    }

    if (props) {
      this.start(_extends({
        default: true
      }, props));
    }
  }

  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every(spring => {
      return spring.idle && !spring.isDelayed && !spring.isPaused;
    });
  }

  get item() {
    return this._item;
  }

  set item(item) {
    this._item = item;
  }

  get() {
    const values = {};
    this.each((spring, key) => values[key] = spring.get());
    return values;
  }

  set(values) {
    for (const key in values) {
      const value = values[key];

      if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(value)) {
        this.springs[key].set(value);
      }
    }
  }

  update(props) {
    if (props) {
      this.queue.push(createUpdate(props));
    }

    return this;
  }

  start(props) {
    let {
      queue
    } = this;

    if (props) {
      queue = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["toArray"])(props).map(createUpdate);
    } else {
      this.queue = [];
    }

    if (this._flush) {
      return this._flush(this, queue);
    }

    prepareKeys(this, queue);
    return flushUpdateQueue(this, queue);
  }

  stop(arg, keys) {
    if (arg !== !!arg) {
      keys = arg;
    }

    if (keys) {
      const springs = this.springs;
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["toArray"])(keys), key => springs[key].stop(!!arg));
    } else {
      stopAsync(this._state, this._lastAsyncId);
      this.each(spring => spring.stop(!!arg));
    }

    return this;
  }

  pause(keys) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(keys)) {
      this.start({
        pause: true
      });
    } else {
      const springs = this.springs;
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["toArray"])(keys), key => springs[key].pause());
    }

    return this;
  }

  resume(keys) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(keys)) {
      this.start({
        pause: false
      });
    } else {
      const springs = this.springs;
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["toArray"])(keys), key => springs[key].resume());
    }

    return this;
  }

  each(iterator) {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["eachProp"])(this.springs, iterator);
  }

  _onFrame() {
    const {
      onStart,
      onChange,
      onRest
    } = this._events;
    const active = this._active.size > 0;
    const changed = this._changed.size > 0;

    if (active && !this._started || changed && !this._started) {
      this._started = true;
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["flush"])(onStart, ([onStart, result]) => {
        result.value = this.get();
        onStart(result, this, this._item);
      });
    }

    const idle = !active && this._started;
    const values = changed || idle && onRest.size ? this.get() : null;

    if (changed && onChange.size) {
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["flush"])(onChange, ([onChange, result]) => {
        result.value = values;
        onChange(result, this, this._item);
      });
    }

    if (idle) {
      this._started = false;
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["flush"])(onRest, ([onRest, result]) => {
        result.value = values;
        onRest(result, this, this._item);
      });
    }
  }

  eventObserved(event) {
    if (event.type == 'change') {
      this._changed.add(event.parent);

      if (!event.idle) {
        this._active.add(event.parent);
      }
    } else if (event.type == 'idle') {
      this._active.delete(event.parent);
    } else return;

    _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["raf"].onFrame(this._onFrame);
  }

}
function flushUpdateQueue(ctrl, queue) {
  return Promise.all(queue.map(props => flushUpdate(ctrl, props))).then(results => getCombinedResult(ctrl, results));
}
async function flushUpdate(ctrl, props, isLoop) {
  const {
    keys,
    to,
    from,
    loop,
    onRest,
    onResolve
  } = props;
  const defaults = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].obj(props.default) && props.default;

  if (loop) {
    props.loop = false;
  }

  if (to === false) props.to = null;
  if (from === false) props.from = null;
  const asyncTo = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].arr(to) || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(to) ? to : undefined;

  if (asyncTo) {
    props.to = undefined;
    props.onRest = undefined;

    if (defaults) {
      defaults.onRest = undefined;
    }
  } else {
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(BATCHED_EVENTS, key => {
        const handler = props[key];

        if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(handler)) {
          const queue = ctrl['_events'][key];

          props[key] = ({
            finished,
            cancelled
          }) => {
            const result = queue.get(handler);

            if (result) {
              if (!finished) result.finished = false;
              if (cancelled) result.cancelled = true;
            } else {
              queue.set(handler, {
                value: null,
                finished: finished || false,
                cancelled: cancelled || false
              });
            }
          };

          if (defaults) {
            defaults[key] = props[key];
          }
        }
      });
    }

  const state = ctrl['_state'];

  if (props.pause === !state.paused) {
    state.paused = props.pause;
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["flushCalls"])(props.pause ? state.pauseQueue : state.resumeQueue);
  } else if (state.paused) {
      props.pause = true;
    }

  const promises = (keys || Object.keys(ctrl.springs)).map(key => ctrl.springs[key].start(props));
  const cancel = props.cancel === true || getDefaultProp(props, 'cancel') === true;

  if (asyncTo || cancel && state.asyncId) {
    promises.push(scheduleProps(++ctrl['_lastAsyncId'], {
      props,
      state,
      actions: {
        pause: _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["noop"],
        resume: _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["noop"],

        start(props, resolve) {
          if (cancel) {
            stopAsync(state, ctrl['_lastAsyncId']);
            resolve(getCancelledResult(ctrl));
          } else {
            props.onRest = onRest;
            resolve(runAsync(asyncTo, props, state, ctrl));
          }
        }

      }
    }));
  }

  if (state.paused) {
    await new Promise(resume => {
      state.resumeQueue.add(resume);
    });
  }

  const result = getCombinedResult(ctrl, await Promise.all(promises));

  if (loop && result.finished && !(isLoop && result.noop)) {
    const nextProps = createLoopUpdate(props, loop, to);

    if (nextProps) {
      prepareKeys(ctrl, [nextProps]);
      return flushUpdate(ctrl, nextProps, true);
    }
  }

  if (onResolve) {
    _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["raf"].batchedUpdates(() => onResolve(result, ctrl, ctrl.item));
  }

  return result;
}
function getSprings(ctrl, props) {
  const springs = _extends({}, ctrl.springs);

  if (props) {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["toArray"])(props), props => {
      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(props.keys)) {
        props = createUpdate(props);
      }

      if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].obj(props.to)) {
        props = _extends({}, props, {
          to: undefined
        });
      }

      prepareSprings(springs, props, key => {
        return createSpring(key);
      });
    });
  }

  setSprings(ctrl, springs);
  return springs;
}
function setSprings(ctrl, springs) {
  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["eachProp"])(springs, (spring, key) => {
    if (!ctrl.springs[key]) {
      ctrl.springs[key] = spring;
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["addFluidObserver"])(spring, ctrl);
    }
  });
}

function createSpring(key, observer) {
  const spring = new SpringValue();
  spring.key = key;

  if (observer) {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["addFluidObserver"])(spring, observer);
  }

  return spring;
}

function prepareSprings(springs, props, create) {
  if (props.keys) {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(props.keys, key => {
      const spring = springs[key] || (springs[key] = create(key));
      spring['_prepareNode'](props);
    });
  }
}

function prepareKeys(ctrl, queue) {
  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(queue, props => {
    prepareSprings(ctrl.springs, props, key => {
      return createSpring(key, ctrl);
    });
  });
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const _excluded$3 = ["children"];
const SpringContext = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  const inherited = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ctx);
  const pause = props.pause || !!inherited.pause,
        immediate = props.immediate || !!inherited.immediate;
  props = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["useMemoOne"])(() => ({
    pause,
    immediate
  }), [pause, immediate]);
  const {
    Provider
  } = ctx;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Provider, {
    value: props
  }, children);
};
const ctx = makeContext(SpringContext, {});
SpringContext.Provider = ctx.Provider;
SpringContext.Consumer = ctx.Consumer;

function makeContext(target, init) {
  Object.assign(target, react__WEBPACK_IMPORTED_MODULE_1__["createContext"](init));
  target.Provider._context = target;
  target.Consumer._context = target;
  return target;
}

const SpringRef = () => {
  const current = [];

  const SpringRef = function SpringRef(props) {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["deprecateDirectCall"])();
    const results = [];
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(current, (ctrl, i) => {
      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(props)) {
        results.push(ctrl.start());
      } else {
        const update = _getProps(props, ctrl, i);

        if (update) {
          results.push(ctrl.start(update));
        }
      }
    });
    return results;
  };

  SpringRef.current = current;

  SpringRef.add = function (ctrl) {
    if (!current.includes(ctrl)) {
      current.push(ctrl);
    }
  };

  SpringRef.delete = function (ctrl) {
    const i = current.indexOf(ctrl);
    if (~i) current.splice(i, 1);
  };

  SpringRef.pause = function () {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(current, ctrl => ctrl.pause(...arguments));
    return this;
  };

  SpringRef.resume = function () {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(current, ctrl => ctrl.resume(...arguments));
    return this;
  };

  SpringRef.set = function (values) {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(current, ctrl => ctrl.set(values));
  };

  SpringRef.start = function (props) {
    const results = [];
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(current, (ctrl, i) => {
      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(props)) {
        results.push(ctrl.start());
      } else {
        const update = this._getProps(props, ctrl, i);

        if (update) {
          results.push(ctrl.start(update));
        }
      }
    });
    return results;
  };

  SpringRef.stop = function () {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(current, ctrl => ctrl.stop(...arguments));
    return this;
  };

  SpringRef.update = function (props) {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(current, (ctrl, i) => ctrl.update(this._getProps(props, ctrl, i)));
    return this;
  };

  const _getProps = function _getProps(arg, ctrl, index) {
    return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(arg) ? arg(index, ctrl) : arg;
  };

  SpringRef._getProps = _getProps;
  return SpringRef;
};

function useSprings(length, props, deps) {
  const propsFn = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(props) && props;
  if (propsFn && !deps) deps = [];
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
  const layoutId = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
  const forceUpdate = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["useForceUpdate"])();
  const state = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => ({
    ctrls: [],
    queue: [],

    flush(ctrl, updates) {
      const springs = getSprings(ctrl, updates);
      const canFlushSync = layoutId.current > 0 && !state.queue.length && !Object.keys(springs).some(key => !ctrl.springs[key]);
      return canFlushSync ? flushUpdateQueue(ctrl, updates) : new Promise(resolve => {
        setSprings(ctrl, springs);
        state.queue.push(() => {
          resolve(flushUpdateQueue(ctrl, updates));
        });
        forceUpdate();
      });
    }

  }), []);
  const ctrls = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([...state.ctrls]);
  const updates = [];
  const prevLength = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["usePrev"])(length) || 0;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(ctrls.current.slice(length, prevLength), ctrl => {
      detachRefs(ctrl, ref);
      ctrl.stop(true);
    });
    ctrls.current.length = length;
    declareUpdates(prevLength, length);
  }, [length]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    declareUpdates(0, Math.min(prevLength, length));
  }, deps);

  function declareUpdates(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
      const ctrl = ctrls.current[i] || (ctrls.current[i] = new Controller(null, state.flush));
      const update = propsFn ? propsFn(i, ctrl) : props[i];

      if (update) {
        updates[i] = declareUpdate(update);
      }
    }
  }

  const springs = ctrls.current.map((ctrl, i) => getSprings(ctrl, updates[i]));
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(SpringContext);
  const prevContext = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["usePrev"])(context);
  const hasContext = context !== prevContext && hasProps(context);
  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
    layoutId.current++;
    state.ctrls = ctrls.current;
    const {
      queue
    } = state;

    if (queue.length) {
      state.queue = [];
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(queue, cb => cb());
    }

    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(ctrls.current, (ctrl, i) => {
      ref == null ? void 0 : ref.add(ctrl);

      if (hasContext) {
        ctrl.start({
          default: context
        });
      }

      const update = updates[i];

      if (update) {
        replaceRef(ctrl, update.ref);

        if (ctrl.ref) {
          ctrl.queue.push(update);
        } else {
          ctrl.start(update);
        }
      }
    });
  });
  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["useOnce"])(() => () => {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(state.ctrls, ctrl => ctrl.stop(true));
  });
  const values = springs.map(x => _extends({}, x));
  return ref ? [values, ref] : values;
}

function useSpring(props, deps) {
  const isFn = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(props);
  const [[values], ref] = useSprings(1, isFn ? props : [props], isFn ? deps || [] : deps);
  return isFn || arguments.length == 2 ? [values, ref] : values;
}

const initSpringRef = () => SpringRef();

const useSpringRef = () => Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initSpringRef)[0];

function useTrail(length, propsArg, deps) {
  var _passedRef;

  const propsFn = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(propsArg) && propsArg;
  if (propsFn && !deps) deps = [];
  let reverse = true;
  let passedRef = undefined;
  const result = useSprings(length, (i, ctrl) => {
    const props = propsFn ? propsFn(i, ctrl) : propsArg;
    passedRef = props.ref;
    reverse = reverse && props.reverse;
    return props;
  }, deps || [{}]);
  const ref = (_passedRef = passedRef) != null ? _passedRef : result[1];
  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(ref.current, (ctrl, i) => {
      const parent = ref.current[i + (reverse ? 1 : -1)];

      if (parent) {
        ctrl.start({
          to: parent.springs
        });
      } else {
        ctrl.start();
      }
    });
  }, deps);

  if (propsFn || arguments.length == 3) {
    ref['_getProps'] = (propsArg, ctrl, i) => {
      const props = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(propsArg) ? propsArg(i, ctrl) : propsArg;

      if (props) {
        const parent = ref.current[i + (props.reverse ? 1 : -1)];
        if (parent) props.to = parent.springs;
        return props;
      }
    };

    return result;
  }

  ref['start'] = propsArg => {
    const results = [];
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(ref.current, (ctrl, i) => {
      const props = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(propsArg) ? propsArg(i, ctrl) : propsArg;
      const parent = ref.current[i + (reverse ? 1 : -1)];

      if (parent) {
        results.push(ctrl.start(_extends({}, props, {
          to: parent.springs
        })));
      } else {
        results.push(ctrl.start(_extends({}, props)));
      }
    });
    return results;
  };

  return result[0];
}

let TransitionPhase;

(function (TransitionPhase) {
  TransitionPhase["MOUNT"] = "mount";
  TransitionPhase["ENTER"] = "enter";
  TransitionPhase["UPDATE"] = "update";
  TransitionPhase["LEAVE"] = "leave";
})(TransitionPhase || (TransitionPhase = {}));

function useTransition(data, props, deps) {
  const propsFn = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(props) && props;
  const {
    reset,
    sort,
    trail = 0,
    expires = true,
    exitBeforeEnter = false,
    onDestroyed,
    ref: propsRef,
    config: propsConfig
  } = propsFn ? propsFn() : props;
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
  const items = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["toArray"])(data);
  const transitions = [];
  const usedTransitions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const prevTransitions = reset ? null : usedTransitions.current;
  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
    usedTransitions.current = transitions;
  });
  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["useOnce"])(() => () => {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(usedTransitions.current, t => {
      if (t.expired) {
        clearTimeout(t.expirationId);
      }

      detachRefs(t.ctrl, ref);
      t.ctrl.stop(true);
    });
  });
  const keys = getKeys(items, propsFn ? propsFn() : props, prevTransitions);
  const expired = reset && usedTransitions.current || [];
  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(expired, ({
    ctrl,
    item,
    key
  }) => {
    detachRefs(ctrl, ref);
    callProp(onDestroyed, item, key);
  }));
  const reused = [];
  if (prevTransitions) Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(prevTransitions, (t, i) => {
    if (t.expired) {
      clearTimeout(t.expirationId);
      expired.push(t);
    } else {
      i = reused[i] = keys.indexOf(t.key);
      if (~i) transitions[i] = t;
    }
  });
  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(items, (item, i) => {
    if (!transitions[i]) {
      transitions[i] = {
        key: keys[i],
        item,
        phase: TransitionPhase.MOUNT,
        ctrl: new Controller()
      };
      transitions[i].ctrl.item = item;
    }
  });

  if (reused.length) {
    let i = -1;
    const {
      leave
    } = propsFn ? propsFn() : props;
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(reused, (keyIndex, prevIndex) => {
      const t = prevTransitions[prevIndex];

      if (~keyIndex) {
        i = transitions.indexOf(t);
        transitions[i] = _extends({}, t, {
          item: items[keyIndex]
        });
      } else if (leave) {
        transitions.splice(++i, 0, t);
      }
    });
  }

  if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(sort)) {
    transitions.sort((a, b) => sort(a.item, b.item));
  }

  let delay = -trail;
  const forceUpdate = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["useForceUpdate"])();
  const defaultProps = getDefaultProps(props);
  const changes = new Map();
  const exitingTransitions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(new Map());
  const forceChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(transitions, (t, i) => {
    const key = t.key;
    const prevPhase = t.phase;
    const p = propsFn ? propsFn() : props;
    let to;
    let phase;
    let propsDelay = callProp(p.delay || 0, key);

    if (prevPhase == TransitionPhase.MOUNT) {
      to = p.enter;
      phase = TransitionPhase.ENTER;
    } else {
      const isLeave = keys.indexOf(key) < 0;

      if (prevPhase != TransitionPhase.LEAVE) {
        if (isLeave) {
          to = p.leave;
          phase = TransitionPhase.LEAVE;
        } else if (to = p.update) {
          phase = TransitionPhase.UPDATE;
        } else return;
      } else if (!isLeave) {
        to = p.enter;
        phase = TransitionPhase.ENTER;
      } else return;
    }

    to = callProp(to, t.item, i);
    to = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].obj(to) ? inferTo(to) : {
      to
    };

    if (!to.config) {
      const config = propsConfig || defaultProps.config;
      to.config = callProp(config, t.item, i, phase);
    }

    delay += trail;

    const payload = _extends({}, defaultProps, {
      delay: propsDelay + delay,
      ref: propsRef,
      immediate: p.immediate,
      reset: false
    }, to);

    if (phase == TransitionPhase.ENTER && _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(payload.from)) {
      const _p = propsFn ? propsFn() : props;

      const from = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(_p.initial) || prevTransitions ? _p.from : _p.initial;
      payload.from = callProp(from, t.item, i);
    }

    const {
      onResolve
    } = payload;

    payload.onResolve = result => {
      callProp(onResolve, result);
      const transitions = usedTransitions.current;
      const t = transitions.find(t => t.key === key);
      if (!t) return;

      if (result.cancelled && t.phase != TransitionPhase.UPDATE) {
        return;
      }

      if (t.ctrl.idle) {
        const idle = transitions.every(t => t.ctrl.idle);

        if (t.phase == TransitionPhase.LEAVE) {
          const expiry = callProp(expires, t.item);

          if (expiry !== false) {
            const expiryMs = expiry === true ? 0 : expiry;
            t.expired = true;

            if (!idle && expiryMs > 0) {
              if (expiryMs <= 0x7fffffff) t.expirationId = setTimeout(forceUpdate, expiryMs);
              return;
            }
          }
        }

        if (idle && transitions.some(t => t.expired)) {
          exitingTransitions.current.delete(t);

          if (exitBeforeEnter) {
            forceChange.current = true;
          }

          forceUpdate();
        }
      }
    };

    const springs = getSprings(t.ctrl, payload);

    if (phase === TransitionPhase.LEAVE && exitBeforeEnter) {
      exitingTransitions.current.set(t, {
        phase,
        springs,
        payload
      });
    } else {
      changes.set(t, {
        phase,
        springs,
        payload
      });
    }
  });
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(SpringContext);
  const prevContext = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["usePrev"])(context);
  const hasContext = context !== prevContext && hasProps(context);
  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
    if (hasContext) {
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(transitions, t => {
        t.ctrl.start({
          default: context
        });
      });
    }
  }, [context]);
  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(changes, (_, t) => {
    if (exitingTransitions.current.size) {
      const ind = transitions.findIndex(state => state.key === t.key);
      transitions.splice(ind, 1);
    }
  });
  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(exitingTransitions.current.size ? exitingTransitions.current : changes, ({
      phase,
      payload
    }, t) => {
      const {
        ctrl
      } = t;
      t.phase = phase;
      ref == null ? void 0 : ref.add(ctrl);

      if (hasContext && phase == TransitionPhase.ENTER) {
        ctrl.start({
          default: context
        });
      }

      if (payload) {
        replaceRef(ctrl, payload.ref);

        if (ctrl.ref && !forceChange.current) {
          ctrl.update(payload);
        } else {
          ctrl.start(payload);

          if (forceChange.current) {
            forceChange.current = false;
          }
        }
      }
    });
  }, reset ? void 0 : deps);

  const renderTransitions = render => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, transitions.map((t, i) => {
    const {
      springs
    } = changes.get(t) || t.ctrl;
    const elem = render(_extends({}, springs), t.item, t, i);
    return elem && elem.type ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](elem.type, _extends({}, elem.props, {
      key: _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].str(t.key) || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].num(t.key) ? t.key : t.ctrl.id,
      ref: elem.ref
    })) : elem;
  }));

  return ref ? [renderTransitions, ref] : renderTransitions;
}
let nextKey = 1;

function getKeys(items, {
  key,
  keys = key
}, prevTransitions) {
  if (keys === null) {
    const reused = new Set();
    return items.map(item => {
      const t = prevTransitions && prevTransitions.find(t => t.item === item && t.phase !== TransitionPhase.LEAVE && !reused.has(t));

      if (t) {
        reused.add(t);
        return t.key;
      }

      return nextKey++;
    });
  }

  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].und(keys) ? items : _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(keys) ? items.map(keys) : Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["toArray"])(keys);
}

const _excluded$2 = ["children"];
function Spring(_ref) {
  let {
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  return children(useSpring(props));
}

const _excluded$1 = ["items", "children"];
function Trail(_ref) {
  let {
    items,
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  const trails = useTrail(items.length, props);
  return items.map((item, index) => {
    const result = children(item, index);
    return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(result) ? result(trails[index]) : result;
  });
}

const _excluded = ["items", "children"];
function Transition(_ref) {
  let {
    items,
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return useTransition(items, props)(children);
}

class Interpolation extends FrameValue {
  constructor(source, args) {
    super();
    this.key = void 0;
    this.idle = true;
    this.calc = void 0;
    this._active = new Set();
    this.source = source;
    this.calc = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["createInterpolator"])(...args);

    const value = this._get();

    const nodeType = Object(_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__["getAnimatedType"])(value);
    Object(_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__["setAnimated"])(this, nodeType.create(value));
  }

  advance(_dt) {
    const value = this._get();

    const oldValue = this.get();

    if (!Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(value, oldValue)) {
      Object(_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__["getAnimated"])(this).setValue(value);

      this._onChange(value, this.idle);
    }

    if (!this.idle && checkIdle(this._active)) {
      becomeIdle(this);
    }
  }

  _get() {
    const inputs = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].arr(this.source) ? this.source.map(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["getFluidValue"]) : Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["toArray"])(Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["getFluidValue"])(this.source));
    return this.calc(...inputs);
  }

  _start() {
    if (this.idle && !checkIdle(this._active)) {
      this.idle = false;
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(Object(_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__["getPayload"])(this), node => {
        node.done = false;
      });

      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["Globals"].skipAnimation) {
        _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["raf"].batchedUpdates(() => this.advance());
        becomeIdle(this);
      } else {
        _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["frameLoop"].start(this);
      }
    }
  }

  _attach() {
    let priority = 1;
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this.source), source => {
      if (Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["hasFluidValue"])(source)) {
        Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["addFluidObserver"])(source, this);
      }

      if (isFrameValue(source)) {
        if (!source.idle) {
          this._active.add(source);
        }

        priority = Math.max(priority, source.priority + 1);
      }
    });
    this.priority = priority;

    this._start();
  }

  _detach() {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this.source), source => {
      if (Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["hasFluidValue"])(source)) {
        Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["removeFluidObserver"])(source, this);
      }
    });

    this._active.clear();

    becomeIdle(this);
  }

  eventObserved(event) {
    if (event.type == 'change') {
      if (event.idle) {
        this.advance();
      } else {
        this._active.add(event.parent);

        this._start();
      }
    } else if (event.type == 'idle') {
        this._active.delete(event.parent);
      } else if (event.type == 'priority') {
          this.priority = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this.source).reduce((highest, parent) => Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1), 0);
        }
  }

}

function isIdle(source) {
  return source.idle !== false;
}

function checkIdle(active) {
  return !active.size || Array.from(active).every(isIdle);
}

function becomeIdle(self) {
  if (!self.idle) {
    self.idle = true;
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(Object(_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__["getPayload"])(self), node => {
      node.done = true;
    });
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["callFluidObservers"])(self, {
      type: 'idle',
      parent: self
    });
  }
}

const to = (source, ...args) => new Interpolation(source, args);
const interpolate = (source, ...args) => (Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["deprecateInterpolate"])(), new Interpolation(source, args));

_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["Globals"].assign({
  createStringInterpolator: _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["createStringInterpolator"],
  to: (source, args) => new Interpolation(source, args)
});
const update = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["frameLoop"].advance;




/***/ }),

/***/ "./packages/block-editor/node_modules/@react-spring/rafz/dist/react-spring-rafz.esm.js":
/*!*********************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@react-spring/rafz/dist/react-spring-rafz.esm.js ***!
  \*********************************************************************************************/
/*! exports provided: __raf, raf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__raf", function() { return __raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
let updateQueue = makeQueue();
const raf = fn => schedule(fn, updateQueue);
let writeQueue = makeQueue();

raf.write = fn => schedule(fn, writeQueue);

let onStartQueue = makeQueue();

raf.onStart = fn => schedule(fn, onStartQueue);

let onFrameQueue = makeQueue();

raf.onFrame = fn => schedule(fn, onFrameQueue);

let onFinishQueue = makeQueue();

raf.onFinish = fn => schedule(fn, onFinishQueue);

let timeouts = [];

raf.setTimeout = (handler, ms) => {
  let time = raf.now() + ms;

  let cancel = () => {
    let i = timeouts.findIndex(t => t.cancel == cancel);
    if (~i) timeouts.splice(i, 1);
    pendingCount -= ~i ? 1 : 0;
  };

  let timeout = {
    time,
    handler,
    cancel
  };
  timeouts.splice(findTimeout(time), 0, timeout);
  pendingCount += 1;
  start();
  return timeout;
};

let findTimeout = time => ~(~timeouts.findIndex(t => t.time > time) || ~timeouts.length);

raf.cancel = fn => {
  onStartQueue.delete(fn);
  onFrameQueue.delete(fn);
  updateQueue.delete(fn);
  writeQueue.delete(fn);
  onFinishQueue.delete(fn);
};

raf.sync = fn => {
  sync = true;
  raf.batchedUpdates(fn);
  sync = false;
};

raf.throttle = fn => {
  let lastArgs;

  function queuedFn() {
    try {
      fn(...lastArgs);
    } finally {
      lastArgs = null;
    }
  }

  function throttled(...args) {
    lastArgs = args;
    raf.onStart(queuedFn);
  }

  throttled.handler = fn;

  throttled.cancel = () => {
    onStartQueue.delete(queuedFn);
    lastArgs = null;
  };

  return throttled;
};

let nativeRaf = typeof window != 'undefined' ? window.requestAnimationFrame : () => {};

raf.use = impl => nativeRaf = impl;

raf.now = typeof performance != 'undefined' ? () => performance.now() : Date.now;

raf.batchedUpdates = fn => fn();

raf.catch = console.error;
raf.frameLoop = 'always';

raf.advance = () => {
  if (raf.frameLoop !== 'demand') {
    console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand');
  } else {
    update();
  }
};

let ts = -1;
let pendingCount = 0;
let sync = false;

function schedule(fn, queue) {
  if (sync) {
    queue.delete(fn);
    fn(0);
  } else {
    queue.add(fn);
    start();
  }
}

function start() {
  if (ts < 0) {
    ts = 0;

    if (raf.frameLoop !== 'demand') {
      nativeRaf(loop);
    }
  }
}

function stop() {
  ts = -1;
}

function loop() {
  if (~ts) {
    nativeRaf(loop);
    raf.batchedUpdates(update);
  }
}

function update() {
  let prevTs = ts;
  ts = raf.now();
  let count = findTimeout(ts);

  if (count) {
    eachSafely(timeouts.splice(0, count), t => t.handler());
    pendingCount -= count;
  }

  onStartQueue.flush();
  updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);
  onFrameQueue.flush();
  writeQueue.flush();
  onFinishQueue.flush();

  if (!pendingCount) {
    stop();
  }
}

function makeQueue() {
  let next = new Set();
  let current = next;
  return {
    add(fn) {
      pendingCount += current == next && !next.has(fn) ? 1 : 0;
      next.add(fn);
    },

    delete(fn) {
      pendingCount -= current == next && next.has(fn) ? 1 : 0;
      return next.delete(fn);
    },

    flush(arg) {
      if (current.size) {
        next = new Set();
        pendingCount -= current.size;
        eachSafely(current, fn => fn(arg) && next.add(fn));
        pendingCount += next.size;
        current = next;
      }
    }

  };
}

function eachSafely(values, each) {
  values.forEach(value => {
    try {
      each(value);
    } catch (e) {
      raf.catch(e);
    }
  });
}

const __raf = {
  count() {
    return pendingCount;
  },

  isRunning() {
    return ts >= 0;
  },

  clear() {
    ts = -1;
    timeouts = [];
    onStartQueue = makeQueue();
    updateQueue = makeQueue();
    onFrameQueue = makeQueue();
    writeQueue = makeQueue();
    onFinishQueue = makeQueue();
    pendingCount = 0;
  }

};




/***/ }),

/***/ "./packages/block-editor/node_modules/@react-spring/shared/dist/react-spring-shared.esm.js":
/*!*************************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@react-spring/shared/dist/react-spring-shared.esm.js ***!
  \*************************************************************************************************/
/*! exports provided: raf, FluidValue, Globals, addFluidObserver, callFluidObserver, callFluidObservers, colorToRgba, colors, createInterpolator, createStringInterpolator, defineHidden, deprecateDirectCall, deprecateInterpolate, each, eachProp, flush, flushCalls, frameLoop, getFluidObservers, getFluidValue, hasFluidValue, hex3, hex4, hex6, hex8, hsl, hsla, is, isAnimatedString, isEqual, isSSR, noop, removeFluidObserver, rgb, rgba, setFluidGetter, toArray, useForceUpdate, useLayoutEffect, useMemoOne, useOnce, usePrev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FluidValue", function() { return FluidValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFluidObserver", function() { return addFluidObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callFluidObserver", function() { return callFluidObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callFluidObservers", function() { return callFluidObservers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorToRgba", function() { return colorToRgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInterpolator", function() { return createInterpolator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStringInterpolator", function() { return createStringInterpolator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineHidden", function() { return defineHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecateDirectCall", function() { return deprecateDirectCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecateInterpolate", function() { return deprecateInterpolate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eachProp", function() { return eachProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flushCalls", function() { return flushCalls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frameLoop", function() { return frameLoop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFluidObservers", function() { return getFluidObservers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFluidValue", function() { return getFluidValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasFluidValue", function() { return hasFluidValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex3", function() { return hex3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex4", function() { return hex4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex6", function() { return hex6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex8", function() { return hex8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return hsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsla", function() { return hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnimatedString", function() { return isAnimatedString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSSR", function() { return isSSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFluidObserver", function() { return removeFluidObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgba", function() { return rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFluidGetter", function() { return setFluidGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForceUpdate", function() { return useForceUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemoOne", function() { return useMemoOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOnce", function() { return useOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePrev", function() { return usePrev; });
/* harmony import */ var _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/rafz */ "./packages/block-editor/node_modules/@react-spring/rafz/dist/react-spring-rafz.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__["raf"]; });

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);





function noop() {}
const defineHidden = (obj, key, value) => Object.defineProperty(obj, key, {
  value,
  writable: true,
  configurable: true
});
const is = {
  arr: Array.isArray,
  obj: a => !!a && a.constructor.name === 'Object',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === undefined
};
function isEqual(a, b) {
  if (is.arr(a)) {
    if (!is.arr(b) || a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }

    return true;
  }

  return a === b;
}
const each = (obj, fn) => obj.forEach(fn);
function eachProp(obj, fn, ctx) {
  if (is.arr(obj)) {
    for (let i = 0; i < obj.length; i++) {
      fn.call(ctx, obj[i], `${i}`);
    }

    return;
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn.call(ctx, obj[key], key);
    }
  }
}
const toArray = a => is.und(a) ? [] : is.arr(a) ? a : [a];
function flush(queue, iterator) {
  if (queue.size) {
    const items = Array.from(queue);
    queue.clear();
    each(items, iterator);
  }
}
const flushCalls = (queue, ...args) => flush(queue, fn => fn(...args));
const isSSR = () => typeof window === 'undefined' || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);

let createStringInterpolator$1;
let to;
let colors$1 = null;
let skipAnimation = false;
let willAdvance = noop;
const assign = globals => {
  if (globals.to) to = globals.to;
  if (globals.now) _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__["raf"].now = globals.now;
  if (globals.colors !== undefined) colors$1 = globals.colors;
  if (globals.skipAnimation != null) skipAnimation = globals.skipAnimation;
  if (globals.createStringInterpolator) createStringInterpolator$1 = globals.createStringInterpolator;
  if (globals.requestAnimationFrame) _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__["raf"].use(globals.requestAnimationFrame);
  if (globals.batchedUpdates) _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__["raf"].batchedUpdates = globals.batchedUpdates;
  if (globals.willAdvance) willAdvance = globals.willAdvance;
  if (globals.frameLoop) _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__["raf"].frameLoop = globals.frameLoop;
};

var globals = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get createStringInterpolator () { return createStringInterpolator$1; },
  get to () { return to; },
  get colors () { return colors$1; },
  get skipAnimation () { return skipAnimation; },
  get willAdvance () { return willAdvance; },
  assign: assign
});

const startQueue = new Set();
let currentFrame = [];
let prevFrame = [];
let priority = 0;
const frameLoop = {
  get idle() {
    return !startQueue.size && !currentFrame.length;
  },

  start(animation) {
    if (priority > animation.priority) {
      startQueue.add(animation);
      _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__["raf"].onStart(flushStartQueue);
    } else {
      startSafely(animation);
      Object(_react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__["raf"])(advance);
    }
  },

  advance,

  sort(animation) {
    if (priority) {
      _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__["raf"].onFrame(() => frameLoop.sort(animation));
    } else {
      const prevIndex = currentFrame.indexOf(animation);

      if (~prevIndex) {
        currentFrame.splice(prevIndex, 1);
        startUnsafely(animation);
      }
    }
  },

  clear() {
    currentFrame = [];
    startQueue.clear();
  }

};

function flushStartQueue() {
  startQueue.forEach(startSafely);
  startQueue.clear();
  Object(_react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__["raf"])(advance);
}

function startSafely(animation) {
  if (!currentFrame.includes(animation)) startUnsafely(animation);
}

function startUnsafely(animation) {
  currentFrame.splice(findIndex(currentFrame, other => other.priority > animation.priority), 0, animation);
}

function advance(dt) {
  const nextFrame = prevFrame;

  for (let i = 0; i < currentFrame.length; i++) {
    const animation = currentFrame[i];
    priority = animation.priority;

    if (!animation.idle) {
      willAdvance(animation);
      animation.advance(dt);

      if (!animation.idle) {
        nextFrame.push(animation);
      }
    }
  }

  priority = 0;
  prevFrame = currentFrame;
  prevFrame.length = 0;
  currentFrame = nextFrame;
  return currentFrame.length > 0;
}

function findIndex(arr, test) {
  const index = arr.findIndex(test);
  return index < 0 ? arr.length : index;
}

const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call(...parts) {
  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  }

  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;

  if (colors$1 && colors$1[color] !== undefined) {
    return colors$1[color];
  }

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 0x000000ff) >>> 0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + 'ff', 16) >>> 0;
  }

  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 0x000000ff) >>> 0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const createInterpolator = (range, output, extrapolate) => {
  if (is.fun(range)) {
    return range;
  }

  if (is.arr(range)) {
    return createInterpolator({
      range,
      output: output,
      extrapolate
    });
  }

  if (is.str(range.output[0])) {
    return createStringInterpolator$1(range);
  }

  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  const extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  const easing = config.easing || (t => t);

  return input => {
    const range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
};

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input;

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax;
  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin);
  result = easing(result);
  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

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

const $get = Symbol.for('FluidValue.get');
const $observers = Symbol.for('FluidValue.observers');

const hasFluidValue = arg => Boolean(arg && arg[$get]);

const getFluidValue = arg => arg && arg[$get] ? arg[$get]() : arg;

const getFluidObservers = target => target[$observers] || null;

function callFluidObserver(observer, event) {
  if (observer.eventObserved) {
    observer.eventObserved(event);
  } else {
    observer(event);
  }
}

function callFluidObservers(target, event) {
  let observers = target[$observers];

  if (observers) {
    observers.forEach(observer => {
      callFluidObserver(observer, event);
    });
  }
}

class FluidValue {
  constructor(get) {
    this[$get] = void 0;
    this[$observers] = void 0;

    if (!get && !(get = this.get)) {
      throw Error('Unknown getter');
    }

    setFluidGetter(this, get);
  }

}

const setFluidGetter = (target, get) => setHidden(target, $get, get);

function addFluidObserver(target, observer) {
  if (target[$get]) {
    let observers = target[$observers];

    if (!observers) {
      setHidden(target, $observers, observers = new Set());
    }

    if (!observers.has(observer)) {
      observers.add(observer);

      if (target.observerAdded) {
        target.observerAdded(observers.size, observer);
      }
    }
  }

  return observer;
}

function removeFluidObserver(target, observer) {
  let observers = target[$observers];

  if (observers && observers.has(observer)) {
    const count = observers.size - 1;

    if (count) {
      observers.delete(observer);
    } else {
      target[$observers] = null;
    }

    if (target.observerRemoved) {
      target.observerRemoved(count, observer);
    }
  }
}

const setHidden = (target, key, value) => Object.defineProperty(target, key, {
  value,
  writable: true,
  configurable: true
});

const numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
const unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, 'i');
const rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
const cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

const variableToRgba = input => {
  const [token, fallback] = parseCSSVariable(input);

  if (!token || isSSR()) {
    return input;
  }

  const value = window.getComputedStyle(document.documentElement).getPropertyValue(token);

  if (value) {
    return value.trim();
  } else if (fallback && fallback.startsWith('--')) {
    const _value = window.getComputedStyle(document.documentElement).getPropertyValue(fallback);

    if (_value) {
      return _value;
    } else {
      return input;
    }
  } else if (fallback && cssVariableRegex.test(fallback)) {
    return variableToRgba(fallback);
  } else if (fallback) {
    return fallback;
  }

  return input;
};

const parseCSSVariable = current => {
  const match = cssVariableRegex.exec(current);
  if (!match) return [,];
  const [, token, fallback] = match;
  return [token, fallback];
};

let namedColorRegex;

const rgbaRound = (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`;

const createStringInterpolator = config => {
  if (!namedColorRegex) namedColorRegex = colors$1 ? new RegExp(`(${Object.keys(colors$1).join('|')})(?!\\w)`, 'g') : /^\b$/;
  const output = config.output.map(value => {
    return getFluidValue(value).replace(cssVariableRegex, variableToRgba).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba);
  });
  const keyframes = output.map(value => value.match(numberRegex).map(Number));
  const outputRanges = keyframes[0].map((_, i) => keyframes.map(values => {
    if (!(i in values)) {
      throw Error('The arity of each "output" value must be equal');
    }

    return values[i];
  }));
  const interpolators = outputRanges.map(output => createInterpolator(_extends({}, config, {
    output
  })));
  return input => {
    var _output$find;

    const missingUnit = !unitRegex.test(output[0]) && ((_output$find = output.find(value => unitRegex.test(value))) == null ? void 0 : _output$find.replace(numberRegex, ''));
    let i = 0;
    return output[0].replace(numberRegex, () => `${interpolators[i++](input)}${missingUnit || ''}`).replace(rgbaRegex, rgbaRound);
  };
};

const prefix = 'react-spring: ';

const once = fn => {
  const func = fn;
  let called = false;

  if (typeof func != 'function') {
    throw new TypeError(`${prefix}once requires a function parameter`);
  }

  return (...args) => {
    if (!called) {
      func(...args);
      called = true;
    }
  };
};

const warnInterpolate = once(console.warn);
function deprecateInterpolate() {
  warnInterpolate(`${prefix}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
const warnDirectCall = once(console.warn);
function deprecateDirectCall() {
  warnDirectCall(`${prefix}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}

function isAnimatedString(value) {
  return is.str(value) && (value[0] == '#' || /\d/.test(value) || !isSSR() && cssVariableRegex.test(value) || value in (colors$1 || {}));
}

const useOnce = effect => Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(effect, emptyDeps);
const emptyDeps = [];

function useForceUpdate() {
  const update = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])()[1];
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(makeMountedRef)[0];
  useOnce(mounted.unmount);
  return () => {
    if (mounted.current) {
      update({});
    }
  };
}

function makeMountedRef() {
  const mounted = {
    current: true,
    unmount: () => () => {
      mounted.current = false;
    }
  };
  return mounted;
}

function useMemoOne(getResult, inputs) {
  const [initial] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(() => ({
    inputs,
    result: getResult()
  }));
  const committed = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const prevCache = committed.current;
  let cache = prevCache;

  if (cache) {
    const useCache = Boolean(inputs && cache.inputs && areInputsEqual(inputs, cache.inputs));

    if (!useCache) {
      cache = {
        inputs,
        result: getResult()
      };
    }
  } else {
    cache = initial;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    committed.current = cache;

    if (prevCache == initial) {
      initial.inputs = initial.result = undefined;
    }
  }, [cache]);
  return cache.result;
}

function areInputsEqual(next, prev) {
  if (next.length !== prev.length) {
    return false;
  }

  for (let i = 0; i < next.length; i++) {
    if (next[i] !== prev[i]) {
      return false;
    }
  }

  return true;
}

function usePrev(value) {
  const prevRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    prevRef.current = value;
  });
  return prevRef.current;
}

const useLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement ? react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_1__["useEffect"];




/***/ }),

/***/ "./packages/block-editor/node_modules/@react-spring/types/animated.js":
/*!****************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@react-spring/types/animated.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./packages/block-editor/node_modules/@react-spring/types/interpolation.js":
/*!*********************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@react-spring/types/interpolation.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./packages/block-editor/node_modules/@react-spring/web/dist/react-spring-web.esm.js":
/*!*******************************************************************************************!*\
  !*** ./packages/block-editor/node_modules/@react-spring/web/dist/react-spring-web.esm.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animated", function() { return animated; });
/* harmony import */ var _react_spring_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/core */ "./packages/block-editor/node_modules/@react-spring/core/dist/react-spring-core.esm.js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _react_spring_core__WEBPACK_IMPORTED_MODULE_0__) if(["default","a","animated"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _react_spring_core__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/shared */ "./packages/block-editor/node_modules/@react-spring/shared/dist/react-spring-shared.esm.js");
/* harmony import */ var _react_spring_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-spring/animated */ "./packages/block-editor/node_modules/@react-spring/animated/dist/react-spring-animated.esm.js");






function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const _excluded$2 = ["style", "children", "scrollTop", "scrollLeft"];
const isCustomPropRE = /^--/;

function dangerousStyleValue(name, value) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (typeof value === 'number' && value !== 0 && !isCustomPropRE.test(name) && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px';
  return ('' + value).trim();
}

const attributeCache = {};
function applyAnimatedValues(instance, props) {
  if (!instance.nodeType || !instance.setAttribute) {
    return false;
  }

  const isFilterElement = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';

  const _ref = props,
        {
    style,
    children,
    scrollTop,
    scrollLeft
  } = _ref,
        attributes = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  const values = Object.values(attributes);
  const names = Object.keys(attributes).map(name => isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase())));

  if (children !== void 0) {
    instance.textContent = children;
  }

  for (let name in style) {
    if (style.hasOwnProperty(name)) {
      const value = dangerousStyleValue(name, style[name]);

      if (isCustomPropRE.test(name)) {
        instance.style.setProperty(name, value);
      } else {
        instance.style[name] = value;
      }
    }
  }

  names.forEach((name, i) => {
    instance.setAttribute(name, values[i]);
  });

  if (scrollTop !== void 0) {
    instance.scrollTop = scrollTop;
  }

  if (scrollLeft !== void 0) {
    instance.scrollLeft = scrollLeft;
  }
}
let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

const _excluded$1 = ["x", "y", "z"];
const domTransforms = /^(matrix|translate|scale|rotate|skew)/;
const pxTransforms = /^(translate)/;
const degTransforms = /^(rotate|skew)/;

const addUnit = (value, unit) => _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].num(value) && value !== 0 ? value + unit : value;

const isValueIdentity = (value, id) => _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].arr(value) ? value.every(v => isValueIdentity(v, id)) : _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].num(value) ? value === id : parseFloat(value) === id;

class AnimatedStyle extends _react_spring_animated__WEBPACK_IMPORTED_MODULE_3__["AnimatedObject"] {
  constructor(_ref) {
    let {
      x,
      y,
      z
    } = _ref,
        style = _objectWithoutPropertiesLoose(_ref, _excluded$1);

    const inputs = [];
    const transforms = [];

    if (x || y || z) {
      inputs.push([x || 0, y || 0, z || 0]);
      transforms.push(xyz => [`translate3d(${xyz.map(v => addUnit(v, 'px')).join(',')})`, isValueIdentity(xyz, 0)]);
    }

    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["eachProp"])(style, (value, key) => {
      if (key === 'transform') {
        inputs.push([value || '']);
        transforms.push(transform => [transform, transform === '']);
      } else if (domTransforms.test(key)) {
        delete style[key];
        if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].und(value)) return;
        const unit = pxTransforms.test(key) ? 'px' : degTransforms.test(key) ? 'deg' : '';
        inputs.push(Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["toArray"])(value));
        transforms.push(key === 'rotate3d' ? ([x, y, z, deg]) => [`rotate3d(${x},${y},${z},${addUnit(deg, unit)})`, isValueIdentity(deg, 0)] : input => [`${key}(${input.map(v => addUnit(v, unit)).join(',')})`, isValueIdentity(input, key.startsWith('scale') ? 1 : 0)]);
      }
    });

    if (inputs.length) {
      style.transform = new FluidTransform(inputs, transforms);
    }

    super(style);
  }

}

class FluidTransform extends _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["FluidValue"] {
  constructor(inputs, transforms) {
    super();
    this._value = null;
    this.inputs = inputs;
    this.transforms = transforms;
  }

  get() {
    return this._value || (this._value = this._get());
  }

  _get() {
    let transform = '';
    let identity = true;
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["each"])(this.inputs, (input, i) => {
      const arg1 = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["getFluidValue"])(input[0]);
      const [t, id] = this.transforms[i](_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].arr(arg1) ? arg1 : input.map(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["getFluidValue"]));
      transform += ' ' + t;
      identity = identity && id;
    });
    return identity ? 'none' : transform;
  }

  observerAdded(count) {
    if (count == 1) Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["each"])(this.inputs, input => Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["each"])(input, value => Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["hasFluidValue"])(value) && Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["addFluidObserver"])(value, this)));
  }

  observerRemoved(count) {
    if (count == 0) Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["each"])(this.inputs, input => Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["each"])(input, value => Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["hasFluidValue"])(value) && Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["removeFluidObserver"])(value, this)));
  }

  eventObserved(event) {
    if (event.type == 'change') {
      this._value = null;
    }

    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["callFluidObservers"])(this, event);
  }

}

const primitives = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

const _excluded = ["scrollTop", "scrollLeft"];
_react_spring_core__WEBPACK_IMPORTED_MODULE_0__["Globals"].assign({
  batchedUpdates: react_dom__WEBPACK_IMPORTED_MODULE_1__["unstable_batchedUpdates"],
  createStringInterpolator: _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["createStringInterpolator"],
  colors: _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["colors"]
});
const host = Object(_react_spring_animated__WEBPACK_IMPORTED_MODULE_3__["createHost"])(primitives, {
  applyAnimatedValues,
  createAnimatedStyle: style => new AnimatedStyle(style),
  getComponentProps: _ref => {
    let props = _objectWithoutPropertiesLoose(_ref, _excluded);

    return props;
  }
});
const animated = host.animated;




/***/ }),

/***/ "./packages/block-editor/node_modules/classnames/index.js":
/*!****************************************************************!*\
  !*** ./packages/block-editor/node_modules/classnames/index.js ***!
  \****************************************************************/
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

/***/ "./packages/block-editor/node_modules/content-type/index.js":
/*!******************************************************************!*\
  !*** ./packages/block-editor/node_modules/content-type/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * RegExp to match *( ";" parameter ) in RFC 7231 sec 3.1.1.1
 *
 * parameter     = token "=" ( token / quoted-string )
 * token         = 1*tchar
 * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
 *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
 *               / DIGIT / ALPHA
 *               ; any VCHAR, except delimiters
 * quoted-string = DQUOTE *( qdtext / quoted-pair ) DQUOTE
 * qdtext        = HTAB / SP / %x21 / %x23-5B / %x5D-7E / obs-text
 * obs-text      = %x80-FF
 * quoted-pair   = "\" ( HTAB / SP / VCHAR / obs-text )
 */
var PARAM_REGEXP = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g
var TEXT_REGEXP = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/
var TOKEN_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/

/**
 * RegExp to match quoted-pair in RFC 7230 sec 3.2.6
 *
 * quoted-pair = "\" ( HTAB / SP / VCHAR / obs-text )
 * obs-text    = %x80-FF
 */
var QESC_REGEXP = /\\([\u000b\u0020-\u00ff])/g

/**
 * RegExp to match chars that must be quoted-pair in RFC 7230 sec 3.2.6
 */
var QUOTE_REGEXP = /([\\"])/g

/**
 * RegExp to match type in RFC 7231 sec 3.1.1.1
 *
 * media-type = type "/" subtype
 * type       = token
 * subtype    = token
 */
var TYPE_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/

/**
 * Module exports.
 * @public
 */

exports.format = format
exports.parse = parse

/**
 * Format object to media type.
 *
 * @param {object} obj
 * @return {string}
 * @public
 */

function format (obj) {
  if (!obj || typeof obj !== 'object') {
    throw new TypeError('argument obj is required')
  }

  var parameters = obj.parameters
  var type = obj.type

  if (!type || !TYPE_REGEXP.test(type)) {
    throw new TypeError('invalid type')
  }

  var string = type

  // append parameters
  if (parameters && typeof parameters === 'object') {
    var param
    var params = Object.keys(parameters).sort()

    for (var i = 0; i < params.length; i++) {
      param = params[i]

      if (!TOKEN_REGEXP.test(param)) {
        throw new TypeError('invalid parameter name')
      }

      string += '; ' + param + '=' + qstring(parameters[param])
    }
  }

  return string
}

/**
 * Parse media type to object.
 *
 * @param {string|object} string
 * @return {Object}
 * @public
 */

function parse (string) {
  if (!string) {
    throw new TypeError('argument string is required')
  }

  // support req/res-like objects as argument
  var header = typeof string === 'object'
    ? getcontenttype(string)
    : string

  if (typeof header !== 'string') {
    throw new TypeError('argument string is required to be a string')
  }

  var index = header.indexOf(';')
  var type = index !== -1
    ? header.substr(0, index).trim()
    : header.trim()

  if (!TYPE_REGEXP.test(type)) {
    throw new TypeError('invalid media type')
  }

  var obj = new ContentType(type.toLowerCase())

  // parse parameters
  if (index !== -1) {
    var key
    var match
    var value

    PARAM_REGEXP.lastIndex = index

    while ((match = PARAM_REGEXP.exec(header))) {
      if (match.index !== index) {
        throw new TypeError('invalid parameter format')
      }

      index += match[0].length
      key = match[1].toLowerCase()
      value = match[2]

      if (value[0] === '"') {
        // remove quotes and escapes
        value = value
          .substr(1, value.length - 2)
          .replace(QESC_REGEXP, '$1')
      }

      obj.parameters[key] = value
    }

    if (index !== header.length) {
      throw new TypeError('invalid parameter format')
    }
  }

  return obj
}

/**
 * Get content-type from req/res objects.
 *
 * @param {object}
 * @return {Object}
 * @private
 */

function getcontenttype (obj) {
  var header

  if (typeof obj.getHeader === 'function') {
    // res-like
    header = obj.getHeader('content-type')
  } else if (typeof obj.headers === 'object') {
    // req-like
    header = obj.headers && obj.headers['content-type']
  }

  if (typeof header !== 'string') {
    throw new TypeError('content-type header is missing from object')
  }

  return header
}

/**
 * Quote a string if necessary.
 *
 * @param {string} val
 * @return {string}
 * @private
 */

function qstring (val) {
  var str = String(val)

  // no need to quote tokens
  if (TOKEN_REGEXP.test(str)) {
    return str
  }

  if (str.length > 0 && !TEXT_REGEXP.test(str)) {
    throw new TypeError('invalid parameter value')
  }

  return '"' + str.replace(QUOTE_REGEXP, '\\$1') + '"'
}

/**
 * Class to represent a content type.
 * @private
 */
function ContentType (type) {
  this.parameters = Object.create(null)
  this.type = type
}


/***/ }),

/***/ "./packages/block-editor/node_modules/js-cookie/dist/js.cookie.js":
/*!************************************************************************!*\
  !*** ./packages/block-editor/node_modules/js-cookie/dist/js.cookie.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! js-cookie v3.0.1 | MIT */
;
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  /* eslint-disable no-var */
  function assign (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        target[key] = source[key];
      }
    }
    return target
  }
  /* eslint-enable no-var */

  /* eslint-disable no-var */
  var defaultConverter = {
    read: function (value) {
      if (value[0] === '"') {
        value = value.slice(1, -1);
      }
      return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function (value) {
      return encodeURIComponent(value).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      )
    }
  };
  /* eslint-enable no-var */

  /* eslint-disable no-var */

  function init (converter, defaultAttributes) {
    function set (key, value, attributes) {
      if (typeof document === 'undefined') {
        return
      }

      attributes = assign({}, defaultAttributes, attributes);

      if (typeof attributes.expires === 'number') {
        attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
      }
      if (attributes.expires) {
        attributes.expires = attributes.expires.toUTCString();
      }

      key = encodeURIComponent(key)
        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
        .replace(/[()]/g, escape);

      var stringifiedAttributes = '';
      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue
        }

        stringifiedAttributes += '; ' + attributeName;

        if (attributes[attributeName] === true) {
          continue
        }

        // Considers RFC 6265 section 5.2:
        // ...
        // 3.  If the remaining unparsed-attributes contains a %x3B (";")
        //     character:
        // Consume the characters of the unparsed-attributes up to,
        // not including, the first %x3B (";") character.
        // ...
        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
      }

      return (document.cookie =
        key + '=' + converter.write(value, key) + stringifiedAttributes)
    }

    function get (key) {
      if (typeof document === 'undefined' || (arguments.length && !key)) {
        return
      }

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all.
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var jar = {};
      for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var value = parts.slice(1).join('=');

        try {
          var foundKey = decodeURIComponent(parts[0]);
          jar[foundKey] = converter.read(value, foundKey);

          if (key === foundKey) {
            break
          }
        } catch (e) {}
      }

      return key ? jar[key] : jar
    }

    return Object.create(
      {
        set: set,
        get: get,
        remove: function (key, attributes) {
          set(
            key,
            '',
            assign({}, attributes, {
              expires: -1
            })
          );
        },
        withAttributes: function (attributes) {
          return init(this.converter, assign({}, this.attributes, attributes))
        },
        withConverter: function (converter) {
          return init(assign({}, this.converter, converter), this.attributes)
        }
      },
      {
        attributes: { value: Object.freeze(defaultAttributes) },
        converter: { value: Object.freeze(converter) }
      }
    )
  }

  var api = init(defaultConverter, { path: '/' });
  /* eslint-enable no-var */

  return api;

})));


/***/ }),

/***/ "./packages/block-editor/node_modules/react-spring/dist/react-spring.esm.js":
/*!**********************************************************************************!*\
  !*** ./packages/block-editor/node_modules/react-spring/dist/react-spring.esm.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/web */ "./packages/block-editor/node_modules/@react-spring/web/dist/react-spring-web.esm.js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _react_spring_web__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./packages/block-editor/node_modules/unsplash-js/dist/unsplash-js.esm.js":
/*!********************************************************************************!*\
  !*** ./packages/block-editor/node_modules/unsplash-js/dist/unsplash-js.esm.js ***!
  \********************************************************************************/
/*! exports provided: Language, OrderBy, _internals, createApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderBy", function() { return OrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_internals", function() { return internals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApi", function() { return createApi; });
/* harmony import */ var content_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! content-type */ "./packages/block-editor/node_modules/content-type/index.js");
/* harmony import */ var content_type__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(content_type__WEBPACK_IMPORTED_MODULE_0__);


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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var checkIsString = /*#__PURE__*/getRefinement(function (value) {
  return typeof value === 'string' ? value : null;
});
var isDefined = function isDefined(x) {
  return x !== null && x !== undefined;
};
function getRefinement(getB) {
  return function (a) {
    return isDefined(getB(a));
  };
}
var checkIsNonEmptyArray = function checkIsNonEmptyArray(a) {
  return a.length > 0;
};

/** Takes a dictionary containing nullish values and returns a dictionary of all the defined
 * (non-nullish) values.
 */

var compactDefined = function compactDefined(obj) {
  return Object.keys(obj).reduce(function (acc, key) {
    var _ref;

    var value = obj[key];
    return _extends({}, acc, isDefined(value) ? (_ref = {}, _ref[key] = value, _ref) : {});
  }, {});
};
function flow() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  var len = fns.length - 1;
  return function () {
    for (var _len2 = arguments.length, x = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      x[_key2] = arguments[_key2];
    }

    var y = fns[0].apply(this, x);

    for (var i = 1; i <= len; i++) {
      y = fns[i].call(this, y);
    }

    return y;
  };
}

var checkIsObject = /*#__PURE__*/getRefinement(function (response) {
  return isDefined(response) && typeof response === 'object' && !Array.isArray(response) ? response : null;
});
var checkIsErrors = /*#__PURE__*/getRefinement(function (errors) {
  return Array.isArray(errors) && errors.every(checkIsString) && checkIsNonEmptyArray(errors) ? errors : null;
});
var checkIsApiError = /*#__PURE__*/getRefinement(function (response) {
  return checkIsObject(response) && 'errors' in response && checkIsErrors(response.errors) ? {
    errors: response.errors
  } : null;
});
var getErrorForBadStatusCode = function getErrorForBadStatusCode(jsonResponse) {
  if (checkIsApiError(jsonResponse)) {
    return {
      errors: jsonResponse.errors,
      source: 'api'
    };
  } else {
    return {
      errors: ['Responded with a status code outside the 2xx range, and the response body is not recognisable.'],
      source: 'decoding'
    };
  }
};
var DecodingError = function DecodingError(message) {
  this.message = message;
};

var CONTENT_TYPE_RESPONSE_HEADER = 'content-type';
var CONTENT_TYPE_JSON = 'application/json';

var checkIsJsonResponse = function checkIsJsonResponse(response) {
  var contentTypeHeader = response.headers.get(CONTENT_TYPE_RESPONSE_HEADER);
  return isDefined(contentTypeHeader) && Object(content_type__WEBPACK_IMPORTED_MODULE_0__["parse"])(contentTypeHeader).type === CONTENT_TYPE_JSON;
};
/**
 * Note: restrict the type of JSON to `AnyJson` so that `any` doesn't leak downstream.
 */


var getJsonResponse = function getJsonResponse(response) {
  if (checkIsJsonResponse(response)) {
    return response.json()["catch"](function (_err) {
      throw new DecodingError('unable to parse JSON response.');
    });
  } else {
    throw new DecodingError('expected JSON response from server.');
  }
};

var handleFetchResponse = function handleFetchResponse(handleResponse) {
  return function (response) {
    return (response.ok ? handleResponse({
      response: response
    }).then(function (handledResponse) {
      return {
        type: 'success',
        status: response.status,
        response: handledResponse,
        originalResponse: response
      };
    }) : getJsonResponse(response).then(function (jsonResponse) {
      return _extends({
        type: 'error',
        status: response.status
      }, getErrorForBadStatusCode(jsonResponse), {
        originalResponse: response
      });
    }))["catch"](function (error) {
      /**
       * We want to separate expected decoding errors from unknown ones. We do so by throwing a custom
       * `DecodingError` whenever we encounter one within `handleFetchResponse` and catch them all
       * here. This allows us to easily handle all of these errors at once. Unexpected errors are not
       * caught, so that they bubble up and fail loudly.
       *
       * Note: Ideally we'd use an Either type, but this does the job without introducing dependencies
       * like `fp-ts`.
       */
      if (error instanceof DecodingError) {
        return {
          type: 'error',
          source: 'decoding',
          status: response.status,
          originalResponse: response,
          errors: [error.message]
        };
      } else {
        throw error;
      }
    });
  };
};
var castResponse = function castResponse() {
  return function (_ref) {
    var response = _ref.response;
    return getJsonResponse(response);
  };
};

var addQueryToUrl = function addQueryToUrl(query) {
  return function (url) {
    Object.keys(query).forEach(function (queryKey) {
      return url.searchParams.set(queryKey, query[queryKey].toString());
    });
  };
};

var addPathnameToUrl = function addPathnameToUrl(pathname) {
  return function (url) {
    // When there is no existing pathname, the value is `/`. Appending would give us a URL with two
    // forward slashes. This is why we replace the value in that scenario.
    if (url.pathname === '/') {
      url.pathname = pathname;
    } else {
      url.pathname += pathname;
    }
  };
};

var buildUrl = function buildUrl(_ref) {
  var pathname = _ref.pathname,
      query = _ref.query;
  return function (apiUrl) {
    var url = new URL(apiUrl);
    addPathnameToUrl(pathname)(url);
    addQueryToUrl(query)(url);
    return url.toString();
  };
};

var getQueryFromSearchParams = function getQueryFromSearchParams(searchParams) {
  var query = {};
  searchParams.forEach(function (value, key) {
    query[key] = value;
  });
  return query;
};

var parseQueryAndPathname = function parseQueryAndPathname(url) {
  var _URL = new URL(url),
      pathname = _URL.pathname,
      searchParams = _URL.searchParams;

  var query = getQueryFromSearchParams(searchParams);
  return {
    query: query,
    pathname: pathname === '/' ? undefined : pathname
  };
};

/**
 * helper used to type-check the arguments, and add default params for all requests
 */

var createRequestHandler = function createRequestHandler(fn) {
  return function (a, additionalFetchOptions) {
    if (additionalFetchOptions === void 0) {
      additionalFetchOptions = {};
    }

    var _fn = fn(a),
        headers = _fn.headers,
        query = _fn.query,
        baseReqParams = _objectWithoutPropertiesLoose(_fn, ["headers", "query"]);

    return _extends({}, baseReqParams, additionalFetchOptions, {
      query: query,
      headers: _extends({}, headers, additionalFetchOptions.headers)
    });
  };
};
var makeEndpoint = function makeEndpoint(endpoint) {
  return endpoint;
};
var initMakeRequest = function initMakeRequest(_ref) {
  var accessKey = _ref.accessKey,
      _ref$apiVersion = _ref.apiVersion,
      apiVersion = _ref$apiVersion === void 0 ? 'v1' : _ref$apiVersion,
      _ref$apiUrl = _ref.apiUrl,
      apiUrl = _ref$apiUrl === void 0 ? 'https://api.unsplash.com' : _ref$apiUrl,
      generalHeaders = _ref.headers,
      providedFetch = _ref.fetch,
      generalFetchOptions = _objectWithoutPropertiesLoose(_ref, ["accessKey", "apiVersion", "apiUrl", "headers", "fetch"]);

  return function (_ref2) {
    var handleResponse = _ref2.handleResponse,
        handleRequest = _ref2.handleRequest;
    return flow(handleRequest, function (_ref3) {
      var pathname = _ref3.pathname,
          query = _ref3.query,
          _ref3$method = _ref3.method,
          method = _ref3$method === void 0 ? 'GET' : _ref3$method,
          endpointHeaders = _ref3.headers,
          body = _ref3.body,
          signal = _ref3.signal;
      var url = buildUrl({
        pathname: pathname,
        query: query
      })(apiUrl);

      var fetchOptions = _extends({
        method: method,
        headers: _extends({}, generalHeaders, endpointHeaders, {
          'Accept-Version': apiVersion
        }, isDefined(accessKey) ? {
          Authorization: "Client-ID " + accessKey
        } : {}),
        body: body,
        signal: signal
      }, generalFetchOptions);

      var fetchToUse = providedFetch != null ? providedFetch : fetch;
      return fetchToUse(url, fetchOptions).then(handleFetchResponse(handleResponse));
    });
  };
};

var TOTAL_RESPONSE_HEADER = 'x-total';

var getTotalFromApiFeedResponse = function getTotalFromApiFeedResponse(response) {
  var totalsStr = response.headers.get(TOTAL_RESPONSE_HEADER);

  if (isDefined(totalsStr)) {
    var total = parseInt(totalsStr);

    if (Number.isInteger(total)) {
      return total;
    } else {
      throw new DecodingError("expected " + TOTAL_RESPONSE_HEADER + " header to be valid integer.");
    }
  } else {
    throw new DecodingError("expected " + TOTAL_RESPONSE_HEADER + " header to exist.");
  }
};

var handleFeedResponse = function handleFeedResponse() {
  return function (_ref) {
    var response = _ref.response;
    return castResponse()({
      response: response
    }).then(function (results) {
      return {
        results: results,
        total: getTotalFromApiFeedResponse(response)
      };
    });
  };
};

var getCollections = function getCollections(collectionIds) {
  return isDefined(collectionIds) ? {
    collections: collectionIds.join()
  } : {};
};
var getTopics = function getTopics(topicIds) {
  return isDefined(topicIds) ? {
    topics: topicIds.join()
  } : {};
};
var getFeedParams = function getFeedParams(_ref) {
  var page = _ref.page,
      perPage = _ref.perPage,
      orderBy = _ref.orderBy;
  return compactDefined({
    per_page: perPage,
    order_by: orderBy,
    page: page
  });
};

var COLLECTIONS_PATH_PREFIX = '/collections';
var getPhotos = /*#__PURE__*/function () {
  var getPathname = function getPathname(_ref) {
    var collectionId = _ref.collectionId;
    return COLLECTIONS_PATH_PREFIX + "/" + collectionId + "/photos";
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (_ref2) {
      var collectionId = _ref2.collectionId,
          orientation = _ref2.orientation,
          paginationParams = _objectWithoutPropertiesLoose(_ref2, ["collectionId", "orientation"]);

      return {
        pathname: getPathname({
          collectionId: collectionId
        }),
        query: compactDefined(_extends({}, getFeedParams(paginationParams), {
          orientation: orientation
        }))
      };
    }),
    handleResponse: handleFeedResponse()
  });
}();
var get = /*#__PURE__*/function () {
  var getPathname = function getPathname(_ref3) {
    var collectionId = _ref3.collectionId;
    return COLLECTIONS_PATH_PREFIX + "/" + collectionId;
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (_ref4) {
      var collectionId = _ref4.collectionId;
      return {
        pathname: getPathname({
          collectionId: collectionId
        }),
        query: {}
      };
    }),
    handleResponse: castResponse()
  });
}();
var list = /*#__PURE__*/function () {
  var getPathname = function getPathname() {
    return COLLECTIONS_PATH_PREFIX;
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (paginationParams) {
      if (paginationParams === void 0) {
        paginationParams = {};
      }

      return {
        pathname: getPathname(),
        query: getFeedParams(paginationParams)
      };
    }),
    handleResponse: handleFeedResponse()
  });
}();
var getRelated = /*#__PURE__*/function () {
  var getPathname = function getPathname(_ref5) {
    var collectionId = _ref5.collectionId;
    return COLLECTIONS_PATH_PREFIX + "/" + collectionId + "/related";
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (_ref6) {
      var collectionId = _ref6.collectionId;
      return {
        pathname: getPathname({
          collectionId: collectionId
        }),
        query: {}
      };
    }),
    handleResponse: castResponse()
  });
}();

var index = {
  __proto__: null,
  getPhotos: getPhotos,
  get: get,
  list: list,
  getRelated: getRelated
};

var PHOTOS_PATH_PREFIX = '/photos';
var list$1 = /*#__PURE__*/function () {
  var _getPathname = function getPathname() {
    return PHOTOS_PATH_PREFIX;
  };

  return makeEndpoint({
    // Wrapper uses type trick to allow 0 args
    getPathname: function getPathname(_params) {
      return _getPathname();
    },
    handleRequest: createRequestHandler(function (feedParams) {
      if (feedParams === void 0) {
        feedParams = {};
      }

      return {
        pathname: PHOTOS_PATH_PREFIX,
        query: compactDefined(getFeedParams(feedParams))
      };
    }),
    handleResponse: handleFeedResponse()
  });
}();
var get$1 = /*#__PURE__*/function () {
  var getPathname = function getPathname(_ref) {
    var photoId = _ref.photoId;
    return PHOTOS_PATH_PREFIX + "/" + photoId;
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (_ref2) {
      var photoId = _ref2.photoId;
      return {
        pathname: getPathname({
          photoId: photoId
        }),
        query: {}
      };
    }),
    handleResponse: castResponse()
  });
}();
var getStats = /*#__PURE__*/function () {
  var getPathname = function getPathname(_ref3) {
    var photoId = _ref3.photoId;
    return PHOTOS_PATH_PREFIX + "/" + photoId + "/statistics";
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (_ref4) {
      var photoId = _ref4.photoId;
      return {
        pathname: getPathname({
          photoId: photoId
        }),
        query: {}
      };
    }),
    handleResponse: castResponse()
  });
}();
var getRandom = /*#__PURE__*/function () {
  var getPathname = function getPathname() {
    return PHOTOS_PATH_PREFIX + "/random";
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (_temp) {
      var _ref5 = _temp === void 0 ? {} : _temp,
          collectionIds = _ref5.collectionIds,
          contentFilter = _ref5.contentFilter,
          topicIds = _ref5.topicIds,
          queryParams = _objectWithoutPropertiesLoose(_ref5, ["collectionIds", "contentFilter", "topicIds"]);

      return {
        pathname: getPathname(),
        query: compactDefined(_extends({}, queryParams, {
          content_filter: contentFilter
        }, getCollections(collectionIds), getTopics(topicIds))),
        headers: {
          /**
           * Avoid response caching
           */
          'cache-control': 'no-cache'
        }
      };
    }),
    handleResponse: castResponse()
  });
}();
var trackDownload = {
  handleRequest: /*#__PURE__*/createRequestHandler(function (_ref6) {
    var downloadLocation = _ref6.downloadLocation;

    var _parseQueryAndPathnam = parseQueryAndPathname(downloadLocation),
        pathname = _parseQueryAndPathnam.pathname,
        query = _parseQueryAndPathnam.query;

    if (!isDefined(pathname)) {
      throw new Error('Could not parse pathname from url.');
    }

    return {
      pathname: pathname,
      query: compactDefined(query)
    };
  }),
  handleResponse: /*#__PURE__*/castResponse()
};

var index$1 = {
  __proto__: null,
  list: list$1,
  get: get$1,
  getStats: getStats,
  getRandom: getRandom,
  trackDownload: trackDownload
};

var SEARCH_PATH_PREFIX = "/search";
var getPhotos$1 = /*#__PURE__*/function () {
  var _getPathname = function getPathname() {
    return SEARCH_PATH_PREFIX + "/photos";
  };

  return makeEndpoint({
    // Wrapper uses type trick to allow 0 args
    getPathname: function getPathname(_params) {
      return _getPathname();
    },
    handleRequest: createRequestHandler(function (_ref) {
      var query = _ref.query,
          page = _ref.page,
          perPage = _ref.perPage,
          orderBy = _ref.orderBy,
          collectionIds = _ref.collectionIds,
          lang = _ref.lang,
          contentFilter = _ref.contentFilter,
          filters = _objectWithoutPropertiesLoose(_ref, ["query", "page", "perPage", "orderBy", "collectionIds", "lang", "contentFilter"]);

      return {
        pathname: _getPathname(),
        query: compactDefined(_extends({
          query: query,
          content_filter: contentFilter,
          lang: lang,
          order_by: orderBy
        }, getFeedParams({
          page: page,
          perPage: perPage
        }), getCollections(collectionIds), filters))
      };
    }),
    handleResponse: castResponse()
  });
}();
var getCollections$1 = /*#__PURE__*/function () {
  var _getPathname2 = function getPathname() {
    return SEARCH_PATH_PREFIX + "/collections";
  };

  return makeEndpoint({
    // Wrapper uses type trick to allow 0 args
    getPathname: function getPathname(_params) {
      return _getPathname2();
    },
    handleRequest: createRequestHandler(function (_ref2) {
      var query = _ref2.query,
          paginationParams = _objectWithoutPropertiesLoose(_ref2, ["query"]);

      return {
        pathname: _getPathname2(),
        query: _extends({
          query: query
        }, getFeedParams(paginationParams))
      };
    }),
    handleResponse: castResponse()
  });
}();
var getUsers = /*#__PURE__*/function () {
  var _getPathname3 = function getPathname() {
    return SEARCH_PATH_PREFIX + "/users";
  };

  return makeEndpoint({
    // Wrapper uses type trick to allow 0 args
    getPathname: function getPathname(_params) {
      return _getPathname3();
    },
    handleRequest: createRequestHandler(function (_ref3) {
      var query = _ref3.query,
          paginationParams = _objectWithoutPropertiesLoose(_ref3, ["query"]);

      return {
        pathname: _getPathname3(),
        query: _extends({
          query: query
        }, getFeedParams(paginationParams))
      };
    }),
    handleResponse: castResponse()
  });
}();

var index$2 = {
  __proto__: null,
  getPhotos: getPhotos$1,
  getCollections: getCollections$1,
  getUsers: getUsers
};

var USERS_PATH_PREFIX = '/users';
var get$2 = /*#__PURE__*/function () {
  var getPathname = function getPathname(_ref) {
    var username = _ref.username;
    return USERS_PATH_PREFIX + "/" + username;
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (_ref2) {
      var username = _ref2.username;
      return {
        pathname: getPathname({
          username: username
        }),
        query: {}
      };
    }),
    handleResponse: castResponse()
  });
}();
var getPhotos$2 = /*#__PURE__*/function () {
  var getPathname = function getPathname(_ref3) {
    var username = _ref3.username;
    return USERS_PATH_PREFIX + "/" + username + "/photos";
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (_ref4) {
      var username = _ref4.username,
          stats = _ref4.stats,
          orientation = _ref4.orientation,
          paginationParams = _objectWithoutPropertiesLoose(_ref4, ["username", "stats", "orientation"]);

      return {
        pathname: getPathname({
          username: username
        }),
        query: compactDefined(_extends({}, getFeedParams(paginationParams), {
          orientation: orientation,
          stats: stats
        }))
      };
    }),
    handleResponse: handleFeedResponse()
  });
}();
var getLikes = /*#__PURE__*/function () {
  var getPathname = function getPathname(_ref5) {
    var username = _ref5.username;
    return USERS_PATH_PREFIX + "/" + username + "/likes";
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (_ref6) {
      var username = _ref6.username,
          orientation = _ref6.orientation,
          paginationParams = _objectWithoutPropertiesLoose(_ref6, ["username", "orientation"]);

      return {
        pathname: getPathname({
          username: username
        }),
        query: compactDefined(_extends({}, getFeedParams(paginationParams), {
          orientation: orientation
        }))
      };
    }),
    handleResponse: handleFeedResponse()
  });
}();
var getCollections$2 = /*#__PURE__*/function () {
  var getPathname = function getPathname(_ref7) {
    var username = _ref7.username;
    return USERS_PATH_PREFIX + "/" + username + "/collections";
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (_ref8) {
      var username = _ref8.username,
          paginationParams = _objectWithoutPropertiesLoose(_ref8, ["username"]);

      return {
        pathname: getPathname({
          username: username
        }),
        query: getFeedParams(paginationParams)
      };
    }),
    handleResponse: handleFeedResponse()
  });
}();

var index$3 = {
  __proto__: null,
  get: get$2,
  getPhotos: getPhotos$2,
  getLikes: getLikes,
  getCollections: getCollections$2
};

var BASE_TOPIC_PATH = '/topics';

var getTopicPath = function getTopicPath(_ref) {
  var topicIdOrSlug = _ref.topicIdOrSlug;
  return BASE_TOPIC_PATH + "/" + topicIdOrSlug;
};

var list$2 = /*#__PURE__*/makeEndpoint({
  getPathname: getTopicPath,
  handleRequest: function handleRequest(_ref2) {
    var page = _ref2.page,
        perPage = _ref2.perPage,
        orderBy = _ref2.orderBy,
        topicIdsOrSlugs = _ref2.topicIdsOrSlugs;
    return {
      pathname: BASE_TOPIC_PATH,
      query: compactDefined(_extends({}, getFeedParams({
        page: page,
        perPage: perPage
      }), {
        ids: topicIdsOrSlugs == null ? void 0 : topicIdsOrSlugs.join(','),
        order_by: orderBy
      }))
    };
  },
  handleResponse: /*#__PURE__*/handleFeedResponse()
});
var get$3 = /*#__PURE__*/makeEndpoint({
  getPathname: getTopicPath,
  handleRequest: function handleRequest(_ref3) {
    var topicIdOrSlug = _ref3.topicIdOrSlug;
    return {
      pathname: getTopicPath({
        topicIdOrSlug: topicIdOrSlug
      }),
      query: {}
    };
  },
  handleResponse: /*#__PURE__*/castResponse()
});
var getPhotos$3 = /*#__PURE__*/function () {
  var getPathname = /*#__PURE__*/flow(getTopicPath, function (topicPath) {
    return topicPath + "/photos";
  });
  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: function handleRequest(_ref4) {
      var topicIdOrSlug = _ref4.topicIdOrSlug,
          orientation = _ref4.orientation,
          feedParams = _objectWithoutPropertiesLoose(_ref4, ["topicIdOrSlug", "orientation"]);

      return {
        pathname: getPathname({
          topicIdOrSlug: topicIdOrSlug
        }),
        query: compactDefined(_extends({}, getFeedParams(feedParams), {
          orientation: orientation
        }))
      };
    },
    handleResponse: handleFeedResponse()
  });
}();

var index$4 = {
  __proto__: null,
  list: list$2,
  get: get$3,
  getPhotos: getPhotos$3
};

var trackNonHotLinkedPhotoView = function trackNonHotLinkedPhotoView(_ref) {
  var appId = _ref.appId;
  return function (_ref2) {
    var photoId = _ref2.photoId;
    var ids = !Array.isArray(photoId) ? [photoId] : photoId;

    if (ids.length > 20) {
      throw new Error('You cannot track more than 20 photos at once. Please try again with fewer photos.');
    }

    return fetch("views.unsplash.com/v?photo_id=" + ids.join() + "&app_id=" + appId);
  };
};



var internals = {
  __proto__: null,
  collections: index,
  photos: index$1,
  search: index$2,
  users: index$3,
  topics: index$4,
  trackNonHotLinkedPhotoView: trackNonHotLinkedPhotoView
};

var Language;

(function (Language) {
  Language["Afrikaans"] = "af";
  Language["Amharic"] = "am";
  Language["Arabic"] = "ar";
  Language["Azerbaijani"] = "az";
  Language["Belarusian"] = "be";
  Language["Bulgarian"] = "bg";
  Language["Bengali"] = "bn";
  Language["Bosnian"] = "bs";
  Language["Catalan"] = "ca";
  Language["Cebuano"] = "ceb";
  Language["Corsican"] = "co";
  Language["Czech"] = "cs";
  Language["Welsh"] = "cy";
  Language["Danish"] = "da";
  Language["German"] = "de";
  Language["Greek"] = "el";
  Language["English"] = "en";
  Language["Esperanto"] = "eo";
  Language["Spanish"] = "es";
  Language["Estonian"] = "et";
  Language["Basque"] = "eu";
  Language["Persian"] = "fa";
  Language["Finnish"] = "fi";
  Language["French"] = "fr";
  Language["Frisian"] = "fy";
  Language["Irish"] = "ga";
  Language["ScotsGaelic"] = "gd";
  Language["Galician"] = "gl";
  Language["Gujarati"] = "gu";
  Language["Hausa"] = "ha";
  Language["Hawaiian"] = "haw";
  Language["Hindi"] = "hi";
  Language["Hmong"] = "hmn";
  Language["Croatian"] = "hr";
  Language["HaitianCreole"] = "ht";
  Language["Hungarian"] = "hu";
  Language["Armenian"] = "hy";
  Language["Indonesian"] = "id";
  Language["Igbo"] = "ig";
  Language["Icelandic"] = "is";
  Language["Italian"] = "it";
  Language["Hebrew"] = "iw";
  Language["Japanese"] = "ja";
  Language["Javanese"] = "jw";
  Language["Georgian"] = "ka";
  Language["Kazakh"] = "kk";
  Language["Khmer"] = "km";
  Language["Kannada"] = "kn";
  Language["Korean"] = "ko";
  Language["Kurdish"] = "ku";
  Language["Kyrgyz"] = "ky";
  Language["Latin"] = "la";
  Language["Luxembourgish"] = "lb";
  Language["Lao"] = "lo";
  Language["Lithuanian"] = "lt";
  Language["Latvian"] = "lv";
  Language["Malagasy"] = "mg";
  Language["Maori"] = "mi";
  Language["Macedonian"] = "mk";
  Language["Malayalam"] = "ml";
  Language["Mongolian"] = "mn";
  Language["Marathi"] = "mr";
  Language["Malay"] = "ms";
  Language["Maltese"] = "mt";
  Language["Myanmar"] = "my";
  Language["Nepali"] = "ne";
  Language["Dutch"] = "nl";
  Language["Norwegian"] = "no";
  Language["Nyanja"] = "ny";
  Language["Oriya"] = "or";
  Language["Punjabi"] = "pa";
  Language["Polish"] = "pl";
  Language["Pashto"] = "ps";
  Language["Portuguese"] = "pt";
  Language["Romanian"] = "ro";
  Language["Russian"] = "ru";
  Language["Kinyarwanda"] = "rw";
  Language["Sindhi"] = "sd";
  Language["Sinhala"] = "si";
  Language["Slovak"] = "sk";
  Language["Slovenian"] = "sl";
  Language["Samoan"] = "sm";
  Language["Shona"] = "sn";
  Language["Somali"] = "so";
  Language["Albanian"] = "sq";
  Language["Serbian"] = "sr";
  Language["Sesotho"] = "st";
  Language["Sundanese"] = "su";
  Language["Swedish"] = "sv";
  Language["Swahili"] = "sw";
  Language["Tamil"] = "ta";
  Language["Telugu"] = "te";
  Language["Tajik"] = "tg";
  Language["Thai"] = "th";
  Language["Turkmen"] = "tk";
  Language["Filipino"] = "tl";
  Language["Turkish"] = "tr";
  Language["Tatar"] = "tt";
  Language["Uighur"] = "ug";
  Language["Ukrainian"] = "uk";
  Language["Urdu"] = "ur";
  Language["Uzbek"] = "uz";
  Language["Vietnamese"] = "vi";
  Language["Xhosa"] = "xh";
  Language["Yiddish"] = "yi";
  Language["Yoruba"] = "yo";
  Language["ChineseSimplified"] = "zh";
  Language["ChineseTraditional"] = "zh-TW";
  Language["Zulu"] = "zu";
})(Language || (Language = {}));

var OrderBy;

(function (OrderBy) {
  OrderBy["LATEST"] = "latest";
  OrderBy["POPULAR"] = "popular";
  OrderBy["VIEWS"] = "views";
  OrderBy["DOWNLOADS"] = "downloads";
  OrderBy["OLDEST"] = "oldest";
})(OrderBy || (OrderBy = {}));

var createApi = /*#__PURE__*/flow(initMakeRequest, function (makeRequest) {
  return {
    photos: {
      get: makeRequest(get$1),
      list: makeRequest(list$1),
      getStats: makeRequest(getStats),
      getRandom: makeRequest(getRandom),
      trackDownload: makeRequest(trackDownload)
    },
    users: {
      getPhotos: makeRequest(getPhotos$2),
      getCollections: makeRequest(getCollections$2),
      getLikes: makeRequest(getLikes),
      get: makeRequest(get$2)
    },
    search: {
      getCollections: makeRequest(getCollections$1),
      getPhotos: makeRequest(getPhotos$1),
      getUsers: makeRequest(getUsers)
    },
    collections: {
      getPhotos: makeRequest(getPhotos),
      get: makeRequest(get),
      list: makeRequest(list),
      getRelated: makeRequest(getRelated)
    },
    topics: {
      list: makeRequest(list$2),
      get: makeRequest(get$3),
      getPhotos: makeRequest(getPhotos$3)
    }
  };
});




/***/ }),

/***/ "./packages/block-editor/node_modules/uuid/dist/esm-browser/index.js":
/*!***************************************************************************!*\
  !*** ./packages/block-editor/node_modules/uuid/dist/esm-browser/index.js ***!
  \***************************************************************************/
/*! exports provided: v1, v3, v4, v5, NIL, version, validate, stringify, parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/v1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/v3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/v5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/nil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NIL", function() { return _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _version_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/validate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/parse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./packages/block-editor/node_modules/uuid/dist/esm-browser/md5.js":
/*!*************************************************************************!*\
  !*** ./packages/block-editor/node_modules/uuid/dist/esm-browser/md5.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["default"] = (md5);

/***/ }),

/***/ "./packages/block-editor/node_modules/uuid/dist/esm-browser/nil.js":
/*!*************************************************************************!*\
  !*** ./packages/block-editor/node_modules/uuid/dist/esm-browser/nil.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('00000000-0000-0000-0000-000000000000');

/***/ }),

/***/ "./packages/block-editor/node_modules/uuid/dist/esm-browser/parse.js":
/*!***************************************************************************!*\
  !*** ./packages/block-editor/node_modules/uuid/dist/esm-browser/parse.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/validate.js");


function parse(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ __webpack_exports__["default"] = (parse);

/***/ }),

/***/ "./packages/block-editor/node_modules/uuid/dist/esm-browser/regex.js":
/*!***************************************************************************!*\
  !*** ./packages/block-editor/node_modules/uuid/dist/esm-browser/regex.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./packages/block-editor/node_modules/uuid/dist/esm-browser/rng.js":
/*!*************************************************************************!*\
  !*** ./packages/block-editor/node_modules/uuid/dist/esm-browser/rng.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rng; });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./packages/block-editor/node_modules/uuid/dist/esm-browser/sha1.js":
/*!**************************************************************************!*\
  !*** ./packages/block-editor/node_modules/uuid/dist/esm-browser/sha1.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["default"] = (sha1);

/***/ }),

/***/ "./packages/block-editor/node_modules/uuid/dist/esm-browser/stringify.js":
/*!*******************************************************************************!*\
  !*** ./packages/block-editor/node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["default"] = (stringify);

/***/ }),

/***/ "./packages/block-editor/node_modules/uuid/dist/esm-browser/v1.js":
/*!************************************************************************!*\
  !*** ./packages/block-editor/node_modules/uuid/dist/esm-browser/v1.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/stringify.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ __webpack_exports__["default"] = (v1);

/***/ }),

/***/ "./packages/block-editor/node_modules/uuid/dist/esm-browser/v3.js":
/*!************************************************************************!*\
  !*** ./packages/block-editor/node_modules/uuid/dist/esm-browser/v3.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/md5.js");


var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v3);

/***/ }),

/***/ "./packages/block-editor/node_modules/uuid/dist/esm-browser/v35.js":
/*!*************************************************************************!*\
  !*** ./packages/block-editor/node_modules/uuid/dist/esm-browser/v35.js ***!
  \*************************************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNS", function() { return DNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringify.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/parse.js");



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ __webpack_exports__["default"] = (function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = Object(_parse_js__WEBPACK_IMPORTED_MODULE_1__["default"])(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});

/***/ }),

/***/ "./packages/block-editor/node_modules/uuid/dist/esm-browser/v4.js":
/*!************************************************************************!*\
  !*** ./packages/block-editor/node_modules/uuid/dist/esm-browser/v4.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "./packages/block-editor/node_modules/uuid/dist/esm-browser/v5.js":
/*!************************************************************************!*\
  !*** ./packages/block-editor/node_modules/uuid/dist/esm-browser/v5.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/sha1.js");


var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v5);

/***/ }),

/***/ "./packages/block-editor/node_modules/uuid/dist/esm-browser/validate.js":
/*!******************************************************************************!*\
  !*** ./packages/block-editor/node_modules/uuid/dist/esm-browser/validate.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./packages/block-editor/node_modules/uuid/dist/esm-browser/version.js":
/*!*****************************************************************************!*\
  !*** ./packages/block-editor/node_modules/uuid/dist/esm-browser/version.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./packages/block-editor/node_modules/uuid/dist/esm-browser/validate.js");


function version(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ __webpack_exports__["default"] = (version);

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*************************************!*\
  !*** external "regeneratorRuntime" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["regeneratorRuntime"]; }());

/***/ }),

/***/ "@novablocks/icons":
/*!***************************************!*\
  !*** external ["novablocks","icons"] ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["novablocks"]["icons"]; }());

/***/ }),

/***/ "@novablocks/utils":
/*!***************************************!*\
  !*** external ["novablocks","utils"] ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["novablocks"]["utils"]; }());

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

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

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["coreData"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["date"]; }());

/***/ }),

/***/ "@wordpress/dom":
/*!*****************************!*\
  !*** external ["wp","dom"] ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["dom"]; }());

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

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),

/***/ "@wordpress/viewport":
/*!**********************************!*\
  !*** external ["wp","viewport"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["viewport"]; }());

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map