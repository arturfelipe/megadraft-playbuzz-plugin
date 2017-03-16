"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _loadScript = require("load-script");

var _loadScript2 = _interopRequireDefault(_loadScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2017, Globo.com (https://github.com/globocom)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var PlayBuzz = function (_Component) {
  _inherits(PlayBuzz, _Component);

  function PlayBuzz() {
    _classCallCheck(this, PlayBuzz);

    return _possibleConstructorReturn(this, (PlayBuzz.__proto__ || Object.getPrototypeOf(PlayBuzz)).apply(this, arguments));
  }

  _createClass(PlayBuzz, [{
    key: "loadWidget",
    value: function loadWidget() {
      if (window.PlayBuzz) {
        return;
      }
      (0, _loadScript2.default)('//cdn.playbuzz.com/widget/feed.js', function (err, script) {
        if (err) {}
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.url) {
        return null;
      }

      this.loadWidget();

      return _react2.default.createElement(
        "div",
        { className: "playbuzz" },
        _react2.default.createElement("div", { className: "pb_feed",
          "data-game": this.props.url,
          "data-recommend": "false",
          "data-game-info": "false",
          "data-comments": "false",
          "data-shares": "false" })
      );
    }
  }]);

  return PlayBuzz;
}(_react.Component);

exports.default = PlayBuzz;