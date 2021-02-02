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

function SvgOpacityLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.68 7.32a7.5 7.5 0 10-9.36 9.36 7.5 7.5 0 109.36-9.36zM2.5 9.5a7 7 0 0113.59-2.33 7.5 7.5 0 00-8.92 8.92A7 7 0 012.5 9.5zm14 0a6.93 6.93 0 01-.32 2.1L12.4 7.82a6.93 6.93 0 012.1-.32 7.4 7.4 0 011.77.23 7.4 7.4 0 01.23 1.77zm-9 5a6.93 6.93 0 01.32-2.1l3.78 3.78a6.93 6.93 0 01-2.1.32 7.4 7.4 0 01-1.77-.23 7.4 7.4 0 01-.23-1.77zm4.62 1.5L8 11.88a7.25 7.25 0 011.38-2.14l4.88 4.88A7.25 7.25 0 0112.12 16zm2.5-1.73L9.74 9.38A7.25 7.25 0 0111.88 8L16 12.12a7.25 7.25 0 01-1.38 2.14zm-.12 7.23a7 7 0 01-6.59-4.67 7.5 7.5 0 008.92-8.92A7 7 0 0114.5 21.5z",
    "data-name": "Clear 3"
  }));
}

var _default = SvgOpacityLightLine;
exports.default = _default;