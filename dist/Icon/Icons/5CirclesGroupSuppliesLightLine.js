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

function Svg5CirclesGroupSuppliesLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15 4.66a3 3 0 10-3 3 3 3 0 003-3zm-3 2.5a2.5 2.5 0 112.5-2.5 2.51 2.51 0 01-2.5 2.5zm-4.13 3.5A3 3 0 105 12.73a3 3 0 002.87-2.07zM2.64 9A2.48 2.48 0 015 7.23a2.53 2.53 0 01.77.12A2.49 2.49 0 017.24 8.6a2.42 2.42 0 01.15 1.9A2.48 2.48 0 015 12.23a2.54 2.54 0 01-.78-.12A2.5 2.5 0 012.64 9zm6.81 6.55a3 3 0 00-1.76-.57 3 3 0 101.76.57zm.26 3.9a2.51 2.51 0 01-2 1 2.44 2.44 0 01-1.5-.45 2.5 2.5 0 01-.55-3.49 2.53 2.53 0 012-1 2.51 2.51 0 012 4zm6.6-4.47a3 3 0 00-1.76.57 3 3 0 001.77 5.43 3 3 0 001.76-.57 3 3 0 00-1.77-5.43zm1.48 5a2.44 2.44 0 01-1.47.48 2.51 2.51 0 01-2-1 2.51 2.51 0 012-4 2.53 2.53 0 012 1 2.5 2.5 0 01-.53 3.54zM21.84 8.8a3 3 0 10-1.93 3.78 3 3 0 001.93-3.78zm-2.08 3.31a2.54 2.54 0 01-.78.12 2.48 2.48 0 01-2.37-1.73 2.42 2.42 0 01.15-1.9 2.49 2.49 0 011.45-1.25 2.54 2.54 0 01.79-.12 2.5 2.5 0 01.77 4.88z"
  }));
}

var _default = Svg5CirclesGroupSuppliesLightLine;
exports.default = _default;