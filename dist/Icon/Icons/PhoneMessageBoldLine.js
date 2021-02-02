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

function SvgPhoneMessageBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.5 8A1.5 1.5 0 0022 6.5v-3A1.5 1.5 0 0020.5 2h-5A1.5 1.5 0 0014 3.5v7.31L16.81 8zm-4.8-1.3v-3h4.6v2.6h-4.2zm.84 6.17l-2.25 2.25a12.47 12.47 0 01-5.41-5.41l2.25-2.25-2.94-5.63L5 2.86A4.44 4.44 0 001.93 8a18.45 18.45 0 005 9.09 18.45 18.45 0 009.09 5A4.44 4.44 0 0021.14 19l1-3.21zm2.7 5.54a2.46 2.46 0 01-2.81 1.7A16.48 16.48 0 013.89 7.57a2.46 2.46 0 011.7-2.81l1.6-.51 1.49 2.84L7.46 8.3l-1 1 .67 1.29a14.48 14.48 0 002.64 3.64 14.48 14.48 0 003.64 2.64l1.29.67 1-1 1.21-1.22 2.84 1.49z"
  }));
}

var _default = SvgPhoneMessageBoldLine;
exports.default = _default;