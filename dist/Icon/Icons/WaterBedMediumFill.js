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

function SvgWaterBedMediumFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M2 13v7h20v-7zm17 4.8a3.88 3.88 0 01-2.15-.67 2.31 2.31 0 00-2.7 0 3.8 3.8 0 01-4.3 0 2.49 2.49 0 00-1.35-.43 2.49 2.49 0 00-1.35.43A3.88 3.88 0 015 17.8v-1.5a2.49 2.49 0 001.35-.43 3.78 3.78 0 014.3 0 2.31 2.31 0 002.7 0 3.8 3.8 0 014.3 0 2.49 2.49 0 001.35.43zM6.64 10.47a1.74 1.74 0 011.57-1h1.06a1.73 1.73 0 011.56 1l.52 1h1.3l.52-1a1.73 1.73 0 011.56-1h1.06a1.74 1.74 0 011.57 1l.52 1H20V7a2 2 0 00-2-2H6a2 2 0 00-2 2v4.5h2.12z"
  }));
}

var _default = SvgWaterBedMediumFill;
exports.default = _default;