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

function SvgGlassOfSparklingWaterBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M4 2l2.08 18.23a2 2 0 002 1.77h7.86a2 2 0 002-1.77L20 2zm11.93 18H12a.88.88 0 00.06-.28 1.28 1.28 0 00-2.56 0 .88.88 0 00.06.28H8.07L6.85 9.3a2.38 2.38 0 012.6.17 4.67 4.67 0 002.55.8 4.67 4.67 0 002.55-.8A2.61 2.61 0 0116 9a2.34 2.34 0 011.15.31zm1.46-12.77A4.19 4.19 0 0016 7a4.67 4.67 0 00-2.55.8 2.4 2.4 0 01-2.9 0 4.44 4.44 0 00-3.94-.56L6.24 4h11.52zm-3.71 7.84A1.28 1.28 0 1015 16.35a1.28 1.28 0 00-1.32-1.28zm-3.06-3.37A1.28 1.28 0 1011.9 13a1.28 1.28 0 00-1.28-1.3z"
  }));
}

var _default = SvgGlassOfSparklingWaterBoldLine;
exports.default = _default;