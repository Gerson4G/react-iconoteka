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

function SvgApplicationSettingsOptionsMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 3H8a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V8a5 5 0 00-5-5zm3.5 13a3.5 3.5 0 01-3.5 3.5H8A3.5 3.5 0 014.5 16V8A3.5 3.5 0 018 4.5h8A3.5 3.5 0 0119.5 8zm-2.85-5.8a6.29 6.29 0 00-.32-.7 4.1 4.1 0 00-.45-.62l-1.62.81-1.39-.8-.11-1.81A4.78 4.78 0 0012 7a4.78 4.78 0 00-.76.08l-.11 1.81-1.39.8-1.62-.81a4.1 4.1 0 00-.45.62 6.29 6.29 0 00-.32.7l1.52 1v1.6l-1.52 1a6.29 6.29 0 00.32.7 4.1 4.1 0 00.45.62l1.62-.81 1.39.8.11 1.81A4.78 4.78 0 0012 17a4.78 4.78 0 00.76-.08l.11-1.81 1.39-.8 1.62.81a4.1 4.1 0 00.45-.62 6.29 6.29 0 00.32-.7l-1.52-1v-1.6zM12 13.51A1.51 1.51 0 1113.51 12 1.5 1.5 0 0112 13.51z",
    "data-name": "Clear 3"
  }));
}

var _default = SvgApplicationSettingsOptionsMediumLine;
exports.default = _default;