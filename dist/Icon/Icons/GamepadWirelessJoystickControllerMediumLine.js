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

function SvgGamepadWirelessJoystickControllerMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M11.83 1.87a5.24 5.24 0 013.72 1.54l1.06-1.06a6.75 6.75 0 00-9.55 0l1.06 1.06a5.22 5.22 0 013.71-1.54zM7.61 8.54H6.39v1.85H4.54v1.22h1.85v1.85h1.22v-1.85h1.85v-1.22H7.61zM17 8.5a2.49 2.49 0 101.77.73A2.5 2.5 0 0017 8.5zm.9 3.4a1.28 1.28 0 11.37-.9 1.31 1.31 0 01-.37.9zM18 5H6a5 5 0 00-5 5v8.66a3.34 3.34 0 006.47 1.16L8.5 17h7l1 2.82a3.34 3.34 0 006.5-1.16V10a5 5 0 00-5-5zm3.5 13.66a1.84 1.84 0 01-3.57.62l-1-2.82-.37-1H7.47l-.37 1-1 2.82a1.84 1.84 0 01-3.57-.62V10A3.5 3.5 0 016 6.5h12a3.5 3.5 0 013.5 3.5z"
  }));
}

var _default = SvgGamepadWirelessJoystickControllerMediumLine;
exports.default = _default;