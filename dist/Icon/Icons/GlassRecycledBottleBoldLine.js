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

function SvgGlassRecycledBottleBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M10 7V1H5v6l-.83.83A4 4 0 003 10.66V20a1 1 0 001 1h7a1 1 0 001-1v-9.34a4 4 0 00-1.17-2.83zm.1 12.1H4.9v-8.44a2.1 2.1 0 01.62-1.49L6.9 7.79V2.9h1.2v4.89l.56.55.82.83a2.1 2.1 0 01.62 1.49zm8.8-3.23A3.57 3.57 0 0021.56 12L21 7h-6l-.56 5a3.57 3.57 0 002.66 3.85v3.55L15 20v1h6v-1l-2.1-.6zm-2.08-2.4a1.56 1.56 0 01-.39-1.22L16.79 9h2.42l.36 3.25a1.58 1.58 0 01-2.75 1.22z"
  }));
}

var _default = SvgGlassRecycledBottleBoldLine;
exports.default = _default;