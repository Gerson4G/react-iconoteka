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

function SvgPowerSocketJLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19 5H5L.57 12 5 19h14l4.47-7zm-.27 13.5H5.31L1.16 12l4.15-6.5h13.38l4.15 6.5zM12 6.59a2.28 2.28 0 102.28 2.28A2.28 2.28 0 0012 6.59zm0 4.05a1.78 1.78 0 111.78-1.77A1.78 1.78 0 0112 10.64zm5.64-.14a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5zm0 2.5a1 1 0 111-1 1 1 0 01-1 1zM12 14a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0012 14zm0 2.5a1 1 0 111-1 1 1 0 01-1 .98zm-5.64-6a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5zm0 2.5a1 1 0 111-1 1 1 0 01-1 1z"
  }));
}

var _default = SvgPowerSocketJLightLine;
exports.default = _default;