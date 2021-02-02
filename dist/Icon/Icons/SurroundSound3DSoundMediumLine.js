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

function SvgSurroundSound3DSoundMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M5.55 11.7v1.5a5.26 5.26 0 015.25 5.25h1.5a6.76 6.76 0 00-6.75-6.75zM3 15.31l-.13 3-1.79 1.78 2.83 2.83 1.82-1.82 3-.13 1.19-1.19-5.7-5.66zm5.14 4.48l-2.49.11h-.46l-.34.33-1 1-1.07-1.14 1-1 .33-.34v-.46l.11-2.49 4 4zm5-14.24H11.7a6.76 6.76 0 006.75 6.75v-1.5a5.26 5.26 0 01-5.25-5.25zm6.89-4.47L18.27 2.9l-3 .13-1.15 1.19 5.66 5.66L21 8.69l.13-3 1.82-1.82zm-.17 4.13v.47l-.11 2.49-4-4 2.49-.11h.46l1.31-1.3 1.13 1.13z"
  }));
}

var _default = SvgSurroundSound3DSoundMediumLine;
exports.default = _default;