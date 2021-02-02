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

function SvgGiftCardRedeemLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 9h-4.84c4.64-1.06 4.91-3.3 4.87-4a2.73 2.73 0 00-2.64-2.51c-.8 0-3.08.44-3.86 5.33-.78-4.89-3.06-5.33-3.86-5.33A2.73 2.73 0 005.47 5c0 .74.23 3 4.87 4H5.5A2.5 2.5 0 003 11.5v7A2.5 2.5 0 005.5 21h13a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0018.5 9zm-2.64-6A2.22 2.22 0 0118 5c.09 1.44-1.38 3.19-5.75 3.87C12.74 4.51 14.41 3 15.86 3zM6 5a2.22 2.22 0 012.12-2c1.45 0 3.12 1.56 3.58 5.91C7.35 8.18 5.88 6.43 6 5zm14.5 13.5a2 2 0 01-2 2h-13a2 2 0 01-2-2v-3h17zm0-3.5h-17v-2h17zm-17-2.5v-1a2 2 0 012-2h13a2 2 0 012 2v1z"
  }));
}

var _default = SvgGiftCardRedeemLightLine;
exports.default = _default;