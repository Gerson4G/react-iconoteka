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

function SvgTennisBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.34 6.28a5.23 5.23 0 00-3.71-1.56A6.7 6.7 0 0012 6.88c-2.49 2.5-3.19 6-1.81 8.2L4.3 20.91l1.42 1.41 5.83-5.83a4.93 4.93 0 002.61.7 8.13 8.13 0 005.58-2.52c2.81-2.81 2.75-6.23.6-8.39zm-2 7a6.18 6.18 0 01-4.17 1.93 2.79 2.79 0 01-2-.73 3.07 3.07 0 01-.7-2.57 6.46 6.46 0 011.9-3.59 4.68 4.68 0 013.26-1.58 3.23 3.23 0 012.3 1 3.14 3.14 0 011 2.44 4.81 4.81 0 01-1.6 3.08zM8 5a3 3 0 10-3 3 3 3 0 003-3zM3.7 5A1.3 1.3 0 115 6.3 1.3 1.3 0 013.7 5z"
  }));
}

var _default = SvgTennisBoldLine;
exports.default = _default;