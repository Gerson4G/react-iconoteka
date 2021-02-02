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

function SvgAmericanFootballBallBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22.31 5.09a4 4 0 00-3.4-3.4A15.79 15.79 0 0017 1.57 15.4 15.4 0 001.69 18.91a4 4 0 003.4 3.4 15.79 15.79 0 001.91.12A15.4 15.4 0 0022.31 5.09zm-5.8 11.42A13.32 13.32 0 017 20.43a13.69 13.69 0 01-1.69-.1 2 2 0 01-1.67-1.67A13.4 13.4 0 0117 3.57a13.69 13.69 0 011.69.1 2 2 0 011.67 1.67 13.37 13.37 0 01-3.85 11.17zM16 9.28L15.68 9 14 7.3a.9.9 0 00-1.27 0 .91.91 0 000 1.28l.7.7L12 10.73l-.7-.7A.9.9 0 1010 11.3l.7.7-1.42 1.45-.7-.7a.91.91 0 00-1.28 0 .9.9 0 000 1.25l2.7 2.7a.9.9 0 001.27 0 .91.91 0 000-1.28l-.7-.7L12 13.27l.7.7A.9.9 0 1014 12.7l-.7-.7 1.45-1.45.7.7a.91.91 0 001.28 0 .9.9 0 000-1.27z"
  }));
}

var _default = SvgAmericanFootballBallBoldLine;
exports.default = _default;