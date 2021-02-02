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

function SvgScreenLockRotationMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 3h-7A2.5 2.5 0 006 5.5v13A2.5 2.5 0 008.5 21h7a2.5 2.5 0 002.5-2.5v-13A2.5 2.5 0 0015.5 3zm1 15.5a1 1 0 01-1 1h-7a1 1 0 01-1-1v-13a1 1 0 011-1h7a1 1 0 011 1zM14 10a2 2 0 00-4 0v1H9v4h6v-4h-1zm-2.9 0a.9.9 0 011.8 0v1h-1.8zm2.7 3.8h-3.6v-1.55h3.6zm-12.38.78l.14.14L.31 16h3.54v-3.57L2.48 13.8l-.14-.14a2.4 2.4 0 010-3.32A2.3 2.3 0 014 9.65v-1.3a3.61 3.61 0 00-2.58 1.07 3.73 3.73 0 000 5.16zm21-5.3L23.69 8h-3.54v3.54l1.37-1.37.14.14a2.4 2.4 0 010 3.32 2.3 2.3 0 01-1.66.69v1.3a3.61 3.61 0 002.58-1.07 3.73 3.73 0 000-5.16z"
  }));
}

var _default = SvgScreenLockRotationMediumLine;
exports.default = _default;