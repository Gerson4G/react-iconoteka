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

function SvgCanLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17.64 7.56l-.45-.91a2.05 2.05 0 00.38-1.15c0-1.75-2.45-3.12-5.57-3.12S6.43 3.75 6.43 5.5a2.05 2.05 0 00.38 1.15l-.45.91A3.38 3.38 0 006 9.12v9.53C6 20.53 8.63 22 12 22s6-1.47 6-3.35V9.12a3.38 3.38 0 00-.36-1.56zM12 2.88c2.8 0 5.07 1.17 5.07 2.62S14.8 8.13 12 8.13 6.93 7 6.93 5.5 9.2 2.88 12 2.88zm5.51 15.77c0 1.57-2.46 2.85-5.51 2.85s-5.51-1.28-5.51-2.85V9.12a3 3 0 01.31-1.34l.36-.71A7.1 7.1 0 0012 8.63a7.1 7.1 0 004.84-1.56l.36.71a3 3 0 01.31 1.34zm-4-12.3h1.17a.8.8 0 00.81-.8v-.09a.81.81 0 00-.81-.81h-1.19c-.7 0-1.2.36-1.2.85s.5.85 1.2.85zm0-1.2h1.17a.31.31 0 01.31.31v.09a.31.31 0 01-.31.3h-1.19c-.39 0-.7-.16-.7-.35s.31-.35.7-.35z"
  }));
}

var _default = SvgCanLightLine;
exports.default = _default;