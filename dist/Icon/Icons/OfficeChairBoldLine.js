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

function SvgOfficeChairBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18.28 19.8a1.1 1.1 0 101.1 1.1 1.11 1.11 0 00-1.1-1.1zm-10.56 0a1.1 1.1 0 101.11 1.1 1.1 1.1 0 00-1.11-1.1zm1.58-4.53h.26l2.44-.22V17H8a1 1 0 00-1 1v1h12v-1a1 1 0 00-1-1h-4v-2.13l6-.52-.5-2.86A1.81 1.81 0 0017.7 10h-2.22l.57-1.58A1.8 1.8 0 0014.36 6H9.91l-.72-2.67A1.8 1.8 0 007.45 2h-3l1.9 10.79a3 3 0 002.95 2.48zm5.06-7.47l-.8 2.2H11l-.59-2.2zm-5.12 2.67l.36 1.33h8.1l.17.93-8.47.74h-.1a1.18 1.18 0 01-1.18-1L7.29 7.8h1.24zM6.58 3.8h.87L8 6H7z"
  }));
}

var _default = SvgOfficeChairBoldLine;
exports.default = _default;