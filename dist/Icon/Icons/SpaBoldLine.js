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

function SvgSpaBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M23 11c0-.32 0-.64-.05-.95-.31 0-.63-.05-.95-.05a10.86 10.86 0 00-5.52 1.5A13.43 13.43 0 0012 1.92a13.43 13.43 0 00-4.48 9.58A10.86 10.86 0 002 10c-.32 0-.64 0-.95.05 0 .31-.05.63-.05.95a11 11 0 0010.05 11c.31 0 .63.05.95.05s.64 0 .95-.05A11 11 0 0023 11zM9.5 12A11.47 11.47 0 0112 4.82 11.47 11.47 0 0114.5 12c0 .36 0 .72-.07 1.07A11.17 11.17 0 0012 16.44 11.17 11.17 0 009.57 13c-.03-.32-.07-.68-.07-1zm-6.44.1a9 9 0 017.88 7.88 9 9 0 01-7.88-7.92zm10 7.88a9 9 0 017.88-7.88 9 9 0 01-7.88 7.84z"
  }));
}

var _default = SvgSpaBoldLine;
exports.default = _default;