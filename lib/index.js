"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/**
 * React Facebook Pixel Module
 *
 * @package react-facebook-pixel
 * @author  Zain Sajjad <zsajjad93@gmail.com>
 */

//
var initialized = false;
var debug = false;

/**
 * Utilities
 */

/**
 * Warn
 * @param  {...any} args
 */
var warn = function warn() {
  var _console;
  if (!debug) {
    return;
  }
  // eslint-disable-next-line no-console
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  (_console = console).info.apply(_console, _toConsumableArray(['[react-facebook-pixel]'].concat(args)));
};

/**
 * Log
 * @param  {...any} args
 */
var log = function log() {
  var _console2;
  if (!debug) {
    return;
  }
  // eslint-disable-next-line no-console
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  (_console2 = console).info.apply(_console2, _toConsumableArray(['[react-facebook-pixel]'].concat(args)));
};
var verifyInit = function verifyInit() {
  if (!initialized) {
    warn('Pixel not initialized before using call ReactPixel.init with required params');
  }
  return initialized;
};

//
var defaultOptions = {
  autoConfig: true,
  debug: false
};

//
var _default = {
  init: function init(pixelId) {
    var advancedMatching = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultOptions;
    if (typeof window === 'undefined') {
      initialized = false;
      return;
    }
    initialized = window && !!window.fbq;
    /* eslint-disable */
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */

    if (!pixelId) {
      warn('Please insert pixel id for initializing');
    } else {
      if (options.autoConfig === false) {
        fbq('set', 'autoConfig', false, pixelId); // eslint-disable-line no-undef
      }

      fbq('init', pixelId, advancedMatching); // eslint-disable-line no-undef

      initialized = true;
      debug = options.debug;
    }
  },
  pageView: function pageView() {
    if (!verifyInit()) {
      return;
    }
    fbq('track', 'PageView'); // eslint-disable-line no-undef

    if (debug) {
      log("called fbq('track', 'PageView');");
    }
  },
  track: function track(title, data, eventData) {
    if (!verifyInit()) {
      return;
    }
    fbq('track', title, data, eventData); // eslint-disable-line no-undef

    if (debug) {
      log("called fbq('track', '".concat(title, "');"));
      if (data) {
        log('with data', data);
      }
      if (eventData) {
        log('with eventData', eventData);
      }
    }
  },
  trackSingle: function trackSingle(pixel, title, data, eventData) {
    if (!verifyInit()) {
      return;
    }
    fbq('trackSingle', pixel, title, data, eventData); // eslint-disable-line no-undef

    if (debug) {
      log("called fbq('trackSingle', '".concat(pixel, "', '").concat(title, "');"));
      if (data) {
        log('with data', data);
      }
      if (eventData) {
        log('with eventData', eventData);
      }
    }
  },
  trackCustom: function trackCustom(event, data, eventData) {
    if (!verifyInit()) {
      return;
    }
    fbq('trackCustom', event, data, eventData); // eslint-disable-line no-undef

    if (debug) {
      log("called fbq('trackCustom', '".concat(event, "');"));
      if (data) {
        log('with data', data);
      }
      if (eventData) {
        log('with eventData', eventData);
      }
    }
  },
  trackSingleCustom: function trackSingleCustom(pixel, event, data, eventData) {
    if (!verifyInit()) {
      return;
    }
    fbq('trackSingle', pixel, event, data, eventData); // eslint-disable-line no-undef

    if (debug) {
      log("called fbq('trackSingleCustom', '".concat(pixel, "', '").concat(event, "');"));
      if (data) {
        log('with data', data);
      }
      if (eventData) {
        log('with eventData', eventData);
      }
    }
  },
  grantConsent: function grantConsent() {
    if (!verifyInit()) {
      return;
    }
    fbq('consent', 'grant');
    if (debug) {
      log("called fbq('consent', 'grant');");
    }
  },
  revokeConsent: function revokeConsent() {
    if (!verifyInit()) {
      return;
    }
    fbq('consent', 'revoke');
    if (debug) {
      log("called fbq('consent', 'revoke');");
    }
  },
  fbq: function (_fbq) {
    function fbq() {
      return _fbq.apply(this, arguments);
    }
    fbq.toString = function () {
      return _fbq.toString();
    };
    return fbq;
  }(function () {
    if (!verifyInit()) {
      return;
    }
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    fbq.apply(void 0, args); // eslint-disable-line no-undef

    if (debug) {
      log("called fbq('".concat(args.slice(0, 2).join("', '"), "')"));
      if (args[2]) {
        log('with data', args[2]);
      }
    }
  })
};
exports["default"] = _default;
//# sourceMappingURL=index.js.map