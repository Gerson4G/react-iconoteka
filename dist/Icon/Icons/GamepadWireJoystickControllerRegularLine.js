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

function SvgGamepadWireJoystickControllerRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7.42 8.58h-.84v2h-2v.84h2v2h.84v-2h2v-.84h-2zM17 8.5a2.49 2.49 0 101.77.73A2.5 2.5 0 0017 8.5zm1.15 3.65a1.62 1.62 0 11.48-1.15 1.59 1.59 0 01-.48 1.15zM18 5h-5.5V3.42A1.43 1.43 0 0113.92 2H17V1h-3.08a2.42 2.42 0 00-2.42 2.42V5H6a5 5 0 00-5 5v8.9a3.1 3.1 0 006 1L8 17h8l1 2.89a3.1 3.1 0 006-1V10a5 5 0 00-5-5zm4 13.9a2.1 2.1 0 01-4.1.64l-1-2.88-.2-.66H7.3l-.24.66-1 2.88A2.1 2.1 0 012 18.9V10a4 4 0 014-4h12a4 4 0 014 4z"
  }));
}

var _default = SvgGamepadWireJoystickControllerRegularLine;
exports.default = _default;