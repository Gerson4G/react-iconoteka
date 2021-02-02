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

function SvgCloudOffMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.79 11.86a5.26 5.26 0 00.33-1.78 5.38 5.38 0 00-5.37-5.37 5.32 5.32 0 00-2.42.6 7.38 7.38 0 00-1.26-.94 6.89 6.89 0 00-10.23 7.19A4.36 4.36 0 004.36 20h15.28a4.35 4.35 0 002.15-8.14zm-2.15 6.64H4.36a2.86 2.86 0 01-2.86-2.86A2.83 2.83 0 013.36 13l1.17-.44-.22-1.26a5.4 5.4 0 018-5.63 5.61 5.61 0 011 .74l.77.71.92-.47a3.81 3.81 0 011.74-.44 3.88 3.88 0 013.87 3.87 3.79 3.79 0 01-.24 1.28L20 12.54l1.09.63a2.82 2.82 0 011.45 2.47 2.86 2.86 0 01-2.9 2.86zm-5.7-9.43L12 11l-1.94-1.93-1 1L11 12l-1.93 1.94 1 1L12 13l1.94 1.94 1-1L13 12l1.94-1.94z"
  }));
}

var _default = SvgCloudOffMediumLine;
exports.default = _default;