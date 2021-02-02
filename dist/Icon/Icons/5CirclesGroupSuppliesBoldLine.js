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

function Svg5CirclesGroupSuppliesBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15.22 4.88A3.22 3.22 0 1012 8.1a3.22 3.22 0 003.22-3.22zM12 6.1a1.22 1.22 0 111.22-1.22A1.22 1.22 0 0112 6.1zm-3.71 4.7a3.22 3.22 0 00-2.07-4.07 3.4 3.4 0 00-1-.15 3.22 3.22 0 00-1 6.29 3.46 3.46 0 001 .15 3.21 3.21 0 003.07-2.22zM4.06 9.42a1.24 1.24 0 011.17-.84 1.31 1.31 0 01.38.06 1.21 1.21 0 01.71.6 1.23 1.23 0 01.07.94 1.22 1.22 0 01-1.54.82 1.24 1.24 0 01-.79-1.58zm5.65 5.73a3.25 3.25 0 00-1.89-.61 3.22 3.22 0 00-1.9 5.83 3.23 3.23 0 003.79-5.22zm-.91 3.33A1.22 1.22 0 016.61 18a1.2 1.2 0 011.21-1.41 1.22 1.22 0 011.2 1 1.18 1.18 0 01-.22.89zm7.38-3.94a3.22 3.22 0 102.61 1.33 3.21 3.21 0 00-2.61-1.33zm.72 4.21a1.22 1.22 0 01-1.7-.27 1.22 1.22 0 01.27-1.71 1.2 1.2 0 01.71-.23A1.2 1.2 0 0117.39 18a1.2 1.2 0 01-.49.75zm4.94-9.95a3.23 3.23 0 00-3.07-2.22 3.4 3.4 0 00-1 .15 3.22 3.22 0 001 6.29 3.46 3.46 0 001-.15 3.23 3.23 0 002.07-4.07zM19.15 11a1.22 1.22 0 01-1.54-.78 1.23 1.23 0 01.07-.94 1.21 1.21 0 01.71-.6 1.31 1.31 0 01.38-.06 1.22 1.22 0 01.38 2.38z"
  }));
}

var _default = Svg5CirclesGroupSuppliesBoldLine;
exports.default = _default;