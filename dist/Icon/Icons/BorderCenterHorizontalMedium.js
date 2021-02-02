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

function SvgBorderCenterHorizontalMedium(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3 16.88h1.5v-1.5H3zm1.5-9.76H3v1.5h1.5zm6.75 9.76h1.5v-1.5h-1.5zm1.5-9.76h-1.5v1.5h1.5zm6.75 9.76H21v-1.5h-1.5zm0-8.26H21v-1.5h-1.5zm0 12.38H21v-1.5h-1.5zm-4.12 0h1.5v-1.5h-1.5zm-4.13 0h1.5v-1.5h-1.5zm-4.13 0h1.5v-1.5h-1.5zM3 21h1.5v-1.5H3zm0-8.25h18v-1.5H3zM19.5 3v1.5H21V3zm-2.62 0h-1.5v1.5h1.5zm-4.13 0h-1.5v1.5h1.5zM8.62 3h-1.5v1.5h1.5zM4.5 3H3v1.5h1.5z",
    "data-name": "Clear 3"
  }));
}

var _default = SvgBorderCenterHorizontalMedium;
exports.default = _default;