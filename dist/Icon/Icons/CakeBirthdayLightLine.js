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

function SvgCakeBirthdayLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18 9h-5V5.56h-2V9H6a4 4 0 00-4 4v9h20v-9a4 4 0 00-4-4zm-6.51-2.94h1V9h-1zm10 15.43h-19v-6.74h.15A4.44 4.44 0 005.13 14a3.75 3.75 0 014.4 0 4.23 4.23 0 004.94 0 3.75 3.75 0 014.4 0 4.44 4.44 0 002.47.8h.17zm0-7.24h-.17a4 4 0 01-2.19-.71 4.25 4.25 0 00-4.95 0 3.79 3.79 0 01-4.4 0 4.25 4.25 0 00-5 0 4 4 0 01-2.19.71h-.08V13A3.5 3.5 0 016 9.49h12a3.5 3.5 0 013.5 3.5zM12 4.59a1.38 1.38 0 001.39-1.38C13.39 2.1 12 0 12 0s-1.39 2.1-1.39 3.21A1.38 1.38 0 0012 4.59zM12 1a6.12 6.12 0 01.89 2.25.89.89 0 01-1.78 0A6.12 6.12 0 0112 1z"
  }));
}

var _default = SvgCakeBirthdayLightLine;
exports.default = _default;