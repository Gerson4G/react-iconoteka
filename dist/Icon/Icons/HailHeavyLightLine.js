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

function SvgHailHeavyLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.64 8.36v-.3a5 5 0 00-4.94-5 4.87 4.87 0 00-2.4.65 5.67 5.67 0 00-9.74 3.96v.6A4 4 0 005 16h14a4 4 0 001.64-7.64zM19 15.5H5a3.49 3.49 0 01-1.23-6.76l.36-.14v-.38a5.07 5.07 0 010-.55 5.18 5.18 0 015.1-5.17A5.11 5.11 0 0113 4.1l.27.29.34-.19a4.36 4.36 0 012.16-.59 4.45 4.45 0 014.44 4.45.34.34 0 010 .1v.51l.32.15A3.49 3.49 0 0119 15.5zm-8.64 5L12 23l1.61-2.47L12 18.06zM12 22.09l-1-1.56L12 19l1 1.56zm4.36-1.56L18 23l1.61-2.47L18 18.06zM18 22.09l-1-1.56L18 19l1 1.56zM4.36 20.53L6 23l1.61-2.47L6 18.06zM6 22.09l-1-1.56L6 19l1 1.56z"
  }));
}

var _default = SvgHailHeavyLightLine;
exports.default = _default;