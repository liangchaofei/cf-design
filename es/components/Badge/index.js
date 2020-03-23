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

import React from 'react';
import "./index.css";
var colorArr = {
  'success': '#52c41a',
  'warning': '#faad14',
  'error': '#f5222d',
  'default': '#d9d9d9',
  'processing': '#1890ff'
};
var Badge = React.memo(function (props) {
  var color = props.color,
      count = props.count,
      dot = props.dot,
      offset = props.offset,
      overflowCount = props.overflowCount,
      showZero = props.showZero,
      status = props.status,
      text = props.text,
      style = props.style;
  return React.createElement("div", {
    className: "cfBadgeWrap"
  }, status || color ? React.createElement("div", {
    className: "statusDotWrap"
  }, React.createElement("span", {
    className: "dot",
    style: {
      backgroundColor: color || colorArr[status] || colorArr.default
    }
  }), text) : React.createElement("div", null, React.createElement("span", {
    className: "badge  " + (dot ? 'badgeDot' : ''),
    style: __assign({
      right: offset ? offset[0] + 'px' : '',
      top: offset ? offset[1] + 'px' : '',
      display: !showZero && !count ? 'none' : 'inline-block'
    }, style)
  }, !dot && (overflowCount && overflowCount < count ? overflowCount + "+" : count)), text));
});
export default Badge;