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

function SvgShareMicrosoftBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.28 8.47l-1.84.79a7 7 0 01-1 7.12A3.06 3.06 0 0017 16a3 3 0 102.78 1.89 9 9 0 001.5-9.42zM17 20.2a1.2 1.2 0 111.2-1.2 1.2 1.2 0 01-1.2 1.2zM14.46 6.54A3 3 0 0017.06 8a2.92 2.92 0 001.5-.41 3 3 0 00-3-5.19 3.12 3.12 0 00-.86.75 9 9 0 00-8.89 3.4l1.6 1.2a7 7 0 016.67-2.65 3 3 0 00.38 1.44zm1.44-1.81a1.21 1.21 0 01.56-.73 1.17 1.17 0 01.6-.16 1.2 1.2 0 01.6 2.24 1.2 1.2 0 01-1.76-1.35zm-9.41 9.79a3 3 0 001-1.06 3 3 0 00-1.1-4.09A2.92 2.92 0 004.94 9a3 3 0 00-1.5 5.6 2.81 2.81 0 001.07.35 9 9 0 007.4 6l.24-2a7 7 0 01-5.66-4.43zm-.51-2a1.22 1.22 0 01-1 .6 1.12 1.12 0 01-.6-.16 1.2 1.2 0 01.6-2.24 1.28 1.28 0 01.6.16 1.24 1.24 0 01.56.73 1.2 1.2 0 01-.14.95z"
  }));
}

var _default = SvgShareMicrosoftBoldLine;
exports.default = _default;