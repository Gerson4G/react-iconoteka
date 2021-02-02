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

function SvgGlassOfSparklingWaterLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M4 2l2.08 18.23a2 2 0 002 1.77h7.86a2 2 0 002-1.77L20 2zm13.42 18.17a1.5 1.5 0 01-1.49 1.33H8.07a1.5 1.5 0 01-1.49-1.33L5.28 8.76a3.75 3.75 0 014.25.08 4.51 4.51 0 002.47.79 4.51 4.51 0 002.47-.79 4 4 0 012.2-.71 3.92 3.92 0 012 .63zm-.75-12.54a4.51 4.51 0 00-2.47.79 3.79 3.79 0 01-4.4 0 4.25 4.25 0 00-4.59-.2L4.56 2.5h14.88l-.65 5.72a4.38 4.38 0 00-2.12-.59zm-2.44 6.22a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5zm0 2.5a1 1 0 111-1 1 1 0 01-1 1zm-3.82-2.47a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm0-2.5a1 1 0 11-1 1 1 1 0 011-1zm.18 5.44a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5zm0 2.5a1 1 0 111-1 1 1 0 01-1 1z"
  }));
}

var _default = SvgGlassOfSparklingWaterLightLine;
exports.default = _default;