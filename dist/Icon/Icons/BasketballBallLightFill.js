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

function SvgBasketballBallLightFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7.24 11.75h4.51V2a9.94 9.94 0 00-7.08 3.22 10.19 10.19 0 012.57 6.53zm12.43 6.66A10 10 0 0022 12.25h-4.74a9.7 9.7 0 002.41 6.16zm-.34-13.19A9.94 9.94 0 0012.25 2v9.74h4.51a10.19 10.19 0 012.57-6.52zM22 11.75a10 10 0 00-2.32-6.16 9.7 9.7 0 00-2.41 6.16zm-9.74.5V22a9.94 9.94 0 007.08-3.21 10.19 10.19 0 01-2.57-6.53zM2 12.25a10 10 0 002.32 6.16 9.7 9.7 0 002.41-6.16zm2.66 6.53A9.94 9.94 0 0011.75 22v-9.75H7.24a10.19 10.19 0 01-2.57 6.53zM4.33 5.59A10 10 0 002 11.75h4.74a9.7 9.7 0 00-2.41-6.16z"
  }));
}

var _default = SvgBasketballBallLightFill;
exports.default = _default;