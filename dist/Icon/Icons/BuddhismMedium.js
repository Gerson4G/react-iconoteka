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

function SvgBuddhismMedium(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.85 11.3a8.87 8.87 0 00-2.09-5.07l1.51-1.51-1-1-1.5 1.52a8.87 8.87 0 00-5.07-2.09V1h-1.4v2.15a8.87 8.87 0 00-5.07 2.09L4.72 3.73l-1 1 1.52 1.5a8.87 8.87 0 00-2.09 5.07H1v1.4h2.15a8.87 8.87 0 002.09 5.07l-1.51 1.51 1 1 1.51-1.51a8.87 8.87 0 005.07 2.09V23h1.4v-2.15a8.87 8.87 0 005.07-2.09l1.51 1.51 1-1-1.51-1.51a8.87 8.87 0 002.09-5.07H23V11.3zM12.7 4.55a7.36 7.36 0 014.07 1.69l-4.07 4.07zm-1.4 0v5.76L7.23 6.24a7.36 7.36 0 014.07-1.69zM6.24 7.23l4.07 4.07H4.55a7.36 7.36 0 011.69-4.07zM4.55 12.7h5.76l-4.07 4.07a7.36 7.36 0 01-1.69-4.07zm6.75 6.75a7.36 7.36 0 01-4.07-1.69l4.07-4.07zm.7-6.35a1.1 1.1 0 111.1-1.1 1.1 1.1 0 01-1.1 1.1zm.7 6.35v-5.76l4.07 4.07a7.36 7.36 0 01-4.07 1.69zm5.06-2.68l-4.07-4.07h5.76a7.36 7.36 0 01-1.69 4.07zm-4.07-5.47l4.07-4.07a7.36 7.36 0 011.69 4.07z"
  }));
}

var _default = SvgBuddhismMedium;
exports.default = _default;