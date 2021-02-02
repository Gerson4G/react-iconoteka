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

function SvgPlasticPpLight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15.46 4.1l3.32 5.75-2.14-.58-.13.49 2.95.79.79-3-.48-.13-.57 2.16-3.3-5.73a4.5 4.5 0 00-7.8 0L6.31 7l.44.25L8.54 4.1a4 4 0 016.92 0zM2 19.5a3.93 3.93 0 010-4l3.27-5.74.58 2.14.48-.13-.79-2.95-3 .79.13.48 2.12-.57-3.27 5.73A4.5 4.5 0 005.42 22H9v-.5H5.42a4 4 0 01-3.42-2zm20.52-4.25l-1.79-3.1-.44.25L22 15.5a4 4 0 01-3.46 6H12l1.56-1.57-.35-.35L11 21.74l2.16 2.16.36-.35L12 22h6.61a4.5 4.5 0 003.87-6.75zm-8.55-1.18a1.88 1.88 0 00-2-2 1.93 1.93 0 00-1.32.47l.14-2.08h2.89V10h-3.35l-.2 3.22h.47a1.63 1.63 0 011.34-.62 1.43 1.43 0 011.49 1.47 1.5 1.5 0 01-1.5 1.55 1.59 1.59 0 01-1.51-.83L10 15a2 2 0 002 1.14 2 2 0 001.93-2.07z"
  }));
}

var _default = SvgPlasticPpLight;
exports.default = _default;