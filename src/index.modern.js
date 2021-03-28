function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = _interopDefault(require('react'));

var styled = _interopDefault(require('styled-components'));

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
      transitionTime = props.transitionTime;
  if (!startColor || !endColor) logError("'startColor' or 'endColor' cannot be empty!");
  var hoverStyles = "\n    background-position: left;\n    background-size: 200%;\n    :hover {\n      background-position: right;\n    }\n  ";

  var transitionStyles = function transitionStyles(time) {
    return "\n    transition: all " + time + "ms ease;\n  ";
  };

  var MyStyle = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n    color: transparent;\n    background-image: linear-gradient(", "deg, ", ", ", ");\n    background-clip: text;\n    background-position: center;\n    background-size: 100%;\n    ", "\n    ", "\n  "])), degree, startColor, endColor, hasHover ? hoverStyles : '', transitionTime ? transitionStyles(transitionTime) : '');
  return /*#__PURE__*/React.createElement(MyStyle, null, children);
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
      style = props.style;
  if (!startColor || !endColor) logError("'startColor' or 'endColor' cannot be empty!");
  var hoverStyles = "\n    background-position: left;\n    background-size: 200%;\n    :hover, :focus {\n      background-position: right;\n    }\n  ";

  var transitionStyles = function transitionStyles(time) {
    return "\n    transition: all " + time + "ms ease;\n  ";
  };

  var MyStyle = styled.button(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n    color: ", ";\n    outline: 0 !important;\n    border: 0 !important;\n    cursor: pointer;\n    font-size: ", ";\n    background-image: linear-gradient(", "deg, ", ", ", ");\n    background-position: center;\n    background-size: 100%;\n    ", "\n    ", "\n    ", "\n  "])), textColor, fontSize || '1em', degree, startColor, endColor, hasHover ? hoverStyles : '', transitionTime ? transitionStyles(transitionTime) : '', style || '');
  return /*#__PURE__*/React.createElement(MyStyle, null, children);
};

exports.ButtonGradient = ButtonGradient;
exports.GradientText = GradientText;
//# sourceMappingURL=index.modern.js.map
