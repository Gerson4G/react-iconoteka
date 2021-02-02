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

function SvgBasketballBallLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm9.49 9.75h-5.23a9.64 9.64 0 012.57-6.34 9.51 9.51 0 012.66 6.34zm-9.24 0V2.51a9.49 9.49 0 016.22 2.55 10.16 10.16 0 00-2.71 6.69zm-.5 0H8.24a10.16 10.16 0 00-2.71-6.69 9.49 9.49 0 016.22-2.55zm0 .5v9.24a9.49 9.49 0 01-6.22-2.55 10.21 10.21 0 002.71-6.69zm.5 0h3.51a10.21 10.21 0 002.71 6.69 9.49 9.49 0 01-6.22 2.55zM5.17 5.41a9.64 9.64 0 012.57 6.34H2.51a9.51 9.51 0 012.66-6.34zm-2.66 6.84h5.23a9.69 9.69 0 01-2.57 6.34 9.51 9.51 0 01-2.66-6.34zm16.32 6.34a9.69 9.69 0 01-2.57-6.34h5.23a9.51 9.51 0 01-2.66 6.34z"
  }));
}

var _default = SvgBasketballBallLightLine;
exports.default = _default;