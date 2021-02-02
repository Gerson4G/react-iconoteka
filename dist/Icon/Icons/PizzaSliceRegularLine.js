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

function SvgPizzaSliceRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M10.7 11.08a1.42 1.42 0 00-.58-2.72 1.28 1.28 0 00-.57.13 1.42 1.42 0 00.57 2.71 1.47 1.47 0 00.58-.12zM9.56 10a.62.62 0 01.31-.82.57.57 0 01.25-.06.63.63 0 01.57.37.62.62 0 01-.32.82.53.53 0 01-.25.05.62.62 0 01-.56-.36zm5 2.55a1.42 1.42 0 00.8-2.55 1.45 1.45 0 00-.84-.27 1.42 1.42 0 000 2.84zM14 10.81a.6.6 0 01.5-.26.63.63 0 01.37.12.6.6 0 01.24.4.57.57 0 01-.11.46.59.59 0 01-.5.26.58.58 0 01-.36-.12.62.62 0 01-.25-.4.57.57 0 01.11-.46zm-2.9 2.06a1.41 1.41 0 10.84.27 1.45 1.45 0 00-.82-.27zm.5 1.78a.61.61 0 01-.5.26.58.58 0 01-.36-.12.61.61 0 01-.25-.41.59.59 0 01.11-.46.62.62 0 01.5-.25.63.63 0 01.37.12.62.62 0 01.13.86zM22.2 5l-.86-.5a18.53 18.53 0 00-18.59 0l-.87.5L12 22.6l8.23-14.18zM12 20.6L5.22 8.79a13.89 13.89 0 0113.64 0zM12 6a14.9 14.9 0 00-7.27 1.93L3.25 5.37a17.5 17.5 0 0117.59 0l-1.48 2.56A14.94 14.94 0 0012 6z"
  }));
}

var _default = SvgPizzaSliceRegularLine;
exports.default = _default;