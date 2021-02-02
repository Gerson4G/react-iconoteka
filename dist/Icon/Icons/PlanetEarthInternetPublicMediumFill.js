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

function SvgPlanetEarthInternetPublicMediumFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6.75 12c0-.89 0-1.72.1-2.5H2.33a9.63 9.63 0 000 5h4.52c-.06-.78-.1-1.61-.1-2.5zm1.5 0c0 .86.05 1.7.12 2.5h7.26c.07-.8.12-1.64.12-2.5s-.05-1.7-.12-2.5H8.37c-.07.8-.12 1.64-.12 2.5zm12.91-4a10.06 10.06 0 00-6.07-5.51A13.25 13.25 0 0117 8zm.51 1.5h-4.52c.06.78.1 1.61.1 2.5s0 1.72-.1 2.5h4.52a9.63 9.63 0 000-5zM8.56 16c.58 3.53 1.9 6 3.44 6s2.86-2.47 3.44-6zm-5.72 0a10.06 10.06 0 006.07 5.51A13.25 13.25 0 017 16zm12.25 5.51A10.06 10.06 0 0021.16 16H17a13.25 13.25 0 01-1.91 5.51zM15.44 8c-.58-3.53-1.9-6-3.44-6S9.14 4.47 8.56 8zM8.91 2.49A10.06 10.06 0 002.84 8H7a13.25 13.25 0 011.91-5.51z"
  }));
}

var _default = SvgPlanetEarthInternetPublicMediumFill;
exports.default = _default;