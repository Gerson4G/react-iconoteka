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

function SvgSmartwatchSquareLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 5.14V3a2 2 0 00-2-2h-4a2 2 0 00-2 2v2.14A4 4 0 005 9v6a4 4 0 003 3.86V21a2 2 0 002 2h4a2 2 0 002-2v-2.14A4 4 0 0019 15V9a4 4 0 00-3-3.86zM8.5 3A1.5 1.5 0 0110 1.5h4A1.5 1.5 0 0115.5 3v2.05A4.23 4.23 0 0015 5H9a4.23 4.23 0 00-.5 0zm7 18a1.5 1.5 0 01-1.5 1.5h-4A1.5 1.5 0 018.5 21v-2a4.23 4.23 0 00.5 0h6a4.23 4.23 0 00.5-.05zm3-6a3.5 3.5 0 01-3.5 3.5H9A3.5 3.5 0 015.5 15V9A3.5 3.5 0 019 5.5h6A3.5 3.5 0 0118.5 9z"
  }));
}

var _default = SvgSmartwatchSquareLightLine;
exports.default = _default;