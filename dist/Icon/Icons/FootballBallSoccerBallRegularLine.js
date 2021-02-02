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

function SvgFootballBallSoccerBallRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm7.6 5.2a9 9 0 011.4 4.22l-2.25-1.61zM12 3a9 9 0 012.22.29L12 4.9 9.78 3.29A9 9 0 0112 3zM4.4 7.2l.85 2.61L3 11.42A9 9 0 014.4 7.2zm.68 10.54h2.75l.85 2.62a9.07 9.07 0 01-3.6-2.62zm10.24 2.62l.85-2.62h2.75a9.07 9.07 0 01-3.6 2.62zm4.31-3.62h-4.18l-1.3 4a8.7 8.7 0 01-4.3 0l-1.3-4H4.37A8.81 8.81 0 013 12.65l3.39-2.46-1.29-4a9 9 0 013.5-2.52L12 6.14l3.4-2.47a9 9 0 013.47 2.53l-1.29 4L21 12.65a8.81 8.81 0 01-1.37 4.09zM8.49 10.86L9.83 15h4.34l1.34-4.13L12 8.31zM13.44 14h-2.88l-.9-2.75L12 9.54l2.34 1.7z"
  }));
}

var _default = SvgFootballBallSoccerBallRegularLine;
exports.default = _default;