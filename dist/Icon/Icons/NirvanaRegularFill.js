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

function SvgNirvanaRegularFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15.41 16.24a4.89 4.89 0 01-.74.55l.76.76a.45.45 0 00.64-.64zM12 2a10 10 0 1010 10A10 10 0 0012 2zm-6.19 8.93l1.27-1.28-1.27-1.27.63-.64L7.72 9 9 7.74l.64.64-1.28 1.27 1.27 1.28-.63.63-1.28-1.27-1.28 1.27zm10.9 7.26a1.39 1.39 0 01-1 .39 1.35 1.35 0 01-1-.39l-1-1a5.16 5.16 0 01-1.88.37A5.27 5.27 0 017 14.09l1-.33a4.23 4.23 0 008 0l.94.33a5.23 5.23 0 01-.84 1.5l.68.68a1.38 1.38 0 01-.07 1.92zm1.48-7.26l-.63.63-1.28-1.27L15 11.56l-.64-.63 1.27-1.28-1.26-1.27.63-.64L16.28 9l1.28-1.27.63.64-1.27 1.28z"
  }));
}

var _default = SvgNirvanaRegularFill;
exports.default = _default;