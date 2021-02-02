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

function SvgNetworkSettingsMobileDataSettingsMedium(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M8.83 20h1.5v-7.3l-1.5 1.35zM4 20h1.5v-2.95L4 18.4zM20 4l-1.5 1.34V20H20V4zm-6.33 16h1.5V8.34l-1.5 1.35zM10.72 5.56a4 4 0 00-.26-.56 3.52 3.52 0 00-.36-.5l-1.29.65-1.11-.64-.09-1.45A4.07 4.07 0 007 3a4.07 4.07 0 00-.61.06L6.3 4.51l-1.11.64L3.9 4.5a3.52 3.52 0 00-.36.5 4 4 0 00-.26.56l1.22.8v1.28l-1.22.8a4 4 0 00.26.56 3.52 3.52 0 00.36.5l1.29-.65 1.11.64.09 1.45A4.07 4.07 0 007 11a4.07 4.07 0 00.61-.06l.09-1.45 1.11-.64 1.29.65a3.52 3.52 0 00.36-.5 4 4 0 00.26-.56l-1.22-.8V6.36zM7 8.21A1.21 1.21 0 118.21 7 1.21 1.21 0 017 8.21z"
  }));
}

var _default = SvgNetworkSettingsMobileDataSettingsMedium;
exports.default = _default;