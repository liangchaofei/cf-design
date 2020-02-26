"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.css");

var Tag = _react.default.memo(function (props) {
  var _a = props.closable,
      closable = _a === void 0 ? false : _a,
      _b = props.color,
      color = _b === void 0 ? 'blue' : _b,
      onClose = props.onClose,
      _c = props.text,
      text = _c === void 0 ? '标签' : _c;

  var tag = _react.default.createRef();

  var closeTag = function closeTag() {
    onClose && onClose(); // @ts-ignore

    tag.current.style.display = 'none';
  };

  return (// @ts-ignore
    _react.default.createElement("div", {
      ref: tag,
      className: (0, _classnames.default)('cfTagBox', color ? 'cfTagHasColor' : ''),
      style: {
        background: color
      }
    }, _react.default.createElement("span", {
      className: "cfTagText"
    }, text), closable && _react.default.createElement("span", {
      onClick: closeTag,
      className: "cfTagBtn"
    }, "x"))
  );
});

var _default = Tag;
exports.default = _default;