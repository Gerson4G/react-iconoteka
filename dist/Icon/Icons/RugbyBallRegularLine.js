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

function SvgRugbyBallRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6.88 6.88c3.59-3.58 8.2-5 11.26-3.81-2.37.27-6 2.42-9.31 5.76s-5.49 6.94-5.76 9.31c-1.22-3.05.22-7.67 3.81-11.26zm10.24 10.24c-3.59 3.59-8.2 5-11.26 3.81 2.37-.27 6-2.42 9.31-5.76s5.49-6.94 5.76-9.3c1.22 3.05-.22 7.66-3.81 11.25zm-2.69-2.69c-3.91 3.91-8.88 6.85-10.3 5.44s1.53-6.39 5.44-10.3 8.88-6.85 10.3-5.44-1.53 6.39-5.44 10.3zM6.14 6.14C1.41 10.87.2 17.33 3.43 20.57s9.7 2 14.43-2.71S23.8 6.67 20.57 3.43s-9.7-2.02-14.43 2.71z"
  }));
}

var _default = SvgRugbyBallRegularLine;
exports.default = _default;