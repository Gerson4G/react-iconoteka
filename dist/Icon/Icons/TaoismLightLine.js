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

function SvgTaoismLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zM2.5 12A9.51 9.51 0 0112 2.5a4.63 4.63 0 014.63 4.63c0 2.4-1.92 4.3-4.66 4.62-3.09.36-5.09 2.37-5.09 5.13A5.08 5.08 0 009 21a9.49 9.49 0 01-6.5-9zm9.5 9.5a4.63 4.63 0 01-4.62-4.62c0-2.49 1.82-4.3 4.65-4.63 3-.35 5.1-2.46 5.1-5.12A5.1 5.1 0 0015 3a9.49 9.49 0 01-3 18.5zm0-6.5a1.9 1.9 0 101.9 1.9A1.9 1.9 0 0012 15zm0 3.3a1.4 1.4 0 111.4-1.4 1.4 1.4 0 01-1.4 1.38zM12 9a1.9 1.9 0 10-1.9-1.89A1.9 1.9 0 0012 9zm0-3.29a1.4 1.4 0 11-1.4 1.4A1.4 1.4 0 0112 5.73z"
  }));
}

var _default = SvgTaoismLightLine;
exports.default = _default;