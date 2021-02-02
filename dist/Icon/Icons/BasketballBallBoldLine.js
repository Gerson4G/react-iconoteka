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

function SvgBasketballBallBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm.83 9.17V3.69a8.3 8.3 0 014.48 1.87 10.77 10.77 0 00-2.1 5.61zm-1.66 0H8.79a10.77 10.77 0 00-2.1-5.61 8.3 8.3 0 014.48-1.87zm-4 0H3.69a8.29 8.29 0 011.83-4.42 9.23 9.23 0 011.62 4.42zm0 1.66a9.23 9.23 0 01-1.62 4.42 8.29 8.29 0 01-1.83-4.42zm1.65 0h2.38v7.48a8.3 8.3 0 01-4.48-1.87 10.77 10.77 0 002.07-5.61zm4 0h2.38a10.77 10.77 0 002.1 5.61 8.3 8.3 0 01-4.48 1.87zm4 0h3.45a8.29 8.29 0 01-1.83 4.42 9.23 9.23 0 01-1.58-4.42zm0-1.66a9.23 9.23 0 011.62-4.42 8.29 8.29 0 011.83 4.42z"
  }));
}

var _default = SvgBasketballBallBoldLine;
exports.default = _default;