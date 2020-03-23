"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../Button"));

var _Icon = _interopRequireDefault(require("../Icon"));

require("./index.css");

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

var hiddenCount = 0;

var Modal = _react.default.memo(function (props) {
  var afterClose = props.afterClose,
      bodyStyle = props.bodyStyle,
      _a = props.cancelText,
      cancelText = _a === void 0 ? '取消' : _a,
      centered = props.centered,
      _b = props.closable,
      closable = _b === void 0 ? true : _b,
      closeIcon = props.closeIcon,
      destroyOnClose = props.destroyOnClose,
      footer = props.footer,
      keyboard = props.keyboard,
      _c = props.mask,
      mask = _c === void 0 ? true : _c,
      _d = props.maskclosable,
      maskclosable = _d === void 0 ? true : _d,
      maskStyle = props.maskStyle,
      _e = props.okText,
      okText = _e === void 0 ? '确认' : _e,
      title = props.title,
      _f = props.visible,
      visible = _f === void 0 ? false : _f,
      _g = props.width,
      width = _g === void 0 ? '520px' : _g,
      onCancel = props.onCancel,
      onOk = props.onOk,
      children = props.children;

  var _h = __read((0, _react.useState)(!visible), 2),
      isHidden = _h[0],
      setHidden = _h[1];

  var _j = __read((0, _react.useState)(false), 2),
      destroyChild = _j[0],
      setDestroyChild = _j[1];

  var hiddenModal = function hiddenModal(cb) {
    setHidden(function () {
      cb && cb();
      return true;
    });

    if (destroyOnClose) {
      setDestroyChild(true);
    }

    document.body.style.overflow = 'auto';
  };

  var handleClose = function handleClose() {
    hiddenModal(onCancel);
  };

  var handleOk = function handleOk() {
    hiddenModal(onOk);
  };

  var toggle = function toggle() {
    setHidden(function (prev) {
      return !prev;
    });
  };

  var closeModal = function closeModal(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];

    if (e && e.keyCode === 27) {
      handleClose();
    }
  };

  (0, _react.useEffect)(function () {
    if (isHidden && hiddenCount) {
      hiddenCount = 0;
      afterClose && afterClose();
    }

    hiddenCount = 1;
  }, [isHidden]);
  (0, _react.useEffect)(function () {
    if (!isHidden) {
      document.body.style.overflow = 'hidden';
    }
  }, [isHidden]);
  (0, _react.useEffect)(function () {
    if (visible) {
      if (destroyOnClose) {
        setDestroyChild(true);
      }
    }
  }, [visible, destroyOnClose]);
  (0, _react.useEffect)(function () {
    keyboard && document.addEventListener('keydown', closeModal, false);
    return function () {
      keyboard && document.removeEventListener('keydown', closeModal, false);
    };
  }, []);
  return _react.default.createElement("div", {
    className: "xModalWrap",
    style: {
      display: isHidden ? 'none' : 'block'
    }
  }, _react.default.createElement("div", {
    className: "xModalContent" + (centered ? ' xCentered' : ''),
    style: {
      width: width
    }
  }, _react.default.createElement("div", {
    className: "xModalHeader"
  }, _react.default.createElement("div", {
    className: "xModalTitle"
  }, title)), closable && _react.default.createElement("span", {
    className: "xModalCloseBtn",
    onClick: handleClose
  }, closeIcon || _react.default.createElement(_Icon.default, {
    type: "FaTimes"
  })), _react.default.createElement("div", {
    className: "xModalBody",
    style: bodyStyle
  }, destroyChild ? null : children), footer === null ? null : _react.default.createElement("div", {
    className: "xModalFooter"
  }, footer ? footer : _react.default.createElement("div", {
    className: "xFooterBtn"
  }, _react.default.createElement(_Button.default, {
    className: "xFooterBtnCancel",
    onClick: handleClose,
    type: "pure"
  }, cancelText), _react.default.createElement(_Button.default, {
    className: "xFooterBtnOk",
    onClick: handleOk
  }, okText)))), mask && _react.default.createElement("div", {
    className: "xModalMask",
    style: maskStyle,
    // @ts-ignore
    onClick: maskclosable && handleClose
  }));
});

var _default = Modal;
exports.default = _default;