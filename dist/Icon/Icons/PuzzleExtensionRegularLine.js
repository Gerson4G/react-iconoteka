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

function SvgPuzzleExtensionRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 10a3 3 0 00-1 .18V4h-6.18a3 3 0 10-5.64 0H2v7.6l1.33-.47A1.89 1.89 0 014 11a2 2 0 010 4 1.89 1.89 0 01-.67-.13L2 14.4V22h7.6l-.47-1.33A1.89 1.89 0 019 20a2 2 0 014 0 1.89 1.89 0 01-.13.67L12.4 22H20v-6.18A3 3 0 1021 10zm0 5a1.89 1.89 0 01-.67-.13L19 14.4V21h-5.18a3 3 0 10-5.64 0H3v-5.18a3 3 0 100-5.64V5h6.6l-.47-1.33A1.89 1.89 0 019 3a2 2 0 014 0 1.89 1.89 0 01-.13.67L12.4 5H19v6.6l1.33-.47A1.89 1.89 0 0121 11a2 2 0 010 4z"
  }));
}

var _default = SvgPuzzleExtensionRegularLine;
exports.default = _default;