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

function SvgToysToyShopChildrensRoomRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22.19 17.35c-.4.32-.81.63-1.24.92-.2.14-.43.26-.64.39l-1.8-4.1a5.89 5.89 0 01-.51-2.41V8.88h1.55a2.1 2.1 0 001.86-1.06 2 2 0 00-1.29-3L18 4.26V2h-1a3.28 3.28 0 00-3.26 2.88l-.6 5.12H6.83a3.45 3.45 0 00-3.16 2.06L3 13.69l.92.41.72-1.63A2.42 2.42 0 016 11.16v1a5.89 5.89 0 01-.51 2.41l-1.8 4.1c-.21-.13-.44-.25-.64-.39-.43-.29-.84-.6-1.24-.92l-.63.77c.41.34.86.67 1.31 1a16.28 16.28 0 001.4.85c.48.26 1 .5 1.49.72s1 .41 1.56.57 1.08.31 1.63.42 1.13.2 1.69.26a16.87 16.87 0 003.48 0 16.903 16.903 0 004.88-1.25c.51-.21 1-.46 1.49-.72a16.28 16.28 0 001.4-.85c.45-.31.9-.64 1.31-1zM6.41 15A7 7 0 007 12.15V11h7l.75-6A2.29 2.29 0 0117 3v2l2.88.81a1 1 0 01.7.59 1 1 0 010 .93 1.11 1.11 0 01-1 .53H17v4.27a7 7 0 00.59 2.87l1.85 4.2c-.32.17-.64.33-1 .47l-1.25-2.84A3 3 0 0014.47 15H9.53a3 3 0 00-2.75 1.79l-1.25 2.84c-.33-.14-.65-.3-1-.47zm10.35 5.33q-.75.23-1.53.39a14.54 14.54 0 01-1.59.24 16.34 16.34 0 01-3.28 0 14.54 14.54 0 01-1.59-.24q-.78-.16-1.53-.39L6.46 20l1.24-2.81A2 2 0 019.53 16h4.94a2 2 0 011.83 1.19L17.54 20z"
  }));
}

var _default = SvgToysToyShopChildrensRoomRegularLine;
exports.default = _default;