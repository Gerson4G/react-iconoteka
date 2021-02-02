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

function SvgBeachVacationUmbrellaLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12.25 11.94l9.54-2.56A11 11 0 0011.81 2a9.72 9.72 0 00-2.43.32c-5.09 1.4-8.14 6.74-7.24 12.32l5.1-1.36 4.53-1.22 2.1 7.85h-.9A20.07 20.07 0 004 22h17.94a20 20 0 00-7.55-2.06zm-2.74-9.1a1.74 1.74 0 01.49-.06c2 0 4.58 3.24 6.09 7.62l-8.46 2.26c-.98-5.01-.18-9.27 1.88-9.82zM21.12 9l-4.59 1.23c-1.39-4-3.56-7-5.6-7.68.3 0 .59-.06.88-.06A10.43 10.43 0 0121.12 9zM2.56 14A10.23 10.23 0 018.14 3.34c-1.4 1.64-1.81 5.25-1 9.44zm3.9 7.49a19.51 19.51 0 0113 0z"
  }));
}

var _default = SvgBeachVacationUmbrellaLightLine;
exports.default = _default;