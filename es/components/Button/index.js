import React from 'react';
import "./index.css";
var Button = React.memo(function (props) {
  var children = props.children,
      onClick = props.onClick,
      type = props.type,
      shape = props.shape,
      block = props.block;
  return React.createElement("div", {
    className: "cfBtn ripple " + type + " " + shape + " " + (block ? 'block' : ''),
    onClick: onClick
  }, children);
});
export default Button;