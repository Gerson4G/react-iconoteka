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

function SvgAllInclusiveInfinityLight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.49 3.51a6.22 6.22 0 00-3.74-1.82 4.3 4.3 0 00-3.52 1.17c-2.43 2.43-1.59 8.43-1.55 8.69v.15h-.15c-.26 0-6.25-.89-8.69 1.55a4.29 4.29 0 00-1.17 3.52 6.37 6.37 0 005.56 5.56 4.18 4.18 0 00.5 0 4.19 4.19 0 003-1.19c2.43-2.43 1.59-8.43 1.55-8.69v-.15h.15a21.52 21.52 0 002.66.17c2 0 4.61-.3 6-1.72a4.29 4.29 0 001.17-3.52 6.22 6.22 0 00-1.77-3.72zM10.41 20.79a3.77 3.77 0 01-3.11 1 5.57 5.57 0 01-3.43-1.68 5.57 5.57 0 01-1.68-3.41 3.79 3.79 0 011-3.11C4.51 12.29 7 12 8.85 12a18.06 18.06 0 012.62.18h.31l.05.31c.03.28.84 6.04-1.42 8.3zm10.38-10.38c-2.27 2.27-8 1.45-8.26 1.41h-.31l-.05-.31c0-.24-.84-6 1.42-8.26a3.77 3.77 0 013.11-1 5.62 5.62 0 013.43 1.68 5.57 5.57 0 011.68 3.37 3.79 3.79 0 01-1.02 3.11z"
  }));
}

var _default = SvgAllInclusiveInfinityLight;
exports.default = _default;