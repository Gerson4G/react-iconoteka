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

function SvgFolderSharedLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14.7 10.3a.75.75 0 11-.75.75.76.76 0 01.75-.75m-5.4 0a.75.75 0 11-.75.75.76.76 0 01.75-.75m5.4 3.34a2.25 2.25 0 011.45.53v1.33h-2.9v-1.33a2.25 2.25 0 011.45-.53m-5.4 0a2.25 2.25 0 011.45.53v1.33h-2.9v-1.33a2.25 2.25 0 011.45-.53M8 3H2v18h20V5H10L8 3zM2.5 20.5v-17h5.25L9.6 5.35l.15.15H21.5v15zM14.7 9.8a1.25 1.25 0 101.3 1.25 1.25 1.25 0 00-1.3-1.25zm-5.4 0a1.25 1.25 0 101.25 1.25A1.25 1.25 0 009.3 9.8zm5.4 3.34a2.74 2.74 0 00-1.95.81V16h3.9v-2a2.74 2.74 0 00-1.95-.81zm-5.4 0a2.74 2.74 0 00-2 .81V16h3.9v-2a2.74 2.74 0 00-1.95-.81z"
  }));
}

var _default = SvgFolderSharedLightLine;
exports.default = _default;