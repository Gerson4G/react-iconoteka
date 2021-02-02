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

function SvgVoiceSettingsMicrophoneRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9 16a4 4 0 004-4V5a4 4 0 00-8 0v7a4 4 0 004 4zM6 5a3 3 0 016 0v7a3 3 0 01-6 0zm10 7a7 7 0 01-14 0v-2H1v2a8 8 0 007.5 8v3h1v-3a8 8 0 007.5-8v-2h-1zm5.66-7l1.22-.87A3.63 3.63 0 0022.46 3a4 4 0 00-.75-.92l-1.38.62-.15-1.5a3.58 3.58 0 00-2.36 0l-.14 1.49-1.38-.62a4 4 0 00-.75.92 3.63 3.63 0 00-.42 1.12l1.21.89-1.22.87A3.63 3.63 0 0015.54 7a4 4 0 00.75.92l1.38-.62.14 1.49a3.58 3.58 0 002.36 0l.14-1.49 1.38.62a4 4 0 00.77-.92 3.63 3.63 0 00.42-1.12L21.66 5zM22 6.19a2.46 2.46 0 01-.21.43 2 2 0 01-.27.4l-.9-.4-.36-.16-.33.2-.33.19v.38l-.1 1a2.9 2.9 0 01-1 0l-.1-1-.05-.39-.35-.19-.33-.19-.35.16-.9.4a2 2 0 01-.27-.4 2.46 2.46 0 01-.15-.43l.8-.57.31-.24v-.77l-.31-.23-.8-.57a2.46 2.46 0 01.21-.43 2 2 0 01.27-.4l.9.4.36.16.33-.2.33-.19v-.38l.1-1a2.9 2.9 0 011 0l.1 1 .05.39.33.19.33.19.35-.16.9-.4a2 2 0 01.27.4 2.46 2.46 0 01.21.43l-.8.57-.31.24v.77l.31.23zm-3-1.94a.75.75 0 10.75.75.76.76 0 00-.75-.75z"
  }));
}

var _default = SvgVoiceSettingsMicrophoneRegularLine;
exports.default = _default;