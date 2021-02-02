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

function SvgPawPetsAnimalsPetRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14.83 8.22a2.22 2.22 0 00.51.06A2.94 2.94 0 0018 5.87a2.85 2.85 0 00-1.8-3.53 2.22 2.22 0 00-.51-.06A3 3 0 0013 4.69a2.83 2.83 0 001.83 3.53zM14 4.92a2 2 0 011.72-1.64.86.86 0 01.28 0 1.83 1.83 0 011.09 2.32 2 2 0 01-1.72 1.64 1.27 1.27 0 01-.28 0A1.84 1.84 0 0114 4.92zM8.66 8.28a2.22 2.22 0 00.51-.06A2.83 2.83 0 0011 4.69a3 3 0 00-2.7-2.41 2.22 2.22 0 00-.51.06A2.85 2.85 0 006 5.87a2.94 2.94 0 002.66 2.41zM8 3.32a.86.86 0 01.28 0A2 2 0 0110 4.92a1.84 1.84 0 01-1.06 2.33 1.27 1.27 0 01-.28 0 2 2 0 01-1.72-1.61A1.83 1.83 0 018 3.32zm13.51 4.76a2.34 2.34 0 00-.86-.16 3.06 3.06 0 00-2.71 2 2.86 2.86 0 001.28 3.81 2.16 2.16 0 00.86.17 3.06 3.06 0 002.72-2 2.88 2.88 0 00-1.29-3.82zm.36 3.45a2.09 2.09 0 01-1.79 1.39 1.28 1.28 0 01-.48-.09 1.88 1.88 0 01-.73-2.52 2.08 2.08 0 011.78-1.39 1.33 1.33 0 01.49.09 1.47 1.47 0 01.81.92 2.34 2.34 0 01-.08 1.6zM6.06 9.94a3.06 3.06 0 00-2.71-2 2.34 2.34 0 00-.86.16 2.88 2.88 0 00-1.29 3.8 3.06 3.06 0 002.72 2 2.16 2.16 0 00.86-.17 2.86 2.86 0 001.28-3.79zM4.4 12.83a1.28 1.28 0 01-.48.09 2.09 2.09 0 01-1.79-1.39 2.34 2.34 0 01-.08-1.6A1.47 1.47 0 012.86 9a1.33 1.33 0 01.49-.09 2.08 2.08 0 011.78 1.39 1.88 1.88 0 01-.73 2.53zm12.49 1a5.64 5.64 0 00-9.78 0l-1.48 2.6a3.6 3.6 0 005 4.89 2.64 2.64 0 012.76 0 3.72 3.72 0 001.87.53 3.63 3.63 0 003.12-5.42zm.63 5.67a2.7 2.7 0 01-2.27 1.35 2.57 2.57 0 01-1.35-.39 3.67 3.67 0 00-3.8 0 2.57 2.57 0 01-1.35.39 2.7 2.7 0 01-2.27-1.35 2.5 2.5 0 010-2.57L8 14.33a4.63 4.63 0 018 0l1.48 2.6a2.5 2.5 0 01.04 2.57z"
  }));
}

var _default = SvgPawPetsAnimalsPetRegularLine;
exports.default = _default;