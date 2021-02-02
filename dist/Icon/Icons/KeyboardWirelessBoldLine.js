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

function SvgKeyboardWirelessBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20 6H4a3 3 0 00-3 3v10a3 3 0 003 3h16a3 3 0 003-3V9a3 3 0 00-3-3zm1 13a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1h16a1 1 0 011 1zM8 18h8v-2H8zm5-5h-2v2h2zm0-3h-2v2h2zm-3 3H8v2h2zm0-3H8v2h2zm-5 5h2v-2H5zm0 3h2v-2H5zm12 0h2v-2h-2zM5 12h2v-2H5zm9 3h2v-2h-2zm0-3h2v-2h-2zm3 3h2v-2h-2zm0-3h2v-2h-2zm-5-9.38a5 5 0 013.54 1.47L17 2.67a7 7 0 00-9.9 0l1.36 1.42A5 5 0 0112 2.62z"
  }));
}

var _default = SvgKeyboardWirelessBoldLine;
exports.default = _default;