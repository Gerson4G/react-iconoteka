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

function SvgGamepadWireJoystickControllerBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7.8 8.5H6.2v1.7H4.5v1.6h1.7v1.7h1.6v-1.7h1.7v-1.6H7.8zm9.2 0a2.49 2.49 0 101.77.73A2.5 2.5 0 0017 8.5zm.64 3.14a.92.92 0 11.26-.64.9.9 0 01-.26.64zM18 5h-5V3.75a.76.76 0 01.75-.75H17V1h-3.25A2.75 2.75 0 0011 3.75V5H6a5 5 0 00-5 5v8.42a3.58 3.58 0 006.9 1.33L9 17h6l1.1 2.75a3.58 3.58 0 006.9-1.33V10a5 5 0 00-5-5zm3 13.42A1.58 1.58 0 0119.42 20 1.56 1.56 0 0118 19l-1.1-2.75-.55-1.25h-8.7l-.51 1.26L6 19a1.56 1.56 0 01-1.46 1A1.58 1.58 0 013 18.42V10a3 3 0 013-3h12a3 3 0 013 3z"
  }));
}

var _default = SvgGamepadWireJoystickControllerBoldLine;
exports.default = _default;