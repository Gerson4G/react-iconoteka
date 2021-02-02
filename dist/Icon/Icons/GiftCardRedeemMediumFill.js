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

function SvgGiftCardRedeemMediumFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 9H16c2.91-1.37 3.05-3.15 3-3.83a3.09 3.09 0 00-3.07-2.72c-1.31 0-3 .92-3.89 4-.9-3.08-2.58-4-3.89-4A3.09 3.09 0 005 5.17c-.06.68.08 2.46 3 3.83H5.5A2.5 2.5 0 003 11.5v7A2.5 2.5 0 005.5 21h13a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0018.5 9zm-2.59-5a1.57 1.57 0 011.58 1.38c.1 1.13-1.22 2.56-4.65 3.35.52-3.5 1.91-4.73 3.07-4.73zM6.48 5.33A1.57 1.57 0 018.06 4c1.16 0 2.55 1.28 3 4.73-3.36-.84-4.68-2.27-4.58-3.4zM19.5 15h-15v-3h15z"
  }));
}

var _default = SvgGiftCardRedeemMediumFill;
exports.default = _default;