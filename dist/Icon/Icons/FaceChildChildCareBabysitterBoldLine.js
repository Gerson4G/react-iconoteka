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

function SvgFaceChildChildCareBabysitterBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15 16H9a3.26 3.26 0 006 0zm0-4.25A1.25 1.25 0 1016.25 13 1.25 1.25 0 0015 11.75zM10.25 13A1.25 1.25 0 109 14.25 1.25 1.25 0 0010.25 13zm9.55-3.77a8 8 0 00-15.6 0 4 4 0 00.34 7.64 8 8 0 0014.92 0 4 4 0 00.34-7.64zm-.8 5.7l-1 .25-.38 1a6 6 0 01-11.18 0l-.38-1-1-.25a2 2 0 01-.17-3.81l1.06-.36.24-1.09a6 6 0 012.35-3.56 2.58 2.58 0 000 .39 3.49 3.49 0 006.2 2.2l-1.46-1.42A1.5 1.5 0 1112 5a6 6 0 015.85 4.67l.24 1.09 1.06.36a2 2 0 01-.15 3.81z"
  }));
}

var _default = SvgFaceChildChildCareBabysitterBoldLine;
exports.default = _default;