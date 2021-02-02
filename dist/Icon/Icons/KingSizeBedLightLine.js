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

function SvgKingSizeBedLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 13.5V8a2 2 0 00-2-2H4a2 2 0 00-2 2v5.5H0V20h.5v-2h23v2h.5v-6.5zM2.5 8A1.5 1.5 0 014 6.5h16A1.5 1.5 0 0121.5 8v5.5h-2l-.78-1.56a1.7 1.7 0 00-1.55-.94h-1.7a1.7 1.7 0 00-1.52.94l-.78 1.56h-2.34l-.78-1.56A1.7 1.7 0 008.53 11h-1.7a1.7 1.7 0 00-1.52.94l-.78 1.56h-2zm16.41 5.5h-5.18l.67-1.34a1.18 1.18 0 011.07-.66h1.7a1.19 1.19 0 011.07.66zm-8.64 0H5.09l.67-1.34a1.19 1.19 0 011.07-.66h1.7a1.18 1.18 0 011.07.66zm-9.77 4V14h23v3.5z"
  }));
}

var _default = SvgKingSizeBedLightLine;
exports.default = _default;