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

function SvgPowerSettingsLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 21.5A9.49 9.49 0 017.26 3.78L7 3.35A10 10 0 1022 12h-.5a9.51 9.51 0 01-9.5 9.5zM22.49 6l1.16-.81a4.13 4.13 0 00-.35-.81 3.68 3.68 0 00-.53-.7l-1.28.59-.66-.38-.12-1.41a4.32 4.32 0 00-.88-.1 4.14 4.14 0 00-.87.1l-.13 1.41-.66.38-1.28-.59A3.81 3.81 0 0016 5.14l1.17.86v.77L16 7.53a4.32 4.32 0 00.35.8 4.63 4.63 0 00.52.71l1.28-.59.66.38.13 1.4a3.83 3.83 0 001.74 0l.13-1.4.66-.38 1.3.55a3.75 3.75 0 00.53-.71 4.32 4.32 0 00.35-.8l-1.16-.81zm.62 1.75c-.06.14-.13.28-.2.41a4.28 4.28 0 01-.26.38l-1-.45-.21-.1-.2.12-.66.38-.2.11v.24l-.09 1.06h-.91l-.1-1.06V8.6l-.2-.11-.66-.38-.2-.12L18 8l-1 .45a4.13 4.13 0 01-.25-.38 5.19 5.19 0 01-.2-.41l.87-.62.2-.04V5.72l-.19-.14-.87-.58a3.91 3.91 0 01.2-.41 4.13 4.13 0 01.24-.41l1 .45.22.1.2-.12.66-.38.2-.12v-.23l.1-1.06a2.35 2.35 0 01.45 0 2.45 2.45 0 01.46 0l.09 1.06v.23l.2.12.66.38.2.12.21-.1 1-.45a4.28 4.28 0 01.26.38 3.91 3.91 0 01.2.41l-.88.61-.23.14V7l.19.13zm-3.28-2.6A1.19 1.19 0 1021 6.33a1.18 1.18 0 00-1.17-1.18zm0 1.92a.74.74 0 11.74-.74.74.74 0 01-.74.74zM12.25 2h-.5v10h.5z"
  }));
}

var _default = SvgPowerSettingsLightLine;
exports.default = _default;