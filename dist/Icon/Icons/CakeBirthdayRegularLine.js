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

function SvgCakeBirthdayRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18 9h-4.65V5.56h-2.67V9H6a4 4 0 00-4 4v9h20v-9a4 4 0 00-4-4zm-6.47-2.59h1V9h-1zM21 21H3v-5.5h.23a4.22 4.22 0 002.48-.85 3.05 3.05 0 013.81 0 4.05 4.05 0 005 0 3.05 3.05 0 013.81 0 4.22 4.22 0 002.48.85H21zm0-6.5h-.23a3.32 3.32 0 01-1.91-.66 4.05 4.05 0 00-5 0 3 3 0 01-3.8 0 4.05 4.05 0 00-5 0 3.32 3.32 0 01-1.91.66H3V13a3 3 0 013-3h12a3 3 0 013 3zm-9-9.91a1.38 1.38 0 001.39-1.38C13.39 2.1 12 0 12 0s-1.39 2.1-1.39 3.21A1.38 1.38 0 0012 4.59zm0-2.89a4.32 4.32 0 01.54 1.51.54.54 0 01-1.08 0A4.32 4.32 0 0112 1.7z"
  }));
}

var _default = SvgCakeBirthdayRegularLine;
exports.default = _default;