"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rcNotification = _interopRequireDefault(require("rc-notification"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.css");

var _react = _interopRequireDefault(require("react"));

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

var cfNotification = function () {
  var notification = null;
  var adapterPos = {
    topLeft: {
      top: '24px',
      left: '24px'
    },
    topRight: {
      top: '24px',
      right: '24px'
    },
    bottomLeft: {
      bottom: '24px',
      left: '24px'
    },
    bottomRight: {
      bottom: '24px',
      right: '24px'
    }
  };
  var iconType = {
    success: 'FaRegCheckCircle',
    warning: 'FaRegMeh',
    info: 'FaRegLightbulb',
    error: 'FaRegTimesCircle'
  };
  var globalPlacement = '';
  /**
     * notice类型弹窗
     * @param {config}  object 通知框配置属性
     *   @param {type} string 通知窗类型
     *   @param {btn}  ReactNode 自定义关闭按钮
     *   @param {bottom}  number 消息从底部弹出时，距离底部的位置，单位像素
     *   @param {className}  string 自定义 CSS class
     *   @param {description}  string|ReactNode 通知提醒内容，必选
     *   @param {duration}  number 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭
     *   @param {getContainer}  HTMLNode 配置渲染节点的输出位置
     *   @param {icon}  ReactNode 自定义图标
     *   @param {key}  string 当前通知唯一标志
     *   @param {message}  string|ReactNode 通知提醒标题，必选
     *   @param {onClose}  func 点击默认关闭按钮时触发的回调函数
     *   @param {onClick}  func 点击通知时触发的回调函数
     *   @param {top}  number 消息从顶部弹出时，距离顶部的位置，单位像素
     *   @param {closeIcon}  ReactNode 自定义关闭图标
     */

  var pop = function pop(config) {
    var type = config.type,
        bottom = config.bottom,
        className = config.className,
        description = config.description,
        _a = config.duration,
        duration = _a === void 0 ? 4.5 : _a,
        _b = config.getContainer,
        getContainer = _b === void 0 ? function () {
      return document.body;
    } : _b,
        icon = config.icon,
        key = config.key,
        message = config.message,
        _onClose = config.onClose,
        _onClick = config.onClick,
        top = config.top,
        _c = config.closable,
        closable = _c === void 0 ? true : _c,
        closeIcon = config.closeIcon;
    notification.notice({
      content: _react.default.createElement("div", {
        className: (0, _classnames.default)('cfNotice', className)
      }, (icon || ['info', 'success', 'error', 'warning'].indexOf(type) > -1) && _react.default.createElement("div", {
        className: (0, _classnames.default)('iconWrap', type)
      }, // @ts-ignore
      icon ? icon : _react.default.createElement(_Icon.default, {
        type: iconType[type]
      })), _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "cfNoticeTit"
      }, message), _react.default.createElement("div", {
        className: "cfNoticeDesc"
      }, description))),
      key: key,
      closable: closable,
      getContainer: getContainer,
      onClose: function onClose() {
        _onClose && _onClose();
      },
      onClick: function onClick() {
        _onClick && _onClick();
      },
      closeIcon: closeIcon,
      duration: duration,
      style: {
        top: top,
        bottom: bottom
      }
    });
  };
  /**
     * 通知提示组件, 全局参数
     * @param {bottom} number 消息从底部弹出时，距离底部的位置，单位像素， 默认24
     * @param {duration} number 默认自动关闭延时，单位秒
     * @param {getContainer} HTMLNode 配置渲染节点的输出位置，默认document.body
     * @param {placement} string 弹出位置，可选 topLeft topRight bottomLeft bottomRight
     * @param {top} number 消息从顶部弹出时，距离顶部的位置，单位像素
     * @param {closeIcon} HTMLNode 自定义关闭图标
  */


  var config = function config(_config) {
    var duration = _config.duration,
        getContainer = _config.getContainer,
        placement = _config.placement,
        closeIcon = _config.closeIcon; // 赋值给全局的placement

    globalPlacement = placement;

    _rcNotification.default.newInstance({
      // @ts-ignore
      style: __assign({}, adapterPos[placement]),
      getContainer: getContainer,
      // @ts-ignore
      duration: duration || 4.5,
      closeIcon: closeIcon
    }, function (notice) {
      return notification = notice;
    });
  };

  var remove = function remove(key) {
    notification.removeNotice(key);
  };

  var destroy = function destroy() {
    notification.destroy();
  };

  if (notification) {
    return {
      config: config,
      pop: pop,
      remove: remove,
      destroy: destroy
    };
  } // 如果为创建实例，则创建默认实例


  _rcNotification.default.newInstance({
    style: {
      right: '24px',
      top: '24px'
    }
  }, function (notice) {
    return notification = notice;
  });

  return {
    config: config,
    pop: pop,
    remove: remove,
    destroy: destroy
  };
}();

var _default = cfNotification;
exports.default = _default;