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

function SvgAmericanFootballBallRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22.31 5.09a4 4 0 00-3.4-3.4A15.79 15.79 0 0017 1.57 15.4 15.4 0 001.69 18.91a4 4 0 003.4 3.4 15.79 15.79 0 001.91.12A15.4 15.4 0 0022.31 5.09zm-5.1 12.12A14.28 14.28 0 017 21.43a15.7 15.7 0 01-1.81-.11 3 3 0 01-2.54-2.54A14.41 14.41 0 0117 2.57a15.7 15.7 0 011.81.11 3 3 0 012.54 2.54 14.3 14.3 0 01-4.14 11.99zM13.74 7a.5.5 0 00-.71.71L14.3 9 12 11.29 10.73 10a.49.49 0 10-.7.7l1.26 1.3L9 14.3 7.73 13a.5.5 0 00-.71.71L10.26 17a.5.5 0 00.71-.71L9.7 15l2.3-2.3 1.27 1.3a.49.49 0 10.7-.7L12.71 12 15 9.7l1.27 1.3a.5.5 0 00.71-.71z"
  }));
}

var _default = SvgAmericanFootballBallRegularLine;
exports.default = _default;