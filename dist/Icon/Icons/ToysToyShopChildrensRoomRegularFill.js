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

function SvgToysToyShopChildrensRoomRegularFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22.19 17.35c-.4.32-.81.63-1.24.92s-.82.52-1.24.76l-1.2-2.72a6 6 0 01-.51-2.42V8h2.23a1.53 1.53 0 001.52-1.36A1.59 1.59 0 0020.58 5L18 4.22V2h-.5A3.5 3.5 0 0014 5.5V9H6.83a3.45 3.45 0 00-3.16 2.06L3 12.69l.92.41.72-1.63A2.42 2.42 0 016 10.16v3.73a6 6 0 01-.51 2.42L4.29 19c-.42-.24-.84-.49-1.24-.76s-.84-.6-1.24-.92l-.63.77c.42.35.86.67 1.31 1s.92.59 1.4.85a15.73 15.73 0 001.49.72c.51.21 1 .41 1.56.57s1.08.31 1.63.42 1.13.2 1.69.26A16.76 16.76 0 0012 22a16.76 16.76 0 001.74-.08 16.903 16.903 0 004.88-1.25 15.73 15.73 0 001.49-.67c.48-.26.95-.55 1.4-.85s.89-.63 1.31-1zm-5.43 2.94q-.75.23-1.53.39a14.54 14.54 0 01-1.59.24 16.34 16.34 0 01-3.28 0 14.54 14.54 0 01-1.59-.24q-.78-.16-1.53-.39c-.48-.15-1-.33-1.44-.53l1.13-2.57A2 2 0 018.76 16h6.48a2 2 0 011.83 1.19l1.13 2.57c-.47.24-.96.38-1.44.53z"
  }));
}

var _default = SvgToysToyShopChildrensRoomRegularFill;
exports.default = _default;