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

function SvgTableTennisPingPongMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M8 5a3 3 0 10-3 3 3 3 0 003-3zM5 6.55A1.55 1.55 0 116.55 5 1.56 1.56 0 015 6.55zm15.07.74A5.79 5.79 0 0015.9 5.5a8.14 8.14 0 00-5.6 2.62A6.26 6.26 0 008.6 15a3 3 0 01-.6 3.29l-2.78 2.79 1.06 1.07L9 19.42a3 3 0 013.21-.71 5.8 5.8 0 002.31.48 6.7 6.7 0 004.72-2.12c2.94-2.93 3.69-6.92.83-9.78zM18.19 16a5.2 5.2 0 01-3.66 1.68 4.81 4.81 0 01-3.37-1.48 4.8 4.8 0 01-1.48-3.35 5.14 5.14 0 011.68-3.68A6.62 6.62 0 0115.9 7 4.28 4.28 0 0119 8.35c2.53 2.52 1.14 5.7-.81 7.65z"
  }));
}

var _default = SvgTableTennisPingPongMediumLine;
exports.default = _default;