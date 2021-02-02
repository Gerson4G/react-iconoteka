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

function SvgAllInclusiveInfinityBold(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.49 3.51a6.61 6.61 0 00-4-1.93 4.81 4.81 0 00-3.88 1.32c-2 2-1.93 6.13-1.76 8-1.85-.22-5.91-.32-7.95 1.71s-1.72 5.54.61 7.88a6.61 6.61 0 004 1.93h.54a4.71 4.71 0 003.37-1.34c2-2 1.93-6.14 1.76-8 .46 0 1.07.08 1.75.08 2 0 4.68-.32 6.2-1.84 1.97-1.93 1.69-5.47-.64-7.81zM10 19.68a2.77 2.77 0 01-2.3.74 4.5 4.5 0 01-2.74-1.35c-1.56-1.56-1.84-3.82-.61-5 1-1 3.07-1.26 4.8-1.26a17.73 17.73 0 012 .11c.16 1.6.27 5.32-1.15 6.76zM19.68 10c-1.44 1.45-5.15 1.34-6.8 1.15-.19-1.64-.3-5.36 1.15-6.8a2.77 2.77 0 012.3-.74 4.5 4.5 0 012.74 1.35c1.56 1.53 1.84 3.79.61 5.04z"
  }));
}

var _default = SvgAllInclusiveInfinityBold;
exports.default = _default;