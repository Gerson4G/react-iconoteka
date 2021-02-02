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

function SvgKeyboardWirelessRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.5 6h-17A2.5 2.5 0 001 8.5v11A2.5 2.5 0 003.5 22h17a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0020.5 6zM22 19.5a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 012 19.5v-11A1.5 1.5 0 013.5 7h17A1.5 1.5 0 0122 8.5zm-18-8h3V9H4zm.86-1.64h1.28v.78H4.86zM17 11.5h3V9h-3zm.86-1.64h1.28v.78h-1.28zM11.33 9h-3v2.5h3zm-.86 1.64H9.19v-.78h1.28zm2.2.86h3V9h-3zm.86-1.64h1.28v.78h-1.28zM4 19h3v-2.5H4zm.86-1.64h1.28v.78H4.86zM17 19h3v-2.5h-3zm.86-1.64h1.28v.78h-1.28zM8.33 19h7.34v-2.5H8.33zm.86-1.64h5.62v.78H9.19zM4 15.25h3v-2.5H4zm.86-1.64h1.28v.78H4.86zM17 15.25h3v-2.5h-3zm.86-1.64h1.28v.78h-1.28zm-6.53-.86h-3v2.5h3zm-.86 1.64H9.19v-.78h1.28zm2.2.86h3v-2.5h-3zm.86-1.64h1.28v.78h-1.28zM12 2.12a5.46 5.46 0 013.89 1.61L16.6 3a6.49 6.49 0 00-9.2 0l.71.7A5.46 5.46 0 0112 2.12z"
  }));
}

var _default = SvgKeyboardWirelessRegularLine;
exports.default = _default;