"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var Fa = _interopRequireWildcard(require("react-icons/fa"));

require("./index.css");

var Icon = _react.default.memo(function (props) {
  var type = props.type,
      size = props.size,
      rotation = props.rotation,
      style = props.style; // @ts-ignore

  var IconComponent = Fa[type];
  return _react.default.createElement(IconComponent, {
    size: size,
    rotation: rotation,
    style: style
  });
});

var _default = Icon;
exports.default = _default;