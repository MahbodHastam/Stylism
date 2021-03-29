import React from 'react';
import styled from 'styled-components';

const logError = message => {
  throw new Error(`Stylism: ${message}`);
};

let _ = t => t,
    _t;

const GradientText = props => {
  const {
    children,
    degree = 45,
    startColor,
    endColor,
    hasHover,
    transitionTime,
    fontSize,
    id
  } = props;
  if (!startColor || !endColor) logError(`'startColor' or 'endColor' cannot be empty!`);
  const hoverStyles = `
    background-position: left;
    background-size: 200%;
    :hover {
      background-position: right;
    }
  `;

  const transitionStyles = time => `
    transition: all ${time}ms ease;
  `;

  const MyStyle = styled.span(_t || (_t = _`
    color: transparent;
    font-size: ${0};
    background-image: linear-gradient(${0}deg, ${0}, ${0});
    background-clip: text;
    background-position: center;
    background-size: 100%;
    ${0}
    ${0}
  `), fontSize || '', degree, startColor, endColor, hasHover ? hoverStyles : '', transitionTime ? transitionStyles(transitionTime) : '');
  return /*#__PURE__*/React.createElement(MyStyle, {
    id: id || ''
  }, children);
};

let _$1 = t => t,
    _t$1;

const ButtonGradient = props => {
  const {
    children,
    degree = 45,
    textColor = '#fff',
    startColor,
    endColor,
    hasHover,
    transitionTime,
    fontSize,
    style,
    id
  } = props;
  if (!startColor || !endColor) logError(`'startColor' or 'endColor' cannot be empty!`);
  const hoverStyles = `
    background-position: left;
    background-size: 200%;
    :hover, :focus {
      background-position: right;
    }
  `;

  const transitionStyles = time => `
    transition: all ${time}ms ease;
  `;

  const MyStyle = styled.button(_t$1 || (_t$1 = _$1`
    color: ${0};
    outline: 0 !important;
    border: 0 !important;
    cursor: pointer;
    font-size: ${0};
    background-image: linear-gradient(${0}deg, ${0}, ${0});
    background-position: center;
    background-size: 100%;
    ${0}
    ${0}
    ${0}
  `), textColor, fontSize || '1em', degree, startColor, endColor, hasHover ? hoverStyles : '', transitionTime ? transitionStyles(transitionTime) : '', style || '');
  return /*#__PURE__*/React.createElement(MyStyle, {
    id: id || ''
  }, children);
};

let _$2 = t => t,
    _t$2;

const Tooltip = props => {
  const {
    text,
    position = 'top',
    textColor = '#fff',
    backColor = 'rgba(0, 0, 0, .5)',
    parentId = null,
    transitionTime = 50,
    fontSize = '0.75em'
  } = props;
  if (!text) logError(`'text' cannot be empty!`);

  const transitionStyles = time => `
    transition: all ${time}ms ease;
  `;

  const Styles = styled.span(_t$2 || (_t$2 = _$2`
    color: ${0};
    background-color: ${0};
    padding: 4px 8px;
    border-radius: 0.3rem;
    font-size: ${0};
    position: absolute;
    ${0}: -20px;
    opacity: 0;
    visibility: hidden;
    width: 85%;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    ${0}
  `), textColor, backColor, fontSize, position, transitionTime ? transitionStyles(transitionTime) : '');
  const styleElement = document.createElement('style');
  styleElement.innerHTML = `
    #${parentId} {
      position: relative;
    }
    #${parentId}:hover > span {
      opacity: 1;
      visibility: visible;
      ${position}: -80%;
    }
  `;
  document.querySelector('head').append(styleElement);
  console.log(text, position, textColor, backColor);
  return /*#__PURE__*/React.createElement(Styles, null, text);
};

export { ButtonGradient, GradientText, Tooltip };
//# sourceMappingURL=index.modern.js.map
