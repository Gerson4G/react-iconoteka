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

function SvgPoolBoldLight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14.66 20.56a3.87 3.87 0 00-5.32 0A3.71 3.71 0 017 21.5a3.71 3.71 0 01-2.34-.94A4.2 4.2 0 002 19.5v.5a3.71 3.71 0 012.34.94A4.2 4.2 0 007 22a4.2 4.2 0 002.66-1.06 3.39 3.39 0 014.68 0A4.2 4.2 0 0017 22a4.2 4.2 0 002.66-1.06A3.71 3.71 0 0122 20v-.5a4.2 4.2 0 00-2.66 1.06 3.39 3.39 0 01-4.68 0zm4.68-4.75a3.36 3.36 0 01-3.34.75V4a2 2 0 00-2-2h-1v.5h1A1.5 1.5 0 0115.5 4v2.5h-7V4a2 2 0 00-2-2h-1v.5h1A1.5 1.5 0 018 4v12.57a3.2 3.2 0 01-1 .18 3.71 3.71 0 01-2.34-.94A4.2 4.2 0 002 14.75v.5a3.71 3.71 0 012.34.94A4.2 4.2 0 007 17.25a4.2 4.2 0 002.66-1.06 3.39 3.39 0 014.68 0A4.2 4.2 0 0017 17.25a4.2 4.2 0 002.66-1.06 3.71 3.71 0 012.34-.94v-.5a4.2 4.2 0 00-2.66 1.06zm-3.84.54a5.65 5.65 0 01-.84-.54 3.87 3.87 0 00-5.32 0 5 5 0 01-.84.54V13h7zm0-3.85h-7V10h7zm0-3h-7V7h7z"
  }));
}

var _default = SvgPoolBoldLight;
exports.default = _default;