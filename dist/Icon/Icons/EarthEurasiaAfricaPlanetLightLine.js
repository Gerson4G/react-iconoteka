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

function SvgEarthEurasiaAfricaPlanetLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm7.73 15.5H17.5v-1.93l.93-1a1.79 1.79 0 011.32-.57 1.71 1.71 0 011.35.68 9.32 9.32 0 01-1.37 2.82zm0-4a2.35 2.35 0 00-1.69.73L17 15.37V18h2.36a9.5 9.5 0 112.14-6 9.16 9.16 0 01-.25 2.11 2.2 2.2 0 00-1.49-.6zM7.43 6.32L6.82 8a1.5 1.5 0 001.41 2h2.1a.6.6 0 010 1.2H8a2 2 0 00-2 2v.8a1 1 0 001 1h1v2a1 1 0 001 1h.5a2.5 2.5 0 002.5-2.5V13h3.5a2.5 2.5 0 002.5-2.5V5H9.31a2 2 0 00-1.88 1.32zM17.5 10.5a2 2 0 01-2 2h-4v3a2 2 0 01-2 2H9a.5.5 0 01-.5-.5v-2.5H7a.5.5 0 01-.5-.5v-.8A1.5 1.5 0 018 11.7h2.33a1.1 1.1 0 000-2.2h-2.1a1 1 0 01-.82-.43 1 1 0 01-.12-.91l.61-1.67a1.51 1.51 0 011.41-1h8.19z"
  }));
}

var _default = SvgEarthEurasiaAfricaPlanetLightLine;
exports.default = _default;