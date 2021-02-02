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

function SvgAtheismLight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18.67 12c2.11-2 3.12-4 2.42-5.25a2.83 2.83 0 00-2.6-1 11.65 11.65 0 00-3.15.52C14.62 3.38 13.4 1.5 12 1.5S9.38 3.38 8.66 6.22a12 12 0 00-3.15-.51 2.84 2.84 0 00-2.6 1C2.21 8 3.22 10 5.33 12c-2.11 2-3.12 4-2.42 5.25a2.83 2.83 0 002.6 1 11.65 11.65 0 003.15-.52c.72 2.89 1.94 4.77 3.34 4.77s2.62-1.88 3.34-4.73a11.65 11.65 0 003.15.52 2.84 2.84 0 002.6-1c.7-1.29-.31-3.29-2.42-5.29zm-.18-5.79c1.1 0 1.87.28 2.17.79.41.72 0 2-1.21 3.42a14.28 14.28 0 01-1.14 1.24 22.12 22.12 0 00-2.4-1.91 23.74 23.74 0 00-.46-3 11.43 11.43 0 013.04-.54zM13.75 15c-.58.34-1.17.64-1.75.92-.58-.28-1.17-.58-1.75-.92s-1.14-.69-1.68-1c0-.63-.07-1.29-.07-2s0-1.35.07-2c.54-.36 1.1-.72 1.68-1s1.17-.64 1.75-.92c.58.28 1.17.58 1.75.92s1.14.69 1.68 1c0 .63.07 1.29.07 2s0 1.35-.07 2c-.54.34-1.1.7-1.68 1zm1.62-.42a21.85 21.85 0 01-.4 2.54 23.25 23.25 0 01-2.39-.92c.47-.24.94-.49 1.42-.77s.93-.53 1.37-.82zm-3.95 1.62a23.25 23.25 0 01-2.42.95 21.85 21.85 0 01-.4-2.54c.44.29.89.58 1.37.85s1.03.54 1.45.77zm-3.37-2.59a20.79 20.79 0 01-2-1.61 20.79 20.79 0 012-1.61C8 10.92 8 11.45 8 12s0 1.08.05 1.61zm.58-4.22A21.85 21.85 0 019 6.85a23.25 23.25 0 012.39.92c-.47.24-.94.49-1.42.77s-.9.56-1.34.85zm3.95-1.62A23.25 23.25 0 0115 6.85a21.85 21.85 0 01.4 2.54c-.44-.29-.89-.58-1.37-.85s-.98-.54-1.45-.77zM16 10.39A20.79 20.79 0 0118 12a20.79 20.79 0 01-2 1.61c0-.53.05-1.06.05-1.61S16 10.92 16 10.39zM12 2c1.05 0 2.17 1.66 2.86 4.37A21.4 21.4 0 0012 7.5a21.4 21.4 0 00-2.86-1.13C9.83 3.66 11 2 12 2zm-7.45 8.42C3.36 9 2.93 7.72 3.34 7c.3-.51 1.07-.79 2.17-.79a11.43 11.43 0 013 .5 23.74 23.74 0 00-.46 3 22.12 22.12 0 00-2.4 1.91 14.28 14.28 0 01-1.1-1.2zm1 7.37c-1.1 0-1.87-.28-2.17-.79-.41-.72 0-2 1.21-3.42a14.28 14.28 0 011.14-1.24 22.12 22.12 0 002.4 1.91 23.74 23.74 0 00.46 3 11.43 11.43 0 01-3.08.54zM12 22c-1 0-2.17-1.66-2.86-4.37A21.4 21.4 0 0012 16.5a21.4 21.4 0 002.86 1.13C14.17 20.34 13.05 22 12 22zm8.66-5c-.3.51-1.07.79-2.17.79a11.43 11.43 0 01-3-.5 23.74 23.74 0 00.46-3 22.12 22.12 0 002.4-1.91 14.28 14.28 0 011.14 1.24c1.15 1.38 1.58 2.66 1.17 3.38z"
  }));
}

var _default = SvgAtheismLight;
exports.default = _default;