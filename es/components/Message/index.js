import Notification from 'rc-notification';
import Icon from '../Icon';
import classnames from 'classnames';
import 'rc-notification/assets/index.css';
import "./index.css";
import React from 'react';

var Message = function () {
  var message = null;
  var iconType = {
    success: 'FaRegCheckCircle',
    warning: 'FaRegMeh',
    info: 'FaRegLightbulb',
    error: 'FaRegTimesCircle'
  };
  /**
   * notice类型弹窗
   * @param {config}   提示框配置属性
   *   @param {type} string 提示窗类型
   *   @param {btn}  ReactNode 自定义关闭按钮
   *   @param {className}  string 自定义 CSS class
   *   @param {duration}   默认 4.5 秒后自动关闭，配置为 null 则不自动关闭
   *   @param {getContainer}  HTMLNode 配置渲染节点的输出位置
   *   @param {icon}  ReactNode 自定义图标
   *   @param {key}  string 当前提示唯一标志
   *   @param {content}  string|ReactNode 提示标题，必选
   *   @param {onClose}  func 点击默认关闭按钮时触发的回调函数
   *   @param {onClick}  func 点击提示时触发的回调函数
   *   @param {top}  number 消息从顶部弹出时，距离顶部的位置，单位像素
   *   @param {closeIcon}   自定义关闭图标
   */

  var pop = function pop(props) {
    var type = props.type,
        className = props.className,
        _a = props.duration,
        duration = _a === void 0 ? 4.5 : _a,
        _b = props.getContainer,
        getContainer = _b === void 0 ? function () {
      return document.body;
    } : _b,
        icon = props.icon,
        key = props.key,
        content = props.content,
        _onClose = props.onClose,
        _onClick = props.onClick,
        top = props.top,
        _c = props.closable,
        closable = _c === void 0 ? true : _c,
        closeIcon = props.closeIcon;
    message.notice({
      content: React.createElement("div", {
        className: classnames('cfMessage', className)
      }, (icon || ['info', 'success', 'error', 'warning'].indexOf(type) > -1) && React.createElement("div", {
        className: classnames('iconWrap', type)
      }, // @ts-ignore
      icon ? icon : React.createElement(Icon, {
        type: iconType[type]
      })), React.createElement("div", {
        className: "cfNoticeTitle"
      }, content)),
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
        top: top
      }
    });
  };
  /**
      * 提示提示组件, 全局参数
      * @param {duration} number 默认自动关闭延时，单位秒
      * @param {getContainer} HTMLNode 配置渲染节点的输出位置，默认document.body
      * @param {closeIcon} HTMLNode 自定义关闭图标
  */


  var config = function config(_config) {
    var duration = _config.duration,
        getContainer = _config.getContainer,
        closeIcon = _config.closeIcon;
    Notification.newInstance({
      getContainer: getContainer,
      // @ts-ignore
      duration: duration || 4.5,
      closeIcon: closeIcon
    }, function (notice) {
      return message = notice;
    });
  };

  var remove = function remove(key) {
    message.removeNotice(key);
  };

  var destroy = function destroy() {
    message.destroy();
  };

  if (message) {
    return {
      pop: pop,
      config: config,
      remove: remove,
      destroy: destroy
    };
  } // 如果为创建实例，则创建默认实例


  Notification.newInstance({}, function (notice) {
    return message = notice;
  });
  return {
    pop: pop,
    remove: remove,
    config: config,
    destroy: destroy
  };
}();

export default Message;