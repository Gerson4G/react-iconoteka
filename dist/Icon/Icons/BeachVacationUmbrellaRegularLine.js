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

function SvgBeachVacationUmbrellaRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12.49 11.87l9.3-2.49A11 11 0 0011.81 2a9.72 9.72 0 00-2.43.32c-5.09 1.4-8.14 6.74-7.24 12.32l5.1-1.36 4.28-1.15L13.37 19H13a15.45 15.45 0 00-9 3h17.94a15.81 15.81 0 00-7.52-2.92zM8 12c-.8-4.66 0-8.29 1.61-8.71a1.12 1.12 0 01.32 0c1.59 0 3.92 2.68 5.43 6.78l-3 .8zm12.41-3.29l-4 1.09c-1.25-3.4-3-5.82-4.78-6.75h.22a9.83 9.83 0 018.56 5.66zM3 13.38a9.74 9.74 0 014.79-9.31c-1 1.68-1.35 4.68-.74 8.22zM7.9 21a13.38 13.38 0 0110.15 0z"
  }));
}

var _default = SvgBeachVacationUmbrellaRegularLine;
exports.default = _default;