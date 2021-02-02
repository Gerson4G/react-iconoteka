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

function SvgFootballBallSoccerBallLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm9.49 9.83l-2.77-2 1.06-3.26a9.41 9.41 0 011.71 5.26zM12 2.5a9.45 9.45 0 012.78.42L12 4.94l-2.78-2A9.45 9.45 0 0112 2.5zM4.22 6.56l1.06 3.26-2.77 2a9.41 9.41 0 011.71-5.26zm.21 11.15h3.42L8.91 21a9.53 9.53 0 01-4.48-3.29zM15.09 21l1.06-3.26h3.42A9.53 9.53 0 0115.09 21zm4.84-3.76h-4.14l-1.28 3.94a9.18 9.18 0 01-5 0l-1.3-3.97H4.07a9.41 9.41 0 01-1.55-4.77L5.87 10 4.59 6.07a9.58 9.58 0 014.06-2.95L12 5.55l3.35-2.43a9.58 9.58 0 014.06 3L18.13 10l3.35 2.43a9.41 9.41 0 01-1.55 4.78zM8.49 10.86L9.83 15h4.34l1.34-4.13L12 8.31zm5.32 3.63h-3.62l-1.11-3.44L12 8.93l2.92 2.12z"
  }));
}

var _default = SvgFootballBallSoccerBallLightLine;
exports.default = _default;