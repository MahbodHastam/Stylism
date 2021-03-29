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
    fontSize
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
  return /*#__PURE__*/React.createElement(MyStyle, null, children);
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
    style
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
  return /*#__PURE__*/React.createElement(MyStyle, null, children);
};

export { ButtonGradient, GradientText };
//# sourceMappingURL=index.modern.js.map
