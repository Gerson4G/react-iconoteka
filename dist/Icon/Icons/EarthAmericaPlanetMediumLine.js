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

function SvgEarthAmericaPlanetMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm6.58 6.78l.52-1.44a8.54 8.54 0 011.06 2.29h-1a.63.63 0 01-.59-.85zM4.8 16.5a8.42 8.42 0 01-1-2.34 1.42 1.42 0 01.45-.08 1.27 1.27 0 01.55 2.42zm7.2 4a8.49 8.49 0 01-6.38-2.9 2.64 2.64 0 00-1.37-4.89 2.38 2.38 0 00-.7.11V12a8.46 8.46 0 012.84-6.37v.08a.9.9 0 00.9.91.72.72 0 01.71.74v3.06a3.05 3.05 0 00.82 2.07l.09.08 1.57 1.57.1.16v4.68l.3.16h2a3 3 0 002.82-2l.9-2.48c0-.13.13-.44.15-.56a2 2 0 00-2-2.32h-3.14a.5.5 0 01-.5-.5.5.5 0 01.5-.5h2.26a1 1 0 00.94-.66l1-2.66a2 2 0 00-1.91-2.65H7.49A8.38 8.38 0 0112 3.5a8.5 8.5 0 016.1 2.59l-.81 2.23A2 2 0 0019.17 11h1.27c0 .33.06.66.06 1a8.51 8.51 0 01-8.5 8.5zm-2.25-9a1.63 1.63 0 01-.38-1.05V7.36A2.11 2.11 0 009 6.17h4.9a.63.63 0 01.59.85l-.88 2.42h-2a1.82 1.82 0 00-1.32.55 1.86 1.86 0 00-.55 1.32s.01.11.01.16zm2 2.12l-.1-.16-.08-.14-.12-.12h3.34a.57.57 0 01.43.19.76.76 0 01.18.56c0 .06-.06.24-.08.3l-.92 2.45a1.63 1.63 0 01-1.53 1.07h-.95v-3.85z"
  }));
}

var _default = SvgEarthAmericaPlanetMediumLine;
exports.default = _default;