"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

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

var useState = _react.default.useState,
    useEffect = _react.default.useEffect;
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

  var _h = __read(useState(!visible), 2),
      isHidden = _h[0],
      setHidden = _h[1];

  var _j = __read(useState(false), 2),
      destroyChild = _j[0],
      setDestoryChild = _j[1];

  var handleClose = function handleClose() {
    hiddenModal(onCancel);
  };

  useEffect(function () {
    if (visible && destroyOnClose) {
      setDestoryChild(true);
    }
  }, [visible, destroyOnClose]);

  var closeModal = function closeModal(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];

    if (e && e.keyCode === 27) {
      handleClose();
    }
  };

  useEffect(function () {
    document.addEventListener('keydown', closeModal, false);
    return function () {
      document.removeEventListener('keydown', closeModal, false);
    };
  }, []);
  useEffect(function () {
    if (isHidden && hiddenCount) {
      hiddenCount = 0;
      afterClose && afterClose();
    }

    hiddenCount = 1;
  }, [isHidden]);
  useEffect(function () {
    if (!isHidden) {
      document.body.style.overflow = 'hidden';
    }
  }, [isHidden]);

  var hiddenModal = function hiddenModal(cb) {
    setHidden(function () {
      cb && cb();
      return true;
    });

    if (destroyOnClose) {
      setDestoryChild(true);
    }

    document.body.style.overflow = 'auto';
  }; // 成功回调


  var handleOk = function handleOk() {
    hiddenModal(true);
  };

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
    className: "xModalCloseBtn"
  }, closeIcon), _react.default.createElement("div", {
    className: "xModalBody",
    style: bodyStyle
  }, destroyChild ? null : children), footer === null ? null : _react.default.createElement("div", {
    className: "xModalFooter"
  }, footer ? footer : _react.default.createElement("div", {
    className: "xFooterBtn"
  }, _react.default.createElement("div", {
    className: "xFooterBtnCancel",
    onClick: handleClose
  }, cancelText), _react.default.createElement("div", {
    className: "xFooterBtnOk",
    onClick: handleOk
  }, okText)))), mask && _react.default.createElement("div", {
    className: "xModalMask",
    style: maskStyle,
    onClick: maskclosable && handleClose
  }));
});

var _default = Modal;
exports.default = _default;