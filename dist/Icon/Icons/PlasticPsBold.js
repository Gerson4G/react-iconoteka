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

function SvgPlasticPsBold(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3.26 18.75a2.43 2.43 0 010-2.5l2.29-4 1.13.66-.84-3.13-3.16.85 1.13.65-2.29 4A4.5 4.5 0 005.42 22H10v-2H5.42a2.43 2.43 0 01-2.16-1.25zm6.57-13.9a2.51 2.51 0 014.34 0l2.28 4-1.13.66 3.16.84.84-3.16-1.13.66-2.29-4a4.5 4.5 0 00-7.8 0l-2.29 4 1.74 1zm12.65 10.4l-2.29-4-1.74 1 2.29 4A2.5 2.5 0 0118.58 20H14v-1.31L11.69 21 14 23.31V22h4.58a4.5 4.5 0 003.9-6.75zM14.26 14a2 2 0 00-2-2 1.83 1.83 0 00-1.51.72c0-1 .61-1.59 1.39-1.59a2.18 2.18 0 011.35.52l.69-1a3.1 3.1 0 00-2-.81c-1.34 0-2.76.81-2.76 3.1 0 2.46 1.44 3.14 2.59 3.14A2.16 2.16 0 0014.26 14zM11 14a.91.91 0 011-.86.85.85 0 01.92.83.89.89 0 01-.93.89A.86.86 0 0111 14z"
  }));
}

var _default = SvgPlasticPsBold;
exports.default = _default;