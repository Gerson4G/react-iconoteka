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

function SvgPhoneSettingsMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.53 13.23l-2.44 2.44a13.08 13.08 0 01-5.76-5.76l2.44-2.44L7.86 1.9 5 2.8a4.45 4.45 0 00-3 5.13A18.54 18.54 0 0016.07 22a4.45 4.45 0 005.13-3l.9-2.82zm3.24 5.27a3 3 0 01-3.38 2A17 17 0 013.46 7.61a3 3 0 012-3.38l1.62-.52 1.85 3.47-1.66 1.67-.77.77.49 1A14.65 14.65 0 0013.41 17l1 .49.77-.77 1.67-1.66 3.47 1.81zM14.28 7.44a4 4 0 00.26.56 3.52 3.52 0 00.36.5l1.29-.65 1.11.64.09 1.45A4.07 4.07 0 0018 10a4.07 4.07 0 00.61-.06l.09-1.45 1.11-.64 1.29.65a3.52 3.52 0 00.36-.5 4 4 0 00.26-.56l-1.22-.8V5.36l1.22-.8a4 4 0 00-.26-.56 3.52 3.52 0 00-.36-.5l-1.29.65-1.11-.64-.09-1.45A4.07 4.07 0 0018 2a4.07 4.07 0 00-.61.06l-.09 1.45-1.11.64-1.29-.65a3.52 3.52 0 00-.36.5 4 4 0 00-.26.56l1.22.8v1.28zM18 4.79A1.21 1.21 0 1116.79 6 1.21 1.21 0 0118 4.79z"
  }));
}

var _default = SvgPhoneSettingsMediumLine;
exports.default = _default;