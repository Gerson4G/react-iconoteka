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

function SvgOpacityRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.68 7.32a7.5 7.5 0 10-9.36 9.36 7.5 7.5 0 109.36-9.36zM3 9.5a6.5 6.5 0 0112.53-2.42 7 7 0 00-1-.08A7.5 7.5 0 007 14.5a7 7 0 00.08 1A6.51 6.51 0 013 9.5zm5 5a6.64 6.64 0 01.16-1.42l2.76 2.76A6.64 6.64 0 019.5 16a6.75 6.75 0 01-1.36-.14A6.75 6.75 0 018 14.5zm4 1L8.5 12a6.27 6.27 0 011.07-1.73l4.15 4.15A6.27 6.27 0 0112 15.5zm2.44-1.78l-4.16-4.15A6.27 6.27 0 0112 8.5l3.5 3.5a6.27 6.27 0 01-1.07 1.72zM16 9.5a6.48 6.48 0 01-.16 1.41l-2.75-2.75A6.48 6.48 0 0114.5 8a6.75 6.75 0 011.36.14A6.75 6.75 0 0116 9.5zM14.5 21a6.51 6.51 0 01-6-4.08 7 7 0 001 .08A7.5 7.5 0 0017 9.5a7 7 0 00-.08-1A6.5 6.5 0 0114.5 21z",
    "data-name": "Clear 3"
  }));
}

var _default = SvgOpacityRegularLine;
exports.default = _default;