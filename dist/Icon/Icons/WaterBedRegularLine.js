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

function SvgWaterBedRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20 12V7a2 2 0 00-2-2H6a2 2 0 00-2 2v5H2v8h20v-8zM5 7a1 1 0 011-1h12a1 1 0 011 1v5h-.78l-.53-1.06a1.7 1.7 0 00-1.52-.94h-1.7a1.7 1.7 0 00-1.52.94L12.42 12h-.84l-.53-1.06A1.7 1.7 0 009.53 10h-1.7a1.7 1.7 0 00-1.52.94L5.78 12H5zm12.1 5h-3.56l.31-.61a.7.7 0 01.62-.39h1.7a.67.67 0 01.62.39zm-6.64 0H6.9l.31-.61a.67.67 0 01.62-.39h1.7a.7.7 0 01.62.39zM21 19H3v-6h18zm-10.91-2.59a3.36 3.36 0 001.91.64 3.36 3.36 0 001.91-.64 2.18 2.18 0 012.68 0 3.36 3.36 0 001.91.64v-1a2.33 2.33 0 01-1.34-.46 3.17 3.17 0 00-3.82 0 2.16 2.16 0 01-2.68 0 3.18 3.18 0 00-3.82 0 2.33 2.33 0 01-1.34.46v1a3.36 3.36 0 001.91-.64 2.16 2.16 0 012.68 0z"
  }));
}

var _default = SvgWaterBedRegularLine;
exports.default = _default;