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

function SvgApplicationSettingsOptionsRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 3H8a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V8a5 5 0 00-5-5zm4 13a4 4 0 01-4 4H8a4 4 0 01-4-4V8a4 4 0 014-4h8a4 4 0 014 4zm-3.15-5.11a5 5 0 00-.52-1.39 4.86 4.86 0 00-.95-1.15l-1.71.78-.19-1.88A5.14 5.14 0 0012 7a5.14 5.14 0 00-1.47.24l-.19 1.88-1.72-.77a4.86 4.86 0 00-.95 1.15 5 5 0 00-.52 1.39L8.68 12l-1.53 1.1a5 5 0 00.52 1.39 4.86 4.86 0 00.95 1.15l1.71-.78.19 1.88A5.14 5.14 0 0012 17a5.14 5.14 0 001.47-.24l.19-1.88 1.71.78a4.86 4.86 0 00.95-1.15 5 5 0 00.52-1.39L15.32 12zm-2 1.77l1.07.77a3.75 3.75 0 01-.29.67 3.84 3.84 0 01-.43.59l-1.2-.54-.39-.15-.35.2-.36.2v.41l-.13 1.32a3.37 3.37 0 01-1.46 0l-.13-1.32-.05-.41-.36-.21-.36-.2-.37.17-1.21.54a3.84 3.84 0 01-.43-.59 3.75 3.75 0 01-.29-.67l1.07-.77.34-.26v-.82l-.34-.24-1.07-.77a3.75 3.75 0 01.29-.67 3.84 3.84 0 01.43-.59l1.17.53.39.17.36-.21.35-.21v-.4l.13-1.32a3.37 3.37 0 011.46 0l.13 1.32.05.41.36.21.36.2.41-.17 1.21-.54a3.84 3.84 0 01.43.59 3.75 3.75 0 01.29.67l-1.07.77-.34.26v.82zM12 10.6a1.4 1.4 0 101.4 1.4 1.4 1.4 0 00-1.4-1.4zm0 2a.6.6 0 11.6-.6.6.6 0 01-.6.6z",
    "data-name": "Clear 3"
  }));
}

var _default = SvgApplicationSettingsOptionsRegularLine;
exports.default = _default;