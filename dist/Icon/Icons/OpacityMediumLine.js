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

function SvgOpacityMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.68 7.32a7.5 7.5 0 10-9.36 9.36 7.5 7.5 0 109.36-9.36zM3.5 9.5A6 6 0 0115 7h-.5A7.5 7.5 0 007 14.5v.46A6 6 0 013.5 9.5zm5 5a5.94 5.94 0 01.39-2.11l2.72 2.72a5.94 5.94 0 01-2.11.39 5.62 5.62 0 01-.92-.08 5.62 5.62 0 01-.08-.92zm4.5-.13L9.63 11A6 6 0 0111 9.63L14.37 13A6 6 0 0113 14.37zm2.5-4.87a5.94 5.94 0 01-.39 2.11l-2.72-2.72a5.94 5.94 0 012.11-.39 5.62 5.62 0 01.92.08 5.62 5.62 0 01.08.92zm-1 11A6 6 0 019 17h.46A7.5 7.5 0 0017 9.5v-.46a6 6 0 01-2.5 11.46z",
    "data-name": "Clear 3"
  }));
}

var _default = SvgOpacityMediumLine;
exports.default = _default;