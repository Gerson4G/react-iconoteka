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

function SvgOfficeChairRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17.88 19H13.5v-4.75l6.38-.57-.35-1.87a1.39 1.39 0 00-1.37-1.14h-2.92l.6-1.67a1.5 1.5 0 00-1.41-2H9.49L8.42 3a1.39 1.39 0 00-1.35-1h-2l1.85 10.21a2.86 2.86 0 002.82 2.36H10l2.51-.22V19H8.12a1.5 1.5 0 101.5 1.5 1.39 1.39 0 00-.09-.5h6.94a1.39 1.39 0 00-.09.5 1.5 1.5 0 101.5-1.5zM14.43 8a.5.5 0 01.41.21.54.54 0 01.06.46l-.73 2h-3.7L9.75 8zM7.07 3a.41.41 0 01.39.3l1 3.7H7l-.7-4zm2.84 10.56h-.17A1.85 1.85 0 017.91 12l-.72-4h1.53l.78 2.93.2.74h8.46a.4.4 0 01.39.32l.15.8zM8.62 20.5a.5.5 0 01-.5.5.5.5 0 110-1 .5.5 0 01.5.5zm9.26.5a.5.5 0 110-1 .5.5 0 010 1z"
  }));
}

var _default = SvgOfficeChairRegularLine;
exports.default = _default;