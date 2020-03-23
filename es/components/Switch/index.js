import React from 'react';
import classnames from 'classnames';
import "./index.css";
var Siwtch = React.memo(function (props) {
  var checked = props.checked,
      disabled = props.disabled,
      onText = props.onText,
      offText = props.offText,
      onChange = props.onChange,
      size = props.size,
      _a = props.color,
      color = _a === void 0 ? '#09f' : _a;

  var handleChange = function handleChange(e) {
    e.persist();
    onChange && onChange(e.target.checked);
  };

  return React.createElement("div", {
    className: classnames('xSwitch')
  }, React.createElement("label", {
    className: classnames('xSwitchInner', size),
    // @ts-ignore
    style: {
      pointerEvents: disabled ? 'none' : 'default',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, React.createElement("input", {
    type: 'checkbox',
    checked: checked,
    onChange: handleChange
  }), React.createElement("span", {
    className: "xSwitchAnimatingNode",
    style: {
      backgroundColor: color
    },
    "data-onText": onText
  }), React.createElement("span", {
    className: "offText"
  }, offText)));
});
export default Siwtch;