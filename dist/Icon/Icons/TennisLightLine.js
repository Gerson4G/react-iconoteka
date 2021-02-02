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

function SvgTennisLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.34 6.28a5.23 5.23 0 00-3.71-1.56A6.7 6.7 0 0012 6.88a8 8 0 00-2.5 6 6.12 6.12 0 01-1.9 4.73l-3.31 3.27 1.45 1.46L9 19.07a6.25 6.25 0 014.35-1.91h.81a8.11 8.11 0 005.57-2.52c2.82-2.78 2.76-6.2.61-8.36zM8.66 18.72l-2.92 2.91-.74-.75L7.91 18a7 7 0 001.93-3.52 4.14 4.14 0 002.3 2.34 6.93 6.93 0 00-3.48 1.9zm10.73-4.4a7.62 7.62 0 01-5.22 2.37h-.07a4.18 4.18 0 01-3-1.16 4.15 4.15 0 01-1.1-2.67 7.43 7.43 0 012.36-5.61 6.16 6.16 0 014.32-2A4.67 4.67 0 0120 6.64c2.07 2.08 1.83 5.24-.61 7.68zM8 5a3 3 0 10-3 3 3 3 0 003-3zM2.5 5A2.5 2.5 0 115 7.5 2.5 2.5 0 012.5 5z"
  }));
}

var _default = SvgTennisLightLine;
exports.default = _default;