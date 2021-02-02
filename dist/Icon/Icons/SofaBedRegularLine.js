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

function SvgSofaBedRegularLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.5 11a1.64 1.64 0 00-.5.09V8a3 3 0 00-3-3H6a3 3 0 00-3 3v3.09a1.64 1.64 0 00-.5-.09A1.5 1.5 0 001 12.5V20h1v-2h20v2h1v-7.5a1.5 1.5 0 00-1.5-1.5zM4 8a2 2 0 012-2h12a2 2 0 012 2v5h-1.57l-.53-1.06a1.69 1.69 0 00-1.52-.94h-1.69a1.68 1.68 0 00-1.52.94L12.64 13h-1.28l-.53-1.06A1.68 1.68 0 009.31 11H7.62a1.69 1.69 0 00-1.52.94L5.57 13H4zm13.31 5h-3.56l.31-.61a.7.7 0 01.63-.39h1.69a.7.7 0 01.63.39zm-7.06 0H6.69l.3-.61a.7.7 0 01.63-.39h1.69a.7.7 0 01.63.39zM2 17v-4.5a.5.5 0 011 0V14h18v-1.5a.5.5 0 011 0V17z"
  }));
}

var _default = SvgSofaBedRegularLine;
exports.default = _default;