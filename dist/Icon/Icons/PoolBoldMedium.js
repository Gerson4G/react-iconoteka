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

function SvgPoolBoldMedium(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15 19.67a4.38 4.38 0 00-5.94 0 3.2 3.2 0 01-2 .83 3.2 3.2 0 01-2-.83A4.65 4.65 0 002 18.5V20a3.2 3.2 0 012 .83A4.65 4.65 0 007 22a4.65 4.65 0 003-1.17 2.87 2.87 0 014.06 0A4.65 4.65 0 0017 22a4.65 4.65 0 003-1.17 3.2 3.2 0 012-.83v-1.5a4.65 4.65 0 00-3 1.17 2.87 2.87 0 01-4 0zm4-4.25a2.82 2.82 0 01-3 .63V5a3 3 0 00-3-3h-1v1.5h1A1.5 1.5 0 0114.5 5v1h-5V5a3 3 0 00-3-3h-1v1.5h1A1.5 1.5 0 018 5v11.05a2.7 2.7 0 01-1 .2 3.2 3.2 0 01-2-.83 4.65 4.65 0 00-3-1.17v1.5a3.2 3.2 0 012 .83 4.65 4.65 0 003 1.17 4.65 4.65 0 003-1.17 2.87 2.87 0 014.06 0 4.65 4.65 0 003 1.17 4.65 4.65 0 003-1.17 3.2 3.2 0 012-.83v-1.5A4.65 4.65 0 0019 15.42zM14.5 14h-5v-2.5h5zm0-4h-5V7.5h5z"
  }));
}

var _default = SvgPoolBoldMedium;
exports.default = _default;