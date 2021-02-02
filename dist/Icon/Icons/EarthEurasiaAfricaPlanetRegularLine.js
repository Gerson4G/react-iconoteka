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

function SvgEarthEurasiaAfricaPlanetRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 19a9 9 0 010-18 8.91 8.91 0 015.64 2h-8a2 2 0 00-1.88 1.32L7.16 8a1.49 1.49 0 001.41 2h.79a.6.6 0 110 1.2H8a2 2 0 00-2 2v1.13a1 1 0 001 1h1v1.84a.83.83 0 00.83.83h.84a2.66 2.66 0 002.66-2.67V13h3A2.66 2.66 0 0018 10.33v-5A9 9 0 0121 12a8.69 8.69 0 01-.13 1.45 2.33 2.33 0 00-1.2-.34 2.54 2.54 0 00-1.85.8l-1.15 1.23V18h2A9 9 0 0112 21zm-5-6.67V13.2a1 1 0 011-1h1.36a1.6 1.6 0 100-3.2h-.79a.5.5 0 01-.47-.67l.6-1.67A1 1 0 019.64 6H17v4.33A1.67 1.67 0 0115.33 12h-4v3.33A1.66 1.66 0 019.67 17H9v-2.67zm12.43 2.74H17.6v-1.56l.9-1a1.62 1.62 0 011.17-.51 1.5 1.5 0 011 .38 9 9 0 01-1.24 2.69z"
  }));
}

var _default = SvgEarthEurasiaAfricaPlanetRegularLine;
exports.default = _default;