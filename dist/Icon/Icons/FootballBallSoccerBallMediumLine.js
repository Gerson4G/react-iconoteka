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

function SvgFootballBallSoccerBallMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm7.34 5.45a8.66 8.66 0 011.28 3.91l-2.06-1.49zM12 3.35a8.74 8.74 0 012.06.26L12 5.1 9.94 3.61A8.74 8.74 0 0112 3.35zm-7.34 4.1l.78 2.42-2.06 1.49a8.66 8.66 0 011.28-3.91zm.74 10.13H8L8.73 20a8.79 8.79 0 01-3.33-2.42zM15.27 20l.78-2.43h2.55A8.79 8.79 0 0115.27 20zm4.27-3.78h-4.47l-1.38 4.25a8.49 8.49 0 01-3.38 0l-1.38-4.24H4.46a8.6 8.6 0 01-1-3.22L7 10.38 5.65 6.15a8.61 8.61 0 012.74-2L12 6.77l3.61-2.62a8.61 8.61 0 012.74 2L17 10.38 20.59 13a8.6 8.6 0 01-1.05 3.23zm-11-5.37L9.83 15h4.34l1.34-4.13L12 8.31zm4.7 2.78h-2.43l-.73-2.27L12 10l1.92 1.39z"
  }));
}

var _default = SvgFootballBallSoccerBallMediumLine;
exports.default = _default;