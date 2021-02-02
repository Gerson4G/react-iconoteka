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

function SvgCanMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17.67 7.61l-.45-.89a2.4 2.4 0 00.35-1.22c0-2-2.34-3.38-5.57-3.38S6.43 3.54 6.43 5.5a2.4 2.4 0 00.35 1.22l-.45.89A3.18 3.18 0 006 9v9.35C6 20.48 8.52 22 12 22s6-1.52 6-3.62V9a3.18 3.18 0 00-.33-1.39zM12 3.55c2.29 0 4.14.88 4.14 2s-1.85 2-4.14 2-4.14-.97-4.14-2.05S9.71 3.55 12 3.55zm4.5 14.83c0 1.17-2 2.12-4.5 2.12s-4.5-.95-4.5-2.12V9a1.71 1.71 0 01.17-.74l.22-.45a7.61 7.61 0 004.11 1 7.61 7.61 0 004.11-1l.22.45a1.71 1.71 0 01.17.74zM13.17 6.09h1.17a.51.51 0 00.51-.51v-.15a.51.51 0 00-.51-.52h-1.17c-.65 0-1.17.27-1.17.59s.52.59 1.17.59z"
  }));
}

var _default = SvgCanMediumLine;
exports.default = _default;