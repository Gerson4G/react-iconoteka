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

function SvgTrashFullBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 5V3a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H3v2h1.91l1.35 15h11.48l1.35-15H21V5zm-6-2h4v2h-4zm5.91 17H8.09L6.92 7h10.16zm-5.68-1.79A1.2 1.2 0 109 17a1.2 1.2 0 001.23 1.21zm3.54 0a1.2 1.2 0 10-1.2-1.2 1.2 1.2 0 001.2 1.2zm-3.54-3.61A1.2 1.2 0 109 13.4a1.2 1.2 0 001.23 1.2zm3.54 0a1.2 1.2 0 10-1.2-1.2 1.2 1.2 0 001.2 1.2zM10.23 11A1.2 1.2 0 109 9.78 1.2 1.2 0 0010.23 11zm3.54 0a1.2 1.2 0 10-1.2-1.2 1.2 1.2 0 001.2 1.2z"
  }));
}

var _default = SvgTrashFullBoldLine;
exports.default = _default;