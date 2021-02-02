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

function SvgBatteryCharging75RegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M5.33 19h7.34v-.9H5.33zm0-7.4h7.34v-.9H5.33zm0 3.7h7.34v-.9H5.33zM13.5 3H11a2 2 0 00-4 0H4.5A2.5 2.5 0 002 5.5v15A2.5 2.5 0 004.5 23h9a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0013.5 3zM9 2a1 1 0 011 1H8a1 1 0 011-1zm6 18.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 013 20.5v-15A1.5 1.5 0 014.5 4h9A1.5 1.5 0 0115 5.5zm6.21-16.67V1.17H19.7l-2 5.66h2.8v2.66H22l2-5.66zm.2 4.81h-.06V6h-2.46l1.41-4h.06v2.68h2.47z"
  }));
}

var _default = SvgBatteryCharging75RegularLine;
exports.default = _default;