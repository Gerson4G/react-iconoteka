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

function SvgRockingChairBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.16 16.57a14.46 14.46 0 01-3.73 2.31L16 14h3v-3.2A1.81 1.81 0 0017.2 9H16V8a3 3 0 00-3-3H8.91l-.72-2.67A1.8 1.8 0 006.45 1h-3l1.77 10.11A3.49 3.49 0 008.16 14l-1.35 5a14.24 14.24 0 01-4-2.42l-1.28 1.5a15.94 15.94 0 0020.94 0zM14.17 8v1H10l-.61-2.2H13A1.21 1.21 0 0114.17 8zM6.45 2.8L7 5H6l-.42-2.2zm.55 8l-.71-4h1.24l.71 2.67.36 1.33h8.6v1.4H8.67A1.69 1.69 0 017 10.8zm1.52 8.75L10 14h4.1l1.63 5.49A13.94 13.94 0 0112 20a13.77 13.77 0 01-3.48-.45z"
  }));
}

var _default = SvgRockingChairBoldLine;
exports.default = _default;