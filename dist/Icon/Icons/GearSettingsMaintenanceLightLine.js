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

function SvgGearSettingsMaintenanceLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19.64 10.71l2.81-2.16a11.71 11.71 0 00-.92-2.05 11.6 11.6 0 00-1.32-1.82L16.94 6 14.7 4.74l-.46-3.51a11 11 0 00-4.48 0L9.3 4.74 7.06 6 3.79 4.68A11.6 11.6 0 002.47 6.5a11.71 11.71 0 00-.92 2.05l2.81 2.16v2.58l-2.81 2.16a11.71 11.71 0 00.92 2.05 11.6 11.6 0 001.32 1.82L7.06 18l2.24 1.26.46 3.51a11 11 0 004.48 0l.46-3.51L16.94 18l3.27 1.35a11.6 11.6 0 001.32-1.82 11.71 11.71 0 00.92-2.05l-2.81-2.16zm2.22 4.91a10.56 10.56 0 01-.77 1.63 10.7 10.7 0 01-1 1.47l-2.94-1.21-.23-.1-.21.13-2.24 1.29-.21.12v.24l-.42 3.16a10.76 10.76 0 01-3.58 0l-.42-3.16v-.24l-.21-.12-2.32-1.29-.21-.13-.23.1-2.94 1.21a10.7 10.7 0 01-1-1.47 10.56 10.56 0 01-.77-1.63l2.53-1.93.19-.15v-3.08l-.19-.15-2.55-1.93a10.56 10.56 0 01.77-1.63 10.7 10.7 0 011-1.47l2.96 1.21.23.1.21-.13 2.24-1.29.21-.12v-.24l.42-3.16a10.76 10.76 0 013.58 0l.42 3.16v.24l.21.12 2.24 1.29.21.13.23-.1 2.94-1.21a10.7 10.7 0 011 1.47 10.56 10.56 0 01.77 1.63l-2.53 1.93-.19.15v3.08l.19.15zM12 8.5a3.5 3.5 0 103.5 3.5A3.5 3.5 0 0012 8.5zm0 6.5a3 3 0 113-3 3 3 0 01-3 3z"
  }));
}

var _default = SvgGearSettingsMaintenanceLightLine;
exports.default = _default;