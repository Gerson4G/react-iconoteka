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

function SvgGiftCardRedeemRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 9h-3.44c3.58-1.27 3.76-3.23 3.71-3.94a2.9 2.9 0 00-2.86-2.61c-1.09 0-3 .73-3.88 4.55-.87-3.82-2.79-4.54-3.88-4.55a2.89 2.89 0 00-2.92 2.61c-.05.71.13 2.67 3.71 3.94H5.5A2.5 2.5 0 003 11.5v7A2.5 2.5 0 005.5 21h13a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0018.5 9zm-2.62-5.55a1.89 1.89 0 011.86 1.71c.1 1.29-1.3 2.88-5.2 3.61.51-3.9 2.04-5.31 3.34-5.32zM6.23 5.16a1.89 1.89 0 011.86-1.71c1.3 0 2.83 1.42 3.31 5.32C7.53 8 6.13 6.45 6.23 5.16zM20 18.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 18.5V16h16zm0-3.5H4v-2h16zM4 12v-.5A1.5 1.5 0 015.5 10h13a1.5 1.5 0 011.5 1.5v.5z"
  }));
}

var _default = SvgGiftCardRedeemRegularLine;
exports.default = _default;