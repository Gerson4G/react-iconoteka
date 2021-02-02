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

function SvgCloudDownloadBackupLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.79 11.86a5.26 5.26 0 00.33-1.78 5.38 5.38 0 00-5.37-5.37 5.32 5.32 0 00-2.42.6 7.38 7.38 0 00-1.26-.94 6.89 6.89 0 00-10.23 7.19A4.36 4.36 0 004.36 20h15.28a4.35 4.35 0 002.15-8.14zm-2.15 7.54H4.36a3.76 3.76 0 01-1.31-7.28l.47-.12-.09-.49a6.3 6.3 0 019.34-6.57 6.15 6.15 0 011.15.86l.31.29.37-.19a4.66 4.66 0 012.15-.54 4.72 4.72 0 014.48 6.35l-.17.48.44.25a3.75 3.75 0 01-1.86 7zm-7.39-5.32V9h-.5v5.08l-1.83-1.82-.35.35L12 15l2.43-2.43-.35-.35z"
  }));
}

var _default = SvgCloudDownloadBackupLightLine;
exports.default = _default;