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

function SvgApplicationsAppsFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19.2 3h-4.4A1.81 1.81 0 0013 4.8v4.4a1.81 1.81 0 001.8 1.8h4.4A1.81 1.81 0 0021 9.2V4.8A1.81 1.81 0 0019.2 3zm-10 0H4.8A1.81 1.81 0 003 4.8v4.4A1.81 1.81 0 004.8 11h4.4A1.81 1.81 0 0011 9.2V4.8A1.81 1.81 0 009.2 3zm10 10h-4.4a1.81 1.81 0 00-1.8 1.8v4.4a1.81 1.81 0 001.8 1.8h4.4a1.81 1.81 0 001.8-1.8v-4.4a1.81 1.81 0 00-1.8-1.8zm-10 0H4.8A1.81 1.81 0 003 14.8v4.4A1.81 1.81 0 004.8 21h4.4a1.81 1.81 0 001.8-1.8v-4.4A1.81 1.81 0 009.2 13z",
    "data-name": "Clear 3"
  }));
}

var _default = SvgApplicationsAppsFill;
exports.default = _default;