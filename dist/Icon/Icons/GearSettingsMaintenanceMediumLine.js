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

function SvgGearSettingsMaintenanceMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 8.2a3.8 3.8 0 103.8 3.8A3.8 3.8 0 0012 8.2zm0 6.1a2.3 2.3 0 112.3-2.3 2.3 2.3 0 01-2.3 2.3zm8.29-3.14l2.37-2-.21-.65a11.78 11.78 0 00-.92-2.05 11.26 11.26 0 00-1.32-1.82l-.46-.51-2.87 1.11-1.47-.84-.5-3-.67-.14a11 11 0 00-4.48 0l-.67.14-.5 3-1.47.84-2.87-1.07-.46.51A11.26 11.26 0 002.47 6.5a11.78 11.78 0 00-.92 2.05l-.21.65 2.37 2v1.68l-2.37 2 .21.65a11.78 11.78 0 00.92 2.05 11.26 11.26 0 001.32 1.82l.46.51 2.87-1.07 1.47.84.5 3 .67.14a11 11 0 004.48 0l.67-.14.5-3 1.47-.84 2.87 1.07.46-.51a11.26 11.26 0 001.32-1.82 11.78 11.78 0 00.92-2.05l.21-.65-2.37-2zm.62 4.14a10.65 10.65 0 01-.68 1.45 10 10 0 01-.92 1.32l-1.91-.72-.66-.25-.61.36-1.47.84-.61.35-.12.7-.33 2a10.79 10.79 0 01-1.6.13 10.79 10.79 0 01-1.6-.13l-.33-2-.12-.7-.61-.35-1.47-.84-.61-.36-.66.25-1.91.72a10 10 0 01-.92-1.32 10.65 10.65 0 01-.68-1.45L4.66 14l.55-.45v-3.1L4.66 10 3.09 8.7a10.65 10.65 0 01.68-1.45 10 10 0 01.92-1.32l1.91.72.66.25.61-.36 1.47-.84.66-.35.12-.7.33-2A10.79 10.79 0 0112 2.5a10.79 10.79 0 011.6.13l.33 2 .12.7.61.35 1.47.84.61.36.66-.25 1.91-.72a10.76 10.76 0 01.92 1.32 10.65 10.65 0 01.68 1.45L19.34 10l-.55.45v3.1l.55.45z"
  }));
}

var _default = SvgGearSettingsMaintenanceMediumLine;
exports.default = _default;