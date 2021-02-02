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

function SvgPizzaSliceLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M10.62 11.07A1.53 1.53 0 0010 8.14a1.5 1.5 0 00-.62.13A1.53 1.53 0 0010 11.2a1.5 1.5 0 00.62-.13zm-1.56-1a1 1 0 01.52-1.36 1 1 0 01.42-.07 1 1 0 01.42 2 1.06 1.06 0 01-.42.09 1 1 0 01-.94-.64zm6.59-.16a1.54 1.54 0 00-.9-.3 1.51 1.51 0 00-1.24.64 1.53 1.53 0 00.33 2.14 1.6 1.6 0 00.9.29 1.53 1.53 0 00.91-2.77zm-.07 1.84a1 1 0 01-1.44.23 1 1 0 01-.41-.67 1 1 0 01.18-.77 1 1 0 01.84-.43 1 1 0 01.6.2 1 1 0 01.23 1.46zM12 13.29a1.51 1.51 0 00-.9-.29 1.53 1.53 0 00-.9 2.77 1.49 1.49 0 00.9.29 1.53 1.53 0 00.9-2.77zm-.07 1.85a1 1 0 01-1.67-1.22 1.07 1.07 0 01.84-.42 1 1 0 01.6.2 1 1 0 01.42.67 1.07 1.07 0 01-.21.77zM22.2 5l-.86-.5a18.53 18.53 0 00-18.59 0l-.87.5L12 22.6l8.23-14.18zM12 21.6l-7.5-13 .26-.15a14.42 14.42 0 0114.48 0l.27.15zM19.53 8a14.9 14.9 0 00-15 0l-.26.15-1.72-3L3 4.94a18 18 0 0118.09 0l.43.25-1.72 3z"
  }));
}

var _default = SvgPizzaSliceLightLine;
exports.default = _default;