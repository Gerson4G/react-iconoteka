"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgFootballBallSoccerBallBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm7.26 5.89a8.22 8.22 0 011 3.17l-1.64-1.21zM12 3.65a8.55 8.55 0 011.68.17L12 5l-1.68-1.18A8.55 8.55 0 0112 3.65zM4.74 7.89l.64 2-1.67 1.17a8.22 8.22 0 011.03-3.17zm1.12 9.74h2.05l.63 2a8.4 8.4 0 01-2.68-2zm9.6 2l.63-2h2.06a8.55 8.55 0 01-2.69 1.96zM19.34 16h-4.45l-1.37 4.2a7.78 7.78 0 01-3 0L9.11 16H4.66a8.17 8.17 0 01-.93-2.89l3.59-2.61L6 6.26a8.41 8.41 0 012.41-1.79L12 7.08l3.59-2.61a8.41 8.41 0 012.46 1.79l-1.37 4.22 3.59 2.61a8.17 8.17 0 01-.93 2.91zM8.49 10.86L9.83 15h4.34l1.34-4.13L12 8.31zM13 13.34h-2l-.6-1.85 1.6-1.14 1.57 1.14z"
  }));
}

var _default = SvgFootballBallSoccerBallBoldLine;
exports.default = _default;