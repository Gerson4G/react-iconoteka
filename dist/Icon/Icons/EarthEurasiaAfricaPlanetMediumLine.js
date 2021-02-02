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

function SvgEarthEurasiaAfricaPlanetMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm7.12 14.63H17.7v-1.18l.88-.94a1.35 1.35 0 011-.43 1.24 1.24 0 01.61.17 8.68 8.68 0 01-1.07 2.38zM12 20.5A8.5 8.5 0 1116.81 5H10a2 2 0 00-1.9 1.32L7.49 8a1.5 1.5 0 001.41 2h1.51a.68.68 0 01.6.6.6.6 0 01-.6.6H8a2 2 0 00-2 2v1.47a1 1 0 001 1h1v1.66a.67.67 0 00.67.67h1.16a2.84 2.84 0 002.84-2.83V13h2.5A2.83 2.83 0 0018 10.17V6a8.39 8.39 0 012.45 6.89 2.49 2.49 0 00-.87-.17 2.71 2.71 0 00-2 .86l-1.25 1.32V18H18a8.47 8.47 0 01-6 2.5zm-1.59-12H8.9l.61-1.67A.5.5 0 0110 6.5h6.5v3.67a1.34 1.34 0 01-1.33 1.33h-2.86a2 2 0 00.2-.88 2.09 2.09 0 00-2.1-2.12zM7.5 14.17v-1a.5.5 0 01.5-.5h2.41a2.14 2.14 0 00.76-.14v2.61a1.34 1.34 0 01-1.34 1.36H9.5v-2.33z"
  }));
}

var _default = SvgEarthEurasiaAfricaPlanetMediumLine;
exports.default = _default;