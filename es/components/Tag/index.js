import React from 'react';
import classnames from 'classnames';
import "./index.css";
var Tag = React.memo(function (props) {
  var _a = props.closable,
      closable = _a === void 0 ? false : _a,
      _b = props.color,
      color = _b === void 0 ? 'blue' : _b,
      onClose = props.onClose,
      _c = props.text,
      text = _c === void 0 ? '标签' : _c;
  var tag = React.createRef();

  var closeTag = function closeTag() {
    onClose && onClose(); // @ts-ignore

    tag.current.style.display = 'none';
  };

  return (// @ts-ignore
    React.createElement("div", {
      ref: tag,
      className: classnames('cfTagBox', color ? 'cfTagHasColor' : ''),
      style: {
        background: color
      }
    }, React.createElement("span", {
      className: "cfTagText"
    }, text), closable && React.createElement("span", {
      onClick: closeTag,
      className: "cfTagBtn"
    }, "x"))
  );
});
export default Tag;