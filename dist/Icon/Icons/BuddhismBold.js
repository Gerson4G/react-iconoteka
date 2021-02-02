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

function SvgBuddhismBold(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.84 11.1a8.9 8.9 0 00-1.95-4.72l1.53-1.52-1.28-1.27-1.52 1.52a8.9 8.9 0 00-4.72-1.95V1h-1.8v2.16a8.9 8.9 0 00-4.72 2L4.86 3.59 3.58 4.86l1.53 1.52a8.9 8.9 0 00-1.95 4.72H1v1.8h2.16a8.9 8.9 0 002 4.72l-1.58 1.52 1.28 1.27 1.52-1.52a8.9 8.9 0 004.72 1.95V23h1.8v-2.16a8.9 8.9 0 004.72-1.95l1.52 1.52 1.28-1.27-1.53-1.52a8.9 8.9 0 001.95-4.72H23v-1.8zM12.9 5a7.1 7.1 0 013.43 1.4L12.9 9.83zm-1.8 0v4.83L7.67 6.4A7.1 7.1 0 0111.1 5zM6.4 7.67l3.43 3.43H5a7.1 7.1 0 011.4-3.43zM5 12.9h4.83L6.4 16.33A7.1 7.1 0 015 12.9zm6.1 6.1a7.1 7.1 0 01-3.43-1.4l3.43-3.43zm.9-5.9a1.1 1.1 0 111.1-1.1 1.1 1.1 0 01-1.1 1.1zm.9 5.9v-4.83l3.43 3.43A7.1 7.1 0 0112.9 19zm4.7-2.7l-3.43-3.4H19a7.1 7.1 0 01-1.4 3.43zm-3.43-5.2l3.43-3.43A7.1 7.1 0 0119 11.1z"
  }));
}

var _default = SvgBuddhismBold;
exports.default = _default;