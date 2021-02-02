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

function SvgTheatersEntertainmentBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M13.73 17.25h4.5a2.25 2.25 0 00-4.5 0zm4.47-4.84a1.2 1.2 0 10-1.2-1.2 1.2 1.2 0 001.2 1.2zM15 6V2H1v9a7 7 0 007 7 7.16 7.16 0 001.61-.19A7 7 0 0023 15V6zM8 16.1A5.11 5.11 0 012.9 11V3.9h10.2V11A5.11 5.11 0 018 16.1zM21.1 15a5.08 5.08 0 01-9.71 2.12A7 7 0 0015 11V7.9h6.1zM8 13.25A2.25 2.25 0 0010.23 11h-4.5A2.25 2.25 0 008 13.25zM10.2 6a1.2 1.2 0 101.2 1.2A1.2 1.2 0 0010.2 6zM7 7.21a1.2 1.2 0 10-2.4 0 1.2 1.2 0 102.4 0z"
  }));
}

var _default = SvgTheatersEntertainmentBoldLine;
exports.default = _default;