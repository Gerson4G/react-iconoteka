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

function SvgClosedCaptionLightFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M1 4v16h22V4zm7.49 10.5H9.7a1.2 1.2 0 001.2-1.2h.5A1.7 1.7 0 019.7 15H8.49a1.89 1.89 0 01-1.89-1.89v-2.22A1.89 1.89 0 018.49 9H9.7a1.7 1.7 0 011.7 1.7h-.5a1.2 1.2 0 00-1.2-1.2H8.49a1.39 1.39 0 00-1.39 1.39v2.22a1.39 1.39 0 001.39 1.39zm6 0h1.21a1.2 1.2 0 001.2-1.2h.5a1.7 1.7 0 01-1.7 1.7h-1.21a1.89 1.89 0 01-1.89-1.89v-2.22A1.89 1.89 0 0114.49 9h1.21a1.7 1.7 0 011.7 1.7h-.5a1.2 1.2 0 00-1.2-1.2h-1.21a1.39 1.39 0 00-1.39 1.39v2.22a1.39 1.39 0 001.39 1.39z"
  }));
}

var _default = SvgClosedCaptionLightFill;
exports.default = _default;