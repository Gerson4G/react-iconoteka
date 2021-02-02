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

function SvgBaggageClaimRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 20.07a.73.73 0 10.73.73.73.73 0 00-.73-.73zm-4.5 0a.73.73 0 10.73.73.73.73 0 00-.73-.73zm-4.5 0a.73.73 0 10.73.73.73.73 0 00-.73-.73zm-4.5 0a.73.73 0 10.73.73.73.73 0 00-.73-.73zM10 3h4c.55 0 1 .82 1 1.37V6H9V4.37C9 3.82 9.45 3 10 3zm11 5.5A2.5 2.5 0 0018.5 6H16V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H5.5A2.5 2.5 0 003 8.5v7A2.5 2.5 0 005.5 18h13a2.5 2.5 0 002.5-2.5zm-1 7a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 15.5v-7A1.5 1.5 0 015.5 7h13A1.5 1.5 0 0120 8.5zM3 20.07a.73.73 0 10.73.73.73.73 0 00-.73-.73z"
  }));
}

var _default = SvgBaggageClaimRegularLine;
exports.default = _default;