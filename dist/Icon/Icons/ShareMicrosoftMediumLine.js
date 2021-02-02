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

function SvgShareMicrosoftMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.05 8.57l-1.38.59a7.24 7.24 0 01-1 7.34A3.06 3.06 0 0017 16a3 3 0 103 3 3.05 3.05 0 00-.34-1.37 8.72 8.72 0 001.39-9.06zM17 20.5a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5zm-2.54-14a3 3 0 002.6 1.5 2.92 2.92 0 001.5-.41 3 3 0 10-4-4.21A8.71 8.71 0 006 6.74l1.2.9a7.2 7.2 0 016.86-2.79 3 3 0 00.4 1.69zm1.15-1.89a1.53 1.53 0 01.7-.91 1.43 1.43 0 01.75-.2 1.49 1.49 0 01.75 2.79 1.42 1.42 0 01-.75.21 1.5 1.5 0 01-1.45-1.89zm-9.34 10a3 3 0 00.17-5.27A2.92 2.92 0 004.94 9a3 3 0 00-1.5 5.6 3 3 0 001.35.4 8.74 8.74 0 007.15 5.74l.18-1.49a7.21 7.21 0 01-5.85-4.61zm-1.33-1.15a1.41 1.41 0 01-.75-.2 1.5 1.5 0 01.75-2.8 1.44 1.44 0 01.75.21 1.53 1.53 0 01.7.91 1.5 1.5 0 01-1.45 1.88z"
  }));
}

var _default = SvgShareMicrosoftMediumLine;
exports.default = _default;