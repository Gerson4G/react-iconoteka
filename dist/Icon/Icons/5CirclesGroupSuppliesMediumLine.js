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

function Svg5CirclesGroupSuppliesMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15.22 4.88A3.22 3.22 0 1012 8.1a3.22 3.22 0 003.22-3.22zM12 6.6a1.72 1.72 0 111.72-1.72A1.72 1.72 0 0112 6.6zm-3.71 4.2a3.22 3.22 0 00-2.07-4.07 3.4 3.4 0 00-1-.15 3.22 3.22 0 00-1 6.29 3.46 3.46 0 001 .15 3.21 3.21 0 003.07-2.22zm-4.7-1.53a1.71 1.71 0 011.64-1.19 1.59 1.59 0 01.53.08 1.72 1.72 0 01-.53 3.36 1.59 1.59 0 01-.53-.08 1.72 1.72 0 01-1.11-2.17zm6.12 5.88a3.25 3.25 0 00-1.89-.61 3.22 3.22 0 00-1.9 5.83 3.23 3.23 0 003.79-5.22zm-.5 3.62a1.73 1.73 0 01-2.41.38 1.72 1.72 0 011-3.11 1.69 1.69 0 011 .33 1.71 1.71 0 01.38 2.4zm7-4.23a3.22 3.22 0 102.61 1.33 3.21 3.21 0 00-2.64-1.33zm1 4.61a1.73 1.73 0 01-2.72-1.66 1.71 1.71 0 01.69-1.12 1.69 1.69 0 011-.33 1.72 1.72 0 011 3.11zM21.84 8.8a3.23 3.23 0 00-3.07-2.22 3.4 3.4 0 00-1 .15 3.22 3.22 0 001 6.29 3.46 3.46 0 001-.15 3.23 3.23 0 002.07-4.07zm-2.54 2.64a1.59 1.59 0 01-.53.08 1.72 1.72 0 01-.53-3.36 1.59 1.59 0 01.53-.08 1.72 1.72 0 01.53 3.36z"
  }));
}

var _default = Svg5CirclesGroupSuppliesMediumLine;
exports.default = _default;