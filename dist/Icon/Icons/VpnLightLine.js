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

function SvgVpnLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.5 12a9.25 9.25 0 01-.68 3.5h-4.38a19.48 19.48 0 00.31-3.5h-.5a19.48 19.48 0 01-.31 3.5H8.06a19.91 19.91 0 010-7H12V8H8.17c.69-3.21 2.16-5.5 3.83-5.5V2a10 10 0 1010 10zM10.32 2.66A9.32 9.32 0 007.65 8H3.4a9.5 9.5 0 016.92-5.34zM2.5 12a9.25 9.25 0 01.68-3.5h4.38a19.91 19.91 0 000 7H3.18A9.25 9.25 0 012.5 12zm.9 4h4.25a9.32 9.32 0 002.67 5.34A9.5 9.5 0 013.4 16zm4.77 0h7.66c-.69 3.21-2.16 5.5-3.83 5.5S8.86 19.21 8.17 16zm5.51 5.34A9.32 9.32 0 0016.35 16h4.25a9.5 9.5 0 01-6.92 5.34zM21 5h-1.5V3.5a1.5 1.5 0 00-3 0V5H15v4h6zm-4-1.5a1 1 0 012 0V5h-2zm3.5 5h-5v-3h5z"
  }));
}

var _default = SvgVpnLightLine;
exports.default = _default;