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

function SvgCellPhoneWithKeyboardOldPhoneLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 2h-7A2.5 2.5 0 006 4.5v15A2.5 2.5 0 008.5 22h7a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0015.5 2zm-9 10.5h3.33v2.67H6.5zm3.83 2.67V12.5h3.34v2.67zm3.34.5v2.66h-3.34v-2.66zm-7.17 0h3.33v2.66H6.5zm2 5.83a2 2 0 01-2-2v-.67h3.33v2.67zm1.83 0v-2.67h3.34v2.67zm7.17-2a2 2 0 01-2 2h-1.33v-2.67h3.33zm0-1.17h-3.33v-2.66h3.33zm0-3.16h-3.33V12.5h3.33zM14.17 12H6.5V4.5a2 2 0 012-2h7a2 2 0 012 2V12z"
  }));
}

var _default = SvgCellPhoneWithKeyboardOldPhoneLightLine;
exports.default = _default;