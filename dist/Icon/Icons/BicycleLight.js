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

function SvgBicycleLight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19 10a5.19 5.19 0 00-1.05.11l-1.84-6.86H13a.25.25 0 00-.25.25.26.26 0 00.25.25h2.71l1.08 4H7.2L6.72 6 8 5.71V5.5H4.89a.25.25 0 000 .5h1.32l.48 1.78-.62 2.33A5.19 5.19 0 005 10a5 5 0 105 5.25h1.8l1.86-7h3.28l.53 2A4.95 4.95 0 1019 10zM5 19.5a4.5 4.5 0 010-9 4 4 0 01.92.1l-1.16 4.34a.24.24 0 00.24.31h4.47A4.49 4.49 0 015 19.5zm1.4-8.76a4.47 4.47 0 013.07 4H5.33zm5 4H10a5 5 0 00-3.44-4.49l.53-2h6.09zM19 19.5a4.49 4.49 0 01-1.4-8.76l1.16 4.32a.24.24 0 00.24.19h.06a.24.24 0 00.18-.3l-1.16-4.35a4 4 0 01.92-.1 4.5 4.5 0 010 9z"
  }));
}

var _default = SvgBicycleLight;
exports.default = _default;