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

function SvgEarthAustraliaPlanetLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zM3.94 7H6a.6.6 0 010 1.2H3.3A8.6 8.6 0 013.94 7zM2.5 12a9.52 9.52 0 01.6-3.3H6a1.1 1.1 0 100-2.2H4.27a9.47 9.47 0 017.73-4 9.29 9.29 0 011.5.13V7A2.5 2.5 0 0111 9.5H7.5v3.59a2 2 0 01-2 2H3A9.33 9.33 0 012.5 12zm9.5 9.5a9.51 9.51 0 01-8.79-5.91H5.5a2.5 2.5 0 002.5-2.5V10h3a3 3 0 003-3V2.72a9.5 9.5 0 01-2 18.78zM15.34 11h-.05a3 3 0 00-2.17.94l-1.45 1.56V17h3.67a3 3 0 000-6zm0 5.48h-3.17V13.7l1.31-1.4a2.56 2.56 0 011.86-.78 2.49 2.49 0 010 5z"
  }));
}

var _default = SvgEarthAustraliaPlanetLightLine;
exports.default = _default;