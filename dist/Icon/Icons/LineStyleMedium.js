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

function SvgLineStyleMedium(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3 20.75h2v-1.5H3zm16 0h2v-1.5h-2zm-4 0h2v-1.5h-2zm-4 0h2v-1.5h-2zm-4 0h2v-1.5H7zm4-6.5H3v1.5h8zm2 1.5h8v-1.5h-8zm-10-5h18v-1.5H3zm15.27-6.42a2.48 2.48 0 01-3.54 0 4 4 0 00-5.46 0 2.79 2.79 0 01-1.77.73 2.79 2.79 0 01-1.77-.73A4.25 4.25 0 003 3.25v1.5a2.75 2.75 0 011.77.74A4.29 4.29 0 007.5 6.56a4.29 4.29 0 002.73-1.07 2.48 2.48 0 013.54 0 4.29 4.29 0 002.73 1.07 4.29 4.29 0 002.73-1.07A2.75 2.75 0 0121 4.75v-1.5a4.25 4.25 0 00-2.73 1.08z",
    "data-name": "Clear 3"
  }));
}

var _default = SvgLineStyleMedium;
exports.default = _default;