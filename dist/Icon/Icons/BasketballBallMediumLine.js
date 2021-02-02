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

function SvgBasketballBallMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm.67 9.33V3.38a8.63 8.63 0 014.93 2 10.55 10.55 0 00-2.24 5.91zm-1.34 0H8.64A10.55 10.55 0 006.4 5.42a8.63 8.63 0 014.93-2zm-4 0H3.38a8.73 8.73 0 012.05-4.95 9.25 9.25 0 011.86 4.95zm0 1.34a9.25 9.25 0 01-1.86 5 8.73 8.73 0 01-2-5zm1.35 0h2.69v8a8.63 8.63 0 01-4.93-2 10.57 10.57 0 002.2-6zm4 0h2.69a10.57 10.57 0 002.24 5.91 8.63 8.63 0 01-4.93 2zm4 0h3.91a8.73 8.73 0 01-2.05 5 9.25 9.25 0 01-1.83-5zm0-1.34a9.25 9.25 0 011.86-4.95 8.73 8.73 0 012.05 5z"
  }));
}

var _default = SvgBasketballBallMediumLine;
exports.default = _default;