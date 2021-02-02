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

function SvgClosedCaptionRegularFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M1 4v16h22V4zm10.4 6.87h-.83v-.1a.94.94 0 00-.94-.94h-1.1a1.1 1.1 0 00-1.1 1.1v2.14a1.1 1.1 0 001.1 1.1h1.1a.94.94 0 00.94-.94v-.1h.83v.1A1.77 1.77 0 019.63 15h-1.1a1.92 1.92 0 01-1.93-1.93v-2.14A1.92 1.92 0 018.53 9h1.1a1.77 1.77 0 011.77 1.77zm6 0h-.83v-.1a.94.94 0 00-.94-.94h-1.1a1.1 1.1 0 00-1.1 1.1v2.14a1.1 1.1 0 001.1 1.1h1.1a.94.94 0 00.94-.94v-.1h.83v.1A1.77 1.77 0 0115.63 15h-1.1a1.92 1.92 0 01-1.93-1.93v-2.14A1.92 1.92 0 0114.53 9h1.1a1.77 1.77 0 011.77 1.77z"
  }));
}

var _default = SvgClosedCaptionRegularFill;
exports.default = _default;