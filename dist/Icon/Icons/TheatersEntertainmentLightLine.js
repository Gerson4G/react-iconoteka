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

function SvgTheatersEntertainmentLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M13.48 18.25h5a2.5 2.5 0 00-5 0zm2.5-2a2 2 0 011.94 1.5H14a2 2 0 012-1.5zm2.22-4.54a.5.5 0 00.5-.5.5.5 0 00-.5-.5.5.5 0 00-.5.5.51.51 0 00.5.5zM15 6V2H1v9a7 7 0 007 7 7.16 7.16 0 001.61-.19A7 7 0 0023 15V6zM8 17.5A6.51 6.51 0 011.5 11V2.5h13V11A6.51 6.51 0 018 17.5zM22.5 15a6.49 6.49 0 01-12.4 2.68A7 7 0 0015 11V6.5h7.5zM8 13.75A2.75 2.75 0 0010.73 11h-5.5A2.75 2.75 0 008 13.75zm0-.5a2.26 2.26 0 01-2.2-1.75h4.39A2.25 2.25 0 018 13.25zm2.2-5.54a.5.5 0 00.5-.5.5.5 0 00-.5-.5.5.5 0 00-.5.5.51.51 0 00.5.5zm-4.45 0a.5.5 0 00.5-.5.5.5 0 00-.5-.5.5.5 0 00-.5.5.51.51 0 00.5.5z"
  }));
}

var _default = SvgTheatersEntertainmentLightLine;
exports.default = _default;