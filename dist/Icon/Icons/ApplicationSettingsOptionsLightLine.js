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

function SvgApplicationSettingsOptionsLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 3H8a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V8a5 5 0 00-5-5zm4.5 13a4.51 4.51 0 01-4.5 4.5H8A4.51 4.51 0 013.5 16V8A4.51 4.51 0 018 3.5h8A4.51 4.51 0 0120.5 8zm-3.73-5.49a5 5 0 00-.44-1 5.72 5.72 0 00-.65-.88l-1.6.74-.83-.48-.16-1.75a4.63 4.63 0 00-2.18 0l-.16 1.75-.83.48-1.6-.74a5.27 5.27 0 00-.65.88 4.27 4.27 0 00-.43 1l1.44 1v1l-1.45 1a5 5 0 00.44 1 5.72 5.72 0 00.65.88l1.6-.74.83.48.16 1.75a4.63 4.63 0 002.18 0l.16-1.75.83-.48 1.6.74a5.27 5.27 0 00.65-.88 4.27 4.27 0 00.43-1l-1.44-1v-1zM15 12.89l1.13.79a4.29 4.29 0 01-.27.57 3.46 3.46 0 01-.36.52l-1.25-.58-.24-.11-.22.13-.83.47-.23.13v.26l-.12 1.38a4 4 0 01-1.26 0l-.12-1.38v-.26l-.23-.13-.83-.47-.17-.13-.24.11-1.25.58a3.46 3.46 0 01-.36-.52 4.29 4.29 0 01-.27-.57L9 12.89l.22-.15v-1.48L9 11.11l-1.13-.79a4.29 4.29 0 01.27-.57 3.46 3.46 0 01.36-.52l1.25.58.24.11.22-.13.79-.47.23-.13v-.26l.12-1.38a4 4 0 011.26 0l.12 1.38v.26l.23.13.83.47.22.13.24-.11 1.25-.58a3.46 3.46 0 01.36.52 4.29 4.29 0 01.27.57l-1.13.79-.22.15v1.48zm-3-2.39a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5zm0 2.5a1 1 0 111-1 1 1 0 01-1 1z",
    "data-name": "Clear 3"
  }));
}

var _default = SvgApplicationSettingsOptionsLightLine;
exports.default = _default;