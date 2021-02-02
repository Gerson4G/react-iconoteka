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

function SvgSmogBold(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M4.2 3.8A1.2 1.2 0 105.4 5a1.2 1.2 0 00-1.2-1.2zm11.6 2.4A1.2 1.2 0 1014.6 5a1.2 1.2 0 001.2 1.2zm-7.73 0A1.2 1.2 0 106.87 5a1.2 1.2 0 001.2 1.2zm3.86 0a1.2 1.2 0 10-1.2-1.2 1.2 1.2 0 001.2 1.2zM8.2 8.8A1.2 1.2 0 109.4 10a1.2 1.2 0 00-1.2-1.2zm11.6 2.4a1.2 1.2 0 10-1.2-1.2 1.2 1.2 0 001.2 1.2zm-7.73-2.4a1.2 1.2 0 101.2 1.2 1.2 1.2 0 00-1.2-1.2zm3.86 0a1.2 1.2 0 101.2 1.2 1.2 1.2 0 00-1.2-1.2zm-11.73 5A1.2 1.2 0 105.4 15a1.2 1.2 0 00-1.2-1.2zm11.6 2.4a1.2 1.2 0 10-1.2-1.2 1.2 1.2 0 001.2 1.2zm-7.73 0a1.2 1.2 0 10-1.2-1.2 1.2 1.2 0 001.2 1.2zm3.86 0a1.2 1.2 0 10-1.2-1.2 1.2 1.2 0 001.2 1.2zM8.2 18.8A1.2 1.2 0 109.4 20a1.2 1.2 0 00-1.2-1.2zm11.6 0A1.2 1.2 0 1021 20a1.2 1.2 0 00-1.2-1.2zm-7.73 0a1.2 1.2 0 101.2 1.2 1.2 1.2 0 00-1.2-1.2zm3.86 0a1.2 1.2 0 101.2 1.2 1.2 1.2 0 00-1.2-1.2z",
    fillRule: "evenodd"
  }));
}

var _default = SvgSmogBold;
exports.default = _default;