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

function SvgPawPetsAnimalsPetMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14.77 8.47a2.08 2.08 0 00.55.07 3.2 3.2 0 002.93-2.62 3.07 3.07 0 00-2-3.83 2.64 2.64 0 00-.54-.09 3.19 3.19 0 00-2.93 2.61 3.07 3.07 0 001.99 3.86zM14.24 5a1.72 1.72 0 011.47-1.46h.21a1.14 1.14 0 01.72.62 2.1 2.1 0 01.15 1.41A1.74 1.74 0 0115.32 7a.76.76 0 01-.21 0 1.15 1.15 0 01-.73-.61A2.1 2.1 0 0114.24 5zM8.68 8.54a2.08 2.08 0 00.55-.07 3.07 3.07 0 002-3.83A3.19 3.19 0 008.29 2a2.64 2.64 0 00-.55.06 3.07 3.07 0 00-2 3.83 3.2 3.2 0 002.94 2.65zM7.36 4.17a1.14 1.14 0 01.72-.62h.22A1.72 1.72 0 019.76 5a2.1 2.1 0 01-.14 1.4 1.15 1.15 0 01-.73.6.76.76 0 01-.21 0 1.74 1.74 0 01-1.47-1.42 2.1 2.1 0 01.15-1.41zM21.6 7.88a2.47 2.47 0 00-.92-.18 3.3 3.3 0 00-2.92 2.17A3.08 3.08 0 0019.14 14a2.46 2.46 0 00.92.17A3.27 3.27 0 0023 12a3.07 3.07 0 00-1.4-4.12zm0 3.53a1.81 1.81 0 01-1.52 1.22 1.09 1.09 0 01-.36-.06 1.62 1.62 0 01-.55-2.14 1.83 1.83 0 011.51-1.23 1 1 0 01.35.07 1.17 1.17 0 01.63.72 2.12 2.12 0 01-.08 1.42zM6.24 9.87A3.3 3.3 0 003.32 7.7a2.47 2.47 0 00-.92.18A3.07 3.07 0 001 12a3.27 3.27 0 002.91 2.16 2.46 2.46 0 00.95-.16 3.08 3.08 0 001.38-4.13zm-1.94 2.7a1.09 1.09 0 01-.36.06 1.81 1.81 0 01-1.52-1.22A2.12 2.12 0 012.34 10 1.17 1.17 0 013 9.27a1 1 0 01.35-.07 1.83 1.83 0 011.53 1.23 1.62 1.62 0 01-.58 2.14zm12.59 1.26a5.64 5.64 0 00-9.78 0l-1.48 2.6a3.6 3.6 0 005 4.89 2.64 2.64 0 012.76 0 3.72 3.72 0 001.87.53 3.63 3.63 0 003.12-5.42zm.19 5.41a2.06 2.06 0 01-2.93.79 4.15 4.15 0 00-4.3 0 2.18 2.18 0 01-1.1.32 2.17 2.17 0 01-1.83-1.11 2 2 0 010-2.06l1.48-2.6a4.12 4.12 0 017.16 0l1.48 2.6a2 2 0 01.04 2.06z"
  }));
}

var _default = SvgPawPetsAnimalsPetMediumLine;
exports.default = _default;