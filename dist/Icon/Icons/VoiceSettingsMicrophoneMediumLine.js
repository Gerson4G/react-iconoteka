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

function SvgVoiceSettingsMicrophoneMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9 16a4 4 0 004-4V5a4 4 0 00-8 0v7a4 4 0 004 4zM6.5 5a2.5 2.5 0 015 0v7a2.5 2.5 0 01-5 0zm9 7a6.5 6.5 0 01-13 0v-2H1v2a8 8 0 007.25 8v3h1.5v-3A8 8 0 0017 12v-2h-1.5zm6-7.64l1.22-.8a4 4 0 00-.26-.56 3.52 3.52 0 00-.36-.5l-1.29.65-1.11-.64-.09-1.45a3.13 3.13 0 00-1.22 0l-.09 1.45-1.11.64-1.29-.65a3.52 3.52 0 00-.36.5 4 4 0 00-.26.56l1.22.8v1.28l-1.22.8a4 4 0 00.26.56 3.52 3.52 0 00.36.5l1.29-.65 1.11.64.09 1.45a3.13 3.13 0 001.22 0l.09-1.45 1.11-.64 1.29.65a3.52 3.52 0 00.36-.5 4 4 0 00.26-.56l-1.22-.8zM19 6.21A1.21 1.21 0 1120.21 5 1.21 1.21 0 0119 6.21z"
  }));
}

var _default = SvgVoiceSettingsMicrophoneMediumLine;
exports.default = _default;