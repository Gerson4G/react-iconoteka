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

function SvgBorderCenterHorizontalRegular(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M4 8.67H3v1h1zm-1 9.5h1v-1H3zM4 5.83H3v1h1zm-1 9.5h1v-1H3zm17-5.66h1v-1h-1zm0 8.5h1v-1h-1zm0-11.34h1v-1h-1zm0 8.5h1v-1h-1zm-7.5-6.66h-1v1h1zm-1 9.5h1v-1h-1zm1-12.34h-1v1h1zm-1 9.5h1v-1h-1zm0 5.67h1v-1h-1zm-2.83 0h1v-1h-1zm8.5 0h1v-1h-1zM5.83 21h1v-1h-1zm8.5 0h1v-1h-1zM20 21h1v-1h-1zM3 21h1v-1H3zm9.5-18h-1v1h1zM9.67 3h-1v1h1zm8.5 0h-1v1h1zM6.83 3h-1v1h1zm8.5 0h-1v1h1zM20 3v1h1V3zM4 3H3v1h1zm-1 9.5h18v-1H3z",
    "data-name": "Clear 3"
  }));
}

var _default = SvgBorderCenterHorizontalRegular;
exports.default = _default;