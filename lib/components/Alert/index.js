"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var useState = _react.default.useState,
    useEffect = _react.default.useEffect;

var Alert = _react.default.memo(function (props) {
  var _a = props.type,
      type = _a === void 0 ? 'warn' : _a,
      _b = props.closable,
      closable = _b === void 0 ? false : _b,
      message = props.message,
      description = props.description,
      closeText = props.closeText,
      onClose = props.onClose,
      style = props.style;

  var _c = __read(useState(true), 2),
      visible = _c[0],
      setVisible = _c[1];

  var closeCb = function closeCb() {
    setVisible(false);
    onClose && onClose();
  };

  var _d = __read(useState('success'), 2),
      typeStyle = _d[0],
      setType = _d[1];

  useEffect(function () {
    switch (type) {
      case 'success':
        setType('cfAlertSuccessStyle');
        break;

      case 'error':
        setType('cfAlertErrorStyle');
        break;

      case 'info':
        setType('cfAlertInfoStyle');
        break;

      case "warn":
        setType('cfAlertWarnStyle');
        break;

      default:
        setType('cfAlertSuccessStyle');
        break;
    }
  }, [typeStyle]);
  return _react.default.createElement("div", {
    className: "cfAlertBox " + typeStyle,
    style: __assign({
      display: visible ? "block" : "none"
    }, style)
  }, _react.default.createElement("div", {
    className: "cfAlertMsg"
  }, message), _react.default.createElement("div", {
    className: "cfAlertHelp"
  }, description), closable && _react.default.createElement("span", {
    className: "cfAlertClose",
    onClick: closeCb
  }, closeText ? closeText : 'x'));
});

var _default = Alert;
exports.default = _default;