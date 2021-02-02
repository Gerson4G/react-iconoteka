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

function Svg5CirclesGroupSuppliesRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15 4.66a3 3 0 10-3 3 3 3 0 003-3zm-3 2a2 2 0 112-2 2 2 0 01-2 2zm-4.13 4A3 3 0 105 12.73a3 3 0 002.87-2.07zM3.11 9.11A2 2 0 015 7.73a1.86 1.86 0 01.61.1 2 2 0 011.17 1 2 2 0 01.12 1.53A2 2 0 015 11.73a1.87 1.87 0 01-.62-.1 2 2 0 01-1.27-2.52zm6.34 6.4a3 3 0 00-1.76-.57 3 3 0 101.76.57zm-.15 3.61a2 2 0 01-1.62.82 2 2 0 01-2-1.69 1.92 1.92 0 01.36-1.48 2 2 0 113.26 2.35zm7-4.18a3 3 0 00-1.76.57 3 3 0 001.77 5.43 3 3 0 001.76-.57 3 3 0 00-1.77-5.43zm2 3.31a2 2 0 01-2 1.69 2 2 0 01-1.62-.82 2 2 0 113.23-2.35 1.92 1.92 0 01.38 1.48zm3.54-9.45a3 3 0 10-1.93 3.78 3 3 0 001.93-3.78zm-2.24 2.83a1.87 1.87 0 01-.62.1 2 2 0 01-1.9-1.38 2 2 0 01.12-1.53 2 2 0 011.17-1 1.87 1.87 0 01.62-.1 2 2 0 01.61 3.9z"
  }));
}

var _default = Svg5CirclesGroupSuppliesRegularLine;
exports.default = _default;