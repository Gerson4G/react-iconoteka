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

function SvgShareMicrosoftRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14.46 6.54A3 3 0 0017.06 8a2.92 2.92 0 001.5-.41 3 3 0 10-4.15-4 8.48 8.48 0 00-8.2 3.25l.8.6a7.45 7.45 0 017.1-2.88 2.94 2.94 0 00.35 1.98zm.67-2a2 2 0 01.93-1.22 2.07 2.07 0 011-.26 2 2 0 011 3.73 2.05 2.05 0 01-1 .27 2 2 0 01-1.73-1 2 2 0 01-.2-1.54zm5.69 4.15l-.92.39a7.46 7.46 0 01-1 7.59 3 3 0 10.68.75 8.48 8.48 0 001.24-8.75zM17 21a2 2 0 112-2 2 2 0 01-2 2zM6 14.73a2.94 2.94 0 001.5-1.27 3 3 0 00-1.1-4.09A2.92 2.92 0 004.94 9a3 3 0 100 6h.12A8.46 8.46 0 0012 20.44l.12-1A7.48 7.48 0 016 14.73zM4.94 14a2 2 0 01-1-.26 2 2 0 011-3.74 2.08 2.08 0 011 .27 2 2 0 01.93 1.22 2 2 0 01-.2 1.51 2 2 0 01-1.73 1z"
  }));
}

var _default = SvgShareMicrosoftRegularLine;
exports.default = _default;