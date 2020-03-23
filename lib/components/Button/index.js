"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

var Button = _react.default.memo(function (props) {
  var children = props.children,
      onClick = props.onClick,
      type = props.type,
      shape = props.shape,
      block = props.block,
      className = props.className;
  return _react.default.createElement("div", {
    className: "cfBtn ripple " + type + " " + shape + " " + (block === true ? 'block' : '') + " " + className,
    onClick: onClick
  }, children);
});

var _default = Button;
exports.default = _default;