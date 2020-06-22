'use strict';

exports.__esModule = true;
exports.PlausibleAnalytics = PlausibleAnalytics;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadScript(domain) {
  var script = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'https://plausible.io/js/plausible.js';

  if (window.plausible) {
    return console.warn('[react-plausible] Plausible has already been loaded!');
  }
  var plausible = document.createElement('script');
  plausible.async = true;
  plausible.type = 'text/javascript';
  plausible.src = script;
  plausible.dataset.domain = domain;

  var head = document.getElementsByTagName('head')[0];
  head.appendChild(plausible);
}

function initPlausible(_ref) {
  var id = _ref.id,
      queuedCustomEvents = _ref.queuedCustomEvents,
      domain = _ref.domain,
      script = _ref.script;

  if (window.plausible || !id) {
    return;
  }

  // Snippet copied from the Plausible.io documentation.
  window.plausible = window.plausible || function () {
    (window.plausible.q = window.plausible.q || []).push(arguments);
  };

  loadScript(domain, script);

  if (queuedCustomEvents) {
    for (var _iterator = queuedCustomEvents, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref2 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref2 = _i.value;
      }

      var customEvent = _ref2;

      plausible(customEvent);
    }
  }
}

function PlausibleAnalytics(props) {
  (0, _react.useEffect)(function () {
    initPlausible({
      id: props.id,
      queuedCustomEvents: props.queuedCustomEvents,
      plausibleHost: props.plausibleHost,
      domain: props.domain,
      script: props.script
    });
  }, []);

  return props.children;
}

PlausibleAnalytics.propTypes = {
  id: _propTypes2.default.string,
  queuedCustomEvents: _propTypes2.default.arrayOf(_propTypes2.default.string),
  children: _propTypes2.default.node,
  plausibleHost: _propTypes2.default.string,
  script: _propTypes2.default.string
};