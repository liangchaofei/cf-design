import React from 'react';
import classnames from 'classnames';
import "./index.css";
var memo = React.memo,
    useState = React.useState,
    useEffect = React.useEffect;
var Input = memo(function (props) {
  var icon = props.icon,
      defaultValue = props.defaultValue,
      id = props.id,
      className = props.className,
      _a = props.type,
      type = _a === void 0 ? 'text' : _a,
      value = props.value,
      onChange = props.onChange,
      style = props.style,
      autoFocus = props.autoFocus,
      _b = props.placeholder,
      placeholder = _b === void 0 ? '请输入内容' : _b,
      onIconClick = props.onIconClick;
  var textInput = React.createRef();

  var handleChange = function handleChange(e) {
    onChange && onChange(e.target.value);
  };

  var handleIconClick = function handleIconClick() {
    onIconClick && onIconClick(textInput.current.value);
  };

  useEffect(function () {
    autoFocus && textInput.current.focus();
  }, []);
  return React.createElement("div", {
    className: "cfInputBox"
  }, React.createElement("input", {
    className: classnames('cfInputInner', className),
    type: type,
    // @ts-ignore
    id: id,
    // @ts-ignore
    ref: textInput,
    style: style,
    placeholder: placeholder,
    value: value || typeof value === 'undefined' ? defaultValue : '',
    onChange: handleChange
  }), icon && React.createElement("span", {
    className: "cfIconInput",
    onClick: handleIconClick
  }, icon));
});
export default Input;