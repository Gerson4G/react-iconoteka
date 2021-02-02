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

function SvgWaterBedMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20 11.5V6a2 2 0 00-2-2H6a2 2 0 00-2 2v5.5H2V20h20v-8.5zM5.5 6a.5.5 0 01.5-.5h12a.5.5 0 01.5.5v5.5h-1.6l-.34-.67a1.49 1.49 0 00-1.34-.83h-.78a1.49 1.49 0 00-1.34.83l-.34.67h-1.52l-.34-.67A1.49 1.49 0 009.56 10h-.78a1.49 1.49 0 00-1.34.83l-.34.67H5.5zm15 12.5h-17V13h17zM10 16.37a3.43 3.43 0 004.1 0 1.92 1.92 0 012.4 0 3.57 3.57 0 002.05.68v-1.5a2.11 2.11 0 01-1.2-.42 3.43 3.43 0 00-4.1 0 1.92 1.92 0 01-2.4 0 3.45 3.45 0 00-4.1 0 2.11 2.11 0 01-1.2.42v1.5a3.57 3.57 0 002.05-.68 1.92 1.92 0 012.4 0z"
  }));
}

var _default = SvgWaterBedMediumLine;
exports.default = _default;