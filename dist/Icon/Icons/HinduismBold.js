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

function SvgHinduismBold(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17.27 2.52L15.8 1.05l-1.48 1.47L15.8 4zm3.05 3.23l-1.41-1.41c-1.28 1.28-3.39 2.59-6.86-.88l-1.42 1.41c1.87 1.87 3.75 2.81 5.53 2.81a5.82 5.82 0 004.16-1.93zM17.58 9a6.29 6.29 0 00-4 1.7c-1.07.83-2.05 1.75-3.77 1.73a3.74 3.74 0 001.62-2.76A3.58 3.58 0 0010.49 7a3.63 3.63 0 00-2.66-1.1 6.3 6.3 0 00-4.25 2L5 9.29a4.3 4.3 0 012.83-1.41A1.63 1.63 0 019 8.35a1.58 1.58 0 01.39 1.19c-.08 1.35-2.36 2.19-3.15 2.38l.39 2a3.17 3.17 0 012.68.67A3.29 3.29 0 0110.52 17a3.22 3.22 0 01-3.1 3C5.77 20 4 18.8 4 15.44H2C2 20 4.72 22 7.42 22a5.18 5.18 0 005.1-5 5.29 5.29 0 00-1.12-3.16 6.76 6.76 0 003.4-1.56A4.4 4.4 0 0117.58 11a2.7 2.7 0 012.86 2.95c0 1.75-.82 3.52-2.39 3.52a2 2 0 01-2.13-2h-2a4 4 0 004.13 4c2.54 0 4.39-2.32 4.39-5.52A4.7 4.7 0 0017.58 9z"
  }));
}

var _default = SvgHinduismBold;
exports.default = _default;