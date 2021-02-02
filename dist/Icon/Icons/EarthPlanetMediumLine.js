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

function SvgEarthPlanetMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zM7.9 6.31a.49.49 0 01.41.21.51.51 0 01.06.48l-.85 2.31H5.66a2 2 0 00-1.41.58 2 2 0 00-.48.76l-.13-.14a8.42 8.42 0 012.07-4.2zm-4.37 6.21l1.72 1.72v2.87a8.44 8.44 0 01-1.72-4.59zm5.62.79a.47.47 0 01.4.21.5.5 0 01.07.46l-1 2.67a1.5 1.5 0 01-1.41 1h-.49v-4.33zm-1.76 5.82a3 3 0 002.66-2l1-2.68a2 2 0 00-1.87-2.68H5.66a.51.51 0 01-.5-.5.5.5 0 01.5-.5h2.21a1 1 0 00.94-.66l1-2.66A2 2 0 007.9 4.81h-.41a8.42 8.42 0 018.79-.14h-.39A2 2 0 0014 6l-.85 2.34a1.5 1.5 0 001.41 2h3a.5.5 0 01.5.5.5.5 0 01-.5.5h-1.64a2.5 2.5 0 00-2.5 2.5v.6a1.91 1.91 0 001.91 1.9h.86a.23.23 0 01.23.24V18a1.91 1.91 0 00.35 1 8.46 8.46 0 01-9.38.1zM18 18.06a.35.35 0 010-.11v-1.38a1.73 1.73 0 00-1.73-1.74h-.86a.4.4 0 01-.41-.4v-.6a1 1 0 011-1h1.61a2 2 0 000-4h-3l.85-2.33a.5.5 0 01.47-.33h2.28A8.47 8.47 0 0118 18.06z"
  }));
}

var _default = SvgEarthPlanetMediumLine;
exports.default = _default;