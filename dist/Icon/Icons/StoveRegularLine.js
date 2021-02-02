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

function SvgStoveRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3 3v18h18V3zm17 17H4V4h16zm-4.45-9a2.5 2.5 0 10-2.5-2.5 2.49 2.49 0 002.5 2.5zm0-4.13a1.64 1.64 0 11-1.64 1.63 1.63 1.63 0 011.64-1.68zM8.45 11A2.5 2.5 0 106 8.45 2.49 2.49 0 008.45 11zm0-4.13a1.64 1.64 0 11-1.63 1.58 1.63 1.63 0 011.63-1.63zm0 11.23A2.5 2.5 0 106 15.55a2.49 2.49 0 002.45 2.5zm0-4.14a1.64 1.64 0 11-1.63 1.64 1.63 1.63 0 011.63-1.69zm7.1 4.14a2.5 2.5 0 10-2.5-2.5 2.5 2.5 0 002.5 2.45zm0-4.14a1.64 1.64 0 11-1.64 1.64 1.63 1.63 0 011.64-1.69z"
  }));
}

var _default = SvgStoveRegularLine;
exports.default = _default;