import React from 'react';
import styled from 'styled-components';

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var logError = function logError(message) {
  throw new Error("Stylism: " + message);
};

var _templateObject;

var GradientText = function GradientText(props) {
  var children = props.children,
      _props$degree = props.degree,
      degree = _props$degree === void 0 ? 45 : _props$degree,
      startColor = props.startColor,
      endColor = props.endColor,
      hasHover = props.hasHover,
      transitionTime = props.transitionTime,
      fontSize = props.fontSize,
      id = props.id;
  if (!startColor || !endColor) logError("'startColor' or 'endColor' cannot be empty!");
  var hoverStyles = "\n    background-position: left;\n    background-size: 200%;\n    :hover {\n      background-position: right;\n    }\n  ";

  var transitionStyles = function transitionStyles(time) {
    return "\n    transition: all " + time + "ms ease;\n  ";
  };

  var MyStyle = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n    color: transparent;\n    font-size: ", ";\n    background-image: linear-gradient(", "deg, ", ", ", ");\n    background-clip: text;\n    background-position: center;\n    background-size: 100%;\n    ", "\n    ", "\n  "])), fontSize || '', degree, startColor, endColor, hasHover ? hoverStyles : '', transitionTime ? transitionStyles(transitionTime) : '');
  return /*#__PURE__*/React.createElement(MyStyle, {
    id: id || ''
  }, children);
};

var _templateObject$1;

var ButtonGradient = function ButtonGradient(props) {
  var children = props.children,
      _props$degree = props.degree,
      degree = _props$degree === void 0 ? 45 : _props$degree,
      _props$textColor = props.textColor,
      textColor = _props$textColor === void 0 ? '#fff' : _props$textColor,
      startColor = props.startColor,
      endColor = props.endColor,
      hasHover = props.hasHover,
      transitionTime = props.transitionTime,
      fontSize = props.fontSize,
      style = props.style,
      id = props.id;
  if (!startColor || !endColor) logError("'startColor' or 'endColor' cannot be empty!");
  var hoverStyles = "\n    background-position: left;\n    background-size: 200%;\n    :hover, :focus {\n      background-position: right;\n    }\n  ";

  var transitionStyles = function transitionStyles(time) {
    return "\n    transition: all " + time + "ms ease;\n  ";
  };

  var MyStyle = styled.button(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n    color: ", ";\n    outline: 0 !important;\n    border: 0 !important;\n    cursor: pointer;\n    font-size: ", ";\n    background-image: linear-gradient(", "deg, ", ", ", ");\n    background-position: center;\n    background-size: 100%;\n    ", "\n    ", "\n    ", "\n  "])), textColor, fontSize || '1em', degree, startColor, endColor, hasHover ? hoverStyles : '', transitionTime ? transitionStyles(transitionTime) : '', style || '');
  return /*#__PURE__*/React.createElement(MyStyle, {
    id: id || ''
  }, children);
};

var _templateObject$2;

var Tooltip = function Tooltip(props) {
  var text = props.text,
      _props$position = props.position,
      position = _props$position === void 0 ? 'top' : _props$position,
      _props$textColor = props.textColor,
      textColor = _props$textColor === void 0 ? '#fff' : _props$textColor,
      _props$backColor = props.backColor,
      backColor = _props$backColor === void 0 ? 'rgba(0, 0, 0, .5)' : _props$backColor,
      _props$parentId = props.parentId,
      parentId = _props$parentId === void 0 ? null : _props$parentId,
      _props$transitionTime = props.transitionTime,
      transitionTime = _props$transitionTime === void 0 ? 50 : _props$transitionTime,
      _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? '0.75em' : _props$fontSize,
      _props$hasShadow = props.hasShadow,
      hasShadow = _props$hasShadow === void 0 ? true : _props$hasShadow;
  if (!text) logError("'text' cannot be empty!");

  var transitionStyles = function transitionStyles(time) {
    return "\n    transition: all " + time + "ms ease;\n  ";
  };

  var Styles = styled.span(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n    color: ", ";\n    background-color: ", ";\n    padding: 4px 8px;\n    border-radius: 0.3rem;\n    font-size: ", ";\n    position: absolute;\n    ", ": -20px;\n    opacity: 0;\n    visibility: hidden;\n    width: auto;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: -1;\n    ", "\n    ", "\n    white-space: nowrap;\n  "])), textColor, backColor, fontSize, position, transitionTime ? transitionStyles(transitionTime) : '', hasShadow ? "box-shadow: 0 6px 16px rgba(0, 0, 0, .211);" : "");
  var styleElement = document.createElement('style');
  styleElement.innerHTML = "\n    #" + parentId + " {\n      position: relative;\n    }\n    #" + parentId + ":hover > span {\n      opacity: 1;\n      visibility: visible;\n      " + position + ": -80%;\n    }\n  ";
  document.querySelector('head').append(styleElement);
  console.log(text, position, textColor, backColor);
  return /*#__PURE__*/React.createElement(Styles, null, text);
};

export { ButtonGradient, GradientText, Tooltip };
//# sourceMappingURL=index.modern.js.map
