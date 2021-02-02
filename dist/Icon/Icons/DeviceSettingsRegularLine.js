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

function SvgDeviceSettingsRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 2h-9A2.5 2.5 0 005 4.5v15A2.5 2.5 0 007.5 22h9a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0016.5 2zM18 19.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 19.5v-15A1.5 1.5 0 017.5 3h9A1.5 1.5 0 0118 4.5zm-2.12-8.38a3.63 3.63 0 00-.42-1.12 4 4 0 00-.75-.92l-1.38.62-.15-1.5a3.58 3.58 0 00-2.36 0l-.14 1.49-1.39-.61a4 4 0 00-.75.92 3.63 3.63 0 00-.42 1.12l1.22.88-1.22.87A3.63 3.63 0 008.54 14a4 4 0 00.75.92l1.38-.62.14 1.49a3.58 3.58 0 002.36 0l.14-1.49 1.38.62a4 4 0 00.75-.92 3.63 3.63 0 00.42-1.12l-1.2-.88zm-1.66 1.5l.8.57a2.46 2.46 0 01-.21.43 2 2 0 01-.27.4l-.9-.4-.36-.16-.33.2-.33.19v.38l-.1 1a2.9 2.9 0 01-1 0l-.1-1-.05-.39-.37-.19-.33-.19-.35.16-.9.4a2 2 0 01-.27-.4 2.46 2.46 0 01-.15-.43l.8-.57.31-.24v-.77l-.31-.23-.8-.57a2.46 2.46 0 01.21-.43 2 2 0 01.27-.4l.9.4.36.16.33-.2.33-.19v-.38l.1-1a2.9 2.9 0 011 0l.1 1 .05.39.33.19.33.19.35-.16.9-.4a2 2 0 01.27.4 2.46 2.46 0 01.21.43l-.8.57-.31.24v.77zM12 11.25a.75.75 0 10.75.75.76.76 0 00-.75-.75z"
  }));
}

var _default = SvgDeviceSettingsRegularLine;
exports.default = _default;