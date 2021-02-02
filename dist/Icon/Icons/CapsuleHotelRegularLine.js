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

function SvgCapsuleHotelRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6.9 10.3A1.9 1.9 0 105 8.4a1.9 1.9 0 001.9 1.9zm0-3a1 1 0 11-1.05 1.1A1 1 0 016.9 7.35zM2 3v18h20V3zm16 17h-7v-4h5a2 2 0 012 2zm3 0h-2v-2a3 3 0 00-3-3h-6v5H3v-7.5h18zm-10-8.5v-4h5a2 2 0 012 2v2zm10 0h-2v-2a3 3 0 00-3-3h-6v5H3V4h18zM6.9 18.8A1.9 1.9 0 105 16.9a1.9 1.9 0 001.9 1.9zm0-3a1 1 0 11-1.05 1 1 1 0 011.05-.95z"
  }));
}

var _default = SvgCapsuleHotelRegularLine;
exports.default = _default;