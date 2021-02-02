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

function SvgHinduismRegular(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 2.52l-.7-.7-.71.7.71.71zM20 5.4l-.71-.71c-2.25 2.25-4.72 2-7.57-.88l-.7.71c1.77 1.77 3.51 2.66 5.16 2.66A5.38 5.38 0 0020 5.4zm-2.42 4.09a5.72 5.72 0 00-3.7 1.6 5.47 5.47 0 01-5.13 1.44 3.75 3.75 0 002.17-2.9 3 3 0 00-.8-2.3 3.1 3.1 0 00-2.29-1 5.85 5.85 0 00-3.9 1.85l.71.71a4.84 4.84 0 013.19-1.51A2.08 2.08 0 019.39 8a2 2 0 01.53 1.56c-.12 2-3.5 2.83-3.54 2.83l.2 1a3.63 3.63 0 013.08.79A3.78 3.78 0 0111 17a3.7 3.7 0 01-3.6 3.51c-1.81 0-3.92-1.32-3.92-5.06h-1C2.5 19.63 5 21.5 7.42 21.5A4.68 4.68 0 0012 17a4.82 4.82 0 00-1.59-3.47 6.41 6.41 0 004.06-1.64 4.8 4.8 0 013.09-1.39 3.19 3.19 0 013.36 3.45c0 2.33-1.22 4-2.89 4a2.45 2.45 0 01-2.63-2.52h-1A3.43 3.43 0 0018.05 19c2.25 0 3.89-2.11 3.89-5a4.18 4.18 0 00-4.36-4.51z"
  }));
}

var _default = SvgHinduismRegular;
exports.default = _default;