"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

var Spin = _react.default.memo(function (props) {
  var _a = props.isLoading,
      isLoading = _a === void 0 ? true : _a,
      _b = props.loadingText,
      loadingText = _b === void 0 ? '正在加载中...' : _b,
      _c = props.hiddenText,
      hiddenText = _c === void 0 ? false : _c,
      type = props.type,
      _d = props.bgColor,
      bgColor = _d === void 0 ? '#06c' : _d;
  var spinType = {
    line: 'line'
  };
  return isLoading ? _react.default.createElement("div", {
    className: "cfSpinBox"
  }, _react.default.createElement("div", {
    className: "cfSpinLoading ball-spin-fade-loader" + (spinType[type] ? ' ' + spinType[type] : ''),
    style: {
      backgroundColor: bgColor
    }
  }, _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null)), !hiddenText && _react.default.createElement("div", {
    className: "cfSpinTxt"
  }, loadingText)) : null;
});

var _default = Spin;
exports.default = _default;