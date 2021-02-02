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

function SvgAmericanFootballBallMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22.31 5.09a4 4 0 00-3.4-3.4A15.79 15.79 0 0017 1.57 15.4 15.4 0 001.69 18.91a4 4 0 003.4 3.4 15.79 15.79 0 001.91.12A15.4 15.4 0 0022.31 5.09zm-5.45 11.77A13.77 13.77 0 017 20.93a14.68 14.68 0 01-1.75-.11 2.44 2.44 0 01-2.1-2.1A13.9 13.9 0 0117 3.07a14.68 14.68 0 011.75.11 2.44 2.44 0 012.1 2.1 13.83 13.83 0 01-3.99 11.58zm-3-9.7a.7.7 0 00-1 1l.95.95L12 11l-1-1a.7.7 0 10-1 1l1 1-1.9 1.84-.95-.95a.7.7 0 00-1 1l3 3a.7.7 0 001-1l-.95-.95L12 13l1 1a.7.7 0 101-1l-1-1 1.87-1.88.95.95a.7.7 0 001-1z"
  }));
}

var _default = SvgAmericanFootballBallMediumLine;
exports.default = _default;