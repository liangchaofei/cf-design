import React from 'react';
import * as Fa from 'react-icons/fa';
import "./index.css";
var Icon = React.memo(function (props) {
  var type = props.type,
      size = props.size,
      rotation = props.rotation,
      style = props.style; // @ts-ignore

  var IconComponent = Fa[type];
  return React.createElement(IconComponent, {
    size: size,
    rotation: rotation,
    style: style
  });
});
export default Icon;