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

function SvgLineStyleBold(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3 21h2v-2H3zm16 0h2v-2h-2zm-4 0h2v-2h-2zm-4 0h2v-2h-2zm-4 0h2v-2H7zm4-7H3v2h8zm2 2h8v-2h-8zM3 11h18V9H3zm15.12-6.87a2.25 2.25 0 01-3.24 0 4.25 4.25 0 00-5.76 0 2.55 2.55 0 01-1.62.68 2.55 2.55 0 01-1.62-.68A4.49 4.49 0 003 3v2a2.55 2.55 0 011.62.68A4.49 4.49 0 007.5 6.81a4.49 4.49 0 002.88-1.13 2.26 2.26 0 013.24 0 4.49 4.49 0 002.88 1.13 4.49 4.49 0 002.88-1.13A2.55 2.55 0 0121 5V3a4.49 4.49 0 00-2.88 1.13z",
    "data-name": "Clear 3"
  }));
}

var _default = SvgLineStyleBold;
exports.default = _default;