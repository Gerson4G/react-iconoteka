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

function SvgStoveMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3 3v18h18V3zm16.5 16.5h-15v-15h15zm-4.16-8.34a2.5 2.5 0 10-2.5-2.5 2.49 2.49 0 002.5 2.5zm0-3.76a1.27 1.27 0 11-1.27 1.26 1.27 1.27 0 011.27-1.26zm-6.68 3.76a2.5 2.5 0 10-2.5-2.5 2.49 2.49 0 002.5 2.5zm0-3.76A1.27 1.27 0 117.4 8.66 1.27 1.27 0 018.66 7.4zm0 10.44a2.5 2.5 0 10-2.5-2.5 2.49 2.49 0 002.5 2.5zm0-3.77a1.27 1.27 0 11-1.26 1.27 1.27 1.27 0 011.26-1.27zm6.68 3.77a2.5 2.5 0 10-2.5-2.5 2.5 2.5 0 002.5 2.5zm0-3.77a1.27 1.27 0 11-1.27 1.27 1.27 1.27 0 011.27-1.27z"
  }));
}

var _default = SvgStoveMediumLine;
exports.default = _default;