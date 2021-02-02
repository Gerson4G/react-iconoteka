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

function SvgAllInclusiveInfinityMedium(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.49 3.51C18.2 1.23 14.76 1 12.82 2.89 10.7 5 11 9.53 11.13 11.13 9.54 11 5 10.69 2.89 12.82c-1.89 1.94-1.66 5.38.62 7.67a6.36 6.36 0 004.41 1.91 4.53 4.53 0 003.26-1.29C13.3 19 13 14.47 12.87 12.87A17.82 17.82 0 0015 13c2 0 4.65-.32 6.13-1.81 1.92-1.95 1.64-5.39-.64-7.68zM10.12 20.05c-1.36 1.36-3.84 1.08-5.54-.63s-2-4.18-.63-5.54c1.06-1.07 3.22-1.37 5.1-1.37a18 18 0 012.29.15c.26 1.93.33 5.84-1.22 7.39zm9.93-9.93c-1.56 1.56-5.46 1.48-7.39 1.22-.26-1.93-.33-5.84 1.22-7.34 1.36-1.36 3.84-1.08 5.54.63s1.99 4.13.63 5.49z"
  }));
}

var _default = SvgAllInclusiveInfinityMedium;
exports.default = _default;