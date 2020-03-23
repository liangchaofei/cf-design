var __assign = this && this.__assign || function () {
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

var __read = this && this.__read || function (o, n) {
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

import React from 'react';
import "./index.css";
var useState = React.useState,
    useEffect = React.useEffect;
var Alert = React.memo(function (props) {
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
  return React.createElement("div", {
    className: "cfAlertBox " + typeStyle,
    style: __assign({
      display: visible ? "block" : "none"
    }, style)
  }, React.createElement("div", {
    className: "cfAlertMsg"
  }, message), React.createElement("div", {
    className: "cfAlertHelp"
  }, description), closable && React.createElement("span", {
    className: "cfAlertClose",
    onClick: closeCb
  }, closeText ? closeText : 'x'));
});
export default Alert;