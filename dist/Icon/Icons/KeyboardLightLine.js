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

function SvgKeyboardLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.5 4h-17A2.5 2.5 0 001 6.5v11A2.5 2.5 0 003.5 20h17a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0020.5 4zm2 13.5a2 2 0 01-2 2h-17a2 2 0 01-2-2v-11a2 2 0 012-2h17a2 2 0 012 2zM4 9.5h3V7H4zm.5-2h2V9h-2zm12.5 2h3V7h-3zm.5-2h2V9h-2zM11.33 7h-3v2.5h3zm-.5 2h-2V7.5h2zm1.84.5h3V7h-3zm.5-2h2V9h-2zM4 17h3v-2.5H4zm.5-2h2v1.5h-2zM17 17h3v-2.5h-3zm.5-2h2v1.5h-2zm-9.17 2h7.34v-2.5H8.33zm.5-2h6.34v1.5H8.83zM4 13.25h3v-2.5H4zm.5-2h2v1.5h-2zm12.5 2h3v-2.5h-3zm.5-2h2v1.5h-2zm-6.17-.5h-3v2.5h3zm-.5 2h-2v-1.5h2zm1.84.5h3v-2.5h-3zm.5-2h2v1.5h-2z"
  }));
}

var _default = SvgKeyboardLightLine;
exports.default = _default;