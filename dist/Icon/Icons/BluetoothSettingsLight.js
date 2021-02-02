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

function SvgBluetoothSettingsLight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.66 11.62l1.15-.81a3.81 3.81 0 00-.87-1.51l-1.28.59-.66-.38-.13-1.41a3.83 3.83 0 00-1.74 0L18 9.51l-.66.38-1.28-.59a3.81 3.81 0 00-.87 1.51l1.15.81v.76l-1.15.81a3.81 3.81 0 00.87 1.51l1.28-.59.66.38.13 1.41a3.83 3.83 0 001.74 0l.13-1.41.66-.38 1.28.59a3.81 3.81 0 00.87-1.51l-1.15-.81zm.61 1.75a3.11 3.11 0 01-.2.41 2.68 2.68 0 01-.25.37l-1-.45-.21-.09-.2.11-.67.38-.2.12v.23l-.1 1.07h-.9l-.1-1.07v-.23l-.2-.12-.67-.38-.2-.11-.21.09-1 .45a2.26 2.26 0 01-.25-.38 2.49 2.49 0 01-.2-.4l.87-.62.19-.13v-1.24l-.19-.13-.87-.62a3.11 3.11 0 01.2-.41 2.68 2.68 0 01.25-.37l1 .45.21.09.2-.11.67-.38.2-.12v-.23l.1-1.07h.9l.1 1.07v.23l.2.12.67.38.2.11.21-.09 1-.45a2.26 2.26 0 01.25.38 2.49 2.49 0 01.2.4l-.87.62-.19.13v1.24l.19.13zM19 10.82A1.18 1.18 0 1020.18 12 1.18 1.18 0 0019 10.82zm0 1.91a.73.73 0 11.73-.73.73.73 0 01-.73.73zM6.49 1.41v10.12L1.14 7.91l-.28.41L6.29 12 .86 15.68l.28.41 5.35-3.62v10.12l8.17-5.53L7.18 12l7.48-5.06zm7.28 15.65L7 21.65v-9.18zM7 11.53V2.35l6.78 4.59z",
    "data-name": "Clear 3"
  }));
}

var _default = SvgBluetoothSettingsLight;
exports.default = _default;