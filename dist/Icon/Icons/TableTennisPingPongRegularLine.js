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

function SvgTableTennisPingPongRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M8 5a3 3 0 10-3 3 3 3 0 003-3zM5 7a2 2 0 112-2 2 2 0 01-2 2zm15.07.29A5.79 5.79 0 0015.9 5.5a8.14 8.14 0 00-5.6 2.62 6.2 6.2 0 00-1.37 7.59 2 2 0 01-.34 2.36L5.4 21.26l.7.71 3.19-3.19a2 2 0 012.33-.36 6 6 0 002.91.77 6.7 6.7 0 004.72-2.12c2.93-2.93 3.68-6.92.82-9.78zm-1.53 9.07a5.67 5.67 0 01-4 1.83 5.28 5.28 0 01-3.72-1.63 5.25 5.25 0 01-1.63-3.7 5.65 5.65 0 011.83-4A7.11 7.11 0 0115.9 6.5 4.79 4.79 0 0119.37 8c2.63 2.6 1.46 6.07-.83 8.36z"
  }));
}

var _default = SvgTableTennisPingPongRegularLine;
exports.default = _default;