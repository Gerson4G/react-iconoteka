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

function SvgBuddhismRegular(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.86 11.5a8.83 8.83 0 00-2.24-5.42l1.51-1.5-.71-.71-1.5 1.51a8.83 8.83 0 00-5.42-2.24V1h-1v2.14a8.83 8.83 0 00-5.42 2.24l-1.5-1.51-.71.71 1.51 1.5a8.83 8.83 0 00-2.24 5.42H1v1h2.14a8.83 8.83 0 002.24 5.42l-1.51 1.5.71.71 1.5-1.51a8.83 8.83 0 005.42 2.24V23h1v-2.14a8.83 8.83 0 005.42-2.24l1.5 1.51.71-.71-1.51-1.5a8.83 8.83 0 002.24-5.42H23v-1zM12.5 4.14a7.86 7.86 0 014.71 2L13 10.28a2.28 2.28 0 00-.51-.21zm-1 0v5.93a2.28 2.28 0 00-.51.21l-4.2-4.19a7.86 7.86 0 014.71-1.95zM6.09 6.79L10.28 11a2.28 2.28 0 00-.21.51H4.14a7.86 7.86 0 011.95-4.72zM4.14 12.5h5.93a2.28 2.28 0 00.21.51l-4.19 4.2a7.86 7.86 0 01-1.95-4.71zm7.36 7.36a7.86 7.86 0 01-4.71-1.95L11 13.72a2.28 2.28 0 00.51.21zm.5-6.66a1.2 1.2 0 111.2-1.2 1.2 1.2 0 01-1.2 1.2zm.5 6.66v-5.93a2.28 2.28 0 00.51-.21l4.2 4.19a7.86 7.86 0 01-4.71 1.95zm5.41-2.65L13.72 13a2.28 2.28 0 00.21-.51h5.93a7.86 7.86 0 01-1.95 4.72zm-4-5.71a2.28 2.28 0 00-.21-.51l4.19-4.2a7.86 7.86 0 011.95 4.71z"
  }));
}

var _default = SvgBuddhismRegular;
exports.default = _default;