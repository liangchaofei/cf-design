import React from 'react';
import "./index.css";
var Spin = React.memo(function (props) {
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
  return isLoading ? React.createElement("div", {
    className: "cfSpinBox"
  }, React.createElement("div", {
    className: "cfSpinLoading ball-spin-fade-loader" + (spinType[type] ? ' ' + spinType[type] : ''),
    style: {
      backgroundColor: bgColor
    }
  }, React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null)), !hiddenText && React.createElement("div", {
    className: "cfSpinTxt"
  }, loadingText)) : null;
});
export default Spin;