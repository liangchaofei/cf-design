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
      text = props.text;
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
    className: "badge " + (dot ? 'badgeDot' : ''),
    style: {
      right: offset ? offset[0] + 'px' : '',
      top: offset ? offset[1] + 'px' : '',
      display: !showZero && !count ? 'none' : 'inline-block'
    }
  }, !dot && (overflowCount && overflowCount < count ? overflowCount + "+" : count)), text));
});
export default Badge;