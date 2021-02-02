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

function SvgVoiceSettingsMicrophoneRegularFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9 16.5a4 4 0 004-4v-7a4 4 0 00-8 0v7a4 4 0 004 4zm7-4a7 7 0 01-14 0v-2H1v2a8 8 0 007.5 8v3h1v-3a8 8 0 007.5-8v-2h-1zM21.5 4l1.24-.9a4.13 4.13 0 00-.67-1.1l-1.4.62-.84-.49-.17-1.56a3.15 3.15 0 00-1.32 0l-.17 1.52-.84.49-1.4-.58a4.13 4.13 0 00-.67 1.15L16.5 4v1l-1.24.9a4.13 4.13 0 00.67 1.1l1.4-.62.84.49.17 1.52a3.15 3.15 0 001.32 0l.17-1.52.84-.49 1.4.62a4.13 4.13 0 00.67-1.15L21.5 5zM19 5.5a1 1 0 111-1 1 1 0 01-1 1z"
  }));
}

var _default = SvgVoiceSettingsMicrophoneRegularFill;
exports.default = _default;