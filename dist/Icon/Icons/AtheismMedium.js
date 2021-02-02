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

function SvgAtheismMedium(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Hot 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18.87 12c2-2 2.93-4 2.22-5.25-.58-1-2.15-1.32-4.2-1q.2.71.33 1.47c1.46-.21 2.39 0 2.57.29s-.37 1.87-2.14 3.61v1.79c1.75 1.74 2.38 3.17 2.13 3.6-.39.67-4.07.75-9.13-2.18A22.28 22.28 0 018.54 13a13.33 13.33 0 00-1.14 1 24.23 24.23 0 002.51 1.65c5 2.9 10 3.63 11.18 1.63C21.8 16 20.86 14 18.87 12zM5.24 9.87c-.91-1.16-1.22-2-1-2.37s1.81-.61 4.2 0c.25-.16.49-.32.75-.47l.81-.38C10.58 4.26 11.51 3 12 3c.78 0 2.68 3.16 2.68 9a24.69 24.69 0 01-.13 2.53A15.16 15.16 0 0016 15a26.2 26.2 0 00.17-3c0-5.8-1.87-10.5-4.18-10.5-1.43 0-2.68 1.81-3.43 4.55-2.75-.71-4.95-.54-5.66.7-.58 1-.07 2.52 1.22 4.15.36-.35.73-.69 1.12-1.03zM12 21c-.49 0-1.43-1.26-2.06-3.66-.26-.14-.53-.27-.78-.42l-.77-.47c-2.38.65-3.94.47-4.18.05-.39-.68 1.39-3.9 6.45-6.82a24.09 24.09 0 012.25-1.15c-.09-.56-.2-1-.31-1.5a24.15 24.15 0 00-2.69 1.35c-5 2.9-8.16 6.87-7 8.87.71 1.23 2.91 1.41 5.66.7.75 2.74 2 4.55 3.43 4.55 1.17 0 2.22-1.2 3-3.14-.48-.12-1-.27-1.44-.44C13 20.28 12.37 21 12 21z"
  }));
}

var _default = SvgAtheismMedium;
exports.default = _default;