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

function SvgGamepadWirelessJoystickControllerLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M11.83 1.37a5.71 5.71 0 014.07 1.69l.35-.36a6.25 6.25 0 00-8.84 0l.36.36a5.69 5.69 0 014.06-1.69zM7.24 8.62h-.48v2.14H4.62v.48h2.14v2.14h.48v-2.14h2.14v-.48H7.24zM17 8.5a2.49 2.49 0 101.77.73A2.5 2.5 0 0017 8.5zm1.41 3.91A2 2 0 1119 11a2 2 0 01-.59 1.41zM18 5H6a5 5 0 00-5 5v9.13a2.86 2.86 0 005.61.87l.88-3h9l.9 3a2.86 2.86 0 005.61-.87V10a5 5 0 00-5-5zm4.5 14.13a2.36 2.36 0 01-4.63.68L17 16.86l-.11-.36H7.12l-.12.36-.88 2.95a2.36 2.36 0 01-4.63-.68V10A4.51 4.51 0 016 5.5h12a4.51 4.51 0 014.5 4.5z"
  }));
}

var _default = SvgGamepadWirelessJoystickControllerLightLine;
exports.default = _default;