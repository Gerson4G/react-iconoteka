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

function SvgTableTennisPingPongBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M8 5a3 3 0 10-3 3 3 3 0 003-3zM5 6.3A1.3 1.3 0 116.3 5 1.3 1.3 0 015 6.3zm15.07 1a5.79 5.79 0 00-4.17-1.8 8.14 8.14 0 00-5.6 2.62 6.24 6.24 0 00-1.76 6.71A3 3 0 017.91 18L5 20.91l1.42 1.41 2.86-2.86a2.85 2.85 0 013-.69 5.94 5.94 0 002.17.42 6.7 6.7 0 004.72-2.12c3.01-2.93 3.76-6.92.9-9.78zm-2.23 8.36a4.71 4.71 0 01-3.31 1.54 4.33 4.33 0 01-3-1.34c-1.86-1.86-1.78-4.34.2-6.32a6.25 6.25 0 014.19-2 3.78 3.78 0 012.76 1.21c2.24 2.25.95 5.11-.84 6.9z"
  }));
}

var _default = SvgTableTennisPingPongBoldLine;
exports.default = _default;