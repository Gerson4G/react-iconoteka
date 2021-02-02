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

function SvgOfficeChairLightLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18.12 19.5h-4.87v-5.56l6.57-.59-.26-1.35a1.2 1.2 0 00-1.18-1h-3.27l.73-2a1.5 1.5 0 00-1.41-2H9.14L8 2.89A1.2 1.2 0 006.88 2H5.45l1.76 9.91A2.8 2.8 0 0010 14.22h.25l2.5-.22v5.5H7.88a1.25 1.25 0 101.24 1.25 1.23 1.23 0 00-.27-.75h8.3a1.23 1.23 0 00-.27.75 1.25 1.25 0 101.24-1.25zm-3.69-12a1 1 0 01.82.43 1 1 0 01.12.91L14.58 11h-4.37l-.94-3.5zm-7.55-5a.71.71 0 01.68.5l1.06 4H6.85l-.8-4.5zm3.29 11.21H10a2.3 2.3 0 01-2.26-1.9L6.93 7.5h1.83l1 3.63.1.37h8.55a.7.7 0 01.69.57l.16.83zm-1.55 7a.75.75 0 01-.74.75.75.75 0 110-1.5.75.75 0 01.74.79zm9.5.75a.75.75 0 010-1.5.75.75 0 110 1.5z"
  }));
}

var _default = SvgOfficeChairLightLine;
exports.default = _default;