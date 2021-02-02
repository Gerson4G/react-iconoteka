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

function SvgPlasticHdpeMedium(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M2.82 19a3 3 0 010-3l2.44-4.22 1.21.7-.78-2.94-2.94.79L4 11l-2.48 4.25A4.5 4.5 0 005.42 22H10v-1.5H5.42a3 3 0 01-2.6-1.5zM9.4 4.6a3 3 0 015.2 0L17 8.83l-1.22.7 2.94.78.79-2.93-1.21.7-2.4-4.23a4.5 4.5 0 00-7.8 0l-2.29 4 1.3.75zm13.08 10.65l-2.29-4-1.3.75 2.29 4a3 3 0 01-2.6 4.5H13.7v-1.4l-2.15 2.15 2.15 2.15V22h4.88a4.5 4.5 0 003.9-6.75zM14 11.7a1.89 1.89 0 00-2-1.82 2 2 0 00-2 1.71l1 .2a1.05 1.05 0 011-.91.89.89 0 011 .87 1.45 1.45 0 01-.52 1c-.52.51-2.38 2.22-2.38 2.22V16h3.95v-1.07H11.5l1.75-1.7A2.07 2.07 0 0014 11.7z"
  }));
}

var _default = SvgPlasticHdpeMedium;
exports.default = _default;