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

function SvgSnowMediumRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.64 8.36v-.3a5 5 0 00-4.94-5 4.87 4.87 0 00-2.4.65 5.67 5.67 0 00-9.74 3.96v.6A4 4 0 005 16h14a4 4 0 001.64-7.64zM19 15H5a3 3 0 01-3-3 3 3 0 012-2.8l.72-.27-.08-.77a4 4 0 010-.49A4.67 4.67 0 019.23 3a4.6 4.6 0 013.37 1.45l.54.56.68-.38a3.89 3.89 0 011.91-.52A4 4 0 0119.67 8v.95l.63.28A3 3 0 0119 15zm-8.51 4l-1.64.94V18h-.7v1.89L6.51 19l-.35.6 1.64.95-1.64.95.35.6 1.64-.94V23h.7v-1.89l1.64.94.35-.6-1.64-.95 1.64-.95zm7 0l-1.64.94V18h-.7v1.89L13.51 19l-.35.6 1.64.95-1.64.95.35.6 1.64-.94V23h.7v-1.89l1.64.94.35-.6-1.64-.95 1.64-.95z"
  }));
}

var _default = SvgSnowMediumRegularLine;
exports.default = _default;