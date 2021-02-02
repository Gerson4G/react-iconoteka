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

function SvgPuzzleExtensionBoldLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.41 9.41a2.87 2.87 0 00-.41.05V4h-5.46a2.87 2.87 0 00.05-.41 3.59 3.59 0 00-7.18 0 2.87 2.87 0 000 .41H2v7.7l2.23-.26h.22a1.59 1.59 0 010 3.18h-.22L2 14.3V22h7.7l-.26-2.23v-.22a1.59 1.59 0 013.18 0v.22L12.3 22H20v-5.46a2.87 2.87 0 00.41.05 3.59 3.59 0 000-7.18zm0 5.18h-.22L18 14.3V20h-3.46a2.87 2.87 0 00.05-.41 3.59 3.59 0 00-7.18 0 2.87 2.87 0 000 .41H4v-3.46a2.87 2.87 0 00.41.05 3.59 3.59 0 000-7.18 2.87 2.87 0 00-.41.05V6h5.7l-.26-2.23v-.22a1.59 1.59 0 013.18 0v.22L12.3 6H18v5.7l2.23-.26h.22a1.59 1.59 0 010 3.18z"
  }));
}

var _default = SvgPuzzleExtensionBoldLine;
exports.default = _default;