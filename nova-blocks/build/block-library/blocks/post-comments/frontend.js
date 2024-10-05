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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/post-comments/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/block-library/build/blocks/post-comments/frontend.js":
/*!***********************************************************************!*\
  !*** ./packages/block-library/build/blocks/post-comments/frontend.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! @novablocks/icons */ "@novablocks/icons");

var COPY_LINK_SELECTOR = '.copy-comment-link';
var NOTIFICATION_VISIBLE_CLASS = 'notification--is-visible';

(function ($, window, undefined) {
  var $conversationsBlock = $('.novablocks-conversations'),
      $commentList = $('.comment-list'),
      $commentDropdown = $commentList.find('.comment-dropdown').children(),
      $commentCheckboxes = $commentList.find(' .comment-dropdown-open');
  var $notification = $('.novablocks-conversations__notification-text');
  bindEvents();
  highlightCommentOnClick();

  function bindEvents() {
    // Close comment "More" dropdown when clicking anywhere outside of it.
    $(document).on('click', handleCommentDropdownState); // Handle comment direct link copying to the clipboard.

    $commentList.on('click', COPY_LINK_SELECTOR, copyLinkToClipboard);
  }

  function highlightCommentOnClick() {
    $commentList.on('click', '.toggle-comment-highlight', function () {
      var $this = $(this),
          commentId = $this.data('comment_id'),
          wrapperSelector = '#wrapper-comment-' + commentId,
          $commentWrapper = $(wrapperSelector); // Put the whole comment in a working/loading state.

      $commentWrapper.addClass('working');
      $.ajax({
        url: nb_comments.ajaxUrl,
        type: 'POST',
        data: {
          'action': nb_comments.actions.toggleHighlight,
          'comment_id': commentId,
          'commentsListArgs': typeof nb_comments.commentsListArgs !== 'undefined' ? nb_comments.commentsListArgs : [],
          'nonce': $this.data('nonce')
        },
        success: function success(response) {
          // Replace the current comment markup with the received one.
          // But only replace the comment wrapper while leaving child comments intact.
          var $newComment = $($.parseHTML(response));
          $commentWrapper.replaceWith($newComment.find(wrapperSelector)); // Reinitialize stuff

          $commentDropdown = $commentList.find('.comment-dropdown').children();
          $commentCheckboxes = $commentList.find(' .comment-dropdown-open');
        },
        error: function error(response) {// In the response we should get back some error markup. We should display this.
        },
        complete: function complete() {
          // There should be no working state.
          $commentWrapper.removeClass('working');
        }
      });
      return false;
    });
  }

  function handleCommentDropdownState(event) {
    // If checkbox is not available, do nothing.
    if (!$commentCheckboxes.length) {
      return;
    }

    if (!$(event.target).is($commentDropdown)) {
      $commentCheckboxes.prop('checked', false);
    }
  }

  function copyLinkToClipboard(event) {
    event.preventDefault();
    var copyText = $(this).attr('href'),
        succeeded;
    $notification.removeClass(NOTIFICATION_VISIBLE_CLASS);
    document.addEventListener('copy', function (e) {
      e.clipboardData.setData('text/plain', copyText);
      e.preventDefault();
    }, true);

    try {
      succeeded = document.execCommand('copy');
    } catch (err) {
      succeeded = false;
    }

    if (succeeded) {
      setTimeout(function () {
        $notification.addClass(NOTIFICATION_VISIBLE_CLASS);
      }, 0);
    }
  }
})(jQuery, window);


/***/ }),

/***/ "@novablocks/icons":
/*!***************************************!*\
  !*** external ["novablocks","icons"] ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["novablocks"]["icons"]; }());

/***/ })

/******/ });
//# sourceMappingURL=frontend.js.map