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

function SvgFitnessCenterGymSportDumbbellRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.9 7.76L16.24 2.1l-1.41 1.41-1.42-1.41-2.12 2.12 3.18 3.18-7.07 7.07-3.18-3.18-2.12 2.12 1.41 1.42-1.41 1.41 5.66 5.66 1.41-1.41 1.42 1.41 2.12-2.12-3.18-3.18 7.07-7.07 3.18 3.18 2.12-2.12-1.41-1.42zm-5.66-4.25l4.25 4.25-.71.7-4.24-4.24zm-8.48 17l-4.25-4.27.71-.7 4.24 4.24zm3.53-.71l-.7.71-6.37-6.39-.71-.71.71-.7zm-2.47-3.91l-.71-.71 7.07-7.07.71.71zm11.67-5.3l-.71.7-7.07-7.07.7-.71 6.37 6.37z"
  }));
}

var _default = SvgFitnessCenterGymSportDumbbellRegularLine;
exports.default = _default;