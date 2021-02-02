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

function SvgEarthAustraliaPlanetBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 1.8h.2V7A1.2 1.2 0 0111 8.2H8.94A2.25 2.25 0 009 7.62a2.34 2.34 0 00-1.72-2.31A8.12 8.12 0 0112 3.8zM5.52 7h1.09a.57.57 0 01.39.18.56.56 0 01.17.43.6.6 0 01-.6.59H4.74A7.7 7.7 0 015.52 7zM3.8 12a8.24 8.24 0 01.26-2h3.15v2.59A1.2 1.2 0 016 13.79H4A8.18 8.18 0 013.8 12zm8.2 8.2a8.21 8.21 0 01-7.36-4.61H6a3 3 0 003-3V10h2a3 3 0 003-3V4.06a8.19 8.19 0 01-2 16.14zm3.34-9.2h-.05a3 3 0 00-2.17.94l-1.45 1.56V17h3.67a3 3 0 003-3 3 3 0 00-3-3zm0 4.18h-1.87v-1l1-1a1.24 1.24 0 01.91-.37 1.19 1.19 0 110 2.38z"
  }));
}

var _default = SvgEarthAustraliaPlanetBoldLine;
exports.default = _default;