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

function SvgMenuRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7 2a3 3 0 00-3 3v14a3 3 0 003 3h13V2zm12 19H7a2 2 0 01-2-2V5a2 2 0 012-2h12zm-4.82-8.2l1 .61-.4 2.9a.61.61 0 101.21.08V8a1 1 0 00-1.92-.27l-.8 2.81a2 2 0 00.91 2.26zm.06-2L15 8.12v4l-.3-.12a1 1 0 01-.46-1.21zM9 11.21l.51.3-.3 4.79a.65.65 0 101.3 0l-.3-4.79.51-.3a2 2 0 001-2.12l-.12-.66a1.75 1.75 0 00-3.44 0L8 9.09a2 2 0 001 2.12zm0-1.94l.13-.66a.74.74 0 011.46 0l.13.66a1 1 0 01-.5 1.08l-.36.2-.36-.2A1 1 0 019 9.27z",
    fill: "#231f20"
  }));
}

var _default = SvgMenuRegularLine;
exports.default = _default;