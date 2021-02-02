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

function SvgBunkBedLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.5 4v4h-5V4H15v4h-3.79l-.78-1.56a1.7 1.7 0 00-1.52-.94h-1.7a1.7 1.7 0 00-1.52.94L4.91 8H3.5V4H3v16h.5v-3.5H15V20h.5v-3.5h5V20h.5V4zM6.14 6.66A1.18 1.18 0 017.21 6h1.7a1.19 1.19 0 011.09.66L10.65 8H5.47zM5.47 16l.67-1.34A1.18 1.18 0 017.21 14h1.7a1.19 1.19 0 011.07.66l.67 1.34zm5.74 0l-.78-1.56a1.7 1.7 0 00-1.52-.94h-1.7a1.7 1.7 0 00-1.52.94L4.91 16H3.5V8.5H15V16zm9.29 0h-5v-3.25h5zm0-3.75h-5V8.5h5z"
  }));
}

var _default = SvgBunkBedLightLine;
exports.default = _default;