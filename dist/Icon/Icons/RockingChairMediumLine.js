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

function SvgRockingChairMediumLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.48 16.94a14.49 14.49 0 01-4.21 2.56L15.79 14H19v-2.93a1.74 1.74 0 00-1.73-1.74H16V8a3 3 0 00-3-3H8.55l-.73-2.72A1.73 1.73 0 006.15 1H3.44l1.78 10.11A3.5 3.5 0 008.31 14l-1.49 5.53a14.35 14.35 0 01-4.3-2.59l-1 1.14a15.94 15.94 0 0020.94 0zM13 6.5A1.51 1.51 0 0114.47 8v1.33H9.71L9 6.5zm-6.82-4a.23.23 0 01.22.17L7 5H5.67l-.44-2.5zm.55 8.35l-.8-4.35H7.4l.86 3.22.3 1.11h8.71a.23.23 0 01.23.24v1.43H8.67a2 2 0 01-1.97-1.65zM8.25 20l1.6-6h4.39l1.6 6a14.3 14.3 0 01-3.84.5 14.44 14.44 0 01-3.75-.5z"
  }));
}

var _default = SvgRockingChairMediumLine;
exports.default = _default;