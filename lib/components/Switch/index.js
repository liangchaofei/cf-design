"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.css");

var Siwtch = _react.default.memo(function (props) {
  var checked = props.checked,
      disabled = props.disabled,
      onText = props.onText,
      offText = props.offText,
      onChange = props.onChange,
      size = props.size,
      _a = props.color,
      color = _a === void 0 ? '#09f' : _a;

  var handleChange = function handleChange(e) {
    e.persist();
    onChange && onChange(e.target.checked);
  };

  return _react.default.createElement("div", {
    className: (0, _classnames.default)('xSwitch')
  }, _react.default.createElement("label", {
    className: (0, _classnames.default)('xSwitchInner', size),
    // @ts-ignore
    style: {
      pointerEvents: disabled ? 'none' : 'default',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, _react.default.createElement("input", {
    type: 'checkbox',
    checked: checked,
    onChange: handleChange
  }), _react.default.createElement("span", {
    className: "xSwitchAnimatingNode",
    style: {
      backgroundColor: color
    },
    "data-onText": onText
  }), _react.default.createElement("span", {
    className: "offText"
  }, offText)));
});

var _default = Siwtch;
exports.default = _default;