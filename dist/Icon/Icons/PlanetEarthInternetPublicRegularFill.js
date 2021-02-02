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

function SvgPlanetEarthInternetPublicRegularFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M8.34 16c.61 3.53 2 6 3.66 6s3.05-2.47 3.66-6zm13.2-7h-4.72a25 25 0 01.18 3 25 25 0 01-.18 3h4.72a10 10 0 000-6zm-.38-1a10 10 0 00-6.7-5.68A12.36 12.36 0 0116.67 8zM8 12a24 24 0 00.18 3h7.64a24 24 0 00.18-3 24 24 0 00-.18-3H8.18A24 24 0 008 12zm6.46 9.68a10 10 0 006.7-5.68h-4.49a12.36 12.36 0 01-2.21 5.68zM7 12a25 25 0 01.18-3H2.46a10 10 0 000 6h4.72A25 25 0 017 12zm-4.16 4a10 10 0 006.7 5.68A12.36 12.36 0 017.33 16zm6.7-13.68A10 10 0 002.84 8h4.49a12.36 12.36 0 012.21-5.68zM15.66 8c-.61-3.53-2-6-3.66-6S9 4.47 8.34 8z"
  }));
}

var _default = SvgPlanetEarthInternetPublicRegularFill;
exports.default = _default;