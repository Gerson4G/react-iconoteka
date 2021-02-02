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

function SvgDeviceSettingsLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 2h-9A2.5 2.5 0 005 4.5v15A2.5 2.5 0 007.5 22h9a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0016.5 2zm2 17.5a2 2 0 01-2 2h-9a2 2 0 01-2-2v-15a2 2 0 012-2h9a2 2 0 012 2zm-2.69-8.69a3.81 3.81 0 00-.87-1.51l-1.28.59-.66-.38-.13-1.41a3.83 3.83 0 00-1.74 0L11 9.51l-.66.38-1.28-.59a3.81 3.81 0 00-.87 1.51l1.15.81v.76l-1.15.81a3.81 3.81 0 00.87 1.51l1.28-.59.66.38.13 1.41a3.83 3.83 0 001.74 0l.13-1.41.66-.38 1.28.59a3.81 3.81 0 00.87-1.51l-1.15-.81v-.76zm-1.41 1.94l.87.62a3.11 3.11 0 01-.2.41 2.68 2.68 0 01-.25.37l-1-.45-.21-.09-.2.11-.67.38-.2.12v.23l-.1 1.07h-.9l-.1-1.07v-.23l-.2-.12-.67-.38-.2-.11-.21.09-1 .45a2.26 2.26 0 01-.25-.38 2.49 2.49 0 01-.2-.4l.87-.62.19-.13v-1.24l-.19-.13-.87-.62a3.11 3.11 0 01.2-.41 2.68 2.68 0 01.25-.37l1 .45.21.09.2-.11.67-.38.2-.12v-.23l.1-1.07h.9l.1 1.07v.23l.2.12.67.38.2.11.21-.09 1-.45a2.26 2.26 0 01.25.38 2.49 2.49 0 01.2.4l-.87.62-.19.13v1.24zM12 10.82A1.18 1.18 0 1013.18 12 1.18 1.18 0 0012 10.82zm0 1.91a.73.73 0 11.73-.73.73.73 0 01-.73.73z"
  }));
}

var _default = SvgDeviceSettingsLightLine;
exports.default = _default;