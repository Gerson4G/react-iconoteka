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

function SvgMenuLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7 2a3 3 0 00-3 3v14a3 3 0 003 3h13V2zm12.5 19.5H7A2.5 2.5 0 014.5 19V5A2.5 2.5 0 017 2.5h12.5zm-5.34-8.71l.38.23L14 15.8a1 1 0 001 1.2 1 1 0 001-1V8a1 1 0 00-1.92-.27l-.81 2.82a2 2 0 00.89 2.24zm-.4-2.12l.8-2.82A.47.47 0 0115 7.5a.49.49 0 01.5.5v8a.51.51 0 01-.9.33.5.5 0 01-.11-.42l.51-2.79.06-.34-.3-.18-.38-.24a1.48 1.48 0 01-.62-1.69zm-5 .57l.36.27-.28 4.42a1 1 0 001 1.07 1 1 0 001-1.07l-.28-4.42.36-.27a2 2 0 00.79-2l-.15-.83a1.75 1.75 0 00-3.44 0L8 9.26a2 2 0 00.76 1.98zm-.3-1.89l.15-.83a1.25 1.25 0 012.46 0l.15.83a1.51 1.51 0 01-.59 1.49l-.36.26-.23.16v.28l.31 4.46a.49.49 0 01-.14.38.51.51 0 01-.88-.38l.29-4.42v-.28l-.23-.16-.36-.26a1.51 1.51 0 01-.57-1.53z",
    fill: "#231f20"
  }));
}

var _default = SvgMenuLightLine;
exports.default = _default;