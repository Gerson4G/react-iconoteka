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

function SvgEarthAustraliaPlanetRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zM4.52 7h.92a.6.6 0 010 1.2H3.85A10 10 0 014.52 7zM3 12a8.93 8.93 0 01.45-2.8h2a1.6 1.6 0 000-3.2h-.14A9 9 0 0112 3a8.26 8.26 0 011 .06V7a2 2 0 01-2 2H7.33v3.92a1.66 1.66 0 01-1.66 1.67H3.38A9.22 9.22 0 013 12zm9 9a9 9 0 01-8.25-5.41h1.92a2.67 2.67 0 002.66-2.67V10H11a3 3 0 003-3V3.23A9 9 0 0112 21zm3.34-10h-.05a3 3 0 00-2.17.94l-1.45 1.56V17h3.67a3 3 0 003-3 3 3 0 00-3-3zm0 5.05H12.6v-2.2l1.2-1.27a2.08 2.08 0 011.54-.58 2.06 2.06 0 010 4.12z"
  }));
}

var _default = SvgEarthAustraliaPlanetRegularLine;
exports.default = _default;