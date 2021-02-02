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

function SvgBasketballBallBoldFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7.81 11.15h3.34V2a10 10 0 00-6.07 2.79 10.78 10.78 0 012.73 6.36zm11.11-6.36A10 10 0 0012.85 2v9.11h3.34a10.78 10.78 0 012.73-6.32zM4 6.07a10 10 0 00-2 5.08h4.11A9.13 9.13 0 004 6.07zm18 5.08a10 10 0 00-2-5.08 9.13 9.13 0 00-2.15 5.08zm-20 1.7a10 10 0 002 5.08 9.13 9.13 0 002.15-5.08zm3 6.36A10 10 0 0011.15 22v-9.15H7.81a10.78 10.78 0 01-2.73 6.36zm15-1.28a10 10 0 002-5.08h-4.11A9.13 9.13 0 0020 17.93zm-7.19-5.08V22a10 10 0 006.07-2.75 10.78 10.78 0 01-2.73-6.36z"
  }));
}

var _default = SvgBasketballBallBoldFill;
exports.default = _default;