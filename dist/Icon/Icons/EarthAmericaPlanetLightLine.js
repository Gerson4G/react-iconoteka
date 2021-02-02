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

function SvgEarthAmericaPlanetLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm9.37 8.5h-1.14A1.46 1.46 0 0119 9.86a1.49 1.49 0 01-.18-1.37l.78-2.16a9.44 9.44 0 011.77 4.17zM2.79 14.3a1.83 1.83 0 011-.29 1.74 1.74 0 01.45 3.42 9.67 9.67 0 01-1.45-3.13zM12 21.5a9.48 9.48 0 01-7.47-3.65 2.24 2.24 0 00-.77-4.34 2.24 2.24 0 00-1.07.3A9 9 0 012.5 12a9.49 9.49 0 0116.74-6.13l-.89 2.45A2 2 0 0020.23 11h1.22c0 .33.05.66.05 1a9.51 9.51 0 01-9.5 9.5zm2.78-9.69h-4.2a.51.51 0 01-.5-.5.5.5 0 01.5-.5h3.29a1 1 0 00.94-.66l1-2.66a2 2 0 00-1.91-2.68H7.28a.91.91 0 000 1.81.72.72 0 01.72.72v3.08a3 3 0 00.88 2.13l1.7 1.69v5.57h2.08a3 3 0 002.82-2l1.22-3.34a2 2 0 00-1.92-2.66zm1.41 2.51L15 17.66a2.49 2.49 0 01-2.35 1.65h-1.6V14l-.15-.15-1.7-1.69a2.49 2.49 0 01-.73-1.77V7.34a1.22 1.22 0 00-1.19-1.22.41.41 0 010-.81h6.62a1.5 1.5 0 011.41 2l-1 2.66a.51.51 0 01-.47.33h-3.26a1 1 0 00-.7.29 1 1 0 00.7 1.71h4.2A1.46 1.46 0 0116 13a1.48 1.48 0 01.19 1.32z"
  }));
}

var _default = SvgEarthAmericaPlanetLightLine;
exports.default = _default;