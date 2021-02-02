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

function SvgTheatersEntertainmentRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15 6V2H1v9a7 7 0 007 7 7.18 7.18 0 001.62-.19A7 7 0 0023 15V6zM8 17a6 6 0 01-6-6V3h12v8a6 6 0 01-6 6zm14-2a6 6 0 01-11.43 2.5A7 7 0 0015 11V7h7zm-8.52 3.25h5a2.5 2.5 0 00-5 0zM16 16.6a1.64 1.64 0 011.41.8h-2.85a1.66 1.66 0 011.44-.8zm2.2-4.6a.75.75 0 10-.75-.75.75.75 0 00.75.75zM8 13.75A2.75 2.75 0 0010.73 11h-5.5A2.75 2.75 0 008 13.75zm1.7-1.9a1.9 1.9 0 01-3.4 0zm.52-5.39a.75.75 0 10.75.75.75.75 0 00-.77-.75zm-3.7.75a.75.75 0 00-1.5 0 .75.75 0 101.5 0z"
  }));
}

var _default = SvgTheatersEntertainmentRegularLine;
exports.default = _default;