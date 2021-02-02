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

function SvgTennisMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.34 6.28a5.23 5.23 0 00-3.71-1.56A6.7 6.7 0 0012 6.88a7.62 7.62 0 00-2.36 6.88 3.06 3.06 0 01-.75 3l-4.41 4.32 1.06 1.07 4.36-4.36a3.09 3.09 0 013-.75 5.4 5.4 0 001.28.15 8.13 8.13 0 005.58-2.52c2.79-2.81 2.73-6.23.58-8.39zm-1.66 7.33a6.69 6.69 0 01-4.52 2.08 3.23 3.23 0 01-2.34-.88 3.45 3.45 0 01-.84-3 6.88 6.88 0 012-3.88 5.21 5.21 0 013.62-1.72 3.84 3.84 0 013.77 3.94 5.29 5.29 0 01-1.69 3.46zM8 5a3 3 0 10-3 3 3 3 0 003-3zM3.45 5A1.55 1.55 0 115 6.55 1.56 1.56 0 013.45 5z"
  }));
}

var _default = SvgTennisMediumLine;
exports.default = _default;