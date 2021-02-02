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

function SvgAllInclusiveInfinityRegular(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.49 3.51C18.25 1.28 14.91 1 13 2.88c-2.28 2.28-1.75 7.5-1.62 8.53-1.16-.15-6.26-.66-8.53 1.62a4.43 4.43 0 00-1.23 3.64 6.4 6.4 0 001.86 3.82 6.22 6.22 0 004.32 1.88 4.34 4.34 0 003.2-1.25c2.28-2.28 1.75-7.5 1.62-8.53a20.58 20.58 0 002.48.16c2 0 4.6-.32 6.05-1.78a4.43 4.43 0 001.23-3.64 6.4 6.4 0 00-1.89-3.82zM10.27 20.42c-1.49 1.49-4.2 1.2-6-.64a5.32 5.32 0 01-1.57-3.2 3.46 3.46 0 01.93-2.85C4.73 12.58 7 12.26 9 12.26a18.25 18.25 0 012.45.16h.11v.11c.02.08.84 5.76-1.29 7.89zm10.15-10.15c-1.7 1.69-5.89 1.59-7.87 1.31h-.11v-.11c0-.06-.82-5.74 1.31-7.87 1.49-1.49 4.21-1.2 6.05.64a5.32 5.32 0 011.57 3.2 3.46 3.46 0 01-.95 2.83z"
  }));
}

var _default = SvgAllInclusiveInfinityRegular;
exports.default = _default;