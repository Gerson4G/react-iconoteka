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

function SvgPhoneSettingsLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.53 13.94l-2.84 2.83a14.55 14.55 0 01-3.76-2.7 14.55 14.55 0 01-2.7-3.76l2.83-2.84L7.21 2l-2 .65a4.46 4.46 0 00-3 5.14 18.48 18.48 0 0013.98 14.09 4.46 4.46 0 005.14-3.05l.65-2zm4.32 4.74a4 4 0 01-4.55 2.71 17.82 17.82 0 01-8.84-4.85A17.82 17.82 0 012.61 7.7a4 4 0 012.71-4.55L7 2.62l2.45 4.76-2.83 2.83.16.32a14.9 14.9 0 006.69 6.69l.32.16 2.83-2.83L21.38 17zM14.19 7.19a3.81 3.81 0 00.87 1.51l1.28-.59.66.38.13 1.41a3.83 3.83 0 001.74 0L19 8.49l.66-.38 1.28.59a3.81 3.81 0 00.87-1.51l-1.15-.81v-.76l1.15-.81a3.81 3.81 0 00-.87-1.51l-1.28.59-.66-.38-.13-1.41a3.83 3.83 0 00-1.74 0L17 3.51l-.66.38-1.28-.59a3.81 3.81 0 00-.87 1.51l1.15.81v.76zm1.41-1.94l-.87-.62a3.11 3.11 0 01.2-.41 2.68 2.68 0 01.25-.37l1 .45.21.09.2-.11.67-.38.2-.12v-.23l.1-1.07a3.39 3.39 0 01.9 0l.1 1.07v.23l.2.12.67.38.2.11.21-.09 1-.45a2.26 2.26 0 01.25.38 2.49 2.49 0 01.2.4l-.87.62-.19.13v1.24l.19.13.87.62a3.11 3.11 0 01-.2.41 2.68 2.68 0 01-.25.37l-1-.45-.21-.09-.2.11-.67.38-.2.12v.23l-.1 1.07h-.9l-.1-1.07v-.23l-.2-.12-.67-.38-.2-.11-.21.09-1 .45a2.26 2.26 0 01-.25-.38 2.49 2.49 0 01-.2-.4l.87-.62.19-.13V5.38zM18 7.18A1.18 1.18 0 1016.82 6 1.18 1.18 0 0018 7.18zm0-1.91a.73.73 0 11-.73.73.73.73 0 01.73-.73z"
  }));
}

var _default = SvgPhoneSettingsLightLine;
exports.default = _default;