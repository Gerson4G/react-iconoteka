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

function SvgNewReleasesMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.17 9.86A4 4 0 0120 7V4h-3a4 4 0 01-2.83-1.17L12 .69 9.86 2.83A4 4 0 017 4H4v3a4 4 0 01-1.17 2.86L.69 12l2.14 2.14A4 4 0 014 17v3h3a4 4 0 012.83 1.17L12 23.31l2.14-2.14A4 4 0 0117 20h3v-3a4 4 0 011.17-2.83L23.31 12zm-1.06 3.22A5.46 5.46 0 0018.5 17v1.5H17a5.46 5.46 0 00-3.89 1.61L12 21.19l-1.08-1.08A5.46 5.46 0 007 18.5H5.5V17a5.46 5.46 0 00-1.61-3.89L2.81 12l1.08-1.08A5.46 5.46 0 005.5 7V5.5H7a5.46 5.46 0 003.89-1.61L12 2.81l1.08 1.08A5.46 5.46 0 0017 5.5h1.5V7a5.46 5.46 0 001.61 3.89L21.19 12zm-8.7-.58h1.18l.36-5h-1.9zm.59 1.69a.92.92 0 10.92.92.92.92 0 00-.92-.92z"
  }));
}

var _default = SvgNewReleasesMediumLine;
exports.default = _default;