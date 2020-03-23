"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.css");

var Empty = _react.default.memo(function (props) {
  var className = props.className,
      src = props.src,
      text = props.text;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(className, 'cfEmptyBox')
  }, _react.default.createElement("div", {
    className: "cfEmptyImg"
  }, src ? _react.default.createElement("img", {
    src: src
  }) : _react.default.createElement(_Icon.default, {
    type: "FaBatteryEmpty"
  })), _react.default.createElement("div", {
    className: "cfEmptyTxt"
  }, text ? text : '空空的'));
});

var _default = Empty;
exports.default = _default;