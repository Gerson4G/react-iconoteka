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

function SvgBasketballBallMediumFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M4 6a10 10 0 00-2 5.31h4.2A9.23 9.23 0 004 6zm3.66 5.31h3.59V2A9.94 9.94 0 005 4.87a10.72 10.72 0 012.69 6.41zm14.27 0A10 10 0 0020 6a9.23 9.23 0 00-2.21 5.31zM19 4.87A9.94 9.94 0 0012.72 2v9.24h3.59A10.72 10.72 0 0119 4.87zM5 19.13A9.94 9.94 0 0011.28 22v-9.28H7.69A10.72 10.72 0 015 19.13zM20 18a10 10 0 002-5.31h-4.2A9.23 9.23 0 0020 18zm-7.25-5.31V22A9.94 9.94 0 0019 19.13a10.72 10.72 0 01-2.7-6.41zM2 12.72A10 10 0 004 18a9.23 9.23 0 002.21-5.31z"
  }));
}

var _default = SvgBasketballBallMediumFill;
exports.default = _default;