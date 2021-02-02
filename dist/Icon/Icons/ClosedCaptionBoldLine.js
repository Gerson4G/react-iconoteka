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

function SvgClosedCaptionBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M8.61 15h.89a1.9 1.9 0 001.9-1.9v-.3H9.9v.3a.4.4 0 01-.4.4h-.89a.51.51 0 01-.51-.5v-2a.51.51 0 01.51-.52h.89a.4.4 0 01.4.4v.3h1.5v-.3A1.9 1.9 0 009.5 9h-.89a2 2 0 00-2 2v2a2 2 0 002 2zm6 0h.89a1.9 1.9 0 001.9-1.9v-.3h-1.5v.3a.4.4 0 01-.4.4h-.89a.51.51 0 01-.51-.5v-2a.51.51 0 01.51-.52h.89a.4.4 0 01.4.4v.3h1.5v-.3A1.9 1.9 0 0015.5 9h-.89a2 2 0 00-2 2v2a2 2 0 002 2zM1 4v16h22V4zm20 14H3V6h18z"
  }));
}

var _default = SvgClosedCaptionBoldLine;
exports.default = _default;