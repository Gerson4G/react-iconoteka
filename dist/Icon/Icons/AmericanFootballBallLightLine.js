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

function SvgAmericanFootballBallLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22.31 5.09a4 4 0 00-3.4-3.4A15.79 15.79 0 0017 1.57 15.4 15.4 0 001.69 18.91a4 4 0 003.4 3.4 15.79 15.79 0 001.91.12A15.4 15.4 0 0022.31 5.09zm-4.74 12.48A14.82 14.82 0 017 21.93a14.68 14.68 0 01-1.87-.12 3.46 3.46 0 01-3-3A14.89 14.89 0 0117 2.07a14.68 14.68 0 011.87.12 3.46 3.46 0 013 3 14.81 14.81 0 01-4.3 12.38zm-4-10.73a.26.26 0 00-.35 0 .25.25 0 000 .36l1.62 1.62L12 11.65 10.38 10a.25.25 0 00-.35.35L11.65 12l-2.83 2.83-1.62-1.62a.25.25 0 00-.36 0 .26.26 0 000 .35l3.6 3.6a.26.26 0 00.35 0 .25.25 0 000-.36l-1.62-1.62L12 12.35 13.62 14a.25.25 0 00.35-.35L12.35 12l2.83-2.83 1.62 1.62a.25.25 0 00.36 0 .26.26 0 000-.35z"
  }));
}

var _default = SvgAmericanFootballBallLightLine;
exports.default = _default;