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

function SvgGearSettingsMaintenanceBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 8.2a3.8 3.8 0 103.8 3.8A3.8 3.8 0 0012 8.2zm0 5.6a1.8 1.8 0 111.8-1.8 1.81 1.81 0 01-1.8 1.8zm8.29-2.64l2.37-2-.21-.65a11.78 11.78 0 00-.92-2.05 11.26 11.26 0 00-1.32-1.82l-.46-.51-2.87 1.11-1.47-.84-.5-3-.67-.14a11 11 0 00-4.48 0l-.67.14-.5 3-1.47.84-2.87-1.07-.46.51A11.26 11.26 0 002.47 6.5a11.78 11.78 0 00-.92 2.05l-.21.65 2.37 2v1.68l-2.37 2 .21.65a11.78 11.78 0 00.92 2.05 11.26 11.26 0 001.32 1.82l.46.51 2.87-1.07 1.47.84.5 3 .67.14a11 11 0 004.48 0l.67-.14.5-3 1.47-.84 2.87 1.07.46-.51a11.26 11.26 0 001.32-1.82 11.78 11.78 0 00.92-2.05l.21-.65-2.37-2zm0 4.29a8.53 8.53 0 01-.52 1.05 9 9 0 01-.64 1l-1.57-.59-.89-.33-.81.47-1.47.85-.81.47-.16.93-.27 1.65a8.6 8.6 0 01-2.34 0l-.27-1.65-.16-.93-.81-.47-1.45-.9-.81-.47-.89.33-1.57.59a9 9 0 01-.64-1 8.53 8.53 0 01-.52-1.05L5 14.39l.73-.6v-3.58L5 9.61 3.69 8.55a8.53 8.53 0 01.52-1.05 9 9 0 01.64-1l1.57.59.89.33.81-.42 1.47-.85.81-.47.16-.93.27-1.65a8.6 8.6 0 012.34 0l.27 1.65.16.93.81.47 1.47.85.81.47.89-.33 1.57-.59a9 9 0 01.64 1 8.53 8.53 0 01.52 1.05L19 9.61l-.73.6v3.58l.73.6z"
  }));
}

var _default = SvgGearSettingsMaintenanceBoldLine;
exports.default = _default;