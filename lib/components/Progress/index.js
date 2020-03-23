"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

// 升序排序
var sortArr = function sortArr(arr) {
  return arr.sort(function (a, b) {
    return a[0] - b[0];
  });
}; // 检测值所对应的进度条颜色状态


function checkStatus(scope, val, defaultColor) {
  val = +val; // 从小到大排序

  sortArr(scope);

  if (scope.length === 1) {
    return val < scope[0][0] ? scope[0][1] : defaultColor;
  } else if (scope.length === 2) {
    return val < scope[0][0] ? scope[0][1] : scope[0][0] < val && val < scope[1][0] ? scope[1][1] : defaultColor;
  } else if (scope.length === 3) {
    return val < scope[0][0] ? scope[0][1] : scope[0][0] < val && val < scope[1][0] ? scope[1][1] : scope[1][0] < val && val < scope[2][0] ? scope[2][1] : defaultColor;
  }
}

var Progress = _react.default.memo(function (props) {
  var _a = props.themeColor,
      themeColor = _a === void 0 ? 'blue' : _a,
      percent = props.percent,
      autoHidden = props.autoHidden,
      _b = props.hiddenText,
      hiddenText = _b === void 0 ? false : _b,
      _c = props.width,
      width = _c === void 0 ? '100px' : _c,
      textColor = props.textColor,
      statusScope = props.statusScope;
  return autoHidden && percent === 100 ? null : _react.default.createElement("div", {
    className: "cfProcessBox"
  }, _react.default.createElement("div", {
    className: "cfProcessBar",
    style: {
      width: typeof width === 'number' ? width + 'px' : width
    }
  }, _react.default.createElement("div", {
    className: "cfProcessBarTwo",
    style: {
      width: percent + "%",
      backgroundColor: statusScope && statusScope.length ? checkStatus(statusScope, percent, themeColor) : themeColor
    }
  })), !hiddenText && _react.default.createElement("span", {
    className: "cfProcessNum",
    style: {
      color: textColor
    }
  }, percent, "%"));
});

var _default = Progress;
exports.default = _default;