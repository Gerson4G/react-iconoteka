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

function SvgScreenLockRotationBoldFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 9.4a.6.6 0 00-.6.6v1h1.2v-1a.6.6 0 00-.6-.6zM15.5 3h-7A2.5 2.5 0 006 5.5v13A2.5 2.5 0 008.5 21h7a2.5 2.5 0 002.5-2.5v-13A2.5 2.5 0 0015.5 3zM15 15H9v-4h1v-1a2 2 0 014 0v1h1zm7.64-5.73L24 7.91h-4v4l1.48-1.48a2.27 2.27 0 010 3.12 2.22 2.22 0 01-1.48.65v1.6a3.81 3.81 0 002.69-1.11 3.91 3.91 0 000-5.38zM1.31 14.69h.05L0 16.09h4v-4L2.49 13.6h-.05a2.27 2.27 0 010-3.12A2.22 2.22 0 014 9.8V8.2a3.81 3.81 0 00-2.69 1.11 3.91 3.91 0 000 5.38z"
  }));
}

var _default = SvgScreenLockRotationBoldFill;
exports.default = _default;