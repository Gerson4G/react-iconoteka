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

function SvgBorderTopMedium(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19.5 8.62H21v-1.5h-1.5zm0 8.26H21v-1.5h-1.5zm-8.25-8.26h1.5v-1.5h-1.5zm0 8.26h1.5v-1.5h-1.5zM3 8.62h1.5v-1.5H3zm0 8.26h1.5v-1.5H3zM3 3v1.5h18V3zm0 9.75h1.5v-1.5H3zm4.12 0h1.5v-1.5h-1.5zm4.13 0h1.5v-1.5h-1.5zm4.13 0h1.5v-1.5h-1.5zm4.12 0H21v-1.5h-1.5zM3 21h1.5v-1.5H3zm4.12 0h1.5v-1.5h-1.5zm4.13 0h1.5v-1.5h-1.5zm4.13 0h1.5v-1.5h-1.5zm4.12 0H21v-1.5h-1.5z",
    "data-name": "Clear 3"
  }));
}

var _default = SvgBorderTopMedium;
exports.default = _default;