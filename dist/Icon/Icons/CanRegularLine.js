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

function SvgCanRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17.66 7.59l-.45-.91a2.27 2.27 0 00.36-1.18c0-1.86-2.39-3.25-5.57-3.25S6.43 3.64 6.43 5.5a2.27 2.27 0 00.36 1.18l-.45.91A3.33 3.33 0 006 9.08v9.43C6 20.5 8.57 22 12 22s6-1.5 6-3.49V9.08a3.33 3.33 0 00-.34-1.49zM12 3.22c2.54 0 4.61 1 4.61 2.28S14.54 7.79 12 7.79s-4.61-1-4.61-2.29S9.46 3.22 12 3.22zm5 15.29c0 1.38-2.23 2.49-5 2.49s-5-1.11-5-2.49V9.08A2.26 2.26 0 017.24 8l.28-.56A7.39 7.39 0 0012 8.75a7.39 7.39 0 004.48-1.28l.28.56A2.26 2.26 0 0117 9.08zM13.49 6.65h.71a1.11 1.11 0 001.11-1.1v-.09a1.11 1.11 0 00-1.11-1.11h-.71c-.87 0-1.5.48-1.5 1.15s.63 1.15 1.5 1.15zm0-1.5h.71a.31.31 0 01.31.31v.09a.31.31 0 01-.31.3h-.71c-.39 0-.7-.16-.7-.35s.31-.35.7-.35z"
  }));
}

var _default = SvgCanRegularLine;
exports.default = _default;