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

function SvgCellPhoneFlipRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18 11V4a2 2 0 00-2-2H8a2 2 0 00-2 2v7a2 2 0 00.69 1.5A2 2 0 006 14v6a2 2 0 002 2h8a2 2 0 002-2v-6a2 2 0 00-.69-1.5A2 2 0 0018 11zM7 14a1 1 0 011-1h1.68v2.1H7zm3.48 1.1V13h3v2.1zm3 .8v2.2h-3v-2.2zM7 15.9h2.68v2.2H7zM8 21a1 1 0 01-1-1v-1.1h2.68V21zm2.48 0v-2.1h3V21zM17 20a1 1 0 01-1 1h-1.68v-2.1H17zm0-1.9h-2.68v-2.2H17zm0-4.1v1.1h-2.68V13H16a1 1 0 011 1zm-2.68-2H8a1 1 0 01-1-1V4a1 1 0 011-1h8a1 1 0 011 1v7a1 1 0 01-1 1z"
  }));
}

var _default = SvgCellPhoneFlipRegularLine;
exports.default = _default;