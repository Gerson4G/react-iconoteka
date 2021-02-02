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

function SvgBatteryUnknownLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 3H14a2 2 0 00-4 0H7.5A2.5 2.5 0 005 5.5v15A2.5 2.5 0 007.5 23h9a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0016.5 3zM12 1.5A1.5 1.5 0 0113.5 3h-3A1.5 1.5 0 0112 1.5zm6.5 19a2 2 0 01-2 2h-9a2 2 0 01-2-2v-15a2 2 0 012-2h9a2 2 0 012 2zm-6.75-3.37a.45.45 0 100 .9.45.45 0 000-.9zm.25-8.9c-1.32 0-2.85.85-2.85 3.24h.5c0-2 1.21-2.74 2.35-2.74a2.27 2.27 0 012.46 2c0 .92-.58 1.31-1.26 1.76a3 3 0 00-1.73 2.7H12A2.51 2.51 0 0113.49 13 2.47 2.47 0 0015 10.78a2.76 2.76 0 00-3-2.55z"
  }));
}

var _default = SvgBatteryUnknownLightLine;
exports.default = _default;