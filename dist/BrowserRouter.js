'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _Plausible = require('./Plausible');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlausibleBrowserRouter = function (_Component) {
  _inherits(PlausibleBrowserRouter, _Component);

  function PlausibleBrowserRouter() {
    _classCallCheck(this, PlausibleBrowserRouter);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  PlausibleBrowserRouter.prototype.getChildContext = function getChildContext() {
    return {
      history: this.history
    };
  };

  PlausibleBrowserRouter.prototype.componentWillMount = function componentWillMount() {
    var _props = this.props,
        history = _props.history,
        basename = _props.basename,
        forceRefresh = _props.forceRefresh,
        getUserConfirmation = _props.getUserConfirmation,
        keyLength = _props.keyLength;


    this.history = history || (0, _createBrowserHistory2.default)(basename, forceRefresh, getUserConfirmation, keyLength);
  };

  PlausibleBrowserRouter.prototype.render = function render() {
    var _props2 = this.props,
        domain = _props2.domain,
        script = _props2.script,
        queuedCustomEvents = _props2.queuedCustomEvents,
        children = _props2.children;


    return _react2.default.createElement(
      _reactRouterDom.Router,
      { history: this.history },
      _react2.default.createElement(
        _Plausible.PlausibleAnalytics,
        { domain: domain, queuedCustomEvents: queuedCustomEvents, script: script },
        children
      )
    );
  };

  return PlausibleBrowserRouter;
}(_react.Component);

PlausibleBrowserRouter.propTypes = _extends({}, _reactRouterDom.BrowserRouter.propTypes, {
  history: _propTypes2.default.object,
  children: _propTypes2.default.node,
  id: _propTypes2.default.string.isRequired,
  queuedCustomEvents: _propTypes2.default.arrayOf(_propTypes2.default.object),
  domain: _propTypes2.default.string,
  script: _propTypes2.default.string
});
PlausibleBrowserRouter.childContextTypes = {
  history: _propTypes2.default.object.isRequired
};
exports.default = PlausibleBrowserRouter;
module.exports = exports['default'];