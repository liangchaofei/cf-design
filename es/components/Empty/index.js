import React from 'react';
import Icon from '../Icon';
import classnames from 'classnames';
import "./index.css";
var Empty = React.memo(function (props) {
  var className = props.className,
      src = props.src,
      text = props.text;
  return React.createElement("div", {
    className: classnames(className, 'cfEmptyBox')
  }, React.createElement("div", {
    className: "cfEmptyImg"
  }, src ? React.createElement("img", {
    src: src
  }) : React.createElement(Icon, {
    type: "FaBatteryEmpty"
  })), React.createElement("div", {
    className: "cfEmptyTxt"
  }, text ? text : '空空的'));
});
export default Empty;