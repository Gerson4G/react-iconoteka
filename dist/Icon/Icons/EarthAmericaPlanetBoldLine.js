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

function SvgEarthAmericaPlanetBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm6.45 6.93l.48-1.3a8.17 8.17 0 01.77 1.57h-1.06a.18.18 0 01-.16-.09.22.22 0 01-.03-.18zM4.91 16.11a8.11 8.11 0 01-.8-1.92 1 1 0 01.38-.08 1 1 0 01.41 2zM12 20.2a8.16 8.16 0 01-6-2.64 2.84 2.84 0 00-1.5-5.25 3 3 0 00-.67.09V12a8.18 8.18 0 012.6-6 .89.89 0 00.85.62.72.72 0 01.72.74v3.06a3 3 0 00.88 2.13l1.7 1.69v4.57H13a3 3 0 002.82-2l.85-2.34a2 2 0 00-1.88-2.68h-3.18a.5.5 0 01-.5-.5.5.5 0 01.5-.5h2.26a1 1 0 00.94-.66l1-2.66a2 2 0 00-1.91-2.66H8.07A8.16 8.16 0 0117.6 6l-.84 2.3a2 2 0 001.88 2.7h1.49A8.13 8.13 0 0112 20.2zM9.69 6.61h4.21a.19.19 0 01.16.08.2.2 0 010 .19L13.31 9h-1.7a2.31 2.31 0 00-1.61.68l-.18.21V7.36a2.72 2.72 0 00-.13-.75zM12.36 17v-3.4h2.4a.17.17 0 01.16.08.2.2 0 010 .19l-.85 2.34A1.22 1.22 0 0113 17z"
  }));
}

var _default = SvgEarthAmericaPlanetBoldLine;
exports.default = _default;