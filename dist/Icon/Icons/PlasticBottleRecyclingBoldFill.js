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

function SvgPlasticBottleRecyclingBoldFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7.56 12A1.92 1.92 0 007 13.36v1.28A1.92 1.92 0 007.56 16h8.88a1.92 1.92 0 00.56-1.36v-1.28a1.92 1.92 0 00-.56-1.36zM13.67.7A.7.7 0 0013 0h-2a.7.7 0 00-.7.7V2h3.34zM7.56 18A1.92 1.92 0 007 19.36v1.21A2.43 2.43 0 009.43 23a2.39 2.39 0 001.08-.26 3.39 3.39 0 013 0 2.39 2.39 0 001.08.26A2.43 2.43 0 0017 20.57v-1.21a1.92 1.92 0 00-.56-1.36zm7.88-12.79L14 4h-4L8.55 5.23A4.54 4.54 0 007 8.64 1.92 1.92 0 007.56 10h8.88A1.92 1.92 0 0017 8.64a4.54 4.54 0 00-1.56-3.43z"
  }));
}

var _default = SvgPlasticBottleRecyclingBoldFill;
exports.default = _default;