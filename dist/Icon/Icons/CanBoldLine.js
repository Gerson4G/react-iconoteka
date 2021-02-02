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

function SvgCanBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17.68 7.64l-.44-.88a2.64 2.64 0 00.34-1.26c0-2.06-2.3-3.5-5.58-3.5S6.42 3.44 6.42 5.5a2.64 2.64 0 00.34 1.26l-.44.88A3 3 0 006 9v9.26C6 20.46 8.47 22 12 22s6-1.54 6-3.75V9a3 3 0 00-.32-1.36zM12 3.89c2 0 3.68.72 3.68 1.61S14 7.11 12 7.11 8.32 6.39 8.32 5.5 10 3.89 12 3.89zm4 14.36c0 1-1.79 1.75-4 1.75s-4-.78-4-1.75V9a1 1 0 01.11-.45l.17-.36A7.84 7.84 0 0012 9a7.84 7.84 0 003.72-.83l.17.36A1 1 0 0116 9zM13.17 6.12h.66a.51.51 0 00.51-.51v-.22a.51.51 0 00-.51-.51h-.66c-.65 0-1.17.28-1.17.62s.52.62 1.17.62z"
  }));
}

var _default = SvgCanBoldLine;
exports.default = _default;