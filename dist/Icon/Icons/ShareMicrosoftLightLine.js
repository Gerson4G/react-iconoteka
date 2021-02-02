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

function SvgShareMicrosoftLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14.46 6.54A3 3 0 0017.06 8a2.92 2.92 0 001.5-.41 3 3 0 00-3-5.19 2.91 2.91 0 00-1.25 1.44A8.2 8.2 0 006.41 7l.4.3a7.74 7.74 0 017.34-3 3 3 0 00.31 2.24zm.19-2.15a2.44 2.44 0 011.16-1.52 2.5 2.5 0 11-.91 3.42 2.44 2.44 0 01-.25-1.9zM5.8 14.82a3 3 0 001.74-1.36 3 3 0 00-1.1-4.09A2.92 2.92 0 004.94 9a3 3 0 100 6h.37A8.24 8.24 0 0012 20.19l.06-.5a7.74 7.74 0 01-6.26-4.87zm-.86-.36a2.5 2.5 0 01-2.17-3.75 2.52 2.52 0 012.17-1.25 2.5 2.5 0 011.25.34 2.44 2.44 0 011.16 1.52 2.41 2.41 0 01-.25 1.89 2.47 2.47 0 01-2.16 1.25zm15.65-5.69l-.46.23a7.75 7.75 0 01-1.08 7.86A3 3 0 1020 19a3 3 0 00-.62-1.81 8.2 8.2 0 001.21-8.42zM19.5 19a2.5 2.5 0 11-2.5-2.5 2.5 2.5 0 012.5 2.5z"
  }));
}

var _default = SvgShareMicrosoftLightLine;
exports.default = _default;