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

function SvgVpnRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 12a8.81 8.81 0 01-.53 3h-3.94a20.54 20.54 0 00.22-3h-1a18.75 18.75 0 01-.23 3h-7a18.75 18.75 0 01-.23-3 18.75 18.75 0 01.23-3H12V8H8.67c.67-3.07 2.05-5 3.33-5V2a10 10 0 1010 10zM9.64 3.32A11 11 0 007.65 8H4a9 9 0 015.64-4.68zM3 12a8.81 8.81 0 01.53-3h3.94a20.56 20.56 0 000 6H3.53A8.81 8.81 0 013 12zm1 4h3.7a11 11 0 002 4.68A9 9 0 014 16zm8 5c-1.28 0-2.66-1.93-3.33-5h6.66c-.67 3.07-2.05 5-3.33 5zm2.36-.32a11 11 0 002-4.68h3.7a9 9 0 01-5.7 4.68zM21 5h-1.25V3.75a1.75 1.75 0 00-3.5 0V5H15v4h6zm-3.85-1.25a.85.85 0 011.7 0V5h-1.7zm3 4.35H15.9V5.9h4.2z"
  }));
}

var _default = SvgVpnRegularLine;
exports.default = _default;