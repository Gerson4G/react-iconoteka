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

function SvgPlasticBottleRecyclingRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17 8.37a6.46 6.46 0 00-1.48-4.12l-1.41-1.7V1a1 1 0 00-1-1h-2.22a1 1 0 00-1 1v1.54L8.47 4.27A6.46 6.46 0 007 8.37a2.06 2.06 0 00.36 1.15l.34.48-.34.48A2.06 2.06 0 007 11.63v3.67a2.06 2.06 0 00.36 1.15l.34.48-.15.22A3 3 0 007 18.88v1.69A2.43 2.43 0 009.43 23a2.39 2.39 0 001.08-.26 3.35 3.35 0 013 0 2.39 2.39 0 001.08.26A2.43 2.43 0 0017 20.57v-2a2.06 2.06 0 00-.36-1.15l-.34-.48.34-.48A2.06 2.06 0 0017 15.3v-3.67a2.06 2.06 0 00-.36-1.15L16.3 10l.34-.48A2.06 2.06 0 0017 8.37zM13.11 1v1h-2.22V1zM9.24 4.91l1.42-1.74.14-.17h2.4l.14.17 1.41 1.71A5.47 5.47 0 0116 8.37a1 1 0 01-.18.57l-.34.48-.08.11H8.6l-.08-.11-.34-.48A1 1 0 018 8.37a5.45 5.45 0 011.24-3.46zm6.24 5.67l.34.48a1 1 0 01.18.57v3.67a1 1 0 01-.18.57l-.34.49-.12.17H8.64l-.12-.17-.34-.49A1 1 0 018 15.3v-3.67a1 1 0 01.18-.57l.34-.48v-.05h6.9zm.52 10a1.43 1.43 0 01-2.07 1.28 4.28 4.28 0 00-3.86 0A1.43 1.43 0 018 20.57v-1.69a2.06 2.06 0 01.36-1.15l.14-.2h7l.32.46a1 1 0 01.18.57z"
  }));
}

var _default = SvgPlasticBottleRecyclingRegularLine;
exports.default = _default;