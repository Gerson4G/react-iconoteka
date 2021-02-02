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

function SvgPuzzleExtensionMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M2 5.5h7.6l-.38-1.81a2.33 2.33 0 010-.37 1.82 1.82 0 013.64 0 2.33 2.33 0 010 .37L12.4 5.5H20V4h-5.75a3.82 3.82 0 00.07-.68 3.32 3.32 0 00-6.64 0 3.82 3.82 0 00.07.68H2zM2 22h7.6l-.38-1.81a2.33 2.33 0 010-.37 1.82 1.82 0 013.64 0 2.33 2.33 0 010 .37L12.4 22H20v-1.5h-5.75a3.82 3.82 0 00.07-.68 3.32 3.32 0 00-6.64 0 3.82 3.82 0 00.07.68H2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 4v7.6l1.81-.38a2.33 2.33 0 01.37 0 1.82 1.82 0 010 3.64 2.33 2.33 0 01-.37 0l-1.81-.46V22H20v-5.75a3.82 3.82 0 00.68.07 3.32 3.32 0 000-6.64 3.82 3.82 0 00-.68.07V4zM2 4v7.6l1.81-.38a2.33 2.33 0 01.37 0 1.82 1.82 0 010 3.64 2.33 2.33 0 01-.37 0L2 14.4V22h1.5v-5.75a3.82 3.82 0 00.68.07 3.32 3.32 0 000-6.64 3.82 3.82 0 00-.68.07V4z"
  }));
}

var _default = SvgPuzzleExtensionMediumLine;
exports.default = _default;