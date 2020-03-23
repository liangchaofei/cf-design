"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.css");

var memo = _react.default.memo,
    useState = _react.default.useState,
    useEffect = _react.default.useEffect;
var Input = memo(function (props) {
  var icon = props.icon,
      defaultValue = props.defaultValue,
      id = props.id,
      className = props.className,
      _a = props.type,
      type = _a === void 0 ? 'text' : _a,
      value = props.value,
      onChange = props.onChange,
      style = props.style,
      autoFocus = props.autoFocus,
      _b = props.placeholder,
      placeholder = _b === void 0 ? '请输入内容' : _b,
      onIconClick = props.onIconClick;

  var textInput = _react.default.createRef();

  var handleChange = function handleChange(e) {
    onChange && onChange(e.target.value);
  };

  var handleIconClick = function handleIconClick() {
    onIconClick && onIconClick(textInput.current.value);
  };

  useEffect(function () {
    autoFocus && textInput.current.focus();
  }, []);
  return _react.default.createElement("div", {
    className: "cfInputBox"
  }, _react.default.createElement("input", {
    className: (0, _classnames.default)('cfInputInner', className),
    type: type,
    // @ts-ignore
    id: id,
    // @ts-ignore
    ref: textInput,
    style: style,
    placeholder: placeholder,
    value: value || typeof value === 'undefined' ? defaultValue : '',
    onChange: handleChange
  }), icon && _react.default.createElement("span", {
    className: "cfIconInput",
    onClick: handleIconClick
  }, icon));
});
var _default = Input;
exports.default = _default;