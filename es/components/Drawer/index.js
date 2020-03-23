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
import ReactDOM from 'react-dom';
import "./index.css";
var memo = React.memo,
    useState = React.useState,
    useEffect = React.useEffect;
var Drawer = memo(function (props) {
  var _a;

  var _b = props.closable,
      closable = _b === void 0 ? true : _b,
      destroyOnClose = props.destroyOnClose,
      _c = props.getContainer,
      getContainer = _c === void 0 ? document.body : _c,
      _d = props.maskClosable,
      maskClosable = _d === void 0 ? true : _d,
      _e = props.mask,
      mask = _e === void 0 ? true : _e,
      drawerStyle = props.drawerStyle,
      _f = props.width,
      width = _f === void 0 ? 300 : _f,
      _g = props.zIndex,
      zIndex = _g === void 0 ? 10 : _g,
      _h = props.placement,
      placement = _h === void 0 ? 'right' : _h,
      onClose = props.onClose,
      children = props.children;

  var _j = __read(useState(props.visible), 2),
      visible = _j[0],
      setVisible = _j[1];

  var _k = __read(useState(false), 2),
      isDesChild = _k[0],
      setIsDesChild = _k[1];

  var handleClose = function handleClose() {
    onClose && onClose();
    setVisible(function (prev) {
      if (getContainer !== false && prev) {
        getContainer.style.overflow = 'auto';
      }

      return false;
    });

    if (destroyOnClose) {
      setIsDesChild(true);
    }
  };

  useEffect(function () {
    setVisible(function () {
      if (getContainer !== false && props.visible) {
        getContainer.style.overflow = 'hidden';
      }

      return props.visible;
    });
    setIsDesChild(false);
  }, [props.visible, getContainer]);
  var childDom = React.createElement("div", {
    className: "cfDrawerBox",
    style: {
      position: getContainer === false ? 'absolute' : 'fixed',
      width: visible ? '100%' : 0,
      zIndex: zIndex
    }
  }, "// @ts-ignore", !!mask && React.createElement("div", {
    className: "cfDrawerMask",
    onClick: maskClosable ? handleClose : null
  }), React.createElement("div", {
    className: "cfDrawerContent",
    style: __assign((_a = {
      width: width
    }, _a[placement] = visible ? 0 : '-100%', _a), drawerStyle)
  }, isDesChild ? null : children, !!closable && React.createElement("span", {
    className: "cfCloseBtn",
    onClick: handleClose
  }, "X")));
  return getContainer === false ? childDom : ReactDOM.createPortal(childDom, getContainer);
});
export default Drawer;