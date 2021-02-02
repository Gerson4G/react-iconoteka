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

function SvgEarthPlanetLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm9.5 10a9.41 9.41 0 01-2.22 6.09h-.78a1 1 0 01-1-1V15.5a1 1 0 00-1-1h-1a1 1 0 01-1-1v-1a2 2 0 012-2h2.81a1 1 0 000-2h-4.17a1 1 0 01-.82-.43 1 1 0 01-.12-.91l.61-1.67a1.51 1.51 0 011.41-1h1.59A9.48 9.48 0 0121.5 12zM4.55 17.88a9.49 9.49 0 01-2-5.71l2.07 2.07zm.5.58V14l-.15-.14-2.4-2.41a9.42 9.42 0 012.77-6.14H7.9a1.5 1.5 0 011.41 2L8.34 10a.51.51 0 01-.47.33H4.78a1 1 0 00-.71.29 1 1 0 00-.29.71 1 1 0 001 1h4A1.46 1.46 0 0110 13a1.48 1.48 0 01.18 1.37L9 17.66a2.49 2.49 0 01-2.35 1.65h-.71a10.25 10.25 0 01-.89-.85zm7 3a9.48 9.48 0 01-5.4-1.69 3 3 0 002.82-2l1.22-3.34a2 2 0 00-1.88-2.68h-4a.51.51 0 01-.5-.5.5.5 0 01.5-.5h3.06a1 1 0 00.94-.66l1-2.66A2 2 0 007.9 4.81H5.81A9.44 9.44 0 0117.1 4h-.88a2 2 0 00-1.88 1.32L13.73 7a1.5 1.5 0 001.41 2h4.17a.5.5 0 010 1H16.5a2.5 2.5 0 00-2.5 2.5v1a1.5 1.5 0 001.5 1.5h1a.5.5 0 01.5.5v1.59a1.5 1.5 0 001.5 1.5h.33A9.48 9.48 0 0112 21.5z"
  }));
}

var _default = SvgEarthPlanetLightLine;
exports.default = _default;