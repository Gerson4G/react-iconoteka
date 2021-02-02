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

function SvgPlasticPpRegular(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15 4.35l2.83 4.91-1.41-.38-.26 1 3.06.82.82-3.06-1-.26-.38 1.41-2.76-4.94a4.5 4.5 0 00-7.8 0L6.31 7l.87.5L9 4.35a3.5 3.5 0 016.06 0zM2.39 19.25a3.48 3.48 0 010-3.5l2.83-4.91.38 1.42 1-.26-.85-3.06-3.06.82.25 1 1.42-.38-2.84 4.87A4.5 4.5 0 005.42 22H9v-1H5.42a3.46 3.46 0 01-3.03-1.75zm20.09-4l-1.79-3.1-.87.5 1.79 3.1a3.5 3.5 0 01-3 5.25h-5.7l1-1-.71-.71L11 21.5l2.24 2.24L14 23l-1-1h5.67a4.5 4.5 0 003.81-6.75zM14 14a1.87 1.87 0 00-2-1.94 2 2 0 00-1.29.44l.13-1.76h2.86V10h-3.48L10 13.3h.74a1.43 1.43 0 011.2-.55A1.24 1.24 0 0113.23 14a1.29 1.29 0 01-1.33 1.33 1.41 1.41 0 01-1.35-.78l-.72.32a2 2 0 002.07 1.21A2.08 2.08 0 0014 14z"
  }));
}

var _default = SvgPlasticPpRegular;
exports.default = _default;