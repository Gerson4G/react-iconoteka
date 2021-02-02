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

function SvgPlasticPpMedium(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M2.82 19a3 3 0 010-3l2.44-4.22 1.21.7-.78-2.94-2.94.79L4 11l-2.48 4.25A4.5 4.5 0 005.42 22H10v-1.5H5.42a3 3 0 01-2.6-1.5zM9.4 4.6a3 3 0 015.2 0L17 8.83l-1.22.7 2.94.78.79-2.93-1.21.7-2.4-4.23a4.5 4.5 0 00-7.8 0l-2.29 4 1.3.75zm13.08 10.65l-2.29-4-1.3.75 2.29 4a3 3 0 01-2.6 4.5H13.7v-1.4l-2.15 2.15 2.15 2.15V22h4.88a4.5 4.5 0 003.9-6.75zM14.15 14a1.86 1.86 0 00-2-1.92 2.08 2.08 0 00-1.26.41L11 11h2.83v-1h-3.72l-.25 3.38h1a1.28 1.28 0 011.06-.48A1.07 1.07 0 0113 14a1.08 1.08 0 01-1.16 1.11 1.2 1.2 0 01-1.18-.73l-1 .44a2.15 2.15 0 002.16 1.29A2.16 2.16 0 0014.15 14z"
  }));
}

var _default = SvgPlasticPpMedium;
exports.default = _default;